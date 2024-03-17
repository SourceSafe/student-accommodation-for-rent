
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-3-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 3 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 3 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 3 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£626 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3-bedroom house in Bath Spa, Bath, Somerset? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service. By subscribing to this convenient option, you can enjoy the hassle-free experience of having all your bills taken care of in one package. This means no more worrying about splitting bills with housemates or dealing with numerous providers for utilities. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and have peace of mind knowing that your bills are all sorted. Say goodbye to the stress of managing multiple bills and embrace the simplicity of the all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath Spa much easier.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for a shared 3-bedroom house for students in Bath Spa, Bath, there are several factors to consider. Location is essential to ensure easy access to the university and amenities. It is also crucial to find a property that offers peaceful study environments and a sense of community. Shared houses can provide a great balance of independence and camaraderie among flatmates. When choosing a property, be sure to inspect the common areas, such as the kitchen and living room, to ensure they are spacious and well-maintained. Additionally, look for a property that includes essential amenities like high-speed internet and laundry facilities. Ultimately, finding the perfect shared house for students in Bath Spa means considering all these factors and prioritizing what is most important to create a comfortable and enjoyable living experience for all tenants.</p></>)
};

export default BathBathSpaHouse3;