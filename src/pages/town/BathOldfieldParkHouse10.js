
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


const  BathOldfieldParkHouse10 = () => 
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

    return (<><h1>10 Bedroom Student Houses in Oldfield Park, Bath</h1><p>We have listings for <b>10 Bedroom Student Houses in Oldfield Park, Bath</b> for the academic year 2024. 
<b>10 Bedroom Student Houses in Oldfield Park, Bath</b> are perfect for large groups of students looking for spacious and comfortable living arrangements in a popular student area in Bath. With a variety of amenities and convenient access to local shops, restaurants, and public transportation, these properties offer an ideal student living experience.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/10-bedroom-student-houses-in-oldfield-park-bath.png')} alt='10 Bedroom Student Houses in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='10 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71108&type=House&beds=10")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>10 Bedroom Student Houses in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_10_bedroom_student_houses_in_oldfield_park,_bath_pp/pm">Prices for 10 Bedroom Student Houses in Oldfield Park, Bath pp/pm</a></li><li><a href = "#10_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive">10 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_10_bedroom_student_houses_in_oldfield_park,_bath">Cheap 10 Bedroom Student Houses in Oldfield Park, Bath</a></li><li><a href = "#10_bedroom_student_houses_in_oldfield_park,_bath__recently_added">10 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#10_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced">10 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__10_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 10 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#10_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector">10 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#10_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished">10 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_10_bedroom_student_houses_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 10 Bedroom Student Houses in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton tableButton' title='10 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "10_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive"> <h2>10 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 10 bedroom house in Oldfield Park, Bath, Somerset? Managing household bills can be a headache when you have a busy academic schedule. That's where an <b>all bills inclusive</b> service like <b>UniBills.com</b> can come to your rescue! By opting for an <b>all bills inclusive</b> package, you can enjoy the hassle-free convenience of having all your utility bills, including gas, electricity, water, and internet, rolled into one simple monthly payment. With <b>UniBills.com</b> taking care of your bills, you can <b>concentrate on your studies</b> and social life without worrying about budgeting for various expenses. Say goodbye to stressful bill payments and hello to peace of mind with the all-inclusive option provided by <b>UniBills.com</b>. Save time and energy by getting a quote from <b>UniBills.com</b> or any accommodation listed on this website today and simplify your student living experience.</p><a id = "cheap_10_bedroom_student_houses_in_oldfield_park,_bath"> <h2>Cheap 10 Bedroom Student Houses in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_houses_in_oldfield_park,_bath__recently_added"> <h2>10 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced"> <h2>10 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__10_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 10 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you on the hunt for a spacious and comfortable student house in <b>Bath</b>, specifically in the sought-after area of Oldfield Park, <b>Bath</b>, Somerset? Our property portal is here to make your search for the perfect 10-bedroom house a breeze! With convenient access to both University of <b>Bath</b> and <b>Bath</b> Spa University, you'll find plenty of options that cater to your academic and social needs. Whether you're looking for a modern renovated property or a charming Victorian-style house, we have a variety of listings to suit your preferences. Say goodbye to the hassle of searching multiple websites and let us guide you to your ideal student home in <b>Bath</b>'s vibrant student community. Discover the convenience of browsing through numerous available 10-bedroom houses in Oldfield Park, <b>Bath</b>, Somerset, all in one place.</p><a id = "10_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector"> <h2>10 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for the perfect student accommodation in Bath? Explore the vibrant neighborhood of Oldfield Park and discover stunning 10-bedroom houses that cater to your every need. These spacious properties in Bath, Somerset are ideal for large groups of friends or students looking to live together. With <b>bills included</b> in the rent, you can enjoy hassle-free living without any added stress. Each house is <b>fully furnished</b>, ensuring that you can move in and feel at home right away. Located in a bustling area with easy access to local amenities and public transport, these properties offer both convenience and comfort.</p><a id = "10_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished"> <h2>10 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</h2></a><p>Looking for accommodation in the beautiful city of Bath? Consider fully furnished 10 Bedroom Houses in Oldfield Park, Bath, Somerset. Situated in the popular student area of Oldfield Park, these properties offer the perfect mix of convenience and comfort. With 10 bedrooms, there is plenty of space for all your housemates, making it an ideal choice for student groups looking to live together. In Bath, it is normal for student houses to be fully furnished. This means you can move in hassle-free and start enjoying your new home right away. From comfortable beds and spacious wardrobes to fully-equipped kitchens and cozy living areas, everything you need is already provided. Located within easy reach of local amenities and transport links, these houses offer a convenient and practical living solution for students in Bath. Don't miss out on the opportunity to experience the vibrant city of Bath while enjoying the comforts of a fully furnished student house in Oldfield Park.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming suburb located just a stone's throw away from <b>Bath city center</b>. Situated only 1.3 <b>miles</b> southwest from the heart of Bath, it is easily accessible to all the attractions and amenities the city has to offer. Whether you fancy a leisurely stroll through the historic streets, a visit to the iconic Roman Baths, or a shopping spree in the bustling city center, <b>Oldfield Park</b> provides a convenient base for exploring Bath. With excellent transport links such as buses and trains, getting to and from the city center is a breeze. Additionally, <b>Oldfield Park</b> is brimming with its own unique character, with plenty of cafes, shops, and parks to enjoy. So, if you're looking for the perfect balance of city convenience and suburban tranquility, <b>Oldfield Park</b> is the ideal location to experience all that Bath has to offer.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is conveniently located just one mile away from the <b>University of Bath</b>, making it an ideal housing option for students. For those who prefer walking, the university can be reached in about 20-25 minutes on foot. Alternatively, there is a direct <b>bus route</b> that connects Oldfield Park to the university, with a journey time of around 10 minutes. If you have access to a car, the drive from Oldfield Park to the <b>University of Bath</b> takes just a few minutes, making commuting a breeze. This close proximity allows students to easily access the university's facilities and services while enjoying the vibrant community of Oldfield Park. Whether you choose to travel <b>by foot</b>, bus, or car, the short distance between Oldfield Park and the <b>University of Bath</b> ensures a convenient and stress-free commute.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is conveniently close to <b>Bath Spa University</b>, located just 1.5 <b>miles</b> away. The university is easily accessible from Oldfield Park <b>by foot</b>, which would take approximately 30 minutes. For those who prefer public transport, there is a direct <b>bus route</b> that connects Oldfield Park to the university campus, making the journey quick and convenient. <b>by bus</b>, the commute between Oldfield Park and <b>Bath Spa University</b> takes about 10 minutes. For those who prefer driving, the university is just a short 5-minute car ride away from Oldfield Park. This close proximity makes Oldfield Park an ideal location for students looking for convenient access to campus while still enjoying the vibrant community and amenities of the neighborhood.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 10-bedroom student house in Oldfield Park, Bath offers a variety of options for those looking to live together with friends or fellow students. With its close proximity to local amenities, transport links, and the University of Bath, Oldfield Park provides a convenient and lively location for student living. Properties in this area vary in styles, sizes, and prices, catering to different preferences and budgets. From spacious Victorian terraces to modern student accommodations, there is something for everyone in this vibrant neighborhood. Overall, renting a 10-bedroom student house in Oldfield Park can provide a comfortable and sociable living arrangement, perfect for those seeking a more communal and dynamic student experience.</p></>)
};

export default BathOldfieldParkHouse10;