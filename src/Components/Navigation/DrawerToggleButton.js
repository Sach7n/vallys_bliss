import React from 'react';
import styled from 'styled-components';

const DrawerToggleButton = props => {

  let toggleClasses='toggle_button_div';
  if(props.show)
  {toggleClasses='toggle_button_div close'}
return(
<DrawerWrapper>
  <button className={toggleClasses} onClick={props.click}>
    <div className="toggle_button_line1"></div>
    <div className="toggle_button_line2"></div>
    <div className="toggle_button_line3"></div>
  </button>
</DrawerWrapper>
)};

export default DrawerToggleButton;

const DrawerWrapper =styled.div`
.toggle_button_div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  animation: all fade-toggle 0.5s;
}

.toggle-button:focus {
  outline: none;
}

.toggle_button_div div{
  width: 30px;
  height: 2px;
  background: var(--Font3);
  transition:all 0.4s ease-in; 
}

.toggle_button_div.close div{
  transition:all 0.4s ease-out;

}
.toggle_button_div.close .toggle_button_line1 {
  transform: translate(0px,0px) rotate(-225deg) translate(5px,-4px);
  
}
.toggle_button_div.close .toggle_button_line2{
display: none;
}
.toggle_button_div.close .toggle_button_line3 {
  transform: translate(0px,0px) rotate(225deg) translate(5px,4px);   
}
@keyframes fade-toggle {
	0%{
    opacity: 0;
    transform: translate3d(0, -70%, 0);
	}
	100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
	}
}
@media (min-width:769px){
  .toggle_button_div{
    display:none;
  }
}
`