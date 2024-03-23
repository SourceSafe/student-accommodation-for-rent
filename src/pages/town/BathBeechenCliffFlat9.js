
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


const  BathBeechenCliffFlat9 = () => 
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

    return (<><h1>Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-flats-for-students-in-beechen-cliff-bath.png')} alt='Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath">Prices for Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath">Cheap Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added">Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced">Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Prices for Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 9 bedroom flat in Beechen Cliff, Bath, Somerset? Keeping track of multiple bills can be overwhelming, especially when you're trying to <b>concentrate on your studies</b>. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With just one monthly payment, you can cover all your utility bills, including electricity, water, and internet. This not only saves you time and effort but also ensures that you won't have any surprise expenses popping up along the way. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and simplify your student living experience today.</p><a id = "cheap_shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Cheap Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Shared 9 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 9 bedroom flats for students in Beechen Cliff, Bath can be a great option for those attending school in the area. With a larger group of roommates, you can split rent and utilities, making living expenses more manageable. Additionally, living with so many people can offer a built-in support system and create a sense of community. When searching for a shared flat, it's important to consider factors such as location, amenities, and the overall living environment. Beechen Cliff is a popular area for students due to its proximity to the university and local amenities. In conclusion, by carefully choosing the right shared flat, students can enjoy a comfortable and social living experience while studying in Bath.</p></>)
};

export default BathBeechenCliffFlat9;