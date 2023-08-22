import { useState } from 'react';
import './SignUp.css';
import { register } from '../../api/authen.api';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    
    console.log(userData);

    register(userData)
      .then(response => {
        console.log('Sign up successful:', response.data);
      })
      .catch(error => {
        console.error('Sign up failed:', error);
      });
  };

  return (
    <>
      <section
        className="vh-100 bg-image"
       >
        <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius:'15px'}}>
                  <div className="card-body p-5">
                    <h2 className="text-center mb-2 title">
                      MangaSocial
                    </h2>
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
                          onChange={event => setName(event.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="label-title" >
                          Email
                        </label>
                        <input
                          type="email"
                          className="inp"
                          value={email}
                          onChange={event => setEmail(event.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="label-title">
                          Password
                        </label>
                        <input
                          type="password"
                          className="inp"
                          value={password}
                          onChange={event => setPassword(event.target.value)}
                        />
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
    </>
  );
};

export default SignUp;
