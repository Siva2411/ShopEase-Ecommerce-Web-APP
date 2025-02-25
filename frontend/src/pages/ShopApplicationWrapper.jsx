import React from 'react'
import Navbar from '../component/Navigation/Navbar'
import { Outlet } from 'react-router'
import content from '../data/content.json'
import Footer from '../component/Footer/Footer'
function ShopApplicationWrapper() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer content={content?.footer}/>
    </>
  )
}

export default ShopApplicationWrapper