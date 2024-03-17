
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


const  BathHouse6 = () => 
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

    return (<><h1>Student Accommodation in Bath - 6 bedroom Houses</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 6 bedroom Houses</b> for the academic year 2024.
6 bedroom Houses in Bath are ideal for students looking to share accommodation with a larger group, providing a cost-effective and social living arrangement. These properties often come with shared living spaces and multiple bathrooms, offering comfort and convenience for students.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bath-6-bedroom-houses.png')} alt='Student Accommodation in Bath - 6 bedroom Houses'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__6_bedroom_houses">Prices for Student Accommodation in Bath - 6 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__6_bedroom_houses__all_bills_inclusive">Student Accommodation in Bath - 6 bedroom Houses - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__6_bedroom_houses">Cheapest Student Accommodation in Bath - 6 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__6_bedroom_houses__recently_added">Student Accommodation in Bath - 6 bedroom Houses - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__6_bedroom_houses__recently_reduced">Student Accommodation in Bath - 6 bedroom Houses - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__6_bedroom_houses__by_student_location">Prices for Student Accommodation in Bath - 6 bedroom Houses - By Student Location</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__6_bedroom_houses"> <h2>Prices for Student Accommodation in Bath - 6 bedroom Houses</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£686 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 6 bedroom Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__6_bedroom_houses__all_bills_inclusive"> <h2>Student Accommodation in Bath - 6 bedroom Houses - All Bills Inclusive</h2></a><p>When you are a student with a full academic workload, the last thing you want to worry about is managing multiple bills for your accommodation. This is where <b>UniBills.com</b> comes in with their <b>all bills inclusive</b> service for your 6-bedroom student house in Bath. By opting for this convenient package, you can <b>concentrate on your studies</b> without the stress of dealing with individual utility bills. <b>UniBills.com</b> takes care of everything for you, including electricity, water, gas, internet, and even TV license, ensuring a hassle-free living experience. With all your bills bundled into one easy payment, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, giving you more time to focus on your academic pursuits and student life. So why not make your student life easier and more comfortable? Get a quote from <b>UniBills.com</b> or any accommodation on this website today and embrace the benefits of an <b>all bills inclusive</b> service.</p><a id = "cheapest_student_accommodation_in_bath__6_bedroom_houses"> <h2>Cheapest Student Accommodation in Bath - 6 bedroom Houses</h2></a><p><Portlet location="All" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__6_bedroom_houses__recently_added"> <h2>Student Accommodation in Bath - 6 bedroom Houses - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__6_bedroom_houses__recently_reduced"> <h2>Student Accommodation in Bath - 6 bedroom Houses - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__6_bedroom_houses__by_student_location"> <h2>Prices for Student Accommodation in Bath - 6 bedroom Houses - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>64 </td><td>550 </td><td>953 </td><td>701 </td><td>127 </td><td>221 </td><td>163 </td></tr><tr><td>Bath Spa, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bath Spa, Bath, Somersets' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for Bath Spa, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>54 </td><td>533 </td><td>850 </td><td>651 </td><td>123 </td><td>197 </td><td>151 </td></tr><tr><td>Bloomfield, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bloomfield, Bath, Somersets' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for Bloomfield, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>20 </td><td>560 </td><td>953 </td><td>772 </td><td>130 </td><td>221 </td><td>179 </td></tr><tr><td>Kingsway, Bath, Somerset </td><td><button className = 'searchButton' title='View our Kingsway, Bath, Somersets' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for Kingsway, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>20 </td><td>560 </td><td>953 </td><td>772 </td><td>130 </td><td>221 </td><td>179 </td></tr><tr><td>Moorlands, Bath, Somerset </td><td><button className = 'searchButton' title='View our Moorlands, Bath, Somersets' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for Moorlands, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>20 </td><td>560 </td><td>953 </td><td>772 </td><td>130 </td><td>221 </td><td>179 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, searching for student accommodation in Bath, especially 6-bedroom houses, can be a challenging yet rewarding experience. The vibrant city offers a variety of options for those seeking a communal living arrangement with ample space and amenities to support their academic journey. As students embark on this adventure, it is crucial to consider factors such as location, budget, and housemates compatibility to ensure a comfortable and conducive living environment. By exploring different listings, attending viewings, and communicating effectively with potential landlords, students can secure a suitable 6-bedroom house that meets their needs and preferences. Ultimately, finding the perfect student accommodation in Bath requires patience, research, and a proactive approach, but the end result is a cozy and convenient home where lifelong memories can be made.</p></>)
};

export default BathHouse6;