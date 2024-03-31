
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


const  BathFlat6 = () => 
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

    return (<><h1>Student Accommodation in Bath - 6 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 6 bedroom Flats</b> for the academic year 2024.
Six-bedroom flats in Bath are a popular choice among students, offering ample space for a group of friends to live together. These flats often come fully furnished and are located in convenient areas close to universities and local amenities.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-6-bedroom-flats.png')} alt='Student Accommodation in Bath - 6 bedroom Flats'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 6 bedroom Flats' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=Flat&beds=6")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 6 bedroom Flats</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__6_bedroom_flats">Prices for Student Accommodation in Bath - 6 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__6_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 6 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__6_bedroom_flats">Cheapest Student Accommodation in Bath - 6 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__6_bedroom_flats__recently_added">Student Accommodation in Bath - 6 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__6_bedroom_flats__recently_reduced">Student Accommodation in Bath - 6 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__6_bedroom_flats__by_student_location">Prices for Student Accommodation in Bath - 6 bedroom Flats - By Student Location</a></li><li><a href = "#student_accommodation_portal__6_bedroom_flats_in_bath">Student Accommodation Portal - 6 Bedroom Flats in Bath</a></li><li><a href = "#student_accommodation_in_bath__6_bedroom_flats__private_rental_sector">Student Accommodation in Bath - 6 bedroom Flats - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__6_bedroom_flats__fully_furnished">Student Accommodation in Bath - 6 bedroom Flats - Fully Furnished</a></li><li><a href = "#popular_locations_for_6_bedroom_flats_in_bath">Popular Locations for 6 bedroom Flats in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__6_bedroom_flats"> <h2>Prices for Student Accommodation in Bath - 6 bedroom Flats</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 6 bedroom Flats' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__6_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 6 bedroom Flats - All Bills Inclusive</h2></a><p>Are you a student living in a 6 bedroom flat in Bath? Managing utility bills can be a hassle when you have assignments and exams to focus on. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the convenience of not having to worry about individual bills every month. Instead, you can <b>concentrate on your studies</b> and have peace of mind knowing that all your bills are taken care of. <b>UniBills.com</b> offers a hassle-free all-inclusive option, ensuring that you can live comfortably without any added stress. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in Bath a smooth and carefree one.</p><a id = "cheapest_student_accommodation_in_bath__6_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 6 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__6_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 6 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__6_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 6 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__6_bedroom_flats__by_student_location"> <h2>Prices for Student Accommodation in Bath - 6 bedroom Flats - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Beechen Cliff, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Beechen Cliff, Bath, Somersets' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '6-bedroom-student-flats-in-beechen-cliff-bath' title  = 'View Key Statistics for Beechen Cliff, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>1 </td><td>775 </td><td>775 </td><td>775 </td><td>180 </td><td>180 </td><td>180 </td></tr></table></p><a id = "student_accommodation_portal__6_bedroom_flats_in_bath"> <h2>Student Accommodation Portal - 6 Bedroom Flats in Bath</h2></a><p>Finding the perfect <b>6 Bedroom Flats</b> in <b>Bath</b> for students can be a daunting task, but with our property portal, the search becomes effortless. <b>Bath</b> is a vibrant city known for its stunning architecture and rich history, making it a popular choice for students. Our portal offers a wide range of student accommodations, including spacious <b>6 Bedroom Flats</b> located in the desirable <b>Beechen Cliff</b> area, just a stone's throw away from the University of <b>Bath</b> and <b>Bath</b> Spa University. These flats are ideal for larger groups of students looking to live together while enjoying the convenience of being close to campus and the city center. With our user-friendly search filters, finding the perfect 6 bedroom flat in <b>Bath</b> has never been easier. Let us help you find your ideal student accommodation in this charming city.</p><a id = "student_accommodation_in_bath__6_bedroom_flats__private_rental_sector"> <h2>Student Accommodation in Bath - 6 bedroom Flats - Private Rental Sector</h2></a><p>In the vibrant city of Bath, finding a spacious and convenient rental property can be a daunting task. Thankfully, the private rental sector offers an array of options, including luxurious <b>6 bedroom student Flats</b> that are perfect for those looking to share accommodation with friends or classmates. These flats come <b>fully furnished</b>, allowing tenants to move in hassle-free and settle into stylish and comfortable surroundings. What's more, many of these properties come with the convenience of <b>bills included</b> in the rent, making budgeting a breeze. Whether you're studying at the University of Bath or Bath Spa University, renting a 6 bedroom flat in Bath's private sector is an excellent choice for those seeking a modern and convenient living space in this historic city.</p><a id = "student_accommodation_in_bath__6_bedroom_flats__fully_furnished"> <h2>Student Accommodation in Bath - 6 bedroom Flats - Fully Furnished</h2></a><p>Are you looking for a spacious and convenient accommodation in Bath? Look no further than our fully furnished 6-bedroom flat located in the heart of the city. This impressive property comes equipped with all the essentials for a comfortable stay, making it the perfect choice for students or professionals alike. In Bath, it is normal for student flats to be fully furnished, and this flat is no exception. Each bedroom is tastefully decorated and includes a bed, wardrobe, desk, and chair. The modern kitchen is fully equipped with appliances, and the cozy living room is the ideal spot to relax and unwind after a long day. With its prime location and top-notch amenities, this fully furnished flat in Bath is sure to exceed your expectations.</p><a id = "popular_locations_for_6_bedroom_flats_in_bath"> <h2>Popular Locations for 6 bedroom Flats in Bath</h2></a><h3>Beechen Cliff</h3><p><a href="./6-bedroom-student-flats-in-beechen-cliff-bath" title = "View 6 Bedroom Student Flats in Beechen Cliff, Bath">Beechen Cliff is a secondary school located in Bath</a>, England. It is situated about 1.5 miles from the city center and approximately 3 miles from the <b>University of Bath</b>. The school is known for its high academic standards and its students often go on to attend prestigious universities such as <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>If you are looking for student accommodation in Bath and specifically considering a 6-bedroom flat, there are a few key points to keep in mind. First and foremost, 6-bedroom flats are a great option for larger groups of friends who want to live together and split the cost of rent and bills. These properties offer more space and privacy compared to smaller accommodations. When searching for a 6-bedroom flat in Bath, it's important to consider the location, amenities, and budget. Look for properties that are close to your university campus, transportation links, and local amenities. Additionally, make sure the flat has all the necessary features such as a fully equipped kitchen, communal area, and enough bathrooms for all residents. Overall, renting a 6-bedroom flat in Bath can be a convenient and cost-effective option for students looking to share accommodation with their peers. With careful consideration and planning, you can find the perfect flat that meets all your needs and preferences.</p></>)
};

export default BathFlat6;