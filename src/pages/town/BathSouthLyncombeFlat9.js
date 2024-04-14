
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


const  BathSouthLyncombeFlat9 = () => 
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

    return (<><h1>9 Bedroom Student Flats in South Lyncombe, Bath</h1><p>We have listings for <b>9 Bedroom Student Flats in South Lyncombe, Bath</b> for the academic year 2024. 

<b>9 Bedroom Student Flats in South Lyncombe, Bath</b> offer spacious and comfortable accommodation for groups of students looking to live together during the academic year. These flats are conveniently located in Bath, providing easy access to local amenities and universities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/9-bedroom-student-flats-in-south-lyncombe-bath.png')} alt='9 Bedroom Student Flats in South Lyncombe, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='9 Bedroom Student Flats in South Lyncombe, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61728&type=Flat&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>9 Bedroom Student Flats in South Lyncombe, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_flats_in_south_lyncombe,_bath_pp/pm">Prices for 9 Bedroom Student Flats in South Lyncombe, Bath pp/pm</a></li><li><a href = "#9_bedroom_student_flats_in_south_lyncombe,_bath__all_bills_inclusive">9 Bedroom Student Flats in South Lyncombe, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_flats_in_south_lyncombe,_bath">Cheap 9 Bedroom Student Flats in South Lyncombe, Bath</a></li><li><a href = "#9_bedroom_student_flats_in_south_lyncombe,_bath__recently_added">9 Bedroom Student Flats in South Lyncombe, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_flats_in_south_lyncombe,_bath__recently_reduced">9 Bedroom Student Flats in South Lyncombe, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_flats_in_south_lyncombe,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_flats_in_south_lyncombe,_bath__private_rental_sector">9 Bedroom Student Flats in South Lyncombe, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_flats_in_south_lyncombe,_bath__fully_furnished">9 Bedroom Student Flats in South Lyncombe, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_city_center">How close is South Lyncombe to the City Center</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_university_of_bath">How close is South Lyncombe to the University of Bath</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_bath_spa_university">How close is South Lyncombe to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_flats_in_south_lyncombe,_bath_pp/pm"> <h2>Prices for 9 Bedroom Student Flats in South Lyncombe, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton tableButton' title='9 Bedroom Student Flats in South Lyncombe, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61728")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "9_bedroom_student_flats_in_south_lyncombe,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Flats in South Lyncombe, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 9-bedroom flat in South Lyncombe, Bath, Somerset? Keeping track of multiple bills can be time-consuming and stressful. That's where <b>UniBills.com</b> comes in! By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With one simple payment each month, you can rest easy knowing that all your utility bills are taken care of. This allows you to <b>concentrate on your studies</b> and social life without the added worry of managing various bills. Say goodbye to the headache of sorting through individual invoices and hello to a more streamlined living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student life today.</p><a id = "cheap_9_bedroom_student_flats_in_south_lyncombe,_bath"> <h2>Cheap 9 Bedroom Student Flats in South Lyncombe, Bath</h2></a><p><Portlet location="REGION^61728" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_flats_in_south_lyncombe,_bath__recently_added"> <h2>9 Bedroom Student Flats in South Lyncombe, Bath - Recently Added</h2></a><p><Portlet location="REGION^61728" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_flats_in_south_lyncombe,_bath__recently_reduced"> <h2>9 Bedroom Student Flats in South Lyncombe, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61728" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_flats_in_south_lyncombe,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</h2></a><p>Are you a student searching for the perfect 9 bedroom flat in <b>Bath</b>, specifically in the South Lyncombe area of Somerset? Look no further than our property portal, where we specialize in helping students find their ideal accommodation. South Lyncombe is a sought-after location due to its proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University, making it a convenient and desirable choice for student living. By using our platform, you can easily filter your search to find specifically <b>9 Bedroom Flats</b>, ensuring you have plenty of space to live comfortably with your housemates. Don't waste time scrolling through endless listings - let us help you find the perfect student flat in South Lyncombe, <b>Bath</b>, Somerset today.</p><a id = "9_bedroom_student_flats_in_south_lyncombe,_bath__private_rental_sector"> <h2>9 Bedroom Student Flats in South Lyncombe, Bath - Private Rental Sector</h2></a><p>Welcome to the charming South Lyncombe neighborhood in Bath, Somerset, where you will find exquisite 9 bedroom flats available for rent. These spacious flats offer a unique opportunity to live in a vibrant community while enjoying the privacy of your own space. Perfect for students or professionals, these flats come <b>fully furnished</b>, making moving in a breeze. Forget the hassle of dealing with utility bills, as they are included in the rent, allowing you to focus on settling into your new home. With modern amenities and a prime location, these <b>9 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</b>, are sure to provide a comfortable and convenient living experience like no other.</p><a id = "9_bedroom_student_flats_in_south_lyncombe,_bath__fully_furnished"> <h2>9 Bedroom Student Flats in South Lyncombe, Bath - Fully Furnished</h2></a><p>If you're looking for spacious and comfortable living in South Lyncombe, Bath, Somerset, Bath, look no further than the fully furnished 9 Bedroom Flats available in the area. These flats offer ample space for a large group of students or professionals looking to reside together in a convenient location. With all the necessary furniture and appliances provided, it is easy to move in and start living comfortably right away. In the student community, it is normal for Flats to be fully furnished, taking the stress out of finding and moving bulky furniture. Additionally, the prime location of these flats in South Lyncombe provides easy access to local amenities, public transportation, and the vibrant city center. Don't miss out on the opportunity to live in style and convenience in one of these well-equipped 9 Bedroom Flats.</p><a id = "how_close_is_south_lyncombe_to_the_city_center"> <h2>How close is South Lyncombe to the City Center</h2></a><p><b>South Lyncombe</b> is a charming suburb located just a few <b>miles</b> away from <b>Bath city center</b>. This picturesque area offers the perfect balance of peaceful surroundings and convenient access to the bustling city. A short drive or a leisurely stroll will take you right into the heart of Bath, where you can explore iconic landmarks such as the Roman Baths, Bath Abbey, and the Royal Crescent. Whether you're looking to immerse yourself in history, indulge in some retail therapy at the city's fashionable boutiques, or simply enjoy a delicious meal at one of Bath's many restaurants, <b>South Lyncombe</b>'s proximity to the city center makes it an ideal base for your adventures. Additionally, the excellent transport links in the area make it easy to travel to and from <b>Bath city center</b>, ensuring that you can make the most of everything this vibrant city has to offer.</p><a id = "how_close_is_south_lyncombe_to_the_university_of_bath"> <h2>How close is South Lyncombe to the University of Bath</h2></a><p>South Lyncombe is ideally located, just a stone's throw away from the prestigious <b>University of Bath</b> campus. Situated less than 2 <b>miles</b> from the university, students can easily access the campus <b>by foot</b>, <b>by bus</b>, or <b>by car</b>. There is a convenient <b>bus route</b> that connects South Lyncombe directly to the university, making commuting a breeze. For those who prefer to drive, the journey takes less than 10 minutes, making it a quick and efficient way to reach the campus. Living in South Lyncombe provides students with the perfect balance of being close to campus while also enjoying a peaceful residential area. With various transportation options available, getting to the <b>University of Bath</b> from South Lyncombe has never been easier.</p><a id = "how_close_is_south_lyncombe_to_the_bath_spa_university"> <h2>How close is South Lyncombe to the Bath Spa University</h2></a><p>South Lyncombe is conveniently located just a few <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal neighborhood for students and faculty alike. The university is easily accessible from South Lyncombe, with a short <b>bus route</b> that can transport you directly to the campus. If you prefer to travel <b>by foot</b>, the university is approximately a 40-minute walk from South Lyncombe, allowing you to enjoy the scenic route and stay active. For those who prefer the convenience of driving, <b>Bath Spa University</b> is just a quick car ride away, providing flexibility in transportation options. Whether you choose to commute <b>by foot</b>, bus, or car, South Lyncombe's proximity to <b>Bath Spa University</b> ensures a seamless journey to and from campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the hustle and bustle of finding a 9-bedroom student flat in South Lyncombe, Bath, it's important to consider location, amenities, and overall living experience. South Lyncombe offers a serene and picturesque setting, ideal for students looking for a peaceful environment to study and relax. With its close proximity to local shops, restaurants, and public transportation, residents can easily access everything they need. Additionally, the spacious 9-bedroom flats in this area provide plenty of room for all housemates to have their own space without feeling overcrowded. In conclusion, searching for a 9-bedroom student flat in South Lyncombe, Bath offers a perfect blend of convenience and comfort for students looking to make the most of their living situation while pursuing their academic endeavors.</p></>)
};

export default BathSouthLyncombeFlat9;