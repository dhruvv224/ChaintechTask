import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>


      </Routes>
    </div>
  );
}

export default App;
