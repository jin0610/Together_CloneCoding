import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css'; 
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/create_account' element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 메인페이지 : main
// 로그인 : /login
// 회원가입 : /create_account
// 
