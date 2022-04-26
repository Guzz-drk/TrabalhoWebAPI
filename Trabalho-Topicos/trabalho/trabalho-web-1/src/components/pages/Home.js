import styles from './Home.module.css'
import agend from '../../img/web.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao<span>CleanCut</span></h1>
            <p>Gerencie sua Agenda</p>
            <LinkButton to="/agenda" text="Agenda"/>
            <img src={agend} alt="CleanCut"></img>
        </section>
    )
}
export default Home