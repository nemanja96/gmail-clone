import React from 'react'
import './SidebarOption.css';

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOption ${selected && `sidebar--active`}`}>
        <Icon className="sidebarOption__icon" />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption