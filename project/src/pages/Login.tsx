import React, {useState} from 'react'
import axios from 'axios'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const sendLogin = (evt: React.FormEvent) => {
    evt.preventDefault()
    const url = 'https://dummyjson.com/auth/login'
    const sendObj = {
      username: username,
      password: password
    }
    axios.post(url, sendObj).then( res => {
      const dt = res.data
      if (dt) {
        console.log(dt.token)
      }
    }).catch(err => {
      console.log(err.message)
    })
    
  }

  return (
    <>
      <div className="row">
        <div className='col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4 col-xxl-4'></div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
          <h2>User Login</h2>
          <form onSubmit={ sendLogin }>
            <div className='mb-3'>
              <input onChange={(evt) => setUsername(evt.target.value) } placeholder='Username' type='text' className='form-control' />
            </div>
            <div className='mb-3'>
              <input onChange={(evt) => setPassword(evt.target.value) } placeholder='Password' type='password' className='form-control' />
            </div>
            <button className='btn btn-danger'>Send</button>
          </form>
        </div>
        <div className='col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4 col-xxl-4'></div>
      </div>
    </>
  )
}

export default Login