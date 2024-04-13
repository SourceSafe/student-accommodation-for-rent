
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


const  BathHouse9 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isMobile,setIsMobile] = useState();    
    const [viewButtonTitle,setViewButtonTitle] = useState();    

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("townLocationId");
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


      useEffect(() => {        
        isMobile ? setViewButtonTitle("View") : setViewButtonTitle("View Properties") 
    }, [isMobile]);

  
  
  const classNameHideForMobile = isMobile ? 'hideForMobile' : '';

    return (<><h1>Student Accommodation in Bath - 9 bedroom Houses</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 9 bedroom Houses</b> for the academic year 2024.
9 bedroom Houses in Bath are perfect for larger groups of students looking to live together.
These spacious houses offer plenty of room for each student to have their own space while still enjoying the benefits of communal living.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-9-bedroom-houses.png')} alt='Student Accommodation in Bath - 9 bedroom Houses'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 9 bedroom Houses' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=&type=House&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 9 bedroom Houses</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__9_bedroom_houses_pp/pm">Prices for Student Accommodation in Bath - 9 bedroom Houses pp/pm</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_houses__all_bills_inclusive">Student Accommodation in Bath - 9 bedroom Houses - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__9_bedroom_houses">Cheapest Student Accommodation in Bath - 9 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_houses__recently_added">Student Accommodation in Bath - 9 bedroom Houses - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_houses__recently_reduced">Student Accommodation in Bath - 9 bedroom Houses - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__9_bedroom_houses__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 9 bedroom Houses - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__9_bedroom_houses_in_bath">Student Accommodation Portal - 9 Bedroom Houses in Bath</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_houses__private_rental_sector">Student Accommodation in Bath - 9 bedroom Houses - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__9_bedroom_houses__fully_furnished">Student Accommodation in Bath - 9 bedroom Houses - Fully Furnished</a></li><li><a href = "#popular_locations_for_9_bedroom_houses_in_bath">Popular Locations for 9 bedroom Houses in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__9_bedroom_houses_pp/pm"> <h2>Prices for Student Accommodation in Bath - 9 bedroom Houses pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£667 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 9 bedroom Houses' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__9_bedroom_houses__all_bills_inclusive"> <h2>Student Accommodation in Bath - 9 bedroom Houses - All Bills Inclusive</h2></a><p>Forget the stress of managing multiple bills for your 9 bedroom student house in Bath. With <b>UniBills.com</b>, you can enjoy the convenience of an <b>all bills inclusive</b> service. Say goodbye to the headache of tracking down payments and splitting costs between housemates. By opting for the all inclusive package, you can <b>concentrate on your studies</b> and social life without the added worry of budgeting for utilities. <b>UniBills.com</b> takes care of everything for you, from electricity and water to internet and TV licenses. Make your student life easier and more enjoyable by choosing to subscribe to the hassle-free all inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of a stress-free living arrangement.</p><a id = "cheapest_student_accommodation_in_bath__9_bedroom_houses"> <h2>Cheapest Student Accommodation in Bath - 9 bedroom Houses</h2></a><p><Portlet location="All" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__9_bedroom_houses__recently_added"> <h2>Student Accommodation in Bath - 9 bedroom Houses - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__9_bedroom_houses__recently_reduced"> <h2>Student Accommodation in Bath - 9 bedroom Houses - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__9_bedroom_houses__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 9 bedroom Houses - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Count </th><th className = {classNameHideForMobile}>Min monthly </th><th>Max monthly </th><th className = {classNameHideForMobile}>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Avon Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Avon Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '9-bedroom-student-houses-in-avon-park-bath' title  = 'View Key Statistics for Avon Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>2 </td><td className = {classNameHideForMobile}>580 </td><td>760 </td><td className = {classNameHideForMobile}>670 </td><td className = {classNameHideForMobile}>134 </td><td>176 </td><td>155 </td></tr></table></p><a id = "student_accommodation_portal__9_bedroom_houses_in_bath"> <h2>Student Accommodation Portal - 9 Bedroom Houses in Bath</h2></a><p>Are you looking for the perfect 9 bedroom house for you and your friends in <b>Bath</b>? Look no further than our property portal, where you can find a wide selection of spacious and comfortable properties in the <b>Avon Park</b> area, conveniently located near the University of <b>Bath</b> and <b>Bath</b> Spa University. Whether you're studying or just looking for a place to call home, our portal makes it easy to browse through listings, compare prices, and find the ideal house that fits your needs. With various amenities and features available, you can rest assured that you'll find a place that suits your lifestyle and budget.</p><a id = "student_accommodation_in_bath__9_bedroom_houses__private_rental_sector"> <h2>Student Accommodation in Bath - 9 bedroom Houses - Private Rental Sector</h2></a><p>Are you a student looking for a spacious and comfortable living arrangement in Bath? Look no further than our selection of <b>9 bedroom student Houses</b> in the private rental sector. These properties offer the perfect balance of convenience and comfort with all <b>bills included</b>, so you can focus on your studies without any added stress. Each house is <b>fully furnished</b> with everything you need for a seamless transition into your new home. Say goodbye to the hassle of setting up utilities and furnishing your space – our <b>9 bedroom student Houses</b> in Bath have got you covered. Reach out to book a viewing and secure your dream student accommodation today.</p><a id = "student_accommodation_in_bath__9_bedroom_houses__fully_furnished"> <h2>Student Accommodation in Bath - 9 bedroom Houses - Fully Furnished</h2></a><p>Looking for the perfect fully furnished 9 bedroom house in Bath? Look no further! Bath is a beautiful city with a rich history and vibrant culture, making it an ideal location for students and professionals alike. When it comes to finding a place to call home, <b>fully furnished Houses in Bath</b> are a popular choice. With 9 bedrooms, this spacious house has plenty of room for you and your housemates to live comfortably. From cozy bedrooms to a well-equipped kitchen and a stylish living room, this house has everything you need for a comfortable and convenient living experience. In Bath, it is normal for student houses to be fully furnished, saving you the hassle of buying and moving furniture.</p><a id = "popular_locations_for_9_bedroom_houses_in_bath"> <h2>Popular Locations for 9 bedroom Houses in Bath</h2></a><h3>Avon Park</h3><p><a href="./9-bedroom-student-houses-in-avon-park-bath" title = "View 9 Bedroom Student Houses in Avon Park, Bath">Avon Park is a popular student accommodation located in Bath</a>, just a few miles from the city center. It is conveniently situated close to both the <b>University of Bath</b> and <b>Bath Spa University</b>, making it an ideal choice for students studying at these institutions. Avon Park is approximately 2 miles away from the city center and around 3 miles away from the <b>University of Bath</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Searching for student accommodation in Bath can be a challenging task, especially when looking for a 9-bedroom house. With a limited supply of larger properties in popular student areas, competition can be fierce. However, with careful planning and early research, students can secure a spacious and comfortable living arrangement with their peers. Considering factors such as location, budget, and amenities is crucial when making a decision. It's important to view multiple properties and negotiate rental terms before committing to a lease. In conclusion, the process of finding a 9-bedroom student house in Bath may require patience and persistence, but the reward of living in a communal setting with plenty of space for socializing and studying makes the search worthwhile.</p></>)
};

export default BathHouse9;