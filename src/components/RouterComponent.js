import { Route, Routes } from 'react-router-dom'

import React from 'react'
import AllProjectsComponent from './AllProjectsComponent'
import LoginComponent from './LoginComponent'
import OurWorkComponent from './OurWorkComponent'
import ProjectDashBoardComponent from './ProjectDashBoardComponent'
import SampleComponent from './SampleComponent'
import UserListComponent from './UserListComponent'

export default function RouterComponent() {

  return (
    <Routes>
      <Route path='/' element={<LoginComponent />} />
      <Route path="ourWork" element={<OurWorkComponent />} />
      <Route path='allProjects' element={<AllProjectsComponent />} />
      <Route path='projectDashBoard' element={<ProjectDashBoardComponent />}>
        <Route path='userList' element={<UserListComponent />} />
        <Route path='sample' element={<SampleComponent />} />
      </Route>
    </Routes>
  )
}
