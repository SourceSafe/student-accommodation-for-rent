
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


const  BathKensingtonFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-kensington-bath.png')} alt='Shared 1 Bedroom Flats for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_kensington,_bath">Prices for Shared 1 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_kensington,_bath">Cheap Shared 1 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_kensington,_bath__recently_added">Shared 1 Bedroom Flats for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_kensington,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_kensington,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Kensington, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1232 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Tired of keeping track of numerous bills for your 1-bedroom student flat in Kensington, Bath, Somerset? <b>UniBills.com</b> has the perfect solution for you. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the convenience of having all your bills - including utilities, internet, and even council tax - bundled into one easy monthly payment. This means no more worrying about due dates or unexpected charges, allowing you to <b>concentrate on your studies</b> without any distractions. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option while living in the heart of Kensington. Say goodbye to the stress of managing multiple bills and say hello to a simpler, more streamlined living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life more manageable and enjoyable.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_kensington,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_kensington,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 1-bedroom flat for students in Kensington, Bath can be a rewarding experience for those looking to save on housing costs while enjoying a communal living environment. By joining forces with roommates, students can divide rent and utilities, making living in a desirable location more affordable. With its convenient location and diverse range of amenities, Kensington offers a vibrant and culturally rich atmosphere for students to thrive in. Whether it's exploring the local cafes, parks, or nearby universities, living in a shared flat in Kensington can provide a balance of independence and community. So, if you're a student looking for a cozy and cost-effective living arrangement in a lively neighborhood, consider the option of a shared 1-bedroom flat in Kensington, Bath.</p></>)
};

export default BathKensingtonFlat1;