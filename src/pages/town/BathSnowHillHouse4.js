
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


const  BathSnowHillHouse4 = () => 
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

    return (<><h1>4 Bedroom Student Houses in Snow Hill, Bath</h1><p>We have listings for <b>4 Bedroom Student Houses in Snow Hill, Bath</b> for the academic year 2024. 
<b>4 Bedroom Student Houses in Snow Hill, Bath</b> are perfect for students looking for spacious and comfortable living arrangements in the heart of Bath. These houses typically come fully furnished and provide a convenient location for easy access to local amenities and transportation options.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-houses-in-snow-hill-bath.png')} alt='4 Bedroom Student Houses in Snow Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Houses in Snow Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71116&type=House&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Houses in Snow Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_houses_in_snow_hill,_bath_pp/pm">Prices for 4 Bedroom Student Houses in Snow Hill, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_houses_in_snow_hill,_bath__all_bills_inclusive">4 Bedroom Student Houses in Snow Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_houses_in_snow_hill,_bath">Cheap 4 Bedroom Student Houses in Snow Hill, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_snow_hill,_bath__recently_added">4 Bedroom Student Houses in Snow Hill, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_houses_in_snow_hill,_bath__recently_reduced">4 Bedroom Student Houses in Snow Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_houses_in_snow_hill,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Houses in Snow Hill, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_snow_hill,_bath__private_rental_sector">4 Bedroom Student Houses in Snow Hill, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_houses_in_snow_hill,_bath__fully_furnished">4 Bedroom Student Houses in Snow Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_snow_hill_to_the_city_center">How close is Snow Hill to the City Center</a></li><li><a href = "#how_close_is_snow_hill_to_the_university_of_bath">How close is Snow Hill to the University of Bath</a></li><li><a href = "#how_close_is_snow_hill_to_the_bath_spa_university">How close is Snow Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_houses_in_snow_hill,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Houses in Snow Hill, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£658 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Houses in Snow Hill, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71116")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_houses_in_snow_hill,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Houses in Snow Hill, Bath - All Bills Inclusive</h2></a><p>Are you looking for a convenient and stress-free way to manage your student house bills in Snow Hill, Bath, Somerset? Look no further than <b>UniBills.com</b>. By subscribing to their <b>all bills inclusive</b> service for your 4 bedroom student house, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all utilities and services included in one monthly payment, you can say goodbye to the headache of coordinating multiple bills and focus on what truly matters - your studies. <b>UniBills.com</b> takes care of everything, allowing you to have a smooth and worry-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life in Snow Hill a breeze.</p><a id = "cheap_4_bedroom_student_houses_in_snow_hill,_bath"> <h2>Cheap 4 Bedroom Student Houses in Snow Hill, Bath</h2></a><p><Portlet location="REGION^71116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_snow_hill,_bath__recently_added"> <h2>4 Bedroom Student Houses in Snow Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_snow_hill,_bath__recently_reduced"> <h2>4 Bedroom Student Houses in Snow Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71116" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_houses_in_snow_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Houses in Snow Hill, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>4 Bedroom Houses</b> in Snow Hill, <b>Bath</b>, Somerset? Look no further than our property portal, where we specialize in helping students find their ideal accommodation. Located conveniently near the University of <b>Bath</b> and <b>Bath</b> Spa University, our selection of <b>student Houses</b> in Snow Hill provides easy access to campus and all the amenities that <b>Bath</b> has to offer. Whether you're looking for a cozy shared house with friends or a spacious property to rent on your own, we have options to suit every student's needs. With our user-friendly search filters and detailed property listings, finding your dream student house in <b>Bath</b> has never been easier. Don't waste time scrolling through countless listings - let our portal streamline the process for you.</p><a id = "4_bedroom_student_houses_in_snow_hill,_bath__private_rental_sector"> <h2>4 Bedroom Student Houses in Snow Hill, Bath - Private Rental Sector</h2></a><p>Looking to rent a spacious and comfortable home in the picturesque town of Snow Hill, Bath, Somerset, Bath? Look no further than the private rental sector offering beautiful 4 Bedroom Houses in Snow Hill. These properties are perfect for families or groups looking for ample space and a peaceful neighborhood to call home. Many rentals in this area come <b>fully furnished</b>, saving you the hassle of buying and moving large pieces of furniture. Additionally, some properties offer the convenience of having <b>bills included</b> in the rent, making budgeting easier and giving you one less thing to worry about. Don't miss out on the opportunity to live in one of Bath's most charming neighborhoods - explore the private rental sector for 4 Bedroom Houses in Snow Hill today.</p><a id = "4_bedroom_student_houses_in_snow_hill,_bath__fully_furnished"> <h2>4 Bedroom Student Houses in Snow Hill, Bath - Fully Furnished</h2></a><p>Are you looking for a cozy and convenient living space in Snow Hill, Bath, Somerset, Bath? Look no further than our fully furnished 4 Bedroom Houses in this charming neighborhood. These homes are perfect for students or professionals looking for a comfortable and hassle-free living experience. In Snow Hill, Bath, Somerset, Bath, it is normal for student Houses to be fully furnished, so you can move in and feel right at home. Each house is beautifully decorated and fully equipped with all the essentials. From stylish furniture to modern appliances, we’ve got you covered. Enjoy spacious bedrooms, a fully equipped kitchen, and a cozy living room perfect for relaxing or entertaining guests. So why wait? Book a viewing today and experience the convenience and comfort of our <b>fully furnished 4 Bedroom Houses in Snow Hill, Bath, Somerset, Bath</b>.</p><a id = "how_close_is_snow_hill_to_the_city_center"> <h2>How close is Snow Hill to the City Center</h2></a><p>Situated just a stone's throw away from <b>Bath city center</b>, <b>Snow Hill</b> is a quaint and picturesque neighborhood located just a few <b>miles</b> from the bustling heart of the city. Visitors can easily reach <b>Bath city center</b> from <b>Snow Hill</b> by various modes of transportation, such as walking, cycling, or taking a short bus ride. The close proximity of <b>Snow Hill</b> to the city center makes it a great option for those looking to escape the hustle and bustle of urban life while still being within easy reach of all the shops, restaurants, and attractions that Bath has to offer. Whether you're looking to explore the historic architecture, relax in one of the city's famous thermal spas, or enjoy a leisurely stroll along the River Avon, <b>Snow Hill</b>'s convenient location ensures that you can easily access all that Bath has to offer without having to travel far. So, if you're looking for a peaceful retreat near the heart of the action, <b>Snow Hill</b> is the perfect place to stay during your visit to Bath.</p><a id = "how_close_is_snow_hill_to_the_university_of_bath"> <h2>How close is Snow Hill to the University of Bath</h2></a><p>Snow Hill is conveniently located just 2 <b>miles</b> away from the <b>University of Bath</b>, making it an ideal residential area for students and faculty members of the university. For those who enjoy walking, the university is easily accessible <b>by foot</b>, taking approximately 30-40 minutes to reach the campus. Alternatively, there is a direct <b>bus route</b> that connects Snow Hill to the <b>University of Bath</b>, with a journey time of around 15-20 minutes. For those who prefer to drive, the university can be reached in just a short 10-15 minute car journey. This close proximity allows residents of Snow Hill to enjoy the benefits of living in a peaceful and scenic area while still having easy access to the bustling campus life at the <b>University of Bath</b>.</p><a id = "how_close_is_snow_hill_to_the_bath_spa_university"> <h2>How close is Snow Hill to the Bath Spa University</h2></a><p>Snow Hill is conveniently located close to <b>Bath Spa University</b>, being just a few <b>miles</b> away from the campus. For students looking to commute to the university, there are several transportation options available. The most direct route to <b>Bath Spa University</b> from Snow Hill is <b>by car</b>, which takes approximately 15-20 minutes depending on traffic. For those who prefer not to drive, there is a regular <b>bus route</b> that connects Snow Hill to the university, making it easily accessible by public transport. Alternatively, for students who enjoy a leisurely stroll, it is also possible to reach <b>Bath Spa University</b> on foot from Snow Hill within an hour. Whether you prefer to travel <b>by foot</b>, bus, or car, the proximity of Snow Hill to <b>Bath Spa University</b> ensures that students can conveniently reach their destination with ease.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>If you are searching for a 4-bedroom student house in Snow Hill, Bath, you are in luck. This vibrant neighborhood offers a perfect blend of convenience and charm, making it an ideal location for students. The variety of housing options available caters to different budgets and preferences, ensuring that you will find a suitable home that meets your needs. From cozy cottages to modern townhouses, there is something for everyone in Snow Hill. The close proximity to local amenities, universities, and public transportation makes living here both convenient and practical. Overall, Snow Hill provides a welcoming and comfortable environment for students to thrive academically and socially, making it a top choice for those seeking a 4-bedroom student house in Bath.</p></>)
};

export default BathSnowHillHouse4;