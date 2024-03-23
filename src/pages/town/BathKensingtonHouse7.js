
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


const  BathKensingtonHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-kensington-bath.png')} alt='Shared 7 Bedroom Houses for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_kensington,_bath">Prices for Shared 7 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_kensington,_bath">Cheap Shared 7 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_kensington,_bath__recently_added">Shared 7 Bedroom Houses for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_kensington,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_kensington,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Kensington, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Are you tired of dealing with multiple bills for your student house in Kensington, Bath, Somerset? Say goodbye to the hassle and stress of managing utility bills by subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b>. With 7 bedrooms to take care of, you can <b>concentrate on your studies</b> and social life, knowing that all your bills are being taken care of. <b>UniBills.com</b> offers a convenient and cost-effective solution that includes everything from electricity and water to internet and TV licenses. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and eliminate the need to split bills and chase housemates for payments. Simplify your student living experience and ensure that all your utility needs are met with just one payment each month. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life a whole lot easier.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_kensington,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_kensington,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, the search for shared 7-bedroom houses for students in Kensington, Bath offers a unique opportunity for group living in a prestigious location. These spacious accommodations cater to a large number of students looking to live together, fostering a sense of community and camaraderie. With multiple bedrooms, facilities, and communal areas, these houses provide a comfortable and convenient living arrangement for students pursuing their studies in Bath. The proximity to local amenities, transportation links, and the vibrant city center make these houses an ideal choice for student living. In conclusion, shared 7-bedroom houses in Kensington, Bath present a fantastic housing option for students seeking a balance of independence, social interaction, and a prime location during their academic journey.</p></>)
};

export default BathKensingtonHouse7;