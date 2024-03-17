
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 5 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 5 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 5 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£557 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a hassle-free living arrangement in Bath Spa, Somerset? Consider subscribing to an <b>all bills inclusive</b> service for your 5 bedroom student flat with <b>UniBills.com</b>. With <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including utilities and Wi-Fi, bundled into one monthly payment. This means you can <b>concentrate on your studies</b> without the stress of managing multiple bills. <b>UniBills.com</b> makes budgeting easier and ensures that you won't have any unexpected expenses popping up throughout the year. Imagine the peace of mind you'll have knowing that all your living costs are taken care of. Say goodbye to the headache of splitting bills with your flatmates or dealing with different utility providers. Get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the bustling city of Bath Spa, finding shared 5-bedroom flats for students can be a challenging yet rewarding experience. These accommodations offer the perfect balance between independence and communal living, providing students with a space to call their own while fostering a sense of camaraderie among housemates. By opting for a shared flat, students can split the cost of rent, utilities, and other expenses, making it a more affordable housing option. The process of searching for these sought-after living spaces requires careful consideration of location, amenities, and budget. However, the diverse range of options available in Bath Spa ensures that students can find a flat that meets their needs and preferences. Overall, shared 5-bedroom flats for students in Bath Spa offer a unique opportunity for socialization, collaboration, and personal growth, making them an ideal choice for students seeking a fulfilling living experience during their academic years.</p></>)
};

export default BathBathSpaFlat5;