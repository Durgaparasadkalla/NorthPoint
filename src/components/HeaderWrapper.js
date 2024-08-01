import HeaderComponent from './HeaderComponent'
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function HeaderWrapper() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/'
  console.log("isLoginPage",isLoginPage)
  const isRegister = location.pathname ==='/createUser'
  console.log("isRegister",isRegister)
  return (!isLoginPage && !isRegister) ? <HeaderComponent /> : null
}