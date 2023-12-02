import React from 'react'
import { useSearchParams } from 'react-router-dom'

function ProductSearch() {

  const [searchParams] = useSearchParams()
  console.log(searchParams.get('q'))  

  return (
    <div>ProductSearch</div>
  )
}

export default ProductSearch