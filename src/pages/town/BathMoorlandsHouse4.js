
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


const  BathMoorlandsHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 4 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 4 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 4 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Tired of managing multiple bills for your student house in Moorlands, Bath, Somerset? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service that will make your life easier. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, allowing you to <b>concentrate on your studies</b> without the stress of budgeting for utilities. By subscribing to their service, you can say goodbye to the hassle of splitting bills with your housemates and worrying about missed payments. <b>UniBills.com</b> takes care of everything, from electricity and water to internet and TV licenses, ensuring that you have a smooth and worry-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath a breeze.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, seeking a shared 4-bedroom house in Moorlands, Bath can be an ideal choice for students looking for affordable and convenient accommodation options. With a variety of properties available, students can find a place that suits their needs and preferences, whether it's in terms of location, budget, or amenities. Living in a shared house can also provide a sense of community and companionship, offering the opportunity to build friendships and create lasting memories. By pooling resources with roommates, students can potentially save money on rent and utilities. Overall, choosing a shared 4-bedroom house in Moorlands, Bath can be a practical and enjoyable living arrangement for students during their academic years.</p></>)
};

export default BathMoorlandsHouse4;