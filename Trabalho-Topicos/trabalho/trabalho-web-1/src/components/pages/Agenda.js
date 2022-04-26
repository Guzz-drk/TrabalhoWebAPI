import React, { useState, useEffect, useRef } from "react";
import AgendaList from "../agenda/AgendaList";
import AgendaForm from "../agenda/AgendaForm";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import AgendaSrv from "../../services/AgendaSrv";
import { Toast } from "primereact/toast";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
// import AgendaListFilter from "../agenda/AgendaListFilter";


function Agenda() {
  const toastRef = useRef();
  <Toast ref={toastRef} />;
  
  const [agendas, setAgendas] = useState([]);
  useEffect(() => {
    onClickAtualizar();
  }, []);

  const onClickAtualizar = () => {
    AgendaSrv.listar()
      .then((response) => {
        setAgendas(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Agenda Atualizada",
          life: 3000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };
  // operação inserir
  const initialState = {
    id: null,
    cliente: "",
    dataHoraInicio: "",
    dataHoraFinal: "",
    servico: "",
    valorFinal: "",
  };
  const [agenda, setAgenda] = useState(initialState);
  const [editando, setEditando] = useState(false);
  const inserir = () => {
    setAgenda(initialState);
    setEditando(true);
  };
  const salvar = () => {
    if (agenda._id == null) {// inclussão
      AgendaSrv.incluir(agenda).then((response) => {
        setEditando(false); onClickAtualizar(); 
        toastRef.current.show({severity: "success", summary: "Salvou", life: 2000,});
        }).catch((e) => {
          toastRef.current.show({severity: "error",summary: e.message, life: 4000,});
      });
    } else {// alteração 
      AgendaSrv.alterar(agenda).then((response) => {setEditando(false); onClickAtualizar();
          toastRef.current.show({severity: "success",summary: "Salvou",life: 2000,});
        })
        .catch((e) => {toastRef.current.show({severity: "error",summary: e.message,life: 4000,});
        });
    }
  };
  const cancelar = () => {
    console.log("Cancelou ...");
    setEditando(false);
  };
  const editar = (_id) => {
    setAgenda(agendas.filter((agenda) => agenda._id === _id)[0]);
    setEditando(true);
  };
  
  const excluir = (_id) => {
    confirmDialog({
      message: "Confirma a exclusão?",
      header: "Confirmação",
      icon: "pi pi-question",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      acceptClassName: "p-button-danger",
      accept: () => excluirConfirm(_id),
    });
  };
  const excluirConfirm = (_id) => {
    AgendaSrv.excluir(_id).then((response) => {onClickAtualizar();
        toastRef.current.show({severity: "success", summary: "Excluído", life: 2000});
      })
      .catch((e) => {toastRef.current.show({severity: "error", summary: e.message, life: 4000});
      });
  };
  if (!editando) {
    return (
      <div className="App">
        <ConfirmDialog />
        <AgendaList
          agendas={agendas}
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <AgendaForm
          agenda={agenda}
          setAgenda={setAgenda}
          salvar={salvar}
          cancelar={cancelar}
        />
      </div>
    );
  }
}
export default Agenda;
