import React from "react"
import logo from "../assets/OhioLogoLight.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
  <nav className="nav">
    <div className="nav-wrap container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
  )

  
  // <nav className="navbar">
  //   <div className="nav-center">
  //     <div className="nav-header">
  //       <img src={logo} alt="logo"/>
  //       <button type="button" className="toggle-btn" onClick={toggleSidebar}>
  //         <FaAlignRight></FaAlignRight>
  //       </button>
  //     </div>
  //     <PageLinks styleClass="nav-links"></PageLinks>
  //   </div>
  // </nav>
}

export default Navbar
