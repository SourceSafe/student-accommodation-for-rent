
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


const  BathOldfieldParkHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 8 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£689 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 8 bedroom student house in Oldfield Park, Bath, Somerset, is the smart choice for simplifying your living arrangements. <b>UniBills.com</b> offers an excellent solution to make your life easier and stress-free. By opting for the <b>all bills inclusive</b> package, you can <b>concentrate on your studies</b> without the worry of managing multiple bills. <b>UniBills.com</b> takes care of all utility bills, including electricity, water, gas, and even internet, allowing you to focus on what matters most. Furthermore, with the convenience of a single monthly payment, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the hassle of splitting costs with housemates or dealing with late payments. Get a quote from <b>UniBills.com</b> or any accommodation on this web site, and experience the convenience and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the vibrant neighborhood of Oldfield Park in Bath, shared 8-bedroom houses provide an ideal accommodation option for students seeking a communal living experience. These spacious properties offer comfortable living quarters in close proximity to local amenities and the University of Bath campus. Living in a shared 8-bedroom house allows students to forge strong friendships and create a sense of community, fostering a supportive and enriching environment for academic and personal growth. With ample common areas, such as kitchens, living rooms, and outdoor spaces, students can socialize, study, and relax together, enhancing their overall university experience. Furthermore, sharing a house with seven other students can also be a cost-effective housing solution, making it a popular choice among students. Overall, opting for a shared 8-bedroom house in Oldfield Park promises a unique and memorable living experience that combines comfort, convenience, and camaraderie, making it an appealing choice for students in Bath.</p></>)
};

export default BathOldfieldParkHouse8;