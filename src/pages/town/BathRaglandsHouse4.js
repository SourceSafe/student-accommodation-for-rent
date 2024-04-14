
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


const  BathRaglandsHouse4 = () => 
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

    return (<><h1>4 Bedroom Student Houses in Raglands, Bath</h1><p>We have listings for <b>4 Bedroom Student Houses in Raglands, Bath</b> for the academic year 2024.

<b>4 Bedroom Student Houses in Raglands, Bath</b> provide students with spacious living arrangements ideal for sharing with friends or classmates. These properties typically offer ample space for studying, socializing, and relaxing, making them a popular choice among students in Bath. Located in the vibrant area of Raglands, these student houses are conveniently situated near local amenities, universities, and transportation options.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-houses-in-raglands-bath.png')} alt='4 Bedroom Student Houses in Raglands, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Houses in Raglands, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71111&type=House&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Houses in Raglands, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_houses_in_raglands,_bath_pp/pm">Prices for 4 Bedroom Student Houses in Raglands, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_houses_in_raglands,_bath__all_bills_inclusive">4 Bedroom Student Houses in Raglands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_houses_in_raglands,_bath">Cheap 4 Bedroom Student Houses in Raglands, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_raglands,_bath__recently_added">4 Bedroom Student Houses in Raglands, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_houses_in_raglands,_bath__recently_reduced">4 Bedroom Student Houses in Raglands, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_houses_in_raglands,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Houses in Raglands, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_raglands,_bath__private_rental_sector">4 Bedroom Student Houses in Raglands, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_houses_in_raglands,_bath__fully_furnished">4 Bedroom Student Houses in Raglands, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_raglands_to_the_city_center">How close is Raglands to the City Center</a></li><li><a href = "#how_close_is_raglands_to_the_university_of_bath">How close is Raglands to the University of Bath</a></li><li><a href = "#how_close_is_raglands_to_the_bath_spa_university">How close is Raglands to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_houses_in_raglands,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Houses in Raglands, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£658 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Houses in Raglands, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71111")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_houses_in_raglands,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Houses in Raglands, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student house in Raglands, Bath, Somerset has never been easier with <b>UniBills.com</b>. By opting for this convenient package, you can focus entirely on your studies without the stress of managing multiple utility bills. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, where your electricity, water, gas, and internet bills are all taken care of in one monthly payment. This means no more chasing housemates for money or dealing with unexpected fluctuations in bills. With <b>UniBills.com</b>, you can rest assured that your living expenses are covered, allowing you to concentrate on what truly matters – your education. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_4_bedroom_student_houses_in_raglands,_bath"> <h2>Cheap 4 Bedroom Student Houses in Raglands, Bath</h2></a><p><Portlet location="REGION^71111" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_raglands,_bath__recently_added"> <h2>4 Bedroom Student Houses in Raglands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71111" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_raglands,_bath__recently_reduced"> <h2>4 Bedroom Student Houses in Raglands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71111" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_houses_in_raglands,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Houses in Raglands, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>4 Bedroom Houses</b> in Raglands, <b>Bath</b>, Somerset? Look no further than our property portal. We specialize in connecting students with ideal <b>student Houses</b> in the vibrant city of <b>Bath</b>, just a stone's throw away from both the University of <b>Bath</b> and <b>Bath</b> Spa University. Raglands is a sought-after area known for its charming streets and convenient location, making it an excellent choice for student accommodation. With our user-friendly search filters and detailed property listings, finding the perfect 4 Bedroom House in <b>Bath</b> has never been easier. Start your search today and discover your dream student home in Raglands, <b>Bath</b>, Somerset.</p><a id = "4_bedroom_student_houses_in_raglands,_bath__private_rental_sector"> <h2>4 Bedroom Student Houses in Raglands, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living space in the heart of Bath? Consider renting one of the exquisite 4 bedroom houses available in the prestigious Raglands area of Somerset. These properties boast modern amenities and are <b>fully furnished</b>, providing a move-in-ready experience for tenants. With <b>bills included</b> in the rental price, tenants can enjoy peace of mind knowing that their monthly expenses are taken care of. The private rental sector in Bath offers a variety of options for those seeking a home, and the 4 bedroom houses in Raglands are a popular choice for families and professionals alike. Don't miss out on the opportunity to live in a beautiful home in a desirable location. Contact us now to schedule a viewing and secure your new residence.</p><a id = "4_bedroom_student_houses_in_raglands,_bath__fully_furnished"> <h2>4 Bedroom Student Houses in Raglands, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 4 Bedroom Houses in Raglands, Bath, Somerset, Bath</b>? Look no further! These properties are perfect for students or families looking for a convenient and hassle-free living experience. In Bath, it is normal for student Houses to be fully furnished, making the transition to a new home seamless and stress-free. With four bedrooms, these properties offer plenty of space for everyone to relax and unwind. The modern furnishings and convenient amenities make these houses a popular choice for those looking for a comfortable and stylish living environment. Located in the charming Raglands neighborhood, you'll be close to all the amenities and attractions that Bath has to offer.</p><a id = "how_close_is_raglands_to_the_city_center"> <h2>How close is Raglands to the City Center</h2></a><p><b>Raglands</b> is conveniently located just a stone's throw away from <b>Bath city center</b>, making it the perfect base for exploring all that this historic city has to offer. Situated just a few <b>miles</b> from the heart of Bath, <b>Raglands</b> provides easy access to all the top attractions, including the famous Roman Baths, the stunning Bath Abbey, and the picturesque Pulteney Bridge. Whether you're interested in shopping, dining, or soaking up the city's rich history, <b>Raglands</b> is ideally positioned for a memorable stay in Bath. With its central location and close proximity to the city center, <b>Raglands</b> is the ideal choice for visitors looking to experience the best of Bath.</p><a id = "how_close_is_raglands_to_the_university_of_bath"> <h2>How close is Raglands to the University of Bath</h2></a><p>Raglands is conveniently located close to the <b>University of Bath</b>, approximately 1.5 <b>miles</b> away. If you prefer to travel <b>by foot</b>, the university is easily accessible and a pleasant walk away. For those who prefer public transportation, there is a convenient <b>bus route</b> that can take you directly to the university campus. <b>by bus</b>, the journey takes around 10-15 minutes, making it a quick and efficient option for students and visitors. If you have a car, the drive to the <b>University of Bath</b> is also straightforward and takes only a few minutes. Regardless of your preferred mode of transportation, Raglands' proximity to the <b>University of Bath</b> ensures that getting to campus is always convenient and hassle-free.</p><a id = "how_close_is_raglands_to_the_bath_spa_university"> <h2>How close is Raglands to the Bath Spa University</h2></a><p>Raglands is conveniently situated close to <b>Bath Spa University</b>, just a few <b>miles</b> away. If you choose to travel <b>by foot</b>, a scenic stroll through the picturesque streets of Bath will take you to the university in no time. Alternatively, a quick and easy bus ride on the reliable <b>bus route</b> makes commuting between Raglands and <b>Bath Spa University</b> hassle-free. For those with a car, the journey is also a straightforward one, with ample parking available at both locations. Whether you prefer to walk, take the bus, or drive, Raglands offers easy access to <b>Bath Spa University</b>, making it a convenient and ideal location for students looking for accommodation near the campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 4-bedroom student house in Raglands, Bath can be a daunting task, but with the right resources and guidance, it can be an exciting and rewarding experience. Raglands offers a variety of housing options suitable for students, ranging from modern apartments to cozy houses. When looking for a 4-bedroom student house, it is crucial to consider factors such as location, budget, amenities, and proximity to universities and local attractions. With its vibrant community and convenient transportation links, Raglands is a popular choice amongst students. By carefully assessing your needs and preferences, you can find the perfect student house that meets all your requirements. With diligent research and planning, you can secure a comfortable and stylish 4-bedroom student house in Raglands, Bath, ensuring a memorable and enjoyable university experience.</p></>)
};

export default BathRaglandsHouse4;