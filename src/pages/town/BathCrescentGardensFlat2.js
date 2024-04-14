
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


const  BathCrescentGardensFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Crescent Gardens, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Crescent Gardens, Bath</b> for the academic year 2024.

Located in the beautiful city of Bath, 2 Bedroom Student Flats in Crescent Gardens offer spacious and modern living spaces perfect for students. With a convenient location close to Bath Spa University and other local amenities, these flats provide a comfortable and convenient living environment for students studying in the area.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-crescent-gardens-bath.png')} alt='2 Bedroom Student Flats in Crescent Gardens, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Crescent Gardens, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71096&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Crescent Gardens, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_crescent_gardens,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Crescent Gardens, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_crescent_gardens,_bath__all_bills_inclusive">2 Bedroom Student Flats in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_crescent_gardens,_bath">Cheap 2 Bedroom Student Flats in Crescent Gardens, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_crescent_gardens,_bath__recently_added">2 Bedroom Student Flats in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_crescent_gardens,_bath__recently_reduced">2 Bedroom Student Flats in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_crescent_gardens,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Crescent Gardens, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_crescent_gardens,_bath__private_rental_sector">2 Bedroom Student Flats in Crescent Gardens, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_crescent_gardens,_bath__fully_furnished">2 Bedroom Student Flats in Crescent Gardens, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_crescent_gardens_to_the_city_center">How close is Crescent Gardens to the City Center</a></li><li><a href = "#how_close_is_crescent_gardens_to_the_university_of_bath">How close is Crescent Gardens to the University of Bath</a></li><li><a href = "#how_close_is_crescent_gardens_to_the_bath_spa_university">How close is Crescent Gardens to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_crescent_gardens,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Crescent Gardens, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1157 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your 2-bedroom student flat in Crescent Gardens, Bath, Somerset? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service. By subscribing to their convenient package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without the stress of managing utility payments. With <b>UniBills.com</b>, you can have peace of mind knowing that all your bills are taken care of in one simple payment each month. Say goodbye to the endless paperwork and constant worry about missing payments. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and embrace the benefits of a worry-free living experience.</p><a id = "cheap_2_bedroom_student_flats_in_crescent_gardens,_bath"> <h2>Cheap 2 Bedroom Student Flats in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_crescent_gardens,_bath__recently_added"> <h2>2 Bedroom Student Flats in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_crescent_gardens,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_crescent_gardens,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Crescent Gardens, Bath, Somerset, Bath</h2></a><p>Are you looking for a comfortable and convenient 2 Bedroom flat in <b>Bath</b> for your student years? Look no further than Crescent Gardens, <b>Bath</b>, Somerset. Our property portal offers a variety of <b>student Flats</b> in this sought-after location, perfect for students attending the University of <b>Bath</b> or <b>Bath</b> Spa University. With its vibrant atmosphere and close proximity to local amenities, Crescent Gardens provides the ideal setting for student living. Whether you prefer modern or traditional styles, our portal can help you find the perfect 2 Bedroom flat to suit your needs. Don't miss out on the opportunity to secure your ideal student accommodation in <b>Bath</b> at Crescent Gardens.</p><a id = "2_bedroom_student_flats_in_crescent_gardens,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Crescent Gardens, Bath - Private Rental Sector</h2></a><p>Experience luxurious living in the heart of Bath with our 2 Bedroom Flats in Crescent Gardens, Bath, Somerset. These stunning properties are perfect for those seeking a sophisticated and convenient lifestyle. Each flat comes <b>fully furnished</b>, providing a stylish and comfortable living space. With <b>bills included</b> in the rent, you can enjoy all the modern amenities without any added stress. Located in a prime location, these flats offer easy access to the city center, making it ideal for professionals and students alike. Don't miss out on the opportunity to live in one of Bath's most sought-after residential areas.</p><a id = "2_bedroom_student_flats_in_crescent_gardens,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Crescent Gardens, Bath - Fully Furnished</h2></a><p>Are you looking for a perfect place to stay in Bath, Somerset? Look no further than the fully furnished 2 Bedroom Flats in Crescent Gardens. Situated in the heart of Bath, these flats offer the ideal combination of comfort and convenience. Whether you are a student or a professional, these fully furnished flats provide everything you need for a stress-free living experience. With stylish decor, modern amenities, and a prime location, these flats are the perfect choice for those seeking a comfortable and hassle-free living space. <b>it is normal for student Flats to be fully furnished furnished</b>, so you can move in and start enjoying your new home right away. Don't miss out on the opportunity to live in one of Bath's most sought-after locations.</p><a id = "how_close_is_crescent_gardens_to_the_city_center"> <h2>How close is Crescent Gardens to the City Center</h2></a><p><b>Crescent Gardens</b> is just a stone's throw away from <b>Bath city center</b>, located only 0.3 <b>miles</b> away, making it a prime spot for those looking to stay close to the heart of the action. With its close proximity, guests can enjoy easy access to all that Bath has to offer, including the stunning Roman Baths, the beautiful Pulteney Bridge, and the charming streets lined with shops and cafes. Whether you're in town for a relaxing weekend getaway or exploring the historic landmarks, staying at <b>Crescent Gardens</b> means you can easily navigate the city on foot and truly immerse yourself in the vibrant atmosphere.</p><a id = "how_close_is_crescent_gardens_to_the_university_of_bath"> <h2>How close is Crescent Gardens to the University of Bath</h2></a><p>Crescent Gardens is conveniently situated near the <b>University of Bath</b>, located just a few <b>miles</b> away.  You can easily reach the university <b>by foot</b>, as it is a pleasant 30-minute walk through the picturesque streets of Bath. Alternatively, you can hop on the bus, as there is a direct <b>bus route</b> that will take you from Crescent Gardens to the university in just a short ride. For those who prefer to drive, the university is only a few minutes away <b>by car</b>, making the commute quick and easy. Whether you choose to travel <b>by foot</b>, bus, or car, Crescent Gardens provides easy access to the vibrant campus of the <b>University of Bath</b>, making it an ideal location for students and faculty alike.</p><a id = "how_close_is_crescent_gardens_to_the_bath_spa_university"> <h2>How close is Crescent Gardens to the Bath Spa University</h2></a><p>Crescent Gardens is conveniently located just 1.5 <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal accommodation choice for students looking to be close to campus. The university is easily accessible from Crescent Gardens <b>by foot</b>, taking around 30 minutes to walk. For those who prefer to take public transportation, there is a direct <b>bus route</b> that connects Crescent Gardens to <b>Bath Spa University</b>, providing a convenient and quick commute. Additionally, students who have their own transportation can reach the university <b>by car</b> in just a few minutes. This close proximity to <b>Bath Spa University</b> makes Crescent Gardens a perfect option for students seeking a comfortable and convenient living situation while pursuing their academic goals.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 2-bedroom student flat in Crescent Gardens, Bath can be a challenging but rewarding experience. With its convenient location close to local amenities, including shops, restaurants, and public transportation, Crescent Gardens offers an ideal living situation for students. Additionally, the variety of 2-bedroom flats available in this area provides students with options to suit their budget and preferences. When searching for a flat, it's important to consider factors such as rental prices, lease terms, and proximity to campus. By carefully comparing different properties and weighing the pros and cons of each, students can find the perfect 2-bedroom flat in Crescent Gardens to call home during their time at university. In conclusion, Crescent Gardens is a vibrant and attractive neighborhood for students looking for 2-bedroom accommodation in Bath, offering a balance of convenience, affordability, and comfort.</p></>)
};

export default BathCrescentGardensFlat2;