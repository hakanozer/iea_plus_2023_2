import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { searchProduct } from '../api'
import { IProduct } from '../models/IProducts'
import ProductItem from '../components/ProductItem'

function ProductSearch() {

  const [searchParams] = useSearchParams()
  const [searchStatus, setSearchStatus] = useState(false)
  const [query, setquery] = useState('')

  const navigate = useNavigate()
  const [proArr, setProArr] = useState<IProduct[]>([])

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) {
      setquery(q)
      searchProduct(q).then(res => {
        const arr = res.data.products
        setProArr(arr)
        setSearchStatus(true)
      })
    }else {
      navigate("/home")
    }
  }, [])

  return (
    <>
      <h2>Search - {query} ({proArr.length})</h2>
      { searchStatus === true && proArr.length == 0 &&
        <div className="alert alert-light text-center" role="alert">
          Arama sonucu yok!, Lütfen tekrar deneniyiz! 
        </div>
      }
      <div className='row'>
        { proArr.map((item, index) => 
          <ProductItem item={item} key={index} />
        )}
      </div>
    </>
  )
}

export default ProductSearch