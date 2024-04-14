
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


const  BathRudmoreParkFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Rudmore Park, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Rudmore Park, Bath</b> for the academic year 2024. 

Located in the picturesque city of Bath, 2 Bedroom Student Flats in Rudmore Park offer comfortable and convenient living spaces for students. With easy access to local universities, amenities, and public transportation, these flats provide an ideal living environment for students during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-rudmore-park-bath.png')} alt='2 Bedroom Student Flats in Rudmore Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Rudmore Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71113&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Rudmore Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_rudmore_park,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Rudmore Park, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_rudmore_park,_bath__all_bills_inclusive">2 Bedroom Student Flats in Rudmore Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_rudmore_park,_bath">Cheap 2 Bedroom Student Flats in Rudmore Park, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_rudmore_park,_bath__recently_added">2 Bedroom Student Flats in Rudmore Park, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_rudmore_park,_bath__recently_reduced">2 Bedroom Student Flats in Rudmore Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_rudmore_park,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Rudmore Park, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_rudmore_park,_bath__private_rental_sector">2 Bedroom Student Flats in Rudmore Park, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_rudmore_park,_bath__fully_furnished">2 Bedroom Student Flats in Rudmore Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rudmore_park_to_the_city_center">How close is Rudmore Park to the City Center</a></li><li><a href = "#how_close_is_rudmore_park_to_the_university_of_bath">How close is Rudmore Park to the University of Bath</a></li><li><a href = "#how_close_is_rudmore_park_to_the_bath_spa_university">How close is Rudmore Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_rudmore_park,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Rudmore Park, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£707 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Rudmore Park, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71113")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_rudmore_park,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Rudmore Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2 bedroom flat in Rudmore Park, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service could make your life much easier. Imagine not having to worry about separate utility bills, internet, or council tax payments each month. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by them. By choosing this service, you can <b>concentrate on your studies</b> without the stress of managing multiple bills. <b>UniBills.com</b> offers competitive prices and transparent billing, making it a convenient choice for busy students. Say goodbye to the hassle of sorting through various bills and hello to a simplified, streamlined approach to student living. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student life.</p><a id = "cheap_2_bedroom_student_flats_in_rudmore_park,_bath"> <h2>Cheap 2 Bedroom Student Flats in Rudmore Park, Bath</h2></a><p><Portlet location="REGION^71113" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_rudmore_park,_bath__recently_added"> <h2>2 Bedroom Student Flats in Rudmore Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71113" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_rudmore_park,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Rudmore Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71113" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_rudmore_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Rudmore Park, Bath, Somerset, Bath</h2></a><p>Are you a student searching for the perfect 2 bedroom flat in the charming area of Rudmore Park, <b>Bath</b>, Somerset? Look no further than our property portal, where we specialize in connecting students with ideal living spaces. With a variety of options to choose from, you can find a cozy and convenient 2 bedroom flat that suits your needs and budget. Located near prestigious institutions like the University of <b>Bath</b> and <b>Bath</b> Spa University, Rudmore Park offers a peaceful residential environment with easy access to campus and local amenities. Let us help you find the perfect student flat in <b>Bath</b>, so you can focus on your studies and enjoy all that this beautiful city has to offer.</p><a id = "2_bedroom_student_flats_in_rudmore_park,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Rudmore Park, Bath - Private Rental Sector</h2></a><p>Looking for a convenient and comfortable place to rent? Look no further than the <b>2 Bedroom Flats in Rudmore Park, Bath, Somerset, Bath</b>. These flats offer the perfect combination of modern living and a peaceful setting. Each flat comes <b>fully furnished</b>, ensuring that you can move in and feel at home right away. What's more, bills are included in the rental price, taking the hassle out of managing multiple accounts. Whether you're a young professional, a couple, or a small family, these flats provide the ideal space to relax and unwind after a busy day. Don't miss out on the opportunity to live in one of Bath's most sought-after neighborhoods.</p><a id = "2_bedroom_student_flats_in_rudmore_park,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Rudmore Park, Bath - Fully Furnished</h2></a><p>If you are in search of a convenient and hassle-free living arrangement in Bath, Somerset, look no further than the fully furnished 2 Bedroom Flats in Rudmore Park. Located in the charming city of Bath, these flats offer the perfect blend of comfort and convenience. Situated in the picturesque neighborhood of Rudmore Park, these flats come fully furnished, making moving in a breeze. In Bath, Somerset, it is normal for student flats to be fully furnished, which means you can just bring your personal items and settle right in. The two-bedroom layout provides ample space for sharing with a friend or having a spare room for guests. Additionally, these flats often come complete with modern amenities, ensuring a comfortable and stylish living experience. Don't miss out on the opportunity to reside in these cozy and conveniently located flats in beautiful Bath.</p><a id = "how_close_is_rudmore_park_to_the_city_center"> <h2>How close is Rudmore Park to the City Center</h2></a><p><b>Rudmore Park</b> is conveniently located near <b>Bath city center</b>, just a few <b>miles</b> away. This makes it a perfect destination for those looking to explore all that Bath has to offer while still enjoying a peaceful retreat away from the bustling city streets. Whether you're interested in visiting the historic Roman Baths, admiring the stunning architecture of Bath Abbey, or simply strolling along the picturesque River Avon, <b>Rudmore Park</b>'s close proximity allows for easy access to all the city's attractions. After a day of sightseeing, you can relax and unwind in the tranquil surroundings of <b>Rudmore Park</b>, surrounded by lush greenery and beautiful gardens. So if you're looking for a peaceful escape near <b>Bath city center</b>, <b>Rudmore Park</b> is the ideal choice.</p><a id = "how_close_is_rudmore_park_to_the_university_of_bath"> <h2>How close is Rudmore Park to the University of Bath</h2></a><p>Rudmore Park is conveniently located close to the <b>University of Bath</b>, only a few <b>miles</b> away. You can easily reach the university <b>by foot</b>, taking a pleasant stroll through the picturesque surroundings. Alternatively, there is a convenient <b>bus route</b> that provides a direct link between Rudmore Park and the university campus. If you prefer to drive, the journey <b>by car</b> is quick and straightforward, with good road connections between the two locations. Whether you choose to travel <b>by foot</b>, bus, or car, commuting from Rudmore Park to the <b>University of Bath</b> is a convenient and hassle-free experience.</p><a id = "how_close_is_rudmore_park_to_the_bath_spa_university"> <h2>How close is Rudmore Park to the Bath Spa University</h2></a><p>Rudmore Park is conveniently located near <b>Bath Spa University</b>, making it an ideal spot for students and visitors alike. Situated just a few <b>miles</b> away from the university, it is easily accessible <b>by foot</b>, bus, or car. <b>by foot</b>, the park is a lovely stroll that takes around 20-30 minutes, perfect for enjoying some fresh air and nature. For those looking for a quicker option, the <b>bus route</b> between Rudmore Park and <b>Bath Spa University</b> is a convenient and efficient way to travel, offering a stress-free journey. Alternatively, <b>by car</b>, the journey is quick and simple, with plenty of parking options available near the university. Whether you prefer to walk, take public transportation, or drive, Rudmore Park's close proximity to <b>Bath Spa University</b> ensures easy access for all visitors.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 2-bedroom student flats in Rudmore Park, Bath, students are presented with a variety of options that cater to their needs. From modern, fully-furnished apartments to traditional cozy flats, there is something for every student's preference. The convenience of living in Rudmore Park is undeniable, with its close proximity to Bath Spa University and the city center. Students living in this area have easy access to public transportation, restaurants, and shops, making it a vibrant and bustling hub for student life. When considering factors like budget, location, and amenities, students can find the perfect 2-bedroom flat that suits their lifestyle and academic needs. In conclusion, the search for student accommodations in Rudmore Park offers a mix of comfortable living spaces and a vibrant student community, making it a great choice for those looking for a place to call home during their academic journey.</p></>)
};

export default BathRudmoreParkFlat2;