
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


const  BathOldfieldParkHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-3-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 3 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£631 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for accommodation in Oldfield Park, Bath, Somerset? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service for your 3 bedroom student house. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, allowing you to <b>concentrate on your studies</b> instead of worrying about utility bills. By subscribing to their service, you can say goodbye to the stress of managing multiple bills and expenses each month. <b>UniBills.com</b> takes care of everything for you, from electricity and water to internet and TV license. This means you can budget more effectively and avoid any unexpected costs throughout the year. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 3-bedroom houses for students in Oldfield Park, Bath offers a wide range of benefits for those seeking accommodation in this vibrant area. With spacious interiors, communal living spaces, and a close proximity to local amenities and public transport links, these properties provide an ideal living situation for students looking to balance their academic and social lives. The lively atmosphere of Oldfield Park combined with the affordability and convenience of shared accommodation makes it a popular choice for students studying in Bath. Whether you're looking for a peaceful study environment or a bustling social scene, renting a shared 3-bedroom house in Oldfield Park may just be the perfect solution for your student living experience.</p></>)
};

export default BathOldfieldParkHouse3;