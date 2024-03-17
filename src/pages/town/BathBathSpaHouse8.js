
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 8 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 8 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 8 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£613 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 8 bedroom student house in Bath Spa, Bath, Somerset is a smart choice for any student looking to concentrate on their studies without the headache of managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by their reliable service. Imagine not having to worry about electricity, gas, water, or internet bills every month. Instead, you can focus on your assignments and social activities while <b>UniBills.com</b> takes care of the rest. By choosing an <b>all bills inclusive</b> package, you can budget more effectively and avoid any unexpected costs. To make your student life even easier, get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience of stress-free living.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 8-bedroom houses for students in Bath Spa, Bath can be a challenging yet rewarding experience. With a range of properties available, students have the opportunity to find a spacious and comfortable living environment that suits their needs. From fully-furnished accommodations to convenient locations near campus and amenities, there are plenty of options to choose from. By working together with housemates, students can divide expenses, create a sense of community, and enjoy a social atmosphere while pursuing their studies. Additionally, sharing a house with others can help foster friendships and provide a supportive network during the university years. Ultimately, living in a shared 8-bedroom house can offer a fulfilling and enriching experience for students in Bath Spa, Bath[].</p></>)
};

export default BathBathSpaHouse8;