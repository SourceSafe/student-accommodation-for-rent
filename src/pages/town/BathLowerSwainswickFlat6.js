
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


const  BathLowerSwainswickFlat6 = () => 
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

    return (<><h1>6 Bedroom Student Flats in Lower Swainswick, Bath</h1><p>We have listings for <b>6 Bedroom Student Flats in Lower Swainswick, Bath</b> for the academic year 2024.
<b>6 Bedroom Student Flats in Lower Swainswick, Bath</b> offer spacious accommodation for students looking to live together in a comfortable and convenient location. Situated in Bath, these flats provide easy access to the city center and various amenities, making it an ideal choice for student living.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/6-bedroom-student-flats-in-lower-swainswick-bath.png')} alt='6 Bedroom Student Flats in Lower Swainswick, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='6 Bedroom Student Flats in Lower Swainswick, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71105&type=Flat&beds=6")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>6 Bedroom Student Flats in Lower Swainswick, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_6_bedroom_student_flats_in_lower_swainswick,_bath_pp/pm">Prices for 6 Bedroom Student Flats in Lower Swainswick, Bath pp/pm</a></li><li><a href = "#6_bedroom_student_flats_in_lower_swainswick,_bath__all_bills_inclusive">6 Bedroom Student Flats in Lower Swainswick, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_6_bedroom_student_flats_in_lower_swainswick,_bath">Cheap 6 Bedroom Student Flats in Lower Swainswick, Bath</a></li><li><a href = "#6_bedroom_student_flats_in_lower_swainswick,_bath__recently_added">6 Bedroom Student Flats in Lower Swainswick, Bath - Recently Added</a></li><li><a href = "#6_bedroom_student_flats_in_lower_swainswick,_bath__recently_reduced">6 Bedroom Student Flats in Lower Swainswick, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__6_bedroom_flats_in_lower_swainswick,_bath,_somerset,_bath">Student Accommodation Portal - 6 Bedroom Flats in Lower Swainswick, Bath, Somerset, Bath</a></li><li><a href = "#6_bedroom_student_flats_in_lower_swainswick,_bath__private_rental_sector">6 Bedroom Student Flats in Lower Swainswick, Bath - Private Rental Sector</a></li><li><a href = "#6_bedroom_student_flats_in_lower_swainswick,_bath__fully_furnished">6 Bedroom Student Flats in Lower Swainswick, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_lower_swainswick_to_the_city_center">How close is Lower Swainswick to the City Center</a></li><li><a href = "#how_close_is_lower_swainswick_to_the_university_of_bath">How close is Lower Swainswick to the University of Bath</a></li><li><a href = "#how_close_is_lower_swainswick_to_the_bath_spa_university">How close is Lower Swainswick to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_6_bedroom_student_flats_in_lower_swainswick,_bath_pp/pm"> <h2>Prices for 6 Bedroom Student Flats in Lower Swainswick, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton tableButton' title='6 Bedroom Student Flats in Lower Swainswick, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71105")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "6_bedroom_student_flats_in_lower_swainswick,_bath__all_bills_inclusive"> <h2>6 Bedroom Student Flats in Lower Swainswick, Bath - All Bills Inclusive</h2></a><p>Living in a 6 bedroom student flat in Lower Swainswick, Bath, Somerset can be both exciting and at times overwhelming. To streamline your living experience and allow you to focus on your studies, consider opting for an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers an all inclusive option that covers your rent, utilities, internet, and even cleaning services. With <b>UniBills.com</b>, you can say goodbye to the hassle of dealing with multiple bills and instead concentrate on what truly matters - your academic pursuits. By choosing this service, you'll also avoid any unexpected costs that may arise throughout the year, providing you with peace of mind. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and enjoy the convenience and simplicity of an <b>all bills inclusive</b> lifestyle.</p><a id = "cheap_6_bedroom_student_flats_in_lower_swainswick,_bath"> <h2>Cheap 6 Bedroom Student Flats in Lower Swainswick, Bath</h2></a><p><Portlet location="REGION^71105" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_flats_in_lower_swainswick,_bath__recently_added"> <h2>6 Bedroom Student Flats in Lower Swainswick, Bath - Recently Added</h2></a><p><Portlet location="REGION^71105" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_flats_in_lower_swainswick,_bath__recently_reduced"> <h2>6 Bedroom Student Flats in Lower Swainswick, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71105" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__6_bedroom_flats_in_lower_swainswick,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 6 Bedroom Flats in Lower Swainswick, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable living space near the University of <b>Bath</b> or <b>Bath</b> Spa University? Look no further! Our property portal has a fantastic selection of <b>6 Bedroom Flats</b> in Lower Swainswick, <b>Bath</b>, Somerset, perfect for groups of students looking to live together. These <b>student Flats</b> offer ample space for studying, socializing, and relaxing. Located in the picturesque area of Lower Swainswick, just a short distance from the bustling city of <b>Bath</b>, these flats provide the perfect blend of tranquility and convenience. With easy access to local amenities and public transportation, you'll have everything you need right at your fingertips. Don't miss out on the opportunity to secure one of these sought-after properties for your student accommodation.</p><a id = "6_bedroom_student_flats_in_lower_swainswick,_bath__private_rental_sector"> <h2>6 Bedroom Student Flats in Lower Swainswick, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and convenient living space in Bath? Explore the private rental sector offering <b>6 Bedroom Flats in Lower Swainswick, Bath, Somerset, Bath</b>. These flats come <b>fully furnished</b>, saving you the hassle of purchasing and moving heavy furniture. With <b>bills included</b> in the rent, you can enjoy a stress-free living experience without worrying about additional costs. The 6-bedroom layout provides ample space for families, groups of friends, or professionals looking to share accommodations. Located in the charming area of Lower Swainswick, these flats offer a peaceful retreat while still being close to the vibrant city of Bath. Don't miss out on the opportunity to rent one of these desirable properties in this picturesque location.</p><a id = "6_bedroom_student_flats_in_lower_swainswick,_bath__fully_furnished"> <h2>6 Bedroom Student Flats in Lower Swainswick, Bath - Fully Furnished</h2></a><p>Are you looking for spacious and comfortable accommodation in Lower Swainswick, Bath, Somerset? Look no further than the fully furnished 6 Bedroom Flats in Lower Swainswick, Bath. These modern and stylish flats cater to individuals seeking a convenient and hassle-free living experience. Located in a vibrant and bustling neighborhood, these flats offer easy access to local amenities and public transportation. Whether you're a student looking for a cozy study space or a professional wanting a peaceful retreat after a long day at work, these flats have everything you need. In the world of real estate, it is normal for student flats to be fully furnished, saving you time and effort in setting up your living space. Don't miss out on the opportunity to live in one of these fantastic 6 Bedroom Flats in Lower Swainswick, Bath, where convenience meets comfort.</p><a id = "how_close_is_lower_swainswick_to_the_city_center"> <h2>How close is Lower Swainswick to the City Center</h2></a><p>Located just 2 <b>miles</b> northeast of <b>Bath city center</b>, <b>Lower Swainswick</b> is a charming village that offers a tranquil retreat from the hustle and bustle of urban life. Its close proximity to the city means that residents can easily access all the amenities and attractions that Bath has to offer, from its historic architecture and famous Roman baths to its vibrant shopping and dining scene. Whether you're looking to explore the city's cultural landmarks or relax in its picturesque parks, <b>Lower Swainswick</b> provides the perfect base for discovering the beauty of Bath. With its convenient location just a short drive or bus ride away from the city center, <b>Lower Swainswick</b> offers the best of both worlds – a peaceful countryside setting within easy reach of urban conveniences.</p><a id = "how_close_is_lower_swainswick_to_the_university_of_bath"> <h2>How close is Lower Swainswick to the University of Bath</h2></a><p>Lower Swainswick is conveniently located just a stone's throw away from the prestigious <b>University of Bath</b>. Situated only a few <b>miles</b> from the university campus, Lower Swainswick offers easy access to students and staff alike. <b>by foot</b>, the journey to the <b>University of Bath</b> is a pleasant walk through picturesque surroundings, allowing for some fresh air and exercise along the way. For those looking for a quicker commute, a <b>bus route</b> runs directly from Lower Swainswick to the university, providing a convenient and affordable transportation option. Additionally, for individuals with cars, the drive from Lower Swainswick to the <b>University of Bath</b> is a short and straightforward route. Whether traveling <b>by foot</b>, <b>by bus</b>, or <b>by car</b>, Lower Swainswick's proximity to the <b>University of Bath</b> makes it an ideal location for those looking to immerse themselves in the academic and social opportunities that the university has to offer.</p><a id = "how_close_is_lower_swainswick_to_the_bath_spa_university"> <h2>How close is Lower Swainswick to the Bath Spa University</h2></a><p>Lower Swainswick is conveniently located near <b>Bath Spa University</b>, making it an ideal choice for students looking to live close to campus. Situated just a few <b>miles</b> away, the university can be easily reached <b>by foot</b>, bus, or car from Lower Swainswick. For those who prefer to walk, it's about a 30-minute stroll to the university campus. Alternatively, there are regular bus services that connect Lower Swainswick to <b>Bath Spa University</b>, with a journey time of around 15 minutes. If you prefer to drive, the university is just a short 10-minute car journey away. This close proximity allows students living in Lower Swainswick to easily access all the amenities and activities that <b>Bath Spa University</b> has to offer, while still enjoying the peaceful and picturesque surroundings of this quaint village.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 6-bedroom student flats in Lower Swainswick, Bath, it's important to consider various factors before making a decision. Location is key, as Lower Swainswick offers a peaceful residential area while still being close to essential amenities and transportation links. Rental prices in this area may vary depending on the property's condition and amenities. When looking for a 6-bedroom flat, it's vital to ensure that the space is well-maintained, spacious, and includes necessary facilities for a comfortable living experience. Additionally, considering the landlord's reputation and lease terms is wise to avoid any potential issues. In conclusion, finding 6-bedroom student flats in Lower Swainswick, Bath, requires thorough research and careful consideration to secure a suitable and convenient living arrangement for a group of students.</p></>)
};

export default BathLowerSwainswickFlat6;