import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { getUser } from '../utils/util'
import { IUser } from '../models/IUser'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'

function Profile() {

  // for redux
  const likesArr = useSelector( (item:StateType) => item.LikesReducer )

  // UseRef
  const firstNameRef = useRef<HTMLInputElement>(null)
  const setLastNameRef = useRef<HTMLInputElement>(null)

  const [item, setItem] = useState<IUser>()
  useEffect(() => {
    const user = getUser()
    if (user) {
        setItem(user)
        console.log(user)
        setTimeout(() => {
            firstNameRef.current?.focus()
        }, 10);
    }
  }, [])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const sendForm = (evt: FormEvent) => {
    evt.preventDefault()
    if (firstName === '') {
        firstNameRef.current?.focus()
        //firstNameRef.current!.style.backgroundColor = 'red'
    }else if (lastName === '') {
        setLastNameRef.current?.focus()
    }else {

    }
  }

  return (
    <>
        { item && 
            <>
                <div className='row'>
                    <div className='col-sm-6'>
                        <center className='mt-3 mb-3'>
                            <img src={item.image} style={{width: 120, borderRadius: 60, backgroundColor: '#e7e7e7'}}></img>
                            <h4>{'Likes Count: ' + likesArr.length}</h4>
                        </center>
                        <form onSubmit={sendForm}>
                            <div className='mb-3'>
                                <input ref={firstNameRef} placeholder='First Name' onChange={(evt) => setFirstName(evt.target.value)} defaultValue={item.firstName} className='form-control'/>
                            </div>
                            <div className='mb-3'>
                                <input ref={setLastNameRef} placeholder='Last Name' onChange={(evt) => setLastName(evt.target.value)} defaultValue={item.lastName} className='form-control'/>
                            </div>
                            <div className='mb-3'>
                                <input  defaultValue={item.email}  placeholder='E-Mail' className='form-control'/>
                            </div>
                            <div className='mb-3'>
                                <input  defaultValue={item.gender}  placeholder='Gender' className='form-control'/>
                            </div>
                            <button className='btn btn-success'>Send</button>
                        </form>
                    </div>
                    <div className='col-sm-6'></div>
                </div>
            </>
        }
    </>
  )
}

export default Profile