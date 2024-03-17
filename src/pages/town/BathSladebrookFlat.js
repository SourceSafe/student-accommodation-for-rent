
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


const  BathSladebrookFlat = () => 
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

    return (<><h1>Shared Flats for Students in Sladebrook, Bath</h1><p>We have listings for <b>Shared Flats for Students in Sladebrook, Bath</b> for the academic year 2024.

<b>Shared Flats for Students in Sladebrook, Bath</b> offer affordable and convenient housing options for students studying in the area. These flats provide a communal living environment where students can share costs and responsibilities while enjoying a sense of community with their peers. Located in the beautiful city of Bath, students can experience the rich history and culture of the city while living in comfortable and modern accommodations.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-flats-for-students-in-sladebrook-bath.png')} alt='Shared Flats for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_flats_for_students_in_sladebrook,_bath">Prices for Shared Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_flats_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared Flats for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_flats_for_students_in_sladebrook,_bath">Cheap Shared Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_flats_for_students_in_sladebrook,_bath__recently_added">Shared Flats for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_flats_for_students_in_sladebrook,_bath__recently_reduced">Shared Flats for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_flats_for_students_in_sladebrook,_bath__houses">Prices for Shared Flats for Students in Sladebrook, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_flats_for_students_in_sladebrook,_bath"> <h2>Prices for Shared Flats for Students in Sladebrook, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£888 per month </td><td><button className = 'searchButton' title='View our Shared Flats for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_flats_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared Flats for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Living in a student flat can be overwhelming, especially when it comes to managing bills and expenses. That's where an <b>all bills inclusive</b> service like <b>UniBills.com</b> comes in handy. By subscribing to this service, you can enjoy the hassle free all inclusive option provided by <b>UniBills.com</b>. With all your bills, including utilities and internet, rolled into one easy monthly payment, you can <b>concentrate on your studies</b> without the stress of budgeting and bill payments. <b>UniBills.com</b> takes care of everything for you, ensuring a smooth and seamless living experience in Sladebrook, Bath, Somerset. Say goodbye to the hassle of splitting bills with your flatmates and enjoy the convenience of an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this web site today and simplify your student living experience.</p><a id = "cheap_shared_flats_for_students_in_sladebrook,_bath"> <h2>Cheap Shared Flats for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared Flats for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared Flats for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_flats_for_students_in_sladebrook,_bath__houses"> <h2>Prices for Shared Flats for Students in Sladebrook, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-sladebrook-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1000 </td><td>£1400 </td><td>£1200 </td><td>£232 </td><td>£325 </td><td>£279 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-sladebrook-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£750 </td><td>£680 </td><td>£141 </td><td>£174 </td><td>£158 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, searching for shared flats for students in Sladebrook, Bath can be an exciting but challenging process. It involves considering factors such as location, budget, amenities, and compatibility with potential flatmates. By utilizing online platforms, students can browse through various options and connect with like-minded individuals to find the perfect living arrangement. Additionally, visiting properties in person and asking questions about rental agreements and responsibilities can help ensure a smooth renting experience. Ultimately, shared flats in Sladebrook offer a cost-effective and social living arrangement for students in Bath, promoting camaraderie and convenience. So, with thorough research and diligence, students can successfully find a shared flat that meets their needs and preferences in the vibrant city of Bath, enhancing their overall student experience.</p></>)
};

export default BathSladebrookFlat;