
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import {CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathHouse5 = () => 
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

    return (<><h1>Student Accommodation in Bath - 5 bedroom Houses</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 5 bedroom Houses</b> for the academic year 2024.
5-bedroom houses in Bath offer spacious living areas perfect for students looking to share accommodation.
These houses typically come fully furnished and are located in convenient locations close to universities and amenities.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bath-5-bedroom-houses.png')} alt='Student Accommodation in Bath - 5 bedroom Houses'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__5_bedroom_houses">Prices for Student Accommodation in Bath - 5 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__all_bills_inclusive">Student Accommodation in Bath - 5 bedroom Houses - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__5_bedroom_houses">Cheapest Student Accommodation in Bath - 5 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__recently_added">Student Accommodation in Bath - 5 bedroom Houses - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__recently_reduced">Student Accommodation in Bath - 5 bedroom Houses - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__5_bedroom_houses__by_student_location">Prices for Student Accommodation in Bath - 5 bedroom Houses - By Student Location</a></li><li><a href = "#student_accommodation_portal__5_bedroom_houses_in_bath">Student Accommodation Portal - 5 Bedroom Houses in Bath</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__private_rental_sector">Student Accommodation in Bath - 5 bedroom Houses - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__fully_furnished">Student Accommodation in Bath - 5 bedroom Houses - Fully Furnished</a></li><li><a href = "#popular_locations_for_5_bedroom_houses_in_bath">Popular Locations for 5 bedroom Houses in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__5_bedroom_houses"> <h2>Prices for Student Accommodation in Bath - 5 bedroom Houses</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£625 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 5 bedroom Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__5_bedroom_houses__all_bills_inclusive"> <h2>Student Accommodation in Bath - 5 bedroom Houses - All Bills Inclusive</h2></a><p>Save yourself the stress of managing multiple utility bills by opting for an <b>all bills inclusive</b> service for your 5-bedroom student house in Bath. <b>UniBills.com</b> offers an easy solution where you can focus on your studies and let them take care of all your bills in one convenient package. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, ensuring that you don't have to worry about budgeting for electricity, water, gas, and other essentials each month. With this service, you can streamline your payments and have peace of mind knowing that everything is taken care of. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience. Focus on what really matters and leave the bill management to the professionals at <b>UniBills.com</b>.</p><a id = "cheapest_student_accommodation_in_bath__5_bedroom_houses"> <h2>Cheapest Student Accommodation in Bath - 5 bedroom Houses</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__5_bedroom_houses__recently_added"> <h2>Student Accommodation in Bath - 5 bedroom Houses - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__5_bedroom_houses__recently_reduced"> <h2>Student Accommodation in Bath - 5 bedroom Houses - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__5_bedroom_houses__by_student_location"> <h2>Prices for Student Accommodation in Bath - 5 bedroom Houses - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-houses-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>136 </td><td>500 </td><td>953 </td><td>626 </td><td>116 </td><td>221 </td><td>145 </td></tr></table></p><a id = "student_accommodation_portal__5_bedroom_houses_in_bath"> <h2>Student Accommodation Portal - 5 Bedroom Houses in Bath</h2></a><p>Are you a student searching for a 5 Bedroom house in <b>Bath</b>? Look no further than our property portal! <b>Bath</b> is a beautiful and historic city popular among students, with areas like <b>Oldfield Park</b> offering a range of accommodation options. With its close proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University, <b>Oldfield Park</b> is a sought-after location for student housing. Our portal makes it easy for you to find the perfect 5 Bedroom house in <b>Bath</b>, whether you're looking for a modern property or a traditional townhouse. Don't waste time scrolling through endless listings - let our platform streamline your search process and connect you with the ideal student accommodation in <b>Bath</b>.</p><a id = "student_accommodation_in_bath__5_bedroom_houses__private_rental_sector"> <h2>Student Accommodation in Bath - 5 bedroom Houses - Private Rental Sector</h2></a><p>Are you looking for a spacious and comfortable living space in Bath? The private rental sector offers a fantastic selection of <b>5 bedroom student Houses</b> that are perfect for sharing with friends or classmates. These properties typically come <b>fully furnished</b>, so you can move in and feel at home right away. One of the great advantages of renting in this sector is that many properties come with <b>bills included</b>, alleviating the stress of managing multiple payments. With plenty of options available in Bath's private rental sector, you can find the perfect 5 bedroom house that meets all your needs and preferences. Whether you're looking for a modern property or a character-filled home, you're sure to find the ideal space for you and your housemates.</p><a id = "student_accommodation_in_bath__5_bedroom_houses__fully_furnished"> <h2>Student Accommodation in Bath - 5 bedroom Houses - Fully Furnished</h2></a><p>Are you looking for a spacious and convenient living space in Bath? Look no further than fully furnished 5 bedroom Houses in Bath. These houses offer all the comforts of home, with stylish furniture and modern amenities throughout. In Bath, it is normal for student Houses to be fully furnished, making it easy for tenants to move in and start enjoying their new space right away. The 5 bedrooms provide plenty of room for housemates or guests, while the communal areas offer the perfect space for relaxation and socializing. Whether you're a student, young professional, or family, a fully furnished 5 bedroom house in Bath is a fantastic option for those seeking comfort and convenience in a vibrant city.</p><a id = "popular_locations_for_5_bedroom_houses_in_bath"> <h2>Popular Locations for 5 bedroom Houses in Bath</h2></a><h3>Oldfield Park</h3><p><a href="./5-bedroom-student-houses-in-oldfield-park-bath" title = "View 5 Bedroom Student Houses in Oldfield Park, Bath">Oldfield Park is a charming suburb in Bath</a>, known for its high population of students attending the <b>University of Bath</b> and <b>Bath Spa University</b>. It is located approximately 1.5 miles from the city center. Oldfield Park is also about 2 miles away from the <b>University of Bath</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>When searching for student accommodation in Bath, 5 bedroom houses offer a fantastic option for those looking to share with a group of friends or other students. These properties provide ample space and comfort, making them ideal for communal living. By opting for a 5 bedroom house, you can enjoy the benefits of shared living areas, such as kitchens, living rooms, and bathrooms, while still having the privacy of your own bedroom. This setup allows for a balance between socializing with housemates and having personal space when needed. Additionally, splitting the rent and bills between five people can often make this type of accommodation more affordable than renting individually. Overall, 5 bedroom houses in Bath make for a practical and enjoyable student living experience, offering a mix of independence and community living.</p></>)
};

export default BathHouse5;