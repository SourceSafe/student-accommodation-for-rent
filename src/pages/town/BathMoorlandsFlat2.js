
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


const  BathMoorlandsFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-moorlands-bath.png')} alt='Shared 2 Bedroom Flats for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_moorlands,_bath">Prices for Shared 2 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_moorlands,_bath">Cheap Shared 2 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_added">Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£680 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you tired of keeping track of multiple bills for your student flat in Moorlands, Bath, Somerset? Streamline your living situation by subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b>! With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, which covers all your utility bills in one convenient monthly payment. This means you can <b>concentrate on your studies</b> without worrying about budgeting for electricity, water, gas, or internet bills. By opting for an <b>all bills inclusive</b> service, you can save time and energy that would have been spent sorting through various bills and payments. <b>UniBills.com</b> takes care of everything, allowing you to focus on what really matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 2-bedroom flats for students in Moorlands, Bath, it is evident that there is a wide variety of options available to suit different preferences and budgets. The vibrant student community in this area offers a lively and inclusive atmosphere, making it a desirable location for student accommodation. With amenities such as local shops, restaurants, and transportation options nearby, Moorlands provides convenience and accessibility for student residents. Whether you prefer a modern, furnished apartment or a cozy, traditional flat, there is something for everyone in Moorlands. Ultimately, the process of finding the perfect shared flat requires diligent research, careful consideration of each property's features, and effective communication with potential flatmates. By taking the time to explore the available options and making informed decisions, students can find a comfortable and enjoyable living arrangement in Moorlands, Bath.</p></>)
};

export default BathMoorlandsFlat2;