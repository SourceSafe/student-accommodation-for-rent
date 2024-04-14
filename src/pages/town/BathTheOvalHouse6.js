
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


const  BathTheOvalHouse6 = () => 
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

    return (<><h1>6 Bedroom Student Houses in The Oval, Bath</h1><p>We have listings for <b>6 Bedroom Student Houses in The Oval, Bath</b> for the academic year 2024.

<b>6 Bedroom Student Houses in The Oval, Bath</b> offer spacious accommodation for students looking to live together in a vibrant and student-friendly neighborhood. These houses typically come fully furnished and equipped with modern amenities to cater to the needs of students studying in Bath. The Oval is a popular area among students due to its close proximity to the university campuses, local amenities, and recreational facilities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/6-bedroom-student-houses-in-the-oval-bath.png')} alt='6 Bedroom Student Houses in The Oval, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='6 Bedroom Student Houses in The Oval, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61729&type=House&beds=6")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>6 Bedroom Student Houses in The Oval, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_6_bedroom_student_houses_in_the_oval,_bath_pp/pm">Prices for 6 Bedroom Student Houses in The Oval, Bath pp/pm</a></li><li><a href = "#6_bedroom_student_houses_in_the_oval,_bath__all_bills_inclusive">6 Bedroom Student Houses in The Oval, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_6_bedroom_student_houses_in_the_oval,_bath">Cheap 6 Bedroom Student Houses in The Oval, Bath</a></li><li><a href = "#6_bedroom_student_houses_in_the_oval,_bath__recently_added">6 Bedroom Student Houses in The Oval, Bath - Recently Added</a></li><li><a href = "#6_bedroom_student_houses_in_the_oval,_bath__recently_reduced">6 Bedroom Student Houses in The Oval, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__6_bedroom_houses_in_the_oval,_bath,_somerset,_bath">Student Accommodation Portal - 6 Bedroom Houses in The Oval, Bath, Somerset, Bath</a></li><li><a href = "#6_bedroom_student_houses_in_the_oval,_bath__private_rental_sector">6 Bedroom Student Houses in The Oval, Bath - Private Rental Sector</a></li><li><a href = "#6_bedroom_student_houses_in_the_oval,_bath__fully_furnished">6 Bedroom Student Houses in The Oval, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_the_oval_to_the_city_center">How close is The Oval to the City Center</a></li><li><a href = "#how_close_is_the_oval_to_the_university_of_bath">How close is The Oval to the University of Bath</a></li><li><a href = "#how_close_is_the_oval_to_the_bath_spa_university">How close is The Oval to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_6_bedroom_student_houses_in_the_oval,_bath_pp/pm"> <h2>Prices for 6 Bedroom Student Houses in The Oval, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£772 per month </td><td><button className = 'searchButton tableButton' title='6 Bedroom Student Houses in The Oval, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^61729")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "6_bedroom_student_houses_in_the_oval,_bath__all_bills_inclusive"> <h2>6 Bedroom Student Houses in The Oval, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for hassle-free accommodation in The Oval, Bath, Somerset? Look no further than <b>UniBills.com</b> for their <b>all bills inclusive</b> service for your 6-bedroom student house. With <b>UniBills.com</b>, you can enjoy the convenience of having all your utilities, internet, and other bills covered in one monthly payment. This means you can <b>concentrate on your studies</b> without the stress of managing multiple bills. Imagine not having to worry about budgeting for electricity, water, or Wi-Fi - <b>UniBills.com</b> takes care of it all for you. Say goodbye to unexpected costs and hello to a smooth and easy living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and unlock the benefits of the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Simplify your student life and make the smart choice with <b>UniBills.com</b>.</p><a id = "cheap_6_bedroom_student_houses_in_the_oval,_bath"> <h2>Cheap 6 Bedroom Student Houses in The Oval, Bath</h2></a><p><Portlet location="REGION^61729" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_houses_in_the_oval,_bath__recently_added"> <h2>6 Bedroom Student Houses in The Oval, Bath - Recently Added</h2></a><p><Portlet location="REGION^61729" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_houses_in_the_oval,_bath__recently_reduced"> <h2>6 Bedroom Student Houses in The Oval, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61729" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__6_bedroom_houses_in_the_oval,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 6 Bedroom Houses in The Oval, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable 6 Bedroom House in <b>Bath</b>? Look no further than our property portal, where we specialize in helping students find the perfect accommodation in The Oval, <b>Bath</b>, Somerset. Whether you are studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, we have a wide range of <b>student Houses</b> available to suit your needs. The Oval is a popular area for students due to its close proximity to the city center and the university campuses. With easy access to local amenities and transportation links, living in The Oval offers convenience and a vibrant community atmosphere. Don't waste time searching for your ideal student house - let our property portal make the process smooth and stress-free for you.</p><a id = "6_bedroom_student_houses_in_the_oval,_bath__private_rental_sector"> <h2>6 Bedroom Student Houses in The Oval, Bath - Private Rental Sector</h2></a><p>Are you searching for a spacious and comfortable living space in Bath, Somerset? Look no further than the private rental sector offering 6 Bedroom Houses in The Oval, Bath. These properties are perfect for individuals or groups looking to share a living space while enjoying the privacy and independence of a house setting. The convenience of having <b>bills included</b> in the rent makes budgeting easy and stress-free. Additionally, these houses are <b>fully furnished</b>, so you can move in and start living comfortably right away. With easy access to local amenities and the beautiful city of Bath, renting a 6-bedroom house in The Oval offers the perfect balance of convenience and comfort. Don't miss out on this fantastic opportunity to secure a spacious and well-equipped living space in the heart of Bath.</p><a id = "6_bedroom_student_houses_in_the_oval,_bath__fully_furnished"> <h2>6 Bedroom Student Houses in The Oval, Bath - Fully Furnished</h2></a><p>Explore the luxurious <b>fully furnished 6 Bedroom Houses in The Oval, Bath, Somerset, Bath</b>, for a comfortable and stylish living experience. Nestled in the picturesque town of Bath, these houses offer spacious bedrooms, modern amenities, and contemporary furnishings. The convenience of fully furnished living spaces means you can move in with ease and enjoy a hassle-free living experience. In The Oval, Bath, Somerset, Bath, it is normal for student houses to be fully furnished, making it easier for students to focus on their studies and social life without the added stress of furnishing their accommodation. Whether you're a student looking for a convenient living arrangement or a family seeking a spacious home, these <b>fully furnished 6 Bedroom Houses in The Oval, Bath, Somerset, Bath</b>, provide the perfect blend of comfort and style. Immerse yourself in the vibrant community of Bath while residing in these modern and welcoming houses.</p><a id = "how_close_is_the_oval_to_the_city_center"> <h2>How close is The Oval to the City Center</h2></a><p><b>The Oval</b> is conveniently located in <b>Bath city center</b>, making it easily accessible to visitors looking to explore all that this historic city has to offer. Situated just a few <b>miles</b> from the heart of Bath, <b>The Oval</b> provides a perfect base for those wanting to immerse themselves in the rich history and vibrant culture of this charming destination. Whether you're interested in discovering the iconic Roman baths, strolling through the picturesque Georgian streets, or shopping in the bustling city center, <b>The Oval</b>'s close proximity makes it a fantastic choice for a relaxing and enjoyable stay. With its central location, guests can easily access all of Bath's top attractions, dining options, and shopping opportunities, ensuring a memorable experience in this enchanting city.</p><a id = "how_close_is_the_oval_to_the_university_of_bath"> <h2>How close is The Oval to the University of Bath</h2></a><p>The Oval in Bath is conveniently located near the <b>University of Bath</b>, making it a popular housing choice for students and faculty. Situated just a few <b>miles</b> away, the university can be easily reached <b>by foot</b>, bus, or car from The Oval. For those who prefer walking, it's a pleasant stroll that takes around 20-25 minutes to reach the campus on foot. Alternatively, there is a direct <b>bus route</b> from The Oval to the <b>University of Bath</b>, providing a quick and convenient transportation option for those who prefer not to drive. <b>by car</b>, the journey takes approximately 10-15 minutes, depending on traffic conditions. With its close proximity to the <b>University of Bath</b> and easy access to various transportation options, The Oval is an ideal location for those looking to be near the campus.</p><a id = "how_close_is_the_oval_to_the_bath_spa_university"> <h2>How close is The Oval to the Bath Spa University</h2></a><p><b>Bath Spa University</b> is a mere 3 <b>miles</b> away from The Oval, making it a conveniently close location for students attending the university. For those looking to travel between the two destinations, there are several transportation options available. <b>by foot</b>, the journey would take approximately 45 minutes, providing a scenic and healthy way to commute. Alternatively, taking the <b>bus route</b> is a more time-efficient choice, with a journey time of around 15 minutes. If driving is preferred, the route between The Oval and <b>Bath Spa University</b> can be covered in just under 10 minutes <b>by car</b>, offering a quick and convenient option for those with access to a vehicle. Whichever mode of transportation is chosen, the proximity of The Oval to <b>Bath Spa University</b> ensures a seamless and easily navigable commute between the two locations.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for student accommodation in The Oval, Bath, finding a 6-bedroom house can be a challenging yet rewarding task. With its close proximity to universities and vibrant student community, The Oval is a popular area for students looking to live together. When looking for a 6-bedroom student house, factors such as proximity to campus, local amenities, transport links, and safety are crucial considerations. The variety of properties available in The Oval ensures that there is something to suit every budget and preference. Considering the demand for 6-bedroom student houses in this area, it is advisable to start the search early and enlist the help of a reputable letting agency to secure the desired property. In conclusion, with its prime location and diverse housing options, The Oval, Bath, presents an ideal opportunity for students seeking comfortable and convenient living arrangements with their housemates.</p></>)
};

export default BathTheOvalHouse6;