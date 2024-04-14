
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


const  BathBloomfieldHouse7 = () => 
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

    return (<><h1>7 Bedroom Student Houses in Bloomfield, Bath</h1><p>We have listings for <b>7 Bedroom Student Houses in Bloomfield, Bath</b> for the academic year 2024. 
<b>7 Bedroom Student Houses in Bloomfield, Bath</b> are perfect for a larger group of students looking to live together in a spacious and comfortable environment. These houses typically offer ample living space, multiple bathrooms, and are located in close proximity to local amenities and transportation options.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/7-bedroom-student-houses-in-bloomfield-bath.png')} alt='7 Bedroom Student Houses in Bloomfield, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='7 Bedroom Student Houses in Bloomfield, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71095&type=House&beds=7")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>7 Bedroom Student Houses in Bloomfield, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_7_bedroom_student_houses_in_bloomfield,_bath_pp/pm">Prices for 7 Bedroom Student Houses in Bloomfield, Bath pp/pm</a></li><li><a href = "#7_bedroom_student_houses_in_bloomfield,_bath__all_bills_inclusive">7 Bedroom Student Houses in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_7_bedroom_student_houses_in_bloomfield,_bath">Cheap 7 Bedroom Student Houses in Bloomfield, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_bloomfield,_bath__recently_added">7 Bedroom Student Houses in Bloomfield, Bath - Recently Added</a></li><li><a href = "#7_bedroom_student_houses_in_bloomfield,_bath__recently_reduced">7 Bedroom Student Houses in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__7_bedroom_houses_in_bloomfield,_bath,_somerset,_bath">Student Accommodation Portal - 7 Bedroom Houses in Bloomfield, Bath, Somerset, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_bloomfield,_bath__private_rental_sector">7 Bedroom Student Houses in Bloomfield, Bath - Private Rental Sector</a></li><li><a href = "#7_bedroom_student_houses_in_bloomfield,_bath__fully_furnished">7 Bedroom Student Houses in Bloomfield, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_bloomfield_to_the_city_center">How close is Bloomfield to the City Center</a></li><li><a href = "#how_close_is_bloomfield_to_the_university_of_bath">How close is Bloomfield to the University of Bath</a></li><li><a href = "#how_close_is_bloomfield_to_the_bath_spa_university">How close is Bloomfield to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_7_bedroom_student_houses_in_bloomfield,_bath_pp/pm"> <h2>Prices for 7 Bedroom Student Houses in Bloomfield, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton tableButton' title='7 Bedroom Student Houses in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "7_bedroom_student_houses_in_bloomfield,_bath__all_bills_inclusive"> <h2>7 Bedroom Student Houses in Bloomfield, Bath - All Bills Inclusive</h2></a><p>When you're a busy student living in a 7-bedroom house in Bloomfield, Bath, Somerset, the last thing you need to worry about is managing multiple bills. That's where <b>UniBills.com</b> comes in with their <b>all bills inclusive</b> service. By subscribing to this convenient option, you can enjoy the hassle-free experience of having all your bills, including utilities and WiFi, rolled into one convenient monthly payment. With <b>UniBills.com</b> taking care of your bills, you can <b>concentrate on your studies</b> and social life without the stress of managing different accounts and due dates. Say goodbye to the headache of splitting bills with housemates and trying to keep track of who owes what. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and make your student life in Bloomfield a breeze with the all-inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_7_bedroom_student_houses_in_bloomfield,_bath"> <h2>Cheap 7 Bedroom Student Houses in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_bloomfield,_bath__recently_added"> <h2>7 Bedroom Student Houses in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_bloomfield,_bath__recently_reduced"> <h2>7 Bedroom Student Houses in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__7_bedroom_houses_in_bloomfield,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 7 Bedroom Houses in Bloomfield, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable 7 Bedroom House in Bloomfield, <b>Bath</b>, Somerset? Look no further! Our property portal specializes in connecting students with the perfect accommodation options. Whether you're attending the University of <b>Bath</b> or <b>Bath</b> Spa University, we have a wide variety of <b>student Houses</b> that will suit your needs. Bloomfield, <b>Bath</b> is a popular area for students due to its close proximity to campus and vibrant student community. With our easy-to-use search filters, you can quickly find the ideal 7 Bedroom House that meets all your requirements.</p><a id = "7_bedroom_student_houses_in_bloomfield,_bath__private_rental_sector"> <h2>7 Bedroom Student Houses in Bloomfield, Bath - Private Rental Sector</h2></a><p>Are you looking for a spacious and comfortable living space in the heart of Bath, Somerset? Our private rental sector offers 7 Bedroom Houses in Bloomfield, Bath that are perfect for students, professionals, or families looking for a large accommodation. These houses come <b>fully furnished</b>, saving you the hassle of having to buy or move furniture. Additionally, with <b>bills included</b> in the rent, you can enjoy a stress-free living experience without worrying about additional expenses. The Bloomfield area is known for its picturesque surroundings and convenient location, making it an ideal spot for settling down. Don't miss out on the opportunity to live in one of our beautiful 7 bedroom houses in Bath - contact us today for more information on availability and pricing.</p><a id = "7_bedroom_student_houses_in_bloomfield,_bath__fully_furnished"> <h2>7 Bedroom Student Houses in Bloomfield, Bath - Fully Furnished</h2></a><p>Are you looking for the perfect accommodation in Bath, Somerset? Look no further than our fully furnished 7 Bedroom Houses in Bloomfield. These spacious and stylish homes are ideal for students or large families looking for a comfortable and convenient living space. Located in the heart of Bath, these houses boast modern amenities and tasteful decor throughout. It is normal for student Houses to be fully furnished, eliminating the hassle of buying and transporting furniture. With ample bedroom and communal space, these houses provide a welcoming atmosphere for residents to relax and socialize. Experience luxurious living in the charming city of Bath with our fully furnished 7 Bedroom Houses in Bloomfield.</p><a id = "how_close_is_bloomfield_to_the_city_center"> <h2>How close is Bloomfield to the City Center</h2></a><p>Located just a few <b>miles</b> from <b>Bath city center</b>, <b>Bloomfield</b> offers a convenient and easily accessible location for visitors looking to explore all that the historic city has to offer. Situated in close proximity to the bustling heart of Bath, <b>Bloomfield</b> provides a peaceful retreat while still being within easy reach of the city's attractions. Whether you're interested in visiting the famous Roman Baths, exploring the beautiful Georgian architecture, or shopping in the vibrant city center, <b>Bloomfield</b>'s proximity makes it an ideal base for your stay. With only a short distance separating the two locations, you can easily venture into <b>Bath city center</b> to immerse yourself in its rich history and culture before returning to the tranquility of <b>Bloomfield</b> to relax and unwind.</p><a id = "how_close_is_bloomfield_to_the_university_of_bath"> <h2>How close is Bloomfield to the University of Bath</h2></a><p>Bloomfield is conveniently located just a few <b>miles</b> away from the prestigious <b>University of Bath</b>. For students residing in Bloomfield, the university is easily accessible <b>by foot</b>, bus, or car. Those who prefer to walk can reach the campus in approximately 30-40 minutes, making it a pleasant and scenic journey. Alternatively, there are regular bus services connecting Bloomfield to the <b>University of Bath</b>, with a convenient <b>bus route</b> that students can take for a quick and hassle-free commute. For those with a vehicle, the university can be reached in just a short drive, taking around 10-15 minutes depending on traffic conditions. With its close proximity to the <b>University of Bath</b>, Bloomfield offers students the perfect balance of a peaceful residential area while still being within easy reach of campus facilities and activities.</p><a id = "how_close_is_bloomfield_to_the_bath_spa_university"> <h2>How close is Bloomfield to the Bath Spa University</h2></a><p>Bloomfield is conveniently located close to <b>Bath Spa University</b>, being only a few <b>miles</b> away from the campus. The university is easily accessible from Bloomfield by various modes of transportation. If you prefer walking, it would take you around 30-40 minutes to reach the university on foot. Alternatively, there is a direct <b>bus route</b> connecting Bloomfield and <b>Bath Spa University</b>, making the commute quick and hassle-free. <b>by bus</b>, the journey takes around 15-20 minutes, depending on traffic. For those who prefer driving, the university is just a short drive away from Bloomfield, with the route taking approximately 10-15 minutes <b>by car</b>. With these transportation options in mind, Bloomfield’s proximity to <b>Bath Spa University</b> makes it an ideal location for students looking for convenient and easy access to campus facilities and resources.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 7-bedroom student house in Bloomfield, Bath can be quite a challenging task due to the limited availability of such properties in the area. However, with thorough research and assistance from reputable real estate agents, students can still find suitable accommodations that meet their needs. It is important to start the search early and be open to considering different neighborhoods within Bath to increase the chances of finding the ideal student house. Additionally, staying within a budget and carefully inspecting the property before committing to a lease are crucial steps in ensuring a smooth and successful renting experience. Overall, with determination and patience, students can find a comfortable and spacious 7-bedroom house in Bloomfield that is not only conducive to studying but also provides a welcoming and convenient living environment for them and their housemates.</p></>)
};

export default BathBloomfieldHouse7;