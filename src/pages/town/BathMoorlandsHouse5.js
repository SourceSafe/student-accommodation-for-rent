
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-5-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 5 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 5 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 5 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£636 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5 bedroom house in Moorlands, Bath, Somerset? Are you tired of managing multiple bills for utilities each month? Then it's time to consider an <b>all bills inclusive</b> service from <b>UniBills.com</b>. By opting for this convenient package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all your bills rolled into one, you can save time and effort, giving you the freedom to <b>concentrate on your studies</b> and enjoy student life to the fullest. Say goodbye to the stress of managing different bills and hello to a more relaxed living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 5-bedroom houses for students in Moorlands, Bath can be a challenging yet rewarding process. The area offers a vibrant and student-friendly atmosphere, with plenty of amenities and easy access to the University of Bath and Bath Spa University. By exploring various options and considering factors such as budget, location, and housemates, students can find the perfect accommodation that suits their needs. With spacious living areas, multiple bathrooms, and communal spaces for socializing and studying, shared 5-bedroom houses provide the perfect balance of independence and community living. Ultimately, finding the right shared house in Moorlands can enhance a student's university experience and create lasting memories with their housemates.</p></>)
};

export default BathMoorlandsHouse5;