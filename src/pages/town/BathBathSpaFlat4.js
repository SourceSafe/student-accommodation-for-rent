
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 4 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 4 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 4 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£694 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4 bedroom flat in Bath Spa, Bath, Somerset? With the demands of university life, the last thing you need to worry about is managing multiple bills for your utilities. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free option of having all your bills taken care of in one simple payment. This means you can <b>concentrate on your studies</b> and not stress about sorting out electricity, gas, water, or internet bills. <b>UniBills.com</b> makes it easy for you to budget effectively and avoid any unexpected costs. Say goodbye to bill management and hello to a more convenient living arrangement. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life easier and more enjoyable.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>After exploring and researching the options for shared 4-bedroom flats for students in Bath Spa, Bath, it is clear that there are numerous benefits to such living arrangements. By pooling resources with roommates, students can often find more affordable housing options in desirable locations near their university. Additionally, sharing a flat with others can lead to a sense of community and camaraderie, providing a support system during the academic year. It is essential for students to carefully consider factors such as location, rent costs, amenities, and compatibility with potential roommates when searching for a shared flat. Overall, finding a shared 4-bedroom flat can be a great way to enhance the college experience and create lasting memories with fellow students.</p></>)
};

export default BathBathSpaFlat4;