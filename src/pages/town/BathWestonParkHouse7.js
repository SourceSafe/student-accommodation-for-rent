
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


const  BathWestonParkHouse7 = () => 
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

    return (<><h1>7 Bedroom Student Houses in Weston Park, Bath</h1><p>We have listings for <b>7 Bedroom Student Houses in Weston Park, Bath</b> for the academic year 2024. 
<b>7 Bedroom Student Houses in Weston Park, Bath</b> are in high demand among students due to their spacious layout and convenient location in Bath. These houses are perfect for large groups of students who want to live together while studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/7-bedroom-student-houses-in-weston-park-bath.png')} alt='7 Bedroom Student Houses in Weston Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='7 Bedroom Student Houses in Weston Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71122&type=House&beds=7")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>7 Bedroom Student Houses in Weston Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_7_bedroom_student_houses_in_weston_park,_bath_pp/pm">Prices for 7 Bedroom Student Houses in Weston Park, Bath pp/pm</a></li><li><a href = "#7_bedroom_student_houses_in_weston_park,_bath__all_bills_inclusive">7 Bedroom Student Houses in Weston Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_7_bedroom_student_houses_in_weston_park,_bath">Cheap 7 Bedroom Student Houses in Weston Park, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_weston_park,_bath__recently_added">7 Bedroom Student Houses in Weston Park, Bath - Recently Added</a></li><li><a href = "#7_bedroom_student_houses_in_weston_park,_bath__recently_reduced">7 Bedroom Student Houses in Weston Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__7_bedroom_houses_in_weston_park,_bath,_somerset,_bath">Student Accommodation Portal - 7 Bedroom Houses in Weston Park, Bath, Somerset, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_weston_park,_bath__private_rental_sector">7 Bedroom Student Houses in Weston Park, Bath - Private Rental Sector</a></li><li><a href = "#7_bedroom_student_houses_in_weston_park,_bath__fully_furnished">7 Bedroom Student Houses in Weston Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_weston_park_to_the_city_center">How close is Weston Park to the City Center</a></li><li><a href = "#how_close_is_weston_park_to_the_university_of_bath">How close is Weston Park to the University of Bath</a></li><li><a href = "#how_close_is_weston_park_to_the_bath_spa_university">How close is Weston Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_7_bedroom_student_houses_in_weston_park,_bath_pp/pm"> <h2>Prices for 7 Bedroom Student Houses in Weston Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton tableButton' title='7 Bedroom Student Houses in Weston Park, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71122")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "7_bedroom_student_houses_in_weston_park,_bath__all_bills_inclusive"> <h2>7 Bedroom Student Houses in Weston Park, Bath - All Bills Inclusive</h2></a><p>Are you a student at Weston Park in Bath, Somerset, looking for a convenient and stress-free accommodation option? Subscribing to an <b>all bills inclusive</b> service for your 7 bedroom student house could be the perfect solution for you. <b>UniBills.com</b> offers a comprehensive package that covers all your utility bills, ensuring that you can <b>concentrate on your studies</b> without having to worry about managing multiple bills each month. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, which includes electricity, water, gas, internet, and more, all bundled into one convenient payment. This not only saves you time and effort but also provides you with peace of mind knowing that all your essential services are taken care of. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience.</p><a id = "cheap_7_bedroom_student_houses_in_weston_park,_bath"> <h2>Cheap 7 Bedroom Student Houses in Weston Park, Bath</h2></a><p><Portlet location="REGION^71122" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_weston_park,_bath__recently_added"> <h2>7 Bedroom Student Houses in Weston Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71122" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_weston_park,_bath__recently_reduced"> <h2>7 Bedroom Student Houses in Weston Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71122" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__7_bedroom_houses_in_weston_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 7 Bedroom Houses in Weston Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for housing near the University of <b>Bath</b> or <b>Bath</b> Spa University? Our property portal is here to assist you in finding the perfect 7 Bedroom <b>student Houses</b> in Weston Park, <b>Bath</b>, Somerset. Weston Park is a sought-after area in <b>Bath</b>, known for its peaceful surroundings and convenient location close to both universities. These spacious <b>7 Bedroom Houses</b> are ideal for students looking to live with a group of friends, offering plenty of room for studying and socializing. With our user-friendly search filters, you can easily narrow down your options and find the perfect student accommodation that meets your needs and budget. Don't stress about finding a place to stay – let our portal simplify the process for you.</p><a id = "7_bedroom_student_houses_in_weston_park,_bath__private_rental_sector"> <h2>7 Bedroom Student Houses in Weston Park, Bath - Private Rental Sector</h2></a><p>Are you looking for a spacious and convenient living space in Bath? Look no further than the private rental sector offering <b>7 Bedroom Houses in Weston Park, Bath, Somerset, Bath</b>. These homes come <b>fully furnished</b>, making the move-in process a breeze. With <b>bills included</b> in the rent, you can enjoy a hassle-free living experience without the worry of extra expenses. Whether you’re a group of friends, students, or a large family, these houses provide plenty of room to spread out and make yourselves at home. Located in the charming neighborhood of Weston Park, you’ll have easy access to local amenities and the beautiful surroundings of Bath. Don’t miss out on the opportunity to secure one of these desirable properties for your next chapter in Bath.</p><a id = "7_bedroom_student_houses_in_weston_park,_bath__fully_furnished"> <h2>7 Bedroom Student Houses in Weston Park, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 7 Bedroom Houses in Weston Park, Bath, Somerset, Bath</b>? Look no further! These spacious and modern houses offer all the comforts of home, including fully equipped kitchens, cozy living rooms, and comfortably furnished bedrooms. Perfect for students looking for convenient and hassle-free accommodation, <b>it is normal for student Houses to be fully furnished furnished</b> in Weston Park. Enjoy the convenience of moving in without the hassle of purchasing furniture or appliances. With ample space for studying, socializing, and relaxing, these houses are ideal for a comfortable and enjoyable student living experience. Located in the charming city of Bath, Somerset, these houses offer easy access to local amenities, parks, and transportation options.</p><a id = "how_close_is_weston_park_to_the_city_center"> <h2>How close is Weston Park to the City Center</h2></a><p><b>Weston Park</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it a popular destination for those looking to stay close to the heart of the action. Situated in a picturesque area, <b>Weston Park</b> offers a peaceful retreat while still being within easy reach of all the attractions and amenities that Bath has to offer. Whether you're interested in exploring the historic Roman baths, shopping in the bustling city center, or simply enjoying a leisurely stroll along the river, you'll find that <b>Weston Park</b> is the perfect base for your adventures. With its proximity to <b>Bath city center</b>, you'll never be far from the excitement and charm that this vibrant city has to offer.</p><a id = "how_close_is_weston_park_to_the_university_of_bath"> <h2>How close is Weston Park to the University of Bath</h2></a><p>Weston Park is conveniently located close to the <b>University of Bath</b>, just a few <b>miles</b> away. If you prefer walking, it would take you around 30-40 minutes to reach the university campus on foot. Alternatively, there is a direct <b>bus route</b> from Weston Park to the <b>University of Bath</b>, which takes only 15-20 minutes. For those who prefer driving, the university is easily accessible <b>by car</b>, with a quick 10-15 minute drive. This close proximity between Weston Park and the <b>University of Bath</b> makes it an ideal location for students looking for convenient and efficient transportation options to and from campus.</p><a id = "how_close_is_weston_park_to_the_bath_spa_university"> <h2>How close is Weston Park to the Bath Spa University</h2></a><p>Weston Park is conveniently located close to <b>Bath Spa University</b>, being just a few <b>miles</b> away. If you prefer to travel <b>by foot</b>, it will take you approximately 30-40 minutes to reach the university campus. Alternatively, there is a direct <b>bus route</b> that links Weston Park to <b>Bath Spa University</b>, making commuting quick and easy. <b>by bus</b>, the journey should take around 10-15 minutes. For those who prefer to drive, the distance between Weston Park and <b>Bath Spa University</b> can be covered in just a short car ride. Whether you choose to travel <b>by foot</b>, bus, or car, Weston Park's proximity to <b>Bath Spa University</b> allows for easy access, making it a convenient and practical location for students and professionals alike.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 7-bedroom student house in Weston Park, Bath can be a daunting task, but with the right approach, it can be a rewarding experience. Weston Park is a popular area amongst students due to its close proximity to University of Bath and Bath Spa University. When searching for a student house in this area, it's important to consider factors such as location, transport links, amenities, and budget. With many properties available, it's essential to take the time to view multiple options to find the perfect fit for you and your housemates. By planning ahead and being proactive in your search, you can secure a comfortable and convenient living space that meets all your needs. In conclusion, while the process of looking for a 7-bedroom student house in Weston Park may seem overwhelming, taking the time to carefully research and explore your options will help you find the ideal property to call home during your time at university.</p></>)
};

export default BathWestonParkHouse7;