
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


const  BathSladebrookStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Sladebrook, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Sladebrook, Bath</b> for the academic year 2024. 

<b>Studio Apartments for Students in Sladebrook, Bath</b> offer convenient and comfortable living spaces for students studying in Bath. The apartments are designed to cater to the specific needs of students, providing a conducive environment for studying and relaxation. Located in the vibrant area of Sladebrook, students can easily access local amenities and transport links while enjoying a sense of community within the student-oriented complex.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-sladebrook-bath.png')} alt='Studio Apartments for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_sladebrook,_bath">Prices for Studio Apartments for Students in Sladebrook, Bath</a></li><li><a href = "#studio_apartments_for_students_in_sladebrook,_bath__all_bills_inclusive">Studio Apartments for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_sladebrook,_bath">Cheap Studio Apartments for Students in Sladebrook, Bath</a></li><li><a href = "#studio_apartments_for_students_in_sladebrook,_bath__recently_added">Studio Apartments for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_sladebrook,_bath__recently_reduced">Studio Apartments for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_sladebrook,_bath__houses">Prices for Studio Apartments for Students in Sladebrook, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_sladebrook,_bath"> <h2>Prices for Studio Apartments for Students in Sladebrook, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a stress-free living experience in Sladebrook, Bath, Somerset? Consider subscribing to an <b>all bills inclusive</b> service for your student Studio through <b>UniBills.com</b>. By opting for this convenient package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without the worry of managing multiple bills. With all your utilities, internet, and other services included in one simple payment, you can streamline your budgeting and have more time for what matters most. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_studio_apartments_for_students_in_sladebrook,_bath"> <h2>Cheap Studio Apartments for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_sladebrook,_bath__recently_added"> <h2>Studio Apartments for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Studio Apartments for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_sladebrook,_bath__houses"> <h2>Prices for Studio Apartments for Students in Sladebrook, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£1100 </td><td>£1100 </td><td>£1100 </td><td>£255 </td><td>£255 </td><td>£255 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, searching for studio apartments for students in Sladebrook, Bath can be an exciting yet challenging task. The selection process should take into consideration factors such as location, amenities, and budget to ensure a comfortable and convenient living experience. With a variety of options available, students can find a studio apartment that suits their needs and preferences in this vibrant city. In conclusion, by carefully evaluating all aspects of the rental properties in Sladebrook, students can secure a cozy and functional studio apartment that enhances their overall academic and social experience. Making a well-informed decision will ultimately lead to a successful and enjoyable living arrangement during their time in Bath.</p></>)
};

export default BathSladebrookStudio;