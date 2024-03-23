
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


const  BathCrescentGardensFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-crescent-gardens-bath.png')} alt='Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath">Prices for Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath">Cheap Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added">Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£780 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5-bedroom flat in Crescent Gardens, Bath, Somerset? Managing bills can be a hassle, especially when you're juggling studies and social activities. Instead of stressing about utilities every month, why not opt for an <b>all bills inclusive</b> service from <b>UniBills.com</b>? By subscribing to this convenient option, you can free up your time to <b>concentrate on your studies</b> and enjoy student life to the fullest. <b>UniBills.com</b> takes care of all your bills, including electricity, water, gas, and even internet, so you can have peace of mind knowing that everything is taken care of. Say goodbye to the stress of managing multiple bills and hello to the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Want to know how much you could save by using this service? Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make student life a little bit easier.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 5-bedroom flats for students in Crescent Gardens, Bath, it's evident that students prioritize not just the accommodation itself, but also the location and amenities provided. Properties in Crescent Gardens offer spacious living quarters for group living, making it an ideal choice for students looking to share accommodation. The convenience of being close to the University of Bath and local amenities, combined with the comfortable and well-equipped flats, makes Crescent Gardens a desirable location for students. When considering options, students should pay attention to factors such as rent, contract terms, and the inclusivity of bills before making a decision. Ultimately, finding a suitable shared flat in Crescent Gardens can enhance a student's university experience by providing a communal living space in a prime location, leading to lasting memories and friendships during their time in Bath.</p></>)
};

export default BathCrescentGardensFlat5;