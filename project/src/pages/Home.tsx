import React, { useEffect, useState } from 'react'
import { products } from '../api'
import { toast } from 'react-toastify'
import { IProduct } from '../models/IProducts'
import ProductItem from '../components/ProductItem'

function Home() {

  const [proArr, setProArr] = useState<IProduct[]>([])

  useEffect(()=> {
    allProducts()
  }, [])

  const allProducts = () => {
    products().then(res => {
      const dt = res.data
      if (dt) {
        setProArr(dt.products)
      }
    }).catch(err => {
      toast.error(err.message)
    })
  }



  return (
    <>
      <h2>Products</h2>
      <div className='row'>
        { proArr.map((item, index) => 
          <ProductItem item={item} key={index} />
        )}
      </div>
    </>
  )
}

export default Home