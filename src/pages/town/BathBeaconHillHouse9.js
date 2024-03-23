
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


const  BathBeaconHillHouse9 = () => 
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

    return (<><h1>Shared 9 Bedroom Houses for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-houses-for-students-in-beacon-hill-bath.png')} alt='Shared 9 Bedroom Houses for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_houses_for_students_in_beacon_hill,_bath">Prices for Shared 9 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 9 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_houses_for_students_in_beacon_hill,_bath">Cheap Shared 9 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added">Shared 9 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced">Shared 9 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 9 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£670 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Houses for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your student house in Beacon Hill, Bath, Somerset? Say goodbye to the stress of managing individual utility payments by subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>. With 9 bedrooms to take care of, the last thing you need is the added burden of sorting out electricity, water, gas, and internet bills. By opting for the all inclusive package, you can <b>concentrate on your studies</b> and enjoy the hassle-free living experience provided by <b>UniBills.com</b>. This convenient service ensures that all your bills are taken care of, allowing you to focus on what matters most. Don't waste time worrying about expenses and admin tasks – Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_shared_9_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 9 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 9 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 9 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 9-bedroom houses for students in Beacon Hill, Bath can be an exciting and rewarding experience. These spacious properties offer ample room for large groups of students to live comfortably together while studying in the vibrant city of Bath. With a range of amenities and convenient location close to the University of Bath and local shops, students can enjoy both a social atmosphere and a conducive environment for academic success. By pooling resources and sharing the cost of rent, utilities, and household chores, students can save money and build lasting friendships. Overall, living in a shared 9-bedroom house in Beacon Hill presents a unique opportunity for students to create a supportive and communal living arrangement that enhances their university experience.</p></>)
};

export default BathBeaconHillHouse9;