import React, { useEffect, useRef, useState } from 'react'
import { login as userLogin } from '../service'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const emailRef = useRef<HTMLInputElement>(null)  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMessage, setErrMessage] = useState('')
  
  const sendFnc = (evt: React.FormEvent) => {
    evt.preventDefault()
    setErrMessage('')
    userLogin(email, password).then(res => {
      const dt = res.data
      if (dt) {
        const stData = JSON.stringify(dt)
        localStorage.setItem('user', stData)
        navigate('/home', {replace: true})
      }
    }).catch(err => {
      console.log(err.message)
      setErrMessage('Username or Password Fail!')
    })
  }

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  return (
    <>
        <center>
            <i className="bi bi-person-plus" style={{fontSize: '3rem'}}></i>
            <h2>Login</h2>
            <div className='text-danger mb-3'>{errMessage}</div>
        </center>
        <form onSubmit={sendFnc}>
            <div className='mb-3'>
                <input minLength={5} maxLength={100} required type='text' onChange={(evt) => setEmail(evt.target.value)} ref={emailRef} placeholder='E-Mail' className='form-control' />
            </div>
            <div className='mb-3'>
                <input minLength={3} maxLength={10} required type='password' onChange={(evt) => setPassword(evt.target.value)} placeholder='Password' className='form-control' />
            </div>
            <button className='btn btn-success'>Login</button>
        </form>
    </>
  )
}

export default Login