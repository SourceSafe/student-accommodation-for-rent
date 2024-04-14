
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


const  BathSouthdownHouse8 = () => 
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

    return (<><h1>8 Bedroom Student Houses in Southdown, Bath</h1><p>We have listings for <b>8 Bedroom Student Houses in Southdown, Bath</b> for the academic year 2024.

<b>8 Bedroom Student Houses in Southdown, Bath</b> provide spacious accommodation for larger groups of students looking to live together. These properties typically offer modern amenities and are located in close proximity to local universities and amenities in Bath. Students can enjoy the convenience of living in a vibrant community while focusing on their academic pursuits.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/8-bedroom-student-houses-in-southdown-bath.png')} alt='8 Bedroom Student Houses in Southdown, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='8 Bedroom Student Houses in Southdown, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^22627&type=House&beds=8")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>8 Bedroom Student Houses in Southdown, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_8_bedroom_student_houses_in_southdown,_bath_pp/pm">Prices for 8 Bedroom Student Houses in Southdown, Bath pp/pm</a></li><li><a href = "#8_bedroom_student_houses_in_southdown,_bath__all_bills_inclusive">8 Bedroom Student Houses in Southdown, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_8_bedroom_student_houses_in_southdown,_bath">Cheap 8 Bedroom Student Houses in Southdown, Bath</a></li><li><a href = "#8_bedroom_student_houses_in_southdown,_bath__recently_added">8 Bedroom Student Houses in Southdown, Bath - Recently Added</a></li><li><a href = "#8_bedroom_student_houses_in_southdown,_bath__recently_reduced">8 Bedroom Student Houses in Southdown, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__8_bedroom_houses_in_southdown,_bath,_somerset,_bath">Student Accommodation Portal - 8 Bedroom Houses in Southdown, Bath, Somerset, Bath</a></li><li><a href = "#8_bedroom_student_houses_in_southdown,_bath__private_rental_sector">8 Bedroom Student Houses in Southdown, Bath - Private Rental Sector</a></li><li><a href = "#8_bedroom_student_houses_in_southdown,_bath__fully_furnished">8 Bedroom Student Houses in Southdown, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_southdown_to_the_city_center">How close is Southdown to the City Center</a></li><li><a href = "#how_close_is_southdown_to_the_university_of_bath">How close is Southdown to the University of Bath</a></li><li><a href = "#how_close_is_southdown_to_the_bath_spa_university">How close is Southdown to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_8_bedroom_student_houses_in_southdown,_bath_pp/pm"> <h2>Prices for 8 Bedroom Student Houses in Southdown, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£748 per month </td><td><button className = 'searchButton tableButton' title='8 Bedroom Student Houses in Southdown, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^22627")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "8_bedroom_student_houses_in_southdown,_bath__all_bills_inclusive"> <h2>8 Bedroom Student Houses in Southdown, Bath - All Bills Inclusive</h2></a><p>Living in an 8 bedroom student house in Southdown, Bath, Somerset can be quite the adventure, but managing multiple bills for utilities and services can quickly become overwhelming. That's where subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can truly make a difference. By opting for this service, you can enjoy the hassle free all inclusive option provided by <b>UniBills.com</b>, which covers all your bills including electricity, gas, water, internet, and even TV license. With this convenience, you can focus and <b>concentrate on your studies</b> without the stress of dividing bills and managing payments among housemates. <b>UniBills.com</b> offers competitive rates and ensures that you have a smooth and seamless living experience. Say goodbye to bill disputes and late payments, and say hello to a simplified student living arrangement. Get a quote from <b>UniBills.com</b> or any accommodation on this web site today and make your student life in Southdown, Bath, Somerset a breeze.</p><a id = "cheap_8_bedroom_student_houses_in_southdown,_bath"> <h2>Cheap 8 Bedroom Student Houses in Southdown, Bath</h2></a><p><Portlet location="REGION^22627" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "8_bedroom_student_houses_in_southdown,_bath__recently_added"> <h2>8 Bedroom Student Houses in Southdown, Bath - Recently Added</h2></a><p><Portlet location="REGION^22627" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "8_bedroom_student_houses_in_southdown,_bath__recently_reduced"> <h2>8 Bedroom Student Houses in Southdown, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^22627" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__8_bedroom_houses_in_southdown,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 8 Bedroom Houses in Southdown, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable 8 bedroom house in <b>Bath</b>? Look no further than our property portal, where you can easily find a range of <b>student Houses</b> in the charming area of Southdown, <b>Bath</b>, Somerset. Southdown is a popular location for students due to its close proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University, making it a convenient choice for those studying in the area. With our user-friendly search filters, you can narrow down your options to find the perfect 8 bedroom house that suits your needs and preferences. Whether you're looking for a modern property with all the amenities or a cozy home with a backyard, our portal has you covered. Start your search today and find the ideal student house in Southdown, <b>Bath</b>, Somerset.</p><a id = "8_bedroom_student_houses_in_southdown,_bath__private_rental_sector"> <h2>8 Bedroom Student Houses in Southdown, Bath - Private Rental Sector</h2></a><p>Looking for the perfect student accommodation or shared living space in Southdown, Bath, Somerset, Bath? You're in luck! The private rental sector offers a variety of 8 bedroom houses in this sought-after area, perfect for those looking to live in a vibrant and inclusive community. These properties typically come <b>fully furnished</b>, taking the stress out of moving and allowing you to settle in quickly. Additionally, many landlords include bills in the rent, making budgeting a breeze. Whether you're a student looking for a comfortable study space, or a working professional seeking a communal living environment, these 8 bedroom houses provide the perfect solution. Say goodbye to the hassle of setting up utilities and furnishing your new home - these properties have all the essentials covered.</p><a id = "8_bedroom_student_houses_in_southdown,_bath__fully_furnished"> <h2>8 Bedroom Student Houses in Southdown, Bath - Fully Furnished</h2></a><p>Looking for a spacious and convenient living arrangement in the charming town of Southdown, Bath, Somerset? Look no further than the <b>fully furnished 8 Bedroom Houses in Southdown, Bath, Somerset, Bath</b>. These homes provide ample space for a large family or group of friends to live comfortably and enjoy all that Bath has to offer. With eight bedrooms, there is plenty of room for everyone to have their own space while still enjoying the communal areas such as the living room, kitchen, and garden. In Southdown, Bath, Somerset, Bath, it is normal for student houses to be fully furnished, so you can expect these properties to come ready with all the essentials for daily living. From beds and wardrobes to sofas and dining tables, these houses are move-in ready, allowing you to settle in quickly and start enjoying your new home. Don't miss the opportunity to live in one of these spacious and welcoming 8 Bedroom Houses in Southdown, Bath, Somerset, Bath.</p><a id = "how_close_is_southdown_to_the_city_center"> <h2>How close is Southdown to the City Center</h2></a><p><b>Southdown</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it a great residential area for those looking to be close to the hustle and bustle of this vibrant city. With its close proximity, residents of <b>Southdown</b> can easily access all that Bath has to offer, from its historic sites and cultural attractions to its restaurants, shops, and entertainment venues. Whether you prefer a leisurely stroll through the picturesque streets of Bath or a night out on the town, living in <b>Southdown</b> provides easy access to everything this charming city has to offer. Additionally, <b>Southdown</b> boasts beautiful green spaces and a sense of tranquility, providing residents with the best of both worlds—proximity to the city center and a peaceful retreat to call home. If you're looking for a seamless blend of urban convenience and suburban serenity, <b>Southdown</b>'s location just <b>miles</b> away from <b>Bath city center</b> makes it an ideal place to live.</p><a id = "how_close_is_southdown_to_the_university_of_bath"> <h2>How close is Southdown to the University of Bath</h2></a><p>Southdown is conveniently located just a stone's throw away from the prestigious <b>University of Bath</b>, making it an ideal living option for students. Situated just a few <b>miles</b> from the university campus, Southdown offers easy access via multiple transportation options. For those looking to commute <b>by foot</b>, it's about a 30-minute walk, perfect for enjoying some fresh air and exercise. Alternatively, there is a reliable <b>bus route</b> that connects Southdown to the university, providing a convenient and affordable way to get to classes. For those who prefer the convenience of driving, the university is just a short car ride away, allowing for easy access to all campus facilities. With its close proximity to the <b>University of Bath</b>, Southdown offers a prime location for students looking for a comfortable and accessible living environment.</p><a id = "how_close_is_southdown_to_the_bath_spa_university"> <h2>How close is Southdown to the Bath Spa University</h2></a><p>Southdown is conveniently located near <b>Bath Spa University</b>, only a few <b>miles</b> away. If you prefer to travel <b>by foot</b>, it would take you approximately 40 minutes to reach the university. Alternatively, you can catch a bus from Southdown to <b>Bath Spa University</b>, which is a quick and easy commute. The <b>bus route</b> provides a convenient transportation option for students and visitors alike. For those who prefer to drive, the journey <b>by car</b> takes around 10-15 minutes, depending on traffic conditions. Whether you choose to travel <b>by foot</b>, bus, or car, Southdown offers easy access to <b>Bath Spa University</b>, making it a popular choice for students looking for accommodation close to campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>When searching for 8 bedroom student houses in Southdown, Bath, it's important to consider various factors such as location, amenities, and budget. Southdown is a popular area for students due to its close proximity to the University of Bath and local amenities. Many 8 bedroom student houses in Southdown offer spacious rooms, communal areas, and sometimes even garden space. It's crucial to inspect the property in person before making a decision and to carefully review the rental agreement to ensure it meets your needs. Overall, finding the perfect 8 bedroom student house in Southdown requires careful consideration and research, but with the right approach, you can secure a comfortable and convenient living space for you and your housemates.</p></>)
};

export default BathSouthdownHouse8;