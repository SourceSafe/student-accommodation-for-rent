
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


const  BathSouthLyncombeFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in South Lyncombe, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in South Lyncombe, Bath</b> for the academic year 2024.

<b>2 Bedroom Student Flats in South Lyncombe, Bath</b> offer convenient accommodation for students studying in the beautiful city of Bath. These flats typically come fully furnished and are located in a desirable area close to local amenities and public transportation options. Perfect for students looking for a comfortable and well-connected living space during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-south-lyncombe-bath.png')} alt='2 Bedroom Student Flats in South Lyncombe, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in South Lyncombe, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61728&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in South Lyncombe, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_south_lyncombe,_bath_pp/pm">Prices for 2 Bedroom Student Flats in South Lyncombe, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_south_lyncombe,_bath__all_bills_inclusive">2 Bedroom Student Flats in South Lyncombe, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_south_lyncombe,_bath">Cheap 2 Bedroom Student Flats in South Lyncombe, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_south_lyncombe,_bath__recently_added">2 Bedroom Student Flats in South Lyncombe, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_south_lyncombe,_bath__recently_reduced">2 Bedroom Student Flats in South Lyncombe, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_south_lyncombe,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_south_lyncombe,_bath__private_rental_sector">2 Bedroom Student Flats in South Lyncombe, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_south_lyncombe,_bath__fully_furnished">2 Bedroom Student Flats in South Lyncombe, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_city_center">How close is South Lyncombe to the City Center</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_university_of_bath">How close is South Lyncombe to the University of Bath</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_bath_spa_university">How close is South Lyncombe to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_south_lyncombe,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in South Lyncombe, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1157 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in South Lyncombe, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61728")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_south_lyncombe,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in South Lyncombe, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your student flat in South Lyncombe, Bath, Somerset? Simplify your life and free up your time to <b>concentrate on your studies</b> by opting for an <b>all bills inclusive</b> service. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers everything from utilities to internet and even TV licenses. Say goodbye to the stress of managing different bills and hello to a more convenient way of living. By subscribing to an <b>all bills inclusive</b> service, you can budget more effectively and avoid any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life easier and more enjoyable.</p><a id = "cheap_2_bedroom_student_flats_in_south_lyncombe,_bath"> <h2>Cheap 2 Bedroom Student Flats in South Lyncombe, Bath</h2></a><p><Portlet location="REGION^61728" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_south_lyncombe,_bath__recently_added"> <h2>2 Bedroom Student Flats in South Lyncombe, Bath - Recently Added</h2></a><p><Portlet location="REGION^61728" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_south_lyncombe,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in South Lyncombe, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61728" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_south_lyncombe,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a 2 Bedroom Flat in South Lyncombe, <b>Bath</b>, Somerset? Look no further than our property portal, where we specialize in helping students find the perfect accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our easy-to-use search function allows you to filter through a wide range of options, including <b>student Flats</b> specifically designed for your needs. Whether you prefer a modern apartment or a cozy flat, we have something for everyone. Don't waste time searching countless websites when you can find everything you need on our platform. With our help, you can secure a comfortable and convenient 2 Bedroom Flat in South Lyncombe, <b>Bath</b>, Somerset, in no time.</p><a id = "2_bedroom_student_flats_in_south_lyncombe,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in South Lyncombe, Bath - Private Rental Sector</h2></a><p>Looking for a comfortable and convenient place to live in South Lyncombe, Bath, Somerset, Bath? Look no further than the selection of 2 bedroom flats available in this charming area. These flats are ideal for young professionals, couples, or small families looking to settle down in a peaceful neighborhood. Many of these flats come <b>fully furnished</b>, so you can move in with ease and start enjoying your new home right away. Plus, with <b>bills included</b> in the rent, you can rest easy knowing that you won't have any unexpected expenses popping up. The private rental sector for 2 bedroom flats in South Lyncombe provides a great opportunity to enjoy all the benefits of living in this picturesque area without the hassle of homeownership.</p><a id = "2_bedroom_student_flats_in_south_lyncombe,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in South Lyncombe, Bath - Fully Furnished</h2></a><p>Welcome to the charming neighborhood of South Lyncombe in Bath, Somerset, where you'll find fully furnished 2 Bedroom Flats that strike the perfect balance between comfort and style. These flats in Bath are thoughtfully designed with modern decor and all the amenities you need for a comfortable stay. Located in a vibrant and peaceful area, these flats offer a cozy living space, spacious bedrooms, a fully equipped kitchen, and a contemporary bathroom. Whether you're a student looking for a convenient place to stay or a professional seeking a comfortable home, these fully furnished flats in South Lyncombe are the ideal choice. In Bath, it is normal for student flats to be fully furnished, so you can rest assured that you'll have everything you need to settle in and feel at home. With convenient access to local attractions, restaurants, and shopping centers, these flats provide the perfect blend of convenience and relaxation. Don't miss the opportunity to experience the warmth and charm of Bath while enjoying the comfort of a fully furnished 2 Bedroom Flat in South Lyncombe.</p><a id = "how_close_is_south_lyncombe_to_the_city_center"> <h2>How close is South Lyncombe to the City Center</h2></a><p><b>South Lyncombe</b> offers a picturesque and convenient location just a few <b>miles</b> away from <b>Bath city center</b>. Residents of <b>South Lyncombe</b> can enjoy the tranquility of countryside living while being only a short distance from the bustling heart of Bath. Whether you're looking to explore the historical Roman baths, take a stroll through the charming streets filled with boutique shops and cafes, or simply enjoy a relaxing day at the Thermae Bath Spa, everything is easily accessible from <b>South Lyncombe</b>. With its close proximity to <b>Bath city center</b>, residents can easily immerse themselves in the vibrant culture and rich history that the city has to offer. So, whether you're looking for a peaceful retreat or easy access to city amenities, <b>South Lyncombe</b> provides the perfect balance.</p><a id = "how_close_is_south_lyncombe_to_the_university_of_bath"> <h2>How close is South Lyncombe to the University of Bath</h2></a><p>South Lyncombe is just a stone's throw away from the prestigious <b>University of Bath</b>, located just a few <b>miles</b> from the campus. If you prefer walking, it would take you around 30 minutes to reach the university on foot. Alternatively, there is a convenient <b>bus route</b> that will get you to campus in just 15 minutes, making commuting a breeze. For those with their own transportation, the university is easily accessible <b>by car</b> and the journey typically takes around 10 minutes. Whether you prefer to walk, take the bus, or drive, South Lyncombe's proximity to the <b>University of Bath</b> makes it a convenient and ideal location for students and faculty members alike.</p><a id = "how_close_is_south_lyncombe_to_the_bath_spa_university"> <h2>How close is South Lyncombe to the Bath Spa University</h2></a><p>South Lyncombe is located just a few <b>miles</b> away from <b>Bath Spa University</b>, making it a convenient location for students and staff. The university is easily accessible from South Lyncombe, with several commute options available. <b>by foot</b>, it takes around 30 minutes to reach the university campus, offering a pleasant and scenic walk for those who enjoy walking. Alternatively, there is a direct <b>bus route</b> connecting South Lyncombe to <b>Bath Spa University</b>, providing a quick and efficient mode of transportation. The bus ride takes around 15 minutes, offering a convenient way to reach the university without the hassle of driving and parking. For those who prefer to drive, the university is only a short car journey away from South Lyncombe, taking approximately 10 minutes. Overall, South Lyncombe's close proximity to <b>Bath Spa University</b> makes it a highly sought-after location for students and staff alike.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After exploring the options for 2-bedroom student flats in South Lyncombe, Bath, it is clear that the area offers a variety of suitable accommodations for students. The presence of university campuses nearby makes it a convenient and sought-after location for student living. Whether you are looking for a modern apartment or a traditional house, South Lyncombe has something to offer for every preference and budget. With its vibrant community, amenities, and transportation links, students can enjoy a comfortable and convenient lifestyle while focusing on their studies. In conclusion, South Lyncombe is an attractive location for students seeking 2-bedroom flats, providing a perfect balance between academic responsibilities and quality living experience. Whether you prefer a cozy flat or a spacious apartment, South Lyncombe has options to suit your needs[].</p></>)
};

export default BathSouthLyncombeFlat2;