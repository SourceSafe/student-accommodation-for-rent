
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


const  BathOddDownHouse2 = () => 
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

    return (<><h1>2 Bedroom Student Houses in Odd Down, Bath</h1><p>We have listings for <b>2 Bedroom Student Houses in Odd Down, Bath</b> for the academic year 2024. 
<b>2 Bedroom Student Houses in Odd Down, Bath</b> are ideal for students seeking a comfortable and convenient living space in Bath. These houses typically offer spacious bedrooms, a shared living area, and proximity to local amenities and transport links.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-houses-in-odd-down-bath.png')} alt='2 Bedroom Student Houses in Odd Down, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Houses in Odd Down, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61725&type=House&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Houses in Odd Down, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_houses_in_odd_down,_bath_pp/pm">Prices for 2 Bedroom Student Houses in Odd Down, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_houses_in_odd_down,_bath__all_bills_inclusive">2 Bedroom Student Houses in Odd Down, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_houses_in_odd_down,_bath">Cheap 2 Bedroom Student Houses in Odd Down, Bath</a></li><li><a href = "#2_bedroom_student_houses_in_odd_down,_bath__recently_added">2 Bedroom Student Houses in Odd Down, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_houses_in_odd_down,_bath__recently_reduced">2 Bedroom Student Houses in Odd Down, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_houses_in_odd_down,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Houses in Odd Down, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_houses_in_odd_down,_bath__private_rental_sector">2 Bedroom Student Houses in Odd Down, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_houses_in_odd_down,_bath__fully_furnished">2 Bedroom Student Houses in Odd Down, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_odd_down_to_the_city_center">How close is Odd Down to the City Center</a></li><li><a href = "#how_close_is_odd_down_to_the_university_of_bath">How close is Odd Down to the University of Bath</a></li><li><a href = "#how_close_is_odd_down_to_the_bath_spa_university">How close is Odd Down to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_houses_in_odd_down,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Houses in Odd Down, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£630 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Houses in Odd Down, Bath' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^61725")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_houses_in_odd_down,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Houses in Odd Down, Bath - All Bills Inclusive</h2></a><p>Living in a 2 bedroom student house in Odd Down, Bath, Somerset can be a thrilling experience. However, managing multiple bills for utilities can often become overwhelming for busy students. To alleviate this stress, consider opting for an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> while they take care of all your bills. Imagine the peace of mind knowing that your electricity, gas, water, internet, and other miscellaneous bills are all covered under one monthly payment. Say goodbye to the headache of managing different accounts and due dates - instead, enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. To make your student life even more convenient, why not get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your living arrangements today.</p><a id = "cheap_2_bedroom_student_houses_in_odd_down,_bath"> <h2>Cheap 2 Bedroom Student Houses in Odd Down, Bath</h2></a><p><Portlet location="REGION^61725" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_houses_in_odd_down,_bath__recently_added"> <h2>2 Bedroom Student Houses in Odd Down, Bath - Recently Added</h2></a><p><Portlet location="REGION^61725" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_houses_in_odd_down,_bath__recently_reduced"> <h2>2 Bedroom Student Houses in Odd Down, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61725" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_houses_in_odd_down,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Houses in Odd Down, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a place to live in Odd Down, <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect <b>2 Bedroom Houses</b> tailored to your needs. Located conveniently close to both the University of <b>Bath</b> and <b>Bath</b> Spa University, these <b>student Houses</b> offer a comfortable and convenient living space for students. With easy access to various amenities and public transport, living in Odd Down provides a peaceful environment while still being close to the bustling city of <b>Bath</b>. Our platform makes it easy to search for available properties, compare prices, and find the best fit for your budget and preferences. Don't waste time scrolling through endless listings - let us help you find your ideal student accommodation in Odd Down, <b>Bath</b>, Somerset today.</p><a id = "2_bedroom_student_houses_in_odd_down,_bath__private_rental_sector"> <h2>2 Bedroom Student Houses in Odd Down, Bath - Private Rental Sector</h2></a><p>Looking for a place to rent in Odd Down, Bath, Somerset? Consider the private rental sector for 2 Bedroom Houses in Odd Down, Bath, Somerset. Many of these properties come <b>fully furnished</b>, making moving in a breeze. With <b>bills included</b> in some rental options, you can budget with ease and avoid unexpected expenses. Whether you need extra space for a home office or a guest room, 2-bedroom houses offer versatility and comfort. Located in the charming city of Bath, these properties provide easy access to local amenities, shops, and beautiful countryside walks.</p><a id = "2_bedroom_student_houses_in_odd_down,_bath__fully_furnished"> <h2>2 Bedroom Student Houses in Odd Down, Bath - Fully Furnished</h2></a><p>Are you looking for fully furnished 2 bedroom houses in Odd Down, Bath, Somerset? Look no further! In this charming Bath neighborhood, you can find a variety of fully furnished properties that are perfect for students, young professionals, or families. With the bustling city center just a short distance away, living in one of these houses offers the perfect balance between convenience and tranquility. In Odd Down, Bath, it is normal for student houses to be fully furnished, making your move-in process a breeze. Imagine coming home to a cozy living room, a well-equipped kitchen, and comfortable bedrooms without the hassle of furnishing the place yourself. Don't miss out on the opportunity to live in one of these beautiful houses in this lovely area of Bath.</p><a id = "how_close_is_odd_down_to_the_city_center"> <h2>How close is Odd Down to the City Center</h2></a><p><b>Odd Down</b> is a suburb located just a few <b>miles</b> outside of <b>Bath city center</b>. The distance between <b>Odd Down</b> and <b>Bath city center</b> is around 3 <b>miles</b>, making it a convenient location for those looking to enjoy the amenities of the city while still having a more residential feel. With easy access to public transportation and major roadways, residents of <b>Odd Down</b> can quickly and easily reach the bustling city center for shopping, dining, and entertainment. Additionally, <b>Odd Down</b> offers its own unique charm with local shops, parks, and community events. Whether you're looking for the excitement of city life or the tranquility of a suburban neighborhood, <b>Odd Down</b> provides the perfect balance just a short distance from the heart of <b>Bath city center</b>.</p><a id = "how_close_is_odd_down_to_the_university_of_bath"> <h2>How close is Odd Down to the University of Bath</h2></a><p>Odd Down is conveniently located just 2 <b>miles</b> away from the <b>University of Bath</b>, making it an ideal location for students and staff alike. For those who prefer to travel <b>by foot</b>, the university is easily accessible within a 40-minute walk. Alternatively, there is a direct <b>bus route</b> that takes around 10 minutes to reach the campus, making commuting a breeze. For those who prefer to drive, the journey <b>by car</b> takes just 5 minutes, offering flexibility and convenience. With its close proximity to the <b>University of Bath</b>, Odd Down provides a perfect balance between a peaceful residential area and easy access to academic facilities and amenities.</p><a id = "how_close_is_odd_down_to_the_bath_spa_university"> <h2>How close is Odd Down to the Bath Spa University</h2></a><p>Located just a few <b>miles</b> away from <b>Bath Spa University</b>, Odd Down offers a convenient and accessible location for students and staff. The campus is easily reachable by various modes of transportation. For those who prefer to travel <b>by foot</b>, the university is roughly 2.5 <b>miles</b> from Odd Down, providing a scenic and healthy commute. Additionally, there is a direct <b>bus route</b> that connects Odd Down to the university, making it a quick and hassle-free journey for those who prefer public transportation. Alternatively, students with access to a car can reach <b>Bath Spa University</b> in just a short drive from Odd Down, allowing for flexibility and convenience. Whether <b>by foot</b>, bus, or car, the close proximity of Odd Down to <b>Bath Spa University</b> makes it a popular choice for those seeking a convenient living situation near campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 2-bedroom student house in Odd Down, Bath can be a rewarding experience with its numerous benefits for students. Living in a 2-bedroom house allows students to share expenses, enjoy increased privacy, and have a comfortable living space that promotes focused studying. The convenience of being close to the University of Bath and local amenities makes Odd Down an ideal location for student accommodation. With a variety of 2-bedroom houses available in the area, students have the opportunity to find a suitable living arrangement that fits their needs and preferences. Whether it's a modern apartment or a cozy cottage, Odd Down offers a range of options for students looking for a comfortable and convenient place to call home during their academic journey.</p></>)
};

export default BathOddDownHouse2;