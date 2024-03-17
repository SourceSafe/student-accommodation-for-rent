
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

    return (<><h1>Studio Apartments for Students in Moorlands, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Moorlands, Bath</b> for the academic year 2024. <b>Studio Apartments for Students in Moorlands, Bath</b> are perfect for students who are looking for a convenient and comfortable living space in Bath. These apartments offer a great location, modern amenities, and a supportive community for students to thrive academically and socially.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-moorlands-bath.png')} alt='Studio Apartments for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_moorlands,_bath">Prices for Studio Apartments for Students in Moorlands, Bath</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__all_bills_inclusive">Studio Apartments for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_moorlands,_bath">Cheap Studio Apartments for Students in Moorlands, Bath</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__recently_added">Studio Apartments for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__recently_reduced">Studio Apartments for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_moorlands,_bath__houses">Prices for Studio Apartments for Students in Moorlands, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_moorlands,_bath"> <h2>Prices for Studio Apartments for Students in Moorlands, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student renting a studio in Moorlands, Bath, Somerset? Save yourself the stress of managing multiple bills by opting for an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> instead of worrying about utility payments. With all bills included in one affordable monthly fee, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. This service not only simplifies your living arrangements but also helps you budget effectively and avoid unexpected costs. Say goodbye to the hassle of dealing with different providers and enjoy a seamless rental experience with <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Moorlands a little easier.</p><a id = "cheap_studio_apartments_for_students_in_moorlands,_bath"> <h2>Cheap Studio Apartments for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_moorlands,_bath__recently_added"> <h2>Studio Apartments for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_moorlands,_bath__recently_reduced"> <h2>Studio Apartments for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_moorlands,_bath__houses"> <h2>Prices for Studio Apartments for Students in Moorlands, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£1100 </td><td>£1100 </td><td>£1100 </td><td>£255 </td><td>£255 </td><td>£255 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, looking for studio apartments for students in Moorlands, Bath can be a rewarding experience. With its picturesque surroundings and convenient location near the University of Bath, Moorlands offers a tranquil and conducive environment for student living. Studio apartments provide the perfect balance of privacy and independence, creating a comfortable space for studying and relaxation. Additionally, with various amenities and facilities nearby, students can easily access everything they need for daily living. Whether it's for a semester or a longer-term stay, Moorlands' studio apartments cater to the needs of students seeking a peaceful and well-equipped living space. Overall, renting a studio apartment in Moorlands can offer students a peaceful and convenient living experience, allowing them to focus on their studies and enjoy their time in Bath.</p></>)
};

export default BathMoorlandsStudio;