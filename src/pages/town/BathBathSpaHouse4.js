
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 4 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 4 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 4 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£604 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you tired of the constant stress of managing and budgeting for household bills in your 4 bedroom student house in Bath Spa, Somerset? Save yourself time and energy by subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b>. By opting for this convenient solution, you can <b>concentrate on your studies</b> without the worry of splitting bills amongst your housemates or dealing with unexpected expenses. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers everything from utilities to internet and even TV licenses. With just one payment each month, you can simplify your living arrangements and ensure that your essential expenses are taken care of. Say goodbye to bill disputes and hello to a smoother living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life easier.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the quest for shared 4-bedroom houses for students in Bath Spa, Bath, the search can be both exciting and challenging. Students looking to secure a suitable living arrangement will find a range of options to choose from, offering various amenities and locations to suit individual preferences. Whether it's a cozy house near campus or a larger property with spacious common areas, there is no shortage of choices available. Additionally, sharing accommodation with fellow students can lead to forming lasting friendships and creating a supportive community, enhancing the overall university experience. Students should carefully consider factors such as budget, proximity to amenities, housemates' compatibility, and lease terms to ensure a smooth transition into their new home. Overall, with proper research and planning, finding a shared 4-bedroom house in Bath Spa can be a rewarding and fulfilling experience for students seeking a comfortable, convenient, and enjoyable living space during their academic journey.</p></>)
};

export default BathBathSpaHouse4;