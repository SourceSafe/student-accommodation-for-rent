
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


const  BathFlat10 = () => 
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

    return (<><h1>Student Accommodation in Bath - 10 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 10 bedroom Flats</b> for the academic year 2024. 

<b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 10 bedroom Flats</b> are ideal for groups of students looking to live together while studying in the city. These flats offer spacious living areas, multiple bathrooms, and a communal kitchen for shared meals and socializing. Located in convenient locations near universities and amenities, 10 bedroom flats in Bath provide a comfortable and convenient living arrangement for larger student groups.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-10-bedroom-flats.png')} alt='Student Accommodation in Bath - 10 bedroom Flats'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}> View Available Properties in our Portal</h2><ViewPortal description=" Student Accommodation in Bath - 10 bedroom Flats" portalLink="./" > </ViewPortal><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__10_bedroom_flats">Prices for Student Accommodation in Bath - 10 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 10 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__10_bedroom_flats">Cheapest Student Accommodation in Bath - 10 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__recently_added">Student Accommodation in Bath - 10 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__recently_reduced">Student Accommodation in Bath - 10 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__10_bedroom_flats__by_student_location">Prices for Student Accommodation in Bath - 10 bedroom Flats - By Student Location</a></li><li><a href = "#student_accommodation_portal__10_bedroom_flats_in_bath">Student Accommodation Portal - 10 Bedroom Flats in Bath</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__private_rental_sector">Student Accommodation in Bath - 10 bedroom Flats - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__fully_furnished">Student Accommodation in Bath - 10 bedroom Flats - Fully Furnished</a></li><li><a href = "#popular_locations_for_10_bedroom_flats_in_bath">Popular Locations for 10 bedroom Flats in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__10_bedroom_flats"> <h2>Prices for Student Accommodation in Bath - 10 bedroom Flats</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 10 bedroom Flats' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__10_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 10 bedroom Flats - All Bills Inclusive</h2></a><p>If you're a student with a 10-bedroom flat in Bath, subscribing to an <b>all bills inclusive</b> service can offer you numerous benefits. By choosing <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by their service. With all your utilities, such as gas, electricity, water, and even internet, included in one convenient monthly payment, you can <b>concentrate on your studies</b> without the added stress of managing multiple bills. <b>UniBills.com</b> provides a simple and straightforward solution for students, allowing you to budget effectively and avoid any unexpected costs. Whether you're looking to simplify your living arrangements or avoid the headache of dealing with various service providers, an <b>all bills inclusive</b> service can offer convenience and peace of mind. Get a quote from <b>UniBills.com</b> or any accommodation on this website for an effortless and efficient way to manage your living expenses.</p><a id = "cheapest_student_accommodation_in_bath__10_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 10 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__10_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 10 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__10_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 10 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__10_bedroom_flats__by_student_location"> <h2>Prices for Student Accommodation in Bath - 10 bedroom Flats - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Beechen Cliff, Bath, Somerset </td><td><button className = 'searchButton' title='View our Beechen Cliff, Bath, Somersets' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '10-bedroom-student-flats-in-beechen-cliff-bath' title  = 'View Key Statistics for Beechen Cliff, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>1 </td><td>740 </td><td>740 </td><td>740 </td><td>172 </td><td>172 </td><td>172 </td></tr></table></p><a id = "student_accommodation_portal__10_bedroom_flats_in_bath"> <h2>Student Accommodation Portal - 10 Bedroom Flats in Bath</h2></a><p>Are you in search of a spacious 10-bedroom flat in <b>Bath</b> for you and your friends? Look no further than our property portal, where we specialize in connecting students with the perfect accommodations. <b>Bath</b> is a vibrant city known for its stunning architecture, historic sites, and natural beauty. Imagine living in a 10-bedroom flat overlooking the picturesque <b>Beechen Cliff</b> or being just a short walk away from the prestigious University of <b>Bath</b> or <b>Bath</b> Spa University. Our portal makes it easy to browse through a wide selection of properties, allowing you to find the ideal living situation that meets all your needs. Whether you're seeking a cozy flat with modern amenities or a grand house with plenty of space to entertain, we have options that cater to every preference. With our user-friendly platform and helpful search filters, finding the perfect 10-bedroom flat in <b>Bath</b> has never been easier. Trust us to make your student living experience a memorable and hassle-free one.</p><a id = "student_accommodation_in_bath__10_bedroom_flats__private_rental_sector"> <h2>Student Accommodation in Bath - 10 bedroom Flats - Private Rental Sector</h2></a><p>Looking for accommodation in Bath? Consider renting one of the spacious and convenient <b>10 bedroom student Flats</b> available in the private rental sector. These flats are perfect for large groups of students looking to live together while studying in this beautiful city. With <b>bills included</b> in the rent, you can have peace of mind knowing that all your utilities are taken care of. Additionally, these flats come <b>fully furnished</b>, so you can move in hassle-free and focus on settling into your new home. Enjoy the comfort and convenience of living in a well-maintained property with all the essentials provided. Don't miss out on the opportunity to secure a fantastic living space in Bath's private rental sector.</p><a id = "student_accommodation_in_bath__10_bedroom_flats__fully_furnished"> <h2>Student Accommodation in Bath - 10 bedroom Flats - Fully Furnished</h2></a><p>Looking for a fully furnished 10 bedroom flat in Bath? You're in luck! Bath offers a variety of fully furnished flats, making your move-in process a breeze. Whether you're a student looking for a convenient living arrangement or a large group in need of spacious accommodations, <b>fully furnished Flats in Bath</b> cater to all. With 10 bedrooms, there's plenty of room for everyone to relax and unwind after a long day. From the cozy bedrooms to the sleek living areas, these flats are designed to provide a comfortable and stylish living experience. Plus, it is normal for student flats to be fully furnished, so you can focus on settling in and exploring everything Bath has to offer. Don't miss out on the opportunity to live in a fully furnished 10 bedroom flat in Bath – it's the perfect place to call home.</p><a id = "popular_locations_for_10_bedroom_flats_in_bath"> <h2>Popular Locations for 10 bedroom Flats in Bath</h2></a><h3>Beechen Cliff</h3><p><a href="./10-bedroom-student-flats-in-beechen-cliff-bath" title = "View 10 Bedroom Student Flats in Beechen Cliff, Bath">Beechen Cliff in Bath is a popular school among students in the area</a>. It is located just a few miles from the city center and offers stunning views of the surrounding countryside. The school is also conveniently situated just a few miles away from both the <b>University of Bath</b> and <b>Bath Spa University</b>. Beechen Cliff is approximately 2 miles from the city center, and about 3 miles from the <b>University of Bath</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for student accommodation in Bath can be a challenging task, especially when searching for larger accommodations like 10-bedroom flats. These spacious properties offer plenty of room for a group of students to live together comfortably and affordably. When hunting for such accommodation, it's important to consider factors like location, amenities, and budget. Bath is a vibrant city with a range of options to suit different preferences and requirements. After thorough research and site visits, individuals can make well-informed decisions on the best 10-bedroom flat for their needs. In conclusion, with careful consideration and planning, finding suitable student accommodation in Bath, such as a 10-bedroom flat, can offer a fantastic living experience for a group of students looking to share a space.</p></>)
};

export default BathFlat10;