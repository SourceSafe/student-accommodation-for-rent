
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


const  BathOldfieldParkHouse9 = () => 
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

    return (<><h1>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 9 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£685 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 9 bedroom house in Oldfield Park, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service could be a game changer for you. Imagine not having to worry about paying separate bills for electricity, gas, water, internet, and TV license every month. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. By opting for this service, you can <b>concentrate on your studies</b> and social life without the stress of managing multiple bills. <b>UniBills.com</b> offers a convenient solution that simplifies your living arrangements, making your student life much easier. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student experience in Bath more enjoyable and stress-free.</p><a id = "cheap_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Are you on the hunt for a shared 9 bedroom house for students in Oldfield Park, Bath? Look no further, as this vibrant and popular student area offers a variety of housing options perfect for communal living. With its close proximity to the University of Bath and local amenities, Oldfield Park provides the ideal location for a convenient and enjoyable student lifestyle. Shared 9 bedroom houses in this area often feature spacious and modern living areas, well-equipped kitchens, and comfortable bedrooms, providing a perfect environment for studying and socializing. Living with fellow students in a large shared house can foster a sense of community and camaraderie, making the college experience even more memorable. In conclusion, exploring the shared 9 bedroom houses in Oldfield Park, Bath is a great option for students seeking affordable and sociable accommodation in a bustling and student-friendly neighborhood.</p></>)
};

export default BathOldfieldParkHouse9;