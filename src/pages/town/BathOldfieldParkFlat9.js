
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


const  BathOldfieldParkFlat9 = () => 
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

    return (<><h1>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 9 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 9-bedroom student flat in Oldfield Park, Bath, Somerset is a wise decision, especially with <b>UniBills.com</b>. With this convenient service, you no longer have to worry about juggling multiple bills or dealing with the hassle of splitting costs among housemates. Instead, you can <b>concentrate on your studies</b> and personal growth, knowing that your utilities, internet, and other expenses are taken care of in one simple package. <b>UniBills.com</b> offers a stress-free solution for busy students who want to enjoy their time at university without the added burden of managing bills. By opting for the all-inclusive option provided by <b>UniBills.com</b>, you can save time, money, and energy while living in your 9-bedroom student flat. Get a quote from <b>UniBills.com</b> or any accommodation on this website today to streamline your living experience and focus on what truly matters during your time in Bath.</p><a id = "cheap_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 9-bedroom flats for students in Oldfield Park, Bath can be an exciting and rewarding experience. With its vibrant community, convenient location, and range of amenities, Oldfield Park offers an ideal setting for students looking to live and study in the heart of the city. The availability of spacious and well-equipped 9-bedroom flats provides students with a comfortable and economical housing option, allowing them to live and socialize with their peers while also benefiting from the privacy of their own room. By collaborating with others to share a large property, students can save money on rent and utilities, enabling them to budget more effectively and enjoy a higher standard of living. Overall, choosing to reside in a shared 9-bedroom flat in Oldfield Park offers students a unique opportunity to experience independent living while also fostering a sense of community and camaraderie among housemates.</p></>)
};

export default BathOldfieldParkFlat9;