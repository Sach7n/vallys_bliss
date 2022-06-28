import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidedrawer from './Sidedrawer'
import Backdrop from './Backdrop'
import styled from 'styled-components';
import DrawerToggleButton from './DrawerToggleButton'

export default function MainNavigation() {
    
  const [show,setShow]= useState(false)

  const drawerToggleClickHandler = () => {
    return setShow(!show)
    
  }
        
  const backdropClickHandler = () => {
    setShow(false);
  }
        
          
  let backdrop;
  if(show){
   backdrop=<Backdrop click={backdropClickHandler}/>
  }
              return (
        <MainWrapper>
              
              <div style={{height: '100%'}}>
              
                <Navbar show={show} drawerClickHandler={drawerToggleClickHandler} />
                <Sidedrawer show={show} click={drawerToggleClickHandler}/>
                {backdrop}
                <div className="drawer">
                  <DrawerToggleButton show={show} click={drawerToggleClickHandler} /></div>
              
              </div>
        </MainWrapper>
            
            );
        }

        const MainWrapper = styled.div`
        .drawer{
          position:fixed;
          top : 20px;
          right : 20px;
          z-index:12;
        }
        `
