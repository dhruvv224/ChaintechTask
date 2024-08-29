import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage';
import Register from './Components/Register';
import Login from './Components/Login';
import UserPage from './Components/UserPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={<UserPage/>}/>



      </Routes>
    </div>
  );
}

export default App;
