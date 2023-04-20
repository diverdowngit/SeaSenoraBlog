import * as React from "react";
import Layout from "../components/layout";
import {
  container,
  adminTravel,
  adminText,
  imgsiz,
  alignImages,
  alignImages2,
} from "../css/About.module.css";
import Img from "../images/aboutTravel1.jpg";
import Youtube from "../images/youtube-logo.png";
import Seo from "../components/seo";
// import StyledHero from "../components/StyledHero"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <img src={Img} width="100%"  />

      <div className={container}>
        <div>
          <h2 className={adminTravel}>About Us</h2>
          <div className={adminText}>
            Hello We Are Fred, Sandra and Maya. We wanted to share our
            exdiveriences with others all across the world, so we started Sv Sea
            Senora. to increase the rewards of well-known sites and the
            accessibility of off-the-beaten-path locations.
          </div>
          <p className={adminText}>
            Both textual and visual storytelling are our passions. That's why we
            made the decision to start a simple
            <a
              href="https://www.youtube.com/@svseasenora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={imgsiz} src={Youtube} alt="youtube" />
            </a>
            YouTube Site / travel blog. .
          </p>
        </div>
        <br></br>
        <div className={adminText}>
          We are a family of sailing enthusiasts who would like to share our
          passion for the sea with the world. Our channel is dedicated to
          showcasing the joys of family sailing and providing helpful tips and
          advice for families who are interested in getting started.
        </div>
        <div className={adminText}>
          As a family of sailors, we understand the unique challenges and
          rewards of sailing as a family. Our channel is a platform for us to
          share our experiences and inspire other families to explore the world
          of sailing together.
        </div>

        <div className={adminText}>
          On our channel, you'll find a wide variety of sailing-related content
          that is suitable for families of all ages. We feature destination
          guides, sailing tips and tricks, gear reviews and much more, all
          designed to help families plan their next sailing adventure. Our
          videos showcase some of the most beautiful sailing locations around
          the world, inspiring families to experience sailing together.
        </div>
        <div className={adminText}>
          We believe that sailing is a wonderful way for families to bond,
          explore and create unforgettable memories together. And we strive to
          reflect that in our content, by showcasing the fun and challenges of
          sailing as a family and providing an authentic and relatable
          perspective on family sailing.
        </div>

        <div className={adminText}>
          Thank you for visiting
          <a
            href="https://www.youtube.com/@svseasenora"
            target="_blank"
            rel="noopener noreferrer"
            alt="https://www.youtube.com/@svseasenora"
          >
            SV Sea Senora
          </a>
          We hope you enjoy your sailing journey with your loved ones and join
          our community of sailing families!
        </div>
        <div></div>
        <div className={alignImages}>
          {/* <div className={column}></div>
            {/* <div className={column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660681098/users/navjotTravel_x4ugb4.jpg" className={imgsiz}/></div> */}
          {/* <div className={column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660682976/users/Vaishali-Travel_f26rwt.jpg" className={imgsiz}/></div> */}
        </div>
        <div className={alignImages2}>
          {/* <div className={column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660682484/users/Brinda-Travel_mluidp.jpg" className={imgsiz}/></div> */}
          {/* <div className={column}><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660683418/users/yashwanthTravel_bo0jkt.jpg" className={imgsiz}/></div> */}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;
export default AboutPage;
