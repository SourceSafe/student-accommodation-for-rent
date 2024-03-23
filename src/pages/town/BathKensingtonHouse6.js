
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


const  BathKensingtonHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-kensington-bath.png')} alt='Shared 6 Bedroom Houses for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_kensington,_bath">Prices for Shared 6 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_kensington,_bath">Cheap Shared 6 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_kensington,_bath__recently_added">Shared 6 Bedroom Houses for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_kensington,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_kensington,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Kensington, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£801 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>If you're a student living in a 6-bedroom house in Kensington, Bath, Somerset, managing bills can be a real headache. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free option of having all your utilities and bills taken care of in one convenient package. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the stress of managing multiple bills every month. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Kensington a breeze with their all-inclusive service. Say goodbye to bill-related stress and hello to a more relaxed living experience with <b>UniBills.com</b>.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_kensington,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_kensington,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, finding a shared 6-bedroom house for students in Kensington, Bath can be an exciting yet challenging experience. With its prime location offering close proximity to universities and amenities, these properties are highly sought after. Students can enjoy the convenience of living with their peers in a spacious and well-equipped house, while also benefiting from a vibrant and bustling atmosphere in the heart of Kensington. Despite the competitive housing market, there are various options available for those looking to secure a place to call home during their academic years. In conclusion, navigating the search for a shared 6-bedroom house requires thorough research, diligence, and perhaps a bit of luck, but the end result is a rewarding and enriching living experience in one of the most desirable areas for students in Bath.</p></>)
};

export default BathKensingtonHouse6;