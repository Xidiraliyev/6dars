import React from 'react'
import { useLocation } from 'react-router-dom'

function SingleProduct() {
  const {id} = useLocation()
  console.log(id)
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct