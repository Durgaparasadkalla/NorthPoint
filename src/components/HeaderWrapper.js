import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'

export default function HeaderWrapper() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/'
  return !isLoginPage ? <HeaderComponent /> : null
}