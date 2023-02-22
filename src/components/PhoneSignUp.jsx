import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const PhoneSignUp = () => {

    const [number, setNumber] = useState("")

    const [error, setError] = useState("");

    const { setUpRecaptcha } = useUserAuth("")

    const [otp, setOtp] = useState("")

    const [flag, setFlag] = useState(false)

    const [confirmObj, setConfirmObj] = useState("")

    const navigate = useNavigate();

    const getOtp = async (e) => {
        e.preventDefault();
        setError("");
        if (number === "" || number === undefined) {
            return setError("Please Enter valid Number");
        }
        try {
            const response = await setUpRecaptcha(number);
            console.log(response)
            setConfirmObj(response)
            setFlag(true)

        } catch (err) {
            setError(err.message)
        }
        console.log(number)
    }

    const verifyOtp = async(e) => {
        e.preventDefault();
        console.log(otp);
        if (otp === "" || otp === null){
            return;
        }
        try{
            setError("");
            await confirmObj.confirm(otp);
            navigate("/home");
        }catch(err){
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

                    <form onSubmit={getOtp} style={{display: !flag ? "block" : "none"}}>

                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title text-center">Phone Authentication</h1>

                                <div className='text-center bg-danger text-white fs-4'>{error}</div>

                                {/* <div className="">

                                    <label className="form-label" for="form12">Enter Email</label>
                                    <input type="text" id="form12" className="form-control mb-3" />

                                    <label className="form-label" for="form12">Password</label>
                                    <input type="password" id="form12" className="form-control mb-3" />

                                    <div className="text-center mb-3">
                                        <button type="submit" className="btn btn-primary btn-rounded w-100 " data-mdb-ripple-color="dark">Login</button>
                                    </div>

                                    <h5 className='text-center mb-3'>OR</h5>

                                    <div className="text-center mb-3">
                                        <button type="submit" className="btn btn-primary btn-rounded w-100 " data-mdb-ripple-color="dark">LogIn with Google</button>
                                    </div>

                                    <h5 className='text-center mb-3'>OR</h5>


                                    <Link to='/phonesignup'>
                                        <div className="text-center mb-3">
                                            <button type="submit" className="btn btn-primary btn-rounded w-100 " data-mdb-ripple-color="dark">login with phone</button>
                                        </div>
                                    </Link>

                                    <p className='mt-4 text-center'>Don't have an account? <Link to='/signup'>SignUp</Link></p>





                                </div> */}

                                <PhoneInput defaultCountry='IN'
                                    value={number}
                                    onChange={setNumber}
                                    placeholder="Enter Phone Number" />

                                <div id="recaptcha-container" className='mt-3'></div>

                            </div>

                            <div className="d-flex justify-content-center mb-4">
                                <button type="submit" class="btn btn-success btn-rounded mx-2">Send OTP</button>

                                <Link to='/signup'>

                                    <button type="button" class="btn btn-danger btn-rounded mx-2">Cancel</button>

                                </Link></div>


                        </div>

                    </form>

                    <form onSubmit={verifyOtp} style={{display: flag ? "block" : "none"}}>

                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title text-center">Phone Authentication</h1>

                                <div className='text-center bg-danger text-white fs-4'>{error}</div>

                                <div className="">
                                    <label className="form-label" for="form12">Enter OTP</label>
                                    <input type="text" id="form12" className="form-control" onChange={(e) => {setOtp(e.target.value)}}/>
                                </div>

                             

                            </div>

                            <div className="d-flex justify-content-center mb-4">
                                <button type="submit" class="btn btn-success btn-rounded mx-2">Verify OTP</button>

                                <Link to='/signup'>

                                    <button type="button" class="btn btn-danger btn-rounded mx-2">Cancel</button>

                                </Link></div>


                        </div>

                    </form>



                </div>

            </div>

        </div>

    )
}

export default PhoneSignUp