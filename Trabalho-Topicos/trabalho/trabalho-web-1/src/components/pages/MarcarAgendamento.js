import AgendaForm from '../agenda/AgendaForm'
import styles from './MarcarAgendamento.module.css'

function MarcarAgendamento(){
    return (
        <div className={styles.marcarAgendamento_container}>
            <h1>Agendar</h1>
            <p>Crie seu agendamento</p>
            <AgendaForm btnText="Criar Agendamento"/>
        </div>
    )
}
export default MarcarAgendamento