
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom, isDesktopAtom} from '../../portal/appState/appState'
import { ViewPortal} from '../../components/ViewPortal/ViewPortal'
import { CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathFlat4 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isDesktop] = useAtomState(isDesktopAtom);

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

    return (<><h1>Student Accommodation in Bath - 4 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 4 bedroom Flats</b> for the academic year 2024.
4 bedroom Flats in Bath are perfect for students looking to live with a group of friends or fellow students.
These spacious flats offer ample space for studying, relaxing, and socializing, creating a comfortable living environment for students.</p><div style = {{display:'flex', flexDirection:'row'}}>{isDesktop && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-4-bedroom-flats.png')} alt='Student Accommodation in Bath - 4 bedroom Flats'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 4 bedroom Flats' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=Flat&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 4 bedroom Flats</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__4_bedroom_flats_pp/pm">Prices for Student Accommodation in Bath - 4 bedroom Flats pp/pm</a></li><li><a href = "#student_accommodation_in_bath__4_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 4 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__4_bedroom_flats">Cheapest Student Accommodation in Bath - 4 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__4_bedroom_flats__recently_added">Student Accommodation in Bath - 4 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__4_bedroom_flats__recently_reduced">Student Accommodation in Bath - 4 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__4_bedroom_flats__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 4 bedroom Flats - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__4_bedroom_flats_in_bath">Student Accommodation Portal - 4 Bedroom Flats in Bath</a></li><li><a href = "#student_accommodation_in_bath__4_bedroom_flats__private_rental_sector">Student Accommodation in Bath - 4 bedroom Flats - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__4_bedroom_flats__fully_furnished">Student Accommodation in Bath - 4 bedroom Flats - Fully Furnished</a></li><li><a href = "#popular_locations_for_4_bedroom_flats_in_bath">Popular Locations for 4 bedroom Flats in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__4_bedroom_flats_pp/pm"> <h2>Prices for Student Accommodation in Bath - 4 bedroom Flats pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£664 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 4 bedroom Flats' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__4_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 4 bedroom Flats - All Bills Inclusive</h2></a><p>Are you tired of dealing with multiple bills every month for your student accommodation in Bath? Say goodbye to the stress of managing different utility providers and expenses by opting for an <b>all bills inclusive</b> service with <b>UniBills.com</b>. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, allowing you to <b>concentrate on your studies</b> without the added worry of budgeting for bills. Imagine the convenience of having your rent, electricity, water, internet, and other essential services all bundled into one simple monthly payment. No more unexpected charges or disputes over who owes what - <b>UniBills.com</b> takes care of it all for you. Simplify your student life and enhance your living experience by choosing an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any other accommodation on this website today to start enjoying the benefits of a stress-free living arrangement.</p><a id = "cheapest_student_accommodation_in_bath__4_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 4 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__4_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 4 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__4_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 4 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__4_bedroom_flats__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 4 bedroom Flats - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Avon Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Avon Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-flats-in-avon-park-bath' title  = 'View Key Statistics for Avon Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>7 </td><td>610 </td><td>850 </td><td>701 </td><td>141 </td><td>197 </td><td>163 </td></tr></table></p><a id = "student_accommodation_portal__4_bedroom_flats_in_bath"> <h2>Student Accommodation Portal - 4 Bedroom Flats in Bath</h2></a><p>Welcome to our property portal, your go-to destination for finding <b>4 Bedroom Flats</b> in <b>Bath</b>. <b>Bath</b> is a picturesque city located in <b>Avon Park</b>, known for its stunning Georgian architecture, Roman-built <b>Bath</b>s, and vibrant student community. With institutions like the University of <b>Bath</b> and <b>Bath</b> Spa University attracting students from all over the world, the demand for student accommodation is high. Whether you're searching for a comfortable flat for you and your friends or looking for a property investment opportunity, our portal has you covered. Explore our listings for spacious <b>4 Bedroom Flats</b> in desirable locations near the universities, ensuring a convenient and vibrant student lifestyle. Don't miss out on the chance to secure your ideal student accommodation in <b>Bath</b> with our user-friendly property portal.</p><a id = "student_accommodation_in_bath__4_bedroom_flats__private_rental_sector"> <h2>Student Accommodation in Bath - 4 bedroom Flats - Private Rental Sector</h2></a><p>Looking for a comfortable and convenient living arrangement in Bath? The private rental sector offers a variety of <b>4 bedroom student Flats</b> that cater to those seeking spacious and stylish accommodation. Many of these properties come <b>fully furnished</b>, making the move-in process a breeze. With <b>bills included</b> in the rent, tenants can enjoy peace of mind knowing that their utilities are taken care of. These flats are ideal for students or professionals looking to share a space with friends or colleagues while still having their own private bedroom. Whether you're studying at the University of Bath or working in the city, a 4 bedroom flat in Bath's private rental sector offers a great solution for those looking for a modern and hassle-free living experience.</p><a id = "student_accommodation_in_bath__4_bedroom_flats__fully_furnished"> <h2>Student Accommodation in Bath - 4 bedroom Flats - Fully Furnished</h2></a><p>If you're looking for a spacious and hassle-free living arrangement in Bath, fully furnished 4 bedroom flats in Bath are an excellent option to consider. These flats come equipped with everything you need for comfortable living, from furniture to kitchen appliances and bedding. In a city where space can be limited, having a fully furnished flat ensures that you can move in and start living without worrying about buying or transporting bulky furniture. This is especially convenient for students, as it is normal for student flats to be fully furnished, saving time and effort during the hectic moving process. Whether you're a student looking for a cozy and convenient living space or a family seeking a comfortable home in Bath, fully furnished flats provide the perfect solution for a stress-free living experience.</p><a id = "popular_locations_for_4_bedroom_flats_in_bath"> <h2>Popular Locations for 4 bedroom Flats in Bath</h2></a><h3>Avon Park</h3><p><a href="./4-bedroom-student-flats-in-avon-park-bath" title = "View 4 Bedroom Student Flats in Avon Park, Bath">Avon Park is a popular student accommodation option in Bath</a>, located just a few miles from the city center. It is also conveniently situated a short distance away from both the <b>University of Bath</b> and <b>Bath Spa University</b>, making it an ideal choice for students studying at these institutions. Avon Park is approximately 2 miles from the city center and 3 miles from the <b>University of Bath</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, finding student accommodation in Bath can be a challenging yet rewarding experience, especially when looking for a 4-bedroom flat to share with friends. With its vibrant student community and proximity to the University of Bath and Bath Spa University, the city offers a range of housing options to suit different preferences and budgets. When searching for a 4-bedroom flat, it is important to consider factors such as location, rent prices, facilities, and contract terms. Ensuring good communication and cooperation among flatmates is essential for a harmonious living experience. Ultimately, a well-thought-out search process and thorough consideration of all aspects can lead to finding the perfect 4-bedroom flat in Bath for a comfortable and enjoyable student life.</p></>)
};

export default BathFlat4;