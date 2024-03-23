
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


const  BathBathSpaHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 3 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 3 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 3 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£626 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Bath Spa and looking for a convenient way to manage your bills while focusing on your studies? Look no further than <b>UniBills.com</b>! By subscribing to an <b>all bills inclusive</b> service for your 3 bedroom student house, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With this service, you no longer have to worry about splitting bills, keeping track of payments, or dealing with multiple providers. Instead, you can <b>concentrate on your studies</b> and have peace of mind knowing that all your bills, including utilities and Wi-Fi, are taken care of. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience in Bath Spa, Somerset.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 3-bedroom houses for students in Bath Spa, Bath can be an exciting yet challenging task. With a wide range of options available, students can find accommodation that suits their needs both in terms of location and budget. Key factors to consider include proximity to campus, amenities, and transportation options. Collaborating with housemates can help in securing a comfortable and affordable living space. Conclusion: Ultimately, exploring the housing market in Bath Spa can lead to finding the perfect shared 3-bedroom house that fosters a supportive and enjoyable living environment for students throughout their academic journey.</p></>)
};

export default BathBathSpaHouse3;