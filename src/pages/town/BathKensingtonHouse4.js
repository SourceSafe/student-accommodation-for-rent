
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


const  BathKensingtonHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-kensington-bath.png')} alt='Shared 4 Bedroom Houses for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_kensington,_bath">Prices for Shared 4 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_kensington,_bath">Cheap Shared 4 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_kensington,_bath__recently_added">Shared 4 Bedroom Houses for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_kensington,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_kensington,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Kensington, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£658 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your student house in Kensington, Bath, Somerset? Say goodbye to the stress of managing utility payments every month and switch to an <b>all bills inclusive</b> service from <b>UniBills.com</b>. By opting for this convenient option, you can <b>concentrate on your studies</b> without worrying about keeping track of various bills. <b>UniBills.com</b> takes care of all your utility payments, including electricity, water, gas, and internet, in one simple monthly fee. Enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b> and say hello to a more organized and stress-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life easier and more enjoyable.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_kensington,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_kensington,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 4-bedroom houses for students in Kensington, Bath can be a rewarding and practical option for those seeking affordable and convenient accommodation. Living with roommates in a spacious property not only promotes a sense of community but also allows for cost-sharing among tenants.  Additionally, the central location of Kensington in Bath provides easy access to local amenities, public transportation, and nearby universities, making it an ideal choice for student living. When considering shared housing options, it is essential to prioritize factors such as location, budget, and living arrangements to ensure a comfortable and enjoyable student experience. With careful planning and communication, finding the perfect 4-bedroom house in Kensington can lead to lasting friendships and memorable college years.</p></>)
};

export default BathKensingtonHouse4;