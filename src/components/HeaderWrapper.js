import HeaderComponent from './HeaderComponent'
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function HeaderWrapper() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/'
  const isRegister = location.pathname ==='/createUser'
  return (!isLoginPage && !isRegister) ? <HeaderComponent /> : null
}