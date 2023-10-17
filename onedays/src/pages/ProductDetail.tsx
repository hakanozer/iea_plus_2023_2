import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

  const {pid} = useParams()

  return (
    <>
        <h2>{pid}</h2>
    </>
  )
}

export default ProductDetail