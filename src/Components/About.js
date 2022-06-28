import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <div className="my-5" style={{ height:'100vh'}} id="about">
        <AboutWrapper>
        <section className="main-sec">
           <h3 className="text-title">About us</h3>
               <p>Vally’s Bliss is a firm which is established in Anand since 2011. With its wings spread across all 
                major cities of the country to take care of the local co-ordination and management. With this unengaged 
                journey, simultaneously we have collected a lot of experience and constantly upgraded our strengths in all 
                areas of event execution and event management.  With a team of young, creative, dynamic & dedicated professionals,
                 we have pushed all areas of event management to new frontiers, whether it is artist management, product launch, 
                 Exhibition, Road-show, Fashion show, wedding planning & celebrity management. The urge to deliver more than the 
                 client’s expectations has always been our top priority. Hence, we are a “One stop shop” for any and every 
                 requirement to our wide spectrum of clients. Always our motto is to satisfy our clients in terms of providing 
                 the best services in competitive rates.

               <p className="techs">Bridal boutique || Photography/Cinematography || Decore || Catering || Entertainment || Rental</p>  </p> 
        </section>
        </AboutWrapper>
        </div>
    );
};

export default About;

const AboutWrapper=styled.div`

.main-sec{
    border-color:red;
    position:relative;
    margin-left:30%;
    transform: translate(-20%);
}
.main-sec p{
margin-top:5%;
}
.techs{
    color:var(--Font1);
}
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .main-sec{
    margin-left:25%;   
    }
    .main-sec p{
    margin-top:10%;
    }
}
`