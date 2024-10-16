import React from "react";
import { Link } from "react-router-dom";
import afrik6 from "../assets/images/afrik6.jpg";
import lisca from "../assets/images/lisca.mp4"
import ReactPlayer from "react-player";
import usabc from '../assets/images/usabc.jpg'
import YouTubePlayer from "react-player/youtube";

const America =()=>{


    return(
        <>
       
        <div className="usContainer">
 <h3>Breat cancer in north America</h3>
 <img src={usabc} alt="1 women in 8" className="imgusa" />
 <div> Breast cancer is a significant health concern in North America, particularly in the United States1
 . Here are some key statistics:</div>
 <div><b>New Cases:</b> In 2024, it's estimated that 310,720 new cases of invasive breast 
    cancer will be diagnosed in women in the U.S., along with 56,500 new cases of 
    non-invasive (in situ) breast cancer</div>

    <b>Survival Rates:</b> About 63% of breast cancer cases are diagnosed at a localized stage, with a 5-year relative survival rate of 99%
<div><b>Deaths:</b> An estimated 42,250 women will die from breast cancer in 2024
</div>
<div><b>Survivors:</b> There are currently over 4 million breast cancer survivors in the United States
</div>
<div>Breast cancer remains the most common cancer among American women, except for skin cancers1
. Early detection and advances in treatment have significantly improved survival rates over the years</div>

<div>In 2024, an estimated 310,720 new cases of invasive breast cancer will be diagnosed in women in the U.S., as well as 56,500 new cases of non-invasive (in situ) breast cancer.1
There are currently over 4 million breast cancer survivors in the United States.1
An estimated 42,250 U.S. women will die from breast cancer in 2024.1 
Risk of breast cancer recurrence depends on the type and staging of the initial breast cancer. Typically, the highest risk of recurrence is during the first few years after treatment and decreases over time.2</div>

<h3>Breast cancer incidence in the United States</h3>
<div>1 in 8 women, or approximately 13% of the female population in the U.S., will develop breast cancer in their lifetime.1
Breast cancer is the most common cancer in American women, except for skin cancers.1
It is estimated that in 2024, approximately 30% of all new female cancer diagnoses will be breast cancer.1
On average, every 2 minutes a woman is diagnosed with breast cancer in the United States.1
Approximately 66% of breast cancer cases are diagnosed at a localized stage, before cancer has spread outside of the breast, when it is easiest to treat.3
The 5-year relative survival rate for cancer diagnosed at the localized stage is 99%.1
Approximately 15% of women diagnosed have a family history of breast cancer. Those with a first-degree relative (mother, sister, daughter) 
with breast cancer are nearly twice as likely to develop breast cancer themselves.</div>

<h3>Breast cancer statistics by age</h3>
<div>Though breast cancer in the United States occurs primarily in middle-aged and older women, age is not the only risk factor for a breast cancer diagnosis. Many risk factors beyond age may contribute to a breast cancer diagnosis, and sometimes there are no discernable risk factors at all.

The average age of U.S. women diagnosed with breast cancer is 62 years old.1
Half of U.S. women who develop breast cancer are 62 years of age or younger when they are diagnosed.1
About 9% of all new breast cancer cases in the U.S. are diagnosed in women younger than 45 years old.5
Younger people, particularly those under age 35 at the time of their original breast cancer diagnosis, face a higher risk of breast cancer recurrence.6
</div>
<h3>Breast cancer statistics by ethnicity</h3>
<div>In the United States, breast cancer occurs within every racial and ethnic group. However, there are variations in statistics and outcomes across the different groups. Learn more about how NBCF is addressing disparities in breast cancer.</div>
<h2>Black Women:</h2>
<div>The average age of Black women diagnosed with breast cancer is 60 years old, compared to an average age of 62 for white women.1
Black women are 40% more likely to die from breast cancer than white women.1
Black women have the lowest 5-year relative breast cancer survival rate of any racial or ethnic group.1 
1 in 5 Black women with breast cancer are diagnosed with triple-negative breast cancer, which is harder to treat. This is higher than any other racial or ethnic group.1</div>
<h2>Hispanic Women:</h2>

<div>Overall, Hispanic women have a 20% lower incidence rate of breast cancer than other groups.7
Hispanic women are more likely than white women to be diagnosed with breast cancer at later stages when it is more difficult to treat.1
Breast cancer is the leading cause of cancer death for Hispanic women.1
Asian, Pacific Islander, American Indian, and Alaska Native Women:

Asian and Pacific Islander women are more likely to be diagnosed with localized (earlier stage, more treatable) breast cancer than other groups.1
Asian and Pacific Islander women have the lowest death rate from breast cancer.1
American Indian and Alaska Native women have the lowest incidence rate of developing breast cancer.1
Chinese and Japanese women have the highest breast cancer survival rates.7</div>
<h3> Breast cancer survival & mortality statistics</h3>

<div>Breast cancer survival rates are calculated using different forms of data, including the type and staging of breast cancer at diagnosis. These rates give an idea of what percentage of people with the same type and stage of cancer are still alive after a certain time period—usually 5 years—after they were diagnosed. This is called the 5-year relative survival rate.

The 5-year relative survival rate in the U.S. for all types and stages of breast cancer combined is 91%.1
The 5-year relative survival rate in the U.S. of localized (early stage) breast cancer is 99%.</div>
<div>Breast cancer is the second leading cause of cancer death in U.S. women, behind lung cancer. The chance that a woman will die from breast cancer is 1 in 39, or about 2.5%.1
In 2024, an estimated 42,250 women will die from breast cancer in the U.S.1
Breast cancer death rates have slowly decreased since 1989, for an overall decline of 43% through 2020. This is in part due to better screening and early detection efforts, increased awareness, and continually improving treatment options.1
Women who receive regular screenings for breast cancer have a 26% lower breast cancer death rate than women who do not receive screenings.</div>
<h3>Breast cancer in men statistics</h3>
<div>All people are born with some breast cells and tissue, including men. Although rare, men get breast cancer too. 

In 2024, an estimated 2,800 men will be diagnosed with invasive breast cancer in the United States.1
An estimated 530 U.S. men will die from breast cancer in 2024.1
The lifetime risk of a U.S. man developing breast cancer is about 1 in 726.1
Black men with breast cancer tend to have a worse prognosis, or outlook, than white men with breast cancer.1
Awareness is the first step in making informed choices about breast health. Donate now to help NBCF support more women and men facing breast cancer in communities throughout the United States.

</div>
        </div>
<div className="youtubelink"> 
    <ReactPlayer url="https://www.youtube.com/watch?v=atqywLmD75g&t=4s"></ReactPlayer>
</div>
        
        </>
    )
}


export default America;