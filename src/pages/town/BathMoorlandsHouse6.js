
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


const  BathMoorlandsHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-6-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 6 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 6 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 6 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£772 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 6-bedroom house in Moorlands, Bath, Somerset? Juggling bills and utilities can be a hassle, especially when you're trying to <b>concentrate on your studies</b>. That's where <b>UniBills.com</b> comes in with their <b>all bills inclusive</b> service. By subscribing to their package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of managing multiple bills every month and instead, focus on what truly matters – your education. <b>UniBills.com</b> takes care of all your utility needs, ensuring that you have one less thing to worry about. Save time, energy, and money by opting for their convenient service. Get a quote from UniBills.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 6-bedroom houses for students in Moorlands, Bath offers a great opportunity for students to live together in a spacious and comfortable environment. With multiple bedrooms, there is plenty of room for each student to have their own space while still being able to socialize with housemates. The convenience of communal living allows for shared responsibilities and expenses, making it an affordable option for student accommodation. Additionally, living in a 6-bedroom house promotes a sense of community and camaraderie among housemates, fostering a supportive and enriching living experience. Overall, searching for shared accommodation in Moorlands can be a practical and enjoyable way for students to balance their academic and social life while creating lasting memories with their peers.</p></>)
};

export default BathMoorlandsHouse6;