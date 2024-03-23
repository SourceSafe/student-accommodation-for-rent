
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


const  BathBeechenCliffFlat6 = () => 
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

    return (<><h1>Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-flats-for-students-in-beechen-cliff-bath.png')} alt='Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath">Prices for Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath">Cheap Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added">Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced">Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Prices for Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 6 bedroom flat in Beechen Cliff, Bath, Somerset? With the demanding schedule of university life, the last thing you want to worry about is managing numerous bills for utilities and services. That's where an <b>all bills inclusive</b> service like <b>UniBills.com</b> comes in handy. By opting for an <b>all bills inclusive</b> package, you can enjoy the hassle-free convenience of having all your bills bundled into one easy monthly payment. This allows you to <b>concentrate on your studies</b> without the stress of budgeting for various expenses. <b>UniBills.com</b> takes care of everything from electricity, water, and internet to council tax, so you can have peace of mind knowing that everything is sorted. Don't let the burden of bills take away from your academic experience – get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student life today.</p><a id = "cheap_shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Cheap Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Shared 6 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 6-bedroom flats for students in Beechen Cliff, Bath, it's essential to consider the needs and preferences of each roommate. Before making a decision, carefully review the location, amenities, and rental costs to ensure that it aligns with everyone's expectations. Additionally, establishing clear communication and boundaries with housemates is vital for a harmonious living environment. Creating a shared agreement on household chores, expenses, and noise levels can help avoid potential conflicts in the future. Ultimately, finding a suitable 6-bedroom flat requires patience, open communication, and compromise from all parties involved. By prioritizing these factors, students can enjoy a comfortable and enjoyable living experience in Beechen Cliff, Bath.</p></>)
};

export default BathBeechenCliffFlat6;