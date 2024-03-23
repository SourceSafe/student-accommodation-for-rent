
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 8 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 8 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 8 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>When you're living in an 8 bedroom student house in Moorlands, Bath, Somerset, managing bills can be a real headache. That's where an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b> comes in. By subscribing to their service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of splitting utility costs and tracking down your housemates for their share of the bills. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and living your best student life without worrying about the financial logistics. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 8 bedroom houses for students in Moorlands, Bath, it is important to consider various factors in order to find the perfect living space. Location, budget, amenities, and roommates compatibility are key aspects to take into account when looking for accommodation. By exploring different options and visiting potential properties, students can ensure they find a suitable and comfortable living arrangement. Additionally, discussing responsibilities, creating clear house rules, and fostering open communication among housemates can lead to a harmonious and enjoyable living experience. Ultimately, finding a shared 8 bedroom house in Moorlands, Bath that meets all your needs and preferences will enhance your college experience and provide a cozy and welcoming place to call home.</p></>)
};

export default BathMoorlandsHouse8;