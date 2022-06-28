import React from 'react';
import { Link } from "react-scroll";
import styled from 'styled-components';
import {logo} from "../images_1"

const Navbar = props => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <NavbarWrapper>
      <header className="toolbar">
        <nav className="toolbar__navigation">

          <div className="toolbar__logo">

            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <img src={logo} width={75} height={55} alt="" />
            </Link>

          </div>
          <div className="spacer" />

          <div className="toolbar_navigation-items">
            <ul className="toolbar-ul">
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  About
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  onClick={() => openInNewTab('/gallery')}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Media
                </Link>
              </li>
            </ul>
          </div>
          <div className="toolbar__toggle-button">
          </div>
        </nav>
      </header>
    </NavbarWrapper>
  );
}

export default Navbar;

const NavbarWrapper = styled.div`
.toolbar{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  background:var(--MainBackground);
  height: 55px;
  z-index:3;  
}

.toolbar__navigation{
  display:flex;
  height:100%;
  align-items:center;
  padding: 0 1rem;  
}

.toolbar__logo{
  margin-left: 0;
  cursor:pointer;
}

.spacer{
  flex:1;
}

.toolbar_navigation-items ul{
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
}

.toolbar_navigation-items li{
  padding:0 0.8rem;
  margin-left: 1.7rem;
  opacity: 0;
  animation: fadeDown 0.5s ease-in-out both;
}

.toolbar_navigation-items a{
  color:var(--Font1);
  text-decoration:none;
  cursor: pointer;
}

.toolbar_navigation-items a:hover,
.toolbar_navigation-items a:active
{
  color:var(--Font3);
}
.toolbar__toggle-button{
  z-index:11;  
}

@media (max-width: 768px){
  .toolbar_navigation-items{
    display:none;
  }
}

@media (min-width:769px){
  .toolbar__toggle-button{
    display:none;
  }
  

.toolbar_navigation-items li:nth-child(2) {
	animation-delay: 0.1s;
}
.toolbar_navigation-items li:nth-child(3) {
	animation-delay: 0.2s;
}
.toolbar_navigation-items li:nth-child(4) {
	animation-delay: 0.3s;
}
.toolbar_navigation-items li:nth-child(5) {
	animation-delay: 0.4s;
}

@keyframes fadeDown {
	0% {
		opacity: 0;
		transform: translate3d(0, -70%, 0);
	}
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
  }
}
`