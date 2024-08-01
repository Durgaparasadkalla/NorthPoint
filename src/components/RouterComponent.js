import { Route, Routes } from 'react-router-dom'

import AllProjectsComponent from './AllProjectsComponent'
import AllTeamsComponent from './AllTeamsComponent'
import CreateNewUser from './CreateNewUser'
import LoginComponent from './LoginComponent'
import OurWorkComponent from './OurWorkComponent'
import ProjectDashBoardComponent from './ProjectDashBoardComponent'
import React from 'react'
import SampleComponent from './SampleComponent'
import SelectedIssueComponent from './IssueComponent/SelectedIssueComponent'
import SelectedProject from './SelectedProject/SelectedProject'
import UserListComponent from './UserListComponent'

export default function RouterComponent() {

  return (
    <Routes>
      <Route path='/' element={<LoginComponent />} />      
      <Route path='allProjects' element={<AllProjectsComponent />} />
      <Route path='createUser' element={<CreateNewUser />} />
      <Route path='yourWork' element={<OurWorkComponent />} />      
      <Route path='allTeams' element={<AllTeamsComponent />} />
      <Route path='projectDashBoard' element={<ProjectDashBoardComponent />}>
        <Route index element={<SelectedProject />} />
        <Route path='userList' element={<UserListComponent />} />
        <Route path='sample' element={<SampleComponent />} />
        <Route path='dashBoard' element={<SelectedProject />} />
        <Route path='selected-issue' element={<SelectedIssueComponent />}/>
      </Route>
    </Routes>
  )
}
