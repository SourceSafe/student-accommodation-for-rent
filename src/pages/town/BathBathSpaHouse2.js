
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


const  BathBathSpaHouse2 = () => 
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

    return (<><h1>Shared 2 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 2 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 2 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 2 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 2 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 2 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£1170 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Living in a 2 bedroom student house in Bath Spa, Bath, Somerset can be a great experience, but managing bills can quickly become overwhelming. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all bills, including utilities, internet, and even council tax, taken care of in one simple monthly payment, you can <b>concentrate on your studies</b> and social life without the stress of managing multiple bills. <b>UniBills.com</b> makes budgeting a breeze and eliminates any unexpected costs, giving you peace of mind throughout your stay. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath Spa smooth and hassle-free.</p><a id = "cheap_shared_2_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 2 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 2-bedroom houses for students in Bath Spa, Bath can be a challenging yet rewarding experience. By collaborating with fellow students to find a suitable home, you not only save on costs but also build lasting friendships. It's crucial to prioritize location, amenities, and budget when searching for the perfect house. Bath Spa offers a variety of housing options suited for students, with convenient access to the university, local shops, and public transportation. Whether you prefer a cozy cottage or a modern apartment, there are plenty of choices to cater to your preferences. In conclusion, with careful planning and communication with potential housemates, finding a shared 2-bedroom house in Bath Spa can be a seamless and enjoyable process, ensuring a comfortable and enjoyable living experience throughout your time as a student.</p></>)
};

export default BathBathSpaHouse2;