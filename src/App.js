import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Components/Navbar';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/admin' element={<Dashboard/>} />


      
      </Routes>
      
    </div>
  );
}

export default App;
