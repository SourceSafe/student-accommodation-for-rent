
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


const  BathMoorlandsStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/studio-apartments-for-students-in-moorlands-bath.png')} alt='Studio Apartments for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_moorlands,_bath">Prices for Studio Apartments for Students in Moorlands, Bath</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__all_bills_inclusive">Studio Apartments for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_moorlands,_bath">Cheap Studio Apartments for Students in Moorlands, Bath</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__recently_added">Studio Apartments for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__recently_reduced">Studio Apartments for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_moorlands,_bath"> <h2>Prices for Studio Apartments for Students in Moorlands, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 1 bedroom studio in Moorlands, Bath, Somerset? Consider the benefits of subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>. By choosing this convenient option, you can enjoy the hassle-free experience of having all your bills, including utilities and internet, combined into one fixed monthly payment. This way, you can save time and effort on managing individual bills, allowing you to <b>concentrate on your studies</b> and extracurricular activities. <b>UniBills.com</b> provides a seamless and stress-free way to navigate your student living expenses, ensuring that you have one less thing to worry about. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student life today.</p><a id = "cheap_studio_apartments_for_students_in_moorlands,_bath"> <h2>Cheap Studio Apartments for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_moorlands,_bath__recently_added"> <h2>Studio Apartments for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_moorlands,_bath__recently_reduced"> <h2>Studio Apartments for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for studio apartments for students in Moorlands, Bath, it is essential to consider important factors. Location is key, ensuring easy access to campus and local amenities. Budget constraints also play a significant role, as finding affordable accommodation is crucial for students. Additionally, amenities such as laundry facilities, parking, and security should be prioritized to ensure a comfortable living experience. In conclusion, students searching for studio apartments in Moorlands, Bath should carefully assess their needs and preferences to find the perfect balance between convenience, affordability, and comfort in their new living space. With thorough research and consideration of key factors, students can secure a studio apartment that meets their needs and enhances their overall college experience.</p></>)
};

export default BathMoorlandsStudio1;