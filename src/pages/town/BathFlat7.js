
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


const  BathFlat7 = () => 
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

    return (<><h1>Student Accommodation in Bath - 7 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 7 bedroom Flats</b> for the academic year 2024.
7 bedroom flats in Bath are popular among students looking to share accommodation with a larger group, splitting costs and living expenses, creating a communal living atmosphere.
These spacious flats often come fully furnished, providing a comfortable and convenient living environment for students studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bath-7-bedroom-flats.png')} alt='Student Accommodation in Bath - 7 bedroom Flats'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__7_bedroom_flats">Prices for Student Accommodation in Bath - 7 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__7_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 7 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__7_bedroom_flats">Cheapest Student Accommodation in Bath - 7 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__7_bedroom_flats__recently_added">Student Accommodation in Bath - 7 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__7_bedroom_flats__recently_reduced">Student Accommodation in Bath - 7 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__7_bedroom_flats__by_student_location">Prices for Student Accommodation in Bath - 7 bedroom Flats - By Student Location</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__7_bedroom_flats"> <h2>Prices for Student Accommodation in Bath - 7 bedroom Flats</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£687 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 7 bedroom Flats' onClick={() => routeToPortal("?&beds=7&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__7_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 7 bedroom Flats - All Bills Inclusive</h2></a><p>Living in a 7-bedroom student flat in Bath can be both exciting and challenging. With so many things to juggle, the last thing you need is the stress of dealing with multiple bills for utilities and services. This is where subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can be a game-changer. By opting for this convenient option, you can free up your time and energy to <b>concentrate on your studies</b> and enjoy student life to the fullest. <b>UniBills.com</b> takes care of all the bills, from electricity and water to internet and TV, making your life easier and hassle-free. No more worrying about budgeting for each bill separately or handling unexpected expenses. Get a quote from <b>UniBills.com</b> or any accommodation on this website and say goodbye to bill-related headaches. It's time to simplify your student living experience and embrace the benefits of an <b>all bills inclusive</b> service.</p><a id = "cheapest_student_accommodation_in_bath__7_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 7 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="7" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__7_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 7 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="7" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__7_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 7 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="7" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__7_bedroom_flats__by_student_location"> <h2>Prices for Student Accommodation in Bath - 7 bedroom Flats - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Widcombe, Bath, Somerset </td><td><button className = 'searchButton' title='View our Widcombe, Bath, Somersets' onClick={() => routeToPortal("?&beds=7&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^26891")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-flats-for-students-in-widcombe-bath' title  = 'View Key Statistics for Widcombe, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>1 </td><td>687 </td><td>687 </td><td>687 </td><td>159 </td><td>159 </td><td>159 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, the search for student accommodation in Bath can be an exciting yet challenging task, especially when looking for a 7-bedroom flat. With the increasing demand for larger shared living spaces, it's crucial to start the search early and be prepared to act fast when a suitable property becomes available. When hunting for a 7-bedroom flat, consider factors such as location, budget, facilities, and proximity to amenities and transport links. Bath offers a variety of options for student housing, from modern purpose-built accommodations to traditional townhouses. Ultimately, finding the right 7-bedroom flat requires careful consideration and thorough research to ensure a comfortable and convenient living environment for all occupants. Whatever your preferences and requirements may be, Bath has something to offer for every student looking to secure spacious and communal living arrangements in the beautiful city.</p></>)
};

export default BathFlat7;