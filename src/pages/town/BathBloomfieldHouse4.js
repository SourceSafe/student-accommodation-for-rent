
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


const  BathBloomfieldHouse4 = () => 
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

    return (<><h1>4 Bedroom Student Houses in Bloomfield, Bath</h1><p>We have listings for <b>4 Bedroom Student Houses in Bloomfield, Bath</b> for the academic year 2024.
<b>4 Bedroom Student Houses in Bloomfield, Bath</b> are perfect for students looking for spacious and comfortable accommodation near their university in Bath. These houses offer ample space for studying, relaxing, and socializing with housemates.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-houses-in-bloomfield-bath.png')} alt='4 Bedroom Student Houses in Bloomfield, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Houses in Bloomfield, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71095&type=House&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Houses in Bloomfield, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_houses_in_bloomfield,_bath_pp/pm">Prices for 4 Bedroom Student Houses in Bloomfield, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_houses_in_bloomfield,_bath__all_bills_inclusive">4 Bedroom Student Houses in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_houses_in_bloomfield,_bath">Cheap 4 Bedroom Student Houses in Bloomfield, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_bloomfield,_bath__recently_added">4 Bedroom Student Houses in Bloomfield, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_houses_in_bloomfield,_bath__recently_reduced">4 Bedroom Student Houses in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_houses_in_bloomfield,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Houses in Bloomfield, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_bloomfield,_bath__private_rental_sector">4 Bedroom Student Houses in Bloomfield, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_houses_in_bloomfield,_bath__fully_furnished">4 Bedroom Student Houses in Bloomfield, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_bloomfield_to_the_city_center">How close is Bloomfield to the City Center</a></li><li><a href = "#how_close_is_bloomfield_to_the_university_of_bath">How close is Bloomfield to the University of Bath</a></li><li><a href = "#how_close_is_bloomfield_to_the_bath_spa_university">How close is Bloomfield to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_houses_in_bloomfield,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Houses in Bloomfield, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Houses in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_houses_in_bloomfield,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Houses in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Living in a 4 bedroom student house in Bloomfield, Bath, Somerset can be a fantastic experience, but managing bills and utilities can be a real headache. That's where subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can make a world of difference. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by them, giving you the convenience of knowing that all your bills - including water, gas, electricity, and even internet - are all taken care of with one simple payment. This means you can <b>concentrate on your studies</b> and social life, without the stress of budgeting and splitting bills with your housemates. To simplify your student life in Bath, Bloomfield, why not get a quote from <b>UniBills.com</b> or any accommodation on this website? Say goodbye to bill-related stress and hello to a more enjoyable student living experience.</p><a id = "cheap_4_bedroom_student_houses_in_bloomfield,_bath"> <h2>Cheap 4 Bedroom Student Houses in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_bloomfield,_bath__recently_added"> <h2>4 Bedroom Student Houses in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_bloomfield,_bath__recently_reduced"> <h2>4 Bedroom Student Houses in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_houses_in_bloomfield,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Houses in Bloomfield, Bath, Somerset, Bath</h2></a><p>Are you searching for comfortable and convenient 4 Bedroom <b>student Houses</b> in Bloomfield, <b>Bath</b>, Somerset? Look no further than our property portal, where you can easily find the perfect accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our listings in <b>Bath</b> offer spacious <b>4 Bedroom Houses</b> that are ideal for students looking for a cozy and welcoming home. Located in the charming neighborhood of Bloomfield, <b>Bath</b>, these properties provide a peaceful retreat while still being close to the vibrant city center. With our user-friendly platform, you can easily browse through various options and choose the one that suits your preferences and budget. Don't miss out on the opportunity to secure a fantastic student house in <b>Bath</b> with the help of our property portal.</p><a id = "4_bedroom_student_houses_in_bloomfield,_bath__private_rental_sector"> <h2>4 Bedroom Student Houses in Bloomfield, Bath - Private Rental Sector</h2></a><p>Are you looking for a spacious and comfortable living space in Bloomfield, Bath, Somerset, Bath? The private rental sector offers a selection of stunning 4 bedroom houses, perfect for families or professionals looking for a stylish home. These properties come <b>fully furnished</b>, providing you with everything you need to settle in quickly and make yourself at home. With <b>bills included</b> in the rent, you can enjoy a hassle-free living experience without the stress of managing additional expenses. The private rental sector in Bloomfield offers convenience, comfort, and a sense of home, making it an ideal choice for those seeking a well-equipped and well-maintained living space in a charming location.</p><a id = "4_bedroom_student_houses_in_bloomfield,_bath__fully_furnished"> <h2>4 Bedroom Student Houses in Bloomfield, Bath - Fully Furnished</h2></a><p>Welcome to the charming neighborhood of Bloomfield in Bath, Somerset, where fully furnished 4-bedroom houses await you. These spacious and modern homes are perfect for families or individuals looking for a comfortable living experience. Located in the heart of Bath, these properties offer convenience as well as comfort. With all the necessary furniture and appliances already provided, moving in is a breeze. In this area, it is normal for student houses to be fully furnished, making it an ideal choice for students looking for a hassle-free living arrangement. The houses in Bloomfield boast ample living space, cozy bedrooms, and a well-equipped kitchen, perfect for hosting gatherings or simply relaxing after a long day. Don't miss out on the opportunity to enjoy the best of Bath living in these fully furnished 4-bedroom houses.</p><a id = "how_close_is_bloomfield_to_the_city_center"> <h2>How close is Bloomfield to the City Center</h2></a><p><b>Bloomfield</b> is conveniently located just a few <b>miles</b> from <b>Bath city center</b>, making it an ideal place to stay for visitors looking to explore all that this historic city has to offer. Situated only a short distance away, <b>Bloomfield</b> provides easy access to Bath's famous attractions, including the Roman Baths, Bath Abbey, and the Royal Crescent. Whether you're interested in soaking in the natural thermal waters at Thermae Bath Spa or strolling through the charming streets lined with Georgian architecture, staying in <b>Bloomfield</b> puts you within reach of all the action. The short distance between <b>Bloomfield</b> and <b>Bath city center</b> means that you can easily hop on a bus or take a leisurely walk to immerse yourself in the vibrant atmosphere of this UNESCO World Heritage Site. With its proximity to the city center, <b>Bloomfield</b> offers the perfect combination of tranquility and convenience for your visit to Bath.</p><a id = "how_close_is_bloomfield_to_the_university_of_bath"> <h2>How close is Bloomfield to the University of Bath</h2></a><p>Bloomfield is conveniently located just a stone's throw away from the prestigious <b>University of Bath</b> campus. In fact, the two are only a few <b>miles</b> apart, making it easily accessible for students living in the Bloomfield community. For those who prefer to travel <b>by foot</b>, the university is a pleasant 30-minute walk away. Alternatively, there is a convenient <b>bus route</b> that runs directly from Bloomfield to the university, providing a quick and efficient way to reach campus in just a few minutes. If travelling <b>by car</b> is more your style, the journey between Bloomfield and the <b>University of Bath</b> is a short drive, allowing for a stress-free commute for both students and faculty members. This close proximity provides residents of Bloomfield with easy access to all that the <b>University of Bath</b> has to offer, from world-class academic programs to vibrant campus activities.</p><a id = "how_close_is_bloomfield_to_the_bath_spa_university"> <h2>How close is Bloomfield to the Bath Spa University</h2></a><p>Nestled in the picturesque town of Bloomfield, just a stone's throw away from <b>Bath Spa University</b>, this idyllic location is the perfect setting for students to pursue their academic endeavors. Only a few <b>miles</b> separate Bloomfield from the university campus, making it easily accessible <b>by foot</b>, <b>by bus</b>, or <b>by car</b>. For those who prefer to take public transportation, a convenient <b>bus route</b> connects Bloomfield to <b>Bath Spa University</b>, allowing students to commute effortlessly. Alternatively, driving to the university is a quick and straightforward journey, providing flexibility and convenience for those with their own transportation. With its close proximity to <b>Bath Spa University</b>, Bloomfield offers an ideal living environment for students seeking a balance between academics and a peaceful, scenic backdrop.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Summary and conclusion about looking for 4 Bedroom Student Houses in Bloomfield, Bath:</p><p>In the hunt for student accommodation in Bloomfield, Bath, finding a 4-bedroom house can be a challenging yet rewarding task. With its vibrant student community, Bloomfield offers an ideal living environment for students seeking a balance between academic success and social life. When searching for a 4-bedroom house, it's essential to consider factors such as location, amenities, and budget. Opting for a house in Bloomfield ensures easy access to the University campus, local shops, and entertainment venues. Moreover, sharing a house with three other students can foster a sense of camaraderie and support throughout your academic journey. In conclusion, securing a 4-bedroom student house in Bloomfield, Bath, promises a comfortable and enriching living experience that enhances your university years.</p></>)
};

export default BathBloomfieldHouse4;