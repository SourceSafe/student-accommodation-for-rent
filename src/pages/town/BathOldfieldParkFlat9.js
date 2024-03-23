
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


const  BathOldfieldParkFlat9 = () => 
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

    return (<><h1>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 9 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 9 bedroom student flat in Oldfield Park, Bath, Somerset is a smart choice for any student looking to streamline their living experience. <b>UniBills.com</b> offers an all-inclusive package that covers utilities such as water, gas, electricity, and internet, giving you one less thing to worry about while you <b>concentrate on your studies</b>. With all bills taken care of, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>, allowing you to budget effectively without any hidden costs springing up. By choosing this service, you can say goodbye to the stress of managing multiple bills and focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience and peace of mind that comes with an <b>all bills inclusive</b> package.</p><a id = "cheap_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 9-bedroom flat for students in the charming neighborhood of Oldfield Park in Bath can be an exciting adventure. With its close proximity to local amenities, public transportation options, and lively student scene, living in Oldfield Park offers a vibrant and convenient lifestyle for those studying in the area. By embarking on this search, students have the opportunity to experience communal living, forge long-lasting friendships, and create a supportive environment conducive to academic success. From spacious common areas to the potential for shared expenses, sharing a flat with eight other roommates can be a rewarding experience. Embracing the sense of community and camaraderie that comes with living in a large shared flat can enrich the university experience and create lasting memories for all involved. Thus, embarking on the search for a shared 9-bedroom flat in Oldfield Park holds the promise of an unforgettable and enriching time during the years of study at Bath.</p></>)
};

export default BathOldfieldParkFlat9;