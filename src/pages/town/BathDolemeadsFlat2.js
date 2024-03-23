
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


const  BathDolemeadsFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Dolemeads, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-dolemeads-bath.png')} alt='Shared 2 Bedroom Flats for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_dolemeads,_bath">Prices for Shared 2 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_dolemeads,_bath">Cheap Shared 2 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_dolemeads,_bath__recently_added">Shared 2 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1157 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom flat in Dolemeads, Bath, Somerset? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that can simplify your life and help you <b>concentrate on your studies</b>. By subscribing to this convenient option, you can enjoy the hassle-free experience of having all your bills, including electricity, water, internet, and gas, bundled into one monthly payment. <b>UniBills.com</b> takes care of the administrative tasks, leaving you more time to focus on your academic commitments and social activities. Say goodbye to the stress of managing multiple bills and fluctuating expenses, and hello to the ease and convenience of the all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits firsthand.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_dolemeads,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 2-bedroom flats for students in Dolemeads, Bath can be a rewarding experience. By collaborating with roommates, students can split rent and utilities, making living in a desirable area more affordable. The convenience of having a roommate also provides companionship and potentially lasting friendships. Additionally, the location of Dolemeads offers students easy access to amenities, public transportation, and educational facilities. With careful planning and communication, finding a shared flat in this area can be a great opportunity for students to enhance their university experience while enjoying a comfortable and convenient living arrangement. Whether it's for socializing, sharing expenses, or simply having a support system, shared flats in Dolemeads provide a well-rounded living situation for students in Bath.</p></>)
};

export default BathDolemeadsFlat2;