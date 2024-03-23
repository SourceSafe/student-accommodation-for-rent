
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


const  BathCrescentGardensFlat6 = () => 
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

    return (<><h1>Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-flats-for-students-in-crescent-gardens-bath.png')} alt='Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath">Prices for Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath">Cheap Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added">Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced">Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Prices for Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a convenient and stress-free living arrangement in Bath, Somerset? Consider subscribing to an <b>all bills inclusive</b> service for your 6 bedroom student flat in Crescent Gardens. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, allowing you to <b>concentrate on your studies</b> without worrying about utility bills or unexpected expenses. Managing multiple bills can be time-consuming and stressful, but with <b>UniBills.com</b>, everything is taken care of for you. By choosing an <b>all bills inclusive</b> service, you can budget more effectively and avoid any surprises. Get a quote from <b>UniBills.com</b> or any accommodation listed on this website and make your student life in Crescent Gardens truly enjoyable and hassle-free.</p><a id = "cheap_shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Cheap Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Shared 6 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, seeking a shared 6-bedroom flat for students in Crescent Gardens, Bath can be an exciting opportunity for those looking for communal living arrangements with like-minded individuals. These properties often provide a convenient and affordable option for students to live together in close proximity to their university campus and local amenities. With spacious living areas, shared facilities, and the chance to make new friends, these flats offer a unique living experience that can enhance the overall student lifestyle. By pooling resources and sharing responsibilities, students can enjoy a comfortable and social environment while pursuing their academic goals. Overall, shared 6-bedroom flats in Crescent Gardens, Bath present a practical and enriching housing solution for students seeking a vibrant and supportive community during their time at university.</p></>)
};

export default BathCrescentGardensFlat6;