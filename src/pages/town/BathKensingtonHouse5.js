
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


const  BathKensingtonHouse5 = () => 
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

    return (<><h1>5 Bedroom Student Houses in Kensington, Bath</h1><p>We have listings for <b>5 Bedroom Student Houses in Kensington, Bath</b> for the academic year 2024. 
<b>5 Bedroom Student Houses in Kensington, Bath</b> offer spacious accommodation suitable for students looking to live together in a convenient and vibrant area of Bath. These houses typically come fully furnished and are located close to various amenities and transport links for easy access to university campuses and the city center.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/5-bedroom-student-houses-in-kensington-bath.png')} alt='5 Bedroom Student Houses in Kensington, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='5 Bedroom Student Houses in Kensington, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61722&type=House&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>5 Bedroom Student Houses in Kensington, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_5_bedroom_student_houses_in_kensington,_bath_pp/pm">Prices for 5 Bedroom Student Houses in Kensington, Bath pp/pm</a></li><li><a href = "#5_bedroom_student_houses_in_kensington,_bath__all_bills_inclusive">5 Bedroom Student Houses in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_5_bedroom_student_houses_in_kensington,_bath">Cheap 5 Bedroom Student Houses in Kensington, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_kensington,_bath__recently_added">5 Bedroom Student Houses in Kensington, Bath - Recently Added</a></li><li><a href = "#5_bedroom_student_houses_in_kensington,_bath__recently_reduced">5 Bedroom Student Houses in Kensington, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__5_bedroom_houses_in_kensington,_bath,_somerset,_bath">Student Accommodation Portal - 5 Bedroom Houses in Kensington, Bath, Somerset, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_kensington,_bath__private_rental_sector">5 Bedroom Student Houses in Kensington, Bath - Private Rental Sector</a></li><li><a href = "#5_bedroom_student_houses_in_kensington,_bath__fully_furnished">5 Bedroom Student Houses in Kensington, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_kensington_to_the_city_center">How close is Kensington to the City Center</a></li><li><a href = "#how_close_is_kensington_to_the_university_of_bath">How close is Kensington to the University of Bath</a></li><li><a href = "#how_close_is_kensington_to_the_bath_spa_university">How close is Kensington to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_5_bedroom_student_houses_in_kensington,_bath_pp/pm"> <h2>Prices for 5 Bedroom Student Houses in Kensington, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£725 per month </td><td><button className = 'searchButton tableButton' title='5 Bedroom Student Houses in Kensington, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "5_bedroom_student_houses_in_kensington,_bath__all_bills_inclusive"> <h2>5 Bedroom Student Houses in Kensington, Bath - All Bills Inclusive</h2></a><p>As a student living in a 5 bedroom house in Kensington, Bath, Somerset, subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b> can make your student life much more convenient. With all your bills such as electricity, water, gas, and internet included in one fixed monthly payment, you can <b>concentrate on your studies</b> without the stress of managing multiple bills. <b>UniBills.com</b> takes care of all the admin and troubleshooting, so you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. This service not only saves you time and effort but also helps you budget more effectively. Say goodbye to unexpected bills and fluctuating costs; with <b>UniBills.com</b>, you can enjoy a worry-free student life. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in Bath a breeze.</p><a id = "cheap_5_bedroom_student_houses_in_kensington,_bath"> <h2>Cheap 5 Bedroom Student Houses in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_kensington,_bath__recently_added"> <h2>5 Bedroom Student Houses in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_kensington,_bath__recently_reduced"> <h2>5 Bedroom Student Houses in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__5_bedroom_houses_in_kensington,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 5 Bedroom Houses in Kensington, Bath, Somerset, Bath</h2></a><p>Looking for 5 bedroom <b>student Houses</b> in <b>Bath</b>? Our property portal is your go-to solution for finding the perfect student accommodation in Kensington, <b>Bath</b>, Somerset. With close proximity to prestigious universities like the University of <b>Bath</b> and <b>Bath</b> Spa University, our listings offer spacious and comfortable living spaces ideal for students looking to study and socialize. Kensington, <b>Bath</b>, Somerset is a vibrant and sought-after location, with plenty of amenities and easy access to public transportation. Whether you are studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, our platform makes it easy to discover <b>5 Bedroom Houses</b> that cater to your needs. Don't miss out on the opportunity to find the ideal student house in <b>Bath</b> through our user-friendly and comprehensive search features.</p><a id = "5_bedroom_student_houses_in_kensington,_bath__private_rental_sector"> <h2>5 Bedroom Student Houses in Kensington, Bath - Private Rental Sector</h2></a><p>Looking for a luxurious and spacious living space in Somerset? Look no further than the 5 Bedroom Houses in Kensington, Bath. These stunning properties offer ample room for families or house shares, with all the amenities you could wish for. Situated in the heart of Bath, these houses are conveniently located near shops, restaurants, and cultural attractions. Additionally, these properties come <b>fully furnished</b>, saving you the hassle of moving furniture. With <b>bills included</b> in the rent, you can enjoy a stress-free living experience in these beautiful homes. Don't miss your chance to secure one of these desirable properties in the private rental sector in Bath.</p><a id = "5_bedroom_student_houses_in_kensington,_bath__fully_furnished"> <h2>5 Bedroom Student Houses in Kensington, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 5 Bedroom Houses in Kensington, Bath, Somerset, Bath</b>? Look no further! These spacious properties offer comfort and style, making them the perfect choice for families or groups of friends looking to live together. With modern amenities and stylish décor, these houses provide a luxurious living experience in the heart of Bath. In a city known for its vibrant culture and historic architecture, these fully furnished properties offer a modern twist on traditional living. It is normal for student houses to be fully furnished, so you can rest assured that these properties come equipped with everything you need to make your move-in seamless and stress-free. Don't miss out on the opportunity to live in one of these stunning 5 bedroom houses in Kensington, Bath, Somerset, Bath.</p><a id = "how_close_is_kensington_to_the_city_center"> <h2>How close is Kensington to the City Center</h2></a><p><b>Kensington</b> is a charming neighborhood located just a few <b>miles</b> from <b>Bath city center</b>. This means that visitors staying in <b>Kensington</b> can easily explore the historic sites, cultural attractions, and bustling streets of Bath in just a short journey. Whether you're strolling along the beautiful Royal Crescent, soaking in the healing waters of the Thermae Bath Spa, or shopping in the artisanal boutiques, you'll find that <b>Kensington</b> provides a convenient and peaceful retreat from the city center. Enjoy the best of both worlds by experiencing the vibrant energy of Bath during the day and the tranquility of <b>Kensington</b> in the evenings. With its proximity to <b>Bath city center</b>, <b>Kensington</b> offers a perfect balance of accessibility and relaxation for your visit to this picturesque region.</p><a id = "how_close_is_kensington_to_the_university_of_bath"> <h2>How close is Kensington to the University of Bath</h2></a><p>Kensington is conveniently located just a few <b>miles</b> away from the <b>University of Bath</b>, making it an ideal choice for students looking for accommodation close to campus. <b>by foot</b>, the distance between Kensington and the <b>University of Bath</b> is around 2 <b>miles</b>, providing a pleasant walk for those who enjoy a bit of exercise before lectures. For those looking for a quicker commute, there is a direct <b>bus route</b> connecting Kensington to the university, making it a convenient option for students who prefer public transportation. The journey <b>by bus</b> takes around 15-20 minutes, ensuring a smooth and hassle-free trip to campus. Additionally, for students who prefer to drive, the distance between Kensington and the <b>University of Bath</b> can be covered in just a few minutes, making it a convenient option for those who rely on their own transportation. With its close proximity to campus and easy access <b>by foot</b>, bus, or car, Kensington offers a convenient and comfortable living option for students at the <b>University of Bath</b>.</p><a id = "how_close_is_kensington_to_the_bath_spa_university"> <h2>How close is Kensington to the Bath Spa University</h2></a><p>Kensington is approximately 100 <b>miles</b> away from <b>Bath Spa University</b>, which makes it a convenient distance for students looking to study there. While the university is not within walking distance, there are efficient transportation options available to make the journey easily. <b>by bus</b>, students can reach <b>Bath Spa University</b> in under 2 hours, making it a feasible option for daily commuters. For those who prefer the flexibility of driving, the university is accessible <b>by car</b> in around 1.5 hours, depending on traffic conditions. Overall, the proximity of Kensington to <b>Bath Spa University</b> allows students to benefit from the vibrant campus life and academic opportunities while still being able to easily travel to and from their home city.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, searching for a 5-bedroom student house in Kensington, Bath can be a challenging yet rewarding experience. This sought-after location offers a vibrant student community, convenient access to amenities, and a picturesque setting. When looking for a student house in this area, it is essential to consider factors such as proximity to the university, transportation links, and overall living costs. Additionally, viewing multiple properties and carefully assessing each one can help narrow down the options and find the perfect fit for your needs. In conclusion, with its desirable location and range of amenities, securing a 5-bedroom student house in Kensington, Bath is a great choice for students looking to make the most of their university experience.</p></>)
};

export default BathKensingtonHouse5;