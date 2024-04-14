
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


const  BathWestonParkHouse5 = () => 
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

    return (<><h1>5 Bedroom Student Houses in Weston Park, Bath</h1><p>We have listings for <b>5 Bedroom Student Houses in Weston Park, Bath</b> for the academic year 2024.
<b>5 Bedroom Student Houses in Weston Park, Bath</b> provide spacious accommodation for students studying in Bath. Situated in a convenient location, close to the university and local amenities, these houses offer a comfortable and convenient living space for students to focus on their academic pursuits.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/5-bedroom-student-houses-in-weston-park-bath.png')} alt='5 Bedroom Student Houses in Weston Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='5 Bedroom Student Houses in Weston Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71122&type=House&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>5 Bedroom Student Houses in Weston Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_5_bedroom_student_houses_in_weston_park,_bath_pp/pm">Prices for 5 Bedroom Student Houses in Weston Park, Bath pp/pm</a></li><li><a href = "#5_bedroom_student_houses_in_weston_park,_bath__all_bills_inclusive">5 Bedroom Student Houses in Weston Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_5_bedroom_student_houses_in_weston_park,_bath">Cheap 5 Bedroom Student Houses in Weston Park, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_weston_park,_bath__recently_added">5 Bedroom Student Houses in Weston Park, Bath - Recently Added</a></li><li><a href = "#5_bedroom_student_houses_in_weston_park,_bath__recently_reduced">5 Bedroom Student Houses in Weston Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__5_bedroom_houses_in_weston_park,_bath,_somerset,_bath">Student Accommodation Portal - 5 Bedroom Houses in Weston Park, Bath, Somerset, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_weston_park,_bath__private_rental_sector">5 Bedroom Student Houses in Weston Park, Bath - Private Rental Sector</a></li><li><a href = "#5_bedroom_student_houses_in_weston_park,_bath__fully_furnished">5 Bedroom Student Houses in Weston Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_weston_park_to_the_city_center">How close is Weston Park to the City Center</a></li><li><a href = "#how_close_is_weston_park_to_the_university_of_bath">How close is Weston Park to the University of Bath</a></li><li><a href = "#how_close_is_weston_park_to_the_bath_spa_university">How close is Weston Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_5_bedroom_student_houses_in_weston_park,_bath_pp/pm"> <h2>Prices for 5 Bedroom Student Houses in Weston Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£725 per month </td><td><button className = 'searchButton tableButton' title='5 Bedroom Student Houses in Weston Park, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71122")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "5_bedroom_student_houses_in_weston_park,_bath__all_bills_inclusive"> <h2>5 Bedroom Student Houses in Weston Park, Bath - All Bills Inclusive</h2></a><p>Living in a 5-bedroom student house in Weston Park, Bath, Somerset comes with its own challenges, especially when it comes to managing bills and expenses. Subscribing to an <b>all bills inclusive</b> service can make your life much easier. <b>UniBills.com</b> provides a convenient solution that allows you to enjoy the hassle-free all inclusive option. By opting for this service, you won't have to worry about dividing utility bills among housemates or dealing with late payments. Instead, you can <b>concentrate on your studies</b> and social life without the stress of managing multiple bills. <b>UniBills.com</b> takes care of everything, from gas and electricity to water and internet, ensuring that you have a smooth and convenient living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Weston Park more enjoyable and stress-free.</p><a id = "cheap_5_bedroom_student_houses_in_weston_park,_bath"> <h2>Cheap 5 Bedroom Student Houses in Weston Park, Bath</h2></a><p><Portlet location="REGION^71122" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_weston_park,_bath__recently_added"> <h2>5 Bedroom Student Houses in Weston Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71122" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_weston_park,_bath__recently_reduced"> <h2>5 Bedroom Student Houses in Weston Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71122" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__5_bedroom_houses_in_weston_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 5 Bedroom Houses in Weston Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable living space in <b>Bath</b>, Somerset? Look no further than our property portal, where you can easily find <b>5 Bedroom Houses</b> in Weston Park, <b>Bath</b>. Located in close proximity to prestigious educational institutions like the University of <b>Bath</b> and <b>Bath</b> Spa University, these <b>student Houses</b> offer the perfect accommodation for those seeking a blend of convenience and comfort. Weston Park is a peaceful and well-connected neighborhood, making it an ideal location for students looking for a tranquil living environment while still being within easy reach of the city center. Whether you're studying for exams or socializing with friends, these <b>5 Bedroom Houses</b> offer ample space for both work and play. Don't miss out on the opportunity to secure your ideal student accommodation in Weston Park, <b>Bath</b>, and make the most of your university experience.</p><a id = "5_bedroom_student_houses_in_weston_park,_bath__private_rental_sector"> <h2>5 Bedroom Student Houses in Weston Park, Bath - Private Rental Sector</h2></a><p>Are you searching for a spacious and comfortable living space in Bath, Somerset? Look no further than the beautiful 5 Bedroom Houses in Weston Park, Bath. These stunning properties offer ample room for you and your housemates to relax and unwind. In addition to the convenience of having five bedrooms, these houses come <b>fully furnished</b>, saving you the hassle of furnishing the space yourself. With <b>bills included</b> in the rental price, you can enjoy a stress-free living experience without worrying about additional expenses. Located in the charming area of Weston Park, these houses provide easy access to local amenities, schools, and transport links.</p><a id = "5_bedroom_student_houses_in_weston_park,_bath__fully_furnished"> <h2>5 Bedroom Student Houses in Weston Park, Bath - Fully Furnished</h2></a><p>If you are looking for spacious and comfortable living in the heart of Bath, Somerset, look no further than the fully furnished 5 Bedroom Houses in Weston Park. These houses offer the perfect combination of convenience and luxury, with everything you need for a relaxing and enjoyable stay. Situated in a prime location, these properties are ideal for students, families, or professionals looking for a home away from home. Whether you are studying at the nearby university or simply exploring the beauty of Bath, these houses provide a cozy retreat. In Weston Park, Bath, it is normal for student Houses to be fully furnished, ensuring that you have all the essentials for a comfortable stay. From stylish decor to modern amenities, these houses have it all. Don't miss out on the opportunity to live in one of these stunning properties and experience the best of Bath living.</p><a id = "how_close_is_weston_park_to_the_city_center"> <h2>How close is Weston Park to the City Center</h2></a><p><b>Weston Park</b> is situated just a few <b>miles</b> away from <b>Bath city center</b>, making it a convenient location for those looking to explore the historic city. With its beautiful grounds and impressive mansion, <b>Weston Park</b> offers a peaceful retreat from the hustle and bustle of the city. Visitors can easily access <b>Bath city center</b> by car, bus, or even on foot, allowing them to immerse themselves in the rich history and culture that the city has to offer. Whether you're looking to relax in nature or explore the vibrant streets of Bath, <b>Weston Park</b>'s proximity to the city center makes it an ideal base for your next adventure.</p><a id = "how_close_is_weston_park_to_the_university_of_bath"> <h2>How close is Weston Park to the University of Bath</h2></a><p>Weston Park is conveniently located near the <b>University of Bath</b>, being approximately 1.5 <b>miles</b> away from the campus. For students looking to commute to the university, there are several options available. <b>by foot</b>, it would take around 30 minutes to walk from Weston Park to the <b>University of Bath</b>, making it a pleasant and easily accessible journey for those who prefer walking. For those who prefer public transportation, there is a direct <b>bus route</b> that connects Weston Park to the university, providing a quick and convenient way to commute. The bus ride takes around 10-15 minutes, depending on traffic. Additionally, for students who own a car, the drive from Weston Park to the <b>University of Bath</b> typically takes around 5-10 minutes, making it a convenient option for those who prefer driving. Overall, Weston Park's close proximity to the <b>University of Bath</b> offers students various transportation options to easily and efficiently access the campus.</p><a id = "how_close_is_weston_park_to_the_bath_spa_university"> <h2>How close is Weston Park to the Bath Spa University</h2></a><p>Weston Park is conveniently located near <b>Bath Spa University</b>, being only a few <b>miles</b> away from the campus. <b>by foot</b>, the park is about a 20-minute walk from the university, making it an ideal outdoor escape for students and faculty looking for a quick nature break. For those looking for a quicker commute, the park is easily accessible <b>by bus</b>, with several routes stopping nearby. If you prefer to drive, Weston Park is just a short car journey away from <b>Bath Spa University</b>, with ample parking available. Whether you're looking to unwind in nature after a long day of lectures or simply explore the beauty of the park, Weston Park is a stone's throw away from the university campus, offering a peaceful retreat just moments away from the bustling campus life.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>When searching for a 5-bedroom student house in Weston Park, Bath, it is crucial to consider various factors to ensure a comfortable and conducive living environment for all housemates. Location plays a vital role, with Weston Park being a popular choice due to its proximity to the university campus and local amenities. The size of the house and bedroom configurations are also essential, providing ample space for studying and relaxation. Additionally, amenities like communal areas, parking spaces, and outdoor spaces should be taken into account to enhance the overall living experience. After conducting thorough research and viewings, it is advisable to finalize the decision based on factors like rental costs, lease terms, and the overall suitability of the property for your needs. In conclusion, finding a 5-bedroom student house in Weston Park requires careful consideration of various aspects to ensure a comfortable and enjoyable living experience for all occupants. If you manage to find a property that ticks all the boxes, you and your housemates are sure to have a memorable and successful student living experience.</p></>)
};

export default BathWestonParkHouse5;