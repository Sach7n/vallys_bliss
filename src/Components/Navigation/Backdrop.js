import React from 'react';
import styled from 'styled-components';

const Backdrop = props => {
    return (
        <BackdropWrapper>
        <div className="backdrop" onClick={props.click}/>
        </BackdropWrapper>    
    );
};

export default Backdrop;

const BackdropWrapper = styled.div`
.backdrop{
    position:fixed;
    height:100%;
    width:100%;
    top:0;
    left:0;
    background: transperant;
    z-index:3;
}
`