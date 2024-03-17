
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


const  BathMoorlandsFlat = () => 
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

    return (<><h1>Shared Flats for Students in Moorlands, Bath</h1><p>We have listings for <b>Shared Flats for Students in Moorlands, Bath</b> for the academic year 2024.

<b>Shared Flats for Students in Moorlands, Bath</b> offer a convenient and affordable housing option for students attending universities in Bath. These flats typically include shared living spaces such as kitchens and living rooms, creating a sense of community among the residents. Additionally, living in Moorlands provides easy access to the city center and campus facilities, making it a desirable location for student accommodation.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-flats-for-students-in-moorlands-bath.png')} alt='Shared Flats for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_flats_for_students_in_moorlands,_bath">Prices for Shared Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_flats_for_students_in_moorlands,_bath__all_bills_inclusive">Shared Flats for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_flats_for_students_in_moorlands,_bath">Cheap Shared Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_flats_for_students_in_moorlands,_bath__recently_added">Shared Flats for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_flats_for_students_in_moorlands,_bath__recently_reduced">Shared Flats for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_flats_for_students_in_moorlands,_bath__houses">Prices for Shared Flats for Students in Moorlands, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_flats_for_students_in_moorlands,_bath"> <h2>Prices for Shared Flats for Students in Moorlands, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£888 per month </td><td><button className = 'searchButton' title='View our Shared Flats for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_flats_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared Flats for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>As a student living in Moorlands, Bath, Somerset, subscribing to an <b>all bills inclusive</b> service has numerous benefits. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without the added stress of managing multiple utility bills. By opting for the <b>all bills inclusive</b> package, you can enjoy the hassle-free option provided by <b>UniBills.com</b>, ensuring that your rent covers all essential expenses such as electricity, water, and internet. This means no more budgeting for unexpected bills and no more splitting costs with flatmates, making your living experience much simpler and more streamlined. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make the smart choice to simplify your student life in Moorlands, Bath, Somerset.</p><a id = "cheap_shared_flats_for_students_in_moorlands,_bath"> <h2>Cheap Shared Flats for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_moorlands,_bath__recently_added"> <h2>Shared Flats for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared Flats for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_flats_for_students_in_moorlands,_bath__houses"> <h2>Prices for Shared Flats for Students in Moorlands, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-moorlands-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1000 </td><td>£1400 </td><td>£1200 </td><td>£232 </td><td>£325 </td><td>£279 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-moorlands-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£750 </td><td>£680 </td><td>£141 </td><td>£174 </td><td>£158 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, finding a shared flat for students in Moorlands, Bath can be a convenient and cost-effective option for those looking for accommodation near the university campus. With a variety of properties available, students have the opportunity to choose from a range of options based on their preferences and budget. Living with housemates also provides a sense of community and support as students navigate through their academic journey. Additionally, the proximity to campus and local amenities makes daily life more convenient for students living in shared flats. In conclusion, exploring shared accommodation in Moorlands, Bath can offer students a comfortable and enjoyable living experience while studying in the vibrant city of Bath.</p></>)
};

export default BathMoorlandsFlat;