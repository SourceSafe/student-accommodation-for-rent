
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 8 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 8 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 8 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your 8-bedroom student house in Moorlands, Bath, Somerset? Say goodbye to the stress of managing utilities and focus on your studies instead by subscribing to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers the perfect solution by providing a hassle-free all-inclusive option for student accommodation. With one simple payment, you can enjoy the convenience of having all your bills covered, including electricity, water, gas, and internet. This means no more arguing over who owes what or chasing housemates for money. With <b>UniBills.com</b>, you can relax and <b>concentrate on your studies</b> without worrying about unexpected bills or budgeting for different expenses. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and discover the benefits of an <b>all bills inclusive</b> service today.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In search of a shared 8-bedroom house for students in Moorlands, Bath? Look no further, as these communal living spaces offer an ideal setting for students to live, socialize, and study together. With spacious common areas, ample bedrooms, and shared facilities, these houses provide a comfortable and convenient living arrangement for multiple students. The central location in Moorlands allows for easy access to the University of Bath and local amenities, making it a popular choice among student groups. From group study sessions to impromptu gatherings, these shared houses foster a sense of community and camaraderie among residents. In conclusion, finding a shared 8-bedroom house in Moorlands, Bath ensures a vibrant student living experience that promotes social connections, academic collaboration, and memorable moments.</p></>)
};

export default BathMoorlandsHouse8;