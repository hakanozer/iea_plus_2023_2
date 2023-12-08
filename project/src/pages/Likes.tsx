import React, { useEffect, useState } from 'react'
import { likesArr } from '../utils/util'
import { singleProduct } from '../api'
import { IProduct } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'

function Likes() {

  // for redux
  const arr = useSelector( (item:StateType) => item.LikesReducer )
  
  const [proArr, setProArr] = useState<IProduct[]>([])
  const arrPro:IProduct[] = []
  useEffect( () => {
    
    arr.forEach((id, index) => {
      singleProduct(""+id).then(res => {
        const dt = res.data
        if (dt) {
          arrPro.push(dt)
          setTimeout(() => {
            setProArr(arrPro)
          }, 100);
        }
      })
    })
  }, [])

  return (
    <>
        <h2>Likes</h2>
        <div className='row'>
        { proArr.map((item, index) => 
          <ProductItem item={item} key={index} />
        )}
      </div>
    </>
  )
}

export default Likes