import React from "react";
const AgendaForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setAgenda({ ...props.agenda, [name]: value });
  };
  return (
    <form style={{marginLeft: '31em', marginTop: '2em'}}>
      <div className="form-group">
        <label style={{fontWeight: 'bold', marginBottom: '.5em'}}>Cliente</label>
        <input
          className="form-control"
          type="text"
          name="cliente"
          value={props.agenda.cliente}
          onChange={handleInputChange}
          placeholder="Pedro"
        />
      </div>
      <div className="form-group">
        <label style={{fontWeight: 'bold', marginBottom: '.5em'}}>Data Hora Inicio</label>
        <input
          className="form-control"
          type="datetime-local"
          name="dataHoraInicio"
          value={props.agenda.dataHoraInicio}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label style={{fontWeight: 'bold', marginBottom: '.5em'}}>Data Hora Final</label>
        <input
          className="form-control"
          type="datetime-local"
          name="dataHoraFinal"
          value={props.agenda.dataHoraFinal}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label style={{fontWeight: 'bold', marginBottom: '.5em'}}>Serviço</label>
        <input
          className="form-control"
          type="text"
          name="servico"
          value={props.agenda.servico}
          onChange={handleInputChange}
          placeholder="Corte Cabelo/Barba"
        />
      </div>
      <div className="form-group">
        <label style={{fontWeight: 'bold', marginBottom: '.5em'}}>Valor</label>
        <input
          className="form-control"
          type="number"
          name="valorFinal"
          value={props.agenda.valorFinal}
          onChange={handleInputChange}
          placeholder="25"
        />
      </div>
      <div style={{display: 'grid', marginTop: '.5em'}}>
        <button type="button" onClick={props.salvar} style={{backgroundColor: "#008080", color: "white", border: 'none'}}>Salvar</button>
      </div>
      <div style={{display: 'grid', marginTop:'.5em'}}>
        <button type="button" onClick={props.cancelar} style={{backgroundColor: "#008080", color: "white", border: 'none'}}>Cancelar</button>
      </div>
    </form>
  );
};
export default AgendaForm;
