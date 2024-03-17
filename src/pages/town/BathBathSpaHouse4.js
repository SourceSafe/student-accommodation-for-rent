
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


const  BathBathSpaHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-4-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 4 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 4 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 4 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£604 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your student house in Bath Spa? Save time and reduce stress by subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b>. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and enjoy the hassle-free, all-inclusive option provided by this reliable service. Say goodbye to the headache of managing individual utility bills, and let <b>UniBills.com</b> take care of everything for you. With just one simple payment each month, you can enjoy peace of mind knowing that all your bills are covered. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience in Bath, Somerset.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Shared 4-bedroom houses in Bath Spa, Bath are a popular choice for students looking for affordable and spacious accommodations. With the rising cost of living and the increasing demand for student housing, finding a shared house with 4 bedrooms can be a great option for those looking to split the cost with roommates. These types of homes offer a sense of community and camaraderie among housemates, while also providing enough space for privacy and personal belongings. When searching for a shared 4-bedroom house, it's important to consider factors such as location, amenities, lease terms, and rental prices. Overall, living in a shared 4-bedroom house can be a rewarding and budget-friendly experience for students in Bath Spa, Bath. Find your perfect shared house today and enjoy all the benefits of communal living while pursuing your academic goals.</p></>)
};

export default BathBathSpaHouse4;