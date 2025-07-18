---
title: "Cann | Publications"
layout: textlay
excerpt: "publications."
sitemap: false
permalink: /publications/
---

<br>

<img src="{{site.baseurl}}/images/pubpic/cover_publication.png" alt="" />

<br>
<br>

<div style="width:90%; text-align:justify"></div>

## Publications

<br>

<div style="text-align:justify" markdown="1">

<p style="font-size: 18px"><i>For a complete list and updated publications, go to: <a href="https://scholar.google.com/citations?hl=vi&user=xnzuZiAAAAAJ&view_op=list_works&authuser=3&sortby=pubdate"><i class="ai ai-google-scholar-square"></i> Google Scholar</a></i></p>

<br>

{% assign number_printed = 0 %}
{% for publi in site.data.featurepub %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
 <p style="font-size:17px; text-align: left"><pubtit>{{ publi.title }}</pubtit></p>
 <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="50%" style="float: left" />
 <p style="font-size:16px; text-align: left">{{ publi.description }}</p>
 <p style="font-size:15px; text-align: left"><b>{{ publi.journal }}</b></p>  
 <p style="font-size:15px; text-align: left">DOI: <a href="{{ publi.doi.url }}">{{ publi.doi.display }}</a> </p>

 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>


</div>

<hr>


<h2>Peer reviewed Articles</h2>

<ol reversed>
<br>

<i class="fa fa-users"></i><i> Author's name is: <u>Can Trong Nguyen</u> | <u>Nguyen Trong Can </u> | <u>Trong Can Nguyen </u></i> <i>(+ Corresponding Author)</i> <br>

<p style='color: #2596be; font-size: 18px; text-align: justify"'>First author: <b>10</b> papers; First & corresponding author: <b>09</b> papers; Corresponding author: <b>10</b> papers</p> 

<br>


<h3>2025 </h3>

<li><b>Nguyen, C. T.+</b>, Diem, K. P.+, Nghia, D. H., Diem, N. K., Diep, N. T. H., Phan, T. N., Minh, V. Q., Quang, N. H., 2025. Leveraging Convolutional Neural Networks and Textural Features for Tropical Fruit Tree Species Classification. Remote Sensing Applications: Society and Environment. 39, 101633 <a href="https://doi.org/10.1016/j.rsase.2025.101633">10.1016/j.rsase.2025.101633</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2025_RSASE_CNN_TropiTrees.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br> 


<li>Diep, N.T.H., Nguyen, T. N., Diem, P.K., & <b>Nguyen, C. T.+</b>, 2025. Benefits and Trade-Offs from Land Use and Land Cover Changes Under Different Scenarios in the Coastal Delta of Vietnam. Land. 14 (5, <i>SI: Harnessing the Power of Land Mapping Data for Effective Land Policy Development</i>), 1063 <a href="https://doi.org/10.3390/land14051063">10.3390/land14051063</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2025_land_LUCC_benefits_tradeoffs.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li><b>Nguyen, C. T.+</b>, Downes, N. K., Sitthi, A., & Losiri, C., 2025. Tourism-Induced Land Use Transformations, Urbanisation, and Habitat Degradation in the Phu Quoc Special Economic Zone. Urban Science, 9(1), 11. <a href="https://doi.org/10.3390/urbansci9010011">10.3390/urbansci9010011</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2025_urbansci_LULCC_Habitat_quality_Phu_Quoc.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>



<h3>2024 </h3>

<li><b>Nguyen, C. T.+</b>, Loc, T. T., & Tien, P. D., 2024. Land use, land cover changes and expansion of artificial reservoirs in Eastern Thailand: Implications for agriculture and vegetation drought reduction. Environmental Monitoring and Assessment. 196 (<i>SI: Agricultural Water Management for a Sustainable Future: Technologies and Strategies</i>), 1009 <a href="https://doi.org/10.1007/s10661-024-13151-7">10.1007/s10661-024-13151-7</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2024_EMA_LUCCC_ESS_Rayong.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li><b>Nguyen, C. T.+</b>, Nguyen H., Sakti, A. D., 2024. Seasonal Characteristics of Outdoor Thermal Comfort and Residential Electricity Consumption: A Snapshot in Bangkok Metropolitan Area. Remote Sensing Applications: Society and Environment. 33, 101106. <a href="https://doi.org/10.1016/j.rsase.2023.101106">10.1016/j.rsase.2023.101106</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2023_RSASE_101106_Thermal_comfort.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>



<h3>2023 </h3>

<li><b>Nguyen, C. T.+</b>, & Chidthaisong A., 2023. Ecosystem Services Provided by Urban Green Spaces in Bangkok Metropolis: Public Awareness and Planning Implications. Urban Ecosystems. 27, 855–868 <a href="https://doi.org/10.1007/s11252-023-01482-1">10.1007/s11252-023-01482-1</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2023_UE_ESS_UGS.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

<li> Diem, P. K., <b>Nguyen, C. T.+</b>, Diem, N. K., Diep, N. T. H., Thao, P. T. B., Hong, T. G., Phan, T. N., 2024. Remote sensing for urban heat island research: Progress, current issues, and perspectives. Remote Sensing Applications: Society and Environment. 33(January 2024), 101081 <a href="https://doi.org/10.1016/j.rsase.2023.101081">10.1016/j.rsase.2023.101081</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2023_RSASE_101081_review_uhi.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li>Diem, P.K., Diem, N.K., <b>Nguyen, C.T.</b>, Minh  V.Q., 2023. Impacts of extreme drought on rice planting calendar in Vietnamese Mekong Delta. Paddy and Water Environment. 22, 139–153. <a href="https://doi.org/10.1007/s10333-023-00958-2">10.1007/s10333-023-00958-2</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2023_PAWE_drought_rice_calendar.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li><b>Nguyen, C. T.+</b>, Kaewthongrach, R., Channumsin, S., Chongcheawchamnan, M., Phan, T.-N., & Niammuad, D., 2023. A regional assessment of ecological environment quality in Thailand special economic zone: Spatial heterogeneous influences and future prediction. Land Degradation & Development, 34(18 <i> Special Issue: Environmental Governance and Land Degradation Neutrality in Coastal and Transitional Ecosystems</i>), 5770-5787. <a href="https://doi.org/10.1002/ldr.4876"> 10.1002/ldr.4876</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2023_ldr_4876_ecological_environment_eec.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>



<h3>2022 </h3> 

<li>Diep, N.T.H., Loc, H.H., <b>Nguyen, C.T.</b>, Park, E., & Thanh, T., 2022. Spatial-social evaluations of ecosystem services of adaptive aquaculture models using SAR and multivariate analyses: a case in the Vietnamese Mekong Delta. Environmental Monitoring and Assessment, 194(778). <a href="https://link.springer.com/article/10.1007/s10661-022-10182-w"> 10.1007/s10661-022-10182-w</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2022_EMA_ess_aquaculture_soc_trang.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

<li> <b>Nguyen, C.T.+</b>, Chidthaisong, A.+, Limsakul, A., Varnakovida, P., Ekkawatpanit, C., Diem, P. K., & Diep, N. T. H., 2022. How do disparate urbanization and climate change imprint on urban thermal variations? A comparison between two dynamic cities in Southeast Asia. Sustainable Cities and Society, 82(July 2022), 103882. <a href="https://doi.org/10.1016/j.scs.2022.103882"> 10.1016/j.scs.2022.103882</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2022_SCS_103822_urban_heat_bkk_hcm.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

<li> Diep, N.T.H., <b>Nguyen, C.T.+</b>, Diem, P.K., Hoang, N.X., Kafy, A.A., 2022. Assessment on controlling factors of urbanization possibility in a newly developing city of the Vietnamese Mekong delta using logistic regression analysis. Physics and Chemistry of the Earth, Parts A/B/C, 126, 103065. <a href="https://doi.org/10.1016/j.pce.2021.103065"> 10.1016/j.pce.2021.103065</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2022_PCE_103065_urbanization_can_tho.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  
<br> 

<li> Diem, P. K., Diem, N. K., <b>Can, N. T.</b>, Minh, V. Q., Huong, H. T. T., Diep, N. T. H., & Tao, P. C., 2022. Assessing the applicability of Fusion Landsat-MODIS data for mapping agricultural land use - A case study in An Giang Province. IOP Conference Series: Earth and Environmental Science, 964(1), 012005. <a href="https://doi.org/10.1088/1755-1315/964/1/012005"> 10.1088/1755-1315/964/1/012005</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2022_IOP_modis_landsat_fusion.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>



<h3> 2021 </h3> 

<li> <b>Nguyen, C.T.</b>, Chidthaisong, A., Diem, P.K., Huo, L., 2021. A Modified Bare Soil Index to Identify Bare Land Features during Agricultural Fallow-Period in Southeast Asia Using Landsat 8. Land 10, 1–17. <a href="https://doi.org/10.3390/land10030231"> 10.3390/land10030231</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2021_land_bare_soil_index_mbi.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

<li> Yaung, K. La, Chidthaisong, A., Limsakul, A., Varnakovida, P., <b>Nguyen, C.T.</b>, 2021. Land Use Land Cover Changes and Their Effects on Surface Air Temperature in Myanmar and Thailand. Sustainability 13, 1–21.<a href="https://doi.org/10.3390/su131910942"> 10.3390/su131910942</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2021_sustainability_lulcc_air_temperature_thailand_myanmar.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

<li> <b>Nguyen, C.T.+</b>, Diep, N.T.H., Iabchoon, S., 2021. Direction of urban expansion in the Bangkok Metropolitan Area, Thailand under the impacts of a national strategy. Vietnam Journal of Earth Sciences. 43. <a href="https://doi.org/10.15625/2615-9783/16313"> 10.15625/2615-9783/16313</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2021_VJES_urbanization_direction_BMA.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

<li> Loc, H.H., Park, E., Thu, T.N., Diep, N.T.H., <b>Can, N.T.</b>, 2021. An enhanced analytical framework of participatory GIS for ecosystem services assessment applied to a Ramsar wetland site in the Vietnam Mekong Delta. Ecosystem Services. 48, 101245. <a href="https://doi.org/10.1016/j.ecoser.2021.101245"> 10.1016/j.ecoser.2021.101245</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2021_ESS_101245_PPGIS_UMT.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>



<h3>2020 </h3> 

<li><b>Nguyen, C.T.+</b>, Diep, N.T.H., Diem, P.K., 2020. Factors Affecting Urban Electricity Consumption: a case study in the Bangkok Metropolitan Area using an Integrated approach of Earth Observation data and Data analysis.  Environmental Science and Pollution Research. 28 (SI: Environmental and Energy Management), 12056–12066. <a href="https://doi.org/10.1007/s11356-020-09157-6"> 10.1007/s11356-020-09157-6</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2020_ESPR_surface_change_electricity_bkk.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

<li> Nguyen, T. H. D., <b>Nguyen, T. C.</b>, Nguyen, T. N. T., & Doan, T. N. (2020). Flood inundation mapping using Sentinel-1A in An Giang province in 2019. Vietnam Journal of Science, Technology and Engineering, 62(4), 36–42. <a href="https://doi.org/10.31276/vjste.62(4).36-42"> 10.31276/vjste.62(4).36-42</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2019_VJSTE_S1_flood.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>



<h3> 2019 </h3> 

<li><b>Can, N.T.+</b>, Diep, N.T.H., Iabchoon, S., Varnakovida, P., Minh, V.Q., 2019. Analysis of Factors Affecting Urban Heat Island Phenomenon in Bangkok Metropolitan Area, Thailand. VNU Journal of Science: Earth and Environmental Sciences. 35, 53–62. <a href="https://doi.org/10.25073/2588-1094/vnuees.4355"> 10.25073/2588-1094/vnuees.4355</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2019_VNUEES_UHI_BMA.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li> Diep, N. T. H., Korsem, T., <b>Can, N. T.</b>, Phonphan, W., & Vo Quang Minh., 2019. Determination of aquaculture distribution by using remote sensing technology in Thanh Phu district, Ben Tre province, Vietnam. Vietnam Journal of Science, Technology and Engineering, 61(2), 35–41. <a href="https://doi.org/10.31276/VJSTE.61(2).35-41"> 10.31276/VJSTE.61(2).35-41</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2018_VJSTE_Aquaculture_Ben_Tre.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>



<h3>2017 </h3> 

<li> Loc, H.H., Diep, N.T.H., <b>Can, N.T.</b>, Irvine, K.N., Shimizu, Y., 2017. Integrated evaluation of Ecosystem Services in Prawn-Rice rotational crops, Vietnam. Ecosystem Services. 26, 377–387. <a href="https://doi.org/10.1016/j.ecoser.2016.04.007"> 10.1016/j.ecoser.2016.04.007</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2017_ESS_Ecosystem_service_rice_shrimp.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

</ol>


<hr>
 

<h2>Book chapters</h2>

<ol reversed>

<li><b>Nguyen, C.T.+</b>, Noszczyk, T., & Iabchoon, S., 2025. Soil Textures and Urban Heat: Cooling Planning Strategies. In: Gupta, M. (ed) <a href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003485278-40/soil-textures-urban-heat-trong-nguyen-tomasz-noszczyk-sanwit-iabchoon">Remote Sensing for Geophysicists</a>. CRC Press, Taylor & Francis Group, Boca Raton, FL, USA. ISBN: 9781032778921 <a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2025_Chapter31_Soil_texture_urban_heat.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li>Nguyen, T.H.D., Thao, P.T.B., Diem, P,K., Diem, N.K., Downes, N.K., <b>Nguyen, C.T.</b>, Linh, H.N., Hoang, N.X., 2025. Greenhouse Gas Emission Inventories Across Industrial Sectors in an Emerging Mekong Delta City. In: Boonpook, W., Lin, Z., Downes, N.K., Truong, Q.C. (eds) Applied Geography and Geoinformatics for Sustainable Development. ICGGS 2023. Springer Geography. Springer, Cham. <a href="https://doi.org/10.1007/978-3-031-84308-2_19">10.1007/978-3-031-84308-2_19</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2025_chapter_ghg_inventory_cant_tho.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li>Pham, T.D., Nguyen, D.T.H., <b>Nguyen, C.T.</b>, 2025. Drought Assessment in Paddy Rice Fields Using Multi-temporal SAR Data of Sentinel-1: A Case Study in Tra Vinh Province. In: Boonpook, W., Lin, Z., Downes, N.K., Truong, Q.C. (eds) Applied Geography and Geoinformatics for Sustainable Development. ICGGS 2023. Springer Geography. Springer, Cham. <a href="https://doi.org/10.1007/978-3-031-84308-2_7">10.1007/978-3-031-84308-2_7</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2025_chapter_drought_rice_trav_vinh.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li><b>Nguyen, C.T.+</b>, Chidthaisong, A., Kaewthongrach, R., Marome, W., 2023. Urban Thermal Environment Under Urban Expansion and Climate Change: A Regional Perspective from Southeast Asian Big Cities. In: Cheshmehzangi, A., He, BJ., Sharifi, A., Matzarakis, A. (eds) Climate Change and Cooling Cities. Urban Sustainability. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-99-3675-5_9">10.1007/978-981-99-3675-5_9</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2023_chapter_urban_heat_SEA.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li>Diem, P.K., Diem, N.K., <b>Nguyen, C.T.</b>, Diep, N.T.H., 2023. Urbanisation and Urban Heat Island in a Mekong Delta City: From Monitoring to Dominant Factors. In: Cheshmehzangi, A., He, BJ., Sharifi, A., Matzarakis, A. (eds) Climate Change and Cooling Cities. Urban Sustainability. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-99-3675-5_13">10.1007/978-981-99-3675-5_13</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2023_chapter_urban_heat_can_tho.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

</ol>

<hr>

<h2>Conference presentations</h2>

<ol reversed>

<li><b>Nguyen, C. T.</b>, Chayawatto N.+, Kubaha K., Chidthaisong A., Varnakovida P., Aregarot P., 2022. Effects of increasing green areas on campus microclimate using InVEST urban cooling model. The 8th International Conference on Sustainable Energy and Environment (SEE). Bangkok, Thailand (7-9/11/2022).</li> <br>

<li>Nguyen, D. K., Phan, D. K., <b>Nguyen, C.T.</b>, Kaewthongrach, R., Channumsin, S., Chongcheawchamnan M., 2022. Variations of urban heat island in a coastal city of Hat Yai, Thailand. The 8th International Conference on Sustainable Energy and Environment (SEE). Bangkok, Thailand (7-9/11/2022)<a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/conference/2022_SEE_UHI_Hatyai.pdf">  <i class="glyphicon glyphicon-file"></i></a></li><br> 

<li> <b>Nguyen, C. T.+</b>, and Chidthaisong, A., & Kaewthongrach R., 2022. Assessment of cooling capacity by urban parks from a multi-data source approach. The 8th International Conference on Sustainable Urban Development. Binh Duong, Vietnam (20/10/2022). pp.33-46.<a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/conference/2022_urban_green_cooling_capacity.pdf">  <i class="glyphicon glyphicon-file"></i></a><i>(<u>Published in 2024 as a book chapter in:</u> Proceedings of the 8th International Conference on Sustainable Urban Development. ICSUD 2022. Advances in 21st Century Human Settlements. Springer, Singapore, (eds) Ha, V.T., Nguyen, H.N., Linke, HJ.) </i><a href="https://doi.org/10.1007/978-981-99-8003-1_9">10.1007/978-981-99-8003-1_9</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/2024_ICSUD2022_Park_cooling_distance.pdf"> <i class="glyphicon glyphicon-file"></i></a> </li><br> 

<li> <b>Nguyen, C. T.</b>, and Chidthaisong, A.+, 2022. Urban Green Space Inventory using Different Spatial Resolution Satellite Images: Practical notes in Bangkok. The 11th International Conference on Environmental Engineering, Science and Management. Bangkok, Thailand. pp. 333-340.<a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/conference/2022_green_space_inventory.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

<li> Diep, N.T.H., Loi, N.T., <b>Can, N.T.</b>, 2018. Monitoring erosion and accretion situation in the coastal zone at Kien Giang province, in: The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences, GeoInformation For Disaster Management (Gi4DM). Istanbul, Turkey, pp. 197–203. <i>(Conference).</i><a href="https://www.int-arch-photogramm-remote-sens-spatial-inf-sci.net/XLII-3-W4/197/2018/"> Link</a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/conference/2018_coastal_erosion.pdf">  <i class="glyphicon glyphicon-file"></i></a></li>  <br>

<li>Diep, N. T. H., Chi, X. D., and <b>Can, N. T.</b>, 2018. Developing an application on land use planning information in Gia Rai district, Bac Lieu province. GeoInformatics for Spatial-Infrastructure Development in Earth & Allied Sciences (GIS-IDEAS), 342–352.<a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/conference/2018_GIS_app.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li><b>Nguyen, C. T.</b>, Nguyen, D. T. H., Chi, T. B., & Ho, H. L., 2017. Ecosystem services valuation and economic approaches for intensive shrimp assessment in Kien Luong district, Kien Giang province. The International Scientific Workshop on “Scientific Research for Training Assignment”. Kien Giang, Vietnam. pp. 14–22.<a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/conference/2017_ESS_shrimp.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>

<li><b>Can, N. T.</b>, Diep, N. T. H., & Loc, H. H., 2016. Exploratory Assessment of Prawn-Rice Rotational Crops Spatial Distribution and Ecosystem Services Values. The 37th Asian Conference on Remote Sensing. Sri Lanka. <a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/conference/2016_ESS_rice_shrimp.pdf">  <i class="glyphicon glyphicon-file"></i></a></li> <br>
</ol>

<hr>

<h2>Technical reports</h2>

<ol reversed>

<li>Diem, P. K., <b>Can, N. T.</b>, Tien, P. D., Diem, N. K., Nguyen, N. T., Hong, T. G., & Vu, P. H., 2024. Report on Land Use Analysis for 13 Provinces in Vietnamese Mekong Delta in 2022. Consultative Group on International Agricultural Research (CGIAR) <a href="https://hdl.handle.net/10568/151791">  Link </a><a href="{{ site.url }}{{ site.baseurl }}/assets/Article_archive/report/2024_IRRI_Report_Landuseanalysis_CTU.pdf">  <i class="glyphicon glyphicon-file"></i></a></li><br> 
</ol>

<hr>

<h2>Publications in Vietnamese</h2>

><p style="font-size: 18px; text-align: justify">For current interest, please check out my <a href="https://www.researchgate.net/profile/Trong-Can-Nguyen/research">ResearchGate</a></p>

<br>


<hr>

