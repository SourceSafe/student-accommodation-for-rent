
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


const  BathPrimroseHillHouse9 = () => 
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

    return (<><h1>9 Bedroom Student Houses in Primrose Hill, Bath</h1><p>We have listings for <b>9 Bedroom Student Houses in Primrose Hill, Bath</b> for the academic year 2024. 
<b>9 Bedroom Student Houses in Primrose Hill, Bath</b> offer spacious accommodations perfect for student living in Bath. These houses are ideal for larger groups looking to live together while studying in the vibrant city.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/9-bedroom-student-houses-in-primrose-hill-bath.png')} alt='9 Bedroom Student Houses in Primrose Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='9 Bedroom Student Houses in Primrose Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71110&type=House&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>9 Bedroom Student Houses in Primrose Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_houses_in_primrose_hill,_bath_pp/pm">Prices for 9 Bedroom Student Houses in Primrose Hill, Bath pp/pm</a></li><li><a href = "#9_bedroom_student_houses_in_primrose_hill,_bath__all_bills_inclusive">9 Bedroom Student Houses in Primrose Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_houses_in_primrose_hill,_bath">Cheap 9 Bedroom Student Houses in Primrose Hill, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_primrose_hill,_bath__recently_added">9 Bedroom Student Houses in Primrose Hill, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_houses_in_primrose_hill,_bath__recently_reduced">9 Bedroom Student Houses in Primrose Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_houses_in_primrose_hill,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Houses in Primrose Hill, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_primrose_hill,_bath__private_rental_sector">9 Bedroom Student Houses in Primrose Hill, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_houses_in_primrose_hill,_bath__fully_furnished">9 Bedroom Student Houses in Primrose Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_primrose_hill_to_the_city_center">How close is Primrose Hill to the City Center</a></li><li><a href = "#how_close_is_primrose_hill_to_the_university_of_bath">How close is Primrose Hill to the University of Bath</a></li><li><a href = "#how_close_is_primrose_hill_to_the_bath_spa_university">How close is Primrose Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_houses_in_primrose_hill,_bath_pp/pm"> <h2>Prices for 9 Bedroom Student Houses in Primrose Hill, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£670 per month </td><td><button className = 'searchButton tableButton' title='9 Bedroom Student Houses in Primrose Hill, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71110")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "9_bedroom_student_houses_in_primrose_hill,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Houses in Primrose Hill, Bath - All Bills Inclusive</h2></a><p>Are you tired of the stress and complications of managing multiple utility bills for your 9-bedroom student house in Primrose Hill, Bath, Somerset? Look no further than <b>UniBills.com</b> for the perfect solution - an <b>all bills inclusive</b> service. By subscribing to this convenient option, you can say goodbye to the headache of sorting out individual bills and focus your energy on what truly matters - your studies. <b>UniBills.com</b> takes care of all the utility payments for you, allowing you to enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. With one fixed payment each month, budgeting becomes a breeze and you can relax knowing that everything is taken care of. Say goodbye to endless paperwork and hello to a more convenient way of living. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and experience the benefits of an <b>all bills inclusive</b> service today.</p><a id = "cheap_9_bedroom_student_houses_in_primrose_hill,_bath"> <h2>Cheap 9 Bedroom Student Houses in Primrose Hill, Bath</h2></a><p><Portlet location="REGION^71110" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_primrose_hill,_bath__recently_added"> <h2>9 Bedroom Student Houses in Primrose Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71110" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_primrose_hill,_bath__recently_reduced"> <h2>9 Bedroom Student Houses in Primrose Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71110" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_houses_in_primrose_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Houses in Primrose Hill, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 9-bedroom house in <b>Bath</b>, Somerset? Our property portal is here to help you find exactly what you need in the charming area of Primrose Hill, <b>Bath</b>. Close to both the University of <b>Bath</b> and <b>Bath</b> Spa University, this location offers convenience and a vibrant student community. With a variety of <b>student Houses</b> available, including spacious 9-bedroom options, you can easily find a comfortable and stylish place to call home during your studies. Whether you're looking for a modern property with all the amenities or a cozy house with character, our portal has a wide range of options to suit your preferences. Don't miss out on the opportunity to secure the ideal student house in Primrose Hill, <b>Bath</b>, with the help of our user-friendly platform.</p><a id = "9_bedroom_student_houses_in_primrose_hill,_bath__private_rental_sector"> <h2>9 Bedroom Student Houses in Primrose Hill, Bath - Private Rental Sector</h2></a><p>Are you in search of a spacious and luxurious living arrangement in Bath, Somerset? Look no further than the stunning 9 bedroom houses in Primrose Hill. These impressive properties offer the perfect blend of comfort and style, with each room meticulously designed and <b>fully furnished</b> to provide a cozy and inviting atmosphere. The convenience of having all <b>bills included</b> ensures a stress-free living experience, allowing you to focus on enjoying everything Bath has to offer. Whether you're a group of students looking for a comfortable shared home or a large family in need of ample space, these 9 bedroom houses in Primrose Hill are sure to exceed your expectations. Don't miss out on the opportunity to live in one of Bath's most desirable neighborhoods in a truly exceptional property.</p><a id = "9_bedroom_student_houses_in_primrose_hill,_bath__fully_furnished"> <h2>9 Bedroom Student Houses in Primrose Hill, Bath - Fully Furnished</h2></a><p>If you are searching for <b>fully furnished 9 Bedroom Houses in Primrose Hill, Bath, Somerset, Bath</b>, you have come to the right place. These properties are ideal for families or groups looking to live together in a spacious and comfortable setting. With all the necessary amenities provided, including furniture, appliances, and kitchenware, moving in is hassle-free. In the beautiful city of Bath, where historical landmarks and natural beauty abound, residing in a fully furnished 9 bedroom house ensures a stress-free living experience. It is normal for student houses to be fully furnished, as it saves time and effort in setting up the living space. Enjoy the convenience and comfort of a fully furnished 9 bedroom house in Primrose Hill, Bath, Somerset, Bath today.</p><a id = "how_close_is_primrose_hill_to_the_city_center"> <h2>How close is Primrose Hill to the City Center</h2></a><p><b>Primrose Hill</b> is located just 1.5 <b>miles</b> from <b>Bath city center</b>, making it a convenient and easily accessible destination for both locals and visitors. This picturesque area offers a peaceful retreat from the hustle and bustle of the city, with stunning views of Bath and the surrounding countryside. Whether you're looking to enjoy a leisurely walk, have a picnic with family and friends, or simply soak in the beauty of nature, <b>Primrose Hill</b> provides the perfect setting. With its close proximity to <b>Bath city center</b>, visitors can easily make a day trip to explore the historic sites, shops, and restaurants that the city has to offer before retreating to the tranquility of <b>Primrose Hill</b>. Whether you're a nature enthusiast or simply seeking a relaxing escape, a visit to <b>Primrose Hill</b> is sure to be a delightful experience.</p><a id = "how_close_is_primrose_hill_to_the_university_of_bath"> <h2>How close is Primrose Hill to the University of Bath</h2></a><p>Primrose Hill is conveniently close to the <b>University of Bath</b>, being only 1.5 <b>miles</b> away. This short distance makes it easily accessible <b>by foot</b>, taking around 30 minutes to reach campus. If walking isn't your preferred mode of transportation, there's also a <b>bus route</b> that connects Primrose Hill to the university, making the journey quick and straightforward. <b>by bus</b>, the trip takes just under 10 minutes, perfect for those looking to save time or avoid any inclement weather. For those who prefer to drive, the campus is a mere 5-minute car ride away, offering a quick and convenient option for getting to classes or events on time. Whether you choose to travel <b>by foot</b>, bus, or car, Primrose Hill's proximity to the <b>University of Bath</b> ensures a seamless and stress-free commute for students and faculty alike.</p><a id = "how_close_is_primrose_hill_to_the_bath_spa_university"> <h2>How close is Primrose Hill to the Bath Spa University</h2></a><p>Primrose Hill is located just 1.5 <b>miles</b> away from <b>Bath Spa University</b>, making it a convenient location for students and faculty members alike. If you prefer walking, you can reach the university from Primrose Hill in around 30 minutes on foot. Alternatively, there is a direct <b>bus route</b> that connects Primrose Hill to <b>Bath Spa University</b>, which takes approximately 15 minutes. For those who prefer to drive, the journey <b>by car</b> typically only takes around 10 minutes, depending on traffic. With its close proximity to the university and various transportation options, Primrose Hill provides a perfect balance of convenience and tranquility for those studying or working at <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>If you're searching for a 9-bedroom student house in the picturesque neighborhood of Primrose Hill in Bath, you're in for a treat. This area offers a peaceful and idyllic setting, perfect for studying and unwinding after a long day of classes. With easy access to the university campus and local amenities, you'll find everything you need within reach. The spacious 9-bedroom houses in Primrose Hill provide ample room for students to have their own space while also fostering a sense of community among housemates. Whether it's studying together in the shared living areas or enjoying a BBQ in the garden, these houses are designed for comfortable and convenient student living. In conclusion, seeking a 9-bedroom student house in Primrose Hill promises a blend of tranquility, convenience, and camaraderie, making it an ideal choice for students looking to create lasting memories during their time in Bath.</p></>)
};

export default BathPrimroseHillHouse9;