
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 6 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 6 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 6 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£772 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Imagine living in a spacious 6-bedroom student house in Moorlands, Bath, Somerset, and not having to worry about paying multiple bills every month. With an <b>all bills inclusive</b> service from <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of managing utility bills, internet, and other expenses – <b>UniBills.com</b> takes care of it all for you. By subscribing to an <b>all bills inclusive</b> service, you can streamline your monthly payments, avoid unexpected costs, and budget more effectively. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience. With <b>UniBills.com</b>, you can focus on what truly matters – your education and personal growth.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 6-bedroom house for students in Moorlands, Bath can be a daunting task, but it is definitely worth the effort. These properties offer spacious living areas, multiple bathrooms, and a great sense of community for students. By living together, students can split the cost of rent and utilities, making it a budget-friendly option. Plus, having housemates can make the college experience more enjoyable and provide a support system for academic and personal challenges. In conclusion, finding a shared 6-bedroom house in Moorlands, Bath is a smart choice for students looking for affordable and communal living while pursuing their academic goals.</p></>)
};

export default BathMoorlandsHouse6;