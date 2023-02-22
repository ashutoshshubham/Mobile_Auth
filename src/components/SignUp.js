import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      // navigate('/login')
      navigate('/phonesignup')
    } catch (err) {
      setError(err.message)
    }
  }



  return (
    <div className='container'>

      <div className="row mt-5">
        <div className="col-md-6">
          <img src="https://theuniqueacademy.co.in/assets/images/test.png" alt="" style={{ width: '100%' }} />
        </div>

        <div className="col-md-6 my-auto">


          <form onSubmit={handleSubmit}>

            <div className="card">

              <div className="card-body">
                <h1 className="card-title text-center">SignUp</h1>
                <div className="">

                  <div className='text-center bg-danger text-white fs-4'>{error}</div>

                  <label className="form-label" for="form12">Enter Email</label>
                  <input type="email" id="form12" className="form-control mb-3" onChange={(e) => setEmail(e.target.value)} />

                  <label className="form-label" for="form12">Password</label>
                  <input type="password" id="form12" className="form-control mb-3" onChange={(e) => {
                    setPassword(e.target.value)
                  }} />

                  <div className="text-center">
                    <button type="submit" className="btn btn-success btn-rounded w-100" data-mdb-ripple-color="dark">Submit</button>
                  </div>

                  <p className='mt-4 text-center'>Already have an account? <Link to='/login'>Login</Link></p>


                </div>
              </div>
            </div>

          </form>

        </div>

      </div>

      {/* </div> */}

    </div>
  )
}

export default SignUp