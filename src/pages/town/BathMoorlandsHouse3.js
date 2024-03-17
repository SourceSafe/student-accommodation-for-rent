
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 3 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 3 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 3 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you tired of managing multiple utility bills for your student house in Moorlands, Bath, Somerset? Say goodbye to the hassle with an <b>all bills inclusive</b> service from <b>UniBills.com</b>! By subscribing to this convenient option, you can enjoy the peace of mind that comes with knowing all your bills, including electricity, gas, water, and internet, are taken care of in one simple payment. With <b>UniBills.com</b> handling your bills, you can <b>concentrate on your studies</b> and social activities without the stress of managing various bills. Save time and avoid disputes with housemates over splitting bills by opting for the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website to make your student life in Moorlands, Bath, Somerset, as smooth as possible.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, the search for shared 3-bedroom houses for students in Moorlands, Bath offers a variety of housing options suited to the needs of student living. With its convenient location close to campus and amenities, Moorlands presents an ideal setting for communal living among students. The availability of 3-bedroom houses ensures ample space for roommates to coexist comfortably and affordably. Moreover, the vibrant student community in Moorlands fosters a lively and social atmosphere, perfect for making new friends and cultivating meaningful experiences. Overall, embarking on the journey to find a shared 3-bedroom house in Moorlands promises not only a place to call home but also a vibrant student lifestyle in beautiful Bath.</p></>)
};

export default BathMoorlandsHouse3;