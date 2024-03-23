
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


const  BathCrescentGardensStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Crescent Gardens, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Crescent Gardens, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Crescent Gardens, Bath</b> offer a convenient and comfortable living space for students in Bath. These apartments provide a great location close to the city center and various university campuses, making it an ideal choice for student accommodations in the area. The apartments are well-equipped with modern amenities and are perfect for students looking for a cozy and private living space during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-crescent-gardens-bath.png')} alt='Studio Apartments for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_crescent_gardens,_bath">Prices for Studio Apartments for Students in Crescent Gardens, Bath</a></li><li><a href = "#studio_apartments_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Studio Apartments for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_crescent_gardens,_bath">Cheap Studio Apartments for Students in Crescent Gardens, Bath</a></li><li><a href = "#studio_apartments_for_students_in_crescent_gardens,_bath__recently_added">Studio Apartments for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_crescent_gardens,_bath__recently_reduced">Studio Apartments for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_crescent_gardens,_bath__houses">Prices for Studio Apartments for Students in Crescent Gardens, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_crescent_gardens,_bath"> <h2>Prices for Studio Apartments for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for hassle-free accommodation in Crescent Gardens, Bath, Somerset? Look no further than <b>UniBills.com</b> for <b>all bills inclusive</b> studio apartments. By subscribing to the <b>all bills inclusive</b> service, you can <b>concentrate on your studies</b> without worrying about utility bills piling up. <b>UniBills.com</b> takes care of everything, from electricity and water to internet and TV license, allowing you to enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of managing multiple bills and hello to a simplified living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and peace of mind that comes with an all-inclusive living arrangement.</p><a id = "cheap_studio_apartments_for_students_in_crescent_gardens,_bath"> <h2>Cheap Studio Apartments for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Studio Apartments for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Studio Apartments for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_crescent_gardens,_bath__houses"> <h2>Prices for Studio Apartments for Students in Crescent Gardens, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£795 </td><td>£1690 </td><td>£1287 </td><td>£184 </td><td>£393 </td><td>£299 </td></tr></table></p><h2>The Conclusion</h2><p>Looking for studio apartments for students in Crescent Gardens, Bath can be an exciting yet challenging task. With its prime location and modern amenities, Crescent Gardens offers students a convenient and comfortable living space. Studio apartments in this area provide a cozy and private living environment, perfect for focused study sessions and relaxation. The proximity to local universities and bustling city life make Crescent Gardens an ideal choice for students looking for a balance between academic pursuits and social activities. In conclusion, finding a studio apartment in Crescent Gardens can enhance a student's overall college experience by offering a suitable living space that meets both their academic and personal needs. So, if you're a student searching for the perfect studio apartment in Bath, consider exploring the options available in Crescent Gardens for a fulfilling and enriching student life experience.</p></>)
};

export default BathCrescentGardensStudio;