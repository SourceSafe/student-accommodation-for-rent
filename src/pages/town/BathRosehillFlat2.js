
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


const  BathRosehillFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Rosehill, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Rosehill, Bath</b> for the academic year 2024.

<b>2 Bedroom Student Flats in Rosehill, Bath</b> provide a convenient and comfortable living space for students studying in Bath. These flats are ideal for those looking for shared accommodation with a roommate while enjoying easy access to local amenities and transport links in the city. With multiple bedrooms, a common living area, and often a kitchen and bathroom, these flats offer a great balance of privacy and community living for students in the academic year 2024.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-rosehill-bath.png')} alt='2 Bedroom Student Flats in Rosehill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Rosehill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71112&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Rosehill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_rosehill,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Rosehill, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_rosehill,_bath__all_bills_inclusive">2 Bedroom Student Flats in Rosehill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_rosehill,_bath">Cheap 2 Bedroom Student Flats in Rosehill, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_rosehill,_bath__recently_added">2 Bedroom Student Flats in Rosehill, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_rosehill,_bath__recently_reduced">2 Bedroom Student Flats in Rosehill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_rosehill,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Rosehill, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_rosehill,_bath__private_rental_sector">2 Bedroom Student Flats in Rosehill, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_rosehill,_bath__fully_furnished">2 Bedroom Student Flats in Rosehill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rosehill_to_the_city_center">How close is Rosehill to the City Center</a></li><li><a href = "#how_close_is_rosehill_to_the_university_of_bath">How close is Rosehill to the University of Bath</a></li><li><a href = "#how_close_is_rosehill_to_the_bath_spa_university">How close is Rosehill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_rosehill,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Rosehill, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£707 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Rosehill, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71112")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_rosehill,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Rosehill, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom flat in Rosehill, Bath, Somerset? Do you want to eliminate the stress of managing multiple bills while trying to juggle your studies? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service for your student accommodation. By subscribing to <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by them. This means you can <b>concentrate on your studies</b> and social life without worrying about keeping track of bills for utilities like electricity, water, and internet. With <b>UniBills.com</b>, you can simplify your living experience and avoid any unexpected expenses. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life in Bath more convenient and stress-free.</p><a id = "cheap_2_bedroom_student_flats_in_rosehill,_bath"> <h2>Cheap 2 Bedroom Student Flats in Rosehill, Bath</h2></a><p><Portlet location="REGION^71112" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_rosehill,_bath__recently_added"> <h2>2 Bedroom Student Flats in Rosehill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71112" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_rosehill,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Rosehill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71112" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_rosehill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Rosehill, Bath, Somerset, Bath</h2></a><p>Looking for a convenient and hassle-free way to find 2 bedroom <b>student Flats</b> in Rosehill, <b>Bath</b>, Somerset? Look no further than our property portal. With easy navigation and a wide range of listings, you can easily browse through available options that meet your criteria. Rosehill, located in <b>Bath</b>, is a popular area for students attending the University of <b>Bath</b> and <b>Bath</b> Spa University. Living in a 2 bedroom flat offers the perfect blend of comfort and affordability, ideal for sharing with a roommate. Don't waste time scouring multiple websites when our portal can streamline your search and help you secure the perfect student accommodation in <b>Bath</b>.</p><a id = "2_bedroom_student_flats_in_rosehill,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Rosehill, Bath - Private Rental Sector</h2></a><p>If you're looking for convenience and comfort in the heart of Rosehill, Bath, Somerset, Bath, then 2 Bedroom Flats in Rosehill are the ideal choice for you. These properties offer a blend of modern living and historic charm, providing a cozy and welcoming atmosphere. With <b>bills included</b> in the rental price, you can enjoy stress-free living without the hassle of managing multiple payments. Additionally, these flats come <b>fully furnished</b>, saving you time and money on furnishing your new home. Whether you're a student, young professional, or a small family, these 2 Bedroom Flats in Rosehill offer the perfect living space for you to make your own. Don't miss out on the opportunity to experience the convenience and comfort of these <b>fully furnished</b> flats in the vibrant neighborhood of Rosehill, Bath, Somerset, Bath.</p><a id = "2_bedroom_student_flats_in_rosehill,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Rosehill, Bath - Fully Furnished</h2></a><p>Welcome to the charming neighborhood of Rosehill in Bath, Somerset, where you can find fully furnished 2 Bedroom Flats that offer convenience and comfort. Located in the heart of Bath, these flats are perfect for students and professionals alike. With a fully furnished setup, including all the essential furniture and appliances, moving in is hassle-free and easy. The spacious living area, modern kitchen, and cozy bedrooms make these flats a desirable choice for those looking for a stylish yet functional living space. In Rosehill, Bath, it is normal for student Flats to be fully furnished, making it an ideal option for those seeking a ready-to-move-in home. Enjoy the vibrant community and excellent amenities that Rosehill has to offer while making one of these fully furnished flats your new home in Bath.</p><a id = "how_close_is_rosehill_to_the_city_center"> <h2>How close is Rosehill to the City Center</h2></a><p><b>Rosehill</b> is conveniently located just a few <b>miles</b> away from the heart of <b>Bath city center</b>. With its close proximity, residents of <b>Rosehill</b> can easily access all the attractions and amenities that the historic city has to offer. Whether you want to explore the stunning architecture of Bath Abbey, relax in the Thermae Bath Spa, or shop in the charming boutiques along Milsom Street, everything is just a short distance away from <b>Rosehill</b>. The city center is easily accessible by car, bus, or even on foot for those who enjoy a leisurely stroll through the picturesque streets. With its close proximity to <b>Bath city center</b>, <b>Rosehill</b> offers residents the perfect combination of tranquility and convenience.</p><a id = "how_close_is_rosehill_to_the_university_of_bath"> <h2>How close is Rosehill to the University of Bath</h2></a><p>Rosehill is conveniently located just a few <b>miles</b> away from the prestigious <b>University of Bath</b>, making it an ideal choice for students looking for accommodation near campus. <b>by foot</b>, the <b>University of Bath</b> is roughly a 30-minute walk from Rosehill, providing a scenic route for those who prefer to soak in the surroundings. For those seeking a quicker commute, the university is easily accessible <b>by bus</b>, with frequent services running between Rosehill and the campus. Alternatively, students with access to a car can reach the <b>University of Bath</b> in just a short drive, making it a convenient option for those who prefer to drive themselves. Overall, Rosehill's proximity to the <b>University of Bath</b> ensures that students can easily access campus facilities and amenities without any hassle.</p><a id = "how_close_is_rosehill_to_the_bath_spa_university"> <h2>How close is Rosehill to the Bath Spa University</h2></a><p>Rosehill is conveniently located near <b>Bath Spa University</b>, making it easy for students to access the campus. The university is just a few <b>miles</b> away from Rosehill, making it a quick commute whether <b>by foot</b>, bus, or car. The campus is easily reachable <b>by bus</b>, with a direct <b>bus route</b> connecting Rosehill to <b>Bath Spa University</b>. For those who prefer to drive, the university is just a short car ride away. This proximity allows students to easily attend classes, access campus resources, and participate in university events without having to travel far. With the university being so close by, students living in Rosehill can enjoy the benefits of campus life while still being able to retreat to the quiet and peaceful neighborhood.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>If you are in search of a 2-bedroom student flat in Rosehill, Bath, you are in luck as this area offers a range of options that cater to students' needs. From spacious layouts to convenient locations near the university campus, there are plenty of choices to consider. When looking for a two-bedroom student flat, it's important to prioritize factors such as affordability, proximity to amenities, and the overall condition of the property. Additionally, considering the security and safety features of the building can give you peace of mind during your time living there. Overall, finding a suitable 2-bedroom flat in Rosehill, Bath, involves thorough research and weighing the pros and cons of each option to ensure you find the perfect place to call home during your academic journey.</p></>)
};

export default BathRosehillFlat2;