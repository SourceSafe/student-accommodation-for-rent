
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


const  BathLowerWestonHouse = () => 
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

    return (<><h1>Student Houses in Lower Weston, Bath</h1><p>We have listings for <b>Student Houses in Lower Weston, Bath</b> for the academic year 2024. <b>Student Houses in Lower Weston, Bath</b> are conveniently located near local amenities and transport links, making it an ideal location for students. These properties offer a comfortable and supportive environment for students studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-houses-in-lower-weston-bath.png')} alt='Student Houses in Lower Weston, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Houses in Lower Weston, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^16323&type=House&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Houses in Lower Weston, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_houses_in_lower_weston,_bath_pp/pm">Prices for Student Houses in Lower Weston, Bath pp/pm</a></li><li><a href = "#student_houses_in_lower_weston,_bath__all_bills_inclusive">Student Houses in Lower Weston, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_houses_in_lower_weston,_bath">Cheap Student Houses in Lower Weston, Bath</a></li><li><a href = "#student_houses_in_lower_weston,_bath__recently_added">Student Houses in Lower Weston, Bath - Recently Added</a></li><li><a href = "#student_houses_in_lower_weston,_bath__recently_reduced">Student Houses in Lower Weston, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_houses_in_lower_weston,_bath__houses_pp/pm">Prices for Student Houses in Lower Weston, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__lower_weston,_bath">Student Accommodation Portal - Lower Weston, Bath</a></li><li><a href = "#student_houses_in_lower_weston,_bath__private_rental_sector">Student Houses in Lower Weston, Bath - Private Rental Sector</a></li><li><a href = "#student_houses_in_lower_weston,_bath__fully_furnished">Student Houses in Lower Weston, Bath - Fully Furnished</a></li><li><a href = "#student_houses_in_lower_weston,_bath__near_to_city_center_?">Student Houses in Lower Weston, Bath - Near to City Center ?</a></li><li><a href = "#student_houses_in_lower_weston,_bath__near_to__to_the_university_of_bath">Student Houses in Lower Weston, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_houses_in_lower_weston,_bath__near_to__to_the_bath_spa_university">Student Houses in Lower Weston, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_houses_in_lower_weston,_bath_pp/pm"> <h2>Prices for Student Houses in Lower Weston, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£611 per month </td><td><button className = 'searchButton tableButton' title='Student Houses in Lower Weston, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^16323")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_houses_in_lower_weston,_bath__all_bills_inclusive"> <h2>Student Houses in Lower Weston, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Lower Weston, Bath, Somerset? Are you tired of dealing with the hassle of multiple bills for your student house? Say goodbye to the stress of managing utility payments by subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b>. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life while we take care of all your bills - from electricity and water to internet and council tax. Why worry about individual bills when you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>? Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and peace of mind that comes with having all your bills taken care of in one simple package. Make student life easier with UniBills.</p><a id = "cheap_student_houses_in_lower_weston,_bath"> <h2>Cheap Student Houses in Lower Weston, Bath</h2></a><p><Portlet location="REGION^16323" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_lower_weston,_bath__recently_added"> <h2>Student Houses in Lower Weston, Bath - Recently Added</h2></a><p><Portlet location="REGION^16323" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_lower_weston,_bath__recently_reduced"> <h2>Student Houses in Lower Weston, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^16323" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_houses_in_lower_weston,_bath__houses_pp/pm"> <h2>Prices for Student Houses in Lower Weston, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>3 Bed House </td><td><button className = 'searchButton tableButton' title='3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^16323")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-houses-in-lower-weston-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£595 </td><td className = {classNameHideForMobile}>£665 </td><td>£615 </td><td className = {classNameHideForMobile}>£138 </td><td className = {classNameHideForMobile}>£154 </td><td>£143 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton tableButton' title='4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^16323")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-houses-in-lower-weston-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£505 </td><td className = {classNameHideForMobile}>£700 </td><td>£585 </td><td className = {classNameHideForMobile}>£117 </td><td className = {classNameHideForMobile}>£162 </td><td>£136 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton tableButton' title='5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^16323")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-houses-in-lower-weston-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£520 </td><td className = {classNameHideForMobile}>£717 </td><td>£651 </td><td className = {classNameHideForMobile}>£120 </td><td className = {classNameHideForMobile}>£166 </td><td>£151 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton tableButton' title='6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^16323")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '6-bedroom-student-houses-in-lower-weston-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£533 </td><td className = {classNameHideForMobile}>£730 </td><td>£615 </td><td className = {classNameHideForMobile}>£123 </td><td className = {classNameHideForMobile}>£169 </td><td>£143 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton tableButton' title='7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^16323")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '7-bedroom-student-houses-in-lower-weston-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£550 </td><td className = {classNameHideForMobile}>£577 </td><td>£567 </td><td className = {classNameHideForMobile}>£127 </td><td className = {classNameHideForMobile}>£134 </td><td>£131 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton tableButton' title='8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^16323")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '8-bedroom-student-houses-in-lower-weston-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£560 </td><td className = {classNameHideForMobile}>£560 </td><td>£560 </td><td className = {classNameHideForMobile}>£130 </td><td className = {classNameHideForMobile}>£130 </td><td>£130 </td></tr><tr><td>9 Bed House </td><td><button className = 'searchButton tableButton' title='9 Bed Houses' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^16323")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '9-bedroom-student-houses-in-lower-weston-bath' title  = 'View Key Statistics for 9 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£700 </td><td className = {classNameHideForMobile}>£700 </td><td>£700 </td><td className = {classNameHideForMobile}>£162 </td><td className = {classNameHideForMobile}>£162 </td><td>£162 </td></tr></table></p><a id = "student_accommodation_portal__lower_weston,_bath"> <h2>Student Accommodation Portal - Lower Weston, Bath</h2></a><p>Are you a student looking for accommodation in <b>Lower Weston</b>, <b>Bath</b>? Look no further than our property portal, where we make the search for your perfect student housing a breeze. <b>Lower Weston</b> is a popular area for students due to its convenient location near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our platform offers a wide range of options, from cozy studios to spacious shared houses, ensuring that you find a place that fits your needs and budget. With detailed listings, high-quality images, and helpful filters, you can easily compare different properties and make an informed decision. Say goodbye to the stress of finding student accommodation and let us help you find your new home in <b>Lower Weston</b>, <b>Bath</b>.</p><a id = "student_houses_in_lower_weston,_bath__private_rental_sector"> <h2>Student Houses in Lower Weston, Bath - Private Rental Sector</h2></a><p>If you're a student looking for accommodation in Bath, Lower Weston offers a vibrant <b>student private rental sector</b> with a range of options to suit your needs. From cozy <b>studio apartment</b>s to spacious 2-10 bedroom houses, there are plenty of choices available. Many properties in this area come <b>fully furnished</b>, making moving in a breeze. Additionally, some landlords offer <b>bills included</b> in the rent, taking the hassle out of managing utilities. Living in Lower Weston provides easy access to local amenities, transportation, and the beautiful city of Bath. Whether you prefer a quiet study space or a lively shared house, the private rental sector in Lower Weston has something for everyone.</p><a id = "student_houses_in_lower_weston,_bath__fully_furnished"> <h2>Student Houses in Lower Weston, Bath - Fully Furnished</h2></a><p>Looking for fully furnished student houses in Bath, Lower Weston? Look no further! In this vibrant and historic city, it is normal for student houses to be fully furnished, allowing you to focus on your studies and enjoy student life to the fullest. These houses come equipped with everything you need for a comfortable and convenient living experience, from cozy bedrooms to fully stocked kitchens and communal areas for socializing with your housemates. Located in the charming neighborhood of Lower Weston, you'll have easy access to all the amenities and attractions Bath has to offer, including cafes, shops, and transport links. Don't stress about furnishing your new home – choose a fully furnished student house in Bath, Lower Weston, and make your university experience unforgettable.</p><a id = "student_houses_in_lower_weston,_bath__near_to_city_center_?"> <h2>Student Houses in Lower Weston, Bath - Near to City Center ?</h2></a><p><b>Lower Weston</b> is a popular residential area for students, with numerous <b>student Houses</b> available for rent. One of the key advantages of living in <b>Lower Weston</b> is its close proximity to <b>Bath city center</b>, which is only a few <b>miles</b> away. This means that students can easily access all the amenities and attractions that the city center has to offer, including shops, restaurants, and entertainment venues. Whether students need to go shopping, attend lectures at the university, or simply explore the historic streets of Bath, they can do so quickly and conveniently from their student house in <b>Lower Weston</b>. Additionally, the area is well-connected by public transportation, making it easy for students to travel around the city and beyond. Overall, <b>Lower Weston</b>'s location near <b>Bath city center</b> makes it an excellent choice for students looking for a convenient and vibrant place to live.</p><a id = "student_houses_in_lower_weston,_bath__near_to__to_the_university_of_bath"> <h2>Student Houses in Lower Weston, Bath - Near to  to the University of Bath</h2></a><p>Lower Weston is conveniently located just a few <b>miles</b> away from the prestigious <b>University of Bath</b> campus, making it an ideal location for students looking for off-campus housing options. <b>Student Houses</b> in Lower Weston are easily accessible from the university, whether it's <b>by foot</b>, bus, or car. The university is just a short bus ride away, with frequent services running on the direct <b>bus route</b> that connects Lower Weston to the university campus. For those who prefer to drive, the university can be reached in just a few minutes <b>by car</b>. This close proximity to the <b>University of Bath</b> makes Lower Weston a popular choice for students seeking a convenient and affordable living arrangement while pursuing their academic goals.</p><a id = "student_houses_in_lower_weston,_bath__near_to__to_the_bath_spa_university"> <h2>Student Houses in Lower Weston, Bath - Near to  to the Bath Spa University</h2></a><p>Lower Weston is conveniently located just 2 <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal spot for students looking for accommodation close to campus. Many <b>Student Houses</b> in Lower Weston are within walking distance of the university, allowing students to easily commute to and from classes. For those who prefer not to walk, there is a regular <b>bus route</b> that runs between Lower Weston and <b>Bath Spa University</b>, providing a quick and convenient transportation option. Additionally, for students who have their own transportation, the university is just a short drive away <b>by car</b>. With its close proximity to <b>Bath Spa University</b> and multiple transport options, Lower Weston is a fantastic location for students looking for a convenient and accessible place to live during their time at university.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, searching for student houses in Lower Weston, Bath can be a rewarding experience with a variety of options available to suit different preferences and budgets. The area boasts a convenient location close to local amenities, public transport links, and the University of Bath campus. Students can enjoy a vibrant community atmosphere while living in a safe and well-connected neighborhood. Reflecting on the house-hunting process, it is crucial for students to prioritize factors such as proximity to campus, rental costs, and the overall condition of the property. By conducting thorough research, viewing multiple properties, and seeking advice from reputable letting agencies, students can make an informed decision when selecting their ideal student accommodation in Lower Weston. In conclusion, Lower Weston offers a range of student housing options that cater to diverse needs, making it a desirable location for students seeking a comfortable and convenient living arrangement.</p></>)
};

export default BathLowerWestonHouse;