
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


const  BathKingswayHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 6 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 6 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 6 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 6 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£772 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 6-bedroom house in Kingsway, Bath, Somerset and feeling overwhelmed by the responsibility of managing multiple bills each month? Look no further! Subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b> is the solution you've been searching for. By opting for this convenient service, you can <b>concentrate on your studies</b> and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of juggling different bills and hello to a simplified and streamlined payment process. <b>UniBills.com</b> takes care of everything from utilities to internet, saving you time and hassle. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier and more manageable.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In searching for shared 6 bedroom houses for students in Kingsway, Bath, one can expect to find spacious and convenient living arrangements tailored to suit the needs of multiple tenants. With a variety of properties available, students can choose from a range of options that cater to their preferences, whether it’s a modern townhouse or a cozy cottage. These houses generally offer well-equipped kitchens, communal living areas, and ample storage space, making them ideal for group living. Additionally, residing in Kingsway provides easy access to local amenities, public transportation, and the University of Bath campus, ensuring a seamless student living experience. Overall, opting for a shared 6 bedroom house in Kingsway offers a practical and comfortable accommodation option for students seeking a sense of community and a convenient location in Bath.</p></>)
};

export default BathKingswayHouse6;