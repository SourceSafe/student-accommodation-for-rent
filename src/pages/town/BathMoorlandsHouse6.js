
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


const  BathMoorlandsHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 6 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 6 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 6 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£772 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 6 bedroom house in Moorlands, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b> could be the perfect solution for you. With this service, you no longer have to worry about the hassle of sorting out multiple bills for utilities such as water, gas, electricity, and internet. By choosing to go all-inclusive, you can <b>concentrate on your studies</b> and enjoying student life without the stress of managing various bills. <b>UniBills.com</b> offers a seamless and convenient way to handle all your household expenses, allowing you to budget effectively and avoid any unexpected costs. So, why not make your student life easier and more enjoyable by opting for the hassle-free all inclusive option provided by <b>UniBills.com</b>? Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits firsthand.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 6-bedroom house for students in Moorlands, Bath, can be a fantastic option for those seeking communal living with fellow students. These properties offer ample space, shared amenities, and the opportunity to split costs among housemates, making it a cost-effective and social living arrangement. With multiple bedrooms, there is plenty of room for privacy while still fostering a sense of community within the household. Additionally, living in Moorlands provides easy access to the University of Bath and local amenities, making it a convenient location for student living. Overall, a shared 6-bedroom house in Moorlands, Bath, is a great choice for students looking for a comfortable, affordable, and inclusive living experience.</p></>)
};

export default BathMoorlandsHouse6;