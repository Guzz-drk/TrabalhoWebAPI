import styles from './AgendaList.module.css'
import Moment from 'moment';

const AgendaList = (props) =>(
  <div className={styles.list_control}>
      <h4 className={styles.til}>Agenda</h4>
      <button type="button" className="btn btn-light btn-sm" onClick={props.inserir}>Inserir</button>
      <table className="table table-striped" style={{marginTop: '1em'}}>
          <thead>
              <tr>
                  <th>Index</th>
                  <th>Cliente</th>
                  <th>Data Hora Inicio</th>
                  <th>Data Hora Final</th>
                  <th>Serviço</th>
                  <th>Valor</th>
                  <th>Operações</th>
              </tr>
          </thead>
          <tbody>
              {props.agendas.length > 0 ?(
                  props.agendas.map((o, index) => (
                      <tr key={index}>
                          <td>{index}</td> 
                          <td>{o.cliente}</td>
                          <td>{Moment(o.dataHoraInicio).format('DD/MM/YYYY HH:mm')}</td>
                          <td>{Moment(o.dataHoraFinal).format('DD/MM/YYYY HH:mm')}</td>
                          <td>{o.servico}</td>
                          <td>{new Intl.NumberFormat("pt-BR", {
                              style: "currency", 
                              currency: "BRL"})
                          .format(o.valorFinal)}</td>
                          <td>
                              <button onClick={() => props.editar(o._id)} className="btn btn-light btn-sm">Editar</button>
                              <button onClick={() => props.excluir(o._id)} className="btn btn-light btn-sm">Excluir</button>
                          </td>
                      </tr>
                  ))
              ):(
                  <tr>
                      <td colSpan={3}>Nenhum Colaborador</td>
                  </tr>
              )}
          </tbody>
      </table>
  </div>
);
export default AgendaList;