import './SignUp.css'

const SignUp = () => {
  return (
    <>
      <section
        class="vh-100 bg-image"
       >
        <div class="mask d-flex align-items-center h-100">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{borderRadius:'15px'}}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      MangaSocial
                    </h2>

                    <form>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">
                          Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">
                          Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn-signup"
                        >
                          Sign Up
                        </button>
                      </div>

                      <p class="text-center mt-3">
                        Already have an account?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u>Sign In</u>
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
