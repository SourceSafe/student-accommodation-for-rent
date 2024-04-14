
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


const  BathKingsmeadFlat5 = () => 
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

    return (<><h1>5 Bedroom Student Flats in Kingsmead, Bath</h1><p>We have listings for <b>5 Bedroom Student Flats in Kingsmead, Bath</b> for the academic year 2024.

<b>5 Bedroom Student Flats in Kingsmead, Bath</b> are ideal for groups of students looking to live together in a spacious and convenient location in Bath. These flats typically offer ample living space, multiple bathrooms, and are located close to the University of Bath and local amenities. Being in Kingsmead, these student flats provide easy access to transportation, dining options, and recreational activities in the vibrant city of Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/5-bedroom-student-flats-in-kingsmead-bath.png')} alt='5 Bedroom Student Flats in Kingsmead, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='5 Bedroom Student Flats in Kingsmead, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71101&type=Flat&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>5 Bedroom Student Flats in Kingsmead, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_5_bedroom_student_flats_in_kingsmead,_bath_pp/pm">Prices for 5 Bedroom Student Flats in Kingsmead, Bath pp/pm</a></li><li><a href = "#5_bedroom_student_flats_in_kingsmead,_bath__all_bills_inclusive">5 Bedroom Student Flats in Kingsmead, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_5_bedroom_student_flats_in_kingsmead,_bath">Cheap 5 Bedroom Student Flats in Kingsmead, Bath</a></li><li><a href = "#5_bedroom_student_flats_in_kingsmead,_bath__recently_added">5 Bedroom Student Flats in Kingsmead, Bath - Recently Added</a></li><li><a href = "#5_bedroom_student_flats_in_kingsmead,_bath__recently_reduced">5 Bedroom Student Flats in Kingsmead, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__5_bedroom_flats_in_kingsmead,_bath,_somerset,_bath">Student Accommodation Portal - 5 Bedroom Flats in Kingsmead, Bath, Somerset, Bath</a></li><li><a href = "#5_bedroom_student_flats_in_kingsmead,_bath__private_rental_sector">5 Bedroom Student Flats in Kingsmead, Bath - Private Rental Sector</a></li><li><a href = "#5_bedroom_student_flats_in_kingsmead,_bath__fully_furnished">5 Bedroom Student Flats in Kingsmead, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_kingsmead_to_the_city_center">How close is Kingsmead to the City Center</a></li><li><a href = "#how_close_is_kingsmead_to_the_university_of_bath">How close is Kingsmead to the University of Bath</a></li><li><a href = "#how_close_is_kingsmead_to_the_bath_spa_university">How close is Kingsmead to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_5_bedroom_student_flats_in_kingsmead,_bath_pp/pm"> <h2>Prices for 5 Bedroom Student Flats in Kingsmead, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£780 per month </td><td><button className = 'searchButton tableButton' title='5 Bedroom Student Flats in Kingsmead, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71101")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "5_bedroom_student_flats_in_kingsmead,_bath__all_bills_inclusive"> <h2>5 Bedroom Student Flats in Kingsmead, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5 bedroom flat in Kingsmead, Bath, Somerset? Managing bills and utilities can be overwhelming, especially when you need to focus on your studies. That's where <b>UniBills.com</b> comes in with their convenient <b>all bills inclusive</b> service. Say goodbye to the hassle of dealing with multiple bills every month and enjoy the peace of mind that comes with knowing that all your utilities are taken care of. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the stress of managing bills. Take the opportunity to simplify your student living experience and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and start living stress-free today.</p><a id = "cheap_5_bedroom_student_flats_in_kingsmead,_bath"> <h2>Cheap 5 Bedroom Student Flats in Kingsmead, Bath</h2></a><p><Portlet location="REGION^71101" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_flats_in_kingsmead,_bath__recently_added"> <h2>5 Bedroom Student Flats in Kingsmead, Bath - Recently Added</h2></a><p><Portlet location="REGION^71101" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_flats_in_kingsmead,_bath__recently_reduced"> <h2>5 Bedroom Student Flats in Kingsmead, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71101" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__5_bedroom_flats_in_kingsmead,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 5 Bedroom Flats in Kingsmead, Bath, Somerset, Bath</h2></a><p>Looking for a spacious and comfortable 5 bedroom flat in Kingsmead, <b>Bath</b>, Somerset suitable for students? Our property portal is the perfect place to start your search. Located in close proximity to the University of <b>Bath</b> and <b>Bath</b> Spa University, our listings feature a variety of <b>student Flats</b> designed to cater to your needs. With a range of amenities and conveniences nearby, including shops, restaurants, and public transportation, you'll have everything you need right at your fingertips. Whether you're studying with a group of friends or looking for a larger living space, our selection of <b>5 Bedroom Flats</b> in <b>Bath</b> offers a mix of modern and traditional styles to suit your preferences. Start browsing today to find the perfect home away from home for you and your fellow students.</p><a id = "5_bedroom_student_flats_in_kingsmead,_bath__private_rental_sector"> <h2>5 Bedroom Student Flats in Kingsmead, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living arrangement in the heart of Bath, Somerset? Look no further than the 5 bedroom flats in Kingsmead. These <b>fully furnished</b> flats offer a perfect blend of modern amenities and convenient location. With <b>bills included</b> in the rent, you can enjoy hassle-free living without the worry of additional costs. Whether you are a student looking to share a flat with friends or a family in need of extra space, these flats provide the perfect solution. The vibrant neighborhood offers a variety of shops, restaurants, and cultural attractions right at your doorstep. Don't miss out on the opportunity to experience luxurious living in one of Bath's most sought-after locations.</p><a id = "5_bedroom_student_flats_in_kingsmead,_bath__fully_furnished"> <h2>5 Bedroom Student Flats in Kingsmead, Bath - Fully Furnished</h2></a><p>Looking for the perfect accommodation in Kingsmead, Bath, Somerset? Look no further than the <b>fully furnished 5 Bedroom Flats in Kingsmead, Bath, Somerset, Bath</b>. These spacious and stylish flats offer everything you need for a comfortable and convenient living experience. From modern furniture to fully equipped kitchens, these flats are designed to make your stay as effortless as possible. With five bedrooms, there is plenty of space for you and your housemates to relax and study. In Kingsmead, Bath, Somerset, <b>it is normal for student Flats to be fully furnished furnished</b>, saving you the hassle of buying and transporting furniture. Don't miss out on the opportunity to live in one of these fantastic flats and make the most of your time in Bath.</p><a id = "how_close_is_kingsmead_to_the_city_center"> <h2>How close is Kingsmead to the City Center</h2></a><p><b>Kingsmead</b>, a bustling residential area in Bath, is conveniently located just a stone's throw away from the city center. Situated a mere 0.5 <b>miles</b> from <b>Bath city center</b>, <b>Kingsmead</b> offers the perfect blend of tranquility and urban convenience. With its proximity to the heart of Bath, residents and visitors can easily access the city's famous landmarks, shops, restaurants, and cultural attractions. Whether strolling along the historic streets or exploring the renowned Roman Baths, <b>Kingsmead</b> provides an ideal base for immersing oneself in the rich history and vibrant atmosphere of Bath. So, if you're looking for a prime location with easy access to all that the city has to offer, <b>Kingsmead</b> is the perfect destination.</p><a id = "how_close_is_kingsmead_to_the_university_of_bath"> <h2>How close is Kingsmead to the University of Bath</h2></a><p>Kingsmead is located just a stone's throw away from the prestigious <b>University of Bath</b>, making it an ideal accommodation choice for students and staff alike. Situated less than 2 <b>miles</b> from the university campus, Kingsmead offers easy access to the academic hub, whether it's <b>by foot</b>, bus, or car. <b>by foot</b>, the university can be reached within a 30-minute leisurely stroll, providing a convenient and healthy commute option for residents. Alternatively, the well-connected <b>bus route</b> makes commuting even easier, with frequent services running between Kingsmead and the <b>University of Bath</b>. For those who prefer to drive, the university is just a short 10-minute car journey away, ensuring a stress-free and quick commute. Thanks to its close proximity to the university and various transportation options, Kingsmead is the perfect choice for those looking to balance convenience with a vibrant student lifestyle.</p><a id = "how_close_is_kingsmead_to_the_bath_spa_university"> <h2>How close is Kingsmead to the Bath Spa University</h2></a><p>Kingsmead is conveniently located close to <b>Bath Spa University</b>, making it an ideal accommodation option for students. The university is only a few <b>miles</b> away from Kingsmead, with the campus easily accessible <b>by foot</b>, bus, or car. For those who prefer walking, it takes around 30-40 minutes to reach the university campus from Kingsmead. Alternatively, the <b>bus route</b> connecting Kingsmead to <b>Bath Spa University</b> is efficient and convenient, with regular services running throughout the day. <b>by bus</b>, the journey takes approximately 15-20 minutes, providing a quick and easy commute for students. If driving is preferred, the university can be reached from Kingsmead in around 10-15 minutes, depending on traffic conditions. Overall, Kingsmead's proximity to <b>Bath Spa University</b> offers students a convenient and accessible living arrangement, allowing for a seamless transition between home and campus life.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the bustling student hub of Kingsmead in Bath, searching for a 5-bedroom student flat can be an exciting yet challenging task. With an array of properties to choose from, students can find themselves spoiled for choice when it comes to selecting their ideal living space. From spacious communal areas to modern amenities, these flats offer students a comfortable and convenient living environment. However, with the high demand for student accommodation in this sought-after location, it's essential to act swiftly and decisively to secure the perfect flat. By carefully considering factors such as location, budget, and desired amenities, students can make an informed decision that meets their needs. In conclusion, with its vibrant atmosphere and excellent local amenities, Kingsmead is a prime location for students seeking a 5-bedroom flat in Bath. By staying proactive and diligent in their search, students can find the perfect home away from home in this thriving student community.</p></>)
};

export default BathKingsmeadFlat5;