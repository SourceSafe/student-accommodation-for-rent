
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


const  BathLambridgeFlat3 = () => 
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

    return (<><h1>3 Bedroom Student Flats in Lambridge, Bath</h1><p>We have listings for <b>3 Bedroom Student Flats in Lambridge, Bath</b> for the academic year 2024.

<b>3 Bedroom Student Flats in Lambridge, Bath</b> offer comfortable living spaces for students attending university in Bath. These flats are conveniently located near various amenities, making it an ideal choice for student accommodation. With spacious bedrooms and communal areas, these flats provide a conducive environment for studying and relaxation.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-flats-in-lambridge-bath.png')} alt='3 Bedroom Student Flats in Lambridge, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Flats in Lambridge, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71103&type=Flat&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Flats in Lambridge, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_flats_in_lambridge,_bath_pp/pm">Prices for 3 Bedroom Student Flats in Lambridge, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_flats_in_lambridge,_bath__all_bills_inclusive">3 Bedroom Student Flats in Lambridge, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_flats_in_lambridge,_bath">Cheap 3 Bedroom Student Flats in Lambridge, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_lambridge,_bath__recently_added">3 Bedroom Student Flats in Lambridge, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_flats_in_lambridge,_bath__recently_reduced">3 Bedroom Student Flats in Lambridge, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_flats_in_lambridge,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Flats in Lambridge, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_lambridge,_bath__private_rental_sector">3 Bedroom Student Flats in Lambridge, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_flats_in_lambridge,_bath__fully_furnished">3 Bedroom Student Flats in Lambridge, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_lambridge_to_the_city_center">How close is Lambridge to the City Center</a></li><li><a href = "#how_close_is_lambridge_to_the_university_of_bath">How close is Lambridge to the University of Bath</a></li><li><a href = "#how_close_is_lambridge_to_the_bath_spa_university">How close is Lambridge to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_flats_in_lambridge,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Flats in Lambridge, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£757 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Flats in Lambridge, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71103")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_flats_in_lambridge,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Flats in Lambridge, Bath - All Bills Inclusive</h2></a><p>When you’re busy with assignments and exams, the last thing you need is the stress of managing multiple utility bills for your student flat in Lambridge, Bath, Somerset. That’s where <b>UniBills.com</b> comes in to save the day with their <b>all bills inclusive</b> service. By opting for this convenient option, you can forget about the hassle of splitting bills with your housemates or dealing with different providers for electricity, water, and internet. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and rest easy knowing that all your bills are taken care of in one simple payment. Say goodbye to unexpected charges and hello to the peace of mind that comes with an all inclusive service. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and enjoy the benefits of a hassle-free living experience.</p><a id = "cheap_3_bedroom_student_flats_in_lambridge,_bath"> <h2>Cheap 3 Bedroom Student Flats in Lambridge, Bath</h2></a><p><Portlet location="REGION^71103" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_lambridge,_bath__recently_added"> <h2>3 Bedroom Student Flats in Lambridge, Bath - Recently Added</h2></a><p><Portlet location="REGION^71103" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_lambridge,_bath__recently_reduced"> <h2>3 Bedroom Student Flats in Lambridge, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71103" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_flats_in_lambridge,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Flats in Lambridge, Bath, Somerset, Bath</h2></a><p>Welcome to our property portal, your one-stop destination for finding the perfect <b>3 Bedroom Flats</b> in Lambridge, <b>Bath</b>, Somerset. Whether you're a student at the prestigious University of <b>Bath</b> or <b>Bath</b> Spa University, our portal is designed to help you easily search for the ideal <b>student Flats</b> in this charming city. Lambridge, <b>Bath</b>, Somerset, is a sought-after location for students due to its convenient proximity to both universities and its vibrant atmosphere. With our user-friendly search filters, you can narrow down your options and find a 3 Bedroom Flat that meets all your requirements. Don't waste time scrolling through endless listings - let our portal streamline the process for you.</p><a id = "3_bedroom_student_flats_in_lambridge,_bath__private_rental_sector"> <h2>3 Bedroom Student Flats in Lambridge, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and convenient living arrangement in Lambridge, Bath, Somerset, Bath? Explore our selection of <b>3 Bedroom Flats in Lambridge, Bath, Somerset, Bath</b>, perfect for professionals or families looking for a comfortable home in a vibrant community. Our properties come <b>fully furnished</b>, offering you a hassle-free move-in experience. To make your life even easier, many of our rentals also include bills in the monthly rent, allowing you to budget more effectively. Enjoy the convenience of having everything you need right at your fingertips in these modern and stylish flats. Don't miss out on the opportunity to secure a cozy and contemporary living space in Lambridge, Bath, Somerset, Bath.</p><a id = "3_bedroom_student_flats_in_lambridge,_bath__fully_furnished"> <h2>3 Bedroom Student Flats in Lambridge, Bath - Fully Furnished</h2></a><p>Are you looking for a spacious and convenient living space in Lambridge, Bath, Somerset, Bath? Look no further than our fully furnished 3 Bedroom Flats in Lambridge. These flats come equipped with everything you need for a comfortable stay, including modern furniture, appliances, and stylish decor. Whether you are a student or a professional, having a fully furnished flat can make your move-in process a breeze. In Lambridge, it is normal for student flats to be fully furnished, allowing you to focus on settling in and making the space your own. With three bedrooms, there is plenty of room for privacy and relaxation, making these flats ideal for families or flat-sharing arrangements.</p><a id = "how_close_is_lambridge_to_the_city_center"> <h2>How close is Lambridge to the City Center</h2></a><p><b>Lambridge</b> is conveniently located just a stone's throw away from <b>Bath city center</b>, merely a few <b>miles</b> apart. This close proximity makes <b>Lambridge</b> an ideal residential area for those who want to immerse themselves in the vibrant culture and rich history of Bath without being right in the bustling city center. Nestled along the River Avon, <b>Lambridge</b> offers a peaceful and scenic retreat while still being within easy reach of all the amenities and attractions that Bath has to offer. Residents of <b>Lambridge</b> can easily access the city center by various modes of transportation, such as walking, cycling, or taking a short drive. Whether you're looking to explore the iconic Roman baths, stunning Georgian architecture, or charming independent shops and cafes, <b>Bath city center</b> is just a short journey away from the quiet charm of <b>Lambridge</b>.</p><a id = "how_close_is_lambridge_to_the_university_of_bath"> <h2>How close is Lambridge to the University of Bath</h2></a><p>Lambridge is conveniently located just about 1.5 <b>miles</b> away from the <b>University of Bath</b>, making it a great option for students looking for a close proximity to campus. For those who prefer to walk, it would take approximately 30 minutes to reach the university on foot. Alternatively, there is a direct <b>bus route</b> that connects Lambridge to the university, making the journey quick and hassle-free. <b>by bus</b>, the commute would only take around 10-15 minutes, perfect for those early morning lectures. If driving is more your style, the university is just a short 5-10 minute car ride away from Lambridge. This close proximity allows students to easily access all that the <b>University of Bath</b> has to offer, while still being able to enjoy the tranquility of the Lambridge neighborhood.</p><a id = "how_close_is_lambridge_to_the_bath_spa_university"> <h2>How close is Lambridge to the Bath Spa University</h2></a><p>Lambridge is situated just a stone's throw away from <b>Bath Spa University</b>, making it a prime location for students attending the esteemed institution. Located only a few <b>miles</b> away, the campus is easily accessible <b>by foot</b>, <b>by bus</b>, or <b>by car</b>. The university is conveniently located on a main <b>bus route</b>, providing a quick and convenient transportation option for students living in Lambridge. <b>by foot</b>, the walk to <b>Bath Spa University</b> is a manageable distance, allowing students to easily commute to campus on a daily basis. For those who prefer driving, the journey <b>by car</b> is a quick and straightforward route, ensuring a stress-free commute. With its close proximity to <b>Bath Spa University</b>, Lambridge offers a convenient and accessible location for students seeking to live close to campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, if you're in search of a 3 bedroom student flat in Lambridge, Bath, there are several options available that cater to different preferences and budgets. From the modern and spacious flats in purpose-built student accommodation to cosy and traditional properties within walking distance of the university, Lambridge has something to offer every student. It's important to consider factors such as location, amenities, and rental prices when making your decision. Overall, with its vibrant student community and convenient access to city amenities, Lambridge provides an ideal living environment for students. Don't hesitate to explore the diverse range of options and find the perfect 3 bedroom student flat that suits your needs and enhances your student living experience in Bath.</p></>)
};

export default BathLambridgeFlat3;