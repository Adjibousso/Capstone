import React from "react";
import { Link } from "react-router-dom";
import Infos from "./Info";
import afrik6 from "../assets/images/afrik6.jpg"
import asia1 from "../assets/images/asia1.jpg"
import europe1 from "../assets/images/europe1.jpg"
import usa1 from "../assets/images/usa1.jpg"
import check from '../assets/images/check.mp4'
import Afrique from "../pages/Afrique"
import Asia from "../pages/Asia"
import DonationPage from "../components/Donation";
import ReactPlayer from "react-player";

const HomePage = () => {
  return (
    <div className="home-page">
      
      <section className="about-section">
        
        
        <div className="containerInfo">
        
      <Link to={"/Infos"}> <h3>About Breast cancer</h3> </Link> 
     <div> <b>Your donation can save lives</b> <Link to={'/Donation'}  className="donate"><b>Donate!!</b></Link></div>
             
        </div>


        {/* link to differents country  */}
        <div className="bycountry">
<div> 
<Link to={"/Asie"}>Asia <br /><img src={asia1} alt="" /></Link>


</div>

<div><div><Link to={"/Afrique"}>Africa <br /><img src={afrik6} alt="" /></Link> </div>
</div>

<div><Link to={"/NorthAmerica"}>North America <br /><img src={usa1} alt="" /></Link></div>
<div><Link to={"/Europe"}> Europe<br /><img src={europe1} alt="" /></Link></div>

</div>
<br />


        <p>Breast cancer is one of the most common cancers among women worldwide. Early detection and treatment are crucial.</p>
      </section>
{/* info  text */}
      <section className="support-section">
        <h2>How can we help? your story is really important to us</h2>
        <h3>Send us a message an one of our team will get back to you soon</h3>  
        <ReactPlayer url={check} controls={true} playing={true} width='300px' height='300px' className='reactplayerHome'></ReactPlayer>

        
        <ul>
          <li>Donate to research initiatives <Link to={'/Donation'}  className="donate"><b>Donation</b></Link></li>
          <li>Participate in awareness events</li>
          <li>Support local charities</li>
        </ul>
      </section>
      <section className="resources-section">
        <h2>Resources</h2>
        <p>Find more information and support at:</p>
        <ul>
          <li><a href="" target="_blank" rel="noopener noreferrer"></a></li>
          {/* link to breast cancer official website */}
          <li><a href="https://www.nationalbreastcancer.org" target="_blank" rel="noopener noreferrer">National Breast Cancer Foundation</a></li>
        </ul>
      </section>
      
      <footer className="footer">
        <p>© 2024 Breast Cancer Awareness. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

