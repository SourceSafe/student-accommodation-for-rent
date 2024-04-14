
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


const  BathTwertonHillHouse8 = () => 
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

    return (<><h1>8 Bedroom Student Houses in Twerton Hill, Bath</h1><p>We have listings for <b>8 Bedroom Student Houses in Twerton Hill, Bath</b> for the academic year 2024.

Located in the charming area of Twerton Hill in Bath, these 8 Bedroom Student Houses offer spacious accommodation for students looking to live together in a shared space. With easy access to local amenities, university campuses, and public transportation, these houses provide a convenient and comfortable living environment for students studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/8-bedroom-student-houses-in-twerton-hill-bath.png')} alt='8 Bedroom Student Houses in Twerton Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='8 Bedroom Student Houses in Twerton Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71120&type=House&beds=8")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>8 Bedroom Student Houses in Twerton Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_8_bedroom_student_houses_in_twerton_hill,_bath_pp/pm">Prices for 8 Bedroom Student Houses in Twerton Hill, Bath pp/pm</a></li><li><a href = "#8_bedroom_student_houses_in_twerton_hill,_bath__all_bills_inclusive">8 Bedroom Student Houses in Twerton Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_8_bedroom_student_houses_in_twerton_hill,_bath">Cheap 8 Bedroom Student Houses in Twerton Hill, Bath</a></li><li><a href = "#8_bedroom_student_houses_in_twerton_hill,_bath__recently_added">8 Bedroom Student Houses in Twerton Hill, Bath - Recently Added</a></li><li><a href = "#8_bedroom_student_houses_in_twerton_hill,_bath__recently_reduced">8 Bedroom Student Houses in Twerton Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__8_bedroom_houses_in_twerton_hill,_bath,_somerset,_bath">Student Accommodation Portal - 8 Bedroom Houses in Twerton Hill, Bath, Somerset, Bath</a></li><li><a href = "#8_bedroom_student_houses_in_twerton_hill,_bath__private_rental_sector">8 Bedroom Student Houses in Twerton Hill, Bath - Private Rental Sector</a></li><li><a href = "#8_bedroom_student_houses_in_twerton_hill,_bath__fully_furnished">8 Bedroom Student Houses in Twerton Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_twerton_hill_to_the_city_center">How close is Twerton Hill to the City Center</a></li><li><a href = "#how_close_is_twerton_hill_to_the_university_of_bath">How close is Twerton Hill to the University of Bath</a></li><li><a href = "#how_close_is_twerton_hill_to_the_bath_spa_university">How close is Twerton Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_8_bedroom_student_houses_in_twerton_hill,_bath_pp/pm"> <h2>Prices for 8 Bedroom Student Houses in Twerton Hill, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton tableButton' title='8 Bedroom Student Houses in Twerton Hill, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "8_bedroom_student_houses_in_twerton_hill,_bath__all_bills_inclusive"> <h2>8 Bedroom Student Houses in Twerton Hill, Bath - All Bills Inclusive</h2></a><p>Subscribe to an <b>all bills inclusive</b> service for your 8 bedroom student house in Twerton Hill, Bath, Somerset, through <b>UniBills.com</b>, and experience the ultimate convenience. With all bills covered in one easy payment, you can <b>concentrate on your studies</b> without the added stress of managing individual bills. <b>UniBills.com</b> takes care of utilities, internet, and maintenance, so you can relax and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to budgeting headaches and unexpected expenses – simply get a quote from <b>UniBills.com</b> or any accommodation on this website, and ensure a seamless living experience with everything included. Opting for an <b>all bills inclusive</b> service not only simplifies your life but also promotes a stress-free environment, fostering a conducive space for academic success.</p><a id = "cheap_8_bedroom_student_houses_in_twerton_hill,_bath"> <h2>Cheap 8 Bedroom Student Houses in Twerton Hill, Bath</h2></a><p><Portlet location="REGION^71120" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "8_bedroom_student_houses_in_twerton_hill,_bath__recently_added"> <h2>8 Bedroom Student Houses in Twerton Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71120" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "8_bedroom_student_houses_in_twerton_hill,_bath__recently_reduced"> <h2>8 Bedroom Student Houses in Twerton Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71120" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__8_bedroom_houses_in_twerton_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 8 Bedroom Houses in Twerton Hill, Bath, Somerset, Bath</h2></a><p>Are you a student searching for spacious and comfortable accommodation in <b>Bath</b>, Somerset? Look no further than our property portal, where you can easily find 8 bedroom <b>student Houses</b> in the charming area of Twerton Hill, <b>Bath</b>. This prime location is ideal for students attending the University of <b>Bath</b> or <b>Bath</b> Spa University, offering convenience and easy access to campus and local amenities. These <b>8 Bedroom Houses</b> provide plenty of space for you and your housemates to live and study comfortably, making it the perfect choice for a group of friends looking to share a home while pursuing their education. Don't miss out on the opportunity to find the perfect student house in the sought-after location of Twerton Hill, <b>Bath</b>, through our property portal.</p><a id = "8_bedroom_student_houses_in_twerton_hill,_bath__private_rental_sector"> <h2>8 Bedroom Student Houses in Twerton Hill, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and convenient living arrangement in Bath? Look no further than the private rental sector offering 8 bedroom houses in Twerton Hill, Bath, Somerset. These properties come <b>fully furnished</b>, making it easy for tenants to move in and feel right at home. Additionally, renting in this area often includes <b>bills included</b> in the monthly cost, taking the hassle out of managing utilities separately. Whether you're a group of friends looking to share a living space or a large family searching for a comfortable home, these 8 bedroom houses provide ample room for everyone. Take advantage of this fantastic opportunity to live in a beautiful location with all the comforts of home provided.</p><a id = "8_bedroom_student_houses_in_twerton_hill,_bath__fully_furnished"> <h2>8 Bedroom Student Houses in Twerton Hill, Bath - Fully Furnished</h2></a><p>Nestled in the charming neighborhood of Twerton Hill in Bath, Somerset, Bath, you'll find a selection of stunning fully furnished 8 Bedroom Houses. These spacious homes are ideal for student living, as it is normal for student houses to be fully furnished. Each house boasts a modern and stylish decor, complete with all the necessary furniture and appliances to ensure a comfortable and convenient living experience. The bedrooms are spacious and welcoming, providing a peaceful retreat for studying and relaxation. The communal areas are perfect for socializing and bonding with housemates, making it easy to create lasting memories. Located in a picturesque setting with easy access to local amenities and public transportation, these fully furnished homes in Twerton Hill offer the perfect blend of comfort and convenience for students looking for their home away from home.</p><a id = "how_close_is_twerton_hill_to_the_city_center"> <h2>How close is Twerton Hill to the City Center</h2></a><p>Situated just over a mile west of <b>Bath city center</b>, <b>Twerton Hill</b> offers a unique blend of residential tranquility and convenient proximity to the bustling heart of Bath. This charming neighborhood provides a peaceful retreat from the vibrant city center, while still being within easy reach of all its exciting attractions and amenities. The pleasant walk or short drive to <b>Bath city center</b> makes <b>Twerton Hill</b> an ideal location for those who value a balance between urban convenience and a more relaxed suburban lifestyle. With its cozy atmosphere and quick access to the city's vibrant cultural scene, <b>Twerton Hill</b> is the perfect choice for those looking to enjoy the best of both worlds. Whether strolling through the historic streets of Bath or relaxing in the peace and quiet of <b>Twerton Hill</b>, residents here truly have the best of both worlds within just a few <b>miles</b>' reach.</p><a id = "how_close_is_twerton_hill_to_the_university_of_bath"> <h2>How close is Twerton Hill to the University of Bath</h2></a><p>Twerton Hill is a perfectly situated area for students attending the renowned <b>University of Bath</b>. Located just 1.5 <b>miles</b> away from the university campus, students have convenient access to the prestigious institution. For those who prefer to walk, the university is only a 30-minute stroll away. However, for a quicker commute, students can hop on the frequent <b>bus route</b> that connects Twerton Hill to the university in just 10 minutes. Additionally, with the option of driving, the journey can be completed in under 5 minutes <b>by car</b>. This close proximity allows students to easily balance their academic commitments with a comfortable and convenient living situation in Twerton Hill.</p><a id = "how_close_is_twerton_hill_to_the_bath_spa_university"> <h2>How close is Twerton Hill to the Bath Spa University</h2></a><p>Twerton Hill is a charming residential area located just a stone's throw away from <b>Bath Spa University</b>. Situated approximately 2.5 <b>miles</b> southwest of the university campus, Twerton Hill offers a convenient location for students and staff alike. <b>by foot</b>, the journey takes around 45 minutes, providing a pleasant walk through the picturesque streets of Bath. For those looking for a quicker commute, there is a direct <b>bus route</b> that can take you from Twerton Hill to <b>Bath Spa University</b> in just 15 minutes. If you prefer to drive, the journey <b>by car</b> is also a short 10-minute ride, making it easily accessible for those with their own transportation. Whether you choose to travel <b>by foot</b>, bus, or car, Twerton Hill's close proximity to <b>Bath Spa University</b> ensures a seamless and efficient journey to and from campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for 8 bedroom student houses in Twerton Hill, Bath can be a challenging yet exciting process. It is important to consider factors such as location, amenities, and budget when looking for the perfect accommodation for you and your housemates. Twerton Hill offers a range of options, from traditional Georgian-style homes to modern, purpose-built properties, catering to the diverse needs of students. By conducting thorough research and carefully considering your requirements, you can find a comfortable and convenient living space that meets all your needs. So, whether you prefer a bustling city center or a more serene suburban setting, Twerton Hill has something to offer for everyone. With its vibrant community, amenities, and proximity to the university, Twerton Hill is a fantastic choice for students looking for a spacious 8 bedroom house to call home.</p></>)
};

export default BathTwertonHillHouse8;