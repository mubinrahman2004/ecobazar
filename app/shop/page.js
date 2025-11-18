import React from 'react'
import Banner from './Banner'
import ProductList from './ProductList'
import ShopProduct from './ShopProduct'

const page = () => {
  return (
    <div>
        <Banner/>
        {/* <ProductList/> */}
        <ShopProduct/>
    </div>
  )
}

export default page