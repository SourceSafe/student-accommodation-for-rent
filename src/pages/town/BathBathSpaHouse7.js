
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


const  BathBathSpaHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 7 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 7 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 7 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 7 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£648 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you tired of the stress and responsibility of managing multiple bills for your 7 bedroom student house in Bath Spa, Bath, Somerset? Subscribe to an <b>all bills inclusive</b> service provided by <b>UniBills.com</b> and enjoy the convenience of having all your utility payments combined into one easy package. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the hassle of keeping track of various bills and due dates. Save time, energy, and money by opting for the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the headache of managing individual bills and say hello to a streamlined and worry-free living experience. Get a quote from UniBills.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding shared 7-bedroom houses for students in Bath Spa, Bath can be a rewarding experience for those looking to live with a larger group of friends or classmates. These spacious accommodations offer ample room for socializing and studying while also providing a sense of community and camaraderie. By sharing the cost of rent and utilities with multiple housemates, students can enjoy affordable living arrangements without compromising on comfort and convenience. With a variety of options available in prime locations near campus and local amenities, students can easily find a shared house that suits their needs and preferences. Overall, choosing a shared 7-bedroom house in Bath Spa, Bath can enhance the college experience by fostering friendships, creating lasting memories, and making student life more enjoyable and fulfilling.</p></>)
};

export default BathBathSpaHouse7;