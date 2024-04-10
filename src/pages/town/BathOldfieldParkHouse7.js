
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


const  BathOldfieldParkHouse7 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isMobile,setIsMobile] = useState();    

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("t  ownLocationId");
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
  


    return (<><h1>7 Bedroom Student Houses in Oldfield Park, Bath</h1><p>We have listings for <b>7 Bedroom Student Houses in Oldfield Park, Bath</b> for the academic year 2024. 
<b>7 Bedroom Student Houses in Oldfield Park, Bath</b> are popular among students looking for shared accommodation in a vibrant and student-friendly area. With multiple bedrooms, these houses offer ample space for students to live and study comfortably together in a convenient location near the university.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/7-bedroom-student-houses-in-oldfield-park-bath.png')} alt='7 Bedroom Student Houses in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='7 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=REGION^71108&type=House&beds=7")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>7 Bedroom Student Houses in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_7_bedroom_student_houses_in_oldfield_park,_bath_pp/pm">Prices for 7 Bedroom Student Houses in Oldfield Park, Bath pp/pm</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive">7 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_7_bedroom_student_houses_in_oldfield_park,_bath">Cheap 7 Bedroom Student Houses in Oldfield Park, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__recently_added">7 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced">7 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__7_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 7 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector">7 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished">7 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_7_bedroom_student_houses_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 7 Bedroom Student Houses in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th className = 'deviceVisibility'>House </th><th className = 'deviceVisibility'>Properties </th></tr><tr><td className = 'deviceVisibility'>£669 per month </td><td className = 'deviceVisibility'><button className = 'searchButton tableButton' title='7 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of managing multiple utility bills for your 7 bedroom student house in Oldfield Park, Bath, Somerset? Save yourself the time and stress by subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>. With this convenient option, you can enjoy the hassle free all inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> and social life without the worry of keeping track of different bills each month. By opting for this service, you can simplify your living arrangements and budgeting process, making your student life much more manageable. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience a whole lot easier.</p><a id = "cheap_7_bedroom_student_houses_in_oldfield_park,_bath"> <h2>Cheap 7 Bedroom Student Houses in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__recently_added"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__7_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 7 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable place to live in the vibrant city of <b>Bath</b>, Somerset? Our property portal specializes in helping students find their ideal accommodation, including <b>7 Bedroom Houses</b> in Oldfield Park, <b>Bath</b>. Located conveniently close to both the University of <b>Bath</b> and <b>Bath</b> Spa University, Oldfield Park is a popular area amongst students due to its lively atmosphere and easy access to campus and local amenities. These <b>student Houses</b> offer plenty of room for housemates to live together comfortably, making them the perfect choice for those looking to share accommodation with friends. With our user-friendly search filters and detailed property listings, finding your dream 7 Bedroom House in Oldfield Park, <b>Bath</b> has never been easier. Start your search today and secure your ideal student accommodation in this vibrant and desirable location.</p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</h2></a><p>If you are looking for a spacious and convenient living arrangement in Bath, Somerset, look no further than the 7 Bedroom Houses in Oldfield Park. These properties offer ample space for large families or groups of friends looking to live together. Situated in the vibrant Oldfield Park area of Bath, these houses are close to local amenities, transport links, and the University of Bath. The best part is that these houses come <b>fully furnished</b>, saving you the hassle of buying and moving furniture. Additionally, many of these properties offer <b>bills included</b> in the rent, making budgeting easier. Don't miss out on the opportunity to live in a comfortable and well-equipped home in the heart of Bath.</p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</h2></a><p>If you are searching for <b>fully furnished 7 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</b>, look no further! These spacious and beautifully decorated homes offer the perfect combination of comfort and convenience. It is normal for student Houses to be fully furnished, complete with modern amenities such as comfortable beds, study desks, storage solutions, and stylish common areas for socializing or studying. From well-equipped kitchens to cozy living rooms, these houses are designed to make you feel right at home. Located in the vibrant neighborhood of Oldfield Park, you'll have easy access to local shops, restaurants, and public transportation.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is conveniently situated just about 1.5 <b>miles</b> south of <b>Bath city center</b>, making it a prime location for those looking to be close to all the action and amenities the city has to offer. With its charming residential streets, trendy cafes, and local shops, <b>Oldfield Park</b> provides a peaceful escape from the bustling city center while still being easily accessible. Whether you choose to take a leisurely stroll or a quick bus ride, you can reach <b>Bath city center</b> in no time, where you'll find historic landmarks, cultural attractions, and a vibrant dining and shopping scene. So, if you're looking for a cozy neighborhood with easy access to the heart of Bath, <b>Oldfield Park</b> is a perfect choice.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is conveniently located just 1.5 <b>miles</b> away from the <b>University of Bath</b> campus, making it an ideal residential area for students and faculty. For those looking to commute to the university, there are several convenient transportation options available. <b>by foot</b>, the journey takes around 30 minutes, providing a scenic route through the city. Alternatively, there is a direct <b>bus route</b> that connects Oldfield Park to the university, making the commute quick and easy. For those who prefer to drive, the journey takes approximately 10 minutes <b>by car</b>, offering a convenient and flexible transportation option. Overall, Oldfield Park's close proximity to the <b>University of Bath</b> provides residents with a convenient and accessible location to easily access campus facilities and resources.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is conveniently located close to <b>Bath Spa University</b>. The distance between the two places is approximately 1 mile, making it easily accessible. Walking from Oldfield Park to the university would take roughly 20-25 minutes, making it a viable option for students looking to get some exercise in between classes. Alternatively, there is a direct <b>bus route</b> that connects Oldfield Park to <b>Bath Spa University</b>, with buses running frequently throughout the day. This makes commuting between the two locations quick and convenient for students. For those with access to a car, driving from Oldfield Park to the university takes just a few minutes, offering flexibility and ease of transportation. So whether you prefer to travel <b>by foot</b>, bus, or car, getting from Oldfield Park to <b>Bath Spa University</b> is a straightforward and seamless journey.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for a 7-bedroom student house in Oldfield Park, Bath, students have a plethora of options to choose from. From traditional Victorian terraces to modern townhouses, the variety of properties available ensures that every student can find a home that suits their needs and preferences. Location is key in Oldfield Park, with its close proximity to the university campus, city center, and local amenities making it a convenient and desirable area for students to live in. When searching for a 7-bedroom student house in this area, it is important to consider factors such as budget, proximity to campus, and the overall condition of the property. By carefully weighing these factors and taking the time to explore different options, students can find the perfect 7-bedroom student house in Oldfield Park, Bath that meets all their needs. Additionally, with the support and guidance of reputable letting agents or student accommodation services in the area, the process of finding a suitable property can be made easier and more efficient for students. Ultimately, by being proactive and thorough in their search, students can secure a comfortable and convenient living arrangement during their time at university.</p></>)
};

export default BathOldfieldParkHouse7;