import React from 'react'
import DelivaryNavbar from './DelivaryNavbar'
import { Outlet } from 'react-router-dom'
import DelivaryItems from './DelivaryItems'
import DelivaryHistory from './DelivaryHistory'
import DelivaryProfile from './DelivaryProfile'

const DelivaryHome = () => {
  return (
    <div>
        <DelivaryNavbar />
        <DelivaryItems />
        {/* <DelivaryHistory /> */}
        {/* <DelivaryProfile /> */}
    </div>
  )
}

export default DelivaryHome