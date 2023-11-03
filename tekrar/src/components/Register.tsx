import React, { useState } from 'react'

function Register() {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMessage, setErrMessage] = useState('')

  const registerFnc = (evt:React.FormEvent) => {
    evt.preventDefault()
    console.log(name,surname,email,password)
  }

  return (
    <>
        <center>
          <i className="bi bi-person-down" style={{fontSize: '3rem'}}></i>
          <h2>Register</h2>
          <div className='text-danger mb-3'>{errMessage}</div>
        </center>
        <form onSubmit={registerFnc}>
            <div className='mb-3'>
                <input minLength={2} maxLength={20} required onChange={(evt) => setName(evt.target.value)} placeholder='Name' className='form-control' />
            </div>
            <div className='mb-3'>
                <input minLength={2} maxLength={20} required onChange={(evt) => setSurname(evt.target.value)} placeholder='Surname' className='form-control' />
            </div>
            <div className='mb-3'>
                <input minLength={5} maxLength={50} required onChange={(evt) => setEmail(evt.target.value)} type='email' placeholder='E-mail' className='form-control' />
            </div>
            <div className='mb-3'>
                <input minLength={3} maxLength={10} required onChange={(evt) => setPassword(evt.target.value)} type='password' placeholder='Password' className='form-control' />
            </div>
            <button className='btn btn-danger'>Register</button>
        </form>
    </>
  )
}

export default Register