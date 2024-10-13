

import React from "react";
import aware1 from '../assets/images/aware1.png';
import ReactPlayer from "react-player"; 
import video from "../assets/images/video.mp4";
import picture1 from "../assets/images/picture1.jpg"



const Info = () => {
  return (
    <div className="home-page">
      <header className="head">
        <img src={aware1} alt="video"  className="awareinfo"/>
        <p>Join us in spreading awareness and supporting those affected by breast cancer.</p>
        
      </header>
      <section className="about-section">
        
        <div className="containerInfo">
       
        <div className="videoaware">
        <ReactPlayer url={video} controls={true}  playing={true} width="400px" alt="hello" ></ReactPlayer>
        
         <img src={picture1} alt="" /> 
        </div>
        <div className="displayV">
        <h3>What is breast cancer?</h3>
        <h4>A cancer that develops in the breast cells and progresses in stages. 
            Few early symptoms may include new lump in the underarm or in breast,
             itching or discharge from the nipples, and skin texture change of the nipple or breast.</h4>

        
             <h3>Causes:</h3>
             <h4>The exact cause is not known.</h4>
The risk factors include:
<ul>
<li>Family history
Hormonal changes 
Age -at more risk after 40 years of age</li>
<li>Personal history of breast cancer:
 A cancer in one breast increases the chances of having cancer in the other breast</li>
<li>Lifestyle, including excess of alcohol consumption
Environmental factors, including exposure to radiations
Obesity and over weight</li>
<li>Menarche: 
having periods at younger age and menopause at an older age</li>
<li>Pregnancy:
 Becoming pregnant at an older age or never being pregnant
Hormone use, including long-term contraceptive use or postmenopausal Hormone therapy</li>
</ul>
<h3>Symptoms</h3>
<h4>In many cases, symptoms may go unnoticed until it becomes severe and may include:
A lump or mass in the breast that feels different from the surrounding tissue
Change is the shape, size, or appearance of the breast
Discharge from the nipple
Breast rash
Changes in the skin over the breast, for example, dimpling
Breast pain
Inverted or pulling-in of the nipple
Scaling, peeling, or flaking skin over the breast, particularly the dark area around the nipple
Redness and/or pitting of the breast skin, resembling the skin of orange</h4>

<h3>Diagnosis</h3>
<h4>Diagnosis involves physical examination, blood tests, and few imaging tests to confirm the condition.
Physical examination
Physical examination of the breast - Checking for lumps, hardness, or tenderness in the breasts and lymph nodes.
Mammogram
X-ray of the breast.
Complete blood count (CBC)
Blood tests for complete blood cell count, and to assess other abnormalities such as infection.
Positron emission tomography (PET)
To determine the staging of cancer.
Ultrasound
Imaging the breast using sound waves to detect for abnormal lumps.
Magnetic resonance imaging (MRI)
MRI of breast provides detailed image of the breast lumps.
Breast biopsy
Removing a sample of breast cells for microscopic examination.</h4>
<h3>Medications</h3>
<h4>Chemotherapy
Drugs may be recommended before or after the surgery to reduce the mass size and prevent spread or recurrence.
Common drugs : Capecitabine, Carboplatin, Doxorubicin, Vinorelbine
Hormone therapy
Drugs used in hormone therapy help in regulating the proliferation 
of hormone sensitive cancer cells and prevent the production of hormones or reduce their action.
Common drugs : Raloxifene, Tamoxifen, Fulvestrant, Leuprolide</h4>
<h3>Therapy</h3>
<h4>Radiation therapy
- Uses high-powered energy rays to destroy cancer cells.
- Can be done using a machine or by implanting a radioactive material inside the tumor mass.</h4>

<h3>Surgery</h3>
<h4>Lumpectomy
The entire tumor mass and some of the surrounding healthy tissues are removed.</h4>
<h3>Complication</h3>
<h4>Spread of cancer to other organs or bones and resulting symptoms are the complications associated with advanced stages of breast cancer.
Cancer treatment is associated with complications such as lymphedema, pain, and sickness.</h4>
<h3>Prevention</h3>
<h4>Preventive measures involves healthy habits such as:
Eat healthy and nutritious food
Avoid alcohol
Practice gentle exercises upon doctor's advice
Visit doctor for regular examination
Preventive surgery may be recommended in women with high risk
To reduce the risk of developing cancer get the pre screening done</h4>
</div>

        </div>
        <p>Breast cancer is one of the most common cancers among women worldwide. Early detection and treatment are crucial.</p>
      </section>
      <section className="support-section">
        <h2>How You Can Help</h2>
        <ul>
          <li>Donate to research initiatives</li>
          <li>Participate in awareness events</li>
          <li>Support local charities</li>
        </ul>
      </section>
      <section className="resources-section">
        <h2>Resources</h2>
        <p>Find more information and support at:</p>
        <ul>
          <li><a href="" target="_blank" rel="noopener noreferrer"></a></li>
          <li><a href="https://www.nationalbreastcancer.org" target="_blank" rel="noopener noreferrer">National Breast Cancer Foundation</a></li>
        </ul>
      </section>
      <footer className="footer">
        <p>© 2024 Breast Cancer Awareness. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Info;

