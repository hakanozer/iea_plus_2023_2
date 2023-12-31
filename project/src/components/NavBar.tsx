import React, { useEffect } from 'react'
import { IUser } from '../models/IUser'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'
import { LikesAction } from '../useRedux/actions/LikesAction'
import { LikesType } from '../useRedux/types/LikesType'

function NavBar( props: {user: IUser} ) {

  // for redux
  const likesArr = useSelector( (item:StateType) => item.LikesReducer )
  const dispatch = useDispatch()
  useEffect(() => {
    const sendItem: LikesAction = {
        type: LikesType.LIKE_ADD,
        payload: []
    }
    dispatch(sendItem)
  }, [])

  const navigate = useNavigate()  
  const exit = () => {
    localStorage.removeItem('user')
    navigate('/', {replace: true})
  }  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">E-Commerce</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/home'}><i className="bi bi-house"></i> Home</NavLink>    
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/categories'}><i className="bi bi-tag"></i> Categories</NavLink>    
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/users'}><i className="bi bi-people"></i> Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/likes'}><i className="bi bi-suit-heart"></i> Likes ({likesArr.length})</NavLink>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person"></i> Profile
                </a>
                <ul className="dropdown-menu">
                    <li><NavLink to={'/profile'} className={'dropdown-item'}>Profile</NavLink></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" role='button' onClick={exit}>Logout</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">{props.user.firstName + ' ' + props.user.lastName}</a>
                </li>
            </ul>
            <form action='/productSearch' className="d-flex" role="search">
                <input name='q' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
  )
}

export default NavBar