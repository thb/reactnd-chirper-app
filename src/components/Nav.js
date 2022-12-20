import React from "react"
import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact="/" className={(navData) => (navData.isActive ? "active" : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" className={(navData) => (navData.isActive ? "active" : '')}>
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}