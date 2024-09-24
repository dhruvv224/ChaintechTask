import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage';
import Register from './Components/Register';
import Login from './Components/Login';
import UserPage from './Components/UserPage';
import Api from './Api/Api';
import Memo from './Memo/Memo';
import { DataProvider } from './ContextApi/UseContext';
import MemoExample from './Memo/FilterMemo';
function App() {
  const staticData="this will render"
  return (
    <div>
      <DataProvider>

      
      <Routes>

        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/Api' element={<Api/>}/>
        <Route path='/memo' element={<Memo />}/>
        <Route path='/filtermemo' element={<MemoExample />}/>






      </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
