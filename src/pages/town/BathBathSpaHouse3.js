
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 3 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 3 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 3 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£626 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Living in a student house in Bath Spa, Bath, Somerset can be a fantastic experience, but managing individual bills for utilities like water, gas, electricity, and internet can quickly become overwhelming. By subscribing to an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided. With this service, you can save time and effort by consolidating all your bills into one convenient monthly payment. This means you can <b>concentrate on your studies</b> without the stress of managing multiple bills. <b>UniBills.com</b> takes care of everything for you, giving you peace of mind and allowing you to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and streamline your student living experience today.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 3-bedroom house for students in Bath Spa, Bath can be an exciting yet important decision. By sharing a house with friends or fellow students, you not only get the opportunity to split the rent and utility bills, but also create a comfortable and supportive living environment. When looking for a shared house, it is crucial to consider factors such as location, budget, amenities, and housemates' preferences. It is essential to remember that communication and mutual respect play a key role in successful house sharing. Overall, finding a shared 3-bedroom house in Bath Spa can lead to a memorable and enjoyable student living experience, fostering friendships and creating lasting memories.</p></>)
};

export default BathBathSpaHouse3;