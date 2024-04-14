
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


const  BathRushHillStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Rush Hill, Bath</h1><p>
We have listings for <b>Studio Apartments for Students in Rush Hill, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Rush Hill, Bath</b> offer comfortable living spaces for students attending nearby universities. Situated in a peaceful yet convenient location, these apartments provide a conducive environment for studying and relaxation. With amenities tailored to student needs, living in Rush Hill, Bath can enhance the academic experience for those pursuing higher education in the area.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-rush-hill-bath.png')} alt='Studio Apartments for Students in Rush Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Rush Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71114&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Rush Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_rush_hill,_bath_pp/pm">Prices for Studio Apartments for Students in Rush Hill, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_rush_hill,_bath__all_bills_inclusive">Studio Apartments for Students in Rush Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_rush_hill,_bath">Cheap Studio Apartments for Students in Rush Hill, Bath</a></li><li><a href = "#studio_apartments_for_students_in_rush_hill,_bath__recently_added">Studio Apartments for Students in Rush Hill, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_rush_hill,_bath__recently_reduced">Studio Apartments for Students in Rush Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_rush_hill,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Rush Hill, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_rush_hill,_bath__private_rental_sector">Studio Apartments for Students in Rush Hill, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_rush_hill,_bath__fully_furnished">Studio Apartments for Students in Rush Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rush_hill_to_the_city_center">How close is Rush Hill to the City Center</a></li><li><a href = "#how_close_is_rush_hill_to_the_university_of_bath">How close is Rush Hill to the University of Bath</a></li><li><a href = "#how_close_is_rush_hill_to_the_bath_spa_university">How close is Rush Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_rush_hill,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Rush Hill, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Rush Hill, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71114")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_rush_hill,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Rush Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 1-bedroom studio in Rush Hill, Bath, Somerset? Managing multiple bills while trying to <b>concentrate on your studies</b> can be overwhelming. This is where <b>UniBills.com</b> comes in to make your life easier. By subscribing to an <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With just one payment, you can cover all your utility bills, including water, electricity, and internet. This means no more stress about remembering due dates or splitting costs with roommates. You can focus on what truly matters - your education. To simplify your student life even further, get a quote from <b>UniBills.com</b> or any accommodation on this website today. Embrace the convenience and peace of mind that comes with an <b>all bills inclusive</b> service and thrive in your student studio without the added financial worry.</p><a id = "cheap_studio_apartments_for_students_in_rush_hill,_bath"> <h2>Cheap Studio Apartments for Students in Rush Hill, Bath</h2></a><p><Portlet location="REGION^71114" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_rush_hill,_bath__recently_added"> <h2>Studio Apartments for Students in Rush Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71114" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_rush_hill,_bath__recently_reduced"> <h2>Studio Apartments for Students in Rush Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71114" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_rush_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Rush Hill, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a 1 Bedroom Studio in Rush Hill, <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect student studio in this vibrant city. Located near prestigious universities like the University of <b>Bath</b> and <b>Bath</b> Spa University, Rush Hill boasts a convenient location with easy access to campus and all amenities. Whether you prefer a modern studio with all the latest amenities or a cozy traditional space, our portal offers a variety of options to fit your needs and budget. Don't waste time searching endlessly for the perfect accommodation – let our property portal streamline the process and help you find your ideal 1 Bedroom Studio in Rush Hill, <b>Bath</b>, Somerset today.</p><a id = "studio_apartments_for_students_in_rush_hill,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Rush Hill, Bath - Private Rental Sector</h2></a><p>If you're on the lookout for a cozy and convenient living space in Bath, Somerset, look no further than the 1 Bedroom Studios in Rush Hill. These stylish and comfortable studios offer the perfect blend of space and comfort for singles or couples looking for a peaceful retreat. Situated in a desirable area of Bath, these studios come <b>fully furnished</b>, making moving in a breeze. What's more, with <b>bills included</b> in the rent, managing your finances couldn't be easier. Whether you're a student, young professional, or simply seeking a hassle-free living arrangement, these studios in Rush Hill offer a perfect solution. Don't miss out on the opportunity to call one of these fantastic studios your new home in the heart of Bath.</p><a id = "studio_apartments_for_students_in_rush_hill,_bath__fully_furnished"> <h2>Studio Apartments for Students in Rush Hill, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 1 Bedroom Studios in Rush Hill, Bath, Somerset, Bath</b>? Look no further! These studios offer all the comforts of home, conveniently located in a vibrant neighborhood. Each studio is thoughtfully designed and equipped with modern furniture and appliances, making it easy for you to move in and start living comfortably right away. In Rush Hill, Bath, it is normal for student studios to be fully furnished, so you can focus on your studies and exploring the beautiful city of Bath. With everything you need at your fingertips, these studios offer a convenient and hassle-free living experience. Don't miss out on the opportunity to call one of these fully furnished studios your new home in Rush Hill, Bath, Somerset, Bath.</p><a id = "how_close_is_rush_hill_to_the_city_center"> <h2>How close is Rush Hill to the City Center</h2></a><p><b>Rush Hill</b> is ideally located just a few <b>miles</b> away from <b>Bath city center</b>, making it a convenient and accessible area for visitors and residents alike. Situated in a tranquil setting, <b>Rush Hill</b> offers a peaceful retreat from the bustling city, while still being within easy reach of all the attractions and amenities that Bath has to offer. Whether you're looking to explore the historic landmarks, indulge in some retail therapy, or sample the delicious cuisine in the city center, <b>Rush Hill</b> provides the perfect base for your adventures. With its proximity to <b>Bath city center</b>, you can enjoy the best of both worlds – the vibrant hustle and bustle of the city and the serenity of <b>Rush Hill</b>'s picturesque surroundings. So, whether you're a local looking for a peaceful setting close to the action or a visitor seeking a convenient location to explore Bath, <b>Rush Hill</b> is the perfect choice.</p><a id = "how_close_is_rush_hill_to_the_university_of_bath"> <h2>How close is Rush Hill to the University of Bath</h2></a><p>Rush Hill is conveniently located close to the prestigious <b>University of Bath</b>, being only a few <b>miles</b> away. If you prefer to walk, the university is easily accessible in about a 30-minute stroll. Alternatively, hop on the <b>bus route</b> that connects Rush Hill directly to the university, making the journey quick and hassle-free. For those who prefer to drive, the university is just a short distance away <b>by car</b>, allowing for a smooth and efficient commute. Whether you choose to travel <b>by foot</b>, bus, or car, getting to the <b>University of Bath</b> from Rush Hill is a breeze. The close proximity between the two locations offers students and faculty the convenience of easy access to the university campus.</p><a id = "how_close_is_rush_hill_to_the_bath_spa_university"> <h2>How close is Rush Hill to the Bath Spa University</h2></a><p>Rush Hill is conveniently located just 1.5 <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal accommodation choice for students. The university can be easily accessed <b>by foot</b>, taking a pleasant 30-minute stroll through the picturesque surroundings. Alternatively, there is a direct <b>bus route</b> that connects Rush Hill to the university, providing a quick and convenient transportation option for students on-the-go. For those who prefer to drive, <b>Bath Spa University</b> is just a short 10-minute car ride away. Whether traveling <b>by foot</b>, bus, or car, Rush Hill's proximity to the university offers students the perfect balance of convenience and accessibility.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After thoroughly searching for studio apartments in Rush Hill, Bath, it is clear that there are a variety of options available for students. From compact units with essential amenities to more spacious layouts with modern finishes, students can find a studio apartment that suits their needs and budget. The central location of Rush Hill provides easy access to necessary facilities like shopping centers, restaurants, and public transportation, making it a convenient choice for student living. In conclusion, students looking for studio apartments in Rush Hill, Bath can expect to find a diverse range of options that cater to their lifestyle and preferences. The vibrant atmosphere of Rush Hill coupled with the convenience of its location makes it an ideal choice for students seeking a comfortable and functional living space. Overall, the search for a studio apartment in Rush Hill can result in a satisfying and rewarding living experience for students in Bath.</p></>)
};

export default BathRushHillStudio1;