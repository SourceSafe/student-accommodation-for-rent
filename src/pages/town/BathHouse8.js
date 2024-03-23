
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


const  BathHouse8 = () => 
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

    return (<><h1>Student Accommodation in Bath - 8 bedroom Houses</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 8 bedroom Houses</b> for the academic year 2024. 
8 bedroom Houses in Bath are perfect for larger groups of students looking to live together. These spacious houses provide ample room for each student to have their own space while still enjoying communal areas for socializing and studying. With multiple bathrooms and a well-equipped kitchen, 8 bedroom Houses offer convenience and comfort for student living in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bath-8-bedroom-houses.png')} alt='Student Accommodation in Bath - 8 bedroom Houses'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__8_bedroom_houses">Prices for Student Accommodation in Bath - 8 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__8_bedroom_houses__all_bills_inclusive">Student Accommodation in Bath - 8 bedroom Houses - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__8_bedroom_houses">Cheapest Student Accommodation in Bath - 8 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__8_bedroom_houses__recently_added">Student Accommodation in Bath - 8 bedroom Houses - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__8_bedroom_houses__recently_reduced">Student Accommodation in Bath - 8 bedroom Houses - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__8_bedroom_houses__by_student_location">Prices for Student Accommodation in Bath - 8 bedroom Houses - By Student Location</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__8_bedroom_houses"> <h2>Prices for Student Accommodation in Bath - 8 bedroom Houses</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£674 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 8 bedroom Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__8_bedroom_houses__all_bills_inclusive"> <h2>Student Accommodation in Bath - 8 bedroom Houses - All Bills Inclusive</h2></a><p>Living in a bustling student house in Bath can be both exciting and challenging, especially when it comes to managing bills. Instead of juggling different accounts for electricity, water, internet, and more, why not simplify your life with an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without the stress of utility payments. Imagine the convenience of having everything rolled into one easy monthly fee. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, knowing that all your bills are taken care of. Say goodbye to dividing expenses among housemates or chasing down late payments. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath a whole lot easier. Opt for simplicity and peace of mind with an <b>all bills inclusive</b> service today.</p><a id = "cheapest_student_accommodation_in_bath__8_bedroom_houses"> <h2>Cheapest Student Accommodation in Bath - 8 bedroom Houses</h2></a><p><Portlet location="All" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__8_bedroom_houses__recently_added"> <h2>Student Accommodation in Bath - 8 bedroom Houses - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__8_bedroom_houses__recently_reduced"> <h2>Student Accommodation in Bath - 8 bedroom Houses - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__8_bedroom_houses__by_student_location"> <h2>Prices for Student Accommodation in Bath - 8 bedroom Houses - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>6 </td><td>550 </td><td>953 </td><td>689 </td><td>127 </td><td>221 </td><td>160 </td></tr><tr><td>Bath Spa, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bath Spa, Bath, Somersets' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for Bath Spa, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>4 </td><td>550 </td><td>717 </td><td>613 </td><td>127 </td><td>166 </td><td>142 </td></tr><tr><td>Southdown, Bath, Somerset </td><td><button className = 'searchButton' title='View our Southdown, Bath, Somersets' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^22627")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-southdown-bath' title  = 'View Key Statistics for Southdown, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>3 </td><td>643 </td><td>953 </td><td>748 </td><td>149 </td><td>221 </td><td>173 </td></tr><tr><td>Bloomfield, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bloomfield, Bath, Somersets' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for Bloomfield, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>2 </td><td>643 </td><td>953 </td><td>798 </td><td>149 </td><td>221 </td><td>185 </td></tr><tr><td>Kingsway, Bath, Somerset </td><td><button className = 'searchButton' title='View our Kingsway, Bath, Somersets' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for Kingsway, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>2 </td><td>643 </td><td>953 </td><td>798 </td><td>149 </td><td>221 </td><td>185 </td></tr></table></p><h2>The Conclusion</h2><p>After thoroughly researching and exploring the student accommodation options in Bath, it is clear that 8-bedroom houses offer a spacious and communal living experience for students. These properties provide ample space for socializing and studying with housemates in a comfortable setting. The range of 8-bedroom houses available cater to different budgets and preferences, making it easier for students to find a suitable home away from home. From modern amenities to convenient locations near universities and local amenities, these houses offer a well-rounded living experience. Overall, looking for student accommodation in Bath with 8 bedrooms is a worthwhile venture for those seeking a vibrant and student-friendly environment to call their own.</p></>)
};

export default BathHouse8;