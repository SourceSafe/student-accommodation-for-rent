
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


const  BathRushHillFlat6 = () => 
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

    return (<><h1>6 Bedroom Student Flats in Rush Hill, Bath</h1><p>We have listings for <b>6 Bedroom Student Flats in Rush Hill, Bath</b> for the academic year 2024.

<b>6 Bedroom Student Flats in Rush Hill, Bath</b> offer spacious and comfortable accommodations for students studying in Bath. These flats are perfect for groups of students looking to live together while attending university, providing a convenient and communal living experience in a desirable location. With multiple bedrooms, common areas, and amenities, these flats offer a great option for student housing in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/6-bedroom-student-flats-in-rush-hill-bath.png')} alt='6 Bedroom Student Flats in Rush Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='6 Bedroom Student Flats in Rush Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71114&type=Flat&beds=6")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>6 Bedroom Student Flats in Rush Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_6_bedroom_student_flats_in_rush_hill,_bath_pp/pm">Prices for 6 Bedroom Student Flats in Rush Hill, Bath pp/pm</a></li><li><a href = "#6_bedroom_student_flats_in_rush_hill,_bath__all_bills_inclusive">6 Bedroom Student Flats in Rush Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_6_bedroom_student_flats_in_rush_hill,_bath">Cheap 6 Bedroom Student Flats in Rush Hill, Bath</a></li><li><a href = "#6_bedroom_student_flats_in_rush_hill,_bath__recently_added">6 Bedroom Student Flats in Rush Hill, Bath - Recently Added</a></li><li><a href = "#6_bedroom_student_flats_in_rush_hill,_bath__recently_reduced">6 Bedroom Student Flats in Rush Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__6_bedroom_flats_in_rush_hill,_bath,_somerset,_bath">Student Accommodation Portal - 6 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</a></li><li><a href = "#6_bedroom_student_flats_in_rush_hill,_bath__private_rental_sector">6 Bedroom Student Flats in Rush Hill, Bath - Private Rental Sector</a></li><li><a href = "#6_bedroom_student_flats_in_rush_hill,_bath__fully_furnished">6 Bedroom Student Flats in Rush Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rush_hill_to_the_city_center">How close is Rush Hill to the City Center</a></li><li><a href = "#how_close_is_rush_hill_to_the_university_of_bath">How close is Rush Hill to the University of Bath</a></li><li><a href = "#how_close_is_rush_hill_to_the_bath_spa_university">How close is Rush Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_6_bedroom_student_flats_in_rush_hill,_bath_pp/pm"> <h2>Prices for 6 Bedroom Student Flats in Rush Hill, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton tableButton' title='6 Bedroom Student Flats in Rush Hill, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71114")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "6_bedroom_student_flats_in_rush_hill,_bath__all_bills_inclusive"> <h2>6 Bedroom Student Flats in Rush Hill, Bath - All Bills Inclusive</h2></a><p>Are you tired of managing multiple bills for your student accommodation? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service for your 6 bedroom student flat in Rush Hill, Bath, Somerset. Say goodbye to the stress of keeping track of utility payments and focus on what truly matters – your studies. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers electricity, water, gas, and even internet bills. This convenient service allows you to budget more effectively and avoid any unexpected costs throughout the year. Take the first step towards a more convenient student living experience and get a quote from <b>UniBills.com</b> or any accommodation on this website today.</p><a id = "cheap_6_bedroom_student_flats_in_rush_hill,_bath"> <h2>Cheap 6 Bedroom Student Flats in Rush Hill, Bath</h2></a><p><Portlet location="REGION^71114" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_flats_in_rush_hill,_bath__recently_added"> <h2>6 Bedroom Student Flats in Rush Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71114" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_flats_in_rush_hill,_bath__recently_reduced"> <h2>6 Bedroom Student Flats in Rush Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71114" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__6_bedroom_flats_in_rush_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 6 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</h2></a><p>Are you looking for spacious and convenient student accommodation in <b>Bath</b>? Our property portal specializes in helping you find the perfect 6-bedroom flats in Rush Hill, <b>Bath</b>, Somerset. Situated near the prestigious University of <b>Bath</b> and <b>Bath</b> Spa University, these <b>student Flats</b> are ideal for those seeking a vibrant city lifestyle while pursuing their studies. With ample room for housemates to live comfortably and study in peace, these properties offer a range of amenities to ensure a hassle-free student living experience. Don't miss out on the chance to secure a stylish and well-equipped flat in this sought-after location. Start your search on our property portal today and find the perfect 6-bedroom student flat in Rush Hill, <b>Bath</b>, Somerset.</p><a id = "6_bedroom_student_flats_in_rush_hill,_bath__private_rental_sector"> <h2>6 Bedroom Student Flats in Rush Hill, Bath - Private Rental Sector</h2></a><p>Welcome to the thriving private rental sector in Rush Hill, Bath, Somerset, Bath, where you can find luxurious 6 bedroom flats available for rent. These properties offer modern living with the convenience of <b>bills included</b> in the rent, making budgeting a breeze. Each flat is <b>fully furnished</b> to a high standard, providing a comfortable and stylish environment for tenants to enjoy. Whether you are a group of friends looking to share a spacious home or a large family needing plenty of space, these 6 bedroom flats in Rush Hill cater to a variety of needs. Don't miss out on the opportunity to live in one of these impressive properties in this sought-after area of Bath.</p><a id = "6_bedroom_student_flats_in_rush_hill,_bath__fully_furnished"> <h2>6 Bedroom Student Flats in Rush Hill, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 6 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</b>? Look no further! These spacious and modern flats offer the perfect blend of comfort and convenience, making them an ideal choice for students or large families. With all the furniture and appliances already provided, you can move in and start enjoying your new home right away. In Rush Hill, Bath, <b>it is normal for student Flats to be fully furnished furnished</b>, so you can rest easy knowing that everything you need is already taken care of. From cozy bedrooms to a fully-equipped kitchen and a stylish living room, these flats have everything you need for a comfortable and hassle-free living experience.</p><a id = "how_close_is_rush_hill_to_the_city_center"> <h2>How close is Rush Hill to the City Center</h2></a><p><b>Rush Hill</b> is conveniently located just 1.5 <b>miles</b> away from <b>Bath city center</b>, making it an ideal location for those who want to stay close to all the attractions and amenities that this historic city has to offer. With its close proximity, residents of <b>Rush Hill</b> can easily access the bustling city center with its array of shops, restaurants, and cultural hotspots. Whether you want to explore the iconic Roman baths, wander through the charming streets lined with Georgian architecture, or simply enjoy a leisurely stroll along the picturesque River Avon, everything is just a short distance away from <b>Rush Hill</b>. Additionally, the excellent transport links in the area make it easy to travel to other parts of Bath and beyond, ensuring that residents of <b>Rush Hill</b> can enjoy the best of city living while still being able to escape to the tranquility of their home just a stone's throw away from the bustling city center.</p><a id = "how_close_is_rush_hill_to_the_university_of_bath"> <h2>How close is Rush Hill to the University of Bath</h2></a><p>Rush Hill is located conveniently close to the <b>University of Bath</b>, with the campus being just a few <b>miles</b> away. For students looking to commute to the university, there are several easy options available. <b>by foot</b>, the distance can be covered in approximately 45-60 minutes, offering a scenic and healthy way to travel. Alternatively, the university is also accessible <b>by bus</b>, with a direct <b>bus route</b> that takes around 20-30 minutes, depending on traffic. For those who prefer a quicker journey, taking a car can reduce the travel time to around 10-15 minutes, making it a convenient option for those with their own transportation. With its proximity to the <b>University of Bath</b>, Rush Hill offers a great location for students looking to balance convenience with a peaceful residential setting.</p><a id = "how_close_is_rush_hill_to_the_bath_spa_university"> <h2>How close is Rush Hill to the Bath Spa University</h2></a><p>Rush Hill is conveniently located just a few <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal location for students looking to be close to campus. <b>by foot</b>, the university is approximately a 25-minute walk from Rush Hill, providing students with the option to enjoy a leisurely stroll to and from classes. For those looking for a faster mode of transportation, there is a convenient <b>bus route</b> that connects Rush Hill directly to <b>Bath Spa University</b>. The bus ride takes around 10-15 minutes, offering a quick and easy way to commute to campus. Additionally, students with their own transportation can reach <b>Bath Spa University</b> in just a few minutes <b>by car</b>. This close proximity allows students living in Rush Hill to easily access all the amenities and opportunities that <b>Bath Spa University</b> has to offer.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 6 bedroom student flats in Rush Hill, Bath, it is essential to prioritize location, affordability, and amenities. Rush Hill offers a vibrant and convenient location, with easy access to the University of Bath and local amenities. When exploring options, students should consider properties that are well-maintained, spacious, and equipped with essential features such as high-speed internet and laundry facilities. Additionally, finding a flat that fits within your budget is crucial to ensure a stress-free living experience. By carefully evaluating each option and weighing the pros and cons, students can find the perfect 6 bedroom flat that meets their needs. Overall, Rush Hill presents a variety of options for student accommodation, making it a desirable location for those seeking spacious and comfortable living spaces near the university.</p></>)
};

export default BathRushHillFlat6;