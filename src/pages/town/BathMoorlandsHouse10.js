
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 10 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 10 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 10 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 10-bedroom house in Moorlands, Bath, Somerset? Managing bills can be a hassle, especially when you're already juggling assignments and lectures. Why not simplify your life by subscribing to an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers the perfect solution for students looking to concentrate on their studies without the stress of budgeting for utilities. By opting for an <b>all bills inclusive</b> package, you can enjoy the hassle-free convenience provided by <b>UniBills.com</b>. From electricity and water to internet and TV subscriptions, everything is covered in one fixed monthly fee. Say goodbye to tedious bill splitting and hello to seamless living. Get a quote from UniBills.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 10-bedroom house for students in Moorlands, Bath can be a daunting task, but the numerous benefits make it worth the effort. These properties offer a sense of community and camaraderie, perfect for fostering friendships and a supportive environment for academic success. Additionally, these spacious homes provide ample shared living spaces and facilities, creating a comfortable and convenient living arrangement for students. With close proximity to the University of Bath and other amenities, students can easily access everything they need while enjoying the perks of communal living. Overall, opting for a shared 10-bedroom house in Moorlands, Bath is a smart choice for students looking for a well-rounded and enriching college experience.</p></>)
};

export default BathMoorlandsHouse10;