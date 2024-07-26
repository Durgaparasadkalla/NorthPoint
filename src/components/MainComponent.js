import { BrowserRouter } from 'react-router-dom'
import HeaderWrapper from './HeaderWrapper'
import React from 'react'
import RouterComponent from './RouterComponent'

export default function MainComponent() {

  return (
    <BrowserRouter>
      <HeaderWrapper />
      <RouterComponent />
    </BrowserRouter>
  )
}
