import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

function LoginRegister() {
  return (
    <>
        <div className='bar'></div>
        <div className='row'>
            <div className='col-sm-6'>
                <Login />
            </div>
            <div className='col-sm-6'>
                <Register />
            </div>
        </div>
    </>
  )
}

export default LoginRegister