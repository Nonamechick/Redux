import React from 'react'

const ProductsContainer = () => {
  return (
    <div>ProductsContainer</div>
  )
}
const mapStateToProps=state=>{
    return {
        productsData:state.product
    }
}

export default ProductsContainer