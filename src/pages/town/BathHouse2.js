
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import { ViewPortal} from '../../components/ViewPortal/ViewPortal'
import { CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathHouse2 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isMobile,setIsMobile] = useState();    

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

      useEffect(() => {
    const handleWindowSizeChange=() => {
        setIsMobile(window.innerWidth <= 768);            
    }
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
    }, []);
  


    return (<><h1>Student Accommodation in Bath - 2 bedroom Houses</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 2 bedroom Houses</b> for the academic year 2024.

2 bedroom Houses in Bath are ideal for students looking to share accommodation with a friend or classmate. These houses typically offer spacious living areas, multiple bedrooms for privacy, and sometimes even a backyard or garden for relaxing outdoors. Living in a 2 bedroom House in Bath can provide a comfortable and convenient living arrangement for students throughout the academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-2-bedroom-houses.png')} alt='Student Accommodation in Bath - 2 bedroom Houses'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 2 bedroom Houses' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=House&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 2 bedroom Houses</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__2_bedroom_houses_pp/pm">Prices for Student Accommodation in Bath - 2 bedroom Houses pp/pm</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_houses__all_bills_inclusive">Student Accommodation in Bath - 2 bedroom Houses - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__2_bedroom_houses">Cheapest Student Accommodation in Bath - 2 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_houses__recently_added">Student Accommodation in Bath - 2 bedroom Houses - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_houses__recently_reduced">Student Accommodation in Bath - 2 bedroom Houses - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__2_bedroom_houses__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 2 bedroom Houses - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__2_bedroom_houses_in_bath">Student Accommodation Portal - 2 Bedroom Houses in Bath</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_houses__private_rental_sector">Student Accommodation in Bath - 2 bedroom Houses - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_houses__fully_furnished">Student Accommodation in Bath - 2 bedroom Houses - Fully Furnished</a></li><li><a href = "#popular_locations_for_2_bedroom_houses_in_bath">Popular Locations for 2 bedroom Houses in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__2_bedroom_houses_pp/pm"> <h2>Prices for Student Accommodation in Bath - 2 bedroom Houses pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£742 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 2 bedroom Houses' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__2_bedroom_houses__all_bills_inclusive"> <h2>Student Accommodation in Bath - 2 bedroom Houses - All Bills Inclusive</h2></a><p>Living in a 2-bedroom student house in Bath can be overwhelming with the amount of bills and expenses to keep track of. That's why subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can make your life a whole lot easier. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option where everything from utilities to internet is taken care of for you. This means you can <b>concentrate on your studies</b> and social life without the added stress of managing different bills every month. <b>UniBills.com</b> offers transparent pricing and convenient online payment options, saving you time and effort. Say goodbye to budgeting woes and hello to a more convenient living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student life today.</p><a id = "cheapest_student_accommodation_in_bath__2_bedroom_houses"> <h2>Cheapest Student Accommodation in Bath - 2 bedroom Houses</h2></a><p><Portlet location="All" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__2_bedroom_houses__recently_added"> <h2>Student Accommodation in Bath - 2 bedroom Houses - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__2_bedroom_houses__recently_reduced"> <h2>Student Accommodation in Bath - 2 bedroom Houses - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__2_bedroom_houses__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 2 bedroom Houses - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Odd Down, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Odd Down, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^61725")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '2-bedroom-student-houses-in-odd-down-bath' title  = 'View Key Statistics for Odd Down, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>3 </td><td>565 </td><td>675 </td><td>630 </td><td>131 </td><td>156 </td><td>146 </td></tr></table></p><a id = "student_accommodation_portal__2_bedroom_houses_in_bath"> <h2>Student Accommodation Portal - 2 Bedroom Houses in Bath</h2></a><p>Welcome to our property portal, where we make it easy for you to find 2-bedroom student houses in <b>Bath</b>. Whether you are studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, we have a wide range of properties available in popular areas such as <b>Odd Down</b>. Our user-friendly platform allows you to search for the perfect student accommodation that meets your needs and preferences. From cozy cottages to modern apartments, you can browse through a variety of options and find the ideal 2-bedroom house that fits your budget and lifestyle. Let us help you make your student living experience in <b>Bath</b> comfortable and convenient by finding you the perfect place to call home.</p><a id = "student_accommodation_in_bath__2_bedroom_houses__private_rental_sector"> <h2>Student Accommodation in Bath - 2 bedroom Houses - Private Rental Sector</h2></a><p>Are you a student looking for accommodation in Bath? The private rental sector offers a variety of options for <b>2 bedroom student Houses</b>, perfect for sharing with a friend or classmate. Many of these properties come with the convenience of <b>bills included</b>, making budgeting easier for you. Additionally, these houses are usually <b>fully furnished</b>, saving you the hassle of having to buy or transport furniture. Living in a 2 bedroom student house in Bath is a great way to experience independent living while still being close to the city center and university amenities. Don't miss out on the opportunity to secure comfortable and convenient student housing in this beautiful city.</p><a id = "student_accommodation_in_bath__2_bedroom_houses__fully_furnished"> <h2>Student Accommodation in Bath - 2 bedroom Houses - Fully Furnished</h2></a><p>Looking for <b>fully furnished Houses in Bath</b>? Look no further! Our 2 bedroom house in Bath is the perfect option for those looking for a hassle-free living experience. With all the essential furniture and appliances included, you can simply move in and start enjoying your new home right away. In Bath, it is normal for student Houses to be fully furnished, so you can rest assured that our property is equipped with everything you need for a comfortable stay. From cozy living room furniture to a fully equipped kitchen and spacious bedrooms, our house has it all. Plus, with a convenient location near amenities and public transportation, you'll have everything you need within reach.</p><a id = "popular_locations_for_2_bedroom_houses_in_bath"> <h2>Popular Locations for 2 bedroom Houses in Bath</h2></a><h3>Odd Down</h3><p><a href="./2-bedroom-student-houses-in-odd-down-bath" title = "View 2 Bedroom Student Houses in Odd Down, Bath">Odd Down is a residential area located in Bath</a>, 3 miles from the city center. This neighborhood is situated approximately 2 miles away from the <b>University of Bath</b> and is home to many students attending both the <b>University of Bath</b> and <b>Bath Spa University</b>. The lively atmosphere and convenient location make Odd Down a popular choice for students in Bath.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, finding student accommodation in Bath, specifically 2-bedroom houses, can be a challenging yet rewarding experience. By carefully considering factors such as location, budget, and amenities, students can secure a comfortable and convenient living arrangement in this vibrant city. Bath offers a mix of modern and traditional housing options, allowing students to choose based on their preferences and requirements. Be sure to thoroughly research different properties, visit in person if possible, and communicate openly with potential landlords or letting agents. Ultimately, finding the perfect student accommodation in Bath can enhance the overall university experience and create a home away from home for students pursuing their academic goals.</p></>)
};

export default BathHouse2;