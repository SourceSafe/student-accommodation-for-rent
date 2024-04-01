
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom, isDesktopAtom} from '../../portal/appState/appState'
import { ViewPortal} from '../../components/ViewPortal/ViewPortal'
import { CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathOldfieldParkHouse9 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isDesktop] = useAtomState(isDesktopAtom);

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

    return (<><h1>9 Bedroom Student Houses in Oldfield Park, Bath</h1><p>We have listings for <b>9 Bedroom Student Houses in Oldfield Park, Bath</b> for the academic year 2024. 

<b>9 Bedroom Student Houses in Oldfield Park, Bath</b> are perfect for large groups of students looking to live together in a spacious and comfortable environment. These houses are conveniently located close to local amenities, transport links, and the University of Bath campus, making them an ideal choice for students seeking both convenience and comfort in their accommodation.</p><div style = {{display:'flex', flexDirection:'row'}}>{isDesktop && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/9-bedroom-student-houses-in-oldfield-park-bath.png')} alt='9 Bedroom Student Houses in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='9 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=REGION^71108&type=House&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>9 Bedroom Student Houses in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_houses_in_oldfield_park,_bath_pp/pm">Prices for 9 Bedroom Student Houses in Oldfield Park, Bath pp/pm</a></li><li><a href = "#9_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive">9 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_houses_in_oldfield_park,_bath">Cheap 9 Bedroom Student Houses in Oldfield Park, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_oldfield_park,_bath__recently_added">9 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced">9 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector">9 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished">9 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_houses_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 9 Bedroom Student Houses in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£685 per month </td><td><button className = 'searchButton tableButton' title='9 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "9_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 9-bedroom student house in Oldfield Park, Bath, Somerset can be both exciting and challenging. With so many responsibilities and bills to juggle, it can often become overwhelming. That's where subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> can truly make a difference. By opting for this convenient option, you can enjoy the peace of mind knowing that all your utility bills are taken care of in one easy payment. This allows you to <b>concentrate on your studies</b> and social life without the added stress of managing multiple bills. <b>UniBills.com</b> offers a hassle-free all inclusive option, leaving you with more time to focus on what really matters. So, why not simplify your student living experience and enjoy the benefits of an <b>all bills inclusive</b> service? Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience firsthand.</p><a id = "cheap_9_bedroom_student_houses_in_oldfield_park,_bath"> <h2>Cheap 9 Bedroom Student Houses in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_oldfield_park,_bath__recently_added"> <h2>9 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced"> <h2>9 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable 9 bedroom house in Oldfield Park, <b>Bath</b>, Somerset? Look no further than our property portal, where we specialize in connecting students with the perfect accommodation. Located near prestigious institutions such as the University of <b>Bath</b> and <b>Bath</b> Spa University, our listings boast a variety of <b>student Houses</b> that cater to your needs. From cozy single rooms to spacious shared living areas, each property is thoughtfully designed to provide a conducive environment for studying and socializing. With easy access to amenities and public transportation, living in Oldfield Park offers the perfect balance between academic life and city living. Start your search today and find the ideal 9 bedroom house that will make your student experience in <b>Bath</b> truly unforgettable.</p><a id = "9_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector"> <h2>9 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for a convenient and hassle-free rental experience in Bath, Somerset? Consider the 9 Bedroom Houses in Oldfield Park, Bath, Somerset, where you can enjoy a comfortable and spacious living arrangement with all <b>bills included</b>. These properties are <b>fully furnished</b>, making your move-in process smooth and stress-free. Located in the charming neighborhood of Oldfield Park, you'll have easy access to local amenities, public transportation, and the beautiful city of Bath. Whether you're a student looking for shared accommodation or a group of professionals seeking a communal living space, these 9 Bedroom Houses offer an ideal solution for your housing needs. Don't miss out on the opportunity to rent a home in this vibrant and historic area of Bath.</p><a id = "9_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished"> <h2>9 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 9 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</b>? Look no further! In this vibrant and student-friendly area, it is normal for student houses to be fully furnished, making the transition to your new home smooth and hassle-free. These spacious properties offer ample room for studying, socializing, and relaxing, with modern amenities and comfortable furnishings throughout. Located in the heart of Oldfield Park, you'll have easy access to local shops, cafes, and public transportation, making it a convenient and desirable place to live. Whether you're a student looking for a comfortable living space or a group of friends searching for the perfect house-share, these fully furnished 9 Bedroom Houses in Oldfield Park have everything you need for a comfortable and enjoyable stay in Bath.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming suburb located just outside of <b>Bath city center</b>, approximately 1.5 <b>miles</b> away. The proximity of <b>Oldfield Park</b> to <b>Bath city center</b> makes it an ideal location for those looking to enjoy all that the city has to offer while still enjoying a more peaceful and residential setting. Whether you're looking to explore the historical sites, vibrant shopping districts, or relaxing thermal spas of Bath, you can easily access it all from <b>Oldfield Park</b>. With excellent transportation links including buses and trains, getting to and from the city center is convenient and stress-free. Additionally, <b>Oldfield Park</b> itself boasts its own unique charm with a variety of independent shops, cafes, and green spaces for residents and visitors to enjoy.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is conveniently located just 1.5 <b>miles</b> away from the prestigious <b>University of Bath</b>, making it a popular residential area among students and staff. The university can be easily reached <b>by foot</b>, taking approximately 30 minutes for a leisurely stroll through the charming streets of Bath. For those looking for a quicker commute, there are regular bus services that connect Oldfield Park to the university campus, with journey times averaging around 15 minutes. Additionally, for those with their own transportation, the university is only a short 10-minute drive away from Oldfield Park, making it easily accessible for those who prefer to travel <b>by car</b>. Whether you choose to walk, take the bus, or drive, the proximity of Oldfield Park to the <b>University of Bath</b> ensures that students and faculty members have convenient and efficient transportation options to reach the campus.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Located just 2 <b>miles</b> away from <b>Bath Spa University</b>, Oldfield Park is a popular residential area for students studying at the university. The close proximity makes it convenient for students to commute to and from campus. <b>by foot</b>, it takes around 40-45 minutes to walk to the university, offering a healthy and scenic route through the charming streets of Bath. For those looking for a quicker option, there is a direct <b>bus route</b> connecting Oldfield Park to <b>Bath Spa University</b>, making the journey in just 10-15 minutes. If you prefer to drive, it’s only a short 10-minute car ride away. With its accessible location and vibrant community, Oldfield Park provides a perfect balance of student life and city living for those attending <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 9-bedroom student house in Oldfield Park, Bath can be an exciting yet challenging task. With its close proximity to universities and vibrant atmosphere, Oldfield Park is a popular choice for student accommodation. When searching for a property in this area, it's essential to consider factors such as location, amenities, and overall condition of the house. Many 9-bedroom student houses in Oldfield Park offer spacious living areas, multiple bathrooms, and fully equipped kitchens, making them ideal for shared living. Additionally, being in a bustling student community provides opportunities for socializing and forming lasting friendships. In conclusion, finding a 9-bedroom student house in Oldfield Park can offer a convenient and enriching living experience for students looking to enjoy all that Bath has to offer.</p></>)
};

export default BathOldfieldParkHouse9;