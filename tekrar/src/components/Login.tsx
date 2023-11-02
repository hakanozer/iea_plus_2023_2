import React, { useEffect, useRef, useState } from 'react'

function Login() {

  const emailRef = useRef<HTMLInputElement>(null)  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const sendFnc = (evt: React.FormEvent) => {
    evt.preventDefault()
    console.log(emailRef.current?.value)
    console.log(email, password)
  }

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  return (
    <>
        <center>
            <i className="bi bi-person-plus" style={{fontSize: '3rem'}}></i>
            <h2>Login</h2>
        </center>
        <form onSubmit={sendFnc}>
            <div className='mb-3'>
                <input minLength={5} maxLength={100} required type='email' onChange={(evt) => setEmail(evt.target.value)} ref={emailRef} placeholder='E-Mail' className='form-control' />
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