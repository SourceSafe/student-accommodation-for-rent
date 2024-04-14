
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


const  BathYomedeParkFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Yomede Park, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Yomede Park, Bath</b> for the academic year 2024.

<b>2 Bedroom Student Flats in Yomede Park, Bath</b> offer a convenient and comfortable living space for students in Bath. Located in a prime location, these flats provide easy access to campus, amenities, and public transportation, making them an ideal choice for student living in the city. With modern facilities and a vibrant community, Yomede Park is a popular choice for students looking for a great place to call home during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-yomede-park-bath.png')} alt='2 Bedroom Student Flats in Yomede Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Yomede Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61731&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Yomede Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_yomede_park,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Yomede Park, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_yomede_park,_bath__all_bills_inclusive">2 Bedroom Student Flats in Yomede Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_yomede_park,_bath">Cheap 2 Bedroom Student Flats in Yomede Park, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_yomede_park,_bath__recently_added">2 Bedroom Student Flats in Yomede Park, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_yomede_park,_bath__recently_reduced">2 Bedroom Student Flats in Yomede Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_yomede_park,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Yomede Park, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_yomede_park,_bath__private_rental_sector">2 Bedroom Student Flats in Yomede Park, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_yomede_park,_bath__fully_furnished">2 Bedroom Student Flats in Yomede Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_yomede_park_to_the_city_center">How close is Yomede Park to the City Center</a></li><li><a href = "#how_close_is_yomede_park_to_the_university_of_bath">How close is Yomede Park to the University of Bath</a></li><li><a href = "#how_close_is_yomede_park_to_the_bath_spa_university">How close is Yomede Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_yomede_park,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Yomede Park, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£707 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Yomede Park, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61731")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_yomede_park,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Yomede Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of budgeting and managing multiple bills while trying to focus on your studies? Look no further than <b>UniBills.com</b> for the perfect solution. By subscribing to their <b>all bills inclusive</b> service for your 2 bedroom student flat in Yomede Park, Bath, Somerset, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. Imagine never having to worry about electricity, water, or internet bills again. With <b>UniBills.com</b> taking care of everything for you, you can <b>concentrate on your studies</b> and enjoy a stress-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student life today. Trust <b>UniBills.com</b> to handle all your bills, so you can focus on what truly matters – your education.</p><a id = "cheap_2_bedroom_student_flats_in_yomede_park,_bath"> <h2>Cheap 2 Bedroom Student Flats in Yomede Park, Bath</h2></a><p><Portlet location="REGION^61731" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_yomede_park,_bath__recently_added"> <h2>2 Bedroom Student Flats in Yomede Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^61731" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_yomede_park,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Yomede Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61731" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_yomede_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Yomede Park, Bath, Somerset, Bath</h2></a><p>Looking for 2 bedroom <b>student Flats</b> in <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect accommodation in Yomede Park, conveniently located near the University of <b>Bath</b> and <b>Bath</b> Spa University. These <b>student Flats</b> offer a comfortable living space with two bedrooms, ideal for sharing with a friend or classmate. Yomede Park in <b>Bath</b> is a sought-after area for students, offering a vibrant community and easy access to local amenities. With our user-friendly search filters, finding the right 2 bedroom flat in Yomede Park, <b>Bath</b>, Somerset, has never been easier. Take the stress out of house hunting and let us help you find your ideal student accommodation in this lively and dynamic area.</p><a id = "2_bedroom_student_flats_in_yomede_park,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Yomede Park, Bath - Private Rental Sector</h2></a><p>For those seeking a comfortable and convenient living arrangement in the heart of Bath, look no further than the 2 Bedroom Flats in Yomede Park, Bath, Somerset. Situated in the picturesque Yomede Park, these flats offer a perfect blend of urban convenience and peaceful surroundings. What sets these flats apart is the convenience of having <b>bills included</b> in the rent, making budgeting a breeze. Moreover, each flat is <b>fully furnished</b>, providing residents with all the essentials for a comfortable living experience. Whether you're a student looking for a cozy place to study or a professional seeking a relaxing retreat after a busy day, these flats offer the perfect solution. Don't miss out on the opportunity to live in one of Bath's most sought-after residential areas.</p><a id = "2_bedroom_student_flats_in_yomede_park,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Yomede Park, Bath - Fully Furnished</h2></a><p>Looking for a comfortable and convenient living space in the heart of Bath, Somerset? Look no further than the fully furnished 2 Bedroom Flats in Yomede Park, Bath. Nestled in a prime location, these modern flats offer the perfect blend of style and functionality. Each unit is thoughtfully designed and tastefully decorated, providing residents with a cozy and inviting atmosphere to call home. It is normal for student Flats to be fully furnished, and Yomede Park does not disappoint with its high-quality furnishings and amenities. Whether you're a student looking for a space to study and relax or a young professional wanting a hassle-free living arrangement, these flats are perfect for all walks of life. With easy access to local shops, restaurants, and public transportation, Yomede Park offers the ultimate in convenience and comfort.</p><a id = "how_close_is_yomede_park_to_the_city_center"> <h2>How close is Yomede Park to the City Center</h2></a><p><b>Yomede Park</b> is conveniently located just a few <b>miles</b> away from the bustling <b>Bath city center</b>. This means that visitors can easily escape the hustle and bustle of the city and immerse themselves in the tranquility of nature within a short journey. Whether you're looking for a peaceful stroll, a family picnic, or some outdoor recreation, <b>Yomede Park</b> offers a perfect retreat from the urban landscape. Its close proximity to <b>Bath city center</b> makes it a popular destination for locals and tourists alike, providing a quick and easy escape into the greenery. So, if you're in need of some fresh air and green surroundings, <b>Yomede Park</b> is just a stone's throw away from the heart of <b>Bath city center</b>, offering a perfect blend of urban convenience and natural beauty.</p><a id = "how_close_is_yomede_park_to_the_university_of_bath"> <h2>How close is Yomede Park to the University of Bath</h2></a><p>Yomede Park is conveniently close to the <b>University of Bath</b>, being just a few <b>miles</b> away. If you choose to walk, it would take about 25-30 minutes to reach the university campus. Alternatively, you can take the bus, which is an efficient mode of transportation as there is a direct <b>bus route</b> that connects Yomede Park to the <b>University of Bath</b>. <b>by bus</b>, the journey would take around 15-20 minutes, depending on traffic. For those who prefer to drive, it is a short 10-15 minute car ride. This proximity makes it an ideal location for students or faculty members looking for accommodation near the <b>University of Bath</b>.</p><a id = "how_close_is_yomede_park_to_the_bath_spa_university"> <h2>How close is Yomede Park to the Bath Spa University</h2></a><p>Yomede Park is located just a stone's throw away from <b>Bath Spa University</b>, making it a convenient and popular spot for students to unwind and enjoy nature. The park is approximately 1.5 <b>miles</b> away from the university, making it easily accessible <b>by foot</b>, bus, or car. For those looking to take the scenic route, a leisurely walk from campus to Yomede Park would take around 30 minutes. Alternatively, students can hop on a bus that runs directly from the university to the park, making transportation a breeze. If driving is more your style, the park is just a short 5-minute car ride away. With its lush greenery, picturesque walking paths, and tranquil atmosphere, Yomede Park offers the perfect escape from the hustle and bustle of university life.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for 2-bedroom student flats in Yomede Park, Bath can be a rewarding experience for those looking for convenient and comfortable housing options near their educational institutions. With a variety of amenities such as fully furnished rooms, communal spaces for study or relaxation, and proximity to local shops and transportation links, Yomede Park offers a convenient and enjoyable living experience for students. By choosing to reside in the vibrant community of Yomede Park, students can enjoy a balance of academic focus and social interaction, making it an ideal choice for a comfortable and fulfilling student living experience in Bath.</p></>)
};

export default BathYomedeParkFlat2;