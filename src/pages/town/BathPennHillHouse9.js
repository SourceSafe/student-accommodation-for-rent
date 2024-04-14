
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


const  BathPennHillHouse9 = () => 
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

    return (<><h1>9 Bedroom Student Houses in Penn Hill, Bath</h1><p>We have listings for <b>9 Bedroom Student Houses in Penn Hill, Bath</b> for the academic year 2024. 

<b>9 Bedroom Student Houses in Penn Hill, Bath</b> offer spacious accommodation for students looking to live together in a vibrant and bustling area of Bath. These properties are perfect for large groups of friends or students looking to share living expenses while studying in the area. With ample bedrooms and communal spaces, these houses provide the perfect environment for studying and socializing.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/9-bedroom-student-houses-in-penn-hill-bath.png')} alt='9 Bedroom Student Houses in Penn Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='9 Bedroom Student Houses in Penn Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71109&type=House&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>9 Bedroom Student Houses in Penn Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_houses_in_penn_hill,_bath_pp/pm">Prices for 9 Bedroom Student Houses in Penn Hill, Bath pp/pm</a></li><li><a href = "#9_bedroom_student_houses_in_penn_hill,_bath__all_bills_inclusive">9 Bedroom Student Houses in Penn Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_houses_in_penn_hill,_bath">Cheap 9 Bedroom Student Houses in Penn Hill, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_penn_hill,_bath__recently_added">9 Bedroom Student Houses in Penn Hill, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_houses_in_penn_hill,_bath__recently_reduced">9 Bedroom Student Houses in Penn Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_houses_in_penn_hill,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Houses in Penn Hill, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_penn_hill,_bath__private_rental_sector">9 Bedroom Student Houses in Penn Hill, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_houses_in_penn_hill,_bath__fully_furnished">9 Bedroom Student Houses in Penn Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_penn_hill_to_the_city_center">How close is Penn Hill to the City Center</a></li><li><a href = "#how_close_is_penn_hill_to_the_university_of_bath">How close is Penn Hill to the University of Bath</a></li><li><a href = "#how_close_is_penn_hill_to_the_bath_spa_university">How close is Penn Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_houses_in_penn_hill,_bath_pp/pm"> <h2>Prices for 9 Bedroom Student Houses in Penn Hill, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton tableButton' title='9 Bedroom Student Houses in Penn Hill, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71109")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "9_bedroom_student_houses_in_penn_hill,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Houses in Penn Hill, Bath - All Bills Inclusive</h2></a><p>Are you tired of managing multiple utility bills for your 9-bedroom student house in Penn Hill, Bath, Somerset? Say goodbye to the hassle and stress of sorting out bills each month by subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>. With <b>UniBills.com</b>, you can enjoy the convenience of having all your bills - including water, gas, electricity, and internet - rolled into one easy monthly payment. This allows you to <b>concentrate on your studies</b> and social life without the added worry of budgeting for different bills. Save time and energy by opting for the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Make your student life easier and more convenient by reaching out for a quote from <b>UniBills.com</b> or any accommodation on this website.</p><a id = "cheap_9_bedroom_student_houses_in_penn_hill,_bath"> <h2>Cheap 9 Bedroom Student Houses in Penn Hill, Bath</h2></a><p><Portlet location="REGION^71109" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_penn_hill,_bath__recently_added"> <h2>9 Bedroom Student Houses in Penn Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71109" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_penn_hill,_bath__recently_reduced"> <h2>9 Bedroom Student Houses in Penn Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71109" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_houses_in_penn_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Houses in Penn Hill, Bath, Somerset, Bath</h2></a><p>Are you looking for spacious and comfortable living arrangements during your time at the University of <b>Bath</b> or <b>Bath</b> Spa University? Our property portal is the perfect solution to help you find 9-bedroom <b>student Houses</b> in the charming area of Penn Hill, <b>Bath</b>, Somerset. These houses cater to larger groups of students, offering ample space for studying, socializing, and relaxing. Located in a picturesque neighborhood in <b>Bath</b>, these properties provide easy access to essential amenities and local attractions. Whether you prefer a modern townhouse or a traditional Victorian property, our portal offers a variety of options to suit your preferences. Don't miss out on the opportunity to secure a fantastic student house in Penn Hill, <b>Bath</b>, and enjoy a comfortable and convenient living experience during your academic journey.</p><a id = "9_bedroom_student_houses_in_penn_hill,_bath__private_rental_sector"> <h2>9 Bedroom Student Houses in Penn Hill, Bath - Private Rental Sector</h2></a><p>Are you searching for a spacious and luxurious living arrangement in Bath, Somerset? Look no further than the private rental sector offering 9 Bedroom Houses in Penn Hill. These impressive properties provide the perfect blend of comfort and convenience, with the added perk of <b>bills included</b> in the rent. Imagine coming home to a <b>fully furnished</b> house where every detail has been thoughtfully considered for your enjoyment. Whether you're a student looking for a communal living experience or a professional seeking a shared accommodation, these 9 Bedroom Houses in Penn Hill offer the ideal solution. Don't miss out on the opportunity to live in style and comfort in beautiful Bath.</p><a id = "9_bedroom_student_houses_in_penn_hill,_bath__fully_furnished"> <h2>9 Bedroom Student Houses in Penn Hill, Bath - Fully Furnished</h2></a><p>Looking for the perfect living arrangement in Bath, Somerset? Look no further than the fully furnished 9 Bedroom Houses in Penn Hill. These spacious and modern homes offer all the comforts and conveniences you need for a comfortable stay. Located in the heart of the city, these houses are ideal for students or families looking for a convenient and well-equipped living space. With nine bedrooms, there is plenty of space for everyone to have their own private retreat. In Bath, it is normal for student Houses to be fully furnished, so you can expect to find everything you need from furniture to appliances already in place. Enjoy the beautiful surroundings of Somerset while living in a stylish and fully equipped home in Penn Hill.</p><a id = "how_close_is_penn_hill_to_the_city_center"> <h2>How close is Penn Hill to the City Center</h2></a><p><b>Penn Hill</b> is located just 1.5 <b>miles</b> away from <b>Bath city center</b>, making it an ideal location for those who want to be close to the vibrant heart of the city. This residential neighborhood offers a peaceful retreat from the hustle and bustle of downtown Bath, while still being within easy reach of all the amenities and attractions that the city has to offer. Whether you're looking to explore the Roman baths, relax in the Thermae Spa, or sample the local cuisine in one of the many restaurants, <b>Penn Hill</b>'s proximity to <b>Bath city center</b> makes it a convenient base for your adventures. With its charming streets lined with historic buildings and beautiful parks, <b>Penn Hill</b> provides a tranquil escape just a stone's throw away from the bustling city center. So, if you're looking for a convenient location that offers the best of both worlds, <b>Penn Hill</b> is the perfect place to call home.</p><a id = "how_close_is_penn_hill_to_the_university_of_bath"> <h2>How close is Penn Hill to the University of Bath</h2></a><p>Penn Hill is conveniently located just a stone's throw away from the prestigious <b>University of Bath</b> campus. Situated just a few <b>miles</b> from the university, students can easily reach their classes either <b>by foot</b>, bus, or car. The university is well-connected by a reliable <b>bus route</b> that provides a quick and convenient way to commute between Penn Hill and campus. By taking the bus, students can arrive at the <b>University of Bath</b> in no time at all, without the hassle of finding parking. For those who prefer to drive, the university is just a short car ride away, offering flexibility and convenience for those who prefer to have their own transportation. With such a close proximity to the <b>University of Bath</b>, Penn Hill provides students with the perfect blend of convenience and accessibility for their academic pursuits.</p><a id = "how_close_is_penn_hill_to_the_bath_spa_university"> <h2>How close is Penn Hill to the Bath Spa University</h2></a><p>Located just 2.5 <b>miles</b> away from <b>Bath Spa University</b>, Penn Hill is conveniently close to the campus. Students have multiple commuting options to reach the university, whether it be <b>by foot</b>, bus, or car. Walking from Penn Hill to <b>Bath Spa University</b> takes around 45 minutes, providing a picturesque route for those who enjoy getting some exercise on their way to class. Alternatively, students can take the bus, which offers a quick and direct route between the two locations. For those with their own transportation, driving to <b>Bath Spa University</b> from Penn Hill only takes about 10-15 minutes, making it a convenient option for those who prefer to travel <b>by car</b>. Overall, Penn Hill's proximity to <b>Bath Spa University</b> offers students a range of convenient commuting options that make getting to campus a breeze.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 9 bedroom student house in Penn Hill, Bath can be a challenging task, but also a rewarding one once you find the perfect property. With its picturesque surroundings and convenient location close to the University of Bath, Penn Hill is a popular choice among students. When searching for a property of this size, it's important to consider factors such as proximity to campus, amenities like supermarkets and restaurants, and the overall condition of the house. By carefully researching and viewing multiple properties, you can ensure that you find a student house that meets your needs and budget. In conclusion, although the search for a 9 bedroom student house in Penn Hill, Bath may require time and effort, the end result of a comfortable and spacious living arrangement for you and your housemates will make it all worth it.</p></>)
};

export default BathPennHillHouse9;