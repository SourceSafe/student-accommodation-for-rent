
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


const  BathBeaconHillFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-beacon-hill-bath.png')} alt='Shared 3 Bedroom Flats for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_beacon_hill,_bath">Prices for Shared 3 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_beacon_hill,_bath">Cheap Shared 3 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added">Shared 3 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£733 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3 bedroom flat in Beacon Hill, Bath, Somerset? Keeping track of multiple bills can be time-consuming and stressful, especially when you're trying to <b>concentrate on your studies</b>. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the headache of managing utility payments and hello to a more convenient and simplified way of living. With <b>UniBills.com</b>, you can rest easy knowing that everything is taken care of, allowing you to focus on more important things. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier and more enjoyable.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 3 bedroom flats for students in the picturesque neighborhood of Beacon Hill, Bath, there are a variety of options to consider. From spacious living areas to modern amenities, these flats provide a comfortable and convenient living space for students to call home. With easy access to local shops, restaurants, and public transportation, living in Beacon Hill offers the perfect balance of tranquility and accessibility. Additionally, sharing a flat with roommates can create a sense of community and camaraderie among students, making the college experience even more memorable. Overall, finding a shared 3 bedroom flat in Beacon Hill is a smart and practical choice for students looking for an ideal living situation during their time in Bath.</p></>)
};

export default BathBeaconHillFlat3;