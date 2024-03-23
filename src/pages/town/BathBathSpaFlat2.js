
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


const  BathBathSpaFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 2 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 2 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 2 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£818 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2 bedroom flat in Bath Spa, Bath, Somerset? Simplify your living experience by subscribing to an <b>all bills inclusive</b> service provided by <b>UniBills.com</b>. With this convenient option, you can say goodbye to the stress of managing multiple bills and hello to a hassle-free student life. By choosing <b>UniBills.com</b>, you can <b>concentrate on your studies</b> without worrying about utility payments and other expenses. Enjoy the ease and convenience of having all your bills covered under one simple payment each month. Save time and energy by opting for the all-inclusive package, allowing you to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website to start enjoying the benefits of an <b>all bills inclusive</b> service today.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 2 bedroom flat for students in Bath Spa, Bath can be a rewarding experience. By sharing a living space with a roommate, students not only split the cost of rent but also have the opportunity to build lifelong friendships and create lasting memories. The city of Bath offers a vibrant student community, with plenty of amenities and activities to enjoy. When searching for the perfect 2 bedroom flat, it's important to consider factors such as location, budget, and preferences in terms of furnishings and utilities. With so many options available in Bath Spa, students are sure to find a cozy and inviting flat that meets their needs. In conclusion, hunting for a shared 2 bedroom flat can be an exciting journey that leads to a comfortable and convenient living arrangement for students in Bath Spa.</p></>)
};

export default BathBathSpaFlat2;