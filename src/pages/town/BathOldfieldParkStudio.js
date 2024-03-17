
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


const  BathOldfieldParkStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Oldfield Park, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Oldfield Park, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Oldfield Park, Bath</b> provide a convenient and cozy living space for students studying in Bath. These apartments are a popular choice for students looking for a comfortable and affordable accommodation option. Located in the charming neighborhood of Oldfield Park, these studios offer easy access to local amenities and transport links.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-oldfield-park-bath.png')} alt='Studio Apartments for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_oldfield_park,_bath">Prices for Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive">Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_oldfield_park,_bath">Cheap Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_added">Studio Apartments for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced">Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_oldfield_park,_bath__houses">Prices for Studio Apartments for Students in Oldfield Park, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Prices for Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for accommodation in Oldfield Park, Bath, Somerset? Save yourself the stress of managing multiple bills by opting for an <b>all bills inclusive</b> service with <b>UniBills.com</b>. With this convenient option, you can <b>concentrate on your studies</b> without worrying about paying separate bills for utilities, internet, and other services. <b>UniBills.com</b> offers hassle-free living with their all inclusive packages, allowing you to budget effectively and enjoy the convenience of a single monthly payment. Say goodbye to the hassle of dealing with multiple providers and enjoy the benefits of a streamlined service. Get a quote from <b>UniBills.com</b> or any accommodation on this web site to experience the ease and convenience of <b>all bills inclusive</b> living in your student studio.</p><a id = "cheap_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Cheap Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_added"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_oldfield_park,_bath__houses"> <h2>Prices for Studio Apartments for Students in Oldfield Park, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£795 </td><td>£1690 </td><td>£1250 </td><td>£184 </td><td>£393 </td><td>£290 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, searching for studio apartments for students in Oldfield Park, Bath, can be a rewarding yet challenging task. The area offers a convenient location close to local amenities, public transportation, and the university campus, making it an ideal choice for student accommodation. However, competition among students for affordable and well-maintained studio apartments can be fierce. It is essential for students to start their search early, be prepared to compromise on certain amenities, and consider sharing a larger apartment with roommates to save on costs. Overall, with careful planning and perseverance, students can find a suitable studio apartment in Oldfield Park that meets their budget and lifestyle needs.</p></>)
};

export default BathOldfieldParkStudio;