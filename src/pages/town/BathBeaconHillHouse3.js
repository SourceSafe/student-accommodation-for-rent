
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


const  BathBeaconHillHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-beacon-hill-bath.png')} alt='Shared 3 Bedroom Houses for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_beacon_hill,_bath">Prices for Shared 3 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_beacon_hill,_bath">Cheap Shared 3 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added">Shared 3 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£717 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Living in a 3 bedroom student house in Beacon Hill, Bath, Somerset can be demanding, especially when it comes to managing bills and utilities. However, subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> can offer you a stress-free solution. By opting for this service, you can <b>concentrate on your studies</b> and social activities without the worry of budgeting for various bills each month. <b>UniBills.com</b> handles all the tedious tasks of splitting and collecting payments for utilities such as water, gas, electricity, and internet, making your life easier. With an <b>all bills inclusive</b> subscription, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, ensuring that you and your housemates can focus on making the most of your time at university. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your living experience today.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 3-bedroom houses for students in Beacon Hill, Bath, students have a wide range of options to choose from. This popular neighborhood offers a variety of affordable and spacious accommodations that cater to the needs of student living. With its proximity to local amenities, universities, and public transportation, Beacon Hill is an ideal location for student housing. The shared living arrangements provide a budget-friendly solution for students looking to split rent and utilities. Additionally, pooling resources with roommates can create a sense of community and support during the academic year. Overall, finding a shared 3-bedroom house in Beacon Hill offers students the opportunity to live in a vibrant and convenient location while fostering friendships and shared experiences that enhance the university experience.</p></>)
};

export default BathBeaconHillHouse3;