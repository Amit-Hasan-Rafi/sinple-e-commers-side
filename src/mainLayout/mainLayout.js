import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../component/card/Card'
import Header from '../component/header/header'


function MainLayout() {
  return (
    <div>
       <Header></Header>
       <Outlet></Outlet>
    </div>
  )
}

export default MainLayout