
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


const  BathOldfieldPark = () => 
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

    return (<><h1>Student Accommodation in Oldfield Park, Bath</h1><p>We can help you find <b>Student Accommodation in Oldfield Park, Bath</b> for the academic year 2024.

You have come to the right place to find <a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a>. We specialize in providing housing options for students in Bath.

Private student accommodation is a popular choice for students attending the <b>University of Bath</b> or <b>Bath Spa University</b>. We offer a variety of options for <a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a>, including in the sought-after area of Oldfield Park.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/student-accommodation-in-oldfield-park-bath.png')} alt='Student Accommodation in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_oldfield_park,_bath">Prices for Student Accommodation in Oldfield Park, Bath</a></li><li><a href = "#student_accommodation_in_oldfield_park,_bath__all_bills_inclusive">Student Accommodation in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#student_accommodation_portal__oldfield_park,_bath">Student Accommodation Portal - Oldfield Park, Bath</a></li><li><a href = "#prices_for_student_accommodation_in_oldfield_park,_bath__houses">Prices for Student Accommodation in Oldfield Park, Bath - Houses</a></li><li><a href = "#prices_for_student_accommodation_in_oldfield_park,_bath__flats">Prices for Student Accommodation in Oldfield Park, Bath - Flats</a></li><li><a href = "#prices_for_student_accommodation_in_oldfield_park,_bath__studio_apartments">Prices for Student Accommodation in Oldfield Park, Bath - Studio Apartments</a></li><li><a href = "#cheap_student_accommodation_in_oldfield_park,_bath">Cheap Student Accommodation in Oldfield Park, Bath</a></li><li><a href = "#student_accommodation_in_oldfield_park,_bath__recently_added">Student Accommodation in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#student_accommodation_in_oldfield_park,_bath__recently_reduced">Student Accommodation in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_oldfield_park,_bath"> <h2>Prices for Student Accommodation in Oldfield Park, Bath</h2></a><p><table><tr><th>Average Rent </th><th>House </th><th>Flat </th><th>Studio </th><th>Properties </th></tr><tr><td>£699 per month </td><td><a className= "portalLink" href = "shared-houses-for-students-in-oldfield-park-bath">£647 per month</a> </td><td><a className= "portalLink" href = "shared-flats-for-students-in-oldfield-park-bath">£903 per month</a> </td><td><a className= "portalLink" href = "studio-apartments-for-students-in-oldfield-park-bath">£1250 per month</a> </td><td><button className = 'searchButton' title='View our Student Accommodation in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=&type=&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Student Accommodation in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for accommodation in Oldfield Park, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service provided by <b>UniBills.com</b> could be the perfect choice for you. By opting for this convenient package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers all your utilities such as water, electricity, gas, and internet in one monthly payment. This means you can <b>concentrate on your studies</b> without the worry of managing multiple bills and unexpected costs. <b>UniBills.com</b> offers a range of accommodation options in the vibrant area of Oldfield Park, allowing you to focus on your academic pursuits while enjoying a comfortable living space. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "student_accommodation_portal__oldfield_park,_bath"> <h2>Student Accommodation Portal - Oldfield Park, Bath</h2></a><p>Looking for student accommodation in <b>Oldfield Park</b>, <b>Bath</b>? Look no further than our property portal! <b>Oldfield Park</b> is a vibrant area located in the picturesque city of <b>Bath</b>, home to both the University of <b>Bath</b> and <b>Bath</b> Spa University. Our portal makes finding the perfect student accommodation a breeze, with a wide range of options available to suit every budget and preference. Whether you're looking for a cozy studio apartment or a shared house with friends, we've got you covered. With detailed listings, photos, and virtual tours, you can easily compare properties and make an informed decision. Say goodbye to the stress of searching for accommodation and let us help you find your ideal home in <b>Oldfield Park</b>, <b>Bath</b>.</p><a id = "prices_for_student_accommodation_in_oldfield_park,_bath__houses"> <h2>Prices for Student Accommodation in Oldfield Park, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>2 Bed House </td><td><button className = 'searchButton' title='View our 2 Bed Houses' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 2 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1157 </td><td>£1183 </td><td>£1170 </td><td>£269 </td><td>£275 </td><td>£272 </td></tr><tr><td>3 Bed House </td><td><button className = 'searchButton' title='View our 3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£533 </td><td>£717 </td><td>£631 </td><td>£123 </td><td>£166 </td><td>£146 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton' title='View our 4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£475 </td><td>£783 </td><td>£608 </td><td>£110 </td><td>£182 </td><td>£141 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton' title='View our 5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£500 </td><td>£953 </td><td>£626 </td><td>£116 </td><td>£221 </td><td>£145 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton' title='View our 6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£953 </td><td>£701 </td><td>£127 </td><td>£221 </td><td>£163 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton' title='View our 7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£565 </td><td>£810 </td><td>£669 </td><td>£131 </td><td>£188 </td><td>£155 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton' title='View our 8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£953 </td><td>£689 </td><td>£127 </td><td>£221 </td><td>£160 </td></tr><tr><td>9 Bed House </td><td><button className = 'searchButton' title='View our 9 Bed Houses' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-9-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 9 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£760 </td><td>£685 </td><td>£141 </td><td>£176 </td><td>£159 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton' title='View our 10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-10-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£540 </td><td>£540 </td><td>£125 </td><td>£125 </td><td>£125 </td></tr></table></p><a id = "prices_for_student_accommodation_in_oldfield_park,_bath__flats"> <h2>Prices for Student Accommodation in Oldfield Park, Bath - Flats</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£980 </td><td>£1500 </td><td>£1245 </td><td>£227 </td><td>£348 </td><td>£289 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£1430 </td><td>£859 </td><td>£141 </td><td>£332 </td><td>£199 </td></tr><tr><td>3 Bed Flat </td><td><button className = 'searchButton' title='View our 3 Bed Flats' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 3 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£585 </td><td>£990 </td><td>£715 </td><td>£136 </td><td>£230 </td><td>£166 </td></tr><tr><td>4 Bed Flat </td><td><button className = 'searchButton' title='View our 4 Bed Flats' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 4 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£575 </td><td>£932 </td><td>£716 </td><td>£133 </td><td>£216 </td><td>£166 </td></tr><tr><td>5 Bed Flat </td><td><button className = 'searchButton' title='View our 5 Bed Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 5 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£840 </td><td>£715 </td><td>£120 </td><td>£195 </td><td>£166 </td></tr><tr><td>6 Bed Flat </td><td><button className = 'searchButton' title='View our 6 Bed Flats' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 6 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£775 </td><td>£775 </td><td>£775 </td><td>£180 </td><td>£180 </td><td>£180 </td></tr><tr><td>9 Bed Flat </td><td><button className = 'searchButton' title='View our 9 Bed Flats' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-9-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 9 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£700 </td><td>£700 </td><td>£700 </td><td>£162 </td><td>£162 </td><td>£162 </td></tr><tr><td>10 Bed Flat </td><td><button className = 'searchButton' title='View our 10 Bed Flats' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-10-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 10 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£740 </td><td>£740 </td><td>£740 </td><td>£172 </td><td>£172 </td><td>£172 </td></tr></table></p><a id = "prices_for_student_accommodation_in_oldfield_park,_bath__studio_apartments"> <h2>Prices for Student Accommodation in Oldfield Park, Bath - Studio Apartments</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'studio-apartments-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Studio Apartments'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£795 </td><td>£1690 </td><td>£1250 </td><td>£184 </td><td>£393 </td><td>£290 </td></tr></table></p><a id = "cheap_student_accommodation_in_oldfield_park,_bath"> <h2>Cheap Student Accommodation in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="" homeType="" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_oldfield_park,_bath__recently_added"> <h2>Student Accommodation in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="" homeType="" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_oldfield_park,_bath__recently_reduced"> <h2>Student Accommodation in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="" homeType="" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming suburb located just a stone's throw away from <b>Bath city center</b>, making it a convenient and desirable location for residents and visitors alike. Situated just 1.5 <b>miles</b> south of the bustling city center, <b>Oldfield Park</b> offers the perfect blend of suburban peace and city convenience. With its Victorian architecture, vibrant community feel, and easy access to all the amenities and attractions of <b>Bath city center</b>, <b>Oldfield Park</b> truly offers the best of both worlds. Whether you're looking to explore the historic Roman Baths, indulge in some retail therapy at SouthGate shopping center, or simply relax in one of Bath's many beautiful parks, everything is within easy reach from <b>Oldfield Park</b>. So, if you're looking for a picturesque and well-connected neighborhood close to <b>Bath city center</b>, <b>Oldfield Park</b> is the perfect choice.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is a convenient and popular area for students attending the <b>University of Bath</b>. Located just a stone's throw away from the university campus, Oldfield Park is a mere 10-minute bus ride away. The direct <b>bus route</b> ensures ease of access, making it a <b>quick journey</b> for students heading to their lectures or returning <b>late at night</b> after a long day of studying. Being in such close proximity to the university allows students the flexibility to easily commute back and forth between Oldfield Park and the campus, especially when <b>coming back from lectures</b> or late-night study sessions. Additionally, the vibrant atmosphere and amenities in Oldfield Park make it a sought-after location for students looking for a convenient and vibrant place to live during their time at the <b>University of Bath</b>.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is conveniently located very close to <b>Bath Spa University</b>, making it an ideal residential area for students. Situated just a short bus ride away on the direct <b>bus route</b>, students can easily make the <b>quick journey</b> to campus for their classes. The proximity of Oldfield Park to <b>Bath Spa University</b> is not only convenient during the day for attending lectures, but also ensures safety when <b>coming back from lectures</b> <b>late at night</b>. This offers peace of mind for students, allowing them to focus on their studies without worrying about long commutes or safety concerns. Overall, the close proximity of Oldfield Park to <b>Bath Spa University</b> makes it a popular choice for students looking for a convenient and safe place to live during their time at university.</p><h2>The Conclusion</h2><p>

In conclusion, searching for student accommodation in Oldfield Park, Bath can be a challenging yet rewarding experience. This vibrant and diverse neighborhood offers a plethora of housing options conveniently located near local amenities, transportation links, and the University of Bath campus. When embarking on your search, be sure to consider factors such as budget, location, shared living spaces, and proximity to university facilities. Remember to schedule viewings, ask questions, and thoroughly read through any contracts before committing to a property. Whether you opt for a cozy studio apartment or a spacious shared house, finding the perfect student accommodation in Oldfield Park can set the foundation for an exciting and memorable university experience.</p></>)
};

export default BathOldfieldPark;