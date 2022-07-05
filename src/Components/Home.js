import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { main_background, strip,logo,bridal } from "./images_1"

const Home = () => {
    const [theme, setTheme] = useState(main_background[0])
    let i = 0;
    function two() {
        let l = main_background.length - 1;
        setInterval(() => {
            while (true) {
                if (i >= l) i = -1;
                i += 1;
                setTheme(main_background[i])
                break;
            }

        }, 15000)

    }
    useEffect(() => {
        two();
    }, []);

    return (
        <HomeWrapper >
            <div id="home" style={{ height: '100vh' }}>
                <section  >
                    
                    <div className="main_div">
                        <div className='logo'>
                            <img className='logo_img' src={logo} />
                        </div>
                        <div className='image_container'>
                            <div className='image_m'>
                                <img className='image_1' src={theme} />
                            </div>
                            <div className='text'>
                            <p className='p-h'>Welcome to</p>
                                <p className='p-mobile1'>Vallys Bliss</p>
                                <p className='p-h'>Welcome to</p>
                                <p className='p-h1'>Vally's Bliss</p>
                                <p className='p-h2'>where we plan your moments</p>
                                <p className='p-mobile2'>We plan your momemnts here</p>    
                            </div>
                            <div className='strip'>
                                {strip && strip.map(({key,image, desc }) => {
                                    return (    
                                        <div className='strip_image_cont' key={key}>
                                            <img className='image_1' src={image} />
                                            <p className='strip_desc_p'>{desc}</p>

                                        </div>);
                                })}

                            </div>
                        </div>
                    </div>            
                    </section>
                 
            </div>
        </HomeWrapper>
    );
}


export default Home;

const HomeWrapper = styled.div`
.p-mobile1, .p-mobile2{
    display:none;
}
.main_div{
    height:100vh;
    transform : translateY(13%);
    
}
.logo{
    display:none;
    position:relative;
    top:0;
    left:0;
    transform : translate(250%,-24%);
    height: 150px;
    width: 250px;
    z-index:1;
    border-radius:95px;
}
.logo_img{
    backdrop-filter: blur(10px);
    position:relative;
    max-height: 150px;
    max-width: 250px;
    margin : 0px;
    padding :0px;
    border-radius:95px;
    
}
.image_container{
    transform : translate(12%,-1%);
    height:75%;
    width: 80%;
}
.image_m{
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    height:100%;
}
.text{
    transform : translate(30%,-300%);
    height:25%;
    width: 60%;
    margin:0;
}
.strip{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position:relative;
    z-index:1;
    display : flex;
    align-items:center;
    justify-content: space-around;
    transform : translateY(-200%);
    height:25%;
    width: 100%;
}
.strip_image_cont{
    height:90%;
    width: 20%;   
}
.image_1{
    border-style: solid;
    border-color: white;
    height:100%;
    width: 100%;
}
.strip_desc_p{
    position : relative;
    transform : translateY(-100%);
    z-index:1;
    text-shadow: 0 0 5px #fff, 0 0 15px #fff, 0 0 30px #7e85d6, 0 0 40px #3a46c9, 0 0 50px #3a46c9, 0 0 60px #394091, 0 0 70px #394091;
    color: #DBDFFD;
    text-align: center;
    background-color:rgba(0, 0, 0, 0.2);    
    backdrop-filter: blur(10px) opacity(10) grayscale(0.5);
}
.letters_class
{
    display:flex;
}
.main_banner{
    position:relative;
    transform : translateY(50%);
    height: 70%;
    width: 900px;
    max-width:80%;
    border-style: solid;
    border-color: red;
    z-index:1;
    padding:0;
}
.image_class{
    border-style: solid;
    border-color: green;
    transform : translateX(-50%);
    height: 500px;
    width: 800px;
}
.landing-page {
    position: absolute;
    top:50%;
    left:15%;
    transform: translate(-20%,-50%);
    transition: opacity 3s;
    animation: fadeIn ease-in-out 1.3s;
    border-style: solid;
    border-color: black;
}

.p-h {
    color: #DBDFFD;
    border-color: white;
    font-size: 1.5rem;
    font-family: "Courier", !important;
    text-shadow: 0 0 5px #fff, 0 0 15px #fff, 0 0 30px #7e85d6, 0 0 40px #3a46c9, 0 0 50px #3a46c9, 0 0 60px #394091, 0 0 70px #394091;
    text-align: center;
}
.p-h1 {
    border-color: white;
    color: #DBDFFD;
    font-family: "Courier", !important;
    font-size: 4rem;
    text-align: center;
    text-shadow: 0 0 5px #fff, 0 0 15px #fff, 0 0 30px #7e85d6, 0 0 40px #3a46c9, 0 0 50px #3a46c9, 0 0 60px #394091, 0 0 70px #394091;
}
.p-h2 {
    margin:2px;
    color: #DBDFFD;
    font-family: "Courier", !important;
    font-size: 2.5rem;
    text-align: center;
    text-shadow: 0 0 5px #fff, 0 0 15px #fff, 0 0 30px #7e85d6, 0 0 40px #3a46c9, 0 0 50px #3a46c9, 0 0 60px #394091, 0 0 70px #394091;

}

.landing-page .p-h3 {
    color: #DBDFFD;
    font-family: "Courier", !important;
    font-size: 2.5rem;
}
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .logo{
        position:relative;
        top:0;
        left:0;
        transform : translate(35%,-24%);
        height: 150px;
        width: 250px;
        z-index:1;
    }
    .image_container{
        transform : translate(13%,-55%);
        height:30%;
        width: 86%;
    }
    .image_m{
        transform : translate(-5%,130%);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        height:100%;
    }
    .landing-page {
        left:25%;
        top:40%;
    }
    .p-h, .p-h2, .p-h1 {
    display:none;   
    }
    
    .p-mobile1{

        transform : translate(3%,200%);
        display: flex ;
        font-size:calc(3.5em - 1rem);
        color: var(--font1);
     }
    .p-mobile2{
        display: flex ;
        font-size:calc(2.5em - 1rem);
        color: var(--font1);
        transform : translate(-30%,1700%);
        white-space: nowrap;
        text-overflow: clip;
    }
    .landing-page .p-h2
    {
        font-size:calc(2.9em - 1rem);
    }
    .strip{
        transform:translate(-5%,420%);
    }
    .strip_desc_p{
        font-size:2vw;
    }
}

@keyframes fadeIn{
    0%{
		opacity: 0;
		transform: translate3d(-20%, -58%, 0);
    }
    25%{
		opacity: 0;
		transform: translate3d(-20%, -54%, 0);
    }
    50%{
		opacity: 0;
		transform: translate3d(-20%, -53%, 0);
    }
    75%{
		opacity: 0;
		transform: translate3d(-20%, -53%, 0);
	}
    80%{
		opacity: 0.3;
		transform: translate3d(-20%, -52%, 0);
	}
    90%{
		opacity: 0.6;
		transform: translate3d(-20%, -51%, 0);
	}
	100%{
		opacity: 1;
		transform: translate3d(-20%,-50%, 0);
}
`