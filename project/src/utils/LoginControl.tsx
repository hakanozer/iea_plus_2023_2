import React from 'react'
import { getUser } from './util'
import { Navigate } from 'react-router-dom'

function LoginControl( props: {page: React.JSX.Element} ) {

  const user = getUser()

  return (
    user === null
    ?
      <>
        {props.page}
      </>
    :
      <Navigate to={'/home'} replace={true} />
  )

}

export default LoginControl