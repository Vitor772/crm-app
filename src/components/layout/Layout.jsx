import React from 'react'

import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'


const Layout = () => {
  return (
    <BrowserRouter>
        <Route render={(props) => (
            <div className='layout'>

            </div>
        )}/>
    </BrowserRouter>
  )
}

export default Layout