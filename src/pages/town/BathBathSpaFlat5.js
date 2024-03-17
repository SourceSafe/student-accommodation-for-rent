
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


const  BathBathSpaFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 5 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 5 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 5 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£557 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>As a student managing a 5 bedroom flat in Bath Spa, Somerset, the last thing you want to worry about is keeping track of multiple utility bills. That's where <b>UniBills.com</b> comes in with their convenient <b>all bills inclusive</b> service. By signing up with <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, allowing you to <b>concentrate on your studies</b> and have peace of mind that all your bills are taken care of. With just one monthly payment, you can say goodbye to the stress of managing electricity, water, gas, and internet bills. <b>UniBills.com</b> makes the process simple and straightforward, giving you more time to focus on your academic pursuits and enjoy your student life. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in Bath Spa a breeze.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 5-bedroom flats for students in Bath Spa, Bath can be a rewarding experience for those looking to find a comfortable and convenient living arrangement. With a diverse range of options available, students can choose from a variety of properties that suit their needs and preferences. From spacious communal areas to well-furnished bedrooms, these shared flats offer a great opportunity for students to live in a social and supportive environment. Additionally, the central location of many of these flats provides easy access to campus facilities, local amenities, and public transportation. Overall, finding a shared 5-bedroom flat in Bath Spa, Bath can offer students a fantastic opportunity to create lasting memories and build strong friendships during their time at university[].</p></>)
};

export default BathBathSpaFlat5;