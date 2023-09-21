import { useEffect, useState } from "react";
import { login } from '../../api/authen.api';
import logo from '../../img/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";



const ChangePw = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [new_password, setNew_password] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState(false);


  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        setUserLoggedIn(true);
        const user = JSON.parse(savedUser);
        const email = user.email;
        setEmail(email);
    } else {
        setUserLoggedIn(false);
        navigate('/signin'); 
    }
}, [navigate]);


  const handleChangePw = () => {
    const userData = {
      email: email,
      password: password,
      new_password: new_password
    };

    setIsLoading(true);
    console.log(userData);

    login(userData)
    
    axiosInstance('change_password', 'POST', userData)
    .then(response => {
      console.log('Rsuccessfully:', response.data);
      toast.success('Password reset successfully!');
      localStorage.removeItem('user');
      setTimeout(() => {
        navigate('/signin');
      }, 2500);
    })
    .catch(error => {
      console.error('Password reset request failed:', error);
      toast.error('Password reset request failed');
    })
    .finally(() => {
      setIsLoading(false);
    });
  }


  return (
    <>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <a href="/home" className='title'><img src={logo} alt=""/></a>
                    <p className="text-center titlee mb-5">Welcome Back!</p>
                    <form>
                        <div className="form-outline mb-4">
                            <label className="label-title">Email</label>
                            <input type="email" name="email" className="inp" 
                            value={email}
                            onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="label-title">Password</label>
                            <input type="password" name="password" className="inp" 
                            value={password}
                            onChange={event => setPassword(event.target.value)}/>
                        </div>
                        <div className="form-outline ">
                            <label className="label-title">New Password</label>
                            <input type="password" name="new_password" className="inp" 
                            value={new_password}
                            onChange={event => setNew_password(event.target.value)}/>
                        </div>

                        <div className="d-flex justify-content-center pt-5">
                            <button type="button" className="btn-signup" onClick={handleChangePw}>
                            Change PassWord
                            </button>
                        </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default ChangePw;
