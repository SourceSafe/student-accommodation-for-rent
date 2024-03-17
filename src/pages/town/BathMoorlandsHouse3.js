
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


const  BathMoorlandsHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 3 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 3 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 3 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3-bedroom house in Moorlands, Bath, Somerset? The last thing you need to worry about is managing bills while trying to <b>concentrate on your studies</b>. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Imagine not having to worry about utility bills, internet charges, or council tax - everything is taken care of for you with one convenient monthly payment. This allows you to focus on your academic pursuits and free up your time for more important things. Say goodbye to tracking multiple bills and hello to a stress-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website to discover the convenience and peace of mind that comes with <b>all bills inclusive</b> service.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In searching for shared 3-bedroom houses for students in Moorlands, Bath, it is crucial to consider factors such as proximity to local amenities, transportation links, and the overall condition of the property. By exploring various options, students can find the perfect balance between convenience, comfort, and affordability. Shared living can foster a sense of community and support among housemates, making it a popular choice for students looking to split costs and create a social environment. When weighing up different properties, it's essential to assess the rental agreement, deposit requirements, and any additional fees to ensure a transparent and fair tenancy. Overall, finding a shared 3-bedroom house in Moorlands, Bath can offer students a harmonious living arrangement where they can study, socialize, and create lasting memories.</p></>)
};

export default BathMoorlandsHouse3;