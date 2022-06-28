import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

const Sidedrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    props.click()
    if (newWindow) newWindow.opener = null
  }
  return (
    <SideWrapper>
      <nav className={drawerClasses}>
        <ul>
          <li >
            <Link
              onClick={props.click}
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
              onClick={props.click}
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Work
            </Link>
          </li>

          <li>
            <Link
              onClick={() => openInNewTab('/gallery')}
              activeClass="active"
              to="/gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Media
            </Link>
          </li>
        </ul>
      </nav>
    </SideWrapper>
  )
};

export default Sidedrawer;

const SideWrapper = styled.div`
.close{
  max-width: 22px;
  position:absolute;
  margin-left:82%;
  margin-top:8%;
  cursor:pointer;
  color: var(--Font3) !important;
}
.close-btn{
  border-radius: 0.3rem;
  border: 0.1rem solid;
  font-size: 22px;
  font-weight:bold;
}
.side-drawer {
    height: 100%;
    background: var(--LightBackground);
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    max-width: 400px;
    z-index: 4;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
  }

  .side-drawer ul{
    height:100%;
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:center;    
  }

  .side-drawer li{
    margin: 1rem 0;
  }
  
  .side-drawer a{
    color: var(--Font2);
  }

  .side-drawer a:hover,
  .side-drawer a:active{
    color:var(--Font3);
    text-decoration:none !important;
  }
  .side-drawer.open {
    transform: translateX(0);
  }

  @media (min-width:769px){
    .side-drawer{
      display:none;
    }
  }
  `