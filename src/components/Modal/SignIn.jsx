import { Checkbox } from "antd";
import { useState } from "react";
import { login } from '../../api/authen.api';
import logo from '../../img/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const userData = {
      email: email,
      password: password,
    };

    setIsLoading(true);
    console.log(userData);

    login(userData)
    .then(response => {
      if (response.data.ketqua !== undefined && response.data.ketqua === "Email hoặc mật khẩu không đúng.") {
        toast.error(response.data.ketqua);
      } else {
        console.log('Login successful:', response.data);
        toast.success('Login successful');
        setTimeout(() => {
          navigate('/home');
        }, 2500);
      }
    })
    .catch(error => {
      console.error('Login failed:', error);
      toast.error('Login failed');
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

                        <div className="form-outline ">
                            <label className="label-title">Password</label>
                            <input type="password" name="password" className="inp" 
                            value={password}
                            onChange={event => setPassword(event.target.value)}/>
                        </div>

                        <div className="remember mb-5 ">
                            <Checkbox>Remember me</Checkbox>
                            <a href="#" className="fff"> Forgot your password? </a>
                        </div> 

                        <div className="d-flex justify-content-center pt-5">
                            <button type="button" className="btn-signup" onClick={handleSignIn}>
                            Sign In
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

export default SignIn;
