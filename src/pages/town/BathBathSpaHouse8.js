
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


const  BathBathSpaHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-8-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 8 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 8 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 8 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£613 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in an 8-bedroom house in Bath Spa, Bath, Somerset? Keeping track of multiple bills can be a real headache, especially when you should be concentrating on your studies. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of managing utilities, internet, and other bills separately. With <b>UniBills.com</b>, everything is taken care of for you, allowing you to focus on what really matters – your education. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath Spa a whole lot easier.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for shared 8-bedroom houses for students in Bath Spa, Bath can be a promising yet challenging endeavor. With the high demand for student accommodation in the area, it is essential to start the search early and consider all available options. When searching for a shared house, factors such as location, amenities, budget, and housemates compatibility should all be taken into consideration. It is also important to engage with reputable rental agencies or landlords to ensure a smooth and hassle-free renting experience. In conclusion, finding the perfect shared 8-bedroom house for students in Bath Spa, Bath requires patience, careful planning, and attention to detail, but with thorough research and the right resources, it is definitely achievable.</p></>)
};

export default BathBathSpaHouse8;