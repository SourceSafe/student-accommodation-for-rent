
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


const  BathLyncombeValeFlat10 = () => 
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

    return (<><h1>10 Bedroom Student Flats in Lyncombe Vale, Bath</h1><p>We have listings for <b>10 Bedroom Student Flats in Lyncombe Vale, Bath</b> for the academic year 2024.

<b>10 Bedroom Student Flats in Lyncombe Vale, Bath</b> are the perfect accommodation for large groups of students looking to live together in the beautiful city of Bath. These spacious flats offer plenty of room for studying, socializing, and creating a comfortable living environment for the academic year. With easy access to local amenities and the university campus, these flats provide convenience and comfort for students during their time in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/10-bedroom-student-flats-in-lyncombe-vale-bath.png')} alt='10 Bedroom Student Flats in Lyncombe Vale, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='10 Bedroom Student Flats in Lyncombe Vale, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71106&type=Flat&beds=10")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>10 Bedroom Student Flats in Lyncombe Vale, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_10_bedroom_student_flats_in_lyncombe_vale,_bath_pp/pm">Prices for 10 Bedroom Student Flats in Lyncombe Vale, Bath pp/pm</a></li><li><a href = "#10_bedroom_student_flats_in_lyncombe_vale,_bath__all_bills_inclusive">10 Bedroom Student Flats in Lyncombe Vale, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_10_bedroom_student_flats_in_lyncombe_vale,_bath">Cheap 10 Bedroom Student Flats in Lyncombe Vale, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_lyncombe_vale,_bath__recently_added">10 Bedroom Student Flats in Lyncombe Vale, Bath - Recently Added</a></li><li><a href = "#10_bedroom_student_flats_in_lyncombe_vale,_bath__recently_reduced">10 Bedroom Student Flats in Lyncombe Vale, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__10_bedroom_flats_in_lyncombe_vale,_bath,_somerset,_bath">Student Accommodation Portal - 10 Bedroom Flats in Lyncombe Vale, Bath, Somerset, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_lyncombe_vale,_bath__private_rental_sector">10 Bedroom Student Flats in Lyncombe Vale, Bath - Private Rental Sector</a></li><li><a href = "#10_bedroom_student_flats_in_lyncombe_vale,_bath__fully_furnished">10 Bedroom Student Flats in Lyncombe Vale, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_lyncombe_vale_to_the_city_center">How close is Lyncombe Vale to the City Center</a></li><li><a href = "#how_close_is_lyncombe_vale_to_the_university_of_bath">How close is Lyncombe Vale to the University of Bath</a></li><li><a href = "#how_close_is_lyncombe_vale_to_the_bath_spa_university">How close is Lyncombe Vale to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_10_bedroom_student_flats_in_lyncombe_vale,_bath_pp/pm"> <h2>Prices for 10 Bedroom Student Flats in Lyncombe Vale, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton tableButton' title='10 Bedroom Student Flats in Lyncombe Vale, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71106")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "10_bedroom_student_flats_in_lyncombe_vale,_bath__all_bills_inclusive"> <h2>10 Bedroom Student Flats in Lyncombe Vale, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 10-bedroom flat in Lyncombe Vale, Bath, Somerset? Juggling numerous bills can be both time-consuming and stressful, taking away precious time that could be spent studying. By subscribing to an <b>all bills inclusive</b> service, like the one offered by <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With everything from utilities to WiFi covered in one convenient package, you can <b>concentrate on your studies</b> without the worry of managing multiple bills. Save time and energy by opting for an all-inclusive service and simplify your student life. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience easier and more enjoyable.</p><a id = "cheap_10_bedroom_student_flats_in_lyncombe_vale,_bath"> <h2>Cheap 10 Bedroom Student Flats in Lyncombe Vale, Bath</h2></a><p><Portlet location="REGION^71106" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_lyncombe_vale,_bath__recently_added"> <h2>10 Bedroom Student Flats in Lyncombe Vale, Bath - Recently Added</h2></a><p><Portlet location="REGION^71106" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_lyncombe_vale,_bath__recently_reduced"> <h2>10 Bedroom Student Flats in Lyncombe Vale, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71106" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__10_bedroom_flats_in_lyncombe_vale,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 10 Bedroom Flats in Lyncombe Vale, Bath, Somerset, Bath</h2></a><p>Are you searching for spacious accommodation for you and your friends in <b>Bath</b>, Somerset? Look no further than our property portal, where you can find a range of <b>10 Bedroom Flats</b> in the picturesque area of Lyncombe Vale. These <b>student Flats</b> are ideal for those studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, offering ample space for socializing and studying. Located in a charming neighborhood with easy access to local amenities and public transport, these flats provide a comfortable and convenient living environment for students. Don't miss out on the opportunity to secure your dream student accommodation in Lyncombe Vale, <b>Bath</b>. Start your search today on our property portal and find the perfect 10-bedroom flat for your needs.</p><a id = "10_bedroom_student_flats_in_lyncombe_vale,_bath__private_rental_sector"> <h2>10 Bedroom Student Flats in Lyncombe Vale, Bath - Private Rental Sector</h2></a><p>Welcome to the exclusive world of 10-bedroom flats in Lyncombe Vale, Bath, Somerset! These luxurious properties offer unparalleled comfort and convenience for those seeking a spacious and upscale living experience. With <b>bills included</b> in the rent, you can enjoy peace of mind knowing that all your basic utilities are taken care of. Each flat is <b>fully furnished</b> with high-quality furniture and modern appliances, making it easy for you to settle in and start enjoying your new home right away. Whether you're looking for a place to share with friends or accommodating a large family, these 10-bedroom flats provide ample space and privacy for everyone.</p><a id = "10_bedroom_student_flats_in_lyncombe_vale,_bath__fully_furnished"> <h2>10 Bedroom Student Flats in Lyncombe Vale, Bath - Fully Furnished</h2></a><p>Looking for a spacious and convenient living arrangement in Bath, Somerset? Look no further than the fully furnished 10 Bedroom Flats in Lyncombe Vale. These flats offer the perfect combination of comfort and practicality, making them a popular choice among students and professionals alike. Located in the heart of Bath, these flats come equipped with all the essential furniture and amenities you need for a hassle-free living experience. From cozy bedrooms to stylish living areas and fully equipped kitchens, these flats have everything you need to feel right at home. In Lyncombe Vale, Bath, it is normal for student flats to be fully furnished, ensuring that you can move in and start enjoying your new space right away. Don't miss out on the opportunity to live in one of Bath's most sought-after locations in a fully furnished 10 Bedroom Flat in Lyncombe Vale.</p><a id = "how_close_is_lyncombe_vale_to_the_city_center"> <h2>How close is Lyncombe Vale to the City Center</h2></a><p><b>Lyncombe Vale</b> is a beautiful area located just a stone's throw away from <b>Bath city center</b>. Situated only 1.5 <b>miles</b> south of the heart of the city, <b>Lyncombe Vale</b> offers a peaceful retreat while still being close enough to easily access all the attractions and amenities of Bath. Known for its picturesque walking trails and stunning views of the surrounding countryside, <b>Lyncombe Vale</b> provides a perfect combination of nature and convenience. Whether you're looking to explore the historic sites, indulge in the local cuisine, or simply relax in a tranquil setting, <b>Lyncombe Vale</b>'s proximity to <b>Bath city center</b> makes it an ideal location for visitors and residents alike. Experience the best of both worlds by staying in <b>Lyncombe Vale</b>, where you can enjoy the serenity of the countryside while being just a short distance from all the excitement and culture of <b>Bath city center</b>.</p><a id = "how_close_is_lyncombe_vale_to_the_university_of_bath"> <h2>How close is Lyncombe Vale to the University of Bath</h2></a><p>Lyncombe Vale is conveniently located just a few <b>miles</b> away from the prestigious <b>University of Bath</b>. For students looking to commute to the campus, there is a direct <b>bus route</b> that connects Lyncombe Vale to the university, making it easily accessible by public transportation. If you prefer a more active mode of transportation, the university is also within walking distance from Lyncombe Vale, offering a scenic route for those who enjoy a daily stroll. Additionally, for those who prefer the convenience of driving, the <b>University of Bath</b> is a short car journey away from Lyncombe Vale, allowing for easy access to campus facilities. Whether you choose to travel <b>by foot</b>, <b>by bus</b>, or <b>by car</b>, Lyncombe Vale offers an ideal location for students looking to be close to the <b>University of Bath</b> while still enjoying a peaceful and picturesque setting in the Bath area.</p><a id = "how_close_is_lyncombe_vale_to_the_bath_spa_university"> <h2>How close is Lyncombe Vale to the Bath Spa University</h2></a><p>Lyncombe Vale is conveniently located near <b>Bath Spa University</b>, approximately 2.5 <b>miles</b> away. For students looking to commute to the university, there are several transportation options available. <b>by foot</b>, it would take around 50 minutes to reach the campus from Lyncombe Vale. Alternatively, there is a direct <b>bus route</b> that can take you to <b>Bath Spa University</b> in just under 20 minutes, making it a popular choice for students looking for a hassle-free commute. For those who prefer to drive, the journey <b>by car</b> usually takes around 10-15 minutes, depending on traffic. Overall, living in Lyncombe Vale provides easy access to <b>Bath Spa University</b>, making it a great location for students looking for convenient and quick transportation options to and from campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 10-bedroom student flat in Lyncombe Vale, Bath can be a daunting task, but with thorough research and persistence, it is possible to find the perfect accommodation. The location of Lyncombe Vale offers a tranquil and scenic setting, ideal for a peaceful study environment. The availability of 10-bedroom flats provides a great opportunity for large groups of students to live together and split costs effectively. Students can enjoy spacious living areas and privacy, as well as the convenience of being close to local amenities and transport links. Overall, finding a 10-bedroom student flat in Lyncombe Vale, Bath offers an excellent option for those seeking a comfortable and practical living arrangement during their academic years.</p></>)
};

export default BathLyncombeValeFlat10;