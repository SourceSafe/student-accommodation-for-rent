
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


const  BathKensingtonHouse9 = () => 
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

    return (<><h1>Shared 9 Bedroom Houses for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-houses-for-students-in-kensington-bath.png')} alt='Shared 9 Bedroom Houses for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_houses_for_students_in_kensington,_bath">Prices for Shared 9 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive">Shared 9 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_houses_for_students_in_kensington,_bath">Cheap Shared 9 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_kensington,_bath__recently_added">Shared 9 Bedroom Houses for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_kensington,_bath__recently_reduced">Shared 9 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_houses_for_students_in_kensington,_bath"> <h2>Prices for Shared 9 Bedroom Houses for Students in Kensington, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£670 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Houses for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Subscribe to an <b>all bills inclusive</b> service for your 9 bedroom student house in Kensington, Bath, Somerset, and enjoy the hassle-free living provided by <b>UniBills.com</b>. With all bills included in one convenient package, you can focus on your studies and social life without worrying about managing multiple bills. <b>UniBills.com</b> takes care of utilities, internet, and even TV license, so you don't have to deal with the stress of splitting costs and keeping track of payments. This all-inclusive option allows you to budget more effectively and avoid unexpected expenses popping up throughout the year. Save time and energy and streamline your living arrangements by choosing the <b>all bills inclusive</b> service at <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath a breeze.</p><a id = "cheap_shared_9_bedroom_houses_for_students_in_kensington,_bath"> <h2>Cheap Shared 9 Bedroom Houses for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_kensington,_bath__recently_added"> <h2>Shared 9 Bedroom Houses for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 9 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for shared 9-bedroom houses for students in Kensington, Bath, it is essential to consider the proximity to Universities and amenities. These properties offer the convenience of living with friends while keeping rental costs down. With spacious rooms and communal areas, they provide the perfect environment for studying and socializing. Additionally, sharing a house with several roommates fosters a sense of community and support. Furthermore, living in a vibrant area like Kensington offers access to cafes, shops, and parks, enhancing the overall student experience. In conclusion, shared 9-bedroom houses in Kensington, Bath, are a popular choice for students seeking affordable accommodation with a strong sense of camaraderie and access to all the necessary facilities.</p></>)
};

export default BathKensingtonHouse9;