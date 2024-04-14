
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


const  BathRaglandsHouse3 = () => 
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

    return (<><h1>3 Bedroom Student Houses in Raglands, Bath</h1><p>We have listings for <b>3 Bedroom Student Houses in Raglands, Bath</b> for the academic year 2024.

Located in the beautiful city of Bath, 3 Bedroom Student Houses in Raglands offer spacious and comfortable accommodation for students studying in the area. These houses provide a perfect environment for students to live and study in a vibrant and historic city like Bath. With convenient access to local amenities and universities, these student houses are ideal for those looking for a cozy and convenient place to call home during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-houses-in-raglands-bath.png')} alt='3 Bedroom Student Houses in Raglands, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Houses in Raglands, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71111&type=House&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Houses in Raglands, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_houses_in_raglands,_bath_pp/pm">Prices for 3 Bedroom Student Houses in Raglands, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_houses_in_raglands,_bath__all_bills_inclusive">3 Bedroom Student Houses in Raglands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_houses_in_raglands,_bath">Cheap 3 Bedroom Student Houses in Raglands, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_raglands,_bath__recently_added">3 Bedroom Student Houses in Raglands, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_houses_in_raglands,_bath__recently_reduced">3 Bedroom Student Houses in Raglands, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_houses_in_raglands,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Houses in Raglands, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_raglands,_bath__private_rental_sector">3 Bedroom Student Houses in Raglands, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_houses_in_raglands,_bath__fully_furnished">3 Bedroom Student Houses in Raglands, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_raglands_to_the_city_center">How close is Raglands to the City Center</a></li><li><a href = "#how_close_is_raglands_to_the_university_of_bath">How close is Raglands to the University of Bath</a></li><li><a href = "#how_close_is_raglands_to_the_bath_spa_university">How close is Raglands to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_houses_in_raglands,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Houses in Raglands, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£717 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Houses in Raglands, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71111")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_houses_in_raglands,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Houses in Raglands, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 3 bedroom student house in Raglands, Bath, Somerset can make your life as a student much easier. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without the stress of managing multiple bills. With all your utilities, including water, electricity, gas, and even internet, bundled into one monthly payment, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the frustration of sorting through numerous bills and chasing up housemates for their share. By opting for this service, you can streamline your living expenses and have more time to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience of an <b>all bills inclusive</b> service for your student house.</p><a id = "cheap_3_bedroom_student_houses_in_raglands,_bath"> <h2>Cheap 3 Bedroom Student Houses in Raglands, Bath</h2></a><p><Portlet location="REGION^71111" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_raglands,_bath__recently_added"> <h2>3 Bedroom Student Houses in Raglands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71111" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_raglands,_bath__recently_reduced"> <h2>3 Bedroom Student Houses in Raglands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71111" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_houses_in_raglands,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Houses in Raglands, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 3 bedroom student house in Raglands, <b>Bath</b>, Somerset? Look no further than our property portal! We specialize in helping students find ideal accommodations close to the University of <b>Bath</b> and <b>Bath</b> Spa University. Our listings include a variety of <b>3 Bedroom Houses</b> that are perfect for sharing with friends. Located in the beautiful area of Raglands, <b>Bath</b>, these properties offer convenient access to campus, as well as all the amenities and attractions that <b>Bath</b> has to offer.</p><a id = "3_bedroom_student_houses_in_raglands,_bath__private_rental_sector"> <h2>3 Bedroom Student Houses in Raglands, Bath - Private Rental Sector</h2></a><p>Looking to rent a private 3-bedroom house in Raglands, Bath, Somerset? Look no further! The private rental sector in this area offers a fantastic selection of 3 bedroom houses perfect for families or sharers. Many of these properties come <b>fully furnished</b>, making your move-in process a breeze. With <b>bills included</b> in some rental options, you can enjoy a hassle-free living experience without the stress of managing multiple payments. Whether you're looking for a cozy cottage or a modern townhouse, there are plenty of options available in Raglands, Bath, Somerset. Don't miss out on the opportunity to secure a beautiful 3-bedroom home in this vibrant and historic city.</p><a id = "3_bedroom_student_houses_in_raglands,_bath__fully_furnished"> <h2>3 Bedroom Student Houses in Raglands, Bath - Fully Furnished</h2></a><p>Looking for fully furnished 3 Bedroom Houses in Raglands, Bath, Somerset? Look no further! These delightful properties provide all the comfort and convenience you need in a beautiful location. Raglands is known for its picturesque streets and vibrant community, making it the perfect place to call home. Whether you're a student looking for a cozy living space or a family seeking a spacious residence, these houses offer the ideal blend of style and functionality. In Bath, it is normal for student houses to be fully furnished, saving you the hassle and expense of buying furniture. Picture yourself relaxing in a stylish living room, cooking up a storm in a modern kitchen, and unwinding in a comfortable bedroom - all without the stress of furnishing it yourself. Don't miss your chance to experience the charm of Raglands with the convenience of fully furnished living spaces.</p><a id = "how_close_is_raglands_to_the_city_center"> <h2>How close is Raglands to the City Center</h2></a><p><b>Raglands</b>, a charming bed and breakfast nestled in the outskirts of <b>Bath city center</b>, is conveniently located just a few <b>miles</b> away from the bustling heart of the city. This idyllic countryside retreat offers the perfect combination of tranquility and access to the lively atmosphere of Bath. Guests can easily explore the city's renowned attractions, such as the Roman Baths, Bath Abbey, and the Royal Crescent, all while enjoying the peaceful setting of <b>Raglands</b>. Whether you are looking to immerse yourself in the rich history and culture of Bath or simply relax in a picturesque countryside setting, <b>Raglands</b> is the ideal destination for your stay. With its close proximity to <b>Bath city center</b>, guests can enjoy the best of both worlds during their visit to this enchanting region.</p><a id = "how_close_is_raglands_to_the_university_of_bath"> <h2>How close is Raglands to the University of Bath</h2></a><p>Raglands, a popular student accommodation choice, is conveniently located close to the <b>University of Bath</b>. Situated just a couple of <b>miles</b> away from the university, students can easily get to campus <b>by foot</b>, <b>by bus</b>, or <b>by car</b>. The university is easily accessible via a direct <b>bus route</b>, making commuting quick and hassle-free for students staying at Raglands. For those who prefer to drive, the journey to the <b>University of Bath</b> only takes a few minutes <b>by car</b>. This proximity to campus not only saves time but also allows students to immerse themselves in university life and take advantage of all the amenities and activities that the university has to offer. With its strategic location and various transportation options, Raglands provides students with a convenient and comfortable living experience near the <b>University of Bath</b>.</p><a id = "how_close_is_raglands_to_the_bath_spa_university"> <h2>How close is Raglands to the Bath Spa University</h2></a><p>Raglands is conveniently located close to <b>Bath Spa University</b>, being only a few <b>miles</b> away from the campus. For students looking for an easy commute, there are transportation options available. The university is easily accessible <b>by bus</b>, with a direct <b>bus route</b> connecting Raglands and <b>Bath Spa University</b>. The distance between Raglands and the university is also walkable, for those who prefer to travel <b>by foot</b>. For students with access to a car, the journey to <b>Bath Spa University</b> can be made in just a short drive. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from Raglands is straightforward and convenient.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 3-bedroom student house in Raglands, Bath can be an exciting yet daunting task. With its close proximity to the university and vibrant student community, finding the perfect accommodation is crucial. Raglands offers a range of 3-bedroom properties, each with unique features and amenities to suit every student's needs. From modern kitchens to spacious living areas, these houses provide a comfortable and convenient living space for students. In conclusion, searching for a 3-bedroom student house in Raglands, Bath requires careful consideration of factors such as location, price, and amenities. By exploring the options available and weighing the pros and cons of each property, students can secure a comfortable and suitable home for their academic journey.</p></>)
};

export default BathRaglandsHouse3;