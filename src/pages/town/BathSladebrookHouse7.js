
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


const  BathSladebrookHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-7-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 7 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 7 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 7 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 7 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student residing in a 7-bedroom house in Sladebrook, Bath, Somerset? Imagine the ease of having all your bills covered with an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient solution for students like you to <b>concentrate on your studies</b> without the worry of managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option that covers your utilities, internet, and other essential services. No more splitting bills with housemates or dealing with late payments. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience. Take the stress out of budgeting and start benefiting from the convenience of an <b>all bills inclusive</b> service today.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for shared 7-bedroom houses for students in Sladebrook, Bath, it's crucial to consider various factors to ensure the best living experience. Location, amenities, and proximity to universities are essential. Sladebrook offers a vibrant community perfect for students, with local conveniences like shops, restaurants, and easy access to public transportation. Shared housing provides a sociable environment for students to live, study, and socialize together. Additionally, splitting the costs among seven housemates can be more economical than renting individual accommodations. By choosing a shared 7-bedroom house in Sladebrook, students can enjoy a balanced lifestyle of academic focus and social interactions. In conclusion, living in a shared 7-bedroom house in Sladebrook is a smart choice for students seeking a blend of affordability, community, and convenience.</p></>)
};

export default BathSladebrookHouse7;