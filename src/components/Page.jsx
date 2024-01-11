/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'
import MyCart from './MyCart'

const Page = () => {
  const page = useSelector((state) => state.pages);
  return (
    <div>{page.home ? <Home/> : <MyCart/>}</div>
  )
}

export default Page
{/* {page === 'home' ? (
        <Home />
      ) : (
        <MyCart />
      )} */}