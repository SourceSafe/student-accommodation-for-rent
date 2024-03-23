
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


const  BathBeechenCliffFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-beechen-cliff-bath.png')} alt='Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath">Prices for Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath">Cheap Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added">Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£780 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5-bedroom flat in Beechen Cliff, Bath, Somerset? Do you find managing your bills alongside your studies to be a hassle? Look no further than <b>UniBills.com</b>! By subscribing to an <b>all bills inclusive</b> service, you can enjoy the convenience of having all your bills taken care of in one simple package. This means you can <b>concentrate on your studies</b> without the stress of dealing with multiple bills each month. <b>UniBills.com</b> offers an all-inclusive option that covers your electricity, water, gas, internet, and even TV license, allowing you to relax and focus on what's important. Say goodbye to the headache of managing bills and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from UniBills.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 5-bedroom flat for students in Beechen Cliff, Bath can be a promising endeavor for those seeking communal living arrangements within close proximity to campus. With its vibrant student community, convenient location, and array of amenities, Beechen Cliff offers a desirable setting for students to thrive academically and socially. The availability of shared 5-bedroom flats ensures that students can benefit from affordable accommodations while enjoying the benefits of shared living spaces. By choosing to reside in one of these flats, students have the opportunity to build lasting friendships, share living expenses, and create a supportive environment conducive to their academic success. Overall, Beechen Cliff stands as an ideal location for students seeking a harmonious blend of convenience, camaraderie, and comfort in their living arrangements[].</p></>)
};

export default BathBeechenCliffFlat5;