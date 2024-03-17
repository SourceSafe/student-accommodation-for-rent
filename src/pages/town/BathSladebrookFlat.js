
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


const  BathSladebrookFlat = () => 
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

    return (<><h1>Shared Flats for Students in Sladebrook, Bath</h1><p>We have listings for <b>Shared Flats for Students in Sladebrook, Bath</b> for the academic year 2024.

<b>Shared Flats for Students in Sladebrook, Bath</b> offer students the opportunity to live in a vibrant community of like-minded individuals, providing a supportive environment for academic and personal growth. These accommodations typically include shared common areas such as kitchens and living rooms, fostering a sense of camaraderie among residents. With convenient access to campus facilities and local amenities, <b>Shared Flats for Students in Sladebrook, Bath</b> offer a comfortable and convenient living experience for students.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-flats-for-students-in-sladebrook-bath.png')} alt='Shared Flats for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_flats_for_students_in_sladebrook,_bath">Prices for Shared Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_flats_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared Flats for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_flats_for_students_in_sladebrook,_bath">Cheap Shared Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_flats_for_students_in_sladebrook,_bath__recently_added">Shared Flats for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_flats_for_students_in_sladebrook,_bath__recently_reduced">Shared Flats for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_flats_for_students_in_sladebrook,_bath__houses">Prices for Shared Flats for Students in Sladebrook, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_flats_for_students_in_sladebrook,_bath"> <h2>Prices for Shared Flats for Students in Sladebrook, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£888 per month </td><td><button className = 'searchButton' title='View our Shared Flats for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_flats_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared Flats for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills and sorting out utilities for your student flat in Sladebrook, Bath, Somerset? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> package that will allow you to <b>concentrate on your studies</b> without the added stress of managing various bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by their reliable service. From electricity and water to internet and TV, all your essential utilities will be taken care of, leaving you with more time to focus on your academic responsibilities. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_flats_for_students_in_sladebrook,_bath"> <h2>Cheap Shared Flats for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared Flats for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared Flats for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_flats_for_students_in_sladebrook,_bath__houses"> <h2>Prices for Shared Flats for Students in Sladebrook, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-sladebrook-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1000 </td><td>£1400 </td><td>£1200 </td><td>£232 </td><td>£325 </td><td>£279 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-sladebrook-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£750 </td><td>£680 </td><td>£141 </td><td>£174 </td><td>£158 </td></tr></table></p><h2>The Conclusion</h2><p>Looking for shared flats for students in Sladebrook, Bath can be a rewarding experience. The availability of shared accommodation in this area provides numerous benefits, such as cost-effectiveness, companionship, and convenience. By living with fellow students, individuals can forge new friendships, share responsibilities, and create a supportive living environment. Additionally, the proximity to universities and local amenities makes Sladebrook an ideal location for student accommodation. In conclusion, finding a shared flat in Sladebrook offers students a comfortable and affordable living option with plenty of opportunities for social interaction and academic support. So, if you are a student looking for accommodation in Bath, consider the shared flats available in Sladebrook for a fulfilling and enriching experience.</p></>)
};

export default BathSladebrookFlat;