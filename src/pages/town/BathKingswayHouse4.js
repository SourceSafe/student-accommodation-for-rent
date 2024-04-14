
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


const  BathKingswayHouse4 = () => 
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

    return (<><h1>4 Bedroom Student Houses in Kingsway, Bath</h1><p>We have listings for <b>4 Bedroom Student Houses in Kingsway, Bath</b> for the academic year 2024.

<b>4 Bedroom Student Houses in Kingsway, Bath</b> are ideal for students looking to live in a spacious and convenient location in Bath. These properties offer ample space for housemates to live comfortably while being close to local amenities and public transportation options. Living in a 4 Bedroom Student House in Kingsway, Bath provides students with the opportunity to create a supportive and communal living environment while pursuing their academic goals.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-houses-in-kingsway-bath.png')} alt='4 Bedroom Student Houses in Kingsway, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Houses in Kingsway, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71102&type=House&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Houses in Kingsway, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_houses_in_kingsway,_bath_pp/pm">Prices for 4 Bedroom Student Houses in Kingsway, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_houses_in_kingsway,_bath__all_bills_inclusive">4 Bedroom Student Houses in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_houses_in_kingsway,_bath">Cheap 4 Bedroom Student Houses in Kingsway, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_kingsway,_bath__recently_added">4 Bedroom Student Houses in Kingsway, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_houses_in_kingsway,_bath__recently_reduced">4 Bedroom Student Houses in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_houses_in_kingsway,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Houses in Kingsway, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_kingsway,_bath__private_rental_sector">4 Bedroom Student Houses in Kingsway, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_houses_in_kingsway,_bath__fully_furnished">4 Bedroom Student Houses in Kingsway, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_kingsway_to_the_city_center">How close is Kingsway to the City Center</a></li><li><a href = "#how_close_is_kingsway_to_the_university_of_bath">How close is Kingsway to the University of Bath</a></li><li><a href = "#how_close_is_kingsway_to_the_bath_spa_university">How close is Kingsway to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_houses_in_kingsway,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Houses in Kingsway, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Houses in Kingsway, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_houses_in_kingsway,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Houses in Kingsway, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student house in Kingsway, Bath, Somerset can make your life as a student much easier. By signing up with <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by them. No need to worry about splitting bills with housemates or remembering to pay different utilities each month – everything is taken care of for you. With all bills included, you can <b>concentrate on your studies</b> and not have the stress of managing multiple bills. <b>UniBills.com</b> offers a convenient solution that allows you to budget effectively and focus on your education without any distractions. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience.</p><a id = "cheap_4_bedroom_student_houses_in_kingsway,_bath"> <h2>Cheap 4 Bedroom Student Houses in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_kingsway,_bath__recently_added"> <h2>4 Bedroom Student Houses in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_kingsway,_bath__recently_reduced"> <h2>4 Bedroom Student Houses in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_houses_in_kingsway,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Houses in Kingsway, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 4 bedroom student house in Kingsway, <b>Bath</b>, Somerset? Look no further than our property portal! Our platform offers a wide range of <b>4 Bedroom Houses</b> in the desirable area of <b>Bath</b>, ideal for students attending the University of <b>Bath</b> or <b>Bath</b> Spa University. Located in the vibrant city of <b>Bath</b>, these <b>student Houses</b> provide a comfortable and convenient living space for students. With easy access to campus and nearby amenities, our listings are sure to meet your needs. Whether you're looking for a cozy 4 bedroom house or a spacious one for you and your friends, we have options to suit every preference.</p><a id = "4_bedroom_student_houses_in_kingsway,_bath__private_rental_sector"> <h2>4 Bedroom Student Houses in Kingsway, Bath - Private Rental Sector</h2></a><p>If you are looking for a spacious and comfortable living arrangement in Bath, Somerset, then the private rental sector offers some excellent options. The <b>4 Bedroom Houses in Kingsway, Bath, Somerset, Bath</b> are highly sought after for those seeking a larger property for their family or to share with friends. Many of these houses come <b>fully furnished</b>, allowing for a hassle-free move-in process. Additionally, some property owners offer <b>bills included</b> in the rent, making budgeting easier for tenants. Living in a 4-bedroom house provides plenty of space for everyone to have their own privacy while still enjoying communal areas for socializing. With easy access to local amenities and the beautiful city of Bath on your doorstep, renting a 4-bedroom house in Kingsway is a fantastic choice for those looking for a comfortable and convenient living arrangement.</p><a id = "4_bedroom_student_houses_in_kingsway,_bath__fully_furnished"> <h2>4 Bedroom Student Houses in Kingsway, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 4 Bedroom Houses in Kingsway, Bath, Somerset, Bath</b>? Look no further! These spacious and modern houses are perfect for students or families looking for a comfortable and convenient living space. With four bedrooms, there is plenty of room for everyone, and the houses come fully equipped with all the necessary furniture and appliances, making moving in a breeze. In Bath, <b>it is normal for student Houses to be fully furnished furnished</b>, and these properties are no exception. Located in the bustling Kingsway area, you'll have easy access to all the amenities and attractions that Bath has to offer.</p><a id = "how_close_is_kingsway_to_the_city_center"> <h2>How close is Kingsway to the City Center</h2></a><p><b>Kingsway</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it an ideal base for exploring all that this vibrant city has to offer. Whether you're in Bath for a relaxing weekend getaway or a business trip, <b>Kingsway</b>'s proximity to the city center means you're never far from the action. With its historic landmarks, charming shops, and bustling restaurants, <b>Bath city center</b> is a must-visit destination for any traveler. From <b>Kingsway</b>, you can easily access popular attractions like the Roman Baths, the Royal Crescent, and the Thermae Bath Spa. Whether you prefer to stroll through the picturesque streets or hop on a bus for a quick ride into town, <b>Kingsway</b>'s location ensures that you can make the most of your time in Bath. So, if you're looking for accommodation that's close to all the excitement, look no further than <b>Kingsway</b> for a convenient and comfortable stay in <b>Bath city center</b>.</p><a id = "how_close_is_kingsway_to_the_university_of_bath"> <h2>How close is Kingsway to the University of Bath</h2></a><p>Kingsway is conveniently located near the <b>University of Bath</b>, making it a prime choice for students seeking accommodation close to campus. Situated just a few <b>miles</b> away, the <b>University of Bath</b> is easily accessible from Kingsway <b>by foot</b>, bus, or car. For those wanting to enjoy a leisurely stroll to school, it is a pleasant walk that allows you to take in the surrounding scenery. Alternatively, the university is also well-served by a reliable <b>bus route</b>, providing a quick and convenient transportation option for those who prefer to ride. Additionally, students with vehicles will find that the university is just a short drive away, making commuting a breeze. Overall, Kingsway's proximity to the <b>University of Bath</b> offers students the best of both worlds: a peaceful living environment close to campus facilities.</p><a id = "how_close_is_kingsway_to_the_bath_spa_university"> <h2>How close is Kingsway to the Bath Spa University</h2></a><p>Kingsway is conveniently located close to <b>Bath Spa University</b>, just a few <b>miles</b> away. The university can be easily reached <b>by foot</b>, with a scenic walk taking around 30 minutes. Alternatively, there is a direct <b>bus route</b> connecting Kingsway to <b>Bath Spa University</b>, which makes travel quick and convenient. <b>by bus</b>, the journey takes around 15-20 minutes, depending on traffic. For those who prefer to drive, <b>Bath Spa University</b> can be reached in approximately 10 minutes <b>by car</b>. This close proximity makes it easy for students and faculty members living in Kingsway to access all that <b>Bath Spa University</b> has to offer, from the beautiful campus to the wide range of academic and extracurricular opportunities available.  So whether you prefer to stroll, take the bus, or drive, getting to <b>Bath Spa University</b> from Kingsway is a breeze.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the bustling student hub of Kingsway, Bath, finding a 4-bedroom student house can be a challenging yet rewarding experience. With a plethora of options available, ranging from cozy cottages to modern apartments, students are spoiled for choice when it comes to choosing their ideal living space. The search for the perfect accommodation can be time-consuming, but it's crucial to consider factors such as location, budget, and amenities to ensure a comfortable and convenient living situation. Exploring the vibrant neighborhood of Kingsway offers students a unique opportunity to immerse themselves in Bath's rich culture and bustling student community. Additionally, living in a shared 4-bedroom house fosters a sense of camaraderie and friendship among housemates, making for unforgettable memories and meaningful friendships. In conclusion, while the search for a 4-bedroom student house in Kingsway may require patience and diligence, the rewards of finding the perfect home away from home are well worth the effort.</p></>)
};

export default BathKingswayHouse4;