
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


const  BathTwertonHouse3 = () => 
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

    return (<><h1>3 Bedroom Student Houses in Twerton, Bath</h1><p>We have listings for <b>3 Bedroom Student Houses in Twerton, Bath</b> for the academic year 2024.

<b>3 Bedroom Student Houses in Twerton, Bath</b> provide a comfortable and convenient living space for students attending the University of Bath or Bath Spa University. These properties typically offer spacious bedrooms, shared living areas, and easy access to local amenities and public transport options, making them ideal for student living in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-houses-in-twerton-bath.png')} alt='3 Bedroom Student Houses in Twerton, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Houses in Twerton, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71119&type=House&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Houses in Twerton, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_houses_in_twerton,_bath_pp/pm">Prices for 3 Bedroom Student Houses in Twerton, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_houses_in_twerton,_bath__all_bills_inclusive">3 Bedroom Student Houses in Twerton, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_houses_in_twerton,_bath">Cheap 3 Bedroom Student Houses in Twerton, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_twerton,_bath__recently_added">3 Bedroom Student Houses in Twerton, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_houses_in_twerton,_bath__recently_reduced">3 Bedroom Student Houses in Twerton, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_houses_in_twerton,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Houses in Twerton, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_twerton,_bath__private_rental_sector">3 Bedroom Student Houses in Twerton, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_houses_in_twerton,_bath__fully_furnished">3 Bedroom Student Houses in Twerton, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_twerton_to_the_city_center">How close is Twerton to the City Center</a></li><li><a href = "#how_close_is_twerton_to_the_university_of_bath">How close is Twerton to the University of Bath</a></li><li><a href = "#how_close_is_twerton_to_the_bath_spa_university">How close is Twerton to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_houses_in_twerton,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Houses in Twerton, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£610 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Houses in Twerton, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71119")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_houses_in_twerton,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Houses in Twerton, Bath - All Bills Inclusive</h2></a><p>Why worry about managing utility bills when you can subscribe to an <b>all bills inclusive</b> service for your 3 bedroom student house in Twerton, Bath, Somerset? <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> and enjoy the hassle-free, all-inclusive option provided by them. With this service, you won't have to worry about splitting bills with housemates or dealing with unexpected costs. Imagine the peace of mind that comes with knowing that all your bills are taken care of with just one fixed payment each month. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and experience the benefits of a stress-free living arrangement. Say goodbye to bill-related arguments and hello to a smoother, more efficient way of managing your household expenses.</p><a id = "cheap_3_bedroom_student_houses_in_twerton,_bath"> <h2>Cheap 3 Bedroom Student Houses in Twerton, Bath</h2></a><p><Portlet location="REGION^71119" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_twerton,_bath__recently_added"> <h2>3 Bedroom Student Houses in Twerton, Bath - Recently Added</h2></a><p><Portlet location="REGION^71119" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_twerton,_bath__recently_reduced"> <h2>3 Bedroom Student Houses in Twerton, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71119" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_houses_in_twerton,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Houses in Twerton, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>3 Bedroom Houses</b> in Twerton, <b>Bath</b>, Somerset? Look no further than our property portal! We specialize in helping students find ideal accommodations near the University of <b>Bath</b> and <b>Bath</b> Spa University. Twerton is a picturesque area in <b>Bath</b>, known for its charming streets and convenient amenities. With our user-friendly search filters, you can easily narrow down your options to find the ideal <b>student Houses</b> that fit your needs and budget. Whether you prefer a modern apartment or a cozy townhouse, our portal has a wide variety of listings to choose from.</p><a id = "3_bedroom_student_houses_in_twerton,_bath__private_rental_sector"> <h2>3 Bedroom Student Houses in Twerton, Bath - Private Rental Sector</h2></a><p>Looking for <b>3 Bedroom Houses in Twerton, Bath, Somerset, Bath</b>? Look no further than the private rental sector, where you can find spacious homes perfect for families or sharers. Many of these properties come <b>fully furnished</b>, taking the stress out of moving and allowing you to settle in right away. Additionally, some landlords offer the convenience of having <b>bills included</b> in the rent, making budgeting easier for tenants. With a variety of options available in Twerton, Bath, Somerset, Bath's private rental sector, you're sure to find a 3 bedroom house that fits your needs and lifestyle.</p><a id = "3_bedroom_student_houses_in_twerton,_bath__fully_furnished"> <h2>3 Bedroom Student Houses in Twerton, Bath - Fully Furnished</h2></a><p>Looking for a place to call home in Twerton, Bath, Somerset, Bath? Look no further than the <b>fully furnished 3 Bedroom Houses in Twerton, Bath, Somerset, Bath</b>. These properties offer the perfect blend of comfort and convenience, as they come complete with everything you need to settle in right away. From stylish furniture to essential appliances, you can simply unpack your bags and start living. In this bustling student town, <b>it is normal for student Houses to be fully furnished furnished</b>, taking the stress out of finding and moving in your new place. So why wait? Experience the ease of fully furnished living in Twerton, Bath, Somerset, Bath today.</p><a id = "how_close_is_twerton_to_the_city_center"> <h2>How close is Twerton to the City Center</h2></a><p><b>Twerton</b> is a charming village located just on the outskirts of <b>Bath city center</b>. Situated approximately 1.5 <b>miles</b> away, <b>Twerton</b> offers a tranquil escape from the bustling city life while still being within easy reach of all the attractions and amenities that Bath has to offer. Whether you choose to take a leisurely stroll along the River Avon or hop on a quick bus ride, you'll find yourself immersed in the picturesque beauty of Bath in no time. With its historic architecture, world-renowned thermal baths, and vibrant cultural scene, <b>Bath city center</b> is a must-visit destination for tourists and locals alike. And with <b>Twerton</b>'s convenient proximity, you can experience all that Bath has to offer while enjoying the peaceful atmosphere of a quaint village setting. So, whether you're looking for a relaxing retreat or a bustling city adventure, <b>Twerton</b>'s close proximity to <b>Bath city center</b> ensures you have the best of both worlds at your fingertips.</p><a id = "how_close_is_twerton_to_the_university_of_bath"> <h2>How close is Twerton to the University of Bath</h2></a><p>Twerton is a quaint suburb located just 2 <b>miles</b> west of the renowned <b>University of Bath</b> campus. Students living in Twerton have convenient access to the university via a direct <b>bus route</b> that runs regularly throughout the day, making commuting a breeze. The university is also easily reachable <b>by foot</b> or <b>by car</b>, with a quick 10-minute drive or a scenic 30-minute walk through the charming streets of Bath. This close proximity allows students in Twerton to enjoy all the amenities and events that the <b>University of Bath</b> has to offer, from engaging lectures to exciting sports games. Whether you prefer the convenience of the <b>bus route</b> or the leisurely stroll or drive to campus, living in Twerton provides a perfect balance of proximity and peaceful suburban living.</p><a id = "how_close_is_twerton_to_the_bath_spa_university"> <h2>How close is Twerton to the Bath Spa University</h2></a><p>Twerton is the perfect location for students looking to be close to <b>Bath Spa University</b>. The university is located just 2 <b>miles</b> away, making it easily accessible <b>by foot</b>, bus, or car. For those who prefer walking, it is a pleasant stroll that takes around 40 minutes. Alternatively, the <b>bus route</b> is very convenient and provides a quick and affordable way to reach the university in just about 15 minutes. If you have your own transportation, driving to <b>Bath Spa University</b> is also a viable option, taking roughly 10 minutes depending on traffic. Whether you choose to walk, take the bus, or drive, living in Twerton ensures that you are close to all the action at <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 3-bedroom student house in Twerton, Bath can be a rewarding process for those studying in the area. With a variety of options available and the convenience of being close to local amenities and University campuses, students can find the perfect accommodation to suit their needs. Twerton offers a vibrant community atmosphere with easy access to transportation links and recreational facilities. By carefully considering factors such as budget, location, and house features, students can secure a comfortable and suitable residence for their time in Bath. Whether it's a cozy terrace house or a modern apartment, Twerton has something for everyone looking for student housing. Overall, the search for a 3-bedroom student house in Twerton promises a mix of convenience, affordability, and a vibrant living environment for students to enjoy.</p></>)
};

export default BathTwertonHouse3;