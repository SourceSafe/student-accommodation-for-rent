
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


const  BathBathSpaHouse9 = () => 
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

    return (<><h1>Shared 9 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 9 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 9 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 9 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 9 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 9 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 9 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 9 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£655 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 9-bedroom house in Bath Spa, Bath, Somerset? Managing household bills can be a major time-consuming task, especially when you should be focusing on your studies. That's where <b>UniBills.com</b> comes in with their convenient <b>all bills inclusive</b> service. By subscribing to this service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers all your utility bills, internet, and even TV licenses. This means no more late-night disputes over who owes what or missed payments that could affect your credit score. Imagine the peace of mind you'll have knowing that all your bills are taken care of, allowing you to concentrate fully on your academic pursuits. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student life a whole lot easier.</p><a id = "cheap_shared_9_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 9 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 9 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 9 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a 9-bedroom shared house for students in Bath Spa, Bath can be an exciting yet challenging task. With the demand for student accommodation in the area, it's essential to start your search early to secure a spacious and comfortable living arrangement. When viewing properties, consider factors such as proximity to campus, transportation options, and amenities like supermarkets and restaurants. Additionally, prioritize properties that offer individual leases to prevent any conflicts over rent payments. Overall, finding the perfect 9-bedroom house for you and your friends can take time, but with thorough research and communication with potential housemates, you can secure a fantastic living space that enhances your university experience.</p></>)
};

export default BathBathSpaHouse9;