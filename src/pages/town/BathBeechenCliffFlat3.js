
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


const  BathBeechenCliffFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-beechen-cliff-bath.png')} alt='Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath">Prices for Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath">Cheap Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added">Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£757 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Are you looking for a stress-free living arrangement during your time at Beechen Cliff in Bath, Somerset? Consider subscribing to an <b>all bills inclusive</b> service for your 3-bedroom student flat through <b>UniBills.com</b>. By opting for this convenient package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without the worry of managing multiple bills. Imagine the peace of mind knowing that your rent covers all utilities, including water, gas, electricity, internet, and even council tax. With <b>UniBills.com</b>, you can streamline your living expenses and avoid unexpected costs, making budgeting a breeze. Don't let the hassle of setting up and managing utility accounts distract you from your academic pursuits. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student life.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 3-bedroom flat for students in Beechen Cliff, Bath offers a convenient and cost-effective living arrangement. With the close proximity to Bath city center and the University of Bath, students can easily access amenities and campus facilities. Living in a shared flat allows for social interaction, shared responsibilities, and a sense of community. It also helps in splitting the rent and utility costs, making it more affordable for students. The availability of 3-bedroom flats in Beechen Cliff provides ample space for privacy and personal study areas while still fostering a collaborative living environment. Overall, living in a shared 3-bedroom flat in Beechen Cliff, Bath offers students comfort, convenience, and a chance to cultivate lasting friendships.</p></>)
};

export default BathBeechenCliffFlat3;