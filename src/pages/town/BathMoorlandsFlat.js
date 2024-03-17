
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

<b>Shared Flats for Students in Moorlands, Bath</b> provide a convenient and affordable housing option for students attending a university in Bath. These shared flats typically come fully furnished and offer communal spaces for socializing and studying, making them an ideal choice for students looking for a supportive living environment. Located in the picturesque area of Moorlands, Bath, students can enjoy both the tranquility of the surroundings and the bustling city life of Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-flats-for-students-in-moorlands-bath.png')} alt='Shared Flats for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_flats_for_students_in_moorlands,_bath">Prices for Shared Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_flats_for_students_in_moorlands,_bath__all_bills_inclusive">Shared Flats for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_flats_for_students_in_moorlands,_bath">Cheap Shared Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_flats_for_students_in_moorlands,_bath__recently_added">Shared Flats for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_flats_for_students_in_moorlands,_bath__recently_reduced">Shared Flats for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_flats_for_students_in_moorlands,_bath__houses">Prices for Shared Flats for Students in Moorlands, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_flats_for_students_in_moorlands,_bath"> <h2>Prices for Shared Flats for Students in Moorlands, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£888 per month </td><td><button className = 'searchButton' title='View our Shared Flats for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_flats_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared Flats for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Choosing an <b>all bills inclusive</b> service for your student flat in Moorlands, Bath, Somerset is a smart decision that will bring you peace of mind and allow you to <b>concentrate on your studies</b>. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, which covers all your utility bills such as gas, electricity, water, and even internet. This means no more worrying about unexpected bills or dealing with multiple providers. By opting for an <b>all bills inclusive</b> service, you can budget effectively and avoid any surprises at the end of the month. <b>UniBills.com</b> offers transparent pricing and ensures that you have everything you need for a comfortable living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life a little bit easier.</p><a id = "cheap_shared_flats_for_students_in_moorlands,_bath"> <h2>Cheap Shared Flats for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_moorlands,_bath__recently_added"> <h2>Shared Flats for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared Flats for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_flats_for_students_in_moorlands,_bath__houses"> <h2>Prices for Shared Flats for Students in Moorlands, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-moorlands-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1000 </td><td>£1400 </td><td>£1200 </td><td>£232 </td><td>£325 </td><td>£279 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-moorlands-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£750 </td><td>£680 </td><td>£141 </td><td>£174 </td><td>£158 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, looking for shared flats for students in Moorlands, Bath offers an affordable and convenient housing option for those studying in the area. The variety of accommodations available cater to different preferences and budget constraints, ensuring that students can find a suitable living arrangement. The close proximity to universities and amenities makes these flats an ideal choice for student living. Additionally, the opportunity to live with fellow students fosters a sense of community and companionship. In conclusion, Moorlands, Bath provides a conducive environment for student living, offering shared flats that meet the needs of students in terms of affordability, location, and social connection. So, if you're a student looking for a comfortable and affordable living space in Bath, exploring shared flats in Moorlands may be the perfect option for you.</p></>)
};

export default BathMoorlandsFlat;