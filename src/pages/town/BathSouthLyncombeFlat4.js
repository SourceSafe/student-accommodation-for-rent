
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


const  BathSouthLyncombeFlat4 = () => 
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

    return (<><h1>4 Bedroom Student Flats in South Lyncombe, Bath</h1><p>We have listings for <b>4 Bedroom Student Flats in South Lyncombe, Bath</b> for the academic year 2024.
<b>4 Bedroom Student Flats in South Lyncombe, Bath</b> provide spacious and comfortable accommodation for students studying in Bath. Conveniently located near universities, shopping centers, and public transport, these flats offer a convenient and ideal living situation for student life in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-flats-in-south-lyncombe-bath.png')} alt='4 Bedroom Student Flats in South Lyncombe, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Flats in South Lyncombe, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61728&type=Flat&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Flats in South Lyncombe, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_flats_in_south_lyncombe,_bath_pp/pm">Prices for 4 Bedroom Student Flats in South Lyncombe, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_flats_in_south_lyncombe,_bath__all_bills_inclusive">4 Bedroom Student Flats in South Lyncombe, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_flats_in_south_lyncombe,_bath">Cheap 4 Bedroom Student Flats in South Lyncombe, Bath</a></li><li><a href = "#4_bedroom_student_flats_in_south_lyncombe,_bath__recently_added">4 Bedroom Student Flats in South Lyncombe, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_flats_in_south_lyncombe,_bath__recently_reduced">4 Bedroom Student Flats in South Lyncombe, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_flats_in_south_lyncombe,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_flats_in_south_lyncombe,_bath__private_rental_sector">4 Bedroom Student Flats in South Lyncombe, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_flats_in_south_lyncombe,_bath__fully_furnished">4 Bedroom Student Flats in South Lyncombe, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_city_center">How close is South Lyncombe to the City Center</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_university_of_bath">How close is South Lyncombe to the University of Bath</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_bath_spa_university">How close is South Lyncombe to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_flats_in_south_lyncombe,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Flats in South Lyncombe, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£785 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Flats in South Lyncombe, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61728")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_flats_in_south_lyncombe,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Flats in South Lyncombe, Bath - All Bills Inclusive</h2></a><p>Living in a 4 bedroom student flat in South Lyncombe, Bath, Somerset can be an exciting and challenging experience. Keeping up with multiple utility bills can often be overwhelming and time-consuming, especially when you're focused on your studies. That's why subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can make your student life much easier. By opting for this convenient option, you can enjoy the hassle-free all-inclusive package provided by <b>UniBills.com</b>, which covers all your utility bills in one simple monthly payment. This means you can forget about individual bills and <b>concentrate on your studies</b>, social life, and making the most of your time at university. To simplify your student accommodation experience, get a quote from <b>UniBills.com</b> or any accommodation on this website today and enjoy the benefits of stress-free living.</p><a id = "cheap_4_bedroom_student_flats_in_south_lyncombe,_bath"> <h2>Cheap 4 Bedroom Student Flats in South Lyncombe, Bath</h2></a><p><Portlet location="REGION^61728" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_flats_in_south_lyncombe,_bath__recently_added"> <h2>4 Bedroom Student Flats in South Lyncombe, Bath - Recently Added</h2></a><p><Portlet location="REGION^61728" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_flats_in_south_lyncombe,_bath__recently_reduced"> <h2>4 Bedroom Student Flats in South Lyncombe, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61728" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_flats_in_south_lyncombe,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</h2></a><p>Are you in search of a spacious 4 Bedroom Flat in the vibrant city of <b>Bath</b>, located in the sought-after area of South Lyncombe, <b>Bath</b>, Somerset? Look no further! Our property portal makes finding the perfect student Flat a breeze. With easy access to both the University of <b>Bath</b> and <b>Bath</b> Spa University, our listings offer ideal accommodation options for students looking to live in a comfortable and convenient location. Whether you prefer a modern apartment or a cozy Victorian townhouse, our portal features a variety of <b>4 Bedroom Flats</b> to suit your preferences. Don't miss out on the opportunity to secure a fantastic living space in this charming city.</p><a id = "4_bedroom_student_flats_in_south_lyncombe,_bath__private_rental_sector"> <h2>4 Bedroom Student Flats in South Lyncombe, Bath - Private Rental Sector</h2></a><p>If you're looking for spacious and comfortable living in South Lyncombe, Bath, Somerset, Bath, then the private rental sector offers an excellent option with 4 Bedroom Flats in the area. These flats come <b>fully furnished</b>, making the moving process a breeze, as you can simply unpack and settle in. What's more, many of these flats often include the convenience of having <b>bills included</b> in the rent, taking the hassle out of managing multiple payments. Whether you're a family looking for more space or a group of friends wanting to share a home, a 4 Bedroom Flat in South Lyncombe is a great choice for those seeking a blend of convenience and comfort in a beautiful location like Bath, Somerset.</p><a id = "4_bedroom_student_flats_in_south_lyncombe,_bath__fully_furnished"> <h2>4 Bedroom Student Flats in South Lyncombe, Bath - Fully Furnished</h2></a><p>Looking for fully furnished 4 bedroom flats in South Lyncombe, Bath, Somerset? Look no further! Our luxurious flats in this desirable area of Bath offer spacious living areas and modern amenities, perfect for families or groups looking for a comfortable and stylish accommodation. Each bedroom is tastefully decorated and equipped with everything you need for a restful night's sleep. The living room is designed for relaxation and entertainment, while the fully equipped kitchen makes cooking a breeze. Located in the heart of Bath, South Lyncombe is just a short walk from the city's shops, restaurants, and cultural attractions. Whether you're a student or professional, it is normal for student flats to be fully furnished, so you can simply move in and start enjoying your new home.</p><a id = "how_close_is_south_lyncombe_to_the_city_center"> <h2>How close is South Lyncombe to the City Center</h2></a><p><b>South Lyncombe</b>, a charming residential area located just outside <b>Bath city center</b>, is only a few <b>miles</b> away from all the major attractions and amenities that Bath has to offer. This quaint neighborhood is perfect for those looking for a peaceful retreat while still being close enough to easily access the bustling city center. Whether you want to explore the Roman Baths, indulge in some shopping at SouthGate, or take a leisurely stroll along the scenic River Avon, everything is just a short drive or bus ride away from <b>South Lyncombe</b>. With its convenient location and serene ambiance, <b>South Lyncombe</b> provides the best of both worlds for those seeking a tranquil residential setting near the heart of <b>Bath city center</b>.</p><a id = "how_close_is_south_lyncombe_to_the_university_of_bath"> <h2>How close is South Lyncombe to the University of Bath</h2></a><p>South Lyncombe is conveniently located close to the prestigious <b>University of Bath</b>, being only a few <b>miles</b> away from the campus. For those looking to commute to the university, there are several options available. <b>by foot</b>, the journey takes around 45 minutes depending on your pace. The more popular choice is taking the <b>bus route</b>, which offers a quick and efficient way to reach the campus in just a short ride. For those who prefer to drive, the university is easily accessible <b>by car</b> within a 10-minute journey. With its close proximity to the <b>University of Bath</b> and multiple transportation options, South Lyncombe provides a convenient and desirable location for students and faculty alike.</p><a id = "how_close_is_south_lyncombe_to_the_bath_spa_university"> <h2>How close is South Lyncombe to the Bath Spa University</h2></a><p>South Lyncombe is conveniently situated only a few <b>miles</b> away from <b>Bath Spa University</b>, making it a perfect location for students or anyone visiting the university regularly. The university can be easily reached <b>by foot</b>, as it is just a short walk away. For those who prefer not to walk, there is also a convenient <b>bus route</b> that connects South Lyncombe to <b>Bath Spa University</b>, making commuting a breeze. <b>by car</b>, the journey is quick and straightforward, ensuring a stress-free travel experience. This close proximity to the university makes South Lyncombe an ideal location for those looking for easy access to campus facilities and student life while still enjoying a peaceful residential area. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from South Lyncombe is both convenient and efficient.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>When searching for 4 bedroom student flats in South Lyncombe, Bath, it's important to consider various factors such as location, amenities, and budget. South Lyncombe offers a picturesque setting with easy access to the University of Bath and local shops. The availability of 4 bedroom flats in this area provides students with a spacious living arrangement, perfect for sharing with friends. With a selection of flats offering modern facilities, including fully equipped kitchens and communal areas, students can enjoy a comfortable and convenient living experience. Additionally, the vibrant community in South Lyncombe provides a supportive environment for students to thrive academically and socially. In conclusion, looking for 4 bedroom student flats in South Lyncombe, Bath offers a promising opportunity for students to find a suitable and welcoming home during their academic journey.</p></>)
};

export default BathSouthLyncombeFlat4;