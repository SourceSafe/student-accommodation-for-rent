
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


const  BathKensingtonFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-kensington-bath.png')} alt='Shared 4 Bedroom Flats for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_kensington,_bath">Prices for Shared 4 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_kensington,_bath">Cheap Shared 4 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_kensington,_bath__recently_added">Shared 4 Bedroom Flats for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_kensington,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_kensington,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Kensington, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£701 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student flat in Kensington, Bath, Somerset will enhance your student living experience. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by their comprehensive service. By opting for this convenient package, you can avoid the stress of managing multiple bills each month and instead <b>concentrate on your studies</b> and social life. <b>UniBills.com</b> takes care of all your utility bills, including gas, electricity, water, and internet, saving you time and effort. This service not only simplifies your living arrangements but also helps you budget effectively without any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website to discover the benefits of an <b>all bills inclusive</b> service for your student accommodation in Kensington, Bath, Somerset.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_kensington,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_kensington,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 4-bedroom flats for students in Kensington, Bath can be a challenging yet rewarding experience. The process involves meticulous research, careful budgeting, and effective communication with potential flatmates. By exploring various online platforms and utilizing local real estate agencies, students can find the perfect accommodation that meets both their practical and social needs. Additionally, considering factors such as proximity to campus, amenities, and safety features are crucial in making an informed decision. Ultimately, living in a shared flat fosters a sense of community and camaraderie among housemates, creating a supportive and enriching environment for students to thrive academically and socially. With the right tools and mindset, the search for a shared 4-bedroom flat in Kensington can lead to a fulfilling and memorable living experience for students in Bath.</p></>)
};

export default BathKensingtonFlat4;