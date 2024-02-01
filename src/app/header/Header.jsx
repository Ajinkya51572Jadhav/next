"use client";

import Link from 'next/link'
import React from 'react'
// import Home from '../home/page.jsx';

const Header = () => {
  return (
    <div>
        <Link href={"/home"} >Home</Link>      
        <Link href={"/cart/:id"}>ProductDetails</Link>      
    </div>
  )
}

export default Header
