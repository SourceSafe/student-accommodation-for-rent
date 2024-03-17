
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


const  BathBathSpaFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 4 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 4 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 4 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£694 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Bath Spa, Somerset, looking for hassle-free accommodation? Consider subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student flat through <b>UniBills.com</b>. With all your bills rolled into one package, you can <b>concentrate on your studies</b> and not worry about managing multiple payments. <b>UniBills.com</b> offers a convenient solution that covers electricity, water, gas, and even internet, allowing you to budget effectively without any unexpected expenses. Say goodbye to the stress of splitting bills with your housemates and enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student living experience in Bath Spa a smooth and seamless one.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 4-bedroom flat for students in Bath Spa, Bath can be an exciting and rewarding experience. With a wide range of options available, students can find a comfortable and convenient living space that suits their needs. Living with roommates in a spacious 4-bedroom flat offers a sense of community and camaraderie while also providing the opportunity for privacy when needed. By carefully considering factors such as location, budget, and amenities, students can ensure they find the perfect place to call home during their time at Bath Spa University. Whether it's studying together in the common area or exploring the vibrant city of Bath, sharing a flat with fellow students can create lasting memories and friendships[].</p></>)
};

export default BathBathSpaFlat4;