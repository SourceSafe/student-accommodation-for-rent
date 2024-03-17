
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


const  BathSladebrookHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 8 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 8 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 8 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 8 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student living in an 8-bedroom house in Sladebrook, Bath, Somerset? Managing utility bills can be a real headache, especially when you should be focusing on your studies. Simplify your life and enjoy the convenience of an <b>all bills inclusive</b> service with <b>UniBills.com</b>. By opting for the all inclusive option, you won't have to worry about splitting bills with housemates or tracking your expenses every month. <b>UniBills.com</b> takes care of all the bills for you, allowing you to concentrate on what truly matters - your education. Say goodbye to the stress of managing multiple bills and embrace the hassle-free all inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website to make your student life more convenient and enjoyable.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the vibrant student community of Sladebrook, Bath, the search for shared 8-bedroom houses is a popular pursuit among students looking to share not just a living space, but also experiences and memories. These spacious properties provide an ideal setting for fostering a sense of camaraderie and shared responsibility among housemates. With ample communal areas, students can create their own study spaces, lounge areas, and even group activities. The convenience of having multiple housemates ensures a lively and dynamic environment, perfect for socializing and making lasting friendships. Living in a shared 8-bedroom house in Sladebrook offers not only a sense of belonging but also the opportunity to learn valuable life skills such as communication, cooperation, and compromise. As students come together to navigate the challenges and joys of shared living, they are sure to emerge from the experience with a deeper understanding of themselves and their peers. Ultimately, the search for shared 8-bedroom houses in Sladebrook is not just about finding a place to stay, but about building a community that supports and uplifts each other through the highs and lows of student life.</p></>)
};

export default BathSladebrookHouse8;