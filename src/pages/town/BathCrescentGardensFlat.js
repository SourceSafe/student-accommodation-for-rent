
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import { ViewPortal} from '../../components/ViewPortal/ViewPortal'
import { CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathCrescentGardensFlat = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isMobile,setIsMobile] = useState();    
    const [viewButtonTitle,setViewButtonTitle] = useState();    

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("townLocationId");
        const location = queryParameters.get("areaLocationId");
        const beds= queryParameters.get("beds");
        const homeType = queryParameters.get("type");        
        const newFilter = { town, location, beds, homeType};
        setFilters(newFilter)        
        setButtonClicked(true);
    }

    useEffect(()=> 
    {
        if(buttonClicked && filters) {
            navigate("/")
        }        
    }    
    ,[buttonClicked, filters]
    )

      useEffect(() => {
    const handleWindowSizeChange=() => {
        setIsMobile(window.innerWidth <= 768);            
    }
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
    }, []);


      useEffect(() => {        
        isMobile ? setViewButtonTitle("View") : setViewButtonTitle("View Properties") 
    }, [isMobile]);

  
  
  const classNameHideForMobile = isMobile ? 'hideForMobile' : '';

    return (<><h1>Student Flats in Crescent Gardens, Bath</h1><p>We have listings for <b>Student Flats in Crescent Gardens, Bath</b> for the academic year 2024.

<b>Student Flats in Crescent Gardens, Bath</b> offer modern and comfortable living spaces for students in the heart of the city. With convenient access to local amenities and transportation options, these flats provide a convenient and ideal location for students studying in Bath. Whether you are looking for a quiet study space or a place to socialize with other students, <b>Student Flats in Crescent Gardens, Bath</b> offer a welcoming and inclusive community for all residents.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-flats-in-crescent-gardens-bath.png')} alt='Student Flats in Crescent Gardens, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Flats in Crescent Gardens, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71096&type=Flat&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Flats in Crescent Gardens, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_flats_in_crescent_gardens,_bath_pp/pm">Prices for Student Flats in Crescent Gardens, Bath pp/pm</a></li><li><a href = "#student_flats_in_crescent_gardens,_bath__all_bills_inclusive">Student Flats in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_flats_in_crescent_gardens,_bath">Cheap Student Flats in Crescent Gardens, Bath</a></li><li><a href = "#student_flats_in_crescent_gardens,_bath__recently_added">Student Flats in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#student_flats_in_crescent_gardens,_bath__recently_reduced">Student Flats in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_flats_in_crescent_gardens,_bath__houses_pp/pm">Prices for Student Flats in Crescent Gardens, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__crescent_gardens,_bath">Student Accommodation Portal - Crescent Gardens, Bath</a></li><li><a href = "#student_flats_in_crescent_gardens,_bath__private_rental_sector">Student Flats in Crescent Gardens, Bath - Private Rental Sector</a></li><li><a href = "#student_flats_in_crescent_gardens,_bath__fully_furnished">Student Flats in Crescent Gardens, Bath - Fully Furnished</a></li><li><a href = "#student_flats_in_crescent_gardens,_bath__near_to_city_center_?">Student Flats in Crescent Gardens, Bath - Near to City Center ?</a></li><li><a href = "#student_flats_in_crescent_gardens,_bath__near_to__to_the_university_of_bath">Student Flats in Crescent Gardens, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_flats_in_crescent_gardens,_bath__near_to__to_the_bath_spa_university">Student Flats in Crescent Gardens, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_flats_in_crescent_gardens,_bath_pp/pm"> <h2>Prices for Student Flats in Crescent Gardens, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£946 per month </td><td><button className = 'searchButton tableButton' title='Student Flats in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_flats_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Student Flats in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Crescent Gardens, Bath, Somerset? Are you looking for a convenient way to manage your expenses and focus on your studies without worrying about utility bills? Look no further than <b>UniBills.com</b>, offering an <b>all bills inclusive</b> service for student flats in the area. By subscribing to this service, you'll no longer have to deal with the hassle of splitting bills with housemates or keeping track of multiple payments. With <b>UniBills.com</b>, you can enjoy the convenience of a single monthly payment that covers all your bills. This allows you to <b>concentrate on your studies</b> and fully immerse yourself in the student experience. Say goodbye to the stress of managing bills and embrace the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier and more enjoyable.</p><a id = "cheap_student_flats_in_crescent_gardens,_bath"> <h2>Cheap Student Flats in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_crescent_gardens,_bath__recently_added"> <h2>Student Flats in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_crescent_gardens,_bath__recently_reduced"> <h2>Student Flats in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_flats_in_crescent_gardens,_bath__houses_pp/pm"> <h2>Prices for Student Flats in Crescent Gardens, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton tableButton' title='1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '1-bedroom-student-flats-in-crescent-gardens-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£1148 </td><td className = {classNameHideForMobile}>£1452 </td><td>£1250 </td><td className = {classNameHideForMobile}>£266 </td><td className = {classNameHideForMobile}>£337 </td><td>£290 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton tableButton' title='2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '2-bedroom-student-flats-in-crescent-gardens-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£756 </td><td className = {classNameHideForMobile}>£1430 </td><td>£1157 </td><td className = {classNameHideForMobile}>£175 </td><td className = {classNameHideForMobile}>£332 </td><td>£269 </td></tr><tr><td>3 Bed Flat </td><td><button className = 'searchButton tableButton' title='3 Bed Flats' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-flats-in-crescent-gardens-bath' title  = 'View Key Statistics for 3 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£640 </td><td className = {classNameHideForMobile}>£975 </td><td>£757 </td><td className = {classNameHideForMobile}>£148 </td><td className = {classNameHideForMobile}>£226 </td><td>£176 </td></tr><tr><td>4 Bed Flat </td><td><button className = 'searchButton tableButton' title='4 Bed Flats' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-flats-in-crescent-gardens-bath' title  = 'View Key Statistics for 4 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£785 </td><td className = {classNameHideForMobile}>£785 </td><td>£785 </td><td className = {classNameHideForMobile}>£182 </td><td className = {classNameHideForMobile}>£182 </td><td>£182 </td></tr><tr><td>5 Bed Flat </td><td><button className = 'searchButton tableButton' title='5 Bed Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-crescent-gardens-bath' title  = 'View Key Statistics for 5 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£725 </td><td className = {classNameHideForMobile}>£840 </td><td>£780 </td><td className = {classNameHideForMobile}>£168 </td><td className = {classNameHideForMobile}>£195 </td><td>£181 </td></tr><tr><td>6 Bed Flat </td><td><button className = 'searchButton tableButton' title='6 Bed Flats' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '6-bedroom-student-flats-in-crescent-gardens-bath' title  = 'View Key Statistics for 6 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£775 </td><td className = {classNameHideForMobile}>£775 </td><td>£775 </td><td className = {classNameHideForMobile}>£180 </td><td className = {classNameHideForMobile}>£180 </td><td>£180 </td></tr><tr><td>9 Bed Flat </td><td><button className = 'searchButton tableButton' title='9 Bed Flats' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '9-bedroom-student-flats-in-crescent-gardens-bath' title  = 'View Key Statistics for 9 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£700 </td><td className = {classNameHideForMobile}>£700 </td><td>£700 </td><td className = {classNameHideForMobile}>£162 </td><td className = {classNameHideForMobile}>£162 </td><td>£162 </td></tr><tr><td>10 Bed Flat </td><td><button className = 'searchButton tableButton' title='10 Bed Flats' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '10-bedroom-student-flats-in-crescent-gardens-bath' title  = 'View Key Statistics for 10 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£740 </td><td className = {classNameHideForMobile}>£740 </td><td>£740 </td><td className = {classNameHideForMobile}>£172 </td><td className = {classNameHideForMobile}>£172 </td><td>£172 </td></tr></table></p><a id = "student_accommodation_portal__crescent_gardens,_bath"> <h2>Student Accommodation Portal - Crescent Gardens, Bath</h2></a><p>Looking for student accommodation in <b>Crescent Gardens</b>, <b>Bath</b>? Our property portal is here to help you find the perfect place to call home during your studies in this charming city. Located near the prestigious University of <b>Bath</b> and the vibrant <b>Bath</b> Spa University, <b>Crescent Gardens</b> offers a convenient and desirable location for students. Whether you prefer a modern studio or a cozy shared house, our portal features a variety of options to suit your needs and budget. With detailed listings, virtual tours, and helpful filters, finding your ideal student accommodation in <b>Crescent Gardens</b> has never been easier. Don't stress about your housing situation - let us assist you in securing a comfortable and convenient place to live while you focus on your academic pursuits in <b>Bath</b>.</p><a id = "student_flats_in_crescent_gardens,_bath__private_rental_sector"> <h2>Student Flats in Crescent Gardens, Bath - Private Rental Sector</h2></a><p>Looking for the perfect <b>student private rental sector</b> in Bath? Look no further than Crescent Gardens! This sought-after location offers a range of accommodation options, from a cozy <b>studio apartment</b> to a spacious 2-10 bedroom house. Whether you prefer a self-contained studio or a shared house with friends, Crescent Gardens has something for everyone. Plus, with <b>bills included</b> in the rent and <b>fully furnished</b> properties, moving in has never been easier. Enjoy all the comforts of home while being just a stone's throw away from Bath's vibrant city center.</p><a id = "student_flats_in_crescent_gardens,_bath__fully_furnished"> <h2>Student Flats in Crescent Gardens, Bath - Fully Furnished</h2></a><p>Are you a student looking for a hassle-free living experience in Bath? Look no further than Crescent Gardens and their fully furnished student Flats. These modern and stylish Flats are equipped with everything you need to feel right at home from day one. With all the furniture and appliances provided, it is normal for student Flats to be fully furnished, saving you time and money on setting up your new place. The convenient location of Crescent Gardens, close to local universities and amenities, makes it the ideal choice for students. Enjoy a comfortable and stress-free living environment with all the comforts of home in these fully furnished student Flats in Bath.</p><a id = "student_flats_in_crescent_gardens,_bath__near_to_city_center_?"> <h2>Student Flats in Crescent Gardens, Bath - Near to City Center ?</h2></a><p>Located just a stone's throw away from <b>Bath city center</b>, <b>Crescent Gardens</b> offers convenient <b>student Flats</b> that are ideal for those wanting to be close to the heart of the action. Situated merely a few <b>miles</b> from the bustling city center, residents of <b>Crescent Gardens</b> can easily access all that Bath has to offer, from its historic landmarks to vibrant nightlife. With a short commute, students can enjoy the convenience of living near their university campuses and the many amenities that the city provides. Whether it's shopping, dining, or cultural experiences, being so close to <b>Bath city center</b> means that residents of <b>Crescent Gardens</b> are never far from the excitement. This prime location offers the perfect blend of city living and peaceful surroundings, making it an excellent choice for students looking for a well-connected place to call home.</p><a id = "student_flats_in_crescent_gardens,_bath__near_to__to_the_university_of_bath"> <h2>Student Flats in Crescent Gardens, Bath - Near to  to the University of Bath</h2></a><p>Crescent Gardens is conveniently located close to the <b>University of Bath</b>, making it an ideal choice for students. The university campus is just a few <b>miles</b> away from the <b>Student Flats</b>, making it easily accessible <b>by foot</b>, bus, or car. If you prefer walking, the university is only a short distance away. For those who prefer public transportation, there is a <b>bus route</b> that connects Crescent Gardens directly to the university, providing a convenient and efficient mode of transportation. Additionally, if you have a car, the university can be reached within minutes by driving. The close proximity of Crescent Gardens to the <b>University of Bath</b> ensures that students can easily commute to and from campus, making it a convenient and desirable place to live during their studies.</p><a id = "student_flats_in_crescent_gardens,_bath__near_to__to_the_bath_spa_university"> <h2>Student Flats in Crescent Gardens, Bath - Near to  to the Bath Spa University</h2></a><p>Crescent Gardens is conveniently located just 2.5 <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal accommodation choice for students. Whether you prefer the convenience of <b>Student Flats</b> or the independence of your own space, Crescent Gardens offers a close proximity to the university campus. The university can be easily reached <b>by foot</b> in about 40 minutes, or even quicker by hopping on the near<b>by bus</b> route. For those who prefer to drive, the university is just a short distance away <b>by car</b>. With its strategic location, Crescent Gardens provides students with easy access to <b>Bath Spa University</b>, allowing for a seamless commute to and from campus. Whether you choose to travel <b>by foot</b>, <b>by bus</b>, or <b>by car</b>, Crescent Gardens offers a convenient and comfortable living environment for students attending <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Are you a student looking for the perfect flat in Crescent Gardens, Bath? Look no further! With its convenient location, vibrant atmosphere, and excellent amenities, Crescent Gardens offers an ideal living space for students. From cozy studios to spacious shared accommodations, there is a wide range of options to choose from. Not to mention, the proximity to local universities and colleges makes it a popular choice among students. Additionally, the lively neighborhood provides plenty of social and recreational opportunities, ensuring a well-rounded living experience. In conclusion, Crescent Gardens is the ultimate destination for students seeking a comfortable and convenient living space in Bath.</p></>)
};

export default BathCrescentGardensFlat;