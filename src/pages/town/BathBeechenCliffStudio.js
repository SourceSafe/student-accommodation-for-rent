
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


const  BathBeechenCliffStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Beechen Cliff, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Beechen Cliff, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Beechen Cliff, Bath</b> offer convenient and comfortable living spaces for students studying in the area. These apartments are perfect for those looking for self-contained accommodations with easy access to the city center and local amenities. With a focus on providing a quiet and focused environment for students, these Studio Apartments in Beechen Cliff, Bath are a great choice for academic year 2024.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-beechen-cliff-bath.png')} alt='Studio Apartments for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_beechen_cliff,_bath">Prices for Studio Apartments for Students in Beechen Cliff, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Studio Apartments for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_beechen_cliff,_bath">Cheap Studio Apartments for Students in Beechen Cliff, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__recently_added">Studio Apartments for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__recently_reduced">Studio Apartments for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_beechen_cliff,_bath__houses">Prices for Studio Apartments for Students in Beechen Cliff, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_beechen_cliff,_bath"> <h2>Prices for Studio Apartments for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for the perfect studio in Beechen Cliff, Bath, Somerset? Look no further than <b>UniBills.com</b>, where you can enjoy the benefits of an <b>all bills inclusive</b> service. By opting for this option, you can <b>concentrate on your studies</b> without the hassle of managing multiple bills. <b>UniBills.com</b> takes care of everything, from electricity and water to internet and TV licenses, allowing you to have a stress-free student living experience. Say goodbye to unexpected costs and complicated payments, and say hello to convenience and peace of mind. Get a quote from <b>UniBills.com</b> or any accommodation on this website today, and enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_studio_apartments_for_students_in_beechen_cliff,_bath"> <h2>Cheap Studio Apartments for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_beechen_cliff,_bath__houses"> <h2>Prices for Studio Apartments for Students in Beechen Cliff, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£795 </td><td>£1690 </td><td>£1287 </td><td>£184 </td><td>£393 </td><td>£299 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, searching for studio apartments for students in Beechen Cliff, Bath can be a rewarding experience. With a variety of options available, students can find the perfect living space that fits their budget and preferences. From cozy studios with modern amenities to convenient locations near campus, there are plenty of choices to consider. Students can enjoy the independence and privacy that a studio apartment provides, while still being part of a vibrant community. Whether it's studying for exams or exploring the city, living in a studio apartment in Beechen Cliff offers a comfortable and convenient home base for students. So, if you're looking for a place to call home during your time in Bath, consider the benefits of living in a studio apartment in Beechen Cliff.</p></>)
};

export default BathBeechenCliffStudio;