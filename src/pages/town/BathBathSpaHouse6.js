
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


const  BathBathSpaHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-6-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 6 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 6 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 6 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£651 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>When you're a student living in a 6-bedroom house in Bath Spa, Somerset, the last thing you want to worry about is managing multiple bills for utilities. That's where an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b> can make your life a whole lot easier. By subscribing to their service, you can enjoy the hassle-free, all-inclusive option that covers your electricity, gas, water, and internet bills. This means you can <b>concentrate on your studies</b> and social life without the stress of budgeting for various expenses each month. <b>UniBills.com</b> takes care of everything for you, allowing you to focus on what matters most. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath Spa a whole lot smoother.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 6-bedroom house for students in Bath Spa, Bath can be a great way to save money and build a strong community with your peers. By splitting the cost of rent and utilities among six people, you can enjoy spacious accommodations while staying within your budget. Additionally, living with other students can provide a supportive and social environment, making your college experience more enjoyable. Shared houses often come fully furnished and equipped with communal areas, creating a comfortable and convenient living space. In conclusion, seeking a shared 6-bedroom house in Bath Spa can offer a perfect balance between affordability and camaraderie for students looking to enhance their university life.</p></>)
};

export default BathBathSpaHouse6;