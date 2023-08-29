import { useState } from "react";
import { login } from '../../api/authen.api';
import logo from '../../img/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from "../../utils/axiosInstance";



const ForgotPw = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');


  const handleForgotPw = () => {
    const userData = {
      email: email,
    };

    setIsLoading(true);
    console.log(userData);

    login(userData)
    
    axiosInstance('resetpass', 'POST', userData)
    .then(response => {
      console.log('Reset password request sent successfully:', response.data);
      toast.success('Password reset successfully!');
      toast.success('Please check your email for the new password!');
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


                        <div className="remember mb-5 ">
                            <a href="/signin" className="fff"> SignIn? </a>
                        </div> 

                        <div className="d-flex justify-content-center pt-5">
                            <button type="button" className="btn-signup" onClick={handleForgotPw}>
                            Send PassWord
                            </button>
                        </div>

                        <p
                            className="text-center mt-3"
                            style={{ fontSize: "20px" }}
                        >
                            Don’t have an account?{" "}
                            <a href="/signup" className="fw-bold a">
                            Sign Up
                            </a>
                        </p>
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

export default ForgotPw;
