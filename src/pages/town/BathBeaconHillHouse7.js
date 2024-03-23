
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


const  BathBeaconHillHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-beacon-hill-bath.png')} alt='Shared 7 Bedroom Houses for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_beacon_hill,_bath">Prices for Shared 7 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_beacon_hill,_bath">Cheap Shared 7 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added">Shared 7 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Tired of juggling multiple bills while trying to focus on your studies? Say goodbye to the headache of managing utilities and household expenses with an <b>all bills inclusive</b> service for your 7 bedroom student house in Beacon Hill, Bath, Somerset. <b>UniBills.com</b> offers the perfect solution to streamline your living experience. By opting for the all inclusive package, you can enjoy the hassle-free convenience of having all your bills - from electricity to internet - covered in one simple payment. This means you can <b>concentrate on your studies</b> and social life without worrying about due dates or splitting costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student life in Bath a breeze with the <b>all bills inclusive</b> option.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, finding a shared 7 bedroom house for students in Beacon Hill, Bath can be a great option for those looking to live with a larger group of friends while attending university. These properties offer spacious living arrangements, allowing each student to have their own private space yet also promoting a sense of community within the household. The Beacon Hill area is known for its beautiful surroundings and proximity to local amenities and universities, making it an ideal location for student living. In conclusion, living in a shared 7 bedroom house in Beacon Hill can provide students with a comfortable and social living experience, perfect for those seeking a balance between independence and companionship during their time at university.</p></>)
};

export default BathBeaconHillHouse7;