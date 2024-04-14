
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


const  BathHatStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Hat, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Hat, Bath</b> for the academic year 2024. 
<b>Studio Apartments for Students in Hat, Bath</b> are perfect for students looking for a cozy and convenient living space in Bath. These apartments offer a private and comfortable environment for students to study and relax during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-hat-bath.png')} alt='Studio Apartments for Students in Hat, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Hat, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61721&type=Studio&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Hat, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_hat,_bath_pp/pm">Prices for Studio Apartments for Students in Hat, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__all_bills_inclusive">Studio Apartments for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_hat,_bath">Cheap Studio Apartments for Students in Hat, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__recently_added">Studio Apartments for Students in Hat, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__recently_reduced">Studio Apartments for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_hat,_bath__houses_pp/pm">Prices for Studio Apartments for Students in Hat, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__hat,_bath">Student Accommodation Portal - Hat, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__private_rental_sector">Studio Apartments for Students in Hat, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__fully_furnished">Studio Apartments for Students in Hat, Bath - Fully Furnished</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__near_to_city_center_?">Studio Apartments for Students in Hat, Bath - Near to City Center ?</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__near_to__to_the_university_of_bath">Studio Apartments for Students in Hat, Bath - Near to  to the University of Bath</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__near_to__to_the_bath_spa_university">Studio Apartments for Students in Hat, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_hat,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Hat, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for convenient and stress-free accommodation in Hat, Bath, Somerset? Look no further than <b>UniBills.com</b> for <b>all bills inclusive</b> service for your student Studio. With this option, you can enjoy the hassle-free all-inclusive package that covers all your utility bills, from water and electricity to internet and TV licenses. By choosing this service, you can <b>concentrate on your studies</b> without worrying about managing multiple bills and expenses. <b>UniBills.com</b> provides transparent pricing, so you know exactly what you're getting without any hidden costs. Take the first step towards a seamless living experience and get a quote from <b>UniBills.com</b> or any accommodation on this website today.</p><a id = "cheap_studio_apartments_for_students_in_hat,_bath"> <h2>Cheap Studio Apartments for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hat,_bath__recently_added"> <h2>Studio Apartments for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hat,_bath__recently_reduced"> <h2>Studio Apartments for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_hat,_bath__houses_pp/pm"> <h2>Prices for Studio Apartments for Students in Hat, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton tableButton' title='Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><div/> </td><td className = {classNameHideForMobile}>£795 </td><td className = {classNameHideForMobile}>£1690 </td><td>£1287 </td><td className = {classNameHideForMobile}>£184 </td><td className = {classNameHideForMobile}>£393 </td><td>£299 </td></tr></table></p><a id = "student_accommodation_portal__hat,_bath"> <h2>Student Accommodation Portal - Hat, Bath</h2></a><p>Are you a student looking for accommodation in the vibrant city of <b>Bath</b>? Look no further than our property portal, where we make it easy for you to find the perfect student living in <b>Hat</b>, <b>Bath</b>. With the renowned University of <b>Bath</b> and <b>Bath</b> Spa University nearby, our portal offers a wide range of options to suit your preferences and budget. Whether you're looking for a cozy room in a shared house or a modern apartment with all the amenities, we've got you covered. Simply browse through our listings, filter your search criteria, and you'll be one step closer to finding your ideal student accommodation in <b>Hat</b>, <b>Bath</b>. Say goodbye to the hassle of searching for a place to live and let us help you make the most of your student experience in this beautiful city.</p><a id = "studio_apartments_for_students_in_hat,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Hat, Bath - Private Rental Sector</h2></a><p>Are you a student looking for accommodation in Bath? Look no further than the thriving <b>student private rental sector</b> in Hat! From cozy <b>studio apartment</b>s to spacious <b>2 - 10 bedroom house</b>s, there is a wide range of properties available to suit every need and budget. Many of these rentals come <b>fully furnished</b>, making the move-in process a breeze. Additionally, some landlords even offer <b>bills included</b> in the rent, taking the hassle out of monthly budgeting. So whether you prefer the independence of your own studio or the camaraderie of a shared house, the private rental sector in Bath has something for everyone. Start your search today and find the perfect place to call home during your time in this charming city.</p><a id = "studio_apartments_for_students_in_hat,_bath__fully_furnished"> <h2>Studio Apartments for Students in Hat, Bath - Fully Furnished</h2></a><p>If you're a student in Bath and looking for a hassle-free living experience, fully furnished student Studios in Hat are the way to go. With everything you need provided, from furniture to kitchen appliances, these studios make moving in and getting settled a breeze. It is normal for student Studios to be fully furnished, so you can focus on your studies and enjoying student life without the stress of needing to buy or transport furniture. The convenience of a fully furnished studio allows you to concentrate on what really matters, like making new friends, exploring the city, and excelling in your academic pursuits. Plus, with Hat being a vibrant and charming location, you'll have easy access to all the amenities and social activities that make student life enjoyable. Say goodbye to the hassle of furnishing your own place and hello to the comfort and ease of fully-furnished student Studios in Bath, Hat.</p><a id = "studio_apartments_for_students_in_hat,_bath__near_to_city_center_?"> <h2>Studio Apartments for Students in Hat, Bath - Near to City Center ?</h2></a><p>Located just a few <b>miles</b> away from <b>Bath city center</b>, <b>Hat</b> offers an ideal location for students looking for convenient accommodation. With a range of <b>student Studios</b> available in <b>Hat</b>, this vibrant area provides a variety of options for those studying in Bath. Being just a short distance away from the city center, students can easily access all the amenities and attractions t<b>Hat</b> Bath has to offer. Whether it's exploring the historic Roman baths, enjoying a leisurely stroll along the River Avon, or indulging in the diverse dining and shopping options, students living in <b>Hat</b> have everything they need within easy reach. Additionally, the close proximity to the city center means t<b>Hat</b> students can easily commute to and from their classes, making it a convenient and practical choice for those studying in Bath. Overall, the combination of <b>student Studios</b> in <b>Hat</b> and their close proximity to <b>Bath city center</b> makes this area a fantastic choice for students looking for both comfort and convenience.</p><a id = "studio_apartments_for_students_in_hat,_bath__near_to__to_the_university_of_bath"> <h2>Studio Apartments for Students in Hat, Bath - Near to  to the University of Bath</h2></a><p>Hat is located just 1.5 <b>miles</b> away from the <b>University of Bath</b>, making it an ideal accommodation choice for students. Conveniently situated along a direct <b>bus route</b> to the university, students can easily access campus within minutes. For those who prefer to walk, the university is just a 25-minute stroll away. Additionally, for students with a car, the university can be reached in just a short drive. Hat also offers modern and comfortable <b>Student Studios</b>, providing a convenient and well-equipped living space for students attending the <b>University of Bath</b>. With its close proximity and various transportation options, Hat is the perfect choice for students looking for a convenient and hassle-free living situation near campus.</p><a id = "studio_apartments_for_students_in_hat,_bath__near_to__to_the_bath_spa_university"> <h2>Studio Apartments for Students in Hat, Bath - Near to  to the Bath Spa University</h2></a><p>Looking for student accommodation close to <b>Bath Spa University</b>? Hat is conveniently located just a few <b>miles</b> away from the campus, making it a great option for students. The <b>Student Studios</b> in Hat offer comfortable and modern living spaces for students looking for a convenient and affordable place to stay. If you prefer to walk, it would take approximately 30-40 minutes to reach the university campus. Alternatively, there is a direct <b>bus route</b> that can take you to <b>Bath Spa University</b> in around 15-20 minutes, making it a hassle-free commute. For those who prefer to drive, it would take around 10-15 minutes to reach the campus. With its proximity to the university and easy access <b>by foot</b>, bus, or car, Hat is an ideal choice for students looking for convenient and comfortable accommodation near <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In Hat, Bath, finding a studio apartment for students can be a rewarding experience. This type of accommodation offers both convenience and independence, making it an ideal choice for those seeking a private living space. Studio apartments in Hat are often equipped with essential amenities such as a kitchenette, bathroom, and sleeping area, providing everything a student needs for comfortable living. Additionally, the vibrant student community in the area makes it a perfect location for young individuals looking to immerse themselves in a lively atmosphere. With a variety of options available, students can easily find a studio apartment that fits their budget and preferences. Overall, searching for studio apartments in Hat, Bath offers a great opportunity for students to enjoy a well-rounded living experience in a dynamic and student-friendly environment.</p></>)
};

export default BathHatStudio;