
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


const  BathBeaconHillFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-beacon-hill-bath.png')} alt='Shared 1 Bedroom Flats for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_beacon_hill,_bath">Prices for Shared 1 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_beacon_hill,_bath">Cheap Shared 1 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added">Shared 1 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1232 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Living in a 1-bedroom student flat in Beacon Hill, Bath, Somerset can be an exciting experience, but managing bills and finances can often be overwhelming for students. That's where subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can make a huge difference. With all bills included in one convenient package, you can <b>concentrate on your studies</b> and enjoy a stress-free student living experience. <b>UniBills.com</b> offers an easy and hassle-free all-inclusive option that covers your rent, utilities, and even internet, so you don't have to worry about multiple payments or unexpected costs. Say goodbye to budgeting headaches and hello to convenient living with <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student life today.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 1-bedroom flats for students in Beacon Hill, Bath offers a convenient and cost-effective housing option for those studying in the area. With the rising rental prices, sharing a flat with fellow students can help split the costs and create a sense of community. The range of available flats in Beacon Hill ensures that students can find a space that suits their needs and preferences. By living in close proximity to university campuses and amenities, students can enjoy easy access to academic and social opportunities. Overall, shared 1-bedroom flats in Beacon Hill provide a comfortable and affordable living arrangement for students looking to experience all that Bath has to offer during their academic pursuits.</p></>)
};

export default BathBeaconHillFlat1;