
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-2-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 2 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 2 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 2 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£818 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Looking for a convenient and stress-free way to manage your living expenses while studying at Bath Spa University in Bath, Somerset? Subscribe to an <b>all bills inclusive</b> service for your 2 bedroom student flat through <b>UniBills.com</b>. With this service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers all your utility bills such as electricity, gas, water, and even internet. By choosing this option, you can <b>concentrate on your studies</b> without worrying about budgeting for various bills each month. This service not only simplifies your life but also helps you save time and effort. Get a quote from <b>UniBills.com</b> or any accommodation on this website to experience the convenience of an <b>all bills inclusive</b> service and enjoy your student life to the fullest in Bath Spa.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 2 bedroom flats for students in Bath Spa, Bath can be a rewarding but challenging process. With the high demand for student accommodation in this vibrant city, it is important to start the search early and be prepared to act quickly when a suitable option becomes available. It is essential to consider factors such as location, budget, amenities, and compatibility with potential flatmates when making a decision. Additionally, utilizing reputable online platforms, attending viewings, and seeking advice from student housing services can all be helpful in finding the perfect 2 bedroom flat to share. Remember to communicate openly with potential flatmates and landlords, and to carefully read and understand the terms of the tenancy agreement before signing. With careful planning and consideration, students can find a comfortable and convenient shared living arrangement in Bath Spa, Bath.</p></>)
};

export default BathBathSpaFlat2;