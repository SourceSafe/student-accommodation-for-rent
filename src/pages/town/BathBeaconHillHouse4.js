
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


const  BathBeaconHillHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-beacon-hill-bath.png')} alt='Shared 4 Bedroom Houses for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_beacon_hill,_bath">Prices for Shared 4 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_beacon_hill,_bath">Cheap Shared 4 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added">Shared 4 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£658 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4 bedroom house in Beacon Hill, Bath, Somerset? Then subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b> is the perfect solution for you. By opting for this convenient package, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without the worry of managing multiple bills. With <b>UniBills.com</b>, you can rest assured that all your utility bills, including electricity, water, gas, and internet, are taken care of in one simple payment. This not only saves you time and stress but also helps you budget more effectively. Say goodbye to the hassle of splitting bills with housemates or dealing with different suppliers, and instead, streamline your living expenses with <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, seeking a shared 4-bedroom house for students in Beacon Hill, Bath, offers numerous advantages. Not only does it provide a cost-effective accommodation option, but it also promotes a sense of community and support among housemates. The vibrant neighborhood of Beacon Hill offers easy access to various amenities, including shops, restaurants, and public transportation. Living in a shared house also fosters valuable life skills such as communication, cooperation, and problem-solving. Ultimately, choosing to reside in a shared 4-bedroom house in Beacon Hill, Bath, can lead to a fulfilling and enriching college experience for students.</p></>)
};

export default BathBeaconHillHouse4;