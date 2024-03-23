
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

7 bedroom flats in Bath offer spacious living arrangements perfect for larger groups of students. These flats usually come fully furnished with shared common areas such as kitchens and living rooms, making them ideal for socializing and studying together. Additionally, many 7 bedroom flats in Bath are conveniently located near universities and public transportation for easy access to campus and city amenities.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bath-7-bedroom-flats.png')} alt='Student Accommodation in Bath - 7 bedroom Flats'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__7_bedroom_flats">Prices for Student Accommodation in Bath - 7 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__7_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 7 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__7_bedroom_flats">Cheapest Student Accommodation in Bath - 7 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__7_bedroom_flats__recently_added">Student Accommodation in Bath - 7 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__7_bedroom_flats__recently_reduced">Student Accommodation in Bath - 7 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__7_bedroom_flats__by_student_location">Prices for Student Accommodation in Bath - 7 bedroom Flats - By Student Location</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__7_bedroom_flats"> <h2>Prices for Student Accommodation in Bath - 7 bedroom Flats</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£687 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 7 bedroom Flats' onClick={() => routeToPortal("?&beds=7&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__7_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 7 bedroom Flats - All Bills Inclusive</h2></a><p>Living in a 7-bedroom student flat in Bath can be stressful, especially when it comes to managing bills and utilities. However, subscribing to an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b> can make your university experience much more enjoyable. With all bills covered in one convenient package, you can <b>concentrate on your studies</b> without worrying about splitting expenses or dealing with late payments. <b>UniBills.com</b> takes care of everything for you, from electricity and water to internet and TV. Say goodbye to the hassle of managing multiple accounts and enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. To make your student life even easier, why not get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of an <b>all bills inclusive</b> service for your 7-bedroom student flat in Bath.</p><a id = "cheapest_student_accommodation_in_bath__7_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 7 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="7" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__7_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 7 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="7" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__7_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 7 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="7" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__7_bedroom_flats__by_student_location"> <h2>Prices for Student Accommodation in Bath - 7 bedroom Flats - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Widcombe, Bath, Somerset </td><td><button className = 'searchButton' title='View our Widcombe, Bath, Somersets' onClick={() => routeToPortal("?&beds=7&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^26891")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-flats-for-students-in-widcombe-bath' title  = 'View Key Statistics for Widcombe, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>1 </td><td>687 </td><td>687 </td><td>687 </td><td>159 </td><td>159 </td><td>159 </td></tr></table></p><h2>The Conclusion</h2><p>In search of student accommodation in Bath, a 7-bedroom flat offers a spacious and communal living experience, ideal for a group of friends or classmates. With ample room for socializing and studying, these large flats provide a convenient and cost-effective option for student living. Located in close proximity to universities and amenities, students can enjoy easy access to campus and city life. Additionally, sharing a flat with 6 other roommates fosters a sense of community and camaraderie, making the transition to university life smoother and more enjoyable. Overall, renting a 7-bedroom flat in Bath provides a comfortable and supportive living environment for students embarking on their academic journey.</p></>)
};

export default BathFlat7;