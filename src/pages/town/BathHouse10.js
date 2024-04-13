
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


const  BathHouse10 = () => 
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

    return (<><h1>Student Accommodation in Bath - 10 bedroom Houses</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 10 bedroom Houses</b> for the academic year 2024. 
10 bedroom Houses in Bath are popular options for students looking to live together with a large group of friends or classmates. These spacious houses offer ample room for socializing and studying, making them ideal for the academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-10-bedroom-houses.png')} alt='Student Accommodation in Bath - 10 bedroom Houses'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 10 bedroom Houses' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=&type=House&beds=10")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 10 bedroom Houses</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__10_bedroom_houses_pp/pm">Prices for Student Accommodation in Bath - 10 bedroom Houses pp/pm</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_houses__all_bills_inclusive">Student Accommodation in Bath - 10 bedroom Houses - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__10_bedroom_houses">Cheapest Student Accommodation in Bath - 10 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_houses__recently_added">Student Accommodation in Bath - 10 bedroom Houses - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_houses__recently_reduced">Student Accommodation in Bath - 10 bedroom Houses - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__10_bedroom_houses__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 10 bedroom Houses - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__10_bedroom_houses_in_bath">Student Accommodation Portal - 10 Bedroom Houses in Bath</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_houses__private_rental_sector">Student Accommodation in Bath - 10 bedroom Houses - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_houses__fully_furnished">Student Accommodation in Bath - 10 bedroom Houses - Fully Furnished</a></li><li><a href = "#popular_locations_for_10_bedroom_houses_in_bath">Popular Locations for 10 bedroom Houses in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__10_bedroom_houses_pp/pm"> <h2>Prices for Student Accommodation in Bath - 10 bedroom Houses pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£610 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 10 bedroom Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__10_bedroom_houses__all_bills_inclusive"> <h2>Student Accommodation in Bath - 10 bedroom Houses - All Bills Inclusive</h2></a><p>Are you a student living in a 10-bedroom house in Bath? Managing bills and utilities for such a large property can be a real headache, taking away precious time that could be better spent on studying. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free option of having all your bills taken care of in one convenient package. With <b>UniBills.com</b>, you no longer have to worry about splitting costs with your housemates or chasing them for payments. Instead, you can <b>concentrate on your studies</b> and let <b>UniBills.com</b> handle the rest. Get a quote from UniBills.</p><a id = "cheapest_student_accommodation_in_bath__10_bedroom_houses"> <h2>Cheapest Student Accommodation in Bath - 10 bedroom Houses</h2></a><p><Portlet location="All" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__10_bedroom_houses__recently_added"> <h2>Student Accommodation in Bath - 10 bedroom Houses - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__10_bedroom_houses__recently_reduced"> <h2>Student Accommodation in Bath - 10 bedroom Houses - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__10_bedroom_houses__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 10 bedroom Houses - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Count </th><th className = {classNameHideForMobile}>Min monthly </th><th>Max monthly </th><th className = {classNameHideForMobile}>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Bailbrook, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Bailbrook, Bath, Somersets' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71092")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '10-bedroom-student-houses-in-bailbrook-bath' title  = 'View Key Statistics for Bailbrook, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>1 </td><td className = {classNameHideForMobile}>680 </td><td>680 </td><td className = {classNameHideForMobile}>680 </td><td className = {classNameHideForMobile}>158 </td><td>158 </td><td>158 </td></tr></table></p><a id = "student_accommodation_portal__10_bedroom_houses_in_bath"> <h2>Student Accommodation Portal - 10 Bedroom Houses in Bath</h2></a><p>Are you a student looking for a spacious 10-bedroom house in <b>Bath</b>? Look no further than our property portal, where you can easily find listings for stunning properties in sought-after locations like <b>Bailbrook</b>. Whether you are attending the prestigious University of <b>Bath</b> or the vibrant <b>Bath</b> Spa University, we have the perfect housing options for you. Imagine living in a spacious and comfortable 10-bedroom house with your friends, enjoying the convenience of being close to campus and the amenities of the beautiful city of <b>Bath</b>.</p><a id = "student_accommodation_in_bath__10_bedroom_houses__private_rental_sector"> <h2>Student Accommodation in Bath - 10 bedroom Houses - Private Rental Sector</h2></a><p>Are you a group of students searching for the perfect accommodation in Bath? Look no further than our selection of 10-bedroom student houses in the private rental sector. Located in prime locations and offering spacious living areas, these properties are ideal for those looking to live with a large group of friends. Forget about the hassle of organizing bills - with our houses, everything is taken care of as all utilities are included, making budgeting a breeze. Additionally, each property is <b>fully furnished</b>, so you can move in and feel right at home from day one. Don't settle for less - make your student living experience in Bath unforgettable with one of our 10-bedroom houses.</p><a id = "student_accommodation_in_bath__10_bedroom_houses__fully_furnished"> <h2>Student Accommodation in Bath - 10 bedroom Houses - Fully Furnished</h2></a><p>If you're seeking a spacious and comfortable living arrangement in Bath, look no further than our fully furnished 10-bedroom houses. Nestled in this charming city, these houses offer the perfect blend of convenience and luxury. With all the necessary furniture and appliances already in place, you can move in and start living the moment you step through the door. In Bath, it is normal for student houses to be fully furnished, making it easier for students to focus on their studies and enjoy their time in this vibrant city without the hassle of setting up a new home. Whether you're studying at the renowned University of Bath or just looking for a welcoming place to call home, our fully furnished houses provide the ideal setting for a comfortable and enjoyable living experience.</p><a id = "popular_locations_for_10_bedroom_houses_in_bath"> <h2>Popular Locations for 10 bedroom Houses in Bath</h2></a><h3>Bailbrook</h3><p><a href="./10-bedroom-student-houses-in-bailbrook-bath" title = "View 10 Bedroom Student Houses in Bailbrook, Bath">Bailbrook is a picturesque village located just a few miles from the city center of Bath</a>. This charming area is home to many students attending the <b>University of Bath</b> and <b>Bath Spa University</b>. Bailbrook is approximately 3.5 miles from the city center, and about 5 miles away from the <b>University of Bath</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After searching for student accommodation in Bath, it is evident that 10-bedroom houses offer spacious living arrangements that are perfect for large groups of students. These properties provide ample bedrooms, common areas, and facilities such as bathrooms and kitchens, making communal living comfortable for everyone. Furthermore, the central location of many 10-bedroom houses in Bath allows easy access to the city center, public transport, and local amenities. In conclusion, opting for a 10-bedroom house for student accommodation in Bath ensures convenience, comfort, and a vibrant social atmosphere, making it a popular choice among students looking for shared living arrangements.</p></>)
};

export default BathHouse10;