
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


const  BathOldfieldParkFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 4 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£716 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4-bedroom flat in Oldfield Park, Bath, Somerset? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that will make your life easier. By subscribing to this service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all your bills covered, you won't have to worry about splitting utilities with your flatmates or remembering payment due dates. This allows you to <b>concentrate on your studies</b> and social life without the stress of managing various bills. <b>UniBills.com</b> ensures that your accommodation experience is seamless and convenient, making student living more enjoyable. Get a quote from <b>UniBills.com</b> or any accommodation on this website to see how you can benefit from their all-inclusive service. Say goodbye to bill-related headaches and hello to a more relaxed living situation.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 4-bedroom flats for students in Oldfield Park, Bath can be both exciting and overwhelming. By utilizing online platforms and agencies specialized in student accommodations, students can efficiently navigate through available options. Considering factors such as location, rent, amenities, and compatibility with potential housemates is crucial in making an informed decision. Oldfield Park's vibrant atmosphere and close proximity to universities make it a popular choice among students. Ultimately, finding a shared 4-bedroom flat in this area provides students with a supportive living environment conducive to their academic and social needs. By conducting thorough research and being proactive in the search process, students can secure a comfortable and convenient living space in Oldfield Park.</p></>)
};

export default BathOldfieldParkFlat4;