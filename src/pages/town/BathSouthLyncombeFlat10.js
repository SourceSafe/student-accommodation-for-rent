
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


const  BathSouthLyncombeFlat10 = () => 
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

    return (<><h1>10 Bedroom Student Flats in South Lyncombe, Bath</h1><p>We have listings for <b>10 Bedroom Student Flats in South Lyncombe, Bath</b> for the academic year 2024.
<b>10 Bedroom Student Flats in South Lyncombe, Bath</b> are spacious and ideal for larger groups of students looking to live together in a convenient location in Bath. These flats offer ample living space, multiple bathrooms, and are located in close proximity to local universities and amenities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/10-bedroom-student-flats-in-south-lyncombe-bath.png')} alt='10 Bedroom Student Flats in South Lyncombe, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='10 Bedroom Student Flats in South Lyncombe, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61728&type=Flat&beds=10")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>10 Bedroom Student Flats in South Lyncombe, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_10_bedroom_student_flats_in_south_lyncombe,_bath_pp/pm">Prices for 10 Bedroom Student Flats in South Lyncombe, Bath pp/pm</a></li><li><a href = "#10_bedroom_student_flats_in_south_lyncombe,_bath__all_bills_inclusive">10 Bedroom Student Flats in South Lyncombe, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_10_bedroom_student_flats_in_south_lyncombe,_bath">Cheap 10 Bedroom Student Flats in South Lyncombe, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_south_lyncombe,_bath__recently_added">10 Bedroom Student Flats in South Lyncombe, Bath - Recently Added</a></li><li><a href = "#10_bedroom_student_flats_in_south_lyncombe,_bath__recently_reduced">10 Bedroom Student Flats in South Lyncombe, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__10_bedroom_flats_in_south_lyncombe,_bath,_somerset,_bath">Student Accommodation Portal - 10 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_south_lyncombe,_bath__private_rental_sector">10 Bedroom Student Flats in South Lyncombe, Bath - Private Rental Sector</a></li><li><a href = "#10_bedroom_student_flats_in_south_lyncombe,_bath__fully_furnished">10 Bedroom Student Flats in South Lyncombe, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_city_center">How close is South Lyncombe to the City Center</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_university_of_bath">How close is South Lyncombe to the University of Bath</a></li><li><a href = "#how_close_is_south_lyncombe_to_the_bath_spa_university">How close is South Lyncombe to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_10_bedroom_student_flats_in_south_lyncombe,_bath_pp/pm"> <h2>Prices for 10 Bedroom Student Flats in South Lyncombe, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton tableButton' title='10 Bedroom Student Flats in South Lyncombe, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61728")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "10_bedroom_student_flats_in_south_lyncombe,_bath__all_bills_inclusive"> <h2>10 Bedroom Student Flats in South Lyncombe, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 10 bedroom flat in South Lyncombe, Bath, Somerset? Managing multiple bills can be a daunting and time-consuming task, taking away from your valuable study time. By subscribing to an <b>all bills inclusive</b> service, like the one offered by <b>UniBills.com</b>, you can <b>concentrate on your studies</b> without the stress of managing utility payments, internet, and other expenses. <b>UniBills.com</b> provides a hassle-free all-inclusive option, ensuring that all your bills are taken care of in one convenient package. Enjoy the ease and peace of mind that comes with knowing that all your living expenses are covered. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student life.</p><a id = "cheap_10_bedroom_student_flats_in_south_lyncombe,_bath"> <h2>Cheap 10 Bedroom Student Flats in South Lyncombe, Bath</h2></a><p><Portlet location="REGION^61728" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_south_lyncombe,_bath__recently_added"> <h2>10 Bedroom Student Flats in South Lyncombe, Bath - Recently Added</h2></a><p><Portlet location="REGION^61728" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_south_lyncombe,_bath__recently_reduced"> <h2>10 Bedroom Student Flats in South Lyncombe, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61728" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__10_bedroom_flats_in_south_lyncombe,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 10 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</h2></a><p>Are you looking for <b>10 Bedroom Flats</b> in South Lyncombe, <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect <b>student Flats</b> for your needs. South Lyncombe is a popular area in <b>Bath</b>, known for its beautiful scenery and close proximity to top universities like the University of <b>Bath</b> and <b>Bath</b> Spa University. Whether you're a student looking for a spacious property to share with friends or a landlord hoping to attract tenants, our portal has listings that cater to all. With our easy-to-use search filters, you can easily narrow down your options and find the ideal 10 bedroom flat that fits your budget and preferences. Don't miss out on the opportunity to secure a fantastic property in this sought-after location.</p><a id = "10_bedroom_student_flats_in_south_lyncombe,_bath__private_rental_sector"> <h2>10 Bedroom Student Flats in South Lyncombe, Bath - Private Rental Sector</h2></a><p>If you're looking for a spacious and convenient living arrangement in the beautiful city of Bath, look no further than the <b>10 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</b>. These flats are the perfect choice for those seeking a comfortable and hassle-free lifestyle, with <b>bills included</b> in the rental price, so you can save time and effort on managing utilities. Each flat is <b>fully furnished</b>, providing a stylish and modern living space for you to enjoy. Located in the charming area of South Lyncombe, you'll be surrounded by the picturesque beauty of Bath while still being close to all the amenities and attractions the city has to offer. Don't miss out on the opportunity to live in one of these fantastic 10 Bedroom Flats and experience the best of Bath living.</p><a id = "10_bedroom_student_flats_in_south_lyncombe,_bath__fully_furnished"> <h2>10 Bedroom Student Flats in South Lyncombe, Bath - Fully Furnished</h2></a><p>If you are in search of <b>fully furnished 10 Bedroom Flats in South Lyncombe, Bath, Somerset, Bath</b>, look no further. These spacious and modern flats offer the perfect accommodation for a large group of students or professionals looking to live together in comfort and style. Located in the vibrant neighborhood of South Lyncombe in Bath, these flats provide easy access to local amenities, public transportation, and the beautiful surrounding countryside. In Bath, it is normal for student flats to be fully furnished, which means you can move in hassle-free and start enjoying your new home right away. From stylish furniture to modern appliances, these flats have everything you need for a convenient and comfortable living experience. Don't miss out on the opportunity to secure one of these fantastic fully furnished flats in South Lyncombe, Bath, Somerset, Bath, and elevate your living situation to the next level.</p><a id = "how_close_is_south_lyncombe_to_the_city_center"> <h2>How close is South Lyncombe to the City Center</h2></a><p><b>South Lyncombe</b> is a charming village located just a few <b>miles</b> away from <b>Bath city center</b>. This picturesque area offers a peaceful escape from the hustle and bustle of urban life while still being conveniently close to all the attractions and amenities that Bath has to offer. A short drive or bus ride will quickly transport you into the heart of <b>Bath city center</b>, where you can explore the famous Roman baths, stroll along the stunning Georgian architecture of the Royal Crescent, or indulge in a spot of shopping at the bustling markets and boutiques. <b>South Lyncombe</b>'s proximity to <b>Bath city center</b> makes it an ideal base for visitors looking to enjoy both the tranquility of the countryside and the vibrant culture of the city.</p><a id = "how_close_is_south_lyncombe_to_the_university_of_bath"> <h2>How close is South Lyncombe to the University of Bath</h2></a><p>South Lyncombe is conveniently located near the <b>University of Bath</b>, being just a few <b>miles</b> away. For students living in South Lyncombe, there are various transportation options to reach the university. <b>by foot</b>, the journey to the <b>University of Bath</b> may take around 40-50 minutes, making it a good option for those who enjoy walking and want to get some fresh air. Alternatively, students can take advantage of the <b>bus route</b> that connects South Lyncombe to the university campus. The bus journey takes around 15-20 minutes, providing a quick and easy way to travel back and forth. For those with a car, the drive from South Lyncombe to the <b>University of Bath</b> typically takes less than 10 minutes, making it an ideal choice for those who prefer to commute <b>by car</b>. Regardless of the mode of transportation chosen, South Lyncombe's proximity to the <b>University of Bath</b> makes it a convenient and attractive location for students.</p><a id = "how_close_is_south_lyncombe_to_the_bath_spa_university"> <h2>How close is South Lyncombe to the Bath Spa University</h2></a><p>South Lyncombe is conveniently located just a short distance away from <b>Bath Spa University</b>. The university is around 2 <b>miles</b> from South Lyncombe, making it easily accessible <b>by foot</b>, bus, or car. For those who prefer to walk, it would take approximately 40 minutes to reach the university campus on foot. Alternatively, there is a convenient <b>bus route</b> that connects South Lyncombe to <b>Bath Spa University</b>, providing an efficient and hassle-free mode of transportation. <b>by bus</b>, it would take around 15-20 minutes to reach the university. Additionally, for those who prefer to drive, the journey <b>by car</b> would take approximately 10-15 minutes, offering a quick and convenient option for commuting to and from the university. With its close proximity to <b>Bath Spa University</b> and various transportation options available, South Lyncombe provides an ideal location for students and staff alike.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for spacious and comfortable 10-bedroom student flats in South Lyncombe, Bath, it is essential to consider factors such as location, amenities, and rental costs. South Lyncombe offers convenient access to various universities and colleges, as well as a vibrant student community. When looking for a suitable student accommodation, make sure to prioritize safety and security, as well as proximity to public transportation options. Additionally, consider the availability of essential amenities like high-speed internet, laundry facilities, and study areas. It is crucial to closely evaluate the rental costs and terms to ensure they align with your budget and preferences. Ultimately, finding the perfect 10-bedroom student flat in South Lyncombe involves thorough research, careful consideration of your needs, and weighing all available options to make the best decision.</p></>)
};

export default BathSouthLyncombeFlat10;