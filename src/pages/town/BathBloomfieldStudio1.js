
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


const  BathBloomfieldStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Bloomfield, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Bloomfield, Bath</b> for the academic year 2024. 
<b>Studio Apartments for Students in Bloomfield, Bath</b> are in a great location for students attending local universities. These apartments offer a convenient and comfortable living space for students looking for a place to call home during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-bloomfield-bath.png')} alt='Studio Apartments for Students in Bloomfield, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Bloomfield, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71095&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Bloomfield, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bloomfield,_bath_pp/pm">Prices for Studio Apartments for Students in Bloomfield, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__all_bills_inclusive">Studio Apartments for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_bloomfield,_bath">Cheap Studio Apartments for Students in Bloomfield, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__recently_added">Studio Apartments for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__recently_reduced">Studio Apartments for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_bloomfield,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Bloomfield, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__private_rental_sector">Studio Apartments for Students in Bloomfield, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__fully_furnished">Studio Apartments for Students in Bloomfield, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_bloomfield_to_the_city_center">How close is Bloomfield to the City Center</a></li><li><a href = "#how_close_is_bloomfield_to_the_university_of_bath">How close is Bloomfield to the University of Bath</a></li><li><a href = "#how_close_is_bloomfield_to_the_bath_spa_university">How close is Bloomfield to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bloomfield,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Bloomfield, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a stress-free living arrangement in Bath, Somerset? Look no further than <b>UniBills.com</b> for your 1 bedroom student studio in Bloomfield. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all your bills, including utilities, internet, and even council tax, rolled into one convenient payment, you can <b>concentrate on your studies</b> without the worry of managing multiple bills. <b>UniBills.com</b> takes care of everything, allowing you to relax and focus on what's important. Say goodbye to the headache of budgeting and coordinating various payments – simplify your life and streamline your living experience by opting for an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make student living in Bath a breeze.</p><a id = "cheap_studio_apartments_for_students_in_bloomfield,_bath"> <h2>Cheap Studio Apartments for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__recently_added"> <h2>Studio Apartments for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Studio Apartments for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_bloomfield,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Bloomfield, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a 1 Bedroom Studio in Bloomfield, <b>Bath</b>, Somerset? Our property portal is here to help! With a wide range of <b>student Studios</b> available in this vibrant and historic city, you are sure to find the perfect place to call home during your time at the University of <b>Bath</b> or <b>Bath</b> Spa University. Whether you prefer a cosy studio close to campus or a modern apartment with all the amenities, our portal makes it easy to browse and compare listings to find the ideal 1 Bedroom Studio for your needs. Don't waste time scrolling through countless websites – let us streamline your search and help you secure a comfortable and convenient living space in <b>Bath</b>.</p><a id = "studio_apartments_for_students_in_bloomfield,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Bloomfield, Bath - Private Rental Sector</h2></a><p>If you're looking for a hassle-free living experience in Bloomfield, Bath, Somerset, look no further than the private rental sector offering <b>1 Bedroom Studios in Bloomfield, Bath, Somerset, Bath</b>. These studios are perfect for individuals seeking a cozy and convenient living space. What sets these studios apart is that they come <b>fully furnished</b>, saving you the time and effort of having to furnish them yourself. Additionally, many of these studios include <b>bills included</b> in the rent, making budgeting a breeze. With easy access to local amenities and public transportation, renting a 1 Bedroom Studio in Bloomfield ensures a comfortable and stress-free lifestyle.</p><a id = "studio_apartments_for_students_in_bloomfield,_bath__fully_furnished"> <h2>Studio Apartments for Students in Bloomfield, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 1 Bedroom Studios in Bloomfield, Bath, Somerset, Bath</b>? Look no further! These studios offer the convenience of moving in without the hassle of purchasing and moving furniture. With all the necessary pieces already provided, it's easy to settle in and make the space your own. In Bloomfield, Bath, Somerset, Bath, it is normal for student Studios to be fully furnished, making it a popular choice for students and young professionals looking for a hassle-free living arrangement. These studios come equipped with everything you need for comfortable living, from a cozy bed to a functional kitchenette. Don't waste time and energy searching for furniture when you can enjoy the ease and comfort of a fully furnished studio in Bloomfield, Bath.</p><a id = "how_close_is_bloomfield_to_the_city_center"> <h2>How close is Bloomfield to the City Center</h2></a><p><b>Bloomfield</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it an ideal place to stay for those looking to explore this charming historic city. Situated only a short drive or bus ride away, <b>Bloomfield</b> offers a peaceful retreat from the bustling city center while still being within easy reach of all the main attractions and amenities that Bath has to offer. Whether you want to visit the iconic Roman Baths, explore the stunning Bath Abbey, or simply wander around the picturesque streets lined with Georgian architecture, <b>Bloomfield</b> provides a perfect base for your adventures in Bath. With its proximity to the city center, guests can enjoy the best of both worlds – a tranquil setting in <b>Bloomfield</b> and easy access to the vibrant heart of Bath.</p><a id = "how_close_is_bloomfield_to_the_university_of_bath"> <h2>How close is Bloomfield to the University of Bath</h2></a><p>Located just 1.5 <b>miles</b> away from the <b>University of Bath</b>, Bloomfield is conveniently close to the campus, making it an ideal choice for students and faculty looking for easy access to university facilities. For those who prefer to commute <b>by foot</b>, the university is just a short 30-minute walk away. However, for those who prefer a quicker mode of transportation, there are several <b>bus route</b>s that connect Bloomfield to the university, with a travel time of around 10 minutes <b>by bus</b>. Additionally, for those with their own transportation, the university is a mere 5-minute drive away, providing a quick and convenient option for getting to campus. Overall, Bloomfield's proximity to the <b>University of Bath</b> makes it a great location for those looking for a convenient and accessible living arrangement while studying or working at the university.</p><a id = "how_close_is_bloomfield_to_the_bath_spa_university"> <h2>How close is Bloomfield to the Bath Spa University</h2></a><p>Bloomfield is conveniently located in close proximity to <b>Bath Spa University</b>, making it a popular choice for students looking for accommodation near campus. The university is just a few <b>miles</b> away, making it easily accessible <b>by foot</b>, bus, or car. For those who prefer walking, the university is about a 30-minute walk from Bloomfield, providing a scenic route through the charming city of Bath. Alternatively, the <b>bus route</b> connecting Bloomfield to the university is a convenient option for students looking for a quick and easy commute. <b>by car</b>, the journey to <b>Bath Spa University</b> from Bloomfield takes around 10 minutes, offering students the flexibility to travel whenever necessary. With its close proximity to the university and various transportation options, Bloomfield provides an ideal location for students looking for a convenient and accessible place to live during their academic pursuits.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for studio apartments for students in Bloomfield, Bath can be a daunting task but with the right approach, it can also be a rewarding experience. By focusing on key factors such as location, amenities, and budget, students can find the perfect affordable living space that suits their needs. The vibrant community of Bloomfield offers a convenient and lively atmosphere for students to thrive in, with easy access to local shops, restaurants, and public transportation. Additionally, studio apartments provide a cozy and private space for students to focus on their studies while still being a part of a bustling student community. Overall, finding a studio apartment in Bloomfield, Bath is a great option for students looking for a balance between academics and social life.</p></>)
};

export default BathBloomfieldStudio1;