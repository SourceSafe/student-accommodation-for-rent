
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathMoorlands = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("t  ownLocationId");
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

    return (<><h1>Student Accommodation in Moorlands, Bath</h1><p>We can assist you in finding <b>Student Accommodation in Moorlands, Bath</b> for the academic year 2024.

You have come to the right place to find <a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> as we provide a comprehensive list of options to suit your needs.

Private student accommodation near <b>University of Bath</b> and <b>Bath Spa University</b> is available, including options in Moorlands for those seeking <a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a>.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-moorlands-bath.png')} alt='Student Accommodation in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_moorlands,_bath">Prices for Student Accommodation in Moorlands, Bath</a></li><li><a href = "#student_accommodation_in_moorlands,_bath__all_bills_inclusive">Student Accommodation in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#student_accommodation_portal__moorlands,_bath">Student Accommodation Portal - Moorlands, Bath</a></li><li><a href = "#prices_for_student_accommodation_in_moorlands,_bath__houses">Prices for Student Accommodation in Moorlands, Bath - Houses</a></li><li><a href = "#prices_for_student_accommodation_in_moorlands,_bath__flats">Prices for Student Accommodation in Moorlands, Bath - Flats</a></li><li><a href = "#prices_for_student_accommodation_in_moorlands,_bath__studio_apartments">Prices for Student Accommodation in Moorlands, Bath - Studio Apartments</a></li><li><a href = "#cheap_student_accommodation_in_moorlands,_bath">Cheap Student Accommodation in Moorlands, Bath</a></li><li><a href = "#student_accommodation_in_moorlands,_bath__recently_added">Student Accommodation in Moorlands, Bath - Recently Added</a></li><li><a href = "#student_accommodation_in_moorlands,_bath__recently_reduced">Student Accommodation in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#how_close_is_moorlands_to_the_city_center">How close is Moorlands to the City Center</a></li><li><a href = "#how_close_is_moorlands_to_the_university_of_bath">How close is Moorlands to the University of Bath</a></li><li><a href = "#how_close_is_moorlands_to_the_bath_spa_university">How close is Moorlands to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_moorlands,_bath"> <h2>Prices for Student Accommodation in Moorlands, Bath</h2></a><p><table><tr><th>Average Rent </th><th>House </th><th>Flat </th><th>Studio </th><th>Properties </th></tr><tr><td>£708 per month </td><td><a className= "portalLink" href = "shared-houses-for-students-in-moorlands-bath">£691 per month</a> </td><td><a className= "portalLink" href = "shared-flats-for-students-in-moorlands-bath">£888 per month</a> </td><td><a className= "portalLink" href = "studio-apartments-for-students-in-moorlands-bath">£1100 per month</a> </td><td><button className = 'searchButton' title='View our Student Accommodation in Moorlands, Bath' onClick={() => routeToPortal("?&beds=&type=&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_moorlands,_bath__all_bills_inclusive"> <h2>Student Accommodation in Moorlands, Bath - All Bills Inclusive</h2></a><p>When it comes to finding accommodation in Moorlands, Bath, Somerset, it's essential to look for options that offer convenience and peace of mind. Opting for an <b>all bills inclusive</b> service, such as the one provided by <b>UniBills.com</b>, can significantly alleviate the stress of managing multiple bills. With all utilities, internet, and council tax included in one fixed monthly fee, you can <b>concentrate on your studies</b> and social life without worrying about unexpected expenses. <b>UniBills.com</b> offers a seamless booking process and excellent customer service, ensuring a smooth and hassle-free experience for tenants. By choosing to enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>, you can simplify your accommodation logistics and focus on what truly matters during your time in Bath. Get a quote from <b>UniBills.com</b> or any accommodation on this website to experience the benefits of <b>all bills inclusive</b> living for yourself.</p><a id = "student_accommodation_portal__moorlands,_bath"> <h2>Student Accommodation Portal - Moorlands, Bath</h2></a><p>Are you a student looking for accommodation in <b>Moorlands</b>, <b>Bath</b>? Look no further than our property portal, where we make finding your perfect student housing easy and stress-free. Situated near the prestigious University of <b>Bath</b> and <b>Bath</b> Spa University, <b>Moorlands</b> is a sought-after area for students seeking a comfortable and convenient place to live. Our portal offers a wide range of options, from shared houses to studio apartments, all within walking distance of campus and local amenities. With detailed listings, photos, and virtual tours, you can explore your options from the comfort of your own home. Let us help you find your ideal student accommodation in <b>Moorlands</b>, <b>Bath</b>, so you can focus on your studies and enjoy all that this vibrant city has to offer.</p><a id = "prices_for_student_accommodation_in_moorlands,_bath__houses"> <h2>Prices for Student Accommodation in Moorlands, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>3 Bed House </td><td><button className = 'searchButton' title='View our 3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£685 </td><td>£624 </td><td>£139 </td><td>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton' title='View our 4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£495 </td><td>£783 </td><td>£618 </td><td>£115 </td><td>£182 </td><td>£143 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton' title='View our 5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£953 </td><td>£636 </td><td>£120 </td><td>£221 </td><td>£147 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton' title='View our 6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£560 </td><td>£953 </td><td>£772 </td><td>£130 </td><td>£221 </td><td>£179 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton' title='View our 7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£810 </td><td>£673 </td><td>£139 </td><td>£188 </td><td>£156 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton' title='View our 8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£643 </td><td>£953 </td><td>£798 </td><td>£149 </td><td>£221 </td><td>£185 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton' title='View our 10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-10-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£540 </td><td>£540 </td><td>£125 </td><td>£125 </td><td>£125 </td></tr></table></p><a id = "prices_for_student_accommodation_in_moorlands,_bath__flats"> <h2>Prices for Student Accommodation in Moorlands, Bath - Flats</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-moorlands-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1000 </td><td>£1400 </td><td>£1200 </td><td>£232 </td><td>£325 </td><td>£279 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-moorlands-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£750 </td><td>£680 </td><td>£141 </td><td>£174 </td><td>£158 </td></tr></table></p><a id = "prices_for_student_accommodation_in_moorlands,_bath__studio_apartments"> <h2>Prices for Student Accommodation in Moorlands, Bath - Studio Apartments</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'studio-apartments-for-students-in-moorlands-bath' title  = 'View Key Statistics for Studio Apartments'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1100 </td><td>£1100 </td><td>£1100 </td><td>£255 </td><td>£255 </td><td>£255 </td></tr></table></p><a id = "cheap_student_accommodation_in_moorlands,_bath"> <h2>Cheap Student Accommodation in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="" homeType="" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_moorlands,_bath__recently_added"> <h2>Student Accommodation in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="" homeType="" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_moorlands,_bath__recently_reduced"> <h2>Student Accommodation in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="" homeType="" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "how_close_is_moorlands_to_the_city_center"> <h2>How close is Moorlands to the City Center</h2></a><p><b>Moorlands</b> is situated just a few <b>miles</b> away from <b>Bath city center</b>, making it an ideal location for those looking to explore the historic charm of this beautiful city. With its close proximity, guests staying at <b>Moorlands</b> have easy access to all the iconic attractions that Bath has to offer, such as the Roman Baths, Bath Abbey, and the stunning Georgian architecture. Whether you want to wander the quaint streets, relax in the Thermae Bath Spa, or indulge in some retail therapy at the various shops and boutiques, <b>Moorlands</b> provides a convenient base for your adventures. After a day of sightseeing, guests can return to the peaceful surroundings of <b>Moorlands</b> to unwind and relax in comfort. Its close distance to <b>Bath city center</b> allows for a perfect balance of exploration and relaxation during your stay.</p><a id = "how_close_is_moorlands_to_the_university_of_bath"> <h2>How close is Moorlands to the University of Bath</h2></a><p>Moorlands is an ideal location for students attending the <b>University of Bath</b>, as it is conveniently close to the campus. The university is just a short bus ride away, making it easy for students to commute to and from lectures. The <b>bus route</b> connecting Moorlands to the <b>University of Bath</b> is reliable and runs frequently, ensuring that students can get to campus quickly and on time. Additionally, for those late nights spent studying or <b>coming back from lectures</b>, students can rest assured that the bus service operates <b>late at night</b>, providing a safe and convenient way to travel. This close proximity and accessible transportation options make Moorlands a strategic choice for students looking for a convenient and stress-free living situation while attending the <b>University of Bath</b>.</p><a id = "how_close_is_moorlands_to_the_bath_spa_university"> <h2>How close is Moorlands to the Bath Spa University</h2></a><p>Moorlands is an ideal location for students attending <b>Bath Spa University</b>, as it is conveniently situated within easy reach of the campus. Located just a short distance away, students can easily access the university by hopping on the <b>bus route</b> that connects Moorlands directly to <b>Bath Spa University</b>. This <b>quick journey</b> ensures students can arrive on time for their lectures and seminars without any hassle. Additionally, for those late nights spent in the library or socializing with friends, students can feel at ease knowing that the <b>bus route</b> runs late into the night, providing a safe and reliable way to get back home to Moorlands. Whether you're <b>coming back from lectures</b> or heading out for a night of fun, Moorlands offers the perfect balance of proximity and convenience for students at <b>Bath Spa University</b>.</p><h2>The Conclusion</h2><p>After evaluating various options for student accommodation in Moorlands, Bath, it is evident that there is a diverse range of choices available for students looking to live in this area. From shared houses to purpose-built student accommodation, there are options to suit different preferences and budgets. Additionally, the proximity of Moorlands to the University of Bath makes it a convenient location for students. It is important for students to consider factors such as location, facilities, and costs when looking for accommodation. By conducting thorough research and visiting different properties, students can make an informed decision that meets their needs. Overall, Moorlands offers a vibrant and student-friendly environment, making it a great choice for those seeking accommodation in Bath.</p></>)
};

export default BathMoorlands;