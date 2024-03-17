
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


const  BathOldfieldParkFlat10 = () => 
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

    return (<><h1>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 10 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 10-bedroom student flat in Oldfield Park, Bath, Somerset can be both exciting and bustling, with so much going on around you. To fully immerse yourself in the vibrant student community, subscribing to an <b>all bills inclusive</b> service is a fantastic option. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b>, rather than worrying about sorting out utility bills and managing different accounts. With an <b>all bills inclusive</b> package, you can simply enjoy the hassle-free option provided by <b>UniBills.com</b>, knowing that everything is taken care of. This means you can focus on making the most of your student experience, socializing with housemates, and exploring the beautiful city of Bath. Get a quote from <b>UniBills.com</b> or any accommodation on this website to discover the benefits of an <b>all bills inclusive</b> service and make your student life more stress-free and enjoyable.</p><a id = "cheap_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 10-bedroom flats for students in Oldfield Park, Bath can be quite advantageous. Not only does it provide a sense of community and camaraderie among residents, but it also offers affordable accommodation options for students looking to split costs. Sharing a 10-bedroom flat can lead to lasting friendships, a support system, and a fun living environment. With the convenience of having multiple roommates, students can easily divide responsibilities and create a balanced living situation. Additionally, living in Oldfield Park allows for easy access to local amenities, public transportation, and the vibrant city of Bath. Overall, opting for a shared 10-bedroom flat in this area can enhance the student living experience and contribute to a memorable stay in the picturesque city of Bath.</p></>)
};

export default BathOldfieldParkFlat10;