
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


const  BathMoorlandsStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Moorlands, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Moorlands, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Moorlands, Bath</b> are a popular choice among students in Bath due to its convenient location near the university and the city center. These apartments are equipped with all the necessary amenities to provide a comfortable living space for students during their academic year. The Moorlands area offers a peaceful environment, while still being close to local shops, restaurants, and public transportation options.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-moorlands-bath.png')} alt='Studio Apartments for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_moorlands,_bath">Prices for Studio Apartments for Students in Moorlands, Bath</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__all_bills_inclusive">Studio Apartments for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_moorlands,_bath">Cheap Studio Apartments for Students in Moorlands, Bath</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__recently_added">Studio Apartments for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__recently_reduced">Studio Apartments for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_moorlands,_bath__houses">Prices for Studio Apartments for Students in Moorlands, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_moorlands,_bath"> <h2>Prices for Studio Apartments for Students in Moorlands, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Living in a student studio in Moorlands, Bath, Somerset can be a great experience, especially when you choose an <b>all bills inclusive</b> service. Subscribing to <b>UniBills.com</b> ensures that you don't have to worry about sorting out individual bills for electricity, water, or internet, allowing you to <b>concentrate on your studies</b> instead. The convenience of having all utilities included in one monthly payment can help you budget effectively and avoid any unexpected costs. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option and focus on making the most of your student experience. Say goodbye to the stress of managing multiple bills and embrace the simplicity of an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website to discover the benefits for yourself.</p><a id = "cheap_studio_apartments_for_students_in_moorlands,_bath"> <h2>Cheap Studio Apartments for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_moorlands,_bath__recently_added"> <h2>Studio Apartments for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_moorlands,_bath__recently_reduced"> <h2>Studio Apartments for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_moorlands,_bath__houses"> <h2>Prices for Studio Apartments for Students in Moorlands, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£1100 </td><td>£1100 </td><td>£1100 </td><td>£255 </td><td>£255 </td><td>£255 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, if you are a student looking for studio apartments in Moorlands, Bath, you have a variety of options to choose from. With its convenient location near the university and other amenities, Moorlands offers a perfect living space for students. The affordability of these studio apartments makes them an attractive choice for students on a budget. With features like furnished units, utilities included, and on-site laundry facilities, these apartments provide a comfortable and convenient living environment for students. Additionally, the vibrant community in Moorlands ensures that students can easily socialize and make new friends. Overall, Moorlands is a great place for students to find studio apartments that meet their needs and support their academic pursuits.</p></>)
};

export default BathMoorlandsStudio;