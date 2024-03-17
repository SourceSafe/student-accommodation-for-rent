
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 4 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 4 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 4 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£694 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Living in a 4 bedroom student flat in Bath Spa can be an exciting experience, especially when you have the convenience of an <b>all bills inclusive</b> service. Companies like <b>UniBills.com</b> offer a hassle-free solution that allows you to <b>concentrate on your studies</b> without the worry of managing multiple bills. With all utilities, such as gas, electricity, water, and even broadband, included in one monthly payment, you can enjoy the convenience of a stress-free living arrangement. <b>UniBills.com</b> takes the hassle out of bill management, giving you more time to focus on your academic commitments and social activities. By opting for the all-inclusive option provided by <b>UniBills.com</b>, you can budget effectively and avoid any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student living experience in Bath Spa a comfortable and worry-free one.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you are a student searching for a shared 4-bedroom flat in Bath Spa, Bath, look no further! Finding a flat that meets all your needs as a student can be challenging, but with the right resources and tips, the process can be much smoother. Start by browsing online platforms and student accommodation websites to find a variety of options that fit your criteria. Consider factors such as location, price, and amenities when making your decision. Once you have narrowed down your choices, arrange viewings to see the flats in person and get a feel for the living space. Lastly, when selecting roommates, make sure to choose individuals who are respectful, responsible, and have similar living habits to avoid conflicts. By following these steps, you can find the perfect shared 4-bedroom flat for students in Bath Spa, Bath, and enjoy a comfortable and convenient living experience during your time as a student.</p></>)
};

export default BathBathSpaFlat4;