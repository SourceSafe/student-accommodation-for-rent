
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 5 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 5 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 5 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£636 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5 bedroom house in Moorlands, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> is the perfect way to simplify your life and enhance your student living experience. With <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including gas, electricity, water, and internet, bundled into one monthly payment. This means no more stressing about managing multiple bills or splitting costs with housemates. By choosing to subscribe to this service, you can <b>concentrate on your studies</b> and social activities without the added worry of budgeting for utilities. Say goodbye to unexpected bills and hello to the hassle-free all inclusive option provided by <b>UniBills.com</b>. Make your student life more manageable and enjoyable by signing up for an <b>all bills inclusive</b> service today. Get a quote from <b>UniBills.com</b> or any accommodation on this web site.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 5-bedroom house for students in Moorlands, Bath can be a daunting task, but with a little patience and persistence, the perfect accommodation can be found. The area of Moorlands offers a peaceful and convenient location for students, with easy access to local amenities and public transport. When looking for a shared house, it is essential to consider factors such as the proximity to campus, the condition of the property, and the compatibility with potential housemates. By carefully weighing these aspects and conducting thorough research, students can ensure a comfortable and enjoyable living experience in Moorlands. With its picturesque surroundings and vibrant community, Moorlands presents an ideal setting for students to thrive academically and socially. So, don't hesitate to embark on the search for a shared 5-bedroom house in Moorlands – the perfect student accommodation awaits[].</p></>)
};

export default BathMoorlandsHouse5;