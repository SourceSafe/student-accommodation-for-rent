
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 4 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 4 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 4 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£604 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Living in a 4-bedroom student house in Bath Spa, Somerset can be a thrilling experience, but managing bills and utilities can also be a hassle. That's where <b>UniBills.com</b> comes in with their <b>all bills inclusive</b> service. By subscribing to this convenient option, you can say goodbye to the stress of splitting bills and tracking expenses, allowing you to <b>concentrate on your studies</b> and enjoy your time in Bath Spa. <b>UniBills.com</b> takes care of all the utility bills, including gas, electricity, water, and even internet, so you can focus on what truly matters. The benefits of opting for <b>all bills inclusive</b> are endless, from simplified finances to avoiding disputes with housemates over who owes what. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the ease and peace of mind that comes with the hassle-free all-inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 4-bedroom houses for students in Bath Spa, Bath offers a range of benefits. Not only does it provide affordable accommodation options, but it also encourages social interaction and a sense of community among housemates. Living in a shared house can help students develop important life skills such as communication, conflict resolution, and teamwork. Additionally, these houses often come fully furnished and include utilities, making the moving process easier for students. In conclusion, choosing to live in a shared 4-bedroom house in Bath Spa, Bath can be a rewarding experience for students looking for a comfortable and convenient living arrangement during their academic studies.</p></>)
};

export default BathBathSpaHouse4;