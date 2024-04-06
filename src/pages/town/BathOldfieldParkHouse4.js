
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


const  BathOldfieldParkHouse4 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isMobile,setIsMobile] = useState();    

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("t  ownLocationId");
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
  


    return (<><h1>4 Bedroom Student Houses in Oldfield Park, Bath</h1><p>We have listings for <b>4 Bedroom Student Houses in Oldfield Park, Bath</b> for the academic year 2024. 
<b>4 Bedroom Student Houses in Oldfield Park, Bath</b> are perfect for students looking for spacious accommodations with easy access to local amenities and the University of Bath campus. These houses offer a comfortable living environment for students to study and relax during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-houses-in-oldfield-park-bath.png')} alt='4 Bedroom Student Houses in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=REGION^71108&type=House&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Houses in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_houses_in_oldfield_park,_bath_pp/pm">Prices for 4 Bedroom Student Houses in Oldfield Park, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive">4 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_houses_in_oldfield_park,_bath">Cheap 4 Bedroom Student Houses in Oldfield Park, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__recently_added">4 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced">4 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector">4 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished">4 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_houses_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Houses in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£608 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4-bedroom house in Oldfield Park, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service could be the perfect solution for you. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. By having all your bills, including gas, electricity, water, and internet, rolled into one convenient monthly payment, you can <b>concentrate on your studies</b> without the stress of managing multiple bills. With <b>UniBills.com</b>, you can easily budget your expenses, knowing exactly how much you need to pay each month. Say goodbye to the headache of dealing with different providers and fluctuating bills. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and make your student life easier and more enjoyable.</p><a id = "cheap_4_bedroom_student_houses_in_oldfield_park,_bath"> <h2>Cheap 4 Bedroom Student Houses in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__recently_added"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable 4 Bedroom House in Oldfield Park, <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect <b>student Houses</b> in this vibrant and popular area. With close proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University, Oldfield Park is an ideal location for students looking for convenience and a lively atmosphere. Whether you're looking for a modern property with all the amenities or a charming traditional house, our portal offers a wide range of options to suit your preferences. Take the stress out of house hunting and explore our listings today to find your ideal 4 Bedroom House in Oldfield Park, <b>Bath</b>, Somerset.</p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living situation in Bath, Somerset? Explore the vibrant neighborhood of Oldfield Park and discover a range of <b>4 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</b> available for rent in this charming area. These properties offer the convenience of <b>bills included</b> in the rent, making budgeting easier and hassle-free. Additionally, these houses come <b>fully furnished</b>, saving you the time and effort of having to buy and transport furniture. Enjoy the convenience of moving into a ready-to-go home where you can simply unpack and settle in. Embrace the character and history of Oldfield Park while experiencing the modern amenities of these stylish 4-bedroom houses. Don't miss out on the opportunity to create a cozy and inviting living space in one of Bath's most welcoming neighborhoods.</p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 4 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</b>? Look no further! In this charming neighborhood, it is normal for student houses to be fully furnished, making the transition to your new home a breeze. With spacious living areas, cozy bedrooms, and modern amenities, these houses are perfect for students or families looking for a comfortable and convenient living space. Located in close proximity to local shops, cafes, and public transportation, you'll have everything you need right at your doorstep. Don't miss out on the opportunity to live in one of these beautifully furnished homes in the heart of Oldfield Park.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming suburb located just 1.5 <b>miles</b> from the bustling <b>Bath city center</b>. Nestled in the picturesque countryside of Somerset, <b>Oldfield Park</b> offers a tranquil escape from the hustle and bustle of city life while still being conveniently close to all the amenities and attractions that Bath has to offer. With its quaint Victorian terraced houses, vibrant local shops, and friendly community atmosphere, <b>Oldfield Park</b> provides a peaceful retreat for residents and visitors alike. Whether you fancy a leisurely stroll through the scenic streets of <b>Oldfield Park</b> or a quick trip to the city center to explore the historic Roman baths, stunning Georgian architecture, and diverse shopping and dining options, you'll find that the close proximity of <b>Oldfield Park</b> to <b>Bath city center</b> makes it the perfect base for experiencing the best of both worlds. So, if you're looking for a harmonious blend of suburban tranquility and urban excitement, <b>Oldfield Park</b> is the ideal destination for your next adventure in Bath.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is incredibly close to the <b>University of Bath</b>, making it a convenient location for students and faculty members. Situated just a stone's throw away from the university, Oldfield Park is only a few <b>miles</b> away. For those who prefer to travel <b>by foot</b>, the university is easily reachable within a 20-minute walk. Alternatively, there is a reliable <b>bus route</b> that connects Oldfield Park to the <b>University of Bath</b>, making the journey quick and hassle-free. If driving is your preferred mode of transportation, you can reach the university in just a few minutes <b>by car</b>. This close proximity makes Oldfield Park a popular choice for those wanting to be near the vibrant campus community at the <b>University of Bath</b>. With its convenient location and easy access to campus, Oldfield Park is the perfect place to live for students and staff members alike.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is conveniently located just 1.5 <b>miles</b> away from <b>Bath Spa University</b> in the city of Bath. For students looking to travel between the two locations, there are several transportation options available. <b>by foot</b>, the distance can be easily covered in around 30 minutes, making it a pleasant walk for those looking to enjoy the picturesque surroundings. Alternatively, there is a direct <b>bus route</b> that connects Oldfield Park to <b>Bath Spa University</b>, providing a quick and convenient way to travel between the two locations. <b>by bus</b>, the journey takes approximately 10-15 minutes, offering a hassle-free commute for students. Additionally, for those who prefer to drive, the distance can be covered in under 10 minutes <b>by car</b>, making it a quick and easy journey for students with their own vehicle. Overall, Oldfield Park's close proximity to <b>Bath Spa University</b> makes it a convenient and accessible location for students.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After tirelessly searching for 4 Bedroom Student Houses in Oldfield Park, Bath, it is clear that the area offers an array of options for students looking for accommodation. The houses in Oldfield Park are typically well-maintained and within walking distance to both the University of Bath and the city center, providing convenience for students. The neighborhood's vibrant community and local amenities make it an ideal location for student living. With the variety of properties available, students can find a house that suits their needs and preferences. Overall, looking for 4 Bedroom Student Houses in Oldfield Park, Bath, proves to be a rewarding experience, offering a blend of comfort, convenience, and a thriving student atmosphere.</p></>)
};

export default BathOldfieldParkHouse4;