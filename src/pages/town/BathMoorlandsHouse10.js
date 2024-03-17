
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-10-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 10 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 10 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 10 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you tired of the endless hassle of managing multiple bills for your 10-bedroom student house in Moorlands, Bath, Somerset? Look no further than <b>UniBills.com</b> for the perfect solution! By subscribing to their <b>all bills inclusive</b> service, you can enjoy the convenience of a single monthly payment that covers all of your utility costs, including electricity, water, gas, and even internet. With <b>UniBills.com</b> taking care of all the billing details, you can <b>concentrate on your studies</b> and social activities without the stress of managing finances. Say goodbye to the headache of splitting bills among housemates and chasing payments. Embrace the hassle-free, all-inclusive option provided by <b>UniBills.com</b> and simplify your student living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life easier and more enjoyable.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 10-bedroom house for students in Moorlands, Bath offers great opportunities for a spacious and vibrant living environment. The area provides a peaceful and scenic backdrop for studying and socializing, with convenient access to local amenities and transport links. Living with fellow students in a large house fosters a sense of community and camaraderie, creating a supportive and enriching living experience. The availability of multiple bedrooms allows for both privacy and the chance to bond with housemates, making it an ideal choice for those looking to balance independence with a collaborative living arrangement. Overall, Moorlands, Bath is a fantastic location for students seeking a comfortable and accommodating place to call home during their academic years.</p></>)
};

export default BathMoorlandsHouse10;