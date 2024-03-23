
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


const  BathMoorlandsHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 3 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 3 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 3 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3 bedroom house in Moorlands, Bath, Somerset? Tired of dealing with multiple bills for utilities, internet, and other services? Why not simplify your life by opting for an <b>all bills inclusive</b> service with <b>UniBills.com</b>? By subscribing to this convenient option, you can enjoy the hassle-free experience of having all your bills taken care of in one simple payment each month. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life, without the stress of managing various bills. Get a quote from <b>UniBills.com</b> or any accommodation on this website today to make your student living experience more comfortable and enjoyable.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you are a student looking for shared 3-bedroom houses in Moorlands, Bath, you are in luck! Moorlands offers a range of housing options perfect for students, from cozy cottages to modern apartments. Shared housing is a popular choice among students as it allows for cost savings and fosters a sense of community. When searching for a shared 3-bedroom house, consider factors such as location, amenities, and budget. Moorlands boasts a vibrant student community and is conveniently located near universities, shopping centers, and public transportation. In conclusion, finding a shared 3-bedroom house in Moorlands, Bath, offers students the opportunity to live comfortably, make new friends, and enjoy all that the area has to offer[].</p></>)
};

export default BathMoorlandsHouse3;