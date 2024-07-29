import React from 'react';
import AllProjectsComponent from './AllProjectsComponent'
 
 
export default function OurWorkComponent() {
  return (
    <div>
      <h4>My Work</h4>
      <AllProjectsComponent/>
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }} className="navigation-tabs">
        <button style={buttonStyle} className="active">Worked on</button>
        <button style={buttonStyle}>Viewed</button>
        <button style={buttonStyle}>Assigned to me</button>
        <button style={buttonStyle}>Starred</button>
      </div>
    </div>
  );
}
 
const buttonStyle = {
  background: 'none',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  borderBottom: '2px solid transparent',
  transition: 'borderColor 0.3s ease',
};