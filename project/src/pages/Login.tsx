import React, {useState, useEffect} from 'react'
import { userLogin } from '../api'
import { toast } from 'react-toastify';
import { getUser, storeUser } from '../utils/util';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('kminchelle')
  const [password, setPassword] = useState('0lelplR')

  const sendLogin = (evt: React.FormEvent) => {
    evt.preventDefault()
    userLogin(username, password).then( res => {
      const dt = res.data
      if (dt) {
        storeUser(dt)
        toast.success('Login Success!')

        var url = 'home'
        const stUtl = localStorage.getItem('url')
        if (stUtl && stUtl !== '') {
          url = stUtl
        }
        navigate(url, {replace: true})
        
      }
    }).catch(err => {
      toast.error('Username or Password Fail!')
    })
  }

  useEffect(() => {
    const user = getUser()
    if (user) {
      var url = 'home'
      const stUtl = localStorage.getItem('url')
      if (stUtl && stUtl !== '') {
        url = stUtl
      }
      navigate(url, {replace: true})
    }
  }, [])

  return (
    <>
      <div className="row">
        <div className='col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4 col-xxl-4'></div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
          <h2>User Login</h2>
          <form onSubmit={ sendLogin }>
            <div className='mb-3'>
              <input value={username} onChange={(evt) => setUsername(evt.target.value) } placeholder='Username' type='text' className='form-control' />
            </div>
            <div className='mb-3'>
              <input value={password} onChange={(evt) => setPassword(evt.target.value) } placeholder='Password' type='password' className='form-control' />
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