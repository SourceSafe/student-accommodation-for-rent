
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


const  BathHatfieldBuildingsFlat10 = () => 
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

    return (<><h1>10 Bedroom Student Flats in Hatfield Buildings, Bath</h1><p>We have listings for <b>10 Bedroom Student Flats in Hatfield Buildings, Bath</b> for the academic year 2024.
<b>10 Bedroom Student Flats in Hatfield Buildings, Bath</b> are ideal for large groups of students looking to live together in a convenient location in Bath. These spacious flats offer plenty of room for studying and socializing, making them a popular choice among student groups.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/10-bedroom-student-flats-in-hatfield-buildings-bath.png')} alt='10 Bedroom Student Flats in Hatfield Buildings, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='10 Bedroom Student Flats in Hatfield Buildings, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71100&type=Flat&beds=10")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>10 Bedroom Student Flats in Hatfield Buildings, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_10_bedroom_student_flats_in_hatfield_buildings,_bath_pp/pm">Prices for 10 Bedroom Student Flats in Hatfield Buildings, Bath pp/pm</a></li><li><a href = "#10_bedroom_student_flats_in_hatfield_buildings,_bath__all_bills_inclusive">10 Bedroom Student Flats in Hatfield Buildings, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_10_bedroom_student_flats_in_hatfield_buildings,_bath">Cheap 10 Bedroom Student Flats in Hatfield Buildings, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_hatfield_buildings,_bath__recently_added">10 Bedroom Student Flats in Hatfield Buildings, Bath - Recently Added</a></li><li><a href = "#10_bedroom_student_flats_in_hatfield_buildings,_bath__recently_reduced">10 Bedroom Student Flats in Hatfield Buildings, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__10_bedroom_flats_in_hatfield_buildings,_bath,_somerset,_bath">Student Accommodation Portal - 10 Bedroom Flats in Hatfield Buildings, Bath, Somerset, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_hatfield_buildings,_bath__private_rental_sector">10 Bedroom Student Flats in Hatfield Buildings, Bath - Private Rental Sector</a></li><li><a href = "#10_bedroom_student_flats_in_hatfield_buildings,_bath__fully_furnished">10 Bedroom Student Flats in Hatfield Buildings, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_hatfield_buildings_to_the_city_center">How close is Hatfield Buildings to the City Center</a></li><li><a href = "#how_close_is_hatfield_buildings_to_the_university_of_bath">How close is Hatfield Buildings to the University of Bath</a></li><li><a href = "#how_close_is_hatfield_buildings_to_the_bath_spa_university">How close is Hatfield Buildings to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_10_bedroom_student_flats_in_hatfield_buildings,_bath_pp/pm"> <h2>Prices for 10 Bedroom Student Flats in Hatfield Buildings, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton tableButton' title='10 Bedroom Student Flats in Hatfield Buildings, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71100")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "10_bedroom_student_flats_in_hatfield_buildings,_bath__all_bills_inclusive"> <h2>10 Bedroom Student Flats in Hatfield Buildings, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your 10-bedroom student flat in Hatfield Buildings, Bath, Somerset? Save yourself the stress and hassle by subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>. With <b>UniBills.com</b>, you can enjoy the convenience of having all your utility bills, including electricity, gas, water, and internet, rolled into one easy monthly payment. This means you can <b>concentrate on your studies</b> and social life without the burden of managing various bills and due dates. <b>UniBills.com</b> takes care of everything for you, allowing you to focus on what truly matters. Say goodbye to the endless paperwork and budgeting headaches, and opt for the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_10_bedroom_student_flats_in_hatfield_buildings,_bath"> <h2>Cheap 10 Bedroom Student Flats in Hatfield Buildings, Bath</h2></a><p><Portlet location="REGION^71100" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_hatfield_buildings,_bath__recently_added"> <h2>10 Bedroom Student Flats in Hatfield Buildings, Bath - Recently Added</h2></a><p><Portlet location="REGION^71100" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_hatfield_buildings,_bath__recently_reduced"> <h2>10 Bedroom Student Flats in Hatfield Buildings, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71100" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__10_bedroom_flats_in_hatfield_buildings,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 10 Bedroom Flats in Hatfield Buildings, Bath, Somerset, Bath</h2></a><p>Are you searching for 10 bedroom <b>student Flats</b> in <b>Bath</b>, Somerset, particularly in the sought-after Hatfield Buildings area? Look no further than our property portal, where we specialize in connecting students with perfect accommodation options near the University of <b>Bath</b> and <b>Bath</b> Spa University. With our user-friendly search filters, you can easily narrow down your options to find the ideal 10 bedroom flat that suits your needs and preferences. Whether you're looking for a spacious living space to share with friends or you want to be close to campus and local amenities, we have a diverse range of properties available in Hatfield Buildings, <b>Bath</b>, Somerset. Don't waste time scrolling through endless listings - let our platform streamline your search for the perfect student flat in <b>Bath</b>.</p><a id = "10_bedroom_student_flats_in_hatfield_buildings,_bath__private_rental_sector"> <h2>10 Bedroom Student Flats in Hatfield Buildings, Bath - Private Rental Sector</h2></a><p>If you're looking for spacious and convenient living in Bath, Somerset, look no further than the 10 bedroom flats in Hatfield Buildings. These flats offer the perfect blend of comfort and practicality, with each unit coming <b>fully furnished</b> for your convenience. Say goodbye to the hassle of shopping for furniture and enjoy a move-in ready home. To top it off, your monthly expenses are made easy with <b>bills included</b> in your rent, making budgeting a breeze. Whether you're a student looking to share with friends or a large family looking for a home to grow in, these 10 bedroom flats provide ample space for everyone. Experience the best of Bath living in these well-equipped, hassle-free accommodations.</p><a id = "10_bedroom_student_flats_in_hatfield_buildings,_bath__fully_furnished"> <h2>10 Bedroom Student Flats in Hatfield Buildings, Bath - Fully Furnished</h2></a><p>Are you looking for spacious and comfortable living in Bath, Somerset? Look no further than the luxurious fully furnished 10 Bedroom Flats in Hatfield Buildings, Bath. These flats offer ample space for you and your housemates to relax and study in style. Located in the heart of Bath, these flats are perfect for students attending the nearby university or professionals looking for a convenient and well-equipped living space. With modern amenities and stylish decor, these fully furnished flats make moving in a breeze. In this area, it is normal for student flats to be fully furnished, so you can expect everything you need for a comfortable and stress-free living experience.</p><a id = "how_close_is_hatfield_buildings_to_the_city_center"> <h2>How close is Hatfield Buildings to the City Center</h2></a><p><b>Hatfield Buildings</b> is conveniently located just 0.5 <b>miles</b> away from <b>Bath city center</b>, making it the perfect choice for visitors looking to explore all that this historic city has to offer. With its close proximity to the city center, guests staying at <b>Hatfield Buildings</b> can easily walk to popular attractions such as the Roman Baths, Bath Abbey, and Thermae Bath Spa. Additionally, the bustling shopping and dining precincts of SouthGate and Milsom Street are just a short stroll down the road. Whether you are visiting Bath for leisure or business, this central location provides easy access to all the city's amenities and activities. Stay at <b>Hatfield Buildings</b> for a comfortable and convenient stay just steps away from the heart of <b>Bath city center</b>.</p><a id = "how_close_is_hatfield_buildings_to_the_university_of_bath"> <h2>How close is Hatfield Buildings to the University of Bath</h2></a><p>Hatfield Buildings is conveniently located close to the <b>University of Bath</b>, being only a few <b>miles</b> away. Students living in Hatfield Buildings can easily access the university <b>by foot</b>, as it is within a reasonable walking distance. Additionally, there is a convenient <b>bus route</b> that connects Hatfield Buildings to the <b>University of Bath</b>, making transportation even more accessible. For those who prefer to drive, it takes only a short journey <b>by car</b> to reach the university. This proximity between the two locations allows students to have easy access to campus facilities, classes, and various events, making Hatfield Buildings an ideal choice for those studying at the <b>University of Bath</b>.</p><a id = "how_close_is_hatfield_buildings_to_the_bath_spa_university"> <h2>How close is Hatfield Buildings to the Bath Spa University</h2></a><p>Hatfield Buildings is conveniently situated close to <b>Bath Spa University</b>, just a few <b>miles</b> away. The university is easily accessible <b>by foot</b>, taking around 25 minutes to reach on foot. For those looking for a quicker commute, there is a direct <b>bus route</b> that connects Hatfield Buildings to <b>Bath Spa University</b>, with the journey taking approximately 10 minutes. Alternatively, travelers can reach the university <b>by car</b> in just under 5 minutes, making it a convenient option for those who prefer to drive. With its close proximity and various transportation options, Hatfield Buildings is an ideal location for students or staff members looking to easily access <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 10-bedroom student flat in Hatfield Buildings, Bath can be a challenging yet rewarding experience. With its close proximity to the University of Bath and various amenities, Hatfield Buildings is a popular choice among students. When searching for a 10-bedroom flat, it's important to consider factors such as location, transportation options, and budget. The convenience of having all your friends under one roof can create a close-knit community and make studying and socializing easier. Additionally, sharing the cost of rent and utilities amongst 10 people can make living in a larger flat more affordable. In conclusion, finding a 10-bedroom student flat in Hatfield Buildings offers a unique opportunity for students to live together, create lasting memories, and enjoy all that Bath has to offer.</p></>)
};

export default BathHatfieldBuildingsFlat10;