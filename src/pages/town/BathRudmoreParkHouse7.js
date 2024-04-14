
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


const  BathRudmoreParkHouse7 = () => 
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

    return (<><h1>7 Bedroom Student Houses in Rudmore Park, Bath</h1><p>We have listings for <b>7 Bedroom Student Houses in Rudmore Park, Bath</b> for the academic year 2024. 
<b>7 Bedroom Student Houses in Rudmore Park, Bath</b> are perfect for large groups of students looking to live together in a spacious and comfortable environment while studying in Bath. These houses typically offer ample space, modern amenities, and a convenient location near the university and local amenities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/7-bedroom-student-houses-in-rudmore-park-bath.png')} alt='7 Bedroom Student Houses in Rudmore Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='7 Bedroom Student Houses in Rudmore Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71113&type=House&beds=7")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>7 Bedroom Student Houses in Rudmore Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_7_bedroom_student_houses_in_rudmore_park,_bath_pp/pm">Prices for 7 Bedroom Student Houses in Rudmore Park, Bath pp/pm</a></li><li><a href = "#7_bedroom_student_houses_in_rudmore_park,_bath__all_bills_inclusive">7 Bedroom Student Houses in Rudmore Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_7_bedroom_student_houses_in_rudmore_park,_bath">Cheap 7 Bedroom Student Houses in Rudmore Park, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_rudmore_park,_bath__recently_added">7 Bedroom Student Houses in Rudmore Park, Bath - Recently Added</a></li><li><a href = "#7_bedroom_student_houses_in_rudmore_park,_bath__recently_reduced">7 Bedroom Student Houses in Rudmore Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__7_bedroom_houses_in_rudmore_park,_bath,_somerset,_bath">Student Accommodation Portal - 7 Bedroom Houses in Rudmore Park, Bath, Somerset, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_rudmore_park,_bath__private_rental_sector">7 Bedroom Student Houses in Rudmore Park, Bath - Private Rental Sector</a></li><li><a href = "#7_bedroom_student_houses_in_rudmore_park,_bath__fully_furnished">7 Bedroom Student Houses in Rudmore Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rudmore_park_to_the_city_center">How close is Rudmore Park to the City Center</a></li><li><a href = "#how_close_is_rudmore_park_to_the_university_of_bath">How close is Rudmore Park to the University of Bath</a></li><li><a href = "#how_close_is_rudmore_park_to_the_bath_spa_university">How close is Rudmore Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_7_bedroom_student_houses_in_rudmore_park,_bath_pp/pm"> <h2>Prices for 7 Bedroom Student Houses in Rudmore Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton tableButton' title='7 Bedroom Student Houses in Rudmore Park, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71113")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "7_bedroom_student_houses_in_rudmore_park,_bath__all_bills_inclusive"> <h2>7 Bedroom Student Houses in Rudmore Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of having to juggle multiple bills and utility payments for your 7-bedroom student house in Rudmore Park, Bath, Somerset? Say goodbye to the hassle and stress of managing different accounts, and consider subscribing to an <b>all bills inclusive</b> service offered by <b>UniBills.com</b>. By opting for this convenient option, you can enjoy having all your bills, including electricity, water, gas, and internet, rolled into one simple monthly payment. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the added worry of budgeting for various expenses. Save time, avoid late fees, and streamline your finances by choosing the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and discover the benefits of simplifying your student living experience.</p><a id = "cheap_7_bedroom_student_houses_in_rudmore_park,_bath"> <h2>Cheap 7 Bedroom Student Houses in Rudmore Park, Bath</h2></a><p><Portlet location="REGION^71113" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_rudmore_park,_bath__recently_added"> <h2>7 Bedroom Student Houses in Rudmore Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71113" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_rudmore_park,_bath__recently_reduced"> <h2>7 Bedroom Student Houses in Rudmore Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71113" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__7_bedroom_houses_in_rudmore_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 7 Bedroom Houses in Rudmore Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable place to live in <b>Bath</b>, Somerset? Look no further than our property portal, where you can find a selection of <b>7 Bedroom Houses</b> in the desirable area of Rudmore Park. These <b>student Houses</b> are perfect for those attending the University of <b>Bath</b> or <b>Bath</b> Spa University, offering ample space for studying and socializing. Located in a tranquil neighborhood with easy access to local amenities and public transportation, these properties provide a convenient and enjoyable living experience for students. Don't miss out on the opportunity to secure a 7 bedroom house in Rudmore Park through our user-friendly platform.</p><a id = "7_bedroom_student_houses_in_rudmore_park,_bath__private_rental_sector"> <h2>7 Bedroom Student Houses in Rudmore Park, Bath - Private Rental Sector</h2></a><p>Are you searching for a spacious and comfortable living arrangement in Bath, Somerset? Look no further than the 7 Bedroom Houses in Rudmore Park. These properties offer ample space for large families or shared living situations, with the convenience of <b>bills included</b> in the rental price. Each house is <b>fully furnished</b>, ensuring that you can move in and feel at home right away. Located in the beautiful city of Bath, these houses provide a peaceful and picturesque setting while still being close to all the amenities and attractions that Bath has to offer. Don't miss out on the opportunity to live in one of these wonderful homes in Rudmore Park.</p><a id = "7_bedroom_student_houses_in_rudmore_park,_bath__fully_furnished"> <h2>7 Bedroom Student Houses in Rudmore Park, Bath - Fully Furnished</h2></a><p>Are you searching for the perfect student accommodation in Bath, Somerset? Look no further than the fully furnished 7 Bedroom Houses in Rudmore Park. Situated in the heart of Bath, these houses offer spacious and comfortable living spaces for students looking to balance their academic and social lives. With all the bedrooms, living areas, and kitchens fully furnished, moving in and settling down is a breeze. In Rudmore Park, Bath, it is normal for student houses to be fully furnished, ensuring that you have everything you need to make your stay enjoyable and stress-free. The convenient location of these houses allows students to easily access local amenities, universities, and transportation links. Don't miss out on the opportunity to live in these well-equipped and stylish homes while studying in the beautiful city of Bath.</p><a id = "how_close_is_rudmore_park_to_the_city_center"> <h2>How close is Rudmore Park to the City Center</h2></a><p><b>Rudmore Park</b> is conveniently located just 2 <b>miles</b> away from <b>Bath city center</b>, making it an ideal spot for those looking to explore all that the city has to offer. Situated in a peaceful and picturesque setting, <b>Rudmore Park</b> offers a relaxing retreat from the hustle and bustle of the city, while still being within easy reach of all the attractions, shops, and restaurants that Bath has to offer. Whether you're looking to visit historical landmarks such as the Roman Baths and Bath Abbey, or simply indulge in some retail therapy at the SouthGate shopping center, <b>Rudmore Park</b>'s close proximity to <b>Bath city center</b> makes it the perfect base for your stay.</p><a id = "how_close_is_rudmore_park_to_the_university_of_bath"> <h2>How close is Rudmore Park to the University of Bath</h2></a><p>Rudmore Park is conveniently located just 0.5 <b>miles</b> away from the <b>University of Bath</b>, making it easily accessible for students and staff alike. If you prefer to walk, it is a quick 10-minute journey on foot from the park to the university campus. Alternatively, there is a convenient <b>bus route</b> that connects Rudmore Park to the <b>University of Bath</b>, allowing for a stress-free commute. <b>by bus</b>, the journey takes only a few minutes, providing a quick and efficient way to get to and from campus. For those with their own transportation, Rudmore Park is just a short drive away from the <b>University of Bath</b>, making it a convenient option for those who prefer to travel <b>by car</b>. With its close proximity to the university and various transportation options, Rudmore Park offers a convenient and accessible location for those studying or working at the <b>University of Bath</b>.</p><a id = "how_close_is_rudmore_park_to_the_bath_spa_university"> <h2>How close is Rudmore Park to the Bath Spa University</h2></a><p>Rudmore Park is conveniently located in close proximity to <b>Bath Spa University</b>, making it an ideal accommodation option for students studying at the university. Situated just a few <b>miles</b> away, students can easily reach <b>Bath Spa University</b> <b>by foot</b>, taking a pleasant stroll through the city. For a quicker commute, there is also a convenient <b>bus route</b> that connects Rudmore Park to the university campus. By hopping on the bus, students can arrive at <b>Bath Spa University</b> in no time. Additionally, for those who prefer to drive, the university is only a short car ride away from Rudmore Park. With its strategic location and easy accessibility <b>by foot</b>, bus, or car, Rudmore Park offers students a convenient and comfortable living option while studying at <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 7-bedroom student house in Rudmore Park, Bath can be a rewarding experience for those looking for a comfortable and spacious living arrangement. With its convenient location near local amenities and public transport links, Rudmore Park offers an ideal setting for student living. The variety of properties available in this area cater to different preferences and budgets, providing students with plenty of options to choose from. Whether you are looking for a traditional Victorian property or a modern apartment, Rudmore Park has something for everyone. Overall, with its vibrant community and close proximity to the University of Bath, Rudmore Park is a fantastic choice for students seeking a 7-bedroom house in a lively and accessible area.</p></>)
};

export default BathRudmoreParkHouse7;