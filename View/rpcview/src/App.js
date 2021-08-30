import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Medicamento from './components/Medicamento';
import TipoMedicamento from './components/TipoMedicamento';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Medicamento />
          </Route>
          <Route exact path='/medicamentos/'>
            <Medicamento />
          </Route>
          <Route exact path='/tipomedicamentos/'>
            <TipoMedicamento />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
