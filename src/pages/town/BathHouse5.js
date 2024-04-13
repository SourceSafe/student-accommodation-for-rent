
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


const  BathHouse5 = () => 
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

    return (<><h1>Student Accommodation in Bath - 5 bedroom Houses</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 5 bedroom Houses</b> for the academic year 2024.

5 bedroom Houses in Bath are spacious and ideal for students looking to live together. These houses offer plenty of room for each student to have their own space while still enjoying the benefits of communal living. With multiple bedrooms, these houses provide the perfect opportunity for students to form lasting friendships and create a supportive living environment during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-5-bedroom-houses.png')} alt='Student Accommodation in Bath - 5 bedroom Houses'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 5 bedroom Houses' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=&type=House&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 5 bedroom Houses</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__5_bedroom_houses_pp/pm">Prices for Student Accommodation in Bath - 5 bedroom Houses pp/pm</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__all_bills_inclusive">Student Accommodation in Bath - 5 bedroom Houses - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__5_bedroom_houses">Cheapest Student Accommodation in Bath - 5 bedroom Houses</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__recently_added">Student Accommodation in Bath - 5 bedroom Houses - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__recently_reduced">Student Accommodation in Bath - 5 bedroom Houses - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__5_bedroom_houses__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 5 bedroom Houses - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__5_bedroom_houses_in_bath">Student Accommodation Portal - 5 Bedroom Houses in Bath</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__private_rental_sector">Student Accommodation in Bath - 5 bedroom Houses - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_houses__fully_furnished">Student Accommodation in Bath - 5 bedroom Houses - Fully Furnished</a></li><li><a href = "#popular_locations_for_5_bedroom_houses_in_bath">Popular Locations for 5 bedroom Houses in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__5_bedroom_houses_pp/pm"> <h2>Prices for Student Accommodation in Bath - 5 bedroom Houses pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£625 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 5 bedroom Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__5_bedroom_houses__all_bills_inclusive"> <h2>Student Accommodation in Bath - 5 bedroom Houses - All Bills Inclusive</h2></a><p>Are you tired of the constant stress of managing utility bills for your 5-bedroom student house in Bath? Look no further! Consider subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>. By opting for this convenient option, you can enjoy the hassle-free experience of having all your bills taken care of in one simple monthly payment. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> without the worry of juggling multiple bills and suppliers. Say goodbye to late payment fees and complex billing systems, and say hello to a more streamlined and efficient way of living. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student life in Bath a whole lot easier.</p><a id = "cheapest_student_accommodation_in_bath__5_bedroom_houses"> <h2>Cheapest Student Accommodation in Bath - 5 bedroom Houses</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__5_bedroom_houses__recently_added"> <h2>Student Accommodation in Bath - 5 bedroom Houses - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__5_bedroom_houses__recently_reduced"> <h2>Student Accommodation in Bath - 5 bedroom Houses - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__5_bedroom_houses__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 5 bedroom Houses - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Count </th><th className = {classNameHideForMobile}>Min monthly </th><th>Max monthly </th><th className = {classNameHideForMobile}>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-houses-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>136 </td><td className = {classNameHideForMobile}>500 </td><td>953 </td><td className = {classNameHideForMobile}>626 </td><td className = {classNameHideForMobile}>116 </td><td>221 </td><td>145 </td></tr></table></p><a id = "student_accommodation_portal__5_bedroom_houses_in_bath"> <h2>Student Accommodation Portal - 5 Bedroom Houses in Bath</h2></a><p>Looking for the perfect student accommodation in <b>Bath</b>? Look no further than our property portal, where you can easily find a variety of <b>5 Bedroom Houses</b> in the vibrant city of <b>Bath</b>. Whether you are studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, our listings include properties in popular areas such as <b>Oldfield Park</b>, known for its student-friendly atmosphere and close proximity to campus. With spacious communal areas and bedrooms, these houses are ideal for sharing with friends while enjoying all that <b>Bath</b> has to offer. Take the stress out of your housing search and let our portal help you find the ideal 5 bedroom student house in <b>Bath</b> today.</p><a id = "student_accommodation_in_bath__5_bedroom_houses__private_rental_sector"> <h2>Student Accommodation in Bath - 5 bedroom Houses - Private Rental Sector</h2></a><p>Are you looking for a spacious and convenient living arrangement in Bath? Consider exploring the private rental sector for <b>5 bedroom student Houses</b>. These properties are ideal for those seeking shared accommodation with fellow students or young professionals. Many private landlords offer houses with <b>bills included</b>, making budgeting and planning a breeze. Additionally, these houses come <b>fully furnished</b>, so you can move in and feel right at home without the hassle of purchasing furniture. With plenty of room to study, relax, and socialize, a 5 bedroom house in Bath provides a comfortable and practical living space for those looking to enjoy all that the city has to offer.</p><a id = "student_accommodation_in_bath__5_bedroom_houses__fully_furnished"> <h2>Student Accommodation in Bath - 5 bedroom Houses - Fully Furnished</h2></a><p>Are you looking for a spacious and comfortable living space in the beautiful city of Bath? Look no further than our fully furnished 5-bedroom house in Bath. Here, you will find the perfect blend of style, comfort, and convenience. With five bedrooms, there is plenty of room for you and your housemates to live and study in comfort. Our <b>fully furnished Houses in Bath</b> are designed to make your move-in process as seamless as possible. From stylish furniture to modern appliances, we have taken care of all the details so you can focus on settling in and enjoying your new home. In Bath, it is normal for student houses to be fully furnished, ensuring that you have everything you need for a comfortable and enjoyable stay. Don't miss out on the opportunity to live in this beautiful and well-equipped 5-bedroom house in Bath.</p><a id = "popular_locations_for_5_bedroom_houses_in_bath"> <h2>Popular Locations for 5 bedroom Houses in Bath</h2></a><h3>Oldfield Park</h3><p><a href="./5-bedroom-student-houses-in-oldfield-park-bath" title = "View 5 Bedroom Student Houses in Oldfield Park, Bath">Oldfield Park is a vibrant and diverse neighborhood in the city of Bath</a>, known for its high population of students from both the <b>University of Bath</b> and <b>Bath Spa University</b>. It is located just 1 mile from the city center, making it a convenient location for residents. Additionally, Oldfield Park is only 2 miles away from the <b>University of Bath</b> campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for student accommodation in Bath can be a daunting task, especially when it comes to finding a 5-bedroom house suitable for a group of friends. However, with careful planning and research, you can secure a comfortable and convenient living space for your time at university. Consider factors such as location, proximity to campus and local amenities, as well as budget constraints when searching for the perfect accommodation. There are plenty of options available in Bath, ranging from modern apartments to traditional townhouses, each offering its own unique charm. It's important to view multiple properties, ask questions, and negotiate terms to ensure you find a place that suits your needs. In conclusion, by being proactive and thorough in your search, you can find the ideal 5-bedroom house in Bath that will be the perfect home away from home during your studies.</p></>)
};

export default BathHouse5;