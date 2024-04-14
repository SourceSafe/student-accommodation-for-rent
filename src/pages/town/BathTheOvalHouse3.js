
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


const  BathTheOvalHouse3 = () => 
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

    return (<><h1>3 Bedroom Student Houses in The Oval, Bath</h1><p>We have listings for <b>3 Bedroom Student Houses in The Oval, Bath</b> for the academic year 2024. 

<b>3 Bedroom Student Houses in The Oval, Bath</b> provide spacious and comfortable living spaces for students in Bath. Located in a prime area close to local amenities and transportation, these houses offer a convenient and enjoyable student living experience. With three bedrooms, these houses are perfect for sharing with friends while studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-houses-in-the-oval-bath.png')} alt='3 Bedroom Student Houses in The Oval, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Houses in The Oval, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61729&type=House&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Houses in The Oval, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_houses_in_the_oval,_bath_pp/pm">Prices for 3 Bedroom Student Houses in The Oval, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_houses_in_the_oval,_bath__all_bills_inclusive">3 Bedroom Student Houses in The Oval, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_houses_in_the_oval,_bath">Cheap 3 Bedroom Student Houses in The Oval, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_the_oval,_bath__recently_added">3 Bedroom Student Houses in The Oval, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_houses_in_the_oval,_bath__recently_reduced">3 Bedroom Student Houses in The Oval, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_houses_in_the_oval,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Houses in The Oval, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_the_oval,_bath__private_rental_sector">3 Bedroom Student Houses in The Oval, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_houses_in_the_oval,_bath__fully_furnished">3 Bedroom Student Houses in The Oval, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_the_oval_to_the_city_center">How close is The Oval to the City Center</a></li><li><a href = "#how_close_is_the_oval_to_the_university_of_bath">How close is The Oval to the University of Bath</a></li><li><a href = "#how_close_is_the_oval_to_the_bath_spa_university">How close is The Oval to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_houses_in_the_oval,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Houses in The Oval, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Houses in The Oval, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^61729")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_houses_in_the_oval,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Houses in The Oval, Bath - All Bills Inclusive</h2></a><p>Living in a 3 bedroom student house in The Oval, Bath, Somerset, can be a thrilling experience. However, managing bills can be a headache. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. This means no more worrying about splitting bills with your housemates or dealing with different utility providers. With all your bills conveniently bundled together, you can <b>concentrate on your studies</b> and making the most of your time in Bath. <b>UniBills.com</b> takes care of all the details, leaving you with more time to enjoy student life. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience of <b>all bills inclusive</b> living.</p><a id = "cheap_3_bedroom_student_houses_in_the_oval,_bath"> <h2>Cheap 3 Bedroom Student Houses in The Oval, Bath</h2></a><p><Portlet location="REGION^61729" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_the_oval,_bath__recently_added"> <h2>3 Bedroom Student Houses in The Oval, Bath - Recently Added</h2></a><p><Portlet location="REGION^61729" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_the_oval,_bath__recently_reduced"> <h2>3 Bedroom Student Houses in The Oval, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61729" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_houses_in_the_oval,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Houses in The Oval, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 3-bedroom house in <b>Bath</b>? Our property portal is here to help you find the ideal student accommodation in The Oval, <b>Bath</b>, Somerset. Close to both the University of <b>Bath</b> and <b>Bath</b> Spa University, this vibrant area offers a great mix of amenities and a lively student community. Whether you're looking for a spacious house to share with friends or a cozy apartment to call your own, our portal has a wide range of options to suit your needs and budget.</p><a id = "3_bedroom_student_houses_in_the_oval,_bath__private_rental_sector"> <h2>3 Bedroom Student Houses in The Oval, Bath - Private Rental Sector</h2></a><p>Looking for a convenient and comfortable living arrangement in Bath, Somerset? Consider renting one of the lovely 3 bedroom houses in The Oval. These properties offer ample space for families or roommates, with the added benefit of having <b>bills included</b> in the rental price. Imagine the peace of mind of not having to worry about separate utility payments each month. Additionally, these houses come <b>fully furnished</b>, saving you the time and hassle of furnishing the place yourself. The Oval is a charming and well-connected neighborhood in Bath, making it easy to access all the amenities and attractions the city has to offer. Don't miss out on the opportunity to live in a cozy and convenient 3 bedroom house in The Oval, Bath, Somerset, Bath - it's the perfect blend of comfort and convenience.</p><a id = "3_bedroom_student_houses_in_the_oval,_bath__fully_furnished"> <h2>3 Bedroom Student Houses in The Oval, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 3 Bedroom Houses in The Oval, Bath, Somerset, Bath</b>? Look no further! These houses are the perfect solution for students or families looking for a hassle-free living experience. In The Oval, it is normal for student Houses to be fully furnished, providing everything you need to feel at home right away. From cozy bedrooms to spacious living areas and modern kitchens, these houses offer convenience and comfort. Located in the charming city of Bath, Somerset, you'll have easy access to all the amenities and attractions this historical city has to offer. Don't worry about buying furniture or appliances – these houses come ready for you to move in and start enjoying your new home. Experience the convenience and comfort of fully furnished living in The Oval, Bath, Somerset, Bath.</p><a id = "how_close_is_the_oval_to_the_city_center"> <h2>How close is The Oval to the City Center</h2></a><p><b>The Oval</b> is conveniently situated only 1.5 <b>miles</b> away from <b>Bath city center</b>, making it a prime location for those looking to explore all that this historic city has to offer. With its close proximity, visitors staying at <b>The Oval</b> can easily access the many attractions and amenities that Bath has to offer. Whether it's visiting the iconic Roman Baths, exploring the stunning Georgian architecture, or enjoying a leisurely stroll along the charming streets, guests will find themselves just a short distance away from the heart of the city. Additionally, <b>The Oval</b>'s central location means that guests can easily access the city's many shops, restaurants, and cultural landmarks on foot or by public transport. So, whether you're in town for a weekend getaway or a longer stay, <b>The Oval</b>'s close proximity to <b>Bath city center</b> ensures that you can make the most of your time in this beautiful city.</p><a id = "how_close_is_the_oval_to_the_university_of_bath"> <h2>How close is The Oval to the University of Bath</h2></a><p>The Oval is conveniently located close to the prestigious <b>University of Bath</b>, being just a few <b>miles</b> away from the campus. Students can easily reach The Oval from the <b>University of Bath</b> using different modes of transportation. <b>by foot</b>, it is just a short distance away, making it a pleasant walk for those who enjoy the outdoors. For those who prefer public transportation, there is a <b>bus route</b> that connects the <b>University of Bath</b> to The Oval, making it a quick and convenient journey. Additionally, for those who have access to a car, the drive from the <b>University of Bath</b> to The Oval is quick and straightforward. This close proximity makes The Oval an ideal location for <b>University of Bath</b> students looking for a convenient and accessible place to live.</p><a id = "how_close_is_the_oval_to_the_bath_spa_university"> <h2>How close is The Oval to the Bath Spa University</h2></a><p><b>Bath Spa University</b> is conveniently located close to The Oval, making it easily accessible by various means of transportation. The university is just a few <b>miles</b> away from The Oval, which means it is within a short travel distance for students and visitors alike. If you prefer walking, it would take around 30-40 minutes to reach <b>Bath Spa University</b> from The Oval. Alternatively, you can hop on a bus that runs frequently between these two locations, making the journey quick and hassle-free. The <b>bus route</b> is a convenient option for those who prefer not to walk or drive. <b>by bus</b>, the commute would be around 10-15 minutes. If you choose to drive, the journey <b>by car</b> would take approximately 5-10 minutes, depending on traffic conditions. This close proximity between The Oval and <b>Bath Spa University</b> provides students and visitors with easy access to the campus facilities and amenities.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 3-bedroom student house in The Oval, Bath can be an exciting yet challenging process. With a variety of options available, students have the opportunity to find a comfortable and convenient living space near campus. From spacious bedrooms to modern amenities, these houses offer the perfect setting for studying and socializing. It is important to carefully consider factors such as location, budget, and lease terms when making a decision. Overall, The Oval provides a vibrant and student-friendly community, making it a desirable location for those looking to rent a student house. With proper research and planning, students can find the ideal 3-bedroom house that meets their needs and enhances their college experience.</p></>)
};

export default BathTheOvalHouse3;