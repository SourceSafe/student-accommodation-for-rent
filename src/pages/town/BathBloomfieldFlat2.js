
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


const  BathBloomfieldFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-bloomfield-bath.png')} alt='Shared 2 Bedroom Flats for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_bloomfield,_bath">Prices for Shared 2 Bedroom Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_bloomfield,_bath">Cheap Shared 2 Bedroom Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bloomfield,_bath__recently_added">Shared 2 Bedroom Flats for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bloomfield,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Bloomfield, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£680 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom flat in Bloomfield, Bath, Somerset? Have you considered the convenience and peace of mind that comes with opting for an <b>all bills inclusive</b> service for your accommodation? <b>UniBills.com</b> offers a fantastic solution that allows you to <b>concentrate on your studies</b> without having to worry about managing multiple bills. By choosing to enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, you can streamline your monthly expenses and avoid any unexpected costs. From electricity to water, and even internet, everything is covered under one convenient package. Say goodbye to the stress of budgeting for various utilities and hello to a simplified living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and embrace the benefits of an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 2 bedroom flats for students in Bloomfield, Bath can be a rewarding experience. With the variety of options available, students can find a comfortable living space that suits their needs and budget. By sharing a flat with a roommate, students can enjoy a sense of community, split the cost of rent and utilities, and create lasting friendships. It is important for students to carefully consider factors such as location, amenities, and lease terms when looking for a shared flat. Ultimately, finding the right 2 bedroom flat can enhance the overall college experience and provide a cozy and convenient space to call home while pursuing their academic goals in Bath.</p></>)
};

export default BathBloomfieldFlat2;