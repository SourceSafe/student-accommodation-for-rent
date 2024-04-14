
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


const  BathTwertonHillStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Twerton Hill, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Twerton Hill, Bath</b> for the academic year 2024.

These studio apartments are perfect for students looking for a comfortable and convenient living space in Twerton Hill, Bath. Located in a charming neighborhood with easy access to local amenities and transportation, these apartments offer a great opportunity for students to focus on their studies and enjoy a relaxed lifestyle. With modern amenities and a cozy atmosphere, <b>Studio Apartments for Students in Twerton Hill, Bath</b> provide a wonderful living experience in the beautiful city of Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-twerton-hill-bath.png')} alt='Studio Apartments for Students in Twerton Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Twerton Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71120&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Twerton Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_twerton_hill,_bath_pp/pm">Prices for Studio Apartments for Students in Twerton Hill, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_twerton_hill,_bath__all_bills_inclusive">Studio Apartments for Students in Twerton Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_twerton_hill,_bath">Cheap Studio Apartments for Students in Twerton Hill, Bath</a></li><li><a href = "#studio_apartments_for_students_in_twerton_hill,_bath__recently_added">Studio Apartments for Students in Twerton Hill, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_twerton_hill,_bath__recently_reduced">Studio Apartments for Students in Twerton Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_twerton_hill,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Twerton Hill, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_twerton_hill,_bath__private_rental_sector">Studio Apartments for Students in Twerton Hill, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_twerton_hill,_bath__fully_furnished">Studio Apartments for Students in Twerton Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_twerton_hill_to_the_city_center">How close is Twerton Hill to the City Center</a></li><li><a href = "#how_close_is_twerton_hill_to_the_university_of_bath">How close is Twerton Hill to the University of Bath</a></li><li><a href = "#how_close_is_twerton_hill_to_the_bath_spa_university">How close is Twerton Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_twerton_hill,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Twerton Hill, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Twerton Hill, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_twerton_hill,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Twerton Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for hassle-free accommodation in Twerton Hill, Bath? Look no further than <b>UniBills.com</b> for <b>all bills inclusive</b> services for your 1-bedroom student studio. With <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including water, electricity, heating, and high-speed internet, included in one monthly payment. This means you can <b>concentrate on your studies</b> without the stress of managing multiple bills. Say goodbye to unexpected charges and complicated payment schedules, and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in Twerton Hill a breeze.</p><a id = "cheap_studio_apartments_for_students_in_twerton_hill,_bath"> <h2>Cheap Studio Apartments for Students in Twerton Hill, Bath</h2></a><p><Portlet location="REGION^71120" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_twerton_hill,_bath__recently_added"> <h2>Studio Apartments for Students in Twerton Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71120" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_twerton_hill,_bath__recently_reduced"> <h2>Studio Apartments for Students in Twerton Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71120" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_twerton_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Twerton Hill, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>1 Bedroom Studios</b> in Twerton Hill, <b>Bath</b>, Somerset? Our property portal is here to help you find your ideal student studio in this vibrant area. Twerton Hill is conveniently located close to the University of <b>Bath</b> and <b>Bath</b> Spa University, making it a popular choice for students. These <b>1 Bedroom Studios</b> provide a comfortable and modern living space, perfect for studying and relaxing. With our user-friendly search filters, you can easily narrow down your options and find the perfect studio that fits your budget and preferences. Don't miss out on the opportunity to secure your dream student studio in <b>Bath</b> today.</p><a id = "studio_apartments_for_students_in_twerton_hill,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Twerton Hill, Bath - Private Rental Sector</h2></a><p>Looking for a cozy and convenient living space in Bath, Somerset? Look no further than the 1 Bedroom Studios in Twerton Hill. These charming studios offer the perfect blend of comfort and style, with the added convenience of having <b>bills included</b> in the rent. Each studio is <b>fully furnished</b>, providing everything you need for a hassle-free move-in. Located in the picturesque Twerton Hill area of Bath, these studios offer a peaceful retreat while still being close to the vibrant city center. Whether you're a student looking for a quiet place to study or a young professional seeking a comfortable home, these studios are sure to impress. Don't miss out on the opportunity to call one of these 1 Bedroom Studios in Twerton Hill your new home.</p><a id = "studio_apartments_for_students_in_twerton_hill,_bath__fully_furnished"> <h2>Studio Apartments for Students in Twerton Hill, Bath - Fully Furnished</h2></a><p>Looking for a cozy and convenient living space in the heart of Bath, Somerset? Look no further than the fully furnished 1 Bedroom Studios in Twerton Hill, Bath. Situated in a vibrant neighborhood with easy access to local amenities and public transportation, these Studios offer the perfect blend of comfort and convenience. With modern furnishings and a spacious layout, residents can enjoy a hassle-free living experience. Whether you're a student looking for a comfortable place to study and relax or a professional seeking a convenient location, these fully furnished Studios are ideal for anyone looking to settle in Bath. In the student community, it is normal for Studios to be fully furnished, making the move-in process a breeze. Don't miss out on the opportunity to call one of these stylish and well-equipped Studios your new home in beautiful Bath.</p><a id = "how_close_is_twerton_hill_to_the_city_center"> <h2>How close is Twerton Hill to the City Center</h2></a><p><b>Twerton Hill</b> is just under 2 <b>miles</b> away from <b>Bath city center</b>, making it a convenient and easily accessible location for those looking to explore all that this historic city has to offer. Nestled to the west of Bath, <b>Twerton Hill</b> provides a peaceful retreat from the hustle and bustle of the city center while still being close enough to enjoy all of its amenities. With just a short journey of around 10 minutes by car or bus, residents and visitors can easily immerse themselves in Bath's rich history, stunning architecture, and vibrant cultural scene. Whether you're looking to visit the iconic Roman Baths, stroll along the picturesque Pulteney Bridge, or indulge in some retail therapy at SouthGate shopping center, <b>Twerton Hill</b>'s proximity to <b>Bath city center</b> makes it the ideal base for exploring everything this wonderful city has to offer.</p><a id = "how_close_is_twerton_hill_to_the_university_of_bath"> <h2>How close is Twerton Hill to the University of Bath</h2></a><p>Twerton Hill is conveniently located just 1.5 <b>miles</b> away from the prestigious <b>University of Bath</b>. For students looking to commute to the university, there are several transportation options available. <b>by foot</b>, it would take approximately 30-40 minutes to reach the university campus. Alternatively, there is a direct <b>bus route</b> that connects Twerton Hill to the university, which takes around 10-15 minutes <b>by bus</b>. For those who prefer to drive, it would only be a short 5-10 minute car journey depending on traffic. This proximity makes Twerton Hill an ideal location for students looking for housing close to the <b>University of Bath</b>.</p><a id = "how_close_is_twerton_hill_to_the_bath_spa_university"> <h2>How close is Twerton Hill to the Bath Spa University</h2></a><p>Twerton Hill is only 1.5 <b>miles</b> away from <b>Bath Spa University</b>, making it a convenient location for students looking for off-campus housing. The university is easily accessible from Twerton Hill <b>by foot</b>, taking around 30 minutes to walk. Alternatively, students can take the <b>bus route</b> that connects Twerton Hill directly to <b>Bath Spa University</b>, providing a quick and convenient mode of transportation. For those who prefer to drive, the journey <b>by car</b> from Twerton Hill to the university takes less than 10 minutes, making it a practical option for students with their own vehicles. Overall, the proximity of Twerton Hill to <b>Bath Spa University</b> offers students multiple transportation options, allowing for easy and efficient travel between the two locations.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for Studio Apartments for Students in Twerton Hill, Bath can be both exciting and challenging. With its picturesque views and proximity to local amenities, Twerton Hill offers an ideal location for student living. When searching for studio apartments in this area, it is important to consider factors such as price, location, and the facilities available. Studio apartments are a popular choice for students due to their affordability and convenience. They provide a private living space that is well-suited for studying and relaxation. In conclusion, Twerton Hill, Bath offers a range of studio apartments that cater to the needs of students, making it a great place to live while pursuing higher education.</p></>)
};

export default BathTwertonHillStudio1;