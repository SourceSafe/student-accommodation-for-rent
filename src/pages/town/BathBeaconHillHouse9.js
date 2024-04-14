
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


const  BathBeaconHillHouse9 = () => 
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

    return (<><h1>9 Bedroom Student Houses in Beacon Hill, Bath</h1><p>We have listings for <b>9 Bedroom Student Houses in Beacon Hill, Bath</b> for the academic year 2024. 
<b>9 Bedroom Student Houses in Beacon Hill, Bath</b> are ideal for large student groups looking to live together in a spacious and convenient location. These houses offer plenty of room for studying, socializing and enjoying student life in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/9-bedroom-student-houses-in-beacon-hill-bath.png')} alt='9 Bedroom Student Houses in Beacon Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='9 Bedroom Student Houses in Beacon Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61718&type=House&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>9 Bedroom Student Houses in Beacon Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_houses_in_beacon_hill,_bath_pp/pm">Prices for 9 Bedroom Student Houses in Beacon Hill, Bath pp/pm</a></li><li><a href = "#9_bedroom_student_houses_in_beacon_hill,_bath__all_bills_inclusive">9 Bedroom Student Houses in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_houses_in_beacon_hill,_bath">Cheap 9 Bedroom Student Houses in Beacon Hill, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_beacon_hill,_bath__recently_added">9 Bedroom Student Houses in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_houses_in_beacon_hill,_bath__recently_reduced">9 Bedroom Student Houses in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_houses_in_beacon_hill,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Houses in Beacon Hill, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_beacon_hill,_bath__private_rental_sector">9 Bedroom Student Houses in Beacon Hill, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_houses_in_beacon_hill,_bath__fully_furnished">9 Bedroom Student Houses in Beacon Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_beacon_hill_to_the_city_center">How close is Beacon Hill to the City Center</a></li><li><a href = "#how_close_is_beacon_hill_to_the_university_of_bath">How close is Beacon Hill to the University of Bath</a></li><li><a href = "#how_close_is_beacon_hill_to_the_bath_spa_university">How close is Beacon Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_houses_in_beacon_hill,_bath_pp/pm"> <h2>Prices for 9 Bedroom Student Houses in Beacon Hill, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£670 per month </td><td><button className = 'searchButton tableButton' title='9 Bedroom Student Houses in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "9_bedroom_student_houses_in_beacon_hill,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Houses in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Are you tired of the constant stress and confusion of managing multiple bills for your student house in Beacon Hill, Bath, Somerset? Subscribe to an <b>all bills inclusive</b> service with <b>UniBills.com</b> and enjoy the convenience and peace of mind it provides. With 9 bedrooms to take care of, why not simplify your life and <b>concentrate on your studies</b> instead? <b>UniBills.com</b> takes care of all utilities, internet, and even maintenance costs, leaving you with one less thing to worry about. Say goodbye to splitting bills with housemates and dealing with late payments - simply opt for the hassle-free all inclusive option provided by <b>UniBills.com</b>. Save time, avoid disputes, and stay focused on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of stress-free living.</p><a id = "cheap_9_bedroom_student_houses_in_beacon_hill,_bath"> <h2>Cheap 9 Bedroom Student Houses in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_beacon_hill,_bath__recently_added"> <h2>9 Bedroom Student Houses in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_beacon_hill,_bath__recently_reduced"> <h2>9 Bedroom Student Houses in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_houses_in_beacon_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Houses in Beacon Hill, Bath, Somerset, Bath</h2></a><p>Are you searching for <b>9 Bedroom Houses</b> in the beautiful area of Beacon Hill, <b>Bath</b>, Somerset, perfect for students attending the University of <b>Bath</b> or <b>Bath</b> Spa University? Look no further than our property portal! We specialize in helping students find their ideal accommodation, offering a range of spacious and comfortable <b>student Houses</b> that are just a stone's throw away from campus. Imagine living in a vibrant and charming neighborhood like Beacon Hill, with its picturesque surroundings and convenient amenities. Whether you prefer a modern house with all the latest facilities or a cozy home with a touch of character, we have options to suit every student's needs. Don't waste time scrolling through endless listings – let us make your search for the perfect 9 bedroom student house in <b>Bath</b> a breeze.</p><a id = "9_bedroom_student_houses_in_beacon_hill,_bath__private_rental_sector"> <h2>9 Bedroom Student Houses in Beacon Hill, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and convenient housing option in Beacon Hill, Bath, Somerset? Consider renting one of the stunning 9 bedroom houses available in this charming area. These properties offer ample living space and are perfect for large families or groups of friends looking to live together. The houses are <b>fully furnished</b>, providing a hassle-free move-in experience, and come with <b>bills included</b>, making budgeting easier for tenants. With modern amenities and a prime location, these <b>9 Bedroom Houses in Beacon Hill, Bath, Somerset, Bath</b>, are sure to provide a comfortable and enjoyable living experience for all residents.</p><a id = "9_bedroom_student_houses_in_beacon_hill,_bath__fully_furnished"> <h2>9 Bedroom Student Houses in Beacon Hill, Bath - Fully Furnished</h2></a><p>If you are seeking a spacious and well-equipped accommodation in Beacon Hill, Bath, Somerset, Bath, look no further than the fully furnished 9 Bedroom Houses in the area. These properties are perfect for large groups or families looking for a comfortable and convenient stay in the charming city of Bath. Whether you are a student group or a family looking for a temporary home, these houses offer all the amenities you need for a seamless living experience. From cozy bedrooms to modern kitchens and stylish living areas, these houses are designed to make you feel right at home. In Bath, it is normal for student Houses to be fully furnished, so you can expect everything you need from furniture to appliances to be provided. With easy access to local amenities and attractions, these houses offer the perfect blend of comfort and convenience for your stay in Bath.</p><a id = "how_close_is_beacon_hill_to_the_city_center"> <h2>How close is Beacon Hill to the City Center</h2></a><p><b>Beacon Hill</b> is a charming and peaceful neighborhood located just a few <b>miles</b> away from <b>Bath city center</b>. Nestled in the rolling countryside of Somerset, <b>Beacon Hill</b> offers a tranquil escape from the hustle and bustle of the city while still being conveniently close to all the amenities and attractions that Bath has to offer. With its picturesque streets and stunning views of the surrounding countryside, <b>Beacon Hill</b> is the perfect place to unwind and relax. Whether you're looking to explore the historic city center of Bath with its iconic Roman Baths and Georgian architecture, or simply enjoy a leisurely stroll along the nearby canal, <b>Beacon Hill</b> provides the ideal base for a memorable stay. So, if you're seeking a peaceful retreat within easy reach of <b>Bath city center</b>, look no further than <b>Beacon Hill</b>.</p><a id = "how_close_is_beacon_hill_to_the_university_of_bath"> <h2>How close is Beacon Hill to the University of Bath</h2></a><p>Beacon Hill is conveniently located near the <b>University of Bath</b>, just a few <b>miles</b> away. If you're up for a brisk walk, you can reach the university <b>by foot</b> in approximately 30-40 minutes. Alternatively, hopping on the <b>bus route</b> which connects Beacon Hill to the university will get you there in just a short ride. For those with a vehicle, the university is easily accessible <b>by car</b> and the journey takes around 10-15 minutes. Whether you prefer to stroll, take a bus, or drive, getting from Beacon Hill to the <b>University of Bath</b> is a quick and straightforward journey. This close proximity makes Beacon Hill an ideal location for students and staff who want to be near the university while enjoying the peaceful surroundings of the area.</p><a id = "how_close_is_beacon_hill_to_the_bath_spa_university"> <h2>How close is Beacon Hill to the Bath Spa University</h2></a><p>Beacon Hill is conveniently located close to <b>Bath Spa University</b>, making it an ideal residential area for students looking for accommodation near campus. The university is just a few <b>miles</b> away from Beacon Hill, which can easily be reached <b>by foot</b>, bus, or car. <b>by foot</b>, it would take around 30-40 minutes to walk to the university, providing a scenic route through the city streets. Alternatively, the <b>bus route</b> connecting Beacon Hill to <b>Bath Spa University</b> is efficient and reliable, with buses running frequently throughout the day. For those with a car, the journey can be completed in just a few minutes, offering a quick and convenient transportation option. This proximity to <b>Bath Spa University</b> makes Beacon Hill a popular choice for students looking for a convenient and accessible location to live during their studies.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In your search for a 9 bedroom student house in Beacon Hill, Bath, it's important to consider various factors such as location, amenities, and budget. Beacon Hill offers a picturesque setting with easy access to the University of Bath campus, making it an ideal choice for students. When looking for a property of this size, it's crucial to ensure that it meets the needs of all occupants, with spacious bedrooms, communal areas, and proximity to local shops and transport links. Additionally, weighing the cost against the value of the property is essential to make a well-informed decision. Overall, finding a 9 bedroom student house in Beacon Hill can provide an enriching living experience for a large group of students, offering a perfect balance of comfort, convenience, and community.</p></>)
};

export default BathBeaconHillHouse9;