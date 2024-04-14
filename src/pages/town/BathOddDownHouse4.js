
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


const  BathOddDownHouse4 = () => 
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

    return (<><h1>4 Bedroom Student Houses in Odd Down, Bath</h1><p>We have listings for <b>4 Bedroom Student Houses in Odd Down, Bath</b> for the academic year 2024.
<b>4 Bedroom Student Houses in Odd Down, Bath</b> are ideal for students looking for spacious accommodation in a tranquil area of Bath. These properties are perfect for house sharing among students attending the local universities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-houses-in-odd-down-bath.png')} alt='4 Bedroom Student Houses in Odd Down, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Houses in Odd Down, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61725&type=House&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Houses in Odd Down, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_houses_in_odd_down,_bath_pp/pm">Prices for 4 Bedroom Student Houses in Odd Down, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_houses_in_odd_down,_bath__all_bills_inclusive">4 Bedroom Student Houses in Odd Down, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_houses_in_odd_down,_bath">Cheap 4 Bedroom Student Houses in Odd Down, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_odd_down,_bath__recently_added">4 Bedroom Student Houses in Odd Down, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_houses_in_odd_down,_bath__recently_reduced">4 Bedroom Student Houses in Odd Down, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_houses_in_odd_down,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Houses in Odd Down, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_odd_down,_bath__private_rental_sector">4 Bedroom Student Houses in Odd Down, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_houses_in_odd_down,_bath__fully_furnished">4 Bedroom Student Houses in Odd Down, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_odd_down_to_the_city_center">How close is Odd Down to the City Center</a></li><li><a href = "#how_close_is_odd_down_to_the_university_of_bath">How close is Odd Down to the University of Bath</a></li><li><a href = "#how_close_is_odd_down_to_the_bath_spa_university">How close is Odd Down to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_houses_in_odd_down,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Houses in Odd Down, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£574 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Houses in Odd Down, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^61725")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_houses_in_odd_down,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Houses in Odd Down, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4 bedroom house in Odd Down, Bath, Somerset? Keeping track of multiple bills can be a real headache, especially when you're busy with your studies. By subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b>, you can enjoy the hassle-free convenience of having all your bills taken care of in one go. This means no more worrying about splitting utility costs or chasing housemates for payments. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and have peace of mind knowing that all your bills are covered. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier with the all-inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_4_bedroom_student_houses_in_odd_down,_bath"> <h2>Cheap 4 Bedroom Student Houses in Odd Down, Bath</h2></a><p><Portlet location="REGION^61725" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_odd_down,_bath__recently_added"> <h2>4 Bedroom Student Houses in Odd Down, Bath - Recently Added</h2></a><p><Portlet location="REGION^61725" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_odd_down,_bath__recently_reduced"> <h2>4 Bedroom Student Houses in Odd Down, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61725" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_houses_in_odd_down,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Houses in Odd Down, Bath, Somerset, Bath</h2></a><p>Are you a student searching for the perfect <b>4 Bedroom Houses</b> in Odd Down, <b>Bath</b>, Somerset? Look no further than our property portal! We specialize in helping students find ideal accommodations near the University of <b>Bath</b> and <b>Bath</b> Spa University. With our user-friendly search tools, you can easily narrow down your options to find the ideal <b>student Houses</b> that fit your needs and preferences. Whether you prefer a modern house close to campus or a cozy home in a quieter neighborhood, we have a wide range of options to choose from. Our listings provide detailed information about each property, including photos, amenities, and rental prices, making it easy for you to find the perfect <b>4 Bedroom Houses</b> in Odd Down, <b>Bath</b>, Somerset.</p><a id = "4_bedroom_student_houses_in_odd_down,_bath__private_rental_sector"> <h2>4 Bedroom Student Houses in Odd Down, Bath - Private Rental Sector</h2></a><p>Looking to rent a home in the lovely neighborhood of Odd Down in Bath, Somerset? You'll find a variety of 4 bedroom houses in Odd Down, Bath that are perfect for families or sharers. These spacious properties offer plenty of room for everyone to enjoy, with the added benefit of <b>bills included</b> to make budgeting easier. Many of these houses come <b>fully furnished</b>, so you can move in and start enjoying your new home right away without the hassle of buying furniture. Whether you're looking for a cozy place to relax or a spacious property to entertain guests, the private rental sector in Odd Down has something to suit your needs. Don't miss out on the opportunity to live in one of Bath's most desirable neighborhoods in a beautiful 4 bedroom house.</p><a id = "4_bedroom_student_houses_in_odd_down,_bath__fully_furnished"> <h2>4 Bedroom Student Houses in Odd Down, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 4 Bedroom Houses in Odd Down, Bath, Somerset, Bath</b>? You're in luck! In this charming suburb of Bath, you can find cozy and convenient homes that are ready for you to move right in. Whether you're a family looking for a spacious place to call home or a group of students searching for accommodation, fully furnished options make life easier. In Odd Down, it is normal for student houses to be fully furnished, saving you the hassle of shopping for furniture and setting up utilities. With four bedrooms, there's plenty of space for everyone to enjoy their own private area while still having cozy communal spaces to come together.</p><a id = "how_close_is_odd_down_to_the_city_center"> <h2>How close is Odd Down to the City Center</h2></a><p><b>Odd Down</b>, a charming suburb located just outside of <b>Bath city center</b>, is only a few <b>miles</b> away from the bustling heart of Bath. This proximity makes <b>Odd Down</b> an ideal location for those looking to enjoy the amenities of the city while still being able to retreat to a quieter, more residential area. The journey from <b>Odd Down</b> to <b>Bath city center</b> can be easily made by car, bus, or even on foot for those who enjoy a leisurely stroll. With its close proximity to the city center, residents of <b>Odd Down</b> can enjoy all that Bath has to offer, including its historic architecture, vibrant shopping streets, and relaxing thermal spas, without having to travel far from home. Whether you're looking to explore the cultural attractions of Bath or simply enjoy a peaceful neighborhood atmosphere, <b>Odd Down</b>'s location just a few <b>miles</b> from the city center makes it an ideal place to call home.</p><a id = "how_close_is_odd_down_to_the_university_of_bath"> <h2>How close is Odd Down to the University of Bath</h2></a><p>Odd Down is conveniently located near the <b>University of Bath</b>, with the campus being just a few <b>miles</b> away. If you prefer to travel <b>by foot</b>, it would take around 45 minutes to an hour to walk to the university from Odd Down. However, there is also a direct <b>bus route</b> that connects Odd Down to the <b>University of Bath</b>, making it a quick and convenient option for students and staff members alike. The bus ride typically takes around 20-30 minutes, depending on traffic. For those who prefer to drive, it would only take about 10-15 minutes to reach the university <b>by car</b>. With multiple transportation options available, including walking, taking the bus, or driving, getting to the <b>University of Bath</b> from Odd Down is both easy and efficient.</p><a id = "how_close_is_odd_down_to_the_bath_spa_university"> <h2>How close is Odd Down to the Bath Spa University</h2></a><p>Odd Down is located just 4 <b>miles</b> away from <b>Bath Spa University</b>, making it a convenient housing option for students. The university can be easily accessed from Odd Down by various modes of transportation. <b>by foot</b>, the distance could take around an hour, providing a scenic route for those who enjoy walking. Alternatively, taking the <b>bus route</b> is a popular choice for students, with frequent services between Odd Down and the university, ensuring a quick and hassle-free journey. For those who prefer driving, the university is just a short car ride away, with easily accessible roads connecting Odd Down to <b>Bath Spa University</b>. Overall, the close proximity of Odd Down to <b>Bath Spa University</b> offers students the flexibility to choose their preferred mode of transportation while ensuring a convenient commute to and from campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 4-bedroom student house in Odd Down, Bath can be an exciting but challenging task. With its vibrant community and close proximity to local amenities, Odd Down is the ideal location for students looking for a comfortable and convenient living space. When searching for a student house, it's important to consider factors such as budget, location, and amenities. Be sure to thoroughly research the different options available and visit several properties to find the perfect fit for your needs. Additionally, consider sharing with friends to split costs and create a fun living environment. In conclusion, finding a 4-bedroom student house in Odd Down, Bath requires careful planning and consideration, but with the right approach, you can secure a cozy and convenient home for your university years.</p></>)
};

export default BathOddDownHouse4;