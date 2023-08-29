import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './components/Modal/SignUp';
import SignIn from './components/Modal/SignIn';
import ForgotPw from './components/Modal/Forgotpw';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/forgotpassword' element={<ForgotPw/>}/>


        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
