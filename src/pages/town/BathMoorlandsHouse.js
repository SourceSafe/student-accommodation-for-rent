
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


const  BathMoorlandsHouse = () => 
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

    return (<><h1>Student Houses in Moorlands, Bath</h1><p>We have listings for <b>Student Houses in Moorlands, Bath</b> for the academic year 2024. <b>Student Houses in Moorlands, Bath</b> are popular among students because of their convenient location near the university campus and amenities within the area. These houses offer a cozy and comfortable living space for students to focus on their studies and enjoy a communal living experience with their peers.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-houses-in-moorlands-bath.png')} alt='Student Houses in Moorlands, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Houses in Moorlands, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71107&type=House&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Houses in Moorlands, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_houses_in_moorlands,_bath_pp/pm">Prices for Student Houses in Moorlands, Bath pp/pm</a></li><li><a href = "#student_houses_in_moorlands,_bath__all_bills_inclusive">Student Houses in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_houses_in_moorlands,_bath">Cheap Student Houses in Moorlands, Bath</a></li><li><a href = "#student_houses_in_moorlands,_bath__recently_added">Student Houses in Moorlands, Bath - Recently Added</a></li><li><a href = "#student_houses_in_moorlands,_bath__recently_reduced">Student Houses in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_houses_in_moorlands,_bath__houses_pp/pm">Prices for Student Houses in Moorlands, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__moorlands,_bath">Student Accommodation Portal - Moorlands, Bath</a></li><li><a href = "#student_houses_in_moorlands,_bath__private_rental_sector">Student Houses in Moorlands, Bath - Private Rental Sector</a></li><li><a href = "#student_houses_in_moorlands,_bath__fully_furnished">Student Houses in Moorlands, Bath - Fully Furnished</a></li><li><a href = "#student_houses_in_moorlands,_bath__near_to_city_center_?">Student Houses in Moorlands, Bath - Near to City Center ?</a></li><li><a href = "#student_houses_in_moorlands,_bath__near_to__to_the_university_of_bath">Student Houses in Moorlands, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_houses_in_moorlands,_bath__near_to__to_the_bath_spa_university">Student Houses in Moorlands, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_houses_in_moorlands,_bath_pp/pm"> <h2>Prices for Student Houses in Moorlands, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£691 per month </td><td><button className = 'searchButton tableButton' title='Student Houses in Moorlands, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_houses_in_moorlands,_bath__all_bills_inclusive"> <h2>Student Houses in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student at Moorlands, Bath, Somerset looking for the perfect accommodation that allows you to <b>concentrate on your studies</b> without the added stress of managing bills? Look no further than <b>UniBills.com</b>! By subscribing to an <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the headache of keeping track of multiple bills and hello to a simplified living experience. With all your bills, including utilities and Wi-Fi, bundled into one convenient package, you can focus on what truly matters – your education. Save time, avoid potential disputes with housemates, and budget more effectively with <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Moorlands, Bath, Somerset a breeze.</p><a id = "cheap_student_houses_in_moorlands,_bath"> <h2>Cheap Student Houses in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_moorlands,_bath__recently_added"> <h2>Student Houses in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_moorlands,_bath__recently_reduced"> <h2>Student Houses in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_houses_in_moorlands,_bath__houses_pp/pm"> <h2>Prices for Student Houses in Moorlands, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>3 Bed House </td><td><button className = 'searchButton tableButton' title='3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-houses-in-moorlands-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£600 </td><td className = {classNameHideForMobile}>£685 </td><td>£624 </td><td className = {classNameHideForMobile}>£139 </td><td className = {classNameHideForMobile}>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton tableButton' title='4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-houses-in-moorlands-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£495 </td><td className = {classNameHideForMobile}>£783 </td><td>£618 </td><td className = {classNameHideForMobile}>£115 </td><td className = {classNameHideForMobile}>£182 </td><td>£143 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton tableButton' title='5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-houses-in-moorlands-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£520 </td><td className = {classNameHideForMobile}>£953 </td><td>£636 </td><td className = {classNameHideForMobile}>£120 </td><td className = {classNameHideForMobile}>£221 </td><td>£147 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton tableButton' title='6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '6-bedroom-student-houses-in-moorlands-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£560 </td><td className = {classNameHideForMobile}>£953 </td><td>£772 </td><td className = {classNameHideForMobile}>£130 </td><td className = {classNameHideForMobile}>£221 </td><td>£179 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton tableButton' title='7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '7-bedroom-student-houses-in-moorlands-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£600 </td><td className = {classNameHideForMobile}>£810 </td><td>£673 </td><td className = {classNameHideForMobile}>£139 </td><td className = {classNameHideForMobile}>£188 </td><td>£156 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton tableButton' title='8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '8-bedroom-student-houses-in-moorlands-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£643 </td><td className = {classNameHideForMobile}>£953 </td><td>£798 </td><td className = {classNameHideForMobile}>£149 </td><td className = {classNameHideForMobile}>£221 </td><td>£185 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton tableButton' title='10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '10-bedroom-student-houses-in-moorlands-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£540 </td><td className = {classNameHideForMobile}>£540 </td><td>£540 </td><td className = {classNameHideForMobile}>£125 </td><td className = {classNameHideForMobile}>£125 </td><td>£125 </td></tr></table></p><a id = "student_accommodation_portal__moorlands,_bath"> <h2>Student Accommodation Portal - Moorlands, Bath</h2></a><p>Are you searching for student accommodation in <b>Moorlands</b>, <b>Bath</b>? Look no further! Our property portal is here to make your search effortless and stress-free. Situated near the University of <b>Bath</b> and <b>Bath</b> Spa University, <b>Moorlands</b> is a popular choice for students due to its convenient location and vibrant atmosphere. With our user-friendly platform, you can easily browse through a variety of student housing options in <b>Moorlands</b>, ensuring you find the perfect place to call home during your academic journey. Whether you prefer a cozy studio or a shared apartment with friends, our portal offers a wide range of accommodation options to suit your needs and budget.</p><a id = "student_houses_in_moorlands,_bath__private_rental_sector"> <h2>Student Houses in Moorlands, Bath - Private Rental Sector</h2></a><p>If you're looking for a place to live in the <b>student private rental sector</b> in Bath Moorlands, you're in luck! There is a wide range of options available, from a cozy <b>studio apartment</b> to a spacious <b>2 - 10 bedroom house</b>. Many of the properties in this area come <b>fully furnished</b>, making the moving process a breeze. Additionally, some rentals include bills in the price, providing a hassle-free experience for tenants. Whether you're a student looking for a convenient and comfortable living space, or a group of friends searching for a shared accommodation, the private rental sector in Bath Moorlands has something for everyone. With its picturesque surroundings and vibrant community, this area offers the perfect blend of convenience and comfort for residents.</p><a id = "student_houses_in_moorlands,_bath__fully_furnished"> <h2>Student Houses in Moorlands, Bath - Fully Furnished</h2></a><p>When it comes to finding the perfect student accommodation in Bath, Moorlands, <b>fully furnished Houses</b> are a popular choice among students. At Moorlands, it is normal for student Houses to be fully furnished, providing everything you need for a comfortable and convenient living experience. From cozy bedrooms with study desks and storage space to spacious shared living areas complete with sofas and TV, these <b>fully furnished Houses</b> make moving in a breeze. With fully equipped kitchens including appliances and utensils, all you need to do is bring your personal belongings and settle in. The hassle of buying and moving furniture is eliminated, allowing you to focus on your studies and enjoy student life to the fullest. So, if you're looking for a hassle-free and comfortable accommodation option in Bath, Moorlands' <b>fully furnished Houses</b> are a great choice.</p><a id = "student_houses_in_moorlands,_bath__near_to_city_center_?"> <h2>Student Houses in Moorlands, Bath - Near to City Center ?</h2></a><p>Located just a stone's throw away from <b>Bath city center</b>, the <b>student Houses</b> in <b>Moorlands</b> offer the perfect blend of convenience and comfort. Situated just a few <b>miles</b> away from the bustling heart of Bath, students living in <b>Moorlands</b> can easily access all the amenities and attractions of the city without the need for a long commute. Whether it's shopping at the vibrant markets, exploring the historic sites, or enjoying the lively pubs and restaurants, everything is within easy reach from these <b>student Houses</b>. With the city center being so close, students can fully immerse themselves in the vibrant culture and rich history of Bath, making their time at university truly unforgettable. So, for those looking for accommodation that's close to all the action, <b>Moorlands</b> is the ideal choice for student living.</p><a id = "student_houses_in_moorlands,_bath__near_to__to_the_university_of_bath"> <h2>Student Houses in Moorlands, Bath - Near to  to the University of Bath</h2></a><p>Moorlands is conveniently located close to the <b>University of Bath</b>, making it an ideal housing option for students. Situated just a few <b>miles</b> away from the university campus, Moorlands offers easy access to the academic buildings and facilities. For students who prefer not to drive, there is a <b>bus route</b> that connects Moorlands to the university, making commuting a breeze. In fact, the university can be easily reached <b>by foot</b> or <b>by bus</b> from Moorlands, allowing students to save on transportation costs. For those who prefer to drive, the university is also easily accessible <b>by car</b>, with a relatively short commute. With its proximity to the <b>University of Bath</b> and the convenience of various transportation options, Moorlands is a great choice for students looking for accommodation near campus.</p><a id = "student_houses_in_moorlands,_bath__near_to__to_the_bath_spa_university"> <h2>Student Houses in Moorlands, Bath - Near to  to the Bath Spa University</h2></a><p>Moorlands is ideally situated in close proximity to <b>Bath Spa University</b>, making it a convenient choice for students. The university is just a few <b>miles</b> away from Moorlands, with quick and easy access via the near<b>by bus</b> route. For those who enjoy a walk, <b>Bath Spa University</b> is also within a reasonable distance <b>by foot</b>. Additionally, traveling to the university <b>by bus</b> is a straightforward option, offering a hassle-free commute. If you prefer to drive, <b>Bath Spa University</b> is easily accessible <b>by car</b>, providing flexibility in your transportation. Moorlands offers a great location for students, with the proximity to <b>Bath Spa University</b> and the convenience of various transportation options. Additionally, <b>Student Houses</b> in Moorlands provide a comfortable and supportive environment for those studying at the university.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for student houses in Moorlands, Bath can be a thrilling adventure filled with excitement and anticipation. With its picturesque surroundings and vibrant community, Moorlands offers a wealth of options for students looking for their perfect home away from home. From cozy cottages to modern apartments, the variety of housing choices cater to different preferences and budgets. The convenience of being close to University of Bath and local amenities make it an ideal location for students seeking a balance between study and leisure. With careful consideration of factors such as location, rent prices, and housemates, finding the right student accommodation in Moorlands is achievable. In conclusion, embarking on the search for student housing in Moorlands, Bath offers a unique opportunity for students to create lasting memories in a charming and welcoming neighborhood.</p></>)
};

export default BathMoorlandsHouse;