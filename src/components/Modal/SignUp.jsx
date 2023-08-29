import { useState } from 'react';
import './SignUp.css';
import { register } from '../../api/authen.api';
import logo from '../../img/logo.png';
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSignUp = () => {
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    if (!name.trim()) {
      setNameError(true);
      return;
    }
  
    if (!email.trim() || !isEmailValid(email)) {
      setEmailError(true);
      return;
    }
  
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }
  
    if (password.length < 6) {
      setPasswordError(true);
      return;
    }

    const userData = {
      user_name: name,
      email: email,
      password: password,
    };


    setIsLoading(true);
    console.log(userData);
    

    register(userData)
      .then(response => {
        console.log('Sign up successful:', response.data);
        if (response.data.message === "Account or email already exists") {
          toast.error('Email already exists. Please use a different email.');
        } else {
          toast.success('Sign Up Success! Please check your email and confirm.');
        }
      })
      .catch(error => {
        console.error('Sign up failed:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
    {isLoading && (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    )}
      <section
        className="vh-100 bg-image"
       >
        <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius:'15px'}}>
                  <div className="card-body p-5">
                    <a href="/home" className='title'><img src={logo} alt="" /></a>
                    <p className='text-center titlee mb-5'>
                      Welcome Back!
                    </p>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="label-title" >
                          Name
                        </label>
                        <input
                          type="text"
                          className="inp"
                          value={name}
                          onChange={event => {setName(event.target.value);
                            setNameError(false);}
                          }
                        />
                         {nameError && <div className="error">Name is required</div>}
                      </div>

                      <div className="form-outline mb-4">
                        <label className="label-title" >
                          Email
                        </label>
                        <input
                          type="email"
                          className="inp"
                          value={email}
                          onChange={event => {
                            setEmail(event.target.value);
                            setEmailError(false);
                          }}
                        />
                        {emailError && <div className="error">Email is required</div>}
                      </div>

                      <div className="form-outline mb-4">
                        <label className="label-title">
                          Password
                        </label>
                        <input
                          type="password"
                          className="inp"
                          value={password}
                          onChange={(event) => {
                            setPassword(event.target.value);
                            setPasswordError(false); 
                          }}
                        />
                          {passwordError && (
                            <div className="error">Password is required (minimum 6 characters)</div>
                          )}
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button" className="btn-signup" onClick={handleSignUp}>
                          Sign Up
                        </button>
                      </div>

                      <p className="text-center mt-3" style={{fontSize:'20px'}}>
                        Already have an account?{" "}
                        <a href="/signin" className="fw-bold a">
                          Sign In
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

export default SignUp;
