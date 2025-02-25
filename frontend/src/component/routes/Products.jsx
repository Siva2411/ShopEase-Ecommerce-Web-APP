import React from 'react'
import content from '../../data/content.json'
export const loadProductByid = ({params}) => {
  const product = content?.products?.find((product)=>{
    return product.id==params.id
  })
  return {product}
}