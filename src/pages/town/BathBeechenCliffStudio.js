
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


const  BathBeechenCliffStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Beechen Cliff, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Beechen Cliff, Bath</b> for the academic year 2024. <b>Studio Apartments for Students in Beechen Cliff, Bath</b> are ideal for students looking for a comfortable living space close to their university. These apartments offer a convenient and affordable housing option for students studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-beechen-cliff-bath.png')} alt='Studio Apartments for Students in Beechen Cliff, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71094&type=Studio&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Beechen Cliff, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_beechen_cliff,_bath_pp/pm">Prices for Studio Apartments for Students in Beechen Cliff, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Studio Apartments for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_beechen_cliff,_bath">Cheap Studio Apartments for Students in Beechen Cliff, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__recently_added">Studio Apartments for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__recently_reduced">Studio Apartments for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_beechen_cliff,_bath__houses_pp/pm">Prices for Studio Apartments for Students in Beechen Cliff, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__beechen_cliff,_bath">Student Accommodation Portal - Beechen Cliff, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__private_rental_sector">Studio Apartments for Students in Beechen Cliff, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__fully_furnished">Studio Apartments for Students in Beechen Cliff, Bath - Fully Furnished</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__near_to_city_center_?">Studio Apartments for Students in Beechen Cliff, Bath - Near to City Center ?</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__near_to__to_the_university_of_bath">Studio Apartments for Students in Beechen Cliff, Bath - Near to  to the University of Bath</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__near_to__to_the_bath_spa_university">Studio Apartments for Students in Beechen Cliff, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_beechen_cliff,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Beechen Cliff, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Beechen Cliff, Bath, Somerset looking for hassle-free accommodation? Look no further than <b>UniBills.com</b>! Subscribing to an <b>all bills inclusive</b> service is the perfect way to <b>concentrate on your studies</b> without the stress of managing utilities and expenses. By opting for the all inclusive option provided by <b>UniBills.com</b>, you can enjoy the convenience of having all your bills covered in one easy monthly payment. Say goodbye to unexpected costs and hello to a budget-friendly living arrangement. <b>UniBills.com</b> takes care of everything so you can focus on what truly matters – your education. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student studio living experience a breeze.</p><a id = "cheap_studio_apartments_for_students_in_beechen_cliff,_bath"> <h2>Cheap Studio Apartments for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_beechen_cliff,_bath__houses_pp/pm"> <h2>Prices for Studio Apartments for Students in Beechen Cliff, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton tableButton' title='Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><div/> </td><td className = {classNameHideForMobile}>£795 </td><td className = {classNameHideForMobile}>£1690 </td><td>£1287 </td><td className = {classNameHideForMobile}>£184 </td><td className = {classNameHideForMobile}>£393 </td><td>£299 </td></tr></table></p><a id = "student_accommodation_portal__beechen_cliff,_bath"> <h2>Student Accommodation Portal - Beechen Cliff, Bath</h2></a><p>Are you a student looking for accommodation in the beautiful city of <b>Bath</b>? Look no further than our property portal, which specializes in finding the perfect student accommodation in <b>Beechen Cliff</b>, <b>Bath</b>. Situated near the University of <b>Bath</b> and <b>Bath</b> Spa University, <b>Beechen Cliff</b> offers a convenient and vibrant location for students. Our portal makes it easy to browse a wide range of options, from cozy apartments to spacious shared houses, all within close proximity to campus and local amenities. Whether you prefer a quiet study space or a lively student community, our listings are sure to cater to your needs. Take the stress out of finding accommodation and let us help you discover your ideal student living situation in <b>Beechen Cliff</b>, <b>Bath</b>.</p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Private Rental Sector</h2></a><p>If you are looking for <b>student private rental sector</b> accommodation in Bath, Beechen Cliff has a variety of options to suit your needs. From a cozy <b>studio apartment</b> to a spacious <b>2 - 10 bedroom house</b>, there is something for everyone. Many rental properties in this area come <b>fully furnished</b>, taking the hassle out of furnishing the space yourself. Additionally, some landlords even include bills in the rental price, making budgeting a breeze for students. The convenience of living in Beechen Cliff, with its close proximity to local amenities and transportation links, makes it a popular choice for those seeking a comfortable and convenient living arrangement during their time in Bath.</p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__fully_furnished"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Fully Furnished</h2></a><p>Located in the picturesque city of Bath, Beechen Cliff offers fully furnished student Studios designed to provide a comfortable and convenient living space for students. These Studios come with all the essential furniture and appliances, saving students the hassle of having to purchase and transport their own. From a cozy bed and study desk to a fully equipped kitchen and modern bathroom, these Studios are equipped with everything a student needs for a successful academic year. In today's fast-paced world, it is normal for student Studios to be fully furnished, and Beechen Cliff goes above and beyond to ensure that students have a stress-free living experience. With a prime location near the city center and various amenities within walking distance, Beechen Cliff's <b>fully furnished Studios</b> offer a perfect blend of comfort and convenience for students looking to thrive in their studies while enjoying the vibrant city of Bath.</p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__near_to_city_center_?"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Near to City Center ?</h2></a><p>Located just a stone's throw away from <b>Bath city center</b>, <b>Beechen Cliff</b> offers <b>student Studios</b> that are conveniently situated within a few <b>miles</b> of the bustling heart of the city. This prime location allows students to easily access all the amenities and attractions that Bath has to offer, from its historic architecture and vibrant shopping districts to its renowned restaurants and cultural hotspots. Whether you're looking to explore the famous Roman Baths, stroll along the picturesque River Avon, or indulge in some retail therapy at SouthGate shopping center, everything is just a short distance away from the <b>student Studios</b> at <b>Beechen Cliff</b>. With such close proximity to <b>Bath city center</b>, students can truly immerse themselves in the rich history and lively atmosphere of this charming city.</p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__near_to__to_the_university_of_bath"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Near to  to the University of Bath</h2></a><p>Beechen Cliff, a popular residential area in Bath, is conveniently close to the <b>University of Bath</b>. Situated just a few <b>miles</b> away from the campus, Beechen Cliff offers a variety of accommodation options ideal for students, including <b>Student Studios</b>. For those looking for quick and easy access to the university, Beechen Cliff is within a short distance <b>by foot</b>, making it a convenient choice for those who prefer to walk or cycle to campus. Additionally, the area is well connected <b>by bus</b> routes, providing students with a hassle-free commute to the university. For those who prefer to drive, Beechen Cliff is easily accessible <b>by car</b>, offering a convenient and efficient option for transportation to and from the <b>University of Bath</b>. With its close proximity and various transport options, Beechen Cliff is a great location for students looking for a convenient and well-connected place to live near the university.</p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__near_to__to_the_bath_spa_university"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Near to  to the Bath Spa University</h2></a><p>Beechen Cliff is conveniently located near <b>Bath Spa University</b>, just a few <b>miles</b> away. Students living in Beechen Cliff can easily access the university campus <b>by foot</b>, taking a scenic walk or bike ride through the city. Alternatively, there is a direct <b>bus route</b> that connects Beechen Cliff to <b>Bath Spa University</b>, making commuting between the two locations fast and convenient. For those with access to a car, the journey can be completed in just a few minutes, providing a quick and easy way to travel to and from campus. Additionally, Beechen Cliff is known for its student-friendly amenities, with modern <b>Student Studios</b> and cozy accommodations available for those looking to live close to the university. Overall, Beechen Cliff offers the perfect balance of proximity to <b>Bath Spa University</b> and a peaceful living environment for students.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, searching for studio apartments for students in Beechen Cliff, Bath can be a rewarding experience. The variety of options available in this sought-after location cater to different preferences and budgets, providing a comfortable and convenient living space for students. From furnished studios with modern amenities to affordable options within walking distance of the university campus, there is something for everyone. The vibrant community atmosphere and proximity to local amenities enhance the overall student living experience in Beechen Cliff. In conclusion, finding the perfect studio apartment in Beechen Cliff can offer students a cozy and practical space to focus on their studies while enjoying the vibrant surroundings of Bath. With its convenient location and diverse range of options, Beechen Cliff provides an ideal setting for students to thrive during their academic journey.</p></>)
};

export default BathBeechenCliffStudio;