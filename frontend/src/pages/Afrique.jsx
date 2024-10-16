import React from "react";
import { Link } from "react-router-dom";
import afrik6 from "../assets/images/afrik6.jpg";
import lisca from "../assets/images/lisca.mp4"
import ReactPlayer from "react-player";
import afriStatic from "../assets/images/afriStatic.jpg"

const Afri = ()=>{

return(
    
    <>
    <div className="afrikmedia">
<ReactPlayer url={lisca} controls= {true} playing={true} width="100%"></ReactPlayer>

<div>
    <img src={afriStatic} alt=""  />
</div>

<div>
    <h4>
    Abstract

Breast cancer is one of the leading causes of mortality in women globally. 
In Africa, breast cancer ranks as the most common cancer type in women. 
It is associated with several risk factors like lifestyle, genetic and environmental influences.
 The incidence and mortality rate of breast cancer in women varies across the Africa continent according to risk factor. Amongst the breast cancer subtypes, triple negative breast cancer (TNBC) is the most common among African women. Factors such as late presentation, lack of infrastructure for screening and therapeutic intervention, and lack of awareness have contributed to lower survival rate to breast cancer in Africa. The highest mortality and incidence rate reported for breast cancer was in the West Africa region. Although, there seems to be an under-reporting of the actual breast cancer burden in Africa. This review highlights breast cancer incidence rate, mortality rate, survival rate, risk factors, and tumor biology across various regions in Africa. 
<br />
<b>Keywords: Breast cancer, genetics, lifestyle, mortality rate, tumor biology </b>
    </h4>

    <h3>Introduction</h3>
    <h4>Globally, cancer is one of the major non-communicable diseases of public health interest. Cancer is a leading cause of death in various continents of the world with an increasing incidence and mortality rate in Africa (Bahnassy et al., 2020; Hamdi et al., 2021; Sharma et al., 2022). The survival rate for black individuals has been reported to be lower when compared to white individuals for most cancer types (Siegel et al., 2022). No organ of the body is exempted from undergoing malignant changes although some may be more prone than others in different sexes. Breast cancer is one of the commonest cancer types affecting women worldwide with multifaceted risk factors and heterogeneous clinical disease outcomes (Mousayi et al., 2007; Ferlay et al., 2015). Pfeiffer et al. (2018) attributed the gradual increase in the incidence rate of breast cancer in women from the mid-2000s to be partly due to declined fertility rate and body overweight. Earlier review report by Kesley et al. (1993) associated nulliparity to increased risk of having breast cancer after 40 years while multiple pregnancies carried to Full-term decreases the risk of breast cancer after 40 years. </h4>
<br />
<h4>Breast cancer burdens across different countries of the world are usually measured using estimates of age, age-standardized incidence and mortality ratios, mortality-incidence ratio (a useful proxy indicator of 5-year survival rate), a 5- year prevalence and human development index (HDI) (Sharma, 2020). This HDI is a summary measure of three developmental indicators: education (mean and expected years of schooling), income (gross national income per capita) and health (focus on life expectancy) (UNDP, 2018). Hu et al. (2016) analysis of GLOBOCAN 2012 report revealed that the breast cancer burden varies according to the human developmental status and health care system of countries. The need for more studies to know the exact effect of socioeconomic status and healthcare services on breast cancer outcomes was advocated for based on this retrospective analysis by Hu et al. (2016). The incidence and mortality rate of female breast cancer globally as reported by GLOBOCAN 2020 was 11.7% and 6.9%, respectively, higher than other estimated cancer types.</h4>
<br />
<h4>In Africa, breast cancer is the second cause of death in women. The report of GLOBOCAN 2018 showed that breast cancer represents 27.7% of the total cancer burden in African countries and is closely followed by cervical cancer with 19.6% representation of the total cancer cases (Bahnassy et al., 2020). GLOBOCAN 2020 reports that breast cancer is the most common cancer type in females in Africa with an average of 186,598 new cases and 85,787 deaths. Female breast cancer cases have risen in Africa due to certain risk factors associated with genetics, environmental influences and lifestyle changes such as marital delay, breastfeeding duration and menarche time of onset (Porter, 2008; Arnold et al., 2015; Sharma, 2016; Li et al., 2017). A 2002 collaborative study that evaluated 47 epidemiologic studies in 30 countries involving about 50,302 breast cancer cases and 96,973 controls discovered that there was a reduction in the relative risk for breast cancer in parous women by 4.3% and 7%, for every 12 months a woman breastfeeds and for each full-term birth, respectively.  Recent review report from United Kingdom revealed that breast feeding reduces the risk of breast cancer in BRCA1 mutation carriers (22-50%). This finding was attributed to changes in RNA processing and cellular differentiation associated with pregnancy (Stordal, 2022). Marital delay serves as a risk factor to breast cancer mostly because of its association with delayed age at first full term pregnancy. Early menarche has been reported to increase the risk of breast cancer due to early exposure of the mammary epithelium to estrogen (Clavel-Chapelon, 2002; Key et al., 2011; Willet et al., 2014).</h4>
<br />
<h4>Saberian et al. (2021) showed that the incidence rate of breast cancer per 100000 persons in 53 African countries rose from 18.3 to 24.6 from 1990 to 2016. While a report by Hamdi et al. (2021) showed that the fatality rate of breast cancer decreased from 2002 to 2008 and remained relatively constant from 2012 to 2018 in all African regions. According to Sharma (2020), the age-related incidence of breast cancer was high among persons 30 to 49 years while the mortality to incidence ratio (MIR) in Africa as of 2018 was 0.44.

Several factors such as late presentation, lack of infrastructure for screening and therapeutic intervention, and lack of awareness have contributed to the high mortality rate and lower survival rate (Allemani et al., 2018; Sharma, 2020). According to Abdulrahman and Rahman (2012), 50-75% of African women are presented with the advanced stage of breast cancer. Jedy-Agba et al. (2016) stated that advanced stage presentation is the major contributory factor to the breast cancer burden in Africa. The challenge of breast cancer screening in Africa is greatly dependent on a lack of financial aid, and inadequate well-trained technicians and radiologists (Corbex et al., 2012; Denny et al., 2017). Although mammography is the gold standard for breast cancer screening, but many times, mammograms may miss tumors due to the breast tissue density (Tsu et al., 2013).  </h4>

<br />
<h4>Many risk factors have been associated with an increase in breast cancer in Africa and they include use of contraceptives, obesity, lower parity, sedentary lifestyle, older age at first birth, reduction in breastfeeding duration, high-calorie diets, gene-environmental interactions and genetic predispositions (Joko-Fru et al., 2020). Nulliparity may be a risk factor for luminal-type breast cancer as pregnancy and breastfeeding may reduce the number of menstrual cycles, decreasing the hormone-associated risk of luminal-type breast cancer (Yang and Jacobsen, 2008; Lambertini et al., 2016; Anstey et al., 2017).  The pattern of breast cancer occurrence across Africa varies with countries according to the changing risk factors (Joko-Fru et al., 2020). Although genetic mutation has been implicated as a breast cancer risk factor, evidence to support this in Africa is limited due to genetic diversity and poor genetic testing (Gomez et al., 2013; Kantelhardt et al., 2015).

Breast cancer subtypes such as estrogen receptor-positive/negative BC, progesterone positive BC, human epidermal growth factor receptor 2 BC and triple-negative BC exist. These subtypes have varying prognoses and can be influenced by genetic, viral, environmental, social and cultural factors (Biancolella et al., 2021; Nwagu et al., 2021). Triple-negative breast cancer subtypes have been reported to be of high incidence in African women and account for 12-20% of all breast cancer (Anders and Carey, 2009).</h4>
<br />
<h4>The African continent is divided into 2 major regions of Sub-Saharan Africa and Northern Africa while Sub-Saharan Africa is divided into 4 sub-regions which comprise: Western, Eastern, Central and Southern Africa. This review aims at bringing together available and accessible research papers on breast cancer statistics and scenarios across the different regions in Africa for better policy enactment and implementation to reduce the breast cancer burden in Africa.</h4>
<br />
<h3></h3>
<h4></h4>
</div>
</div>
</>

)

    
}
export default  Afri;