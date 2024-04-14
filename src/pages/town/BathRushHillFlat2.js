
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


const  BathRushHillFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Rush Hill, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Rush Hill, Bath</b> for the academic year 2024.

<b>2 Bedroom Student Flats in Rush Hill, Bath</b> are perfect for students looking for a comfortable and convenient living space near the University of Bath. These flats typically come fully furnished and equipped with modern amenities for a stress-free student living experience. Located in the picturesque Rush Hill area, students can enjoy a peaceful environment while still being close to campus and local amenities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-rush-hill-bath.png')} alt='2 Bedroom Student Flats in Rush Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Rush Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71114&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Rush Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_rush_hill,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Rush Hill, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_rush_hill,_bath__all_bills_inclusive">2 Bedroom Student Flats in Rush Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_rush_hill,_bath">Cheap 2 Bedroom Student Flats in Rush Hill, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_rush_hill,_bath__recently_added">2 Bedroom Student Flats in Rush Hill, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_rush_hill,_bath__recently_reduced">2 Bedroom Student Flats in Rush Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_rush_hill,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_rush_hill,_bath__private_rental_sector">2 Bedroom Student Flats in Rush Hill, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_rush_hill,_bath__fully_furnished">2 Bedroom Student Flats in Rush Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rush_hill_to_the_city_center">How close is Rush Hill to the City Center</a></li><li><a href = "#how_close_is_rush_hill_to_the_university_of_bath">How close is Rush Hill to the University of Bath</a></li><li><a href = "#how_close_is_rush_hill_to_the_bath_spa_university">How close is Rush Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_rush_hill,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Rush Hill, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1157 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Rush Hill, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71114")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_rush_hill,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Rush Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2 bedroom flat in Rush Hill, Bath, Somerset? Managing utility bills can be a hassle, taking up your precious time and energy which could be better spent on focusing on your studies. By subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including water, electricity, gas, and internet, rolled into one easy monthly payment. With <b>UniBills.com</b>, you can relax and <b>concentrate on your studies</b> without worrying about budgeting for multiple bills. Say goodbye to the stress of splitting costs with your flatmates or dealing with unexpected fluctuations in utility prices. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and enjoy the hassle-free, all-inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_2_bedroom_student_flats_in_rush_hill,_bath"> <h2>Cheap 2 Bedroom Student Flats in Rush Hill, Bath</h2></a><p><Portlet location="REGION^71114" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_rush_hill,_bath__recently_added"> <h2>2 Bedroom Student Flats in Rush Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71114" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_rush_hill,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Rush Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71114" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_rush_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 2 Bedroom flat in Rush Hill, <b>Bath</b>, Somerset? Look no further than our property portal! We specialize in connecting students with ideal accommodation options near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our platform offers a variety of <b>student Flats</b> in the vibrant area of Rush Hill, <b>Bath</b>, providing convenient access to campus and all the amenities the city has to offer. With our user-friendly search filters, you can easily narrow down your options and find the perfect fit for your needs. Whether you prefer a modern apartment or a cozy flat, we have a range of options to suit your preferences. Say goodbye to the stress of finding accommodation and let us help you secure your ideal 2 Bedroom flat in the heart of <b>Bath</b>.</p><a id = "2_bedroom_student_flats_in_rush_hill,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Rush Hill, Bath - Private Rental Sector</h2></a><p>Looking for a place to rent in the charming Rush Hill area of Bath, Somerset? You're in luck! The private rental sector offers a variety of <b>2 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</b> that are perfect for individuals or small families. Many of these flats come <b>fully furnished</b>, making moving in a breeze. Additionally, some landlords even include bills in the rent, simplifying your monthly budgeting. With easy access to local amenities, beautiful green spaces, and the vibrant city center just a stone's throw away, renting a 2 bedroom flat in Rush Hill is a fantastic choice for those looking for a comfortable and convenient living space in this historic city.</p><a id = "2_bedroom_student_flats_in_rush_hill,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Rush Hill, Bath - Fully Furnished</h2></a><p>Looking for fully furnished 2 Bedroom Flats in Rush Hill, Bath, Somerset? Look no further! These cozy and modern flats come with all the essentials for a comfortable stay. Whether you're a student looking for a hassle-free living arrangement or a professional seeking convenience, these fully furnished flats are the perfect solution. Located in the heart of Bath, these flats offer easy access to amenities and transportation options. With two bedrooms, you'll have plenty of space to relax and unwind after a busy day. In Rush Hill, Bath, it is normal for student Flats to be fully furnished, so you can move in and feel right at home from day one. Don't miss out on the opportunity to experience city living at its best in these stylish and well-equipped flats.</p><a id = "how_close_is_rush_hill_to_the_city_center"> <h2>How close is Rush Hill to the City Center</h2></a><p>Located just 1.5 <b>miles</b> away from <b>Bath city center</b>, <b>Rush Hill</b> offers a convenient and accessible location for those looking to explore all that this historic city has to offer. Whether you want to visit the majestic Roman baths, stroll through the charming streets lined with Georgian architecture, or enjoy a relaxing day at the spa, <b>Rush Hill</b> provides easy access to all of these attractions and more. With its close proximity to the city center, guests can quickly immerse themselves in Bath's rich history and vibrant culture, making it the perfect base for a memorable stay in this enchanting city.</p><a id = "how_close_is_rush_hill_to_the_university_of_bath"> <h2>How close is Rush Hill to the University of Bath</h2></a><p>Rush Hill is conveniently close to the prestigious <b>University of Bath</b>, located just a few <b>miles</b> away. For those who enjoy walking, the university can be reached in approximately 30 minutes on foot, providing a scenic route through the picturesque surroundings. Alternatively, students can easily take the bus and arrive at the campus in less than 15 minutes. The convenience of public transportation means that commuting to classes is both quick and stress-free. For those with a vehicle, the university campus is just a short drive away, making it easy to travel back and forth on a daily basis. Whether you prefer to walk, take the bus, or drive, Rush Hill offers easy access to all the amenities of the <b>University of Bath</b>, ensuring students can enjoy a seamless university experience without any transportation hassle.</p><a id = "how_close_is_rush_hill_to_the_bath_spa_university"> <h2>How close is Rush Hill to the Bath Spa University</h2></a><p>Rush Hill is conveniently located near <b>Bath Spa University</b>, being only a few <b>miles</b> away. For students looking to commute to the university, there is a direct <b>bus route</b> that makes getting to campus a breeze. <b>by foot</b>, the distance between Rush Hill and <b>Bath Spa University</b> is easily manageable, providing a nice option for those who prefer to walk or cycle. If driving is your preference, the journey <b>by car</b> is also quick and straightforward. With multiple transportation options available, getting to <b>Bath Spa University</b> from Rush Hill is simple and convenient, allowing students to easily access all that the university has to offer. Whether you prefer traveling <b>by foot</b>, bus, or car, Rush Hill's proximity to <b>Bath Spa University</b> makes commuting to campus a stress-free experience.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In Rush Hill, Bath, finding a 2-bedroom student flat is crucial to accommodate the needs and preferences of two individuals sharing a living space. The process of searching for the perfect flat can be daunting but rewarding. Location should be a top priority, with amenities like grocery stores, restaurants, and public transportation nearby. Affordability is key, as students often have limited budgets. Ensuring that the flat is safe, well-maintained, and furnished can make the living experience more comfortable. Additionally, considering factors like lease terms, utilities, and internet availability is essential for a smooth transition into the new living space. In conclusion, with thorough research and attention to detail, students can find the ideal 2-bedroom flat in Rush Hill, Bath that meets their needs and creates a conducive environment for studying and living.</p></>)
};

export default BathRushHillFlat2;