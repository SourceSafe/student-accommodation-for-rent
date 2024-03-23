
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


const  BathBeaconHillHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-beacon-hill-bath.png')} alt='Shared 5 Bedroom Houses for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_beacon_hill,_bath">Prices for Shared 5 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_beacon_hill,_bath">Cheap Shared 5 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added">Shared 5 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£725 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5 bedroom house in Beacon Hill, Bath, Somerset? Managing bills while juggling studies can be overwhelming. Subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can ease the burden and allow you to <b>concentrate on your studies</b>. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, where everything from electricity and water to internet and TV licence is taken care of. No more stressful budgeting or disputes over bills with housemates. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life more streamlined and stress-free. Say goodbye to bill-related headaches and hello to a smoother living experience.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 5-bedroom house for students in Beacon Hill, Bath can be an exciting and rewarding experience. The charming neighborhood offers a variety of housing options and amenities ideal for student living. From cozy cafes and local markets to parks and recreational facilities, Beacon Hill provides the perfect balance of convenience and tranquility. Additionally, living in a shared house with fellow students can help foster meaningful friendships and a sense of community. With diligent research and communication with potential housemates, students can find the perfect dwelling that suits both their academic and social needs. So, if you're on the hunt for a spacious and convenient student housing option in Beacon Hill, Bath, don't hesitate to explore the shared 5-bedroom houses available in this vibrant neighborhood.</p></>)
};

export default BathBeaconHillHouse5;