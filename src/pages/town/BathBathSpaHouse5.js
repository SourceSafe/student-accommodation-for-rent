
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


const  BathBathSpaHouse5 = () => 
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

    return (<><h1>5 Bedroom Student Houses in Bath Spa, Bath</h1><p>We have listings for <b>5 Bedroom Student Houses in Bath Spa, Bath</b> for the academic year 2024. 
<b>5 Bedroom Student Houses in Bath Spa, Bath</b> are perfect for groups of students looking for spacious accommodation in a convenient location. These houses often offer amenities such as shared common areas, kitchens, and bathrooms, providing a comfortable and communal living experience for students in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/5-bedroom-student-houses-in-bath-spa-bath.png')} alt='5 Bedroom Student Houses in Bath Spa, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='5 Bedroom Student Houses in Bath Spa, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71093&type=House&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>5 Bedroom Student Houses in Bath Spa, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_5_bedroom_student_houses_in_bath_spa,_bath_pp/pm">Prices for 5 Bedroom Student Houses in Bath Spa, Bath pp/pm</a></li><li><a href = "#5_bedroom_student_houses_in_bath_spa,_bath__all_bills_inclusive">5 Bedroom Student Houses in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_5_bedroom_student_houses_in_bath_spa,_bath">Cheap 5 Bedroom Student Houses in Bath Spa, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_bath_spa,_bath__recently_added">5 Bedroom Student Houses in Bath Spa, Bath - Recently Added</a></li><li><a href = "#5_bedroom_student_houses_in_bath_spa,_bath__recently_reduced">5 Bedroom Student Houses in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__5_bedroom_houses_in_bath_spa,_bath,_somerset,_bath">Student Accommodation Portal - 5 Bedroom Houses in Bath Spa, Bath, Somerset, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_bath_spa,_bath__private_rental_sector">5 Bedroom Student Houses in Bath Spa, Bath - Private Rental Sector</a></li><li><a href = "#5_bedroom_student_houses_in_bath_spa,_bath__fully_furnished">5 Bedroom Student Houses in Bath Spa, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_bath_spa_to_the_city_center">How close is Bath Spa to the City Center</a></li><li><a href = "#how_close_is_bath_spa_to_the_university_of_bath">How close is Bath Spa to the University of Bath</a></li><li><a href = "#how_close_is_bath_spa_to_the_bath_spa_university">How close is Bath Spa to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_5_bedroom_student_houses_in_bath_spa,_bath_pp/pm"> <h2>Prices for 5 Bedroom Student Houses in Bath Spa, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£625 per month </td><td><button className = 'searchButton tableButton' title='5 Bedroom Student Houses in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "5_bedroom_student_houses_in_bath_spa,_bath__all_bills_inclusive"> <h2>5 Bedroom Student Houses in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 5 bedroom student house in Bath Spa, Bath, Somerset is a wise choice to make your student life hassle-free. With <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including gas, electricity, water, and internet, rolled into one easy payment. This means you can <b>concentrate on your studies</b> and social life without the stress of managing multiple bills and suppliers. <b>UniBills.com</b> ensures that all your utilities are taken care of, allowing you to focus on what really matters. Say goodbye to the hassle of remembering due dates and coordinating payments, and opt for the all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy the peace of mind that comes with knowing that all your bills are sorted.</p><a id = "cheap_5_bedroom_student_houses_in_bath_spa,_bath"> <h2>Cheap 5 Bedroom Student Houses in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_bath_spa,_bath__recently_added"> <h2>5 Bedroom Student Houses in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_bath_spa,_bath__recently_reduced"> <h2>5 Bedroom Student Houses in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__5_bedroom_houses_in_bath_spa,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 5 Bedroom Houses in Bath Spa, Bath, Somerset, Bath</h2></a><p>Looking for spacious student accommodation in <b>Bath</b>? Our property portal is here to help you find the perfect <b>5 Bedroom Houses</b> in <b>Bath</b> and its surrounding areas, including <b>Bath</b> Spa, <b>Bath</b>, Somerset. Whether you're attending the University of <b>Bath</b> or <b>Bath</b> Spa University, we have a wide range of <b>student Houses</b> available to suit your needs. With our user-friendly search filters, you can easily narrow down your options and find a property that meets your requirements, whether it's proximity to campus, amenities, or budget. Don't settle for cramped quarters – let us assist you in finding a comfortable and spacious 5 bedroom house that you can call home during your academic journey in <b>Bath</b>.</p><a id = "5_bedroom_student_houses_in_bath_spa,_bath__private_rental_sector"> <h2>5 Bedroom Student Houses in Bath Spa, Bath - Private Rental Sector</h2></a><p>If you're looking for spacious and well-equipped living in Bath Spa, Bath, Somerset, Bath, the private rental sector offers an array of options, including 5 bedroom houses. These properties are ideal for those seeking spacious accommodations with ample room for living and entertaining. Many of the 5 bedroom houses in this area come <b>fully furnished</b>, making it easy for tenants to move in and feel at home right away. Additionally, some landlords may also offer the convenience of having <b>bills included</b> in the rent, simplifying the monthly budgeting process for tenants. This sector provides a great opportunity for those looking to share accommodations with friends or housemates while enjoying the comfort and privacy of their own space.</p><a id = "5_bedroom_student_houses_in_bath_spa,_bath__fully_furnished"> <h2>5 Bedroom Student Houses in Bath Spa, Bath - Fully Furnished</h2></a><p>Are you in search of a spacious and comfortable living space in the charming city of Bath Spa, Bath, Somerset? Look no further than <b>fully furnished 5 Bedroom Houses in Bath Spa, Bath, Somerset, Bath</b>. These houses are elegantly designed and equipped with everything you need for a luxurious and convenient living experience. From cozy bedrooms to a fully equipped kitchen and stylish living areas, these houses offer the perfect blend of comfort and functionality. Situated in the picturesque city of Bath, these houses provide easy access to local amenities, shops, and attractions. Whether you are a student looking for a convenient living arrangement or a family seeking a peaceful retreat, <b>fully furnished 5 Bedroom Houses in Bath Spa, Bath, Somerset, Bath</b> are the ideal choice. In Bath, it is normal for student Houses to be fully furnished, so you can simply move in and start enjoying the wonderful city of Bath without any hassle.</p><a id = "how_close_is_bath_spa_to_the_city_center"> <h2>How close is Bath Spa to the City Center</h2></a><p><b>Bath Spa</b> railway station is conveniently located just a short distance from <b>Bath city center</b>. Situated only 0.4 <b>miles</b> away, it's easily accessible on foot, making it the perfect starting point for exploring the historic streets, landmarks, and attractions of this beautiful city. Whether you're visiting for a relaxing spa day, a cultural excursion, or a shopping spree, <b>Bath Spa</b> station's proximity to the city center ensures you're never far from where the action is. With its stunning Georgian architecture, Roman baths, and charming cobblestone streets, <b>Bath city center</b> is a must-visit destination for travelers seeking a taste of England's past. So hop off the train at <b>Bath Spa</b> station and immerse yourself in the vibrant atmosphere of this enchanting city, just moments away from the heart of it all.</p><a id = "how_close_is_bath_spa_to_the_university_of_bath"> <h2>How close is Bath Spa to the University of Bath</h2></a><p>Bath Spa is conveniently located close to the <b>University of Bath</b>, just a few <b>miles</b> away. For those who prefer walking, the University is only a 30-minute walk from the train station. However, for a quicker option, there is a direct <b>bus route</b> that connects Bath Spa to the <b>University of Bath</b>, making the journey easy and efficient. If traveling <b>by car</b>, the university can be reached in just a short drive, taking around 10-15 minutes depending on traffic. Whether you choose to commute <b>by foot</b>, bus, or car, Bath Spa and the <b>University of Bath</b> are well-connected, allowing you to easily navigate between the two locations.</p><a id = "how_close_is_bath_spa_to_the_bath_spa_university"> <h2>How close is Bath Spa to the Bath Spa University</h2></a><p><b>Bath Spa University</b> is conveniently located in the picturesque city of Bath, just a stone's throw away from the charming Bath Spa train station. The university is less than 3 <b>miles</b> away from the city center, making it easily accessible <b>by foot</b>, bus, or car. For those looking to take a leisurely stroll, it would take around 45 minutes to walk from the train station to the university campus. Alternatively, there are frequent bus services that run between Bath Spa and <b>Bath Spa University</b>, with the journey taking approximately 15-20 minutes. If you prefer to drive, it's a quick 10-minute journey <b>by car</b>, making it a seamless commute for students and visitors alike. With its close proximity to the city center and various transportation options, getting to and from <b>Bath Spa University</b> is a breeze.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 5 bedroom student house in Bath Spa, Bath can be an exciting yet daunting task. With its vibrant student community and stunning architecture, Bath is a popular destination for students. When searching for accommodation, it is important to consider factors such as location, price, and amenities. Bath offers a range of properties, from modern apartments to charming period houses, providing something for everyone. Conducting thorough research and viewing multiple properties can help ensure finding the perfect student house that meets all requirements. Once settled in a 5 bedroom student house in Bath, students can enjoy the city's thriving nightlife, cultural attractions, and picturesque surroundings. In conclusion, with its diverse selection of properties and vibrant atmosphere, finding a 5 bedroom student house in Bath Spa, Bath is an exciting and rewarding experience.</p></>)
};

export default BathBathSpaHouse5;