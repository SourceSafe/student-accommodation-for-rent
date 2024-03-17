
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


const  BathBathSpaHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 8 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 8 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 8 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£613 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your student house in Bath Spa? Why not consider subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>? With this convenient option, you can enjoy the peace of mind of knowing that all your bills are taken care of in one simple payment. Imagine the time and stress you will save by not having to manage separate payments for utilities, internet, and other household expenses. Instead, you can <b>concentrate on your studies</b> and extracurricular activities without worrying about overdue bills or budgeting each month. <b>UniBills.com</b> offers a hassle-free all inclusive option that allows you to focus on what truly matters as a student. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and benefits of an <b>all bills inclusive</b> service today.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 8-bedroom house for students in Bath Spa, Bath can be an exciting yet challenging endeavor. With the demand for student accommodation continuously on the rise, it's important to start your search early and consider all options. Shared houses offer a great way to live with friends and make the most of your university experience. When searching for a property, make sure to consider the location, amenities, and proximity to campus. Viewing multiple properties is key to finding the perfect fit for you and your housemates. Once you've found the right shared house, make sure to read and understand the tenancy agreement, taking note of any rules or restrictions. Shared living can foster a sense of community and provide a supportive environment for students. In conclusion, when looking for a shared 8-bedroom house in Bath Spa, Bath, be proactive, thorough, and mindful of your needs and preferences to ensure a comfortable and enjoyable living experience throughout your university years.</p></>)
};

export default BathBathSpaHouse8;