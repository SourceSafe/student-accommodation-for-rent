
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import {ViewPortal} from '../../components/ViewPortal/ViewPortal'
import {CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathHouse = () => 
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

    return (<><h1>Student Houses in Bath</h1><p>We have listings for <b>Student Houses in Bath</b> for the academic year 2024. 
<b>Student Houses in Bath</b> offer students a convenient and cozy living environment during their academic year. With various options available, students can find the perfect accommodation to suit their needs and budget.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-houses-in-bath.png')} alt='Student Houses in Bath'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}> View Available Properties in our Portal</h2><ViewPortal description=" Student Houses in Bath" portalLink="./" > </ViewPortal><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_houses_in_bath">Prices for Student Houses in Bath</a></li><li><a href = "#student_houses_in_bath__all_bills_inclusive">Student Houses in Bath - All Bills Inclusive</a></li><li><a href = "#prices_for_student_houses_in_bath__by_number_of_bedrooms">Prices for Student Houses in Bath - By Number of Bedrooms</a></li><li><a href = "#prices_for_student_houses_in_bath__by_student_location">Prices for Student Houses in Bath - By Student Location</a></li><li><a href = "#student_houses_in_bath__private_rental_houses">Student Houses in Bath - Private Rental Houses</a></li><li><a href = "#furnished_houses_inbath">Furnished Houses inBath</a></li><li><a href = "#bath_student_house_portal">Bath Student House Portal</a></li><li><a href = "#bath_student_houses_self_catering">Bath Student Houses Self Catering</a></li><li><a href = "#find_student_houses_close_to__bath_city_center">Find Student Houses close to  Bath City Center</a></li><li><a href = "#find_student_houses_near_the_universities">Find Student Houses near the Universities</a></li><li><a href = "#cheapest_student_houses_in_bath">Cheapest Student Houses in Bath</a></li><li><a href = "#student_houses_in_bath__recently_added">Student Houses in Bath - Recently Added</a></li><li><a href = "#student_houses_in_bath__recently_reduced">Student Houses in Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_houses_in_bath"> <h2>Prices for Student Houses in Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£641 per month </td><td><button className = 'searchButton' title='View our Student Houses in Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_houses_in_bath__all_bills_inclusive"> <h2>Student Houses in Bath - All Bills Inclusive</h2></a><p>Are you a student living in Bath and tired of dealing with individual utility bills for your house? Look no further! <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that allows you to <b>concentrate on your studies</b> without the stress of managing multiple household bills. By subscribing to <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, which covers everything from electricity and water to internet and TV licenses. Say goodbye to the constant juggle of bills and hello to a more streamlined living experience. Get a quote from UniBills.</p><a id = "prices_for_student_houses_in_bath__by_number_of_bedrooms"> <h2>Prices for Student Houses in Bath - By Number of Bedrooms</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>2 Bed House </td><td><button className = 'searchButton' title='View our 2 Bed Houses' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-2-bedroom-houses' title  = 'View Key Statistics for 2 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£565 </td><td>£1183 </td><td>£742 </td><td>£131 </td><td>£275 </td><td>£172 </td></tr><tr><td>3 Bed House </td><td><button className = 'searchButton' title='View our 3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-3-bedroom-houses' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£717 </td><td>£612 </td><td>£120 </td><td>£166 </td><td>£142 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton' title='View our 4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-4-bedroom-houses' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£450 </td><td>£998 </td><td>£604 </td><td>£104 </td><td>£232 </td><td>£140 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton' title='View our 5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-5-bedroom-houses' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£450 </td><td>£953 </td><td>£625 </td><td>£104 </td><td>£221 </td><td>£145 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton' title='View our 6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-6-bedroom-houses' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£533 </td><td>£1127 </td><td>£686 </td><td>£123 </td><td>£262 </td><td>£159 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton' title='View our 7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-7-bedroom-houses' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£810 </td><td>£667 </td><td>£127 </td><td>£188 </td><td>£155 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton' title='View our 8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-8-bedroom-houses' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£953 </td><td>£674 </td><td>£127 </td><td>£221 </td><td>£156 </td></tr><tr><td>9 Bed House </td><td><button className = 'searchButton' title='View our 9 Bed Houses' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-9-bedroom-houses' title  = 'View Key Statistics for 9 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£580 </td><td>£760 </td><td>£667 </td><td>£134 </td><td>£176 </td><td>£155 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton' title='View our 10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-10-bedroom-houses' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£680 </td><td>£610 </td><td>£125 </td><td>£158 </td><td>£141 </td></tr></table></p><a id = "prices_for_student_houses_in_bath__by_student_location"> <h2>Prices for Student Houses in Bath - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-houses-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>437 </td><td>475 </td><td>1207 </td><td>647 </td><td>110 </td><td>280 </td><td>150 </td></tr></table></p><a id = "student_houses_in_bath__private_rental_houses"> <h2>Student Houses in Bath - Private Rental Houses</h2></a><p>Looking for private rental houses in Bath? Look no further! Whether you're a student in search of <b>private student houses</b> or a professional looking for a <b>2 - 10 bedroom house</b>, Bath has a variety of rental options to suit your needs. You can also find cozy <b>studio apartment</b>s perfect for singles or couples. Many of these rental properties come with the convenience of <b>bills included</b>, making budgeting a breeze. Additionally, these houses and apartments are often <b>fully furnished</b>, saving you the hassle of buying and moving furniture. With a range of options available, you're sure to find the perfect private rental house in Bath to call home.</p><a id = "furnished_houses_inbath"> <h2>Furnished Houses inBath</h2></a><p>At Bath, all student houses are <b>fully furnished</b> to ensure that students have everything they need for a comfortable living experience. From cozy sofas to study desks and chairs, each house is equipped with all the essentials to make students feel right at home. It is normal for student houses to be <b>fully furnished</b>, allowing students to focus on their studies and social life without the hassle of purchasing and moving bulky furniture. With bedrooms furnished with beds, wardrobes, and bedside tables, students can relax and unwind in their own private space. The shared living areas are also furnished with dining tables, chairs, and sofas for students to socialize and bond with their housemates. By providing <b>fully furnished</b> houses, Bath aims to create a welcoming and convenient environment for students to thrive academically and personally.</p><a id = "bath_student_house_portal"> <h2>Bath Student House Portal</h2></a><p>Are you a student looking for the perfect place to call home in Bath? Look no further than our property portal, where you can easily find your dream student house in the sought-after area of <b><b>Oldfield Park</b></b>. Situated close to both the <b><b>University of Bath</b></b> and <b><b>Bath Spa University</b></b>, <b><b>Oldfield Park</b></b> is a popular choice for students seeking convenient access to campus and the vibrant city center. With a range of properties available, from cosy studios to spacious shared houses, you can find the ideal accommodation to suit your needs and budget. Whether you prefer to live solo or with housemates, our portal offers a variety of options to cater to your preferences. Say goodbye to the hassle of endless house hunting and let us help you secure the perfect student house in Bath today.</p><a id = "bath_student_houses_self_catering"> <h2>Bath Student Houses Self Catering</h2></a><p>Are you a student looking for accommodation in Bath? Look no further than living in self-catering student houses. Leasing a self-catering student house in Bath offers a sense of independence and the freedom to manage your own schedule and meals. These properties are often conveniently located near universities, making it easy to commute to classes. With fully equipped kitchens, you can cook your favorite meals, save money on dining out, and enjoy a home-cooked meal with your housemates. Living in a self-catering student house also fosters a sense of community as you share common areas like the living room and garden. This accommodation option provides a balance of privacy and social interaction, creating a supportive environment for your academic journey.</p><a id = "find_student_houses_close_to__bath_city_center"> <h2>Find Student Houses close to  Bath City Center</h2></a><p>Looking for student accommodation near <b>Bath</b> city center? Look no further than our portal Student Accommodation For Rent. <b>Bath</b>, a vibrant city known for its historic architecture and natural hot springs, offers a range of student houses ideally located for easy access to the city's amenities. Whether you prefer the hustle and bustle of the city center or the relaxed vibe of the surrounding areas like <b>Oldfield Park</b>, our portal has options to suit your needs. With most properties within a few <b>miles</b> of <b>Bath</b> city center, you'll never be far from shops, restaurants, and entertainment options.</p><a id = "find_student_houses_near_the_universities"> <h2>Find Student Houses near the Universities</h2></a><p>Looking for student accommodation near the <b>University of Bath</b> or <b>Bath Spa University</b>? Look no further than the vibrant neighborhood of <b>Oldfield Park</b>. Situated just a few <b>miles</b> away from both universities, <b>Oldfield Park</b> is a popular choice for students due to its convenient location. Many student houses in this area are within walking distance to campus, making it easy to commute <b>by foot</b>. For those who prefer public transportation, there are regular bus services connecting <b>Oldfield Park</b> to both universities. If you have a car, driving to campus is also an option and can be quite convenient. With its lively atmosphere, diverse amenities, and proximity to the universities, <b>Oldfield Park</b> is a top choice for students looking for a comfortable and accessible place to live during their studies.</p><a id = "cheapest_student_houses_in_bath"> <h2>Cheapest Student Houses in Bath</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_bath__recently_added"> <h2>Student Houses in Bath - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_bath__recently_reduced"> <h2>Student Houses in Bath - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After embarking on the journey of searching for student houses in Bath, it is evident that thorough research and preparation are key to securing the ideal accommodation. With a plethora of options available, students must carefully consider their priorities such as budget, location, and amenities before making a decision. Visiting multiple properties and asking pertinent questions to landlords or property managers can provide valuable insight into what each residence has to offer. Furthermore, collaboration with potential housemates can help in narrowing down choices and ensuring everyone's needs are met. In conclusion, finding a student house in Bath can be a rewarding experience when approached with diligence and organization. By utilizing online platforms, attending viewings, and communicating effectively with housemates, students can secure a comfortable and suitable living space to enhance their university experience.</p></>)
};

export default BathHouse;