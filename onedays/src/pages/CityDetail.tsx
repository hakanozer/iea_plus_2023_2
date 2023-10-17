import React from 'react'
import { useParams } from 'react-router-dom'

function CityDetail() {

  const {cityData} = useParams()

  return (
    <>
        <h2>{cityData}</h2>
    </>
  )
}

export default CityDetail