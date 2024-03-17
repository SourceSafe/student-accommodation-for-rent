
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


const  BathOldfieldParkFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 2 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£859 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of the stress of managing multiple utility bills for your student accommodation in Bath's vibrant Oldfield Park? <b>UniBills.com</b> has the perfect solution for you! By subscribing to their <b>all bills inclusive</b> service, you can enjoy the convenience of having your gas, electricity, water, and internet bills all rolled into one monthly payment. This means you can <b>concentrate on your studies</b> and social life without the added hassle of constantly juggling different bills and due dates. <b>UniBills.com</b> takes care of all the admin, ensuring that you have a seamless living experience in your cozy 2 bedroom flat. Say goodbye to unexpected charges and fluctuating bills, and say hello to the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from UniBills.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you are searching for shared 2 bedroom flats for students in Oldfield Park, Bath, you have come to the right place. With its close proximity to local amenities, excellent transport links, and vibrant student community, Oldfield Park is the perfect location for student accommodation. By choosing a shared 2 bedroom flat, you can split costs with a roommate and enjoy a more spacious living environment. In conclusion, living in a shared 2 bedroom flat in Oldfield Park offers the perfect balance of independence and companionship, making it a popular choice among students. Don't hesitate to explore the options available in this vibrant area to find the perfect accommodation for your student years.</p></>)
};

export default BathOldfieldParkFlat2;