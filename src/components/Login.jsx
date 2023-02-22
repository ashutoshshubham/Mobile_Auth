import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, googleSignIn } = useUserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email, password);
            navigate('/home')
        } catch (err) {
            setError(err.message)
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        try {
            await googleSignIn();
            navigate('/home')
        } catch (err) {
            setError(err.message)
        }

    }


    return (
        <div className='container'>

            <div className="row mt-5">

                <div className="col-md-6">

                    <img src="https://img.freepik.com/premium-vector/sign-up-concept-illustration-free-vector_269560-9.jpg?w=2000" alt="" style={{ width: '100%' }} />

                </div>

                <div className="col-md-6 my-auto">

                    <form onSubmit={handleSubmit}>

                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title text-center">Login</h1>

                                <div className='text-center bg-danger text-white fs-4'>{error}</div>

                                <div className="">

                                    <label className="form-label" for="form12">Enter Email</label>
                                    <input type="text" id="form12" className="form-control mb-3" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />

                                    <label className="form-label" for="form12">Password</label>
                                    <input type="password" id="form12" className="form-control mb-3" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />

                                    <div className="text-center mb-3">
                                        <button type="submit" className="btn btn-primary btn-rounded w-100 " data-mdb-ripple-color="dark">Login</button>
                                    </div>

                                    <h5 className='text-center mb-3'>OR</h5>

                                    <div className="text-center mb-3">
                                        <button type="submit" className="btn btn-primary btn-rounded w-100 " data-mdb-ripple-color="dark" onClick={handleGoogleSignIn}>LogIn with Google</button>
                                    </div>

                                    <h5 className='text-center mb-3'>OR</h5>


                                    <Link to='/phonesignup'>
                                        <div className="text-center mb-3">
                                            <button type="submit" className="btn btn-primary btn-rounded w-100 " data-mdb-ripple-color="dark">login with phone</button>
                                        </div>
                                    </Link>

                                    <p className='mt-4 text-center'>Don't have an account? <Link to='/signup'>SignUp</Link></p>





                                </div>
                            </div>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    )
}

export default Login