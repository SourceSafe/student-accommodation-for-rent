
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


const  BathBeaconHillStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Beacon Hill, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Beacon Hill, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Beacon Hill, Bath</b> offer a convenient and comfortable living space for students studying in Bath. These apartments are located in a prime area, providing easy access to local amenities, transportation, and university campuses. Ideal for students looking for a quiet and focused environment, these apartments offer a peaceful retreat while being close to the vibrant city life Bath has to offer.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-beacon-hill-bath.png')} alt='Studio Apartments for Students in Beacon Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61718&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Beacon Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_beacon_hill,_bath_pp/pm">Prices for Studio Apartments for Students in Beacon Hill, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_beacon_hill,_bath__all_bills_inclusive">Studio Apartments for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_beacon_hill,_bath">Cheap Studio Apartments for Students in Beacon Hill, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beacon_hill,_bath__recently_added">Studio Apartments for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_beacon_hill,_bath__recently_reduced">Studio Apartments for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_beacon_hill,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Beacon Hill, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beacon_hill,_bath__private_rental_sector">Studio Apartments for Students in Beacon Hill, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_beacon_hill,_bath__fully_furnished">Studio Apartments for Students in Beacon Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_beacon_hill_to_the_city_center">How close is Beacon Hill to the City Center</a></li><li><a href = "#how_close_is_beacon_hill_to_the_university_of_bath">How close is Beacon Hill to the University of Bath</a></li><li><a href = "#how_close_is_beacon_hill_to_the_bath_spa_university">How close is Beacon Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_beacon_hill,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Beacon Hill, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1309 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a stress-free living experience in Bath, Somerset? Consider subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student Studio in Beacon Hill. <b>UniBills.com</b> offers a convenient solution for managing your expenses, allowing you to <b>concentrate on your studies</b> without worrying about utility bills or unexpected costs. With the <b>all bills inclusive</b> option provided by <b>UniBills.com</b>, you can enjoy a hassle-free living experience and peace of mind knowing that everything is taken care of. Say goodbye to the hassle of budgeting and coordinating payments, and say hello to a simplified student lifestyle. Get a quote from <b>UniBills.com</b> or any accommodation on this website to start enjoying the benefits of an <b>all bills inclusive</b> service today. Ease your student life and focus on what truly matters with <b>UniBills.com</b>.</p><a id = "cheap_studio_apartments_for_students_in_beacon_hill,_bath"> <h2>Cheap Studio Apartments for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beacon_hill,_bath__recently_added"> <h2>Studio Apartments for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Studio Apartments for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_beacon_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Beacon Hill, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 1 Bedroom Studio in Beacon Hill, <b>Bath</b>, Somerset? Look no further than our property portal, where we make finding <b>student Studios</b> in this sought-after location a breeze. Situated conveniently close to the prestigious University of <b>Bath</b> and <b>Bath</b> Spa University, our listings feature a range of modern and stylish <b>1 Bedroom Studios</b> that are ideal for university students. Whether you're looking for a cozy studio for focused study sessions or a vibrant space to unwind after classes, we have the perfect options for you. With our user-friendly search filters, you can easily find the perfect <b>1 Bedroom Studios</b> in Beacon Hill, <b>Bath</b>, Somerset that meet your specific requirements. Don't miss out on the opportunity to secure your ideal student Studio in this vibrant and historic city.</p><a id = "studio_apartments_for_students_in_beacon_hill,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Beacon Hill, Bath - Private Rental Sector</h2></a><p>Discover the charm of living in the private rental sector with the exquisite <b>1 Bedroom Studios in Beacon Hill, Bath, Somerset, Bath</b>. These studios offer the perfect balance of convenience and comfort, with <b>bills included</b> in the rent for a hassle-free living experience. Each studio is thoughtfully designed and <b>fully furnished</b>, providing everything you need for a cozy and stylish living space. Nestled in the picturesque Beacon Hill area, residents can enjoy the peaceful surroundings while still being just a stone's throw away from all the amenities that Bath has to offer. Whether you are a student looking for a quiet study haven or a professional seeking a tranquil retreat after a long day's work, these studios are the ideal choice for those seeking a harmonious living environment. Don't miss out on the opportunity to experience the beauty and convenience of these <b>1 Bedroom Studios in Beacon Hill, Bath, Somerset, Bath</b>.</p><a id = "studio_apartments_for_students_in_beacon_hill,_bath__fully_furnished"> <h2>Studio Apartments for Students in Beacon Hill, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 1 Bedroom Studios in Beacon Hill, Bath, Somerset, Bath</b>? Look no further! These stylish and cozy Studios come complete with all the essentials you need for a comfortable stay. From a comfy bed to a fully equipped kitchen, you'll find everything you need to feel right at home. Located in the charming neighborhood of Beacon Hill, these Studios offer convenience and comfort in one package. Whether you're a student looking for a convenient place to stay or a professional seeking a peaceful retreat, these fully furnished Studios have got you covered. In Bath, it is normal for student Studios to be fully furnished, making the moving process a breeze. Don't miss out on the opportunity to reside in one of these lovely 1 Bedroom Studios in the heart of Bath.</p><a id = "how_close_is_beacon_hill_to_the_city_center"> <h2>How close is Beacon Hill to the City Center</h2></a><p><b>Beacon Hill</b>, a picturesque neighborhood in Bath, is situated just 1.5 <b>miles</b> from the bustling city center. Its close proximity to <b>Bath city center</b> makes it a coveted location for both residents and visitors alike. With its charming streets lined with historic Georgian buildings, <b>Beacon Hill</b> offers a peaceful retreat from the hustle and bustle of the city while still being conveniently close to all the amenities and attractions that Bath has to offer. Whether exploring the Roman Baths, strolling along the River Avon, or indulging in a spot of retail therapy in the city center, residents of <b>Beacon Hill</b> can easily access everything that Bath has to offer within a short distance. Being only 1.5 <b>miles</b> away from <b>Bath city center</b>, <b>Beacon Hill</b> provides the perfect balance of tranquility and convenience for those looking to experience the best of both worlds in this enchanting city.</p><a id = "how_close_is_beacon_hill_to_the_university_of_bath"> <h2>How close is Beacon Hill to the University of Bath</h2></a><p>Beacon Hill is located just 1.5 <b>miles</b> away from the <b>University of Bath</b>, making it a convenient and accessible location for students. <b>by foot</b>, it would take around 30-40 minutes to walk to the university, providing a great option for those looking to stay active and enjoy the scenic route. Alternatively, there is a direct <b>bus route</b> that connects Beacon Hill to the university, making commuting quick and easy for students. <b>by bus</b>, the journey takes approximately 10-15 minutes, offering a convenient transportation option. For those who prefer to drive, the university is just a short 5-10 minute car ride away, making it a quick and easy commute for students with access to a vehicle. Overall, Beacon Hill's close proximity to the <b>University of Bath</b> provides students with various transportation options to suit their preferences and schedules.</p><a id = "how_close_is_beacon_hill_to_the_bath_spa_university"> <h2>How close is Beacon Hill to the Bath Spa University</h2></a><p>Beacon Hill is conveniently located near <b>Bath Spa University</b>, just a few <b>miles</b> away. If you prefer to travel <b>by foot</b>, it's about a 20-30 minute walk from Beacon Hill to the university campus. For those who prefer public transportation, there is a <b>bus route</b> that connects Beacon Hill to <b>Bath Spa University</b>, making it a quick and easy commute. If you have access to a car, the university is just a short drive away. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from Beacon Hill is a simple and straightforward journey. With its close proximity and convenient transportation options, Beacon Hill is an ideal location for students looking to easily access the university campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>For students seeking studio apartments in Beacon Hill, Bath, finding a suitable living space can be both exciting and challenging. With its reputable universities and vibrant student community, Beacon Hill offers a convenient and bustling environment perfect for young scholars. The search for a studio apartment in this sought-after location can be competitive, requiring students to act quickly and efficiently to secure their ideal living arrangements. By utilizing online platforms, connecting with local real estate agents, and exploring various housing options, students can increase their chances of finding a studio apartment that meets their needs. In conclusion, while the search for studio apartments in Beacon Hill may be competitive, with determination and strategic planning, students can successfully find a comfortable and convenient living space in this bustling student-centric neighborhood.</p></>)
};

export default BathBeaconHillStudio1;