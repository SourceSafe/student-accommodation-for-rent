
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 5 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 5 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 5 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£557 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Managing bills can be a real headache, especially when you're juggling the demands of university life. This is why opting for an <b>all bills inclusive</b> service for your 5-bedroom student flat in Bath Spa, Bath, Somerset is the smart choice. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without worrying about utility bills. With the <b>all bills inclusive</b> package, you can enjoy the hassle-free option provided by <b>UniBills.com</b>, giving you peace of mind knowing that everything is taken care of. Say goodbye to the stress of managing multiple bills and hello to a simpler way of living. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life more enjoyable and stress-free.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 5-bedroom flats for students in Bath Spa, Bath can be a daunting task, but with the right resources and guidance, it can be a smooth and rewarding experience. With its vibrant student community and beautiful surroundings, Bath Spa is an ideal location for students looking to live in shared accommodations. The availability of 5-bedroom flats offers more space and affordability for those looking to share living expenses. It is important to take into consideration factors such as location, amenities, and rental agreements when searching for the perfect shared flat. By communicating effectively with potential roommates and landlords, students can ensure a comfortable and enjoyable living arrangement. In conclusion, navigating the search for shared 5-bedroom flats in Bath Spa requires careful consideration and planning, but the end result of finding a suitable and cozy living space with like-minded individuals will make it all worthwhile.</p></>)
};

export default BathBathSpaFlat5;