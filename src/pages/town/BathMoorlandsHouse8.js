
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


const  BathMoorlandsHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 8 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 8 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 8 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a busy student living in an 8-bedroom house in Moorlands, Bath, Somerset? Say goodbye to the stress of managing multiple bills and let <b>UniBills.com</b> take care of everything for you with their <b>all bills inclusive</b> service. By subscribing to this convenient option, you can <b>concentrate on your studies</b> and social life without having to worry about utility bills, internet charges, or any other hidden costs. Enjoy the hassle-free, all-inclusive package provided by <b>UniBills.com</b>, allowing you to budget effectively and avoid any surprises at the end of the month. Simplify your student life and make the most of your time in Bath by getting a quote from <b>UniBills.com</b> or any accommodation on this website today. Don't miss out on the benefits of an <b>all bills inclusive</b> service – sign up now and experience the ease and convenience it offers.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 8-bedroom house for students in Moorlands, Bath can provide a unique and fulfilling living experience for large groups of students. These spacious accommodations offer ample space for socializing and studying, fostering a sense of camaraderie among housemates. Additionally, the proximity to campus and local amenities make them convenient and desirable options for student living. However, it is essential for potential tenants to carefully consider factors such as rental costs, house rules, and the compatibility of housemates to ensure a smooth and enjoyable living experience. Ultimately, by carefully navigating the rental process and selecting the right shared house, students can create a comfortable and enjoyable home away from home during their time in Bath.</p></>)
};

export default BathMoorlandsHouse8;