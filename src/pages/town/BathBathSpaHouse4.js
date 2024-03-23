
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 4 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 4 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 4 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£604 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student in Bath Spa looking for a convenient and stress-free way to manage your living expenses? Consider subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student house. <b>UniBills.com</b> offers a comprehensive package that covers all your utility bills, including gas, electricity, water, internet, and even council tax, allowing you to <b>concentrate on your studies</b> without worrying about budgeting for various bills each month. By choosing to enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>, you can simplify your living arrangements and avoid any surprise costs. With everything included in one convenient package, you can easily manage your expenses and focus on what truly matters – your academic pursuits. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life in Bath Spa more enjoyable and stress-free.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>With a high demand for student housing in Bath Spa, Bath, shared 4-bedroom houses offer a cost-effective and communal living option for students. By splitting the rent and utilities among four roommates, students can save money while still enjoying the experience of living with their peers. These types of properties often come fully furnished and provide a comfortable living space for studying and socializing. Additionally, the close proximity to campus and amenities makes these houses a convenient choice for students. In conclusion, shared 4-bedroom houses for students in Bath Spa provide a practical and enjoyable living arrangement that caters to the needs and budgets of university students.</p></>)
};

export default BathBathSpaHouse4;