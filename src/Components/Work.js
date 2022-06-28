import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"

import {bridal,photography,events} from "../Components/images_1"

const Work = () => {
  const [photo, setPhoto] = useState(photography[0])
  const [bri, setBri] = useState(bridal[0])
  const [evnt, setEvnt] = useState(events[0])

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  
  let i = 0;
  function two() {
    let l = photography.length - 1;
    let l1 = bridal.length - 1;
    let l2 = events.length - 1;
    setInterval(() => {
        while (true) {
            if (i >= l) i = -1;
            i += 1;
            setPhoto(photography[i])
            setBri(bridal[i])
            setEvnt(events[i])
            break;
        }

    }, 15000)

}
  useEffect(() => {
    two();
    AOS.init({
      offset: 300, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 500 // values from 0 to 3000, with step 50ms
    });
  }, []);
  
  


  // function rightF(r) {
  //   let r1 = 2;
  //   let i,j1,output =null;

  //   //let output = item.services[0].id;
  //   for (let j = 0; j < item.services.length; j++) {

  //     if (item.services[j].id % 2 === 0) {
  //       output = item.services[j].title;
  //       console.log(item.services[j].title + "  evens")
  //     } else {
  //       console.log(item.services[j].title + "odds" )
  //     }
  //     break;


  //   }
  //   console.log(output)
  //   return output;

  // }

  return (
    <StyledWork>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <div id="work" className="main-div">
        <h3 className="text-title">Work</h3>

        <div className="App">
          <section className="main-sec" >

            <motion.article className="project_pro_1" whileHover={{ y: -2 }}
              transition={{ type: "tween" }}
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <div className="info_class_r" >
                <h3 className="title_r">Photography/cinematography</h3>
                <p className="desc_r">

                  We have built and brought together a truly amazing team of photographers/cinematographers. The Vally's Bliss
                  studio is an independent collective focused on the documentation of weddings, engagements and elopements. We
                  represent an established group of visual creators, invested in the art of photography and human connection, merging
                  our artistic experience to capture our clients creative vision through imagery. We shoot images for people who live
                  adventurously, love uncontrollably, and are okay with “weird”. Through our cameras we capture the most special moments
                  of your wedding day, always from our particular way of seeing things. From our shooting style to our editing tones, we
                  do things natural + down-to-earth. Our clients value artistic vision, doing life with good people, and a healthy lifestyle.
                  We are Creatives, Adventurers and Explorers. Live in Gujarat-India, but we always have the suitcase ready to escape
                  there where we need…
                </p>
              </div>

              <motion.div className="image_r" whileHover={{ zIndex: 3 }} >
                <a className="a_active" href="" onClick={() => openInNewTab('/gallery')}>
                  <motion.img src={photo} alt="abc" whileHover={{ scale: 1.02 }} transition={{ type: "tween" }} />
                </a>
              </motion.div>
            </motion.article>

            <motion.article className="project_pro_2"
              data-aos="fade-left"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.1 }}
              data-aos-once="true"
            >

              <motion.div className="image" whileHover={{ zIndex: 3 }} >
                <a className="a_active" href="" onClick={() => openInNewTab('/gallery')}>
                  <motion.img src={bri} alt="abc" whileHover={{ scale: 1.02 }} transition={{ type: "tween" }} />
                </a>
              </motion.div>


              <div className="info_class">
                <h3 className="title">Decore</h3>
                <p className="desc">
                  From complete design, décor and set up to simple rentals, "Vally's Bliss" can help you achieve the wedding you
                  have envisioned. With over few years of experience, we have a depth of knowledge that translates into peace of
                  mind for you. While we’ve created and worked in just about every setting and custom created hundreds of weddings,
                  we are still just as excited today about designing your dream wedding as the day we opened our doors, and we welcome
                  new challenges in providing stylish and up to date décor.

                </p>


              </div>
            </motion.article>


            <motion.article className="project_pro_1"
              data-aos="fade-right"
              data-aos-offset="200"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.3 }}
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >

              <div className="info_class_r">
                <h3 className="title_r">Bridal boutique</h3>
                <p className="desc_r">
                  We discovered we had a huge passion for Weddings several years ago and decided that this is the industry for us.
                  Our love for Wedding dresses and the whole bridal experience started since 2011 with our own personal weddings and we realized that finding "the dress" is such a huge part of the experience for every Bride-to-Be.
                  We carefully select every dress for our collection and take such pride in the environment we have created.
                  We can't wait to share our passion with you and be a part of your Wedding experience.
                </p>
                
              </div>

              <motion.div className="image_r" whileHover={{ zIndex: 3 }} >
                <motion.img src={evnt} alt="abc" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} onClick={() => openInNewTab('/gallery')} />
              </motion.div>

            </motion.article>

            <motion.article className="project_pro_2"
              data-aos="fade-left"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.1 }}
              data-aos-once="true"
            >

              <motion.div className="image" whileHover={{ zIndex: 3 }} >
                <a className="a_active" href="" onClick={() => openInNewTab('/gallery')}>
                  <motion.img src={photo} alt="abc" whileHover={{ scale: 1.02 }} transition={{ type: "tween" }} />
                </a>
              </motion.div>


              <div className="info_class">
                <h3 className="title">Entertainment</h3>
                <p className="desc">
                  Gone are the days when people used to get married in temples, or in a small family circle with loud brass bands,
                  dhols and nagadaas. Nowadays marriage has outgrown its image of a normal and traditional event. Marriages are now
                  held in a very pompous and grand way. With the ever-growing popularity of designer weddings, We indulge in a
                  complete marriage package, so that all your needs are taken care of and you need not roam from shop to shop. You
                  can make your wedding more glitzy and lively under our wedding planner’s proper guidance.
                </p>


              </div>
            </motion.article>

            <motion.article className="project_pro_1"
              data-aos="fade-right"
              data-aos-offset="200"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.3 }}
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >

              <div className="info_class_r">
                <h3 className="title_r">Catering</h3>
                <p className="desc_r">
                  If you live by the details and are all about aesthetics, then vally’s bliss is quite the guru in this
                  department. We are particularly known for our presentation styles, signature dishes, and design. People
                  especially loved our dessert array. We are too mouthwatering to resist. So yes, we not only make your wedding
                  menu seem like a dream, but we also take good care of the big day venue as well!    </p>
                
              </div>

              <motion.div className="image_r" whileHover={{ zIndex: 3 }} >
                <motion.img src={bri} alt="abc" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} onClick={() => openInNewTab('/gallery')} />
              </motion.div>

            </motion.article>

            <motion.article className="project_pro_2"
              data-aos="fade-left"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.1 }}
              data-aos-once="true"
            >

              <motion.div className="image" whileHover={{ zIndex: 3 }} >
                <a className="a_active" href="" onClick={() => openInNewTab('/gallery')}>
                  <motion.img src={photo} alt="abc" whileHover={{ scale: 1.02 }} transition={{ type: "tween" }} />
                </a>
              </motion.div>


              <div className="info_class">
                <h3 className="title">  Rental</h3>
                <p className="desc">
                  Whether you are having a few guests over for a small party or having a wedding for 500 people, Vally’s Bliss
                   has the right equipment for you
                </p>


              </div>
            </motion.article>
          </section>
        <div className='name_r'>
          <p>made with &hearts; by <a target="_blank" href="https://instagram.com/sach7n?igshid=YmMyMTA2M2Y=">Sachin Macwan</a></p>
        </div>
        </div >
        <div className="social">
                        <ul>
                        <li><a href={'mailto:ridetheblissofgrace@gmail.com'} class="envelope"><i class="fa fa-envelope"></i></a></li> 
                        <li><a target="_blank" href="https://m.facebook.com/theperfectbliss/" class="linkedin"><i class="fa fa-facebook"></i></a></li>
                        <li><a target="_blank" href="https://instagram.com/vallys_bliss?igshid=YmMyMTA2M2Y=" class="github"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
      </div>
    </StyledWork>
  );
};

