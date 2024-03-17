
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


const  BathKingswayStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Kingsway, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Kingsway, Bath</b> for the academic year 2024.
<b>Studio Apartments for Students in Kingsway, Bath</b> are ideal for student living in Bath, providing a convenient and comfortable housing option.
Located in a prime area, these apartments offer easy access to campus, local amenities, and public transportation for students' convenience.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-kingsway-bath.png')} alt='Studio Apartments for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_kingsway,_bath">Prices for Studio Apartments for Students in Kingsway, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kingsway,_bath__all_bills_inclusive">Studio Apartments for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_kingsway,_bath">Cheap Studio Apartments for Students in Kingsway, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kingsway,_bath__recently_added">Studio Apartments for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_kingsway,_bath__recently_reduced">Studio Apartments for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_kingsway,_bath__houses">Prices for Studio Apartments for Students in Kingsway, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_kingsway,_bath"> <h2>Prices for Studio Apartments for Students in Kingsway, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a hassle-free living arrangement in Kingsway, Bath, Somerset? Look no further than <b>UniBills.com</b>! Subscribing to an <b>all bills inclusive</b> service for your student studio not only simplifies your monthly expenses but also allows you to <b>concentrate on your studies</b> without worrying about bills. Enjoy the convenience of having your utility bills, internet, and other charges all bundled into one easy payment. <b>UniBills.com</b> takes the stress out of managing multiple bills, leaving you with more time to focus on what really matters. Say goodbye to the headache of budgeting and tracking various expenses, and say hello to the hassle-free all-inclusive option provided by <b>UniBills.com</b>. For a seamless and convenient living experience in Kingsway, Bath, Somerset, get a quote from <b>UniBills.com</b> or any accommodation on this website today.</p><a id = "cheap_studio_apartments_for_students_in_kingsway,_bath"> <h2>Cheap Studio Apartments for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kingsway,_bath__recently_added"> <h2>Studio Apartments for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kingsway,_bath__recently_reduced"> <h2>Studio Apartments for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_kingsway,_bath__houses"> <h2>Prices for Studio Apartments for Students in Kingsway, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£1100 </td><td>£1100 </td><td>£1100 </td><td>£255 </td><td>£255 </td><td>£255 </td></tr></table></p><h2>The Conclusion</h2><p>In Summary, searching for studio apartments for students in Kingsway, Bath can be a rewarding yet challenging task. This area offers a range of options for student living, from modern and cozy studio apartments to more affordable and traditional options. When looking for the perfect studio apartment, students should consider factors such as location, price, amenities, and proximity to their university. By doing thorough research, visiting multiple properties, and weighing the pros and cons of each option, students can find a studio apartment that meets their needs and budget. In conclusion, Kingsway, Bath is a thriving student-friendly community with plenty of studio apartment choices for those seeking a convenient and comfortable living space during their university years. With careful planning and consideration, students can find the perfect studio apartment that suits their lifestyle and academic needs.</p></>)
};

export default BathKingswayStudio;