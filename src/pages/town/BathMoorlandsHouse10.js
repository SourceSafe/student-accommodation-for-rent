
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


const  BathMoorlandsHouse10 = () => 
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 10 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 10 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 10 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 10 bedroom house in Moorlands, Bath, Somerset? Managing multiple bills can be overwhelming and time-consuming. Instead, why not consider an <b>all bills inclusive</b> service such as <b>UniBills.com</b>? By subscribing to this service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without worrying about utility bills, internet fees, or any other expenses. With <b>UniBills.com</b>, you can save time, money, and energy, making your student life much more convenient and stress-free. Get a quote from UniBills.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you are seeking a shared 10-bedroom house for students in Moorlands, Bath, you are in luck. With several student-friendly properties available in this area, you can find spacious, well-maintained accommodations suitable for your needs. Living in a shared house can provide a sense of community and support during your academic journey. Additionally, splitting the rent and utilities among housemates can help you save money. When searching for the perfect shared house, consider factors such as location, amenities, and lease terms. Ultimately, finding a 10-bedroom house that meets your requirements can enhance your university experience and create lasting memories with your fellow students. So, start your search now and secure your ideal student housing in Moorlands, Bath.</p></>)
};

export default BathMoorlandsHouse10;