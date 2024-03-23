
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


const  BathKensingtonHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-kensington-bath.png')} alt='Shared 5 Bedroom Houses for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_kensington,_bath">Prices for Shared 5 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_kensington,_bath">Cheap Shared 5 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_kensington,_bath__recently_added">Shared 5 Bedroom Houses for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_kensington,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_kensington,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Kensington, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£725 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Are you tired of dealing with multiple utility bills for your student house in Kensington, Bath, Somerset? Say goodbye to the stress of managing bills and hello to convenience with an <b>all bills inclusive</b> service from <b>UniBills.com</b>. By subscribing to their all-inclusive package, you can <b>concentrate on your studies</b> without the worry of budgeting for different bills each month. <b>UniBills.com</b> takes care of everything for you, from electricity and water to internet and council tax. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and live comfortably in your 5-bedroom student house. With one simple monthly payment, you can have peace of mind and focus on what truly matters. Get a quote from UniBills.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_kensington,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_kensington,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 5-bedroom houses for students in Kensington, Bath, it's important to consider proximity to the university, amenities within walking distance, and the overall safety of the neighborhood. These spacious properties provide a great opportunity for students to live together and split costs, creating a sense of community and camaraderie. With shared common areas and ample bedrooms, these houses offer the perfect balance of privacy and social interaction. By opting for a shared accommodation, students can enjoy a more affordable living situation while still being able to access all the conveniences that Kensington has to offer. Ultimately, finding a shared 5-bedroom house in this desirable area can provide students with an enriching and fulfilling living experience during their time at university.</p></>)
};

export default BathKensingtonHouse5;