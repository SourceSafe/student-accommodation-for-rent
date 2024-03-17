
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


const  BathBathSpaStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Bath Spa, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Bath Spa, Bath</b> for the academic year 2024. 

Studio apartments in Bath Spa, Bath are ideal for students looking for a cozy and convenient accommodation option. These apartments are usually fully furnished and equipped with all the necessary amenities for student living, making them a popular choice among students in the area. Whether you prefer to live alone or share with a roommate, there are options available for every student's needs in Bath Spa, Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/studio-apartments-for-students-in-bath-spa-bath.png')} alt='Studio Apartments for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bath_spa,_bath">Prices for Studio Apartments for Students in Bath Spa, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__all_bills_inclusive">Studio Apartments for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_bath_spa,_bath">Cheap Studio Apartments for Students in Bath Spa, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__recently_added">Studio Apartments for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__recently_reduced">Studio Apartments for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_bath_spa,_bath__houses">Prices for Studio Apartments for Students in Bath Spa, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bath_spa,_bath"> <h2>Prices for Studio Apartments for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1248 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Tired of juggling multiple bills while trying to focus on your studies? Say goodbye to the hassle and stress of managing utility payments by subscribing to an <b>all bills inclusive</b> service for your student studio in Bath Spa, Bath, Somerset. <b>UniBills.com</b> offers the perfect solution for students looking to simplify their living expenses. With <b>all bills inclusive</b>, you can forget about keeping track of electricity, water, internet, and other bills, allowing you to <b>concentrate on your studies</b> and enjoy student life to the fullest. Get a quote from <b>UniBills.com</b> or any accommodation on this website and take advantage of the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Treat yourself to a worry-free living experience and make the most of your time at university with <b>all bills inclusive</b> accommodation.</p><a id = "cheap_studio_apartments_for_students_in_bath_spa,_bath"> <h2>Cheap Studio Apartments for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__recently_added"> <h2>Studio Apartments for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Studio Apartments for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_bath_spa,_bath__houses"> <h2>Prices for Studio Apartments for Students in Bath Spa, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£995 </td><td>£1625 </td><td>£1248 </td><td>£231 </td><td>£377 </td><td>£290 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, the search for studio apartments for students in Bath Spa can be both exciting and challenging. With its vibrant student community and picturesque surroundings, Bath offers a great living experience for those pursuing their studies. When looking for studio apartments, students should consider factors such as location, amenities, and budget. Bath Spa provides various options, from modern studios in the city center to cozy apartments near the university campus. By exploring different listings and visiting potential properties, students can find the perfect living space that suits their needs. In conclusion, finding a studio apartment in Bath Spa requires careful research and planning, but the end result is well worth the effort. With the right mindset and resources, students can secure a comfortable and convenient living arrangement in this charming city.</p></>)
};

export default BathBathSpaStudio;