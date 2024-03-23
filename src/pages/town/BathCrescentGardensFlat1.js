
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


const  BathCrescentGardensFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-crescent-gardens-bath.png')} alt='Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath">Prices for Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath">Cheap Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added">Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Living in a 1-bedroom student flat in Crescent Gardens, Bath, Somerset can be an exciting experience, but managing bills and utilities on top of coursework and other responsibilities can be overwhelming. That's where an <b>all bills inclusive</b> service like <b>UniBills.com</b> comes in handy. By subscribing to their <b>all bills inclusive</b> package, you can enjoy the hassle-free option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without worrying about fluctuating utility costs. With <b>UniBills.com</b>, you will have peace of mind knowing that all your bills, including electricity, water, gas, and internet, are included in one convenient monthly payment. Say goodbye to the stress of managing multiple bills and hello to simplified living. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath more enjoyable and stress-free.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>After meticulously searching for shared 1-bedroom flats for students in Crescent Gardens, Bath, it is evident that the demand for cozy yet affordable living spaces in this vibrant city is high. The convenience of sharing a flat with peers not only fosters a sense of community but also helps to alleviate the financial burden that often comes with student life. With the stunning surroundings and bustling atmosphere of Crescent Gardens, students can enjoy both tranquility and accessibility to all amenities. The variety of options available in terms of location, size, and pricing allows for flexibility in choosing the perfect living arrangement. In conclusion, finding a shared 1-bedroom flat in Crescent Gardens, Bath is a practical and rewarding choice for students seeking a comfortable and enjoyable living experience during their time in this beautiful city.</p></>)
};

export default BathCrescentGardensFlat1;