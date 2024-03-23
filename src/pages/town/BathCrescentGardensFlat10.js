
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


const  BathCrescentGardensFlat10 = () => 
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

    return (<><h1>Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-flats-for-students-in-crescent-gardens-bath.png')} alt='Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath">Prices for Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath">Cheap Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added">Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced">Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Prices for Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 10 bedroom flat in Crescent Gardens, Bath, Somerset? Tired of the constant hassle of managing multiple bills every month? Look no further and subscribe to an <b>all bills inclusive</b> service from <b>UniBills.com</b>. With <b>UniBills.com</b>, you can enjoy the convenience and peace of mind that comes with having all your bills covered in one easy payment. Say goodbye to the stress of budgeting for utilities, internet, and other expenses, and instead <b>concentrate on your studies</b> and making the most of your time at university. <b>UniBills.com</b> takes care of it all, so you can relax and focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and discover the benefits of the hassle-free all-inclusive option provided by <b>UniBills.com</b> today.</p><a id = "cheap_shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Cheap Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Shared 10 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, if you are a student looking for shared accommodation in Crescent Gardens, Bath, a 10-bedroom flat can be an ideal option. These large properties offer ample space for socializing and studying, creating a vibrant and communal atmosphere. Furthermore, sharing with nine other students can help to reduce living costs and foster a sense of camaraderie. Crescent Gardens is a convenient and attractive location for student living, with easy access to the city center and local amenities. When searching for a 10-bedroom flat, consider factors such as budget, location, and the facilities offered. By carefully weighing these considerations, you can find the perfect shared accommodation in Crescent Gardens to suit your needs and preferences.</p></>)
};

export default BathCrescentGardensFlat10;