
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


const  BathHouse4 = () => 
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

    return (<><h1>Student Accommodation in Bath - 4 bedroom Houses</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 4 bedroom Houses</b> for the academic year 2024. 
4 bedroom houses in Bath provide spacious living areas for students to study and relax. These houses are perfect for groups of students looking to share accommodation while attending university in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bath-4-bedroom-houses.png')} alt='Student Accommodation in Bath - 4 bedroom Houses'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__4_bedroom_houses">Prices for Student Accommodation in Bath - 4 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__4_bedroom_houses__all_bills_inclusive">Student Accommodation in Bath - 4 bedroom Houses - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__4_bedroom_houses">Cheapest Student Accommodation in Bath - 4 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__4_bedroom_houses__recently_added">Student Accommodation in Bath - 4 bedroom Houses - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__4_bedroom_houses__recently_reduced">Student Accommodation in Bath - 4 bedroom Houses - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__4_bedroom_houses__by_student_location">Prices for Student Accommodation in Bath - 4 bedroom Houses - By Student Location</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__4_bedroom_houses"> <h2>Prices for Student Accommodation in Bath - 4 bedroom Houses</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£604 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 4 bedroom Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__4_bedroom_houses__all_bills_inclusive"> <h2>Student Accommodation in Bath - 4 bedroom Houses - All Bills Inclusive</h2></a><p>Are you tired of dealing with multiple bills for your student house in Bath? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service. By subscribing to this convenient option, you can say goodbye to the stress of managing various utility bills and instead <b>concentrate on your studies</b>. With <b>UniBills.com</b>, everything from electricity, gas, water, internet, and even TV licenses are all bundled together in one easy monthly payment. You'll never have to worry about unexpected costs or missed payments again. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and simplify your student living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath more convenient and enjoyable.</p><a id = "cheapest_student_accommodation_in_bath__4_bedroom_houses"> <h2>Cheapest Student Accommodation in Bath - 4 bedroom Houses</h2></a><p><Portlet location="All" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__4_bedroom_houses__recently_added"> <h2>Student Accommodation in Bath - 4 bedroom Houses - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__4_bedroom_houses__recently_reduced"> <h2>Student Accommodation in Bath - 4 bedroom Houses - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__4_bedroom_houses__by_student_location"> <h2>Prices for Student Accommodation in Bath - 4 bedroom Houses - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>160 </td><td>475 </td><td>783 </td><td>608 </td><td>110 </td><td>182 </td><td>141 </td></tr><tr><td>Bath Spa, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bath Spa, Bath, Somersets' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for Bath Spa, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>118 </td><td>475 </td><td>770 </td><td>604 </td><td>110 </td><td>179 </td><td>140 </td></tr><tr><td>Bloomfield, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bloomfield, Bath, Somersets' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for Bloomfield, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>39 </td><td>495 </td><td>783 </td><td>618 </td><td>115 </td><td>182 </td><td>143 </td></tr><tr><td>Kingsway, Bath, Somerset </td><td><button className = 'searchButton' title='View our Kingsway, Bath, Somersets' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for Kingsway, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>39 </td><td>495 </td><td>783 </td><td>618 </td><td>115 </td><td>182 </td><td>143 </td></tr><tr><td>Moorlands, Bath, Somerset </td><td><button className = 'searchButton' title='View our Moorlands, Bath, Somersets' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for Moorlands, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>39 </td><td>495 </td><td>783 </td><td>618 </td><td>115 </td><td>182 </td><td>143 </td></tr></table></p><h2>The Conclusion</h2><p>Looking for student accommodation in Bath can be a daunting task, especially when searching for a 4-bedroom house. With a variety of options available, it's essential to carefully consider factors such as location, proximity to amenities, and budget. Students should also pay close attention to the condition of the property and the landlord's reputation.

In conclusion, finding student accommodation in Bath that meets all of these criteria can be challenging but not impossible. By thoroughly researching different options, visiting properties in person, and seeking recommendations from other students, individuals can find the perfect 4-bedroom house to call home during their time at university. Remember to act quickly when you find a suitable property, as the rental market in Bath can be competitive.</p></>)
};

export default BathHouse4;