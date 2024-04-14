
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


const  BathLowerWestonHouse9 = () => 
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

    return (<><h1>9 Bedroom Student Houses in Lower Weston, Bath</h1><p>We have listings for <b>9 Bedroom Student Houses in Lower Weston, Bath</b> for the academic year 2024. 
Located in Lower Weston, Bath, these spacious student houses offer ample living space for a big group of students to live together comfortably. With 9 bedrooms, these houses are perfect for students looking to share accommodation while studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/9-bedroom-student-houses-in-lower-weston-bath.png')} alt='9 Bedroom Student Houses in Lower Weston, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='9 Bedroom Student Houses in Lower Weston, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^16323&type=House&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>9 Bedroom Student Houses in Lower Weston, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_houses_in_lower_weston,_bath_pp/pm">Prices for 9 Bedroom Student Houses in Lower Weston, Bath pp/pm</a></li><li><a href = "#9_bedroom_student_houses_in_lower_weston,_bath__all_bills_inclusive">9 Bedroom Student Houses in Lower Weston, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_houses_in_lower_weston,_bath">Cheap 9 Bedroom Student Houses in Lower Weston, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_lower_weston,_bath__recently_added">9 Bedroom Student Houses in Lower Weston, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_houses_in_lower_weston,_bath__recently_reduced">9 Bedroom Student Houses in Lower Weston, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_houses_in_lower_weston,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Houses in Lower Weston, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_lower_weston,_bath__private_rental_sector">9 Bedroom Student Houses in Lower Weston, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_houses_in_lower_weston,_bath__fully_furnished">9 Bedroom Student Houses in Lower Weston, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_lower_weston_to_the_city_center">How close is Lower Weston to the City Center</a></li><li><a href = "#how_close_is_lower_weston_to_the_university_of_bath">How close is Lower Weston to the University of Bath</a></li><li><a href = "#how_close_is_lower_weston_to_the_bath_spa_university">How close is Lower Weston to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_houses_in_lower_weston,_bath_pp/pm"> <h2>Prices for 9 Bedroom Student Houses in Lower Weston, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton tableButton' title='9 Bedroom Student Houses in Lower Weston, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^16323")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "9_bedroom_student_houses_in_lower_weston,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Houses in Lower Weston, Bath - All Bills Inclusive</h2></a><p>Are you looking for a stress-free living situation during your student years in Bath, Somerset? Consider subscribing to an <b>all bills inclusive</b> service for your 9-bedroom student house in Lower Weston. With <b>UniBills.com</b>, you can enjoy the convenience of having all your bills covered in one simple package, allowing you to <b>concentrate on your studies</b> without the worry of managing multiple bills. Imagine the peace of mind that comes with not having to deal with utility companies or splitting expenses with housemates. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student life. Say goodbye to unexpected bills and administrative headaches, and instead, enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Your student experience in Bath will be all the more enjoyable knowing that your living expenses are taken care of.</p><a id = "cheap_9_bedroom_student_houses_in_lower_weston,_bath"> <h2>Cheap 9 Bedroom Student Houses in Lower Weston, Bath</h2></a><p><Portlet location="REGION^16323" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_lower_weston,_bath__recently_added"> <h2>9 Bedroom Student Houses in Lower Weston, Bath - Recently Added</h2></a><p><Portlet location="REGION^16323" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_lower_weston,_bath__recently_reduced"> <h2>9 Bedroom Student Houses in Lower Weston, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^16323" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_houses_in_lower_weston,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Houses in Lower Weston, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable accommodation near the University of <b>Bath</b> or <b>Bath</b> Spa University? Our property portal offers a convenient way to browse through a selection of 9 bedroom <b>student Houses</b> in the charming Lower Weston area of <b>Bath</b>, Somerset. These houses are ideal for larger groups of students looking to live together and create a vibrant community atmosphere. Lower Weston is a picturesque neighborhood with easy access to local amenities, green spaces, and transport links, making it a perfect location for student living. Whether you are studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, these <b>9 Bedroom Houses</b> provide ample space for both studying and socializing. Don't miss out on the opportunity to find your perfect student home in Lower Weston, <b>Bath</b> through our user-friendly property portal.</p><a id = "9_bedroom_student_houses_in_lower_weston,_bath__private_rental_sector"> <h2>9 Bedroom Student Houses in Lower Weston, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living arrangement in the beautiful Lower Weston area of Bath, Somerset? Look no further than the private rental sector offering <b>9 Bedroom Houses in Lower Weston, Bath, Somerset, Bath</b>. These properties come <b>fully furnished</b>, making your move-in process hassle-free and convenient. Additionally, many of these rentals offer the convenience of having <b>bills included</b> in the rental price, giving you peace of mind and simplifying your budgeting. With plenty of space for you and your housemates to spread out and relax, these 9 bedroom houses are perfect for students, professionals, or large families looking for a comfortable and inviting place to call home in this picturesque part of Bath.</p><a id = "9_bedroom_student_houses_in_lower_weston,_bath__fully_furnished"> <h2>9 Bedroom Student Houses in Lower Weston, Bath - Fully Furnished</h2></a><p>Are you looking for <b>fully furnished 9 Bedroom Houses in Lower Weston, Bath, Somerset, Bath</b>? Look no further! In this charming neighborhood, it is normal for student houses to be fully furnished with all the necessary amenities for a comfortable living experience. These spacious properties are ideal for large groups or families looking for a convenient and hassle-free accommodation solution. With 9 bedrooms, there is plenty of space for everyone to have their own private area while still sharing common living spaces. Enjoy the convenience of moving in without the stress of having to furnish the house yourself. Lower Weston offers a peaceful and picturesque setting, making it a desirable location for those looking to enjoy the beauty of Bath while having easy access to the city center.</p><a id = "how_close_is_lower_weston_to_the_city_center"> <h2>How close is Lower Weston to the City Center</h2></a><p><b>Lower Weston</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it an ideal residential area for those looking to be close to the excitement of the city while still enjoying a peaceful suburban setting. Situated just a short drive or bus ride away, residents of <b>Lower Weston</b> can easily access all the amenities and attractions that <b>Bath city center</b> has to offer. Whether it's shopping at the renowned SouthGate shopping center, exploring the historic Roman baths, or enjoying a relaxing stroll along the River Avon, <b>Lower Weston</b>'s proximity to <b>Bath city center</b> makes it a highly desirable location for both families and professionals. With its charming combination of urban convenience and suburban tranquility, <b>Lower Weston</b> offers the best of both worlds for those looking to live near the heart of Bath.</p><a id = "how_close_is_lower_weston_to_the_university_of_bath"> <h2>How close is Lower Weston to the University of Bath</h2></a><p>Located just a stone's throw away from the renowned <b>University of Bath</b>, Lower Weston offers a convenient living option for students and staff alike. Nestled just a few <b>miles</b> from the university campus, Lower Weston can be easily reached <b>by foot</b>, making it a perfect choice for those who enjoy a leisurely stroll to class. For those in a hurry, a quick bus ride along the efficient <b>bus route</b> provides a hassle-free commute, ensuring you arrive at your destination in no time. Additionally, for those with access to a car, the journey from Lower Weston to the <b>University of Bath</b> is quick and convenient, allowing for flexibility in transportation. No matter your preferred mode of travel, Lower Weston's close proximity to the <b>University of Bath</b> makes it a desirable location for those affiliated with the prestigious educational institution.</p><a id = "how_close_is_lower_weston_to_the_bath_spa_university"> <h2>How close is Lower Weston to the Bath Spa University</h2></a><p>Lower Weston is conveniently located close to <b>Bath Spa University</b>, being only a few <b>miles</b> away from the campus. The journey from Lower Weston to <b>Bath Spa University</b> can be easily made <b>by foot</b>, as it is approximately a 20-25 minute walk. If you prefer to take the bus, there are several <b>bus route</b>s that you can take to reach the university in around 15-20 minutes. Additionally, traveling <b>by car</b> is another option, which typically takes about 10-15 minutes depending on traffic. This close proximity makes Lower Weston a desirable location for students and staff alike, as it offers easy access to all that <b>Bath Spa University</b> has to offer.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 9-bedroom student houses in Lower Weston, Bath, it's important to consider several factors to ensure you find the perfect accommodation. Location is key, as Lower Weston offers a peaceful environment yet easy access to the city center and university campuses. Amenities such as spacious rooms, communal areas, and parking are essential for a comfortable living space. Be sure to check for nearby shops, restaurants, and transport links for convenience. Budget is also crucial, so compare prices and negotiate with landlords to get the best deal. Ultimately, finding a 9-bedroom student house in Lower Weston, Bath requires thorough research and careful consideration, but the rewards of a great living environment and memorable student experience are well worth the effort.</p></>)
};

export default BathLowerWestonHouse9;