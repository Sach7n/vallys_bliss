import React, { useState } from 'react';
import styled from 'styled-components';
import { bridal, events,photography } from "../images_1";


const TabsDemo = () => {

  const array1  = bridal.concat(events,photography);
  console.log(array1)
  return (
    <StyledTabs>
      <div className="main_div">
        <div className="img-grid" >
          {array1 && array1.map(doc => (

            <div
              className="img-wrap"
              layout
              whileHover={{ opacity: 1 }

              }>
              <img src={doc} alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </div>
          ))}

        </div>
      </div>
    </StyledTabs>
  );
}
export default TabsDemo;

const StyledTabs = styled.div`
.main_div{
  width: 90%;
  margin: 2% auto; 
  box-shadow: 0 10px 22px rgba(0,0,0,0.20), 0 7px 9px rgba(0,0,0,0.18);
  border-radius: 10px;
}
.button-c{
  position:relative;
  z-index:10;
}
          .img-grid{
            display: grid;
            grid-template-rows: masonry; /* this will do the magic */
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 10px;
          
    }
          .img-wrap{
              overflow: hidden;
          height: 0;
          padding: 50% 0;
          /* padding controls height, will always be perfectly square regardless of width */
          position: relative;
          opacity: 0.8;
    }
          .img-wrap img{
              min - width: 100%;
          min-height: 100%;
          max-width: 150%;
          position: absolute;
          top: 0;
          left: 0;
    }
    .main-div{
      display: flex; 
  position: fixed; 
  top: 2%; 
  background-color: #1F2937; 
  --bg-opacity: 0.75; 
  justify-content: center; 
  align-items: center; 
  width: 500px; 
  height: 600px; 
  z-index:7;
}
  .modal-div{
      border-radius: 0.25rem; 
      border-width: 4px; 
      border-color: #991B1B; 
      border-style: double; 
      cursor: pointer; 
  
  }
  .image-div{width: auto; 
  height: auto; 
  max-height: 24rem;} 
  .main-p{
      padding: 0.25rem; 
  background-color: #FCA5A5; 
  color: #1F2937; 
  width: 100%; 
  
  }

`