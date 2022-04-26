import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Agenda from './components/pages/Agenda';
// import MarcarAgendamento from './components/pages/MarcarAgendamento';
import Servico from './components/pages/Servico';


import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
function App() {
  return (
    <Router>
      <Navbar />
        <Container customClass="min-height">
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/agenda" element={<Agenda/>}/>
          {/* <Route exact path="/marcarAgendamento">
            <MarcarAgendamento/>
          </Route> */}
          <Route path="/servico" element={<Servico/>}/>
          </Routes>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
