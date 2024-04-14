
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


const  BathKensingtonHouse7 = () => 
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

    return (<><h1>7 Bedroom Student Houses in Kensington, Bath</h1><p>We have listings for <b>7 Bedroom Student Houses in Kensington, Bath</b> for the academic year 2024. 
<b>7 Bedroom Student Houses in Kensington, Bath</b> are ideal for larger groups of students looking to live together in a spacious and comfortable accommodation in a charming area of Bath. These houses offer plenty of space for communal living, study areas, and are located close to amenities and transport links.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/7-bedroom-student-houses-in-kensington-bath.png')} alt='7 Bedroom Student Houses in Kensington, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='7 Bedroom Student Houses in Kensington, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61722&type=House&beds=7")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>7 Bedroom Student Houses in Kensington, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_7_bedroom_student_houses_in_kensington,_bath_pp/pm">Prices for 7 Bedroom Student Houses in Kensington, Bath pp/pm</a></li><li><a href = "#7_bedroom_student_houses_in_kensington,_bath__all_bills_inclusive">7 Bedroom Student Houses in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_7_bedroom_student_houses_in_kensington,_bath">Cheap 7 Bedroom Student Houses in Kensington, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_kensington,_bath__recently_added">7 Bedroom Student Houses in Kensington, Bath - Recently Added</a></li><li><a href = "#7_bedroom_student_houses_in_kensington,_bath__recently_reduced">7 Bedroom Student Houses in Kensington, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__7_bedroom_houses_in_kensington,_bath,_somerset,_bath">Student Accommodation Portal - 7 Bedroom Houses in Kensington, Bath, Somerset, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_kensington,_bath__private_rental_sector">7 Bedroom Student Houses in Kensington, Bath - Private Rental Sector</a></li><li><a href = "#7_bedroom_student_houses_in_kensington,_bath__fully_furnished">7 Bedroom Student Houses in Kensington, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_kensington_to_the_city_center">How close is Kensington to the City Center</a></li><li><a href = "#how_close_is_kensington_to_the_university_of_bath">How close is Kensington to the University of Bath</a></li><li><a href = "#how_close_is_kensington_to_the_bath_spa_university">How close is Kensington to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_7_bedroom_student_houses_in_kensington,_bath_pp/pm"> <h2>Prices for 7 Bedroom Student Houses in Kensington, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton tableButton' title='7 Bedroom Student Houses in Kensington, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "7_bedroom_student_houses_in_kensington,_bath__all_bills_inclusive"> <h2>7 Bedroom Student Houses in Kensington, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 7 bedroom house in Kensington, Bath, Somerset? Managing bills can be a headache, especially when you're trying to <b>concentrate on your studies</b>. That's why subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> could be the perfect solution for you. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option they provide, taking care of all your utilities such as gas, electricity, water, and even internet. This means no more worrying about splitting bills with your housemates or dealing with late payments. Instead, you can focus on what really matters – excelling in your studies and making the most of your student experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and enjoy a stress-free living environment.</p><a id = "cheap_7_bedroom_student_houses_in_kensington,_bath"> <h2>Cheap 7 Bedroom Student Houses in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_kensington,_bath__recently_added"> <h2>7 Bedroom Student Houses in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_kensington,_bath__recently_reduced"> <h2>7 Bedroom Student Houses in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__7_bedroom_houses_in_kensington,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 7 Bedroom Houses in Kensington, Bath, Somerset, Bath</h2></a><p>Are you searching for the perfect 7 bedroom student house in the vibrant city of <b>Bath</b>? Look no further than our property portal, where you can find a range of stunning properties in the sought-after area of Kensington, <b>Bath</b>, Somerset. With close proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University, our houses are ideal for students looking for a convenient and comfortable living space. Whether you're studying with a large group of friends or looking to share with other students, our listings offer spacious accommodation with modern amenities to suit your needs.</p><a id = "7_bedroom_student_houses_in_kensington,_bath__private_rental_sector"> <h2>7 Bedroom Student Houses in Kensington, Bath - Private Rental Sector</h2></a><p>Are you looking for a luxurious and spacious living arrangement in the heart of Bath, Somerset? Look no further than the stunning 7 Bedroom Houses in Kensington, Bath. These properties offer the perfect blend of elegance and comfort, with each room meticulously designed and <b>fully furnished</b> to meet your every need. Imagine coming home to a stylish and modern space where you can unwind and relax after a long day. What's more, renting one of these houses comes with the added convenience of having <b>bills included</b>, giving you peace of mind and making budgeting a breeze. Whether you're a student looking for a shared accommodation or a large family in need of ample space, these <b>7 Bedroom Houses in Kensington, Bath, Somerset, Bath</b> are the ideal choice for those who appreciate quality living.</p><a id = "7_bedroom_student_houses_in_kensington,_bath__fully_furnished"> <h2>7 Bedroom Student Houses in Kensington, Bath - Fully Furnished</h2></a><p>Looking for a luxurious and convenient living space in Kensington, Bath, Somerset? Look no further than <b>fully furnished 7 Bedroom Houses in Kensington, Bath, Somerset, Bath</b>. These homes offer the perfect blend of comfort and style, making them an ideal choice for families, professionals, or students looking for a spacious and well-equipped accommodation. With seven bedrooms, there is plenty of room for everyone to have their own space, whether it be for studying, working from home, or relaxing. Additionally, it is normal for student Houses to be fully furnished, meaning you can move in hassle-free and start enjoying your new home right away. From modern furniture to high-quality appliances, these houses are designed to make your life easier and more enjoyable. Don't miss out on the opportunity to live in one of these stunning properties in the heart of Kensington, Bath, Somerset.</p><a id = "how_close_is_kensington_to_the_city_center"> <h2>How close is Kensington to the City Center</h2></a><p><b>Kensington</b> is a picturesque area located in the heart of London, known for its affluent residents, upscale shopping boutiques, and beautiful Georgian architecture. If you're considering a trip to <b>Bath city center</b> from <b>Kensington</b>, you'll be pleased to know that the two cities are approximately 100 <b>miles</b> apart. While this may seem like a considerable distance, the journey can be easily completed in just over an hour by train from London Paddington station. <b>Bath city center</b>, famous for its Roman-built baths, stunning Georgian townhouses, and vibrant cultural scene, is a UNESCO World Heritage site filled with history and charm. So, if you're looking to immerse yourself in the rich history and beauty that Bath has to offer, rest assured that it's just a stone's throw away from <b>Kensington</b>.</p><a id = "how_close_is_kensington_to_the_university_of_bath"> <h2>How close is Kensington to the University of Bath</h2></a><p>Kensington is conveniently located just 2 <b>miles</b> away from the <b>University of Bath</b>, making it an ideal residential area for students and faculty members alike. The university is easily accessible from Kensington by various modes of transportation. For those who prefer walking, it is approximately a 40-minute stroll through the lovely city streets. Alternatively, there is a direct <b>bus route</b> that connects Kensington to the university, providing a quick and easy commute for those who prefer public transportation. The journey <b>by bus</b> takes around 15-20 minutes, depending on traffic. Additionally, for those with access to a car, the university is only a short 10-minute drive away. With its close proximity to the <b>University of Bath</b> and convenient transportation options, Kensington is the perfect place to call home for those studying or working at the esteemed institution.</p><a id = "how_close_is_kensington_to_the_bath_spa_university"> <h2>How close is Kensington to the Bath Spa University</h2></a><p>Kensington is approximately 100 <b>miles</b> away from <b>Bath Spa University</b>, making it quite a distance for anyone looking to commute regularly. However, there are several convenient ways to get to the university from Kensington. The most direct mode of transportation would be <b>by car</b>, which would take around 2-3 hours depending on traffic. Alternatively, taking the <b>bus route</b> is a budget-friendly option, with the journey taking a bit longer, typically around 4-5 hours. If you prefer a more active approach, walking from Kensington to <b>Bath Spa University</b> would be quite the trek, taking several days to complete. Overall, while not exactly close, there are diverse methods of getting to <b>Bath Spa University</b> from Kensington, catering to various preferences and budgets.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 7-bedroom student house in Kensington, Bath can be a daunting task, but with proper research and patience, you can find the perfect accommodation. The vibrant neighborhood of Kensington boasts a mix of beautiful Georgian architecture, green spaces, and ample amenities, making it a sought-after location for students. When searching for a student house, it is crucial to consider factors such as proximity to campus, transport links, and local amenities. Additionally, ensuring that the property meets safety standards and has adequate living space for all tenants is essential. By carefully assessing your needs and preferences, you can secure a comfortable and convenient student house in Kensington. In conclusion, with its charming surroundings and convenient location, finding a 7-bedroom student house in Kensington, Bath can provide a wonderful living experience for students.</p></>)
};

export default BathKensingtonHouse7;