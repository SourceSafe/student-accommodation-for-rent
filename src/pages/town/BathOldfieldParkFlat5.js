
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


const  BathOldfieldParkFlat5 = () => 
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

    return (<><h1>5 Bedroom Student Flats in Oldfield Park, Bath</h1><p>We have listings for <b>5 Bedroom Student Flats in Oldfield Park, Bath</b> for the academic year 2024.
<b>5 Bedroom Student Flats in Oldfield Park, Bath</b> are a popular choice for students in Bath due to their spacious layout and convenient location close to University of Bath and local amenities. These flats offer comfortable living spaces for groups of students to study and socialize together while enjoying all that Bath has to offer.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/5-bedroom-student-flats-in-oldfield-park-bath.png')} alt='5 Bedroom Student Flats in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='5 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71108&type=Flat&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>5 Bedroom Student Flats in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_5_bedroom_student_flats_in_oldfield_park,_bath_pp/pm">Prices for 5 Bedroom Student Flats in Oldfield Park, Bath pp/pm</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive">5 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_5_bedroom_student_flats_in_oldfield_park,_bath">Cheap 5 Bedroom Student Flats in Oldfield Park, Bath</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__recently_added">5 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced">5 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__5_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 5 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector">5 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished">5 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_5_bedroom_student_flats_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 5 Bedroom Student Flats in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£715 per month </td><td><button className = 'searchButton tableButton' title='5 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 5 bedroom student flat in Oldfield Park, Bath, Somerset is a smart choice for busy students looking to streamline their living expenses. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option which covers all your utility bills, including electricity, water, gas, Wi-Fi, and even council tax. By opting for this convenient service, you can <b>concentrate on your studies</b> and social life without worrying about managing multiple bills. <b>UniBills.com</b> takes the stress out of budgeting and ensures that you won't be hit with any unexpected costs. To simplify your student life and save time and energy, get a quote from <b>UniBills.com</b> or any accommodation on this website today.</p><a id = "cheap_5_bedroom_student_flats_in_oldfield_park,_bath"> <h2>Cheap 5 Bedroom Student Flats in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__recently_added"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__5_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 5 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable living space in <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect <b>5 Bedroom Flats</b> in Oldfield Park, <b>Bath</b>. Located near the University of <b>Bath</b> and <b>Bath</b> Spa University, these <b>student Flats</b> are ideal for those seeking a convenient and vibrant student life. Oldfield Park is a popular student area with easy access to local amenities, transport links, and the beautiful city of <b>Bath</b>. With our user-friendly search options, you can easily filter through properties to find a 5 Bedroom Flat that meets your preferences and budget. Don't miss out on the opportunity to secure your dream student accommodation in <b>Bath</b> with our help.</p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and convenient place to rent in Bath? Consider the <b>5 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</b>. These properties are ideal for larger groups or families looking to live in a vibrant and well-connected area. With <b>bills included</b>, you can enjoy a hassle-free renting experience without any unexpected surprises. Furthermore, these flats come <b>fully furnished</b>, allowing you to move in and start enjoying your new home right away. Oldfield Park is a popular residential area with plenty of amenities, shops, and green spaces nearby, making it a great choice for those looking for both convenience and comfort.</p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</h2></a><p>If you are looking for spacious and convenient living accommodations in Bath, Somerset, then fully furnished 5 Bedroom Flats in Oldfield Park are the perfect choice for you. Situated in the vibrant neighborhood of Oldfield Park, these flats offer a comfortable and stylish living space for families or students. With five bedrooms, ample living space, and modern amenities, these flats provide the ideal setting for those looking to call Bath their home. Additionally, it is normal for student flats to be fully furnished, making the move-in process a breeze. You can enjoy the convenience of having everything you need already provided for you, from furniture to appliances, allowing you to settle in quickly and focus on school or work. Don't miss the opportunity to live in one of these fully furnished 5 Bedroom Flats in the charming city of Bath.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming suburb located just outside of <b>Bath city center</b>. Situated only 1.5 <b>miles</b> away, this residential area offers a convenient and easily accessible location for those looking to experience everything that Bath has to offer. With its picturesque Victorian terraced houses, friendly local shops, and vibrant community atmosphere, <b>Oldfield Park</b> provides a peaceful retreat from the hustle and bustle of the city center. Whether you're looking to explore the historic Roman Baths, shop in the bustling SouthGate shopping district, or enjoy a leisurely stroll along the picturesque River Avon, all the attractions of <b>Bath city center</b> are just a short distance away from <b>Oldfield Park</b>. With excellent transportation links including regular buses and a nearby train station, getting to and from the city center is quick and easy. Experience the best of both worlds by choosing to stay in <b>Oldfield Park</b> while still being within reach of all the excitement and charm of <b>Bath city center</b>.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is conveniently located close to the <b>University of Bath</b>, just a short distance away. The university is approximately 2 <b>miles</b> from Oldfield Park, making it easily accessible <b>by foot</b>, bus, or car. If you choose to walk, it would take around 40 minutes to reach the campus from Oldfield Park. Alternatively, there are regular bus services that connect the two locations, with a journey time of around 15-20 minutes, depending on traffic. For those who prefer to drive, the journey can be completed in just 5-10 minutes, depending on traffic conditions. Overall, Oldfield Park's proximity to the <b>University of Bath</b> makes it an ideal location for students or academics looking for a convenient and accessible place to live.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is a quaint suburb located just about 2 <b>miles</b> from <b>Bath Spa University</b>. For students looking to commute to the university, there are convenient transportation options available. If you prefer walking, Oldfield Park is roughly a 40-minute walk to <b>Bath Spa University</b>. Alternatively, you can hop on a bus. The <b>bus route</b> from Oldfield Park to the university is straightforward and takes around 15-20 minutes depending on traffic. For those with a car, the drive typically takes around 10 minutes, making it a quick and easy journey. With its close proximity to <b>Bath Spa University</b>, Oldfield Park provides a convenient and pleasant living environment for students.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>If you are searching for a 5 bedroom student flat in Oldfield Park, Bath, you are in luck. This charming area offers a variety of housing options that cater to the needs of students. With its close proximity to local amenities, including shops, pubs, and restaurants, Oldfield Park provides a convenient and vibrant living environment. The availability of spacious 5 bedroom flats ensures that you and your housemates will have plenty of room to study and relax. Additionally, the area's excellent transportation links make it easy to travel to the university campus and explore the city. In conclusion, Oldfield Park in Bath is a fantastic choice for students seeking a comfortable and well-connected place to call home during their academic journey.</p></>)
};

export default BathOldfieldParkFlat5;