
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


const  BathMoorlandsHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 5 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 5 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 5 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£636 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you tired of dealing with multiple utility providers for your student house in Moorlands, Bath, Somerset? Subscribe to an <b>all bills inclusive</b> service with <b>UniBills.com</b> and enjoy the convenience of having all your bills taken care of in one simple package. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life, without the stress of managing individual bills. Say goodbye to worrying about internet, water, gas, electricity, and other bills - simply sit back, relax, and enjoy the hassle-free, all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life more enjoyable and stress-free. No more late payments or disputes with housemates - make your student accommodation experience a breeze with <b>UniBills.com</b>.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you are a student looking for shared 5-bedroom houses in Moorlands, Bath, you're in luck! With its vibrant student community and close proximity to the University of Bath, Moorlands is a popular choice for those seeking accommodation. The variety of options available in terms of amenities, location, and rent prices make it easier to find the perfect fit for you and your housemates. When searching for a shared house, be sure to consider factors such as proximity to campus, public transportation, supermarkets, and other essential services. Additionally, ensure that the landlord or property management company is reputable and that the lease agreement is fair and clear. By thoroughly researching and touring potential properties, you can secure a comfortable and convenient living situation for the duration of your studies in Moorlands, Bath[]. With its welcoming community and convenient amenities, Moorlands is a fantastic location for students looking to share a 5-bedroom house.</p></>)
};

export default BathMoorlandsHouse5;