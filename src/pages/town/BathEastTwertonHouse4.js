
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


const  BathEastTwertonHouse4 = () => 
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

    return (<><h1>4 Bedroom Student Houses in East Twerton, Bath</h1><p>We have listings for <b>4 Bedroom Student Houses in East Twerton, Bath</b> for the academic year 2024. 

<b>4 Bedroom Student Houses in East Twerton, Bath</b> offer spacious accommodation for students looking to live together in a convenient location in Bath. These houses typically come fully furnished and are equipped with amenities to support student living, making them a popular choice for groups of students looking for a comfortable and convenient living space. With easy access to local amenities, transportation, and academic institutions, <b>4 Bedroom Student Houses in East Twerton, Bath</b> provide an ideal living environment for students in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-houses-in-east-twerton-bath.png')} alt='4 Bedroom Student Houses in East Twerton, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Houses in East Twerton, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71098&type=House&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Houses in East Twerton, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_houses_in_east_twerton,_bath_pp/pm">Prices for 4 Bedroom Student Houses in East Twerton, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_houses_in_east_twerton,_bath__all_bills_inclusive">4 Bedroom Student Houses in East Twerton, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_houses_in_east_twerton,_bath">Cheap 4 Bedroom Student Houses in East Twerton, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_east_twerton,_bath__recently_added">4 Bedroom Student Houses in East Twerton, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_houses_in_east_twerton,_bath__recently_reduced">4 Bedroom Student Houses in East Twerton, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_houses_in_east_twerton,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Houses in East Twerton, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_east_twerton,_bath__private_rental_sector">4 Bedroom Student Houses in East Twerton, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_houses_in_east_twerton,_bath__fully_furnished">4 Bedroom Student Houses in East Twerton, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_east_twerton_to_the_city_center">How close is East Twerton to the City Center</a></li><li><a href = "#how_close_is_east_twerton_to_the_university_of_bath">How close is East Twerton to the University of Bath</a></li><li><a href = "#how_close_is_east_twerton_to_the_bath_spa_university">How close is East Twerton to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_houses_in_east_twerton,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Houses in East Twerton, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£587 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Houses in East Twerton, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71098")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_houses_in_east_twerton,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Houses in East Twerton, Bath - All Bills Inclusive</h2></a><p>Tired of juggling multiple bills for your student house in East Twerton, Bath, Somerset? Say goodbye to the stress of managing utility payments, internet bills, and council tax separately. Simplify your life by opting for an <b>all bills inclusive</b> service with <b>UniBills.com</b>. With this convenient option, you can <b>concentrate on your studies</b> without worrying about the details of your household expenses. <b>UniBills.com</b> offers a hassle-free experience, ensuring that all your bills are covered in one easy payment. Enjoy the peace of mind that comes with knowing your financial obligations are taken care of, leaving you free to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life more manageable and enjoyable.</p><a id = "cheap_4_bedroom_student_houses_in_east_twerton,_bath"> <h2>Cheap 4 Bedroom Student Houses in East Twerton, Bath</h2></a><p><Portlet location="REGION^71098" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_east_twerton,_bath__recently_added"> <h2>4 Bedroom Student Houses in East Twerton, Bath - Recently Added</h2></a><p><Portlet location="REGION^71098" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_east_twerton,_bath__recently_reduced"> <h2>4 Bedroom Student Houses in East Twerton, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71098" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_houses_in_east_twerton,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Houses in East Twerton, Bath, Somerset, Bath</h2></a><p>Looking for a 4 Bedroom House in East Twerton, <b>Bath</b>, Somerset? Look no further! Our property portal specializes in <b>student Houses</b> in the vibrant city of <b>Bath</b>, home to both the prestigious University of <b>Bath</b> and <b>Bath</b> Spa University. We understand the unique needs of students looking for comfortable and convenient accommodation, which is why we offer a wide selection of quality properties in the sought-after East Twerton area. Whether you're searching for a cozy student home with your friends or seeking a spacious house for your group, our portal has got you covered. With easy access to the city center, local amenities, and transport links, living in East Twerton ensures a well-connected and enjoyable student experience.</p><a id = "4_bedroom_student_houses_in_east_twerton,_bath__private_rental_sector"> <h2>4 Bedroom Student Houses in East Twerton, Bath - Private Rental Sector</h2></a><p>If you are searching for comfortable and convenient living arrangements in Bath, Somerset, look no further than the private rental sector offering 4 Bedroom Houses in East Twerton. These properties are not just spacious but come <b>fully furnished</b>, making your move-in process a breeze. Imagine coming home to a cozy living room, a well-equipped kitchen, and four inviting bedrooms to choose from. What sets these houses apart is the luxury of having <b>bills included</b> in your rent, taking away the hassle of individual payments. Whether you are a family looking for a long-term home or a group of friends seeking a shared space, these <b>4 Bedroom Houses in East Twerton, Bath, Somerset, Bath</b> offer the perfect blend of comfort and convenience.</p><a id = "4_bedroom_student_houses_in_east_twerton,_bath__fully_furnished"> <h2>4 Bedroom Student Houses in East Twerton, Bath - Fully Furnished</h2></a><p>Welcome to the charming neighborhood of East Twerton in Bath, Somerset, where fully furnished 4 Bedroom Houses await you. Located in a beautiful and peaceful area, these houses are perfect for families or students looking for a spacious and comfortable home. In East Twerton, it is normal for student houses to be fully furnished, making it convenient and hassle-free for tenants. The houses come equipped with everything you need, from cozy beds and study desks to all the kitchen appliances you could ask for. With four bedrooms, there's plenty of space for everyone to relax and unwind. Additionally, the houses are thoughtfully decorated and designed to create a warm and inviting atmosphere. Don't miss out on the opportunity to live in one of these lovely <b>fully furnished 4 Bedroom Houses in East Twerton, Bath, Somerset, Bath</b>.</p><a id = "how_close_is_east_twerton_to_the_city_center"> <h2>How close is East Twerton to the City Center</h2></a><p><b>East Twerton</b> is located just a few <b>miles</b> away from <b>Bath city center</b>, making it a convenient and easily accessible area for those looking to explore all that Bath has to offer. Situated to the west of the city, <b>East Twerton</b> is approximately 2 <b>miles</b> away from the bustling heart of Bath. This close proximity means residents and visitors alike can enjoy the vibrant city center with its historic attractions, shops, restaurants, and cultural landmarks without having to travel far. Whether you're interested in exploring the Roman Baths, taking a leisurely stroll along the River Avon, or indulging in some retail therapy at SouthGate Bath, <b>East Twerton</b>'s location makes it an ideal starting point for all your adventures in <b>Bath city center</b>. Experience the best of both worlds by staying close to the action while also enjoying the peace and quiet of <b>East Twerton</b>'s residential streets.</p><a id = "how_close_is_east_twerton_to_the_university_of_bath"> <h2>How close is East Twerton to the University of Bath</h2></a><p>East Twerton is located just 2 <b>miles</b> away from the prestigious <b>University of Bath</b>, making it a convenient location for students and staff. For those looking to commute to the university, there are multiple options available. <b>by foot</b>, it would take around 40 minutes to reach the campus, providing a scenic and healthy way to travel. Alternatively, there is a direct <b>bus route</b> that connects East Twerton to the university, making the journey quick and hassle-free. For those with access to a car, the university is just a short drive away, taking around 10 minutes to reach the campus. With its close proximity to the <b>University of Bath</b>, East Twerton provides a convenient and accessible location for those studying or working at the renowned institution.</p><a id = "how_close_is_east_twerton_to_the_bath_spa_university"> <h2>How close is East Twerton to the Bath Spa University</h2></a><p>East Twerton is conveniently located close to <b>Bath Spa University</b>, making it a great option for students looking for a nearby place to live. The university is just a few <b>miles</b> away and can be easily reached <b>by foot</b>, bus, or car. For those who prefer walking, it would take approximately 35-40 minutes to get to the university campus. The <b>bus route</b> connecting East Twerton to <b>Bath Spa University</b> is also very convenient, with frequent services running throughout the day. <b>by bus</b>, the journey would take around 15-20 minutes, making it a quick and easy commute. Alternatively, students with cars can reach the university in just 10-15 minutes, depending on traffic. This close proximity to the university offers students the perfect balance between a peaceful residential area and easy access to campus facilities, making East Twerton a popular choice for student accommodation.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>If you're a student looking for a comfortable and convenient 4-bedroom student house in East Twerton, Bath, look no further. With its picturesque surroundings and close proximity to local amenities, East Twerton offers the perfect blend of tranquility and accessibility for students. When searching for a student house in this area, take note of important factors such as transportation links, nearby shops, and leisure facilities. Additionally, make sure to consider the property's condition and rental terms before making a decision. Overall, finding a 4-bedroom student house in East Twerton can be a rewarding experience, providing you with the ideal setting to focus on your studies while enjoying a vibrant college life.</p></>)
};

export default BathEastTwertonHouse4;