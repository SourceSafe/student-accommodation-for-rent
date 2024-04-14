
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


const  BathDolemeadsFlat4 = () => 
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

    return (<><h1>4 Bedroom Student Flats in Dolemeads, Bath</h1><p>We have listings for <b>4 Bedroom Student Flats in Dolemeads, Bath</b> for the academic year 2024.

<b>4 Bedroom Student Flats in Dolemeads, Bath</b> offer spacious accommodation ideal for student living in a prime location in Bath. These flats are perfect for students looking to live together while studying in the vibrant city of Bath, known for its rich history and beautiful architecture. With convenient access to amenities and public transportation, these student flats provide a comfortable and convenient living experience for those pursuing their academic endeavors in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-flats-in-dolemeads-bath.png')} alt='4 Bedroom Student Flats in Dolemeads, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Flats in Dolemeads, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71097&type=Flat&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Flats in Dolemeads, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_flats_in_dolemeads,_bath_pp/pm">Prices for 4 Bedroom Student Flats in Dolemeads, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_flats_in_dolemeads,_bath__all_bills_inclusive">4 Bedroom Student Flats in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_flats_in_dolemeads,_bath">Cheap 4 Bedroom Student Flats in Dolemeads, Bath</a></li><li><a href = "#4_bedroom_student_flats_in_dolemeads,_bath__recently_added">4 Bedroom Student Flats in Dolemeads, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_flats_in_dolemeads,_bath__recently_reduced">4 Bedroom Student Flats in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_flats_in_dolemeads,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_flats_in_dolemeads,_bath__private_rental_sector">4 Bedroom Student Flats in Dolemeads, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_flats_in_dolemeads,_bath__fully_furnished">4 Bedroom Student Flats in Dolemeads, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_dolemeads_to_the_city_center">How close is Dolemeads to the City Center</a></li><li><a href = "#how_close_is_dolemeads_to_the_university_of_bath">How close is Dolemeads to the University of Bath</a></li><li><a href = "#how_close_is_dolemeads_to_the_bath_spa_university">How close is Dolemeads to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_flats_in_dolemeads,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Flats in Dolemeads, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£785 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Flats in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_flats_in_dolemeads,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Flats in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4-bedroom flat in Dolemeads, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b> could be the perfect solution for you. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, where your rent covers all bills such as water, electricity, gas, and internet. This means you can <b>concentrate on your studies</b> without having to worry about managing multiple bills and payments each month. By opting for an <b>all bills inclusive</b> service, you can save time and energy while also ensuring that you have a predictable monthly budget. So why not simplify your student living experience and get a quote from UniBills.</p><a id = "cheap_4_bedroom_student_flats_in_dolemeads,_bath"> <h2>Cheap 4 Bedroom Student Flats in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_flats_in_dolemeads,_bath__recently_added"> <h2>4 Bedroom Student Flats in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_flats_in_dolemeads,_bath__recently_reduced"> <h2>4 Bedroom Student Flats in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_flats_in_dolemeads,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</h2></a><p>Are you a student looking for <b>4 Bedroom Flats</b> in Dolemeads, <b>Bath</b>, Somerset? Our property portal is here to make your search easier. Located near prestigious universities like the University of <b>Bath</b> and <b>Bath</b> Spa University, Dolemeads is a popular area for student accommodation. With our user-friendly search filters, you can easily find <b>student Flats</b> that fit your needs and budget. Whether you prefer a modern apartment or a cozy flat, our portal offers a wide range of options to choose from. Don't waste time scrolling through endless listings – let us help you find the perfect 4 bedroom flat in the vibrant city of <b>Bath</b>.</p><a id = "4_bedroom_student_flats_in_dolemeads,_bath__private_rental_sector"> <h2>4 Bedroom Student Flats in Dolemeads, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and convenient living arrangement in Dolemeads, Bath, Somerset, Bath? Look no further than the private rental sector offering 4 bedroom flats in this charming area. These properties typically come <b>fully furnished</b>, allowing tenants to move in with ease and enjoy a comfortable living space from day one. Additionally, many landlords include bills in the rental price, making budgeting simpler and reducing stress for occupants. With ample space for families or groups of friends, these 4 bedroom flats in Dolemeads provide a desirable option for those looking for a convenient and hassle-free rental experience in the beautiful city of Bath.</p><a id = "4_bedroom_student_flats_in_dolemeads,_bath__fully_furnished"> <h2>4 Bedroom Student Flats in Dolemeads, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 4 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</b>? Look no further! These spacious and well-designed flats offer the perfect combination of comfort and convenience. Situated in a prime location in Bath, these flats are ideal for students or professionals looking for a hassle-free living experience. With all the furniture and appliances already provided, you can move in and start enjoying your new home right away. In Dolemeads, it is normal for student flats to be fully furnished, making your transition to Bath even smoother. With four bedrooms, there is plenty of space for you and your housemates to live comfortably. Don't miss out on the opportunity to rent one of these fantastic fully furnished flats in Dolemeads, Bath, Somerset, Bath.</p><a id = "how_close_is_dolemeads_to_the_city_center"> <h2>How close is Dolemeads to the City Center</h2></a><p><b>Dolemeads</b> is conveniently located just a short distance from <b>Bath city center</b>, making it the perfect accommodation choice for those looking to explore all that Bath has to offer. Situated only a few <b>miles</b> away, <b>Dolemeads</b> allows guests easy access to the city's renowned attractions, including the historic Roman Baths, the stunning Bath Abbey, and the bustling shops and restaurants along the charming streets. Whether you're visiting for a weekend getaway or an extended stay, staying at <b>Dolemeads</b> ensures that you are never far from the heart of <b>Bath city center</b>. With its ideal proximity and comfortable accommodations, <b>Dolemeads</b> provides the perfect base for immersing yourself in the vibrant culture and rich history of Bath.</p><a id = "how_close_is_dolemeads_to_the_university_of_bath"> <h2>How close is Dolemeads to the University of Bath</h2></a><p>Dolemeads is conveniently located close to the <b>University of Bath</b>, being just a few <b>miles</b> away. For those traveling <b>by foot</b>, it would take around 30-40 minutes to reach the university campus. Alternatively, there is a direct <b>bus route</b> connecting Dolemeads to the <b>University of Bath</b>, making the journey quick and easy for students and staff. By taking the bus, you can reach the university in just 15-20 minutes, depending on traffic. If you prefer to drive, the university is also easily accessible <b>by car</b>, with a short commute of around 10-15 minutes. The close proximity of Dolemeads to the <b>University of Bath</b> makes it a convenient and desirable location for those studying or working at the university.</p><a id = "how_close_is_dolemeads_to_the_bath_spa_university"> <h2>How close is Dolemeads to the Bath Spa University</h2></a><p>Dolemeads is conveniently located near <b>Bath Spa University</b>, being just a few <b>miles</b> away from the university campus. For students or visitors looking to travel to <b>Bath Spa University</b>, there are various transportation options available. If one prefers to walk, it can take around 30-40 minutes to reach the university on foot. Alternatively, taking the bus is a convenient option, with a <b>bus route</b> directly connecting Dolemeads to the university campus. The bus ride typically takes around 10-15 minutes. For those with access to a car, driving to <b>Bath Spa University</b> is also a viable choice, as the journey usually takes less than 10 minutes. The close proximity of Dolemeads to <b>Bath Spa University</b> makes it an ideal accommodation option for students or anyone looking to explore the university and its surroundings.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the quest for finding 4-bedroom student flats in the sought-after area of Dolemeads, Bath, the search can be a challenging yet rewarding experience. The vibrant community and convenient location make Dolemeads a top choice for students looking for accommodation. With its proximity to the University of Bath and Bath Spa University, students can enjoy easy access to campus facilities and amenities. The variety of options available, from modern apartments to traditional Victorian houses, ensures that students can find a living space that suits their preferences and budgets. The thriving local shops, cafes, and parks provide a lively atmosphere for students to immerse themselves in. Ultimately, the search for a 4-bedroom student flat in Dolemeads, Bath offers a perfect blend of comfort, convenience, and community, making it an ideal choice for students looking to make the most of their university experience.</p></>)
};

export default BathDolemeadsFlat4;