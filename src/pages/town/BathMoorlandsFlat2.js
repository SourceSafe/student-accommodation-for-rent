
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-moorlands-bath.png')} alt='Shared 2 Bedroom Flats for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_moorlands,_bath">Prices for Shared 2 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_moorlands,_bath">Cheap Shared 2 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_added">Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£680 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Moorlands, Bath, Somerset, and looking for a convenient way to manage your expenses? Subscribing to an <b>all bills inclusive</b> service for your 2 bedroom student flat could be the perfect solution for you. By signing up with <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by them. With all your bills, including utilities and internet, rolled into one convenient monthly payment, you can <b>concentrate on your studies</b> without the stress of managing multiple bills. <b>UniBills.com</b> takes care of all the boring stuff, leaving you with more time to focus on what's important. Say goodbye to late fees and budgeting headaches and hello to peace of mind. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 2-bedroom flats for students in Moorlands, Bath can be a rewarding experience. The area offers a vibrant student community, easy access to the University of Bath, and a range of amenities close by. When considering potential properties, students should prioritize factors such as price, location, and living arrangements to ensure a comfortable and conducive living environment. Additionally, communication and collaboration with potential roommates are essential to establish a harmonious living situation. Overall, by conducting thorough research, staying organized, and being proactive in the search process, students can find the perfect shared flat in Moorlands that meets their needs and enhances their university experience.</p></>)
};

export default BathMoorlandsFlat2;