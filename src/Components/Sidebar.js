import React from 'react';
import styled from 'styled-components';

const Sidebar = props => {
    return (
        <SidebarWrapper>
            <div id='a' className='d-none d-lg-block' > 
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <div class="icon-bar"> 
                    <a href={'mailto:ridetheblissofgrace@gmail.com'} class="envelope"><i class="fa fa-envelope"></i></a> 
                    <a target="_blank" href="https://m.facebook.com/theperfectbliss/" class="linkedin"><i class="fa fa-facebook"></i></a>
                    <a target="_blank" href="https://instagram.com/vallys_bliss?igshid=YmMyMTA2M2Y=" class="github"><i class="fa fa-instagram"></i></a> 
                    
                    </div>
            
            </div>

        </SidebarWrapper>
    );
};

export default Sidebar;

const SidebarWrapper=styled.div`
body.a {margin:2;height:2000px;}

.icon-bar {
  position: fixed;
  z-index:3;
  top: 50%;
  transform: translateY(-50%);
  animation: fade-in linear 2s;
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color:var(--Font1);
  font-size: 20px;
}

.icon-bar a:hover {
  background-color:transparent;
  color: var(--Font3);;
  transform: scale(1.1); 
}
.content {
  margin-left: 75px;
  font-size: 30px;
}

.text1 p{writing-mode: ertical-lr;
  
  @keyframes fade-in{
  0%{
		opacity: 0;
		transform: translate3d(0,-41%, 0);
  }
  25%{
		opacity: 0;
		transform: translate3d(0,-42%, 0);
  }
  50%{
		opacity: 0;
		transform: translate3d(0,-43%, 0);
  }
  70%{
		opacity: 0;
		transform: translate3d(0,-43%, 0);
  }
  85%{
		opacity: 0.4;
		transform: translate3d(0,-47%, 0);
  }
  90%{
		opacity: 0.6;
		transform: translate3d(0,-48%, 0);
  }
  95%{
		opacity: 0.8;
		transform: translate3d(0,-49%, 0);
	}
	100%{
		opacity: 1;
		transform: translate3d(0,-50%,0);
  }
}   
`