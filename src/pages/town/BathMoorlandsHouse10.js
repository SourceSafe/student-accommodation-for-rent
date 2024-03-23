
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 10 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 10 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 10 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you tired of managing multiple bills for your student house in Moorlands, Bath, Somerset? Why not simplify your life and save time by opting for an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers a convenient solution to your accommodation needs, allowing you to <b>concentrate on your studies</b> without the stress of dealing with utility bills. By choosing the <b>all bills inclusive</b> option provided by <b>UniBills.com</b>, you can enjoy hassle-free living with the convenience of having your utilities, internet, and other services all included in one monthly payment. This not only saves you time but also helps you budget more effectively. Say goodbye to the headache of splitting bills and chasing roommates for payments – <b>UniBills.com</b> takes care of everything for you. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of <b>all bills inclusive</b> living today.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 10-bedroom houses for students in Moorlands, Bath, it is important to consider various factors such as location, amenities, and budget. With its close proximity to the university and local shops, Moorlands offers a convenient and vibrant setting for student living. Finding a spacious 10-bedroom house can foster a supportive and social community, ideal for studying and socializing. Additionally, shared houses can offer cost-saving benefits compared to individual accommodations. To ensure a successful search, students should prioritize clear communication, thorough vetting of potential housemates, and establishing clear rules and responsibilities within the household. In conclusion, looking for shared 10-bedroom houses in Moorlands, Bath can provide an enriching and memorable experience for students, fostering friendships and a sense of community during their academic journey.</p></>)
};

export default BathMoorlandsHouse10;