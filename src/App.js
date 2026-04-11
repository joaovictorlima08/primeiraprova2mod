import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link,Navigate} from 'react-router-dom';
import NovaPage from './nova/components/NovaPage';
import FrutasPage from './fruta/FrutasPage';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to=" /nova"> Nova Fruta</Link>
          <Link to="/frutas">Todas as Frutas</Link>
        </div>
          <Routes>
          <Router path='/' element = {<Navigate to="/nova" replace/>}/>
          <Router path='/novas' element = {<NovaPage/>}/>
          <Router path='/frutas' element = {<FrutasPage/>}/>
      </Routes>
      </Router>
      </div>
  );
}

export default App;
