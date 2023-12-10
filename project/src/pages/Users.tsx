import React, { useEffect, useState } from 'react'
import { allUsers } from '../api'
import { User } from '../models/UsersModel'
import { Helmet } from 'react-helmet'

function Users() {

  const [arr, setArr] = useState<User[]>([])
  const [item, setItem] = useState<User>()

  useEffect(() => {
    allUsers().then(res => {
      setArr(res.data.users)
    })
  }, [])

  const selectRow = (index: number) => {
    const item = arr[index]
    setItem(item)
  }

  const deleteRow = (id: number) => {
    console.log("Delete Row: " + id)
  }


  return (
    <>
      <Helmet>
        <title>E-commerce - Users</title>
        <meta name="description" content="E-commerce - Users"/>
      </Helmet>
      <h2>Users</h2>
      <div className="table-responsive">
      <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Profile</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
      { arr.map((item, index) => 
        <tr className='scale-up-ver-top' key={index} onClick={() => selectRow(index)} role='button' data-bs-toggle="modal" data-bs-target="#exampleModal" >
          <th scope="row">{item.id}</th>
          <td>
            <img src={item.image} className='rounded d-block' style={{maxWidth: 75, }}/>
          </td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
        )}
      </tbody>
    </table>    
    </div> 

    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
          { item &&  
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{item.firstName} {item.lastName}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <center>
                <img src={item.image} className='d-block' style={{width:130,borderWidth:3, borderStyle: 'solid', borderColor: '#bfbfbf',borderRadius:65}}></img>
              </center>
              <hr></hr>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.ip}</p>
            </div>
            <div className="modal-footer">
              <button onClick={() => deleteRow(item.id)}  type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
          }
        </div>
      </div>

    </>
  )
}

export default Users