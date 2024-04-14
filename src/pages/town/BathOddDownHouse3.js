
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


const  BathOddDownHouse3 = () => 
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

    return (<><h1>3 Bedroom Student Houses in Odd Down, Bath</h1><p>We have listings for <b>3 Bedroom Student Houses in Odd Down, Bath</b> for the academic year 2024.

<b>3 Bedroom Student Houses in Odd Down, Bath</b> are ideal for students looking for a spacious and comfortable living space in a peaceful neighborhood. These properties typically offer ample bedrooms, shared living areas, and sometimes even outdoor spaces for socializing or studying. Located in the beautiful city of Bath, students can enjoy a blend of historic architecture, cultural attractions, and convenient amenities while living in these student houses.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-houses-in-odd-down-bath.png')} alt='3 Bedroom Student Houses in Odd Down, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Houses in Odd Down, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61725&type=House&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Houses in Odd Down, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_houses_in_odd_down,_bath_pp/pm">Prices for 3 Bedroom Student Houses in Odd Down, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_houses_in_odd_down,_bath__all_bills_inclusive">3 Bedroom Student Houses in Odd Down, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_houses_in_odd_down,_bath">Cheap 3 Bedroom Student Houses in Odd Down, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_odd_down,_bath__recently_added">3 Bedroom Student Houses in Odd Down, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_houses_in_odd_down,_bath__recently_reduced">3 Bedroom Student Houses in Odd Down, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_houses_in_odd_down,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Houses in Odd Down, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_odd_down,_bath__private_rental_sector">3 Bedroom Student Houses in Odd Down, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_houses_in_odd_down,_bath__fully_furnished">3 Bedroom Student Houses in Odd Down, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_odd_down_to_the_city_center">How close is Odd Down to the City Center</a></li><li><a href = "#how_close_is_odd_down_to_the_university_of_bath">How close is Odd Down to the University of Bath</a></li><li><a href = "#how_close_is_odd_down_to_the_bath_spa_university">How close is Odd Down to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_houses_in_odd_down,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Houses in Odd Down, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£559 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Houses in Odd Down, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^61725")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_houses_in_odd_down,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Houses in Odd Down, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3 bedroom house in Odd Down, Bath, Somerset? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that could greatly benefit you. By opting for this convenient package, you can focus on your studies without the stress of managing multiple bills. <b>UniBills.com</b> takes care of utilities such as water, electricity, gas, and even internet, allowing you to enjoy the hassle-free all-inclusive option. Say goodbye to juggling various payments and deadlines, and hello to a simplified and streamlined rental experience. With <b>UniBills.com</b>, you can easily budget your expenses and avoid any surprises. Interested in making your student life a little easier? Get a quote from <b>UniBills.com</b> or any accommodation on this website, and experience the freedom of <b>all bills inclusive</b> living.</p><a id = "cheap_3_bedroom_student_houses_in_odd_down,_bath"> <h2>Cheap 3 Bedroom Student Houses in Odd Down, Bath</h2></a><p><Portlet location="REGION^61725" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_odd_down,_bath__recently_added"> <h2>3 Bedroom Student Houses in Odd Down, Bath - Recently Added</h2></a><p><Portlet location="REGION^61725" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_odd_down,_bath__recently_reduced"> <h2>3 Bedroom Student Houses in Odd Down, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61725" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_houses_in_odd_down,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Houses in Odd Down, Bath, Somerset, Bath</h2></a><p>Are you a student looking for <b>3 Bedroom Houses</b> in Odd Down, <b>Bath</b>, Somerset? Our property portal is your one-stop solution for finding the perfect <b>student Houses</b> in this quaint neighborhood. Situated near the prestigious University of <b>Bath</b> and <b>Bath</b> Spa University, our listings offer a variety of options to suit your requirements. Whether you prefer modern amenities or a cozy traditional vibe, you can easily browse through our extensive database to find the ideal 3 Bedroom House in Odd Down. Let us help you streamline your search and ensure a seamless transition into your new student accommodation. Trust our property portal to connect you with the best housing options in <b>Bath</b>, giving you more time to focus on your studies and enjoy the vibrant student life the city has to offer.</p><a id = "3_bedroom_student_houses_in_odd_down,_bath__private_rental_sector"> <h2>3 Bedroom Student Houses in Odd Down, Bath - Private Rental Sector</h2></a><p>Are you looking for a comfortable and convenient living space in Odd Down, Bath, Somerset? Explore our selection of <b>3 Bedroom Houses in Odd Down, Bath, Somerset, Bath</b>, located in a peaceful and friendly neighborhood. Our properties are perfect for families or groups looking for a spacious living arrangement. The houses come <b>fully furnished</b>, ensuring that you have everything you need to settle in comfortably. Additionally, many of our rental options include <b>bills included</b>, giving you peace of mind and simplifying your monthly budget. Enjoy the convenience of a private rental sector with all the amenities you need for a relaxed and enjoyable living experience.</p><a id = "3_bedroom_student_houses_in_odd_down,_bath__fully_furnished"> <h2>3 Bedroom Student Houses in Odd Down, Bath - Fully Furnished</h2></a><p>Are you in search of <b>fully furnished 3 Bedroom Houses in Odd Down, Bath, Somerset, Bath</b>? Look no further! In this quaint neighborhood, it is normal for student Houses to be fully furnished – making your move-in process a breeze. These properties come equipped with all the essentials, from cozy living room furniture to modern kitchen appliances, and comfortable bedroom sets. The convenience of settling into a ready-made space means you can focus on enjoying your new home and exploring the charming city of Bath. Don't stress about purchasing and transporting furniture; instead, relax and make yourself at home in one of these inviting properties. With everything you need at your fingertips, fully furnished 3 Bedroom Houses in Odd Down offer a hassle-free living experience in the heart of Somerset.</p><a id = "how_close_is_odd_down_to_the_city_center"> <h2>How close is Odd Down to the City Center</h2></a><p><b>Odd Down</b> is a quaint and residential area located just a few <b>miles</b> south of <b>Bath city center</b>. The distance between the two destinations is incredibly close, making it easy for residents and visitors to access all that Bath has to offer. Whether you're looking to explore the historic Roman Baths, indulge in the local cuisine, or shop at the numerous boutiques, the city center is just a short journey away from <b>Odd Down</b>. Additionally, public transportation options such as buses and taxis are readily available, providing convenient and efficient ways to travel between the two locations. With its proximity to <b>Bath city center</b>, <b>Odd Down</b> offers a perfect blend of tranquility and accessibility, making it an ideal place to call home or stay while exploring the vibrant city of Bath.</p><a id = "how_close_is_odd_down_to_the_university_of_bath"> <h2>How close is Odd Down to the University of Bath</h2></a><p>If you're looking for accommodation close to the <b>University of Bath</b>, Odd Down is an ideal location to consider. Odd Down is located just a few <b>miles</b> away from the university, making it convenient for students and staff alike. If you prefer to travel <b>by foot</b>, you can easily reach the <b>University of Bath</b> within an hour's walk. Alternatively, there is a direct <b>bus route</b> that connects Odd Down to the university, providing a convenient and affordable transportation option. For those who prefer to drive, the journey from Odd Down to the <b>University of Bath</b> <b>by car</b> typically takes around 15-20 minutes, depending on traffic. Overall, Odd Down offers a great location in close proximity to the <b>University of Bath</b>, providing easy access to campus facilities and amenities.</p><a id = "how_close_is_odd_down_to_the_bath_spa_university"> <h2>How close is Odd Down to the Bath Spa University</h2></a><p>Odd Down is located just 2.5 <b>miles</b> away from <b>Bath Spa University</b>, making it a convenient option for students looking for off-campus housing. For those who prefer to walk, the university is easily accessible in approximately 50 minutes on foot. Additionally, there is a direct <b>bus route</b> that connects Odd Down to the university, with buses running frequently, offering a quick and stress-free commute. If driving is more your style, the journey can be completed in just about 10 minutes <b>by car</b>, making it a hassle-free option for those with their own transportation. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from Odd Down is a breeze. With its close proximity and various transportation options, Odd Down is a convenient and practical choice for students looking to live near the university.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 3-bedroom student house in Odd Down, Bath can be a challenging yet rewarding experience. With its convenient location close to local amenities and the University of Bath, Odd Down offers an ideal setting for students looking for a comfortable and vibrant living space. By exploring various options, students can find a property that meets their needs in terms of size, location, and budget. Ensuring adequate research, viewing multiple properties, and seeking advice from reliable sources can all contribute to finding the perfect student house. Ultimately, the key is to remain diligent, patient, and open-minded throughout the search process to secure a 3-bedroom student house that aligns with your preferences and enhances your overall university experience.</p></>)
};

export default BathOddDownHouse3;