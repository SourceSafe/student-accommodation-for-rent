
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


const  BathRosehillHouse3 = () => 
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

    return (<><h1>3 Bedroom Student Houses in Rosehill, Bath</h1><p>We have listings for <b>3 Bedroom Student Houses in Rosehill, Bath</b> for the academic year 2024. 
<b>3 Bedroom Student Houses in Rosehill, Bath</b> are ideal for students looking for spacious accommodations in a convenient location within Bath. These houses typically offer communal living areas, bathrooms, and kitchens, making them perfect for sharing with roommates.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-houses-in-rosehill-bath.png')} alt='3 Bedroom Student Houses in Rosehill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Houses in Rosehill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71112&type=House&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Houses in Rosehill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_houses_in_rosehill,_bath_pp/pm">Prices for 3 Bedroom Student Houses in Rosehill, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_houses_in_rosehill,_bath__all_bills_inclusive">3 Bedroom Student Houses in Rosehill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_houses_in_rosehill,_bath">Cheap 3 Bedroom Student Houses in Rosehill, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_rosehill,_bath__recently_added">3 Bedroom Student Houses in Rosehill, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_houses_in_rosehill,_bath__recently_reduced">3 Bedroom Student Houses in Rosehill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_houses_in_rosehill,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Houses in Rosehill, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_rosehill,_bath__private_rental_sector">3 Bedroom Student Houses in Rosehill, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_houses_in_rosehill,_bath__fully_furnished">3 Bedroom Student Houses in Rosehill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rosehill_to_the_city_center">How close is Rosehill to the City Center</a></li><li><a href = "#how_close_is_rosehill_to_the_university_of_bath">How close is Rosehill to the University of Bath</a></li><li><a href = "#how_close_is_rosehill_to_the_bath_spa_university">How close is Rosehill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_houses_in_rosehill,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Houses in Rosehill, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£717 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Houses in Rosehill, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71112")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_houses_in_rosehill,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Houses in Rosehill, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3-bedroom house in Rosehill, Bath, Somerset? Managing bills and utilities can be a real hassle, especially when you're juggling coursework and exams. Instead of worrying about sorting out multiple bills, why not opt for an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers an all-inclusive package that covers all your utility bills, including electricity, gas, water, and even internet. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and not have to worry about budgeting for various bills each month. Enjoy the hassle-free, all inclusive option provided by <b>UniBills.com</b> and simplify your student living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and take the stress out of managing your household expenses.</p><a id = "cheap_3_bedroom_student_houses_in_rosehill,_bath"> <h2>Cheap 3 Bedroom Student Houses in Rosehill, Bath</h2></a><p><Portlet location="REGION^71112" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_rosehill,_bath__recently_added"> <h2>3 Bedroom Student Houses in Rosehill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71112" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_rosehill,_bath__recently_reduced"> <h2>3 Bedroom Student Houses in Rosehill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71112" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_houses_in_rosehill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Houses in Rosehill, Bath, Somerset, Bath</h2></a><p>Are you searching for the perfect student accommodation in <b>Bath</b>? Look no further than our property portal, where you can easily find a range of <b>3 Bedroom Houses</b> in the sought-after area of Rosehill, <b>Bath</b>, Somerset. These <b>student Houses</b> are ideal for those studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, offering convenient access to campus and the vibrant city center. With spacious living areas, modern kitchens, and comfortable bedrooms, these properties provide a relaxed and enjoyable living environment for students. Whether you prefer a cozy terraced house or a stylish semi-detached property, our portal has a variety of options to suit your needs.</p><a id = "3_bedroom_student_houses_in_rosehill,_bath__private_rental_sector"> <h2>3 Bedroom Student Houses in Rosehill, Bath - Private Rental Sector</h2></a><p>Welcome to the vibrant and historic city of Bath, Somerset, where you can find a range of attractive 3 Bedroom Houses in Rosehill. These properties offer an ideal blend of space and comfort, suitable for families or professionals looking for a charming place to call home. Many of these houses come <b>fully furnished</b>, saving you the time and hassle of having to furnish them yourself. Additionally, some landlords may offer the convenience of having <b>bills included</b> in the rent, easing the stress of managing multiple payments. With the convenience and flexibility of the private rental sector, finding the perfect 3 Bedroom House in Rosehill, Bath, Somerset, Bath has never been easier.</p><a id = "3_bedroom_student_houses_in_rosehill,_bath__fully_furnished"> <h2>3 Bedroom Student Houses in Rosehill, Bath - Fully Furnished</h2></a><p>Looking for fully furnished 3 Bedroom Houses in Rosehill, Bath, Somerset? Look no further! These houses offer all the comforts of home with a touch of luxury. Located in the picturesque town of Bath, these properties are ideal for students or families looking for a convenient and stylish living space. It is normal for student houses to be fully furnished, saving you the hassle of buying and moving furniture. Each house comes with three spacious bedrooms, a modern kitchen, and a cozy living room, perfect for relaxing or entertaining guests. With easy access to local amenities and beautiful surroundings, these houses provide the perfect balance of convenience and tranquility. Don't miss out on the opportunity to live in one of these charming fully furnished houses in the heart of Bath.</p><a id = "how_close_is_rosehill_to_the_city_center"> <h2>How close is Rosehill to the City Center</h2></a><p><b>Rosehill</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it a desirable location for those looking to be close to the vibrant heart of the historical city. The distance between <b>Rosehill</b> and <b>Bath city center</b> is approximately 2.5 <b>miles</b>, which can be easily covered by car, bus, or even on foot for those who enjoy a leisurely stroll. This close proximity offers residents of <b>Rosehill</b> easy access to all the cultural attractions, shopping opportunities, and dining options that <b>Bath city center</b> has to offer. Whether you're looking to explore the Roman baths, visit the iconic Royal Crescent, or simply enjoy a day of shopping and dining in the bustling city center, living in <b>Rosehill</b> puts you just a stone's throw away from all the action. So, if you're seeking a convenient and well-connected location near <b>Bath city center</b>, <b>Rosehill</b> is the perfect choice.</p><a id = "how_close_is_rosehill_to_the_university_of_bath"> <h2>How close is Rosehill to the University of Bath</h2></a><p>Rosehill is conveniently located close to the prestigious <b>University of Bath</b>, being just a few <b>miles</b> away. Students have the option to easily reach the campus both <b>by foot</b> or by taking a quick bus ride. For those who prefer to drive, the university is also easily accessible <b>by car</b>. With the <b>bus route</b> passing through Rosehill, commuting to and from the <b>University of Bath</b> is both convenient and efficient. This close proximity not only offers students living in Rosehill easy access to the university but also provides a vibrant and dynamic community for students to thrive in. Whether utilizing public transport or driving, getting to the <b>University of Bath</b> from Rosehill is a quick and effortless journey.</p><a id = "how_close_is_rosehill_to_the_bath_spa_university"> <h2>How close is Rosehill to the Bath Spa University</h2></a><p>Rosehill is conveniently located near <b>Bath Spa University</b>, just a few <b>miles</b> away. The university is easily accessible from Rosehill <b>by foot</b>, making it an ideal location for students looking for a quick commute. For those who prefer to take public transportation, there is a convenient <b>bus route</b> that runs between Rosehill and <b>Bath Spa University</b>. Additionally, students with access to a car can reach the university in just a short drive. Whether you choose to travel <b>by foot</b>, bus, or car, the proximity of Rosehill to <b>Bath Spa University</b> makes it a highly desirable location for students seeking a convenient and accessible living situation.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for 3 bedroom student houses in Rosehill, Bath can be an exciting yet challenging task. With a variety of options available, it's important to carefully consider your budget, location preferences, and amenities required for a comfortable living arrangement. The vibrant community of Rosehill offers a convenient location with easy access to local shops, restaurants, and public transportation. When looking for a student house, be sure to prioritize safety, convenience, and affordability. Keep in mind that finding the perfect 3 bedroom student house may require thorough research and patience, but with the right mindset and resources, you are sure to find a suitable home that meets all your needs.</p></>)
};

export default BathRosehillHouse3;