
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


const  BathSladebrookHouse10 = () => 
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 10 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 10 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 10 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 10 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 10 bedroom house in Sladebrook, Bath, Somerset? Managing bills can be a hassle when you're busy with your studies. That's where <b>UniBills.com</b> comes in to make your life easier. By subscribing to an <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With one simple payment each month, you'll have your electricity, water, gas, internet, and any other bills covered, allowing you to <b>concentrate on your studies</b> without the stress of managing multiple bills. Say goodbye to late payment fees and juggling different providers - <b>UniBills.com</b> takes care of everything for you. Save time and effort by getting a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student life in Sladebrook a whole lot easier.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the bustling student area of Sladebrook, Bath, finding a shared 10-bedroom house for students can be both exciting and challenging. These spacious properties offer great opportunities for living with friends, splitting costs, and creating a vibrant communal atmosphere. When searching for the perfect 10-bedroom house, consider factors such as proximity to campus, amenities, and local conveniences. Shared houses in Sladebrook often come equipped with communal spaces, multiple bathrooms, and well-equipped kitchens, providing a comfortable and sociable living environment. However, competition can be fierce, so starting your search early and being prepared to act quickly on listings is key to securing your ideal shared house. In conclusion, sharing a 10-bedroom house in Sladebrook can be a fantastic experience for students looking to make lasting memories and friendships during their time at university.</p></>)
};

export default BathSladebrookHouse10;