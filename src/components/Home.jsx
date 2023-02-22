import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

const Home = () => {

    const {user, logOut} = useUserAuth();
    console.log(user)

    const handleLogOut = async() => {
        try{
            await logOut();
        }catch(err){
            console.log(err.message);
        }
    }


    return (
        <div className='container'>

            <h1 className='text-center my-3'>HOME</h1>

            <div className="row mt-5">
                <img src="https://www.pv-tech.org/wp-content/uploads/2021/02/SepangSPV-36_Malaysia_SEDA.jpg" alt="" />
            </div>

            <button type="" class="btn btn-primary btn-rounded mt-3" onClick = {handleLogOut}>Log Out</button>


        </div>
    )
}

export default Home