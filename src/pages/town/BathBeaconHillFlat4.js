
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


const  BathBeaconHillFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-beacon-hill-bath.png')} alt='Shared 4 Bedroom Flats for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_beacon_hill,_bath">Prices for Shared 4 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_beacon_hill,_bath">Cheap Shared 4 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added">Shared 4 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£701 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student flat in Beacon Hill, Bath, Somerset is a smart choice for students looking to simplify their living arrangements. By partnering with <b>UniBills.com</b>, you can enjoy the hassle free all inclusive option that covers all utilities such as electricity, water, gas, internet, and even TV license. This means no more stressful monthly budgeting or dealing with multiple bills from different providers. With everything included in one convenient package, you can <b>concentrate on your studies</b> without worrying about unexpected costs or interruptions in essential services. <b>UniBills.com</b> allows you to live comfortably and focus on what matters most while providing peace of mind knowing that all your bills are taken care of. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and simplicity of an <b>all bills inclusive</b> service for your student flat in Beacon Hill.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 4-bedroom flats for students in Beacon Hill, Bath can be an exciting but challenging endeavor. The availability of such accommodations in this prime location offers students a convenient and desirable living arrangement. With amenities like spacious bedrooms, communal areas, and proximity to campus and local amenities, these flats are an ideal choice for students looking for a comfortable and sociable living space. The competitive rental market in Beacon Hill requires students to act swiftly and decisively in securing a suitable flat that meets their needs and budget. In conclusion, students should carefully consider their options, prioritize their preferences, and act promptly to secure a shared 4-bedroom flat in Beacon Hill that provides both comfort and convenience for a successful and fulfilling student living experience.</p></>)
};

export default BathBeaconHillFlat4;