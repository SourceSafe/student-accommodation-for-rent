
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


const  BathAvonParkFlat5 = () => 
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

    return (<><h1>5 Bedroom Student Flats in Avon Park, Bath</h1><p>We have listings for <b>5 Bedroom Student Flats in Avon Park, Bath</b> for the academic year 2024. 

<b>5 Bedroom Student Flats in Avon Park, Bath</b> offer spacious and comfortable living arrangements for students. Located in a convenient area of Bath, these flats provide a vibrant and dynamic living experience for students looking for accommodation in the city. With easy access to the University of Bath and local amenities, these flats are ideal for those studying in the area.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/5-bedroom-student-flats-in-avon-park-bath.png')} alt='5 Bedroom Student Flats in Avon Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='5 Bedroom Student Flats in Avon Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71091&type=Flat&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>5 Bedroom Student Flats in Avon Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_5_bedroom_student_flats_in_avon_park,_bath_pp/pm">Prices for 5 Bedroom Student Flats in Avon Park, Bath pp/pm</a></li><li><a href = "#5_bedroom_student_flats_in_avon_park,_bath__all_bills_inclusive">5 Bedroom Student Flats in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_5_bedroom_student_flats_in_avon_park,_bath">Cheap 5 Bedroom Student Flats in Avon Park, Bath</a></li><li><a href = "#5_bedroom_student_flats_in_avon_park,_bath__recently_added">5 Bedroom Student Flats in Avon Park, Bath - Recently Added</a></li><li><a href = "#5_bedroom_student_flats_in_avon_park,_bath__recently_reduced">5 Bedroom Student Flats in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__5_bedroom_flats_in_avon_park,_bath,_somerset,_bath">Student Accommodation Portal - 5 Bedroom Flats in Avon Park, Bath, Somerset, Bath</a></li><li><a href = "#5_bedroom_student_flats_in_avon_park,_bath__private_rental_sector">5 Bedroom Student Flats in Avon Park, Bath - Private Rental Sector</a></li><li><a href = "#5_bedroom_student_flats_in_avon_park,_bath__fully_furnished">5 Bedroom Student Flats in Avon Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_avon_park_to_the_city_center">How close is Avon Park to the City Center</a></li><li><a href = "#how_close_is_avon_park_to_the_university_of_bath">How close is Avon Park to the University of Bath</a></li><li><a href = "#how_close_is_avon_park_to_the_bath_spa_university">How close is Avon Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_5_bedroom_student_flats_in_avon_park,_bath_pp/pm"> <h2>Prices for 5 Bedroom Student Flats in Avon Park, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£697 per month </td><td><button className = 'searchButton tableButton' title='5 Bedroom Student Flats in Avon Park, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "5_bedroom_student_flats_in_avon_park,_bath__all_bills_inclusive"> <h2>5 Bedroom Student Flats in Avon Park, Bath - All Bills Inclusive</h2></a><p>Living in a 5 bedroom student flat in Avon Park, Bath, Somerset can be expensive and time-consuming when it comes to managing bills. That's why subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> is a smart choice for students. By opting for this convenient option, you can enjoy the hassle-free experience of not having to worry about individual bills for utilities such as electricity, water, and internet. Instead, you can <b>concentrate on your studies</b> and social life without the added stress of budgeting and payment deadlines. <b>UniBills.com</b> takes care of everything for you, ensuring that all your bills are covered with just one simple payment each month. To simplify your student life and streamline your expenses, get a quote from <b>UniBills.com</b> or any accommodation on this website. Say goodbye to bill-related headaches and hello to a more relaxed and focused student lifestyle.</p><a id = "cheap_5_bedroom_student_flats_in_avon_park,_bath"> <h2>Cheap 5 Bedroom Student Flats in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_flats_in_avon_park,_bath__recently_added"> <h2>5 Bedroom Student Flats in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_flats_in_avon_park,_bath__recently_reduced"> <h2>5 Bedroom Student Flats in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__5_bedroom_flats_in_avon_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 5 Bedroom Flats in Avon Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable 5-bedroom flat in <b>Bath</b>, Somerset? Look no further than our property portal, where you can easily find listings for <b>student Flats</b> in the picturesque Avon Park area of <b>Bath</b>. With its close proximity to both University of <b>Bath</b> and <b>Bath</b> Spa University, Avon Park is a popular choice for students seeking a vibrant and convenient living environment. Whether you're searching for a modern apartment with all the amenities or a cozy Victorian townhouse, our portal offers a diverse range of options to suit your preferences and budget. Don't miss out on the opportunity to secure a fantastic 5-bedroom flat in Avon Park, <b>Bath</b> – start your search today and make your student living experience truly unforgettable.</p><a id = "5_bedroom_student_flats_in_avon_park,_bath__private_rental_sector"> <h2>5 Bedroom Student Flats in Avon Park, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living space in Bath, Somerset? Look no further than the 5 Bedroom Flats in Avon Park, Bath. These modern and stylish flats come <b>fully furnished</b>, so you can move in hassle-free and start enjoying your new home right away. With <b>bills included</b> in the rent, you can budget with peace of mind and avoid unexpected expenses. Located in the heart of Bath, Avon Park offers a peaceful and convenient setting with easy access to the city's amenities and attractions. Whether you are a student or a young professional, these 5 Bedroom Flats provide a perfect blend of comfort and convenience. Don't miss out on the opportunity to experience premium living in Bath's private rental sector.</p><a id = "5_bedroom_student_flats_in_avon_park,_bath__fully_furnished"> <h2>5 Bedroom Student Flats in Avon Park, Bath - Fully Furnished</h2></a><p>Welcome to Avon Park, Bath in Somerset, where luxury living meets convenience in our fully furnished 5 Bedroom Flats. Located in the heart of Bath, these spacious and stylish flats are perfect for students and professionals alike. With everything you need for a comfortable stay, including modern furniture, appliances, and decor, all you have to do is move in and start living the life of your dreams. At Avon Park, Bath, it is normal for student flats to be fully furnished, allowing you to focus on your studies and enjoy the city's vibrant atmosphere. Don't miss out on the opportunity to reside in one of Bath's most sought-after locations with our fully furnished 5 Bedroom Flats in Avon Park. Contact us today to schedule a viewing and secure your new home.</p><a id = "how_close_is_avon_park_to_the_city_center"> <h2>How close is Avon Park to the City Center</h2></a><p><b>Avon Park</b> is conveniently located just 3 <b>miles</b> away from <b>Bath city center</b>, making it an ideal spot for those looking to explore all that this historic city has to offer. Whether you're interested in visiting the iconic Roman Baths, wandering through the charming cobbled streets filled with boutique shops, or taking a relaxing stroll along the picturesque River Avon, <b>Avon Park</b> provides easy access to all the attractions that Bath has in store. With its close proximity to the city center, guests staying at <b>Avon Park</b> can enjoy the best of both worlds – a peaceful retreat in a tranquil setting while still being just a stone's throw away from the hustle and bustle of Bath's vibrant city life.</p><a id = "how_close_is_avon_park_to_the_university_of_bath"> <h2>How close is Avon Park to the University of Bath</h2></a><p>Avon Park is conveniently located just 1.5 <b>miles</b> away from the prestigious <b>University of Bath</b>, making it an ideal living option for students. For those who prefer walking, the university can be easily reached in about 30 minutes on foot, providing a scenic and healthy commute through the beautiful city of Bath. Alternatively, the university is directly connected to Avon Park by a convenient <b>bus route</b>, offering a quick and reliable transportation option for students looking to save time. Additionally, for those with access to a car, the university is a short 5-minute drive away, allowing for easy and stress-free travel. With its close proximity to the <b>University of Bath</b>, Avon Park offers students the perfect balance of convenience and comfort.</p><a id = "how_close_is_avon_park_to_the_bath_spa_university"> <h2>How close is Avon Park to the Bath Spa University</h2></a><p>Avon Park is conveniently located close to <b>Bath Spa University</b>, being only a few <b>miles</b> away from the campus. <b>by foot</b>, it would take approximately 40 minutes to reach the university, making it a feasible option for those who enjoy a leisurely stroll. Alternatively, the university is easily accessible <b>by bus</b>, with several routes connecting Avon Park to <b>Bath Spa University</b> in just a short journey. For those who prefer to drive, the campus can be reached within 10-15 minutes <b>by car</b>, depending on traffic. This close proximity offers residents of Avon Park the opportunity to easily access the university's facilities, events, and resources, making it an ideal location for students or staff members looking for convenient accommodation near <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 5 bedroom student flats in Avon Park, Bath, it is essential to consider several factors to ensure you find the perfect accommodation. Location plays a crucial role to ensure easy access to campus, amenities, and public transportation. Size and layout are important to provide each student with their own space while also offering communal areas for socializing. Safety and security features, such as secure entry systems and well-lit surroundings, should not be overlooked. A reliable internet connection is also a key requirement for modern-day students. Additionally, facilities like laundry rooms, bike storage, and communal study spaces can enhance the overall living experience. In conclusion, finding the ideal 5 bedroom student flat in Avon Park, Bath requires thorough research and consideration of these key elements to ensure a comfortable and convenient living environment for all residents.</p></>)
};

export default BathAvonParkFlat5;