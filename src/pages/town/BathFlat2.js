
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


const  BathFlat2 = () => 
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

    return (<><h1>Student Accommodation in Bath - 2 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 2 bedroom Flats</b> for the academic year 2024.

In Bath, 2-bedroom flats are a popular choice for students looking for accommodation. These flats offer spacious living areas, privacy for each student, and are often located in close proximity to universities and amenities. With two bedrooms, students can share the space and split the cost, making it an affordable option for student living in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/student-accommodation-in-bath-2-bedroom-flats.png')} alt='Student Accommodation in Bath - 2 bedroom Flats'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__2_bedroom_flats">Prices for Student Accommodation in Bath - 2 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 2 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__2_bedroom_flats">Cheapest Student Accommodation in Bath - 2 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_flats__recently_added">Student Accommodation in Bath - 2 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_flats__recently_reduced">Student Accommodation in Bath - 2 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__2_bedroom_flats__by_student_location">Prices for Student Accommodation in Bath - 2 bedroom Flats - By Student Location</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__2_bedroom_flats"> <h2>Prices for Student Accommodation in Bath - 2 bedroom Flats</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£747 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 2 bedroom Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__2_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 2 bedroom Flats - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom flat in Bath and feeling overwhelmed by managing multiple bills? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service. By subscribing to <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, allowing you to <b>concentrate on your studies</b> without worrying about utility bills, internet, or any other expenses. With <b>UniBills.com</b>, you can simplify your life and avoid the stress of managing individual bills, all while saving time and money. Take the first step towards a stress-free living experience and get a quote from <b>UniBills.com</b> or any accommodation on this website.</p><a id = "cheapest_student_accommodation_in_bath__2_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 2 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__2_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 2 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__2_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 2 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__2_bedroom_flats__by_student_location"> <h2>Prices for Student Accommodation in Bath - 2 bedroom Flats - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Bath, Somerset </td><td><button className = 'searchButton' title='View our Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^116")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-bath-bath' title  = 'View Key Statistics for Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>47 </td><td>555 </td><td>1430 </td><td>747 </td><td>129 </td><td>332 </td><td>173 </td></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>17 </td><td>610 </td><td>1430 </td><td>859 </td><td>141 </td><td>332 </td><td>199 </td></tr><tr><td>Bath Spa, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bath Spa, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-bath-spa-bath' title  = 'View Key Statistics for Bath Spa, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>12 </td><td>620 </td><td>1105 </td><td>818 </td><td>144 </td><td>256 </td><td>190 </td></tr><tr><td>Bathwick, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bathwick, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^3051")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-bathwick-bath' title  = 'View Key Statistics for Bathwick, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>8 </td><td>657 </td><td>775 </td><td>702 </td><td>152 </td><td>180 </td><td>163 </td></tr><tr><td>Beacon Hill, Bath, Somerset </td><td><button className = 'searchButton' title='View our Beacon Hill, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-beacon-hill-bath' title  = 'View Key Statistics for Beacon Hill, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>5 </td><td>590 </td><td>775 </td><td>707 </td><td>137 </td><td>180 </td><td>164 </td></tr></table></p><h2>The Conclusion</h2><p>When looking for student accommodation in Bath, 2 bedroom flats are a popular option for those wanting to share a living space with a friend or fellow student. These flats provide a comfortable and spacious environment, allowing for privacy while still fostering a sense of community and companionship. With amenities such as a kitchen, living room, and bathroom, 2 bedroom flats offer a practical and convenient living solution for students seeking a balance between independence and social interaction. Additionally, the central location of many 2 bedroom flats in Bath provides easy access to local shops, restaurants, and nightlife, enhancing the overall student experience. Overall, choosing a 2 bedroom flat for student accommodation in Bath can be an ideal choice for those looking for a cozy and communal living arrangement.</p></>)
};

export default BathFlat2;