export default Work;

const StyledWork = styled.div`
.name_r{
  justify-content : space-around;
  top:2%;
  text-align:center;
  height:2%;
  width:100%;
  background:var(--MainBackground);
}

.main-div{
  height:100vh;
  margin:0px 0 10px 0;
}

.main-sec {
  margin-left: 10%;
}

.project_pro_1,
.project_pro_2 {
  margin: 2% 4%;
  padding: 0% 2%;
  height: 100%;
  width: 80%;
  display: flex;
}

.image,
.image_r {
  padding: 0px;
  margin: 2%;
  height: 500px;
  width: 500px;
  max-height: 500px;
  max-width: 800px;
  background-color:var(--MainBackground);
}

.image_r {
  transform: translateX(-13%);
}

.image img,
.image_r img {
  margin: 0;
  padding: 0;
  max-height: 500px;
  max-width: 800px;
}

.info_class,
.info_class_r {
  margin: 40px 0 0 0;
  padding: 1%;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: x-large;
  text-align: right;
  transform: translateX(-5%);
}

.title_r {
  font-size: x-large;
  text-align: left;
}

.desc {
  transform: translateX(-10%);
  z-index: 2;
  height: 500px;
  padding: 8%;
  border-radius: 8px;
  background-color: var(--LightBackground);
  box-shadow:7px 7px 14px rgba(0,0,0,0.1);
}

.desc_r {
  z-index: 2;
  padding: 8%;
  height: 500px;
  border-radius: 8px;
  background-color: var(--LightBackground);
  box-shadow:-7px -7px 14px rgba(0,0,0,0.1);
}

.techs {
  text-align: right;
  transform: translateX(-10%);
}
.techs p{
  margin: 0;
  padding: 0;
}
.icons {
  text-align: right;
  transform: translateX(-10%);
}
.a_active i:hover{
  transform: scale(1.2);
  transition: all 0.5s ease;
}

.a_not_active {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: black;
}
.social{
  display:none;
}
@media only screen and (max-width: 769px) {
  .main-sec {
      margin: 1%;
      overflow: hidden;
      
  }
  .project_pro_1,
  .project_pro_2 {
      margin: 3% 0 1% 0;
      padding: 1%;
      height: 100%;
      width: 98%;
      display: flex;
  }
  .image,
  .image_r {
      display: none;
  }
  .title,
  .title_r {
      transform: translateX(0);
      text-align: center;
      font-size: large;
  }
  .desc,
  .desc_r {
      margin-top:0;
      transform: translateX(0%);
      z-index: 2;
      padding: 4%;
      border-radius: 8px;
      background-color: var(--LightBackground);
  }
  .icons,.icons_r {
      text-align: right;
      transform: translateX(-5%);

  }
  .techs{
      text-align: left;
      transform: translateX(0%);
  }
     .social{
        display:flex;
        position:relative;
        top:10%;
        left:0;
        text-align:center;
        width:100%;
        background:var(--MainBackground);
    }
    .social ul{
        align-items:center;
        display:flex;
        padding: 0 1rem;
        list-style:none;
        margin-left:22%;
    }
    .social li{
        padding:0 0.5rem;
        transform: scale(1.3);
        margin-left: 1.5rem;
    }
    .social li a{
        color: var(--Font2);
    }
    
}
`

