
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


const  BathKensingtonFlat3 = () => 
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

    return (<><h1>3 Bedroom Student Flats in Kensington, Bath</h1><p>We have listings for <b>3 Bedroom Student Flats in Kensington, Bath</b> for the academic year 2024.

<b>3 Bedroom Student Flats in Kensington, Bath</b> are highly sought after by students attending the University of Bath. These flats offer spacious living areas, modern amenities, and convenient access to campus and the city center. With a variety of shops, restaurants, and parks nearby, students can enjoy a vibrant and lively atmosphere while studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-flats-in-kensington-bath.png')} alt='3 Bedroom Student Flats in Kensington, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Flats in Kensington, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61722&type=Flat&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Flats in Kensington, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_flats_in_kensington,_bath_pp/pm">Prices for 3 Bedroom Student Flats in Kensington, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_flats_in_kensington,_bath__all_bills_inclusive">3 Bedroom Student Flats in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_flats_in_kensington,_bath">Cheap 3 Bedroom Student Flats in Kensington, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_kensington,_bath__recently_added">3 Bedroom Student Flats in Kensington, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_flats_in_kensington,_bath__recently_reduced">3 Bedroom Student Flats in Kensington, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_flats_in_kensington,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Flats in Kensington, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_kensington,_bath__private_rental_sector">3 Bedroom Student Flats in Kensington, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_flats_in_kensington,_bath__fully_furnished">3 Bedroom Student Flats in Kensington, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_kensington_to_the_city_center">How close is Kensington to the City Center</a></li><li><a href = "#how_close_is_kensington_to_the_university_of_bath">How close is Kensington to the University of Bath</a></li><li><a href = "#how_close_is_kensington_to_the_bath_spa_university">How close is Kensington to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_flats_in_kensington,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Flats in Kensington, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£733 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Flats in Kensington, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_flats_in_kensington,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Flats in Kensington, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3 bedroom flat in Kensington, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> could be the perfect solution for you. With the convenience of having all your utility bills, such as electricity, heating, water, and internet, included in one fixed monthly payment, you can <b>concentrate on your studies</b> without the added stress of managing individual bills. <b>UniBills.com</b> offers a hassle-free all inclusive option, ensuring that you can enjoy a comfortable living environment without any unexpected expenses. By choosing this service, you can streamline your finances and simplify your student life. Get a quote from <b>UniBills.com</b> or any accommodation on this website and take the first step towards a worry-free living experience.</p><a id = "cheap_3_bedroom_student_flats_in_kensington,_bath"> <h2>Cheap 3 Bedroom Student Flats in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_kensington,_bath__recently_added"> <h2>3 Bedroom Student Flats in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_kensington,_bath__recently_reduced"> <h2>3 Bedroom Student Flats in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_flats_in_kensington,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Flats in Kensington, Bath, Somerset, Bath</h2></a><p>Looking for the perfect <b>3 Bedroom Flats</b> for students in Kensington, <b>Bath</b>, Somerset? Our property portal is here to help you find the ideal student accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Located in the picturesque city of <b>Bath</b>, our listings offer a range of <b>3 Bedroom Flats</b> that cater to the needs of students, providing comfortable living spaces and convenient access to campus and local amenities. Whether you're looking for a modern apartment or a cozy flat, our portal makes it easy to browse and compare options, ensuring you find the perfect <b>student Flats</b> in the heart of Kensington, <b>Bath</b>, Somerset.</p><a id = "3_bedroom_student_flats_in_kensington,_bath__private_rental_sector"> <h2>3 Bedroom Student Flats in Kensington, Bath - Private Rental Sector</h2></a><p>If you are looking for <b>3 Bedroom Flats in Kensington, Bath, Somerset, Bath</b>, the private rental sector offers a variety of options to suit your needs. Many landlords in this area provide <b>fully furnished</b> properties, making the moving process hassle-free. From stylish decor to functional furniture, these flats are ready to move into and provide a comfortable living space. Additionally, some landlords may offer the convenience of <b>bills included</b> in the rent, simplifying budgeting and ensuring you know exactly what to expect each month. Renting a <b>fully furnished</b> 3 bedroom flat in Kensington, Bath, Somerset, Bath through the private rental sector gives you the flexibility and freedom to enjoy your new home without the stress of furnishing it yourself.</p><a id = "3_bedroom_student_flats_in_kensington,_bath__fully_furnished"> <h2>3 Bedroom Student Flats in Kensington, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 3 Bedroom Flats in Kensington, Bath, Somerset, Bath</b>? Look no further! These spacious and stylish flats are ideal for students or professionals looking for a comfortable living space in a prime location. With all the necessary furniture and appliances included, moving in is a breeze - simply unpack and settle in. In Kensington, Bath, Somerset, Bath, it is normal for student Flats to be fully furnished, making it convenient for tenants to focus on their studies or work without the hassle of having to buy furniture. These flats boast modern decor, well-equipped kitchens, and cozy bedrooms, ensuring a homely and inviting atmosphere. Plus, with a central location, residents have easy access to amenities, shops, and transportation links. Don't miss out on the opportunity to rent one of these <b>fully furnished 3 Bedroom Flats in Kensington, Bath, Somerset, Bath</b> - the perfect blend of comfort and convenience.</p><a id = "how_close_is_kensington_to_the_city_center"> <h2>How close is Kensington to the City Center</h2></a><p><b>Kensington</b> is approximately 97 <b>miles</b> away from <b>Bath city center</b>. Located in the heart of London, <b>Kensington</b> is known for its elegant architecture, upscale boutiques, and world-class museums. While it may seem like a significant distance, thanks to modern transportation options like trains and buses, travelers can easily reach <b>Bath city center</b> from <b>Kensington</b> in just a few hours. Whether you're looking to explore the historic Roman Baths, stroll along the picturesque Pulteney Bridge, or indulge in a relaxing spa day, the journey from <b>Kensington</b> to Bath is well worth the <b>miles</b> traveled. So, if you're staying in <b>Kensington</b> and craving a taste of quintessential British charm, a day trip to <b>Bath city center</b> is a perfect way to experience the beauty and history of this iconic city.</p><a id = "how_close_is_kensington_to_the_university_of_bath"> <h2>How close is Kensington to the University of Bath</h2></a><p>Kensington is conveniently located close to the <b>University of Bath</b>, situated just a few <b>miles</b> away. For students or visitors looking to get to the campus from Kensington, there are several transport options available. <b>by foot</b>, it would take around 35-40 minutes to walk to the university, making it a reasonable distance for those who enjoy a stroll. Alternatively, taking the bus is a popular choice, with the university being easily accessible by the local <b>bus route</b>s. The journey <b>by bus</b> typically takes around 15-20 minutes, depending on traffic. For those who prefer to drive, the university can be reached in approximately 10-15 minutes <b>by car</b>. Overall, Kensington's proximity to the <b>University of Bath</b> makes it a convenient location for students, staff, and visitors alike.</p><a id = "how_close_is_kensington_to_the_bath_spa_university"> <h2>How close is Kensington to the Bath Spa University</h2></a><p>Kensington and <b>Bath Spa University</b> are approximately 120 <b>miles</b> apart. The journey can be easily made <b>by car</b> or by jumping on a direct <b>bus route</b> that conveniently connects the two locations. <b>by car</b>, the drive typically takes around 2 and a half hours, depending on traffic conditions. If you prefer public transportation, taking the bus can be a stress-free option, allowing you to sit back and enjoy the scenic views along the way. <b>Bath Spa University</b> is also accessible <b>by foot</b> from the city center, making it a convenient option for those who enjoy a leisurely stroll. Despite the distance, the university is well connected to Kensington, offering various transportation options for students and visitors to easily reach their destination.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 3-bedroom student flat in Kensington, Bath can be a rewarding experience for those looking to live in a vibrant and comfortable area. The abundance of amenities, proximity to the University of Bath, and the charming atmosphere of Kensington make it an ideal location for students. The variety of 3-bedroom flats available cater to different preferences and budgets, ensuring that there is something for everyone. Additionally, the convenience of having multiple bedrooms allows for shared living arrangements, making it a cost-effective and social option for students. Overall, choosing a 3-bedroom student flat in Kensington, Bath provides a perfect combination of practicality and luxury for students looking to make the most of their university experience.</p></>)
};

export default BathKensingtonFlat3;