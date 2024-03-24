
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


const  BathFlat9 = () => 
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

    return (<><h1>Student Accommodation in Bath - 9 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 9 bedroom Flats</b> for the academic year 2024.

9 bedroom Flats in Bath are perfect for large groups of students looking to live together. These spacious accommodations offer plenty of shared living space, making them ideal for socializing and studying together. Additionally, living in a 9 bedroom Flat can be a cost-effective option when splitting the rent amongst multiple roommates.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bath-9-bedroom-flats.png')} alt='Student Accommodation in Bath - 9 bedroom Flats'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__9_bedroom_flats">Prices for Student Accommodation in Bath - 9 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 9 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__9_bedroom_flats">Cheapest Student Accommodation in Bath - 9 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_flats__recently_added">Student Accommodation in Bath - 9 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_flats__recently_reduced">Student Accommodation in Bath - 9 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__9_bedroom_flats__by_student_location">Prices for Student Accommodation in Bath - 9 bedroom Flats - By Student Location</a></li><li><a href = "#student_accommodation_portal__9_bedroom_flats_in_bath">Student Accommodation Portal - 9 Bedroom Flats in Bath</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_flats__private_rental_sector">Student Accommodation in Bath - 9 bedroom Flats - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_flats__fully_furnished">Student Accommodation in Bath - 9 bedroom Flats - Fully Furnished</a></li><li><a href = "#popular_locations_for_9_bedroom_flats_in_bath">Popular Locations for 9 bedroom Flats in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__9_bedroom_flats"> <h2>Prices for Student Accommodation in Bath - 9 bedroom Flats</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 9 bedroom Flats' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__9_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 9 bedroom Flats - All Bills Inclusive</h2></a><p>Tired of dealing with multiple utility bills every month for your 9-bedroom student flat in Bath? Say goodbye to the hassle and stress of handling bills individually by subscribing to an <b>all bills inclusive</b> service provided by <b>UniBills.com</b>. With this convenient option, you can <b>concentrate on your studies</b> and social life without worrying about paying different bills on time. <b>UniBills.com</b> offers a seamless and transparent solution to managing your living expenses, allowing you to budget effectively and avoid unexpected costs. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and simplify your student living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student life in Bath more convenient and enjoyable.</p><a id = "cheapest_student_accommodation_in_bath__9_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 9 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__9_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 9 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__9_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 9 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__9_bedroom_flats__by_student_location"> <h2>Prices for Student Accommodation in Bath - 9 bedroom Flats - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Beechen Cliff, Bath, Somerset </td><td><button className = 'searchButton' title='View our Beechen Cliff, Bath, Somersets' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '9-bedroom-student-flats-in-beechen-cliff-bath' title  = 'View Key Statistics for Beechen Cliff, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>1 </td><td>700 </td><td>700 </td><td>700 </td><td>162 </td><td>162 </td><td>162 </td></tr></table></p><a id = "student_accommodation_portal__9_bedroom_flats_in_bath"> <h2>Student Accommodation Portal - 9 Bedroom Flats in Bath</h2></a><p>Are you looking for spacious and comfortable student accommodation in <b>Bath</b>? Look no further than our property portal, where you can find a range of <b>9 Bedroom Flats</b> perfect for student living. Situated in the picturesque city of <b>Bath</b>, these flats are ideal for large groups of students looking to live together. Located near popular areas like <b>Beechen Cliff</b>, these properties offer convenient access to both the University of <b>Bath</b> and <b>Bath</b> Spa University. With plenty of room for studying, socializing, and relaxing, these <b>9 Bedroom Flats</b> provide the perfect environment for students to thrive in their academic and social endeavors. Don't miss out on the opportunity to secure your ideal student accommodation in <b>Bath</b> through our property portal today.</p><a id = "student_accommodation_in_bath__9_bedroom_flats__private_rental_sector"> <h2>Student Accommodation in Bath - 9 bedroom Flats - Private Rental Sector</h2></a><p>Are you looking for the perfect accommodation for you and your friends in Bath? Look no further than our selection of <b>9 bedroom student Flats</b> in the heart of the city. Our flats are not only conveniently located near universities and local amenities, but they also come <b>fully furnished</b> to make your move-in process a breeze. With <b>bills included</b> in the rent, you can enjoy a stress-free living experience without worrying about extra expenses. Whether you're studying, socializing, or simply relaxing in your own space, our 9 bedroom flats provide the ideal setting for your college years. Don't miss out on the opportunity to live in comfort and convenience – contact us today to secure your spot in one of our highly sought-after properties.</p><a id = "student_accommodation_in_bath__9_bedroom_flats__fully_furnished"> <h2>Student Accommodation in Bath - 9 bedroom Flats - Fully Furnished</h2></a><p>If you are searching for a spacious and convenient living arrangement in Bath, look no further than our fully furnished 9-bedroom flat. Located in the heart of the city, our flat offers the perfect blend of comfort and style. Each bedroom comes fully equipped with all the essential furniture and amenities, allowing you to move in hassle-free and start enjoying your new space right away. From cozy beds and study desks to ample storage space and stylish decor, our fully furnished flat has everything you need for a comfortable stay. In Bath, it is normal for student flats to be fully furnished, so you can rest assured that our flat meets the highest standards. Whether you are a student looking for a convenient living arrangement or a group of friends planning to share a flat, our fully furnished 9-bedroom flat in Bath is the perfect choice for you. Don't miss out on this fantastic opportunity to live in style and comfort in one of the most vibrant cities in the UK.</p><a id = "popular_locations_for_9_bedroom_flats_in_bath"> <h2>Popular Locations for 9 bedroom Flats in Bath</h2></a><h3>Beechen Cliff</h3><p><a href="./9-bedroom-student-flats-in-beechen-cliff-bath" title = "View 9 Bedroom Student Flats in Beechen Cliff, Bath">Beechen Cliff is a prominent secondary school in Bath</a>, England, known for its strong academic programs and high achieving students. Located just 1.5 miles from the city center, Beechen Cliff is conveniently situated for students and teachers alike. Additionally, Beechen Cliff is only 2 miles away from the prestigious <b>University of Bath</b> and 3 miles from <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, finding student accommodation in Bath can be a daunting task, but opting for a 9-bedroom flat can offer numerous benefits. These spacious living arrangements provide a sense of community and camaraderie among flatmates, making it easier to adjust to the student lifestyle. The central location of these flats allows for easy access to the university, libraries, and amenities such as shops and restaurants. Additionally, splitting the rent and utility costs among nine people can result in significant savings compared to living alone or in smaller accommodations. Overall, choosing a 9-bedroom flat for student accommodation in Bath can be a practical and social solution for those looking for a comfortable and affordable living space during their time at university.</p></>)
};

export default BathFlat9;