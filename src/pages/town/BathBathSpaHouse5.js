
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


const  BathBathSpaHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-5-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 5 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 5 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 5 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£625 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5 bedroom house in Bath Spa, Bath, Somerset? Managing bills and household expenses can often be a time-consuming and stressful task, taking away precious time that could be spent focusing on your studies. By subscribing to an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all bills, including utilities, internet, and even TV license, covered in one convenient package, you can relax knowing that everything is taken care of. Say goodbye to the stress of splitting bills with your housemates and instead <b>concentrate on your studies</b> and social life. Get a quote from <b>UniBills.com</b> or any accommodation on this website and start enjoying the benefits of an all-inclusive service today.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 5-bedroom house for students in Bath Spa, Bath can be both exciting and challenging. With a variety of options available, it is important to consider factors such as proximity to campus, amenities, and overall living arrangements. Sharing a house with other students can foster a sense of community and camaraderie, providing a supportive environment for student life. Additionally, splitting costs can make living expenses more affordable. When searching for a suitable property, it is essential to thoroughly research and visit potential options to ensure they meet your needs and preferences. Overall, finding the right shared house can enhance your university experience and create lasting memories with housemates.</p></>)
};

export default BathBathSpaHouse5;