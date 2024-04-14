
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


const  BathBathSpaHouse6 = () => 
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

    return (<><h1>6 Bedroom Student Houses in Bath Spa, Bath</h1><p>We have listings for <b>6 Bedroom Student Houses in Bath Spa, Bath</b> for the academic year 2024. 
<b>6 Bedroom Student Houses in Bath Spa, Bath</b> are popular among students looking for spacious accommodations with friends while studying in the city.
These houses typically offer multiple bathrooms, communal living areas, and sometimes even a garden or patio for students to relax and socialize in.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/6-bedroom-student-houses-in-bath-spa-bath.png')} alt='6 Bedroom Student Houses in Bath Spa, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='6 Bedroom Student Houses in Bath Spa, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71093&type=House&beds=6")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>6 Bedroom Student Houses in Bath Spa, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_6_bedroom_student_houses_in_bath_spa,_bath_pp/pm">Prices for 6 Bedroom Student Houses in Bath Spa, Bath pp/pm</a></li><li><a href = "#6_bedroom_student_houses_in_bath_spa,_bath__all_bills_inclusive">6 Bedroom Student Houses in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_6_bedroom_student_houses_in_bath_spa,_bath">Cheap 6 Bedroom Student Houses in Bath Spa, Bath</a></li><li><a href = "#6_bedroom_student_houses_in_bath_spa,_bath__recently_added">6 Bedroom Student Houses in Bath Spa, Bath - Recently Added</a></li><li><a href = "#6_bedroom_student_houses_in_bath_spa,_bath__recently_reduced">6 Bedroom Student Houses in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__6_bedroom_houses_in_bath_spa,_bath,_somerset,_bath">Student Accommodation Portal - 6 Bedroom Houses in Bath Spa, Bath, Somerset, Bath</a></li><li><a href = "#6_bedroom_student_houses_in_bath_spa,_bath__private_rental_sector">6 Bedroom Student Houses in Bath Spa, Bath - Private Rental Sector</a></li><li><a href = "#6_bedroom_student_houses_in_bath_spa,_bath__fully_furnished">6 Bedroom Student Houses in Bath Spa, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_bath_spa_to_the_city_center">How close is Bath Spa to the City Center</a></li><li><a href = "#how_close_is_bath_spa_to_the_university_of_bath">How close is Bath Spa to the University of Bath</a></li><li><a href = "#how_close_is_bath_spa_to_the_bath_spa_university">How close is Bath Spa to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_6_bedroom_student_houses_in_bath_spa,_bath_pp/pm"> <h2>Prices for 6 Bedroom Student Houses in Bath Spa, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£651 per month </td><td><button className = 'searchButton tableButton' title='6 Bedroom Student Houses in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "6_bedroom_student_houses_in_bath_spa,_bath__all_bills_inclusive"> <h2>6 Bedroom Student Houses in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Tired of the constant headache of managing bills for your 6 bedroom student house in Bath Spa, Somerset? Look no further than <b>UniBills.com</b> for all your accommodation needs. By subscribing to an <b>all bills inclusive</b> service, you can free up your time and <b>concentrate on your studies</b> without worrying about utility payments or budgeting each month. <b>UniBills.com</b> offers a hassle-free all-inclusive option that covers everything from electricity to internet, saving you the stress and allowing you to enjoy your student experience in Bath. With <b>UniBills.com</b>, you can streamline your living arrangements and focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and take the first step towards a more convenient and stress-free student life.</p><a id = "cheap_6_bedroom_student_houses_in_bath_spa,_bath"> <h2>Cheap 6 Bedroom Student Houses in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_houses_in_bath_spa,_bath__recently_added"> <h2>6 Bedroom Student Houses in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_houses_in_bath_spa,_bath__recently_reduced"> <h2>6 Bedroom Student Houses in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__6_bedroom_houses_in_bath_spa,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 6 Bedroom Houses in Bath Spa, Bath, Somerset, Bath</h2></a><p>Are you searching for the perfect 6 bedroom <b>student Houses</b> in <b>Bath</b>, Somerset? Look no further than our property portal that specializes in listing top-quality accommodations in <b>Bath</b> Spa, <b>Bath</b>. As students attending the University of <b>Bath</b> or <b>Bath</b> Spa University, locating the ideal housing option is crucial for a successful academic year. Our platform ensures a seamless search process, with detailed descriptions and images of each property available to browse. With our user-friendly interface, you can easily filter your results to find <b>6 Bedroom Houses</b> that meet your specific requirements and preferences. Say goodbye to the stress of house hunting and let us help you find your dream student accommodation in <b>Bath</b>.</p><a id = "6_bedroom_student_houses_in_bath_spa,_bath__private_rental_sector"> <h2>6 Bedroom Student Houses in Bath Spa, Bath - Private Rental Sector</h2></a><p>Are you in search of a spacious and comfortable living arrangement in Bath Spa, Bath, Somerset? Look no further than the private rental sector offering 6 bedroom houses in this picturesque city. These homes are not only conveniently located but also come <b>fully furnished</b>, ensuring you have everything you need for a seamless move-in experience. Additionally, many of these properties come with <b>bills included</b>, taking the hassle out of managing multiple utility payments. Whether you're a student looking to share with friends or a professional seeking a large living space, these 6 bedroom houses provide the perfect solution for your accommodation needs in Bath.</p><a id = "6_bedroom_student_houses_in_bath_spa,_bath__fully_furnished"> <h2>6 Bedroom Student Houses in Bath Spa, Bath - Fully Furnished</h2></a><p>Looking for a spacious and comfortable living arrangement in Bath Spa, Bath, Somerset? Look no further than our fully furnished 6-bedroom houses in the heart of Bath. Perfect for students or a large family, these properties have everything you need to make yourself at home. From cozy bedrooms to a fully equipped kitchen and living area, you won't have to worry about buying furniture or appliances. It is normal for student houses to be fully furnished, so you can focus on studying or exploring the charming city of Bath. With contemporary decor and modern amenities, these houses offer a convenient and stylish way to live in one of the most beautiful cities in the UK. Don't miss out on the opportunity to rent one of our fully furnished 6-bedroom houses in Bath Spa, Bath, Somerset, Bath - your ideal home away from home awaits.</p><a id = "how_close_is_bath_spa_to_the_city_center"> <h2>How close is Bath Spa to the City Center</h2></a><p><b>Bath Spa</b>, the main railway station in the city of Bath, is conveniently located just a stone's throw away from <b>Bath city center</b>. Situated a mere 0.6 <b>miles</b> from the bustling heart of the city, <b>Bath Spa</b> station serves as a gateway for visitors and locals alike to explore the historic sights, charming streets, and vibrant atmosphere that Bath has to offer. With its prime location, travelers arriving at <b>Bath Spa</b> can easily access iconic landmarks such as the Roman Baths, the Abbey, and the famous Pulteney Bridge within a short walking distance. Whether you're a history enthusiast, a culture buff, or simply looking to soak in the beauty of this picturesque city, <b>Bath Spa</b> station's close proximity to <b>Bath city center</b> makes it a convenient starting point for your Bath adventure.</p><a id = "how_close_is_bath_spa_to_the_university_of_bath"> <h2>How close is Bath Spa to the University of Bath</h2></a><p>Bath Spa is conveniently close to the <b>University of Bath</b>, being only 1.5 <b>miles</b> away via the most direct <b>bus route</b>. For those who prefer walking, it is a picturesque journey of about 30 minutes <b>by foot</b>. If you opt for public transportation, the bus will get you to the university in around 10-15 minutes, making it a quick and cost-effective way to commute. Alternatively, if you own a car, driving to the <b>University of Bath</b> takes approximately 10 minutes, depending on traffic. This close proximity allows students and faculty at Bath Spa easy access to the academic and social hub of the <b>University of Bath</b> while still enjoying the amenities and atmosphere of the historic city of Bath.</p><a id = "how_close_is_bath_spa_to_the_bath_spa_university"> <h2>How close is Bath Spa to the Bath Spa University</h2></a><p><b>Bath Spa University</b> is situated just 3 <b>miles</b> away from the historical city of Bath, making it a convenient location for students to access all the amenities both the university and the city have to offer. If you prefer walking, the university is approximately a 45-minute stroll from the city center, giving you the opportunity to enjoy the picturesque surroundings along the way. Alternatively, there is a direct <b>bus route</b> that connects the city center to the university, making it a quick and easy journey for those who prefer to use public transportation. For those with access to a car, the university is just a short 10-minute drive away from the city center, offering a more convenient option for commuting. No matter how you choose to travel, <b>Bath Spa University</b>'s close proximity to Bath ensures that students have easy access to both their academic institution and the vibrant city life.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 6 Bedroom Student House in Bath Spa, Bath can be a challenging yet rewarding experience. With its vibrant student community and beautiful surroundings, Bath Spa offers a unique living experience for students. When looking for accommodation, it is important to consider factors such as location, amenities, and budget. By utilizing online platforms and contacting local estate agents, students can find the perfect 6 bedroom house that suits their needs. Additionally, sharing a house with five other students can foster a sense of community and camaraderie. Overall, securing a 6 Bedroom Student House in Bath Spa, Bath can enhance the university experience and provide a comfortable and enjoyable living space for students.</p></>)
};

export default BathBathSpaHouse6;