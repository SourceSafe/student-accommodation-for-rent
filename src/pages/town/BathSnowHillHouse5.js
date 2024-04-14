
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


const  BathSnowHillHouse5 = () => 
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

    return (<><h1>5 Bedroom Student Houses in Snow Hill, Bath</h1><p>We have listings for <b>5 Bedroom Student Houses in Snow Hill, Bath</b> for the academic year 2024. 
<b>5 Bedroom Student Houses in Snow Hill, Bath</b> offer spacious living areas and are perfect for students looking to live together while attending school in Bath. Located in a convenient area near local amenities and universities, these houses provide a comfortable and ideal living space for students.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/5-bedroom-student-houses-in-snow-hill-bath.png')} alt='5 Bedroom Student Houses in Snow Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='5 Bedroom Student Houses in Snow Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71116&type=House&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>5 Bedroom Student Houses in Snow Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_5_bedroom_student_houses_in_snow_hill,_bath_pp/pm">Prices for 5 Bedroom Student Houses in Snow Hill, Bath pp/pm</a></li><li><a href = "#5_bedroom_student_houses_in_snow_hill,_bath__all_bills_inclusive">5 Bedroom Student Houses in Snow Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_5_bedroom_student_houses_in_snow_hill,_bath">Cheap 5 Bedroom Student Houses in Snow Hill, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_snow_hill,_bath__recently_added">5 Bedroom Student Houses in Snow Hill, Bath - Recently Added</a></li><li><a href = "#5_bedroom_student_houses_in_snow_hill,_bath__recently_reduced">5 Bedroom Student Houses in Snow Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__5_bedroom_houses_in_snow_hill,_bath,_somerset,_bath">Student Accommodation Portal - 5 Bedroom Houses in Snow Hill, Bath, Somerset, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_snow_hill,_bath__private_rental_sector">5 Bedroom Student Houses in Snow Hill, Bath - Private Rental Sector</a></li><li><a href = "#5_bedroom_student_houses_in_snow_hill,_bath__fully_furnished">5 Bedroom Student Houses in Snow Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_snow_hill_to_the_city_center">How close is Snow Hill to the City Center</a></li><li><a href = "#how_close_is_snow_hill_to_the_university_of_bath">How close is Snow Hill to the University of Bath</a></li><li><a href = "#how_close_is_snow_hill_to_the_bath_spa_university">How close is Snow Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_5_bedroom_student_houses_in_snow_hill,_bath_pp/pm"> <h2>Prices for 5 Bedroom Student Houses in Snow Hill, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£725 per month </td><td><button className = 'searchButton tableButton' title='5 Bedroom Student Houses in Snow Hill, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71116")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "5_bedroom_student_houses_in_snow_hill,_bath__all_bills_inclusive"> <h2>5 Bedroom Student Houses in Snow Hill, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 5 bedroom student house in Snow Hill, Bath, Somerset can make your student life much easier. <b>UniBills.com</b> offers a convenient all-inclusive package that covers all your bills, from utilities to internet, allowing you to <b>concentrate on your studies</b> without any financial worries. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, giving you peace of mind and the freedom to focus on your academic goals. No more dealing with multiple bills or splitting costs with your housemates - <b>UniBills.com</b> takes care of everything for you. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_5_bedroom_student_houses_in_snow_hill,_bath"> <h2>Cheap 5 Bedroom Student Houses in Snow Hill, Bath</h2></a><p><Portlet location="REGION^71116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_snow_hill,_bath__recently_added"> <h2>5 Bedroom Student Houses in Snow Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_snow_hill,_bath__recently_reduced"> <h2>5 Bedroom Student Houses in Snow Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71116" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__5_bedroom_houses_in_snow_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 5 Bedroom Houses in Snow Hill, Bath, Somerset, Bath</h2></a><p>Are you a student looking for <b>5 Bedroom Houses</b> in the picturesque Snow Hill area of <b>Bath</b>, Somerset? Look no further than our property portal, where you can find a variety of <b>student Houses</b> perfect for University of <b>Bath</b> or <b>Bath</b> Spa University students. Snow Hill is a charming neighborhood known for its historic architecture and vibrant community atmosphere, making it an ideal location for student living. With our user-friendly search tools, you can easily filter through listings to find the perfect 5 Bedroom House that fits your needs and budget. Don't miss out on the opportunity to secure a cozy and convenient student accommodation in the heart of <b>Bath</b>'s cultural hub at Snow Hill.</p><a id = "5_bedroom_student_houses_in_snow_hill,_bath__private_rental_sector"> <h2>5 Bedroom Student Houses in Snow Hill, Bath - Private Rental Sector</h2></a><p>If you're looking for the perfect home in Snow Hill, Bath, Somerset, Bath, the private rental sector offers an array of options, including spacious 5 bedroom houses. These properties provide an ideal solution for those seeking a comfortable and stylish living space with the convenience of <b>bills included</b>. Whether you're a family looking for ample room to grow or a group of friends wanting to share a vibrant living experience, these houses cater to all. Additionally, many of these properties come <b>fully furnished</b>, saving you the hassle and expense of sourcing your own furniture. With an array of amenities and a prime location, renting a 5 bedroom house in Snow Hill ensures a luxurious and stress-free living experience.</p><a id = "5_bedroom_student_houses_in_snow_hill,_bath__fully_furnished"> <h2>5 Bedroom Student Houses in Snow Hill, Bath - Fully Furnished</h2></a><p>Are you searching for a spacious and comfortable living space in Snow Hill, Bath, Somerset? Look no further than the fully furnished 5 Bedroom Houses in Snow Hill, Bath. These houses offer the perfect combination of convenience and luxury, providing everything you need for a comfortable stay. With five bedrooms, there is plenty of space for you and your housemates to study, relax and socialize. The houses are thoughtfully designed and furnished to a high standard, ensuring that you feel at home from the moment you step through the door. In Bath, it is normal for student houses to be fully furnished, making the moving process seamless and stress-free. Plus, with Snow Hill's central location, you'll have easy access to all that Bath has to offer.</p><a id = "how_close_is_snow_hill_to_the_city_center"> <h2>How close is Snow Hill to the City Center</h2></a><p><b>Snow Hill</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it a great choice for visitors looking to explore all that this historic city has to offer. Whether you're visiting for the famous Roman baths, stunning Georgian architecture, or vibrant shopping and dining scene, <b>Snow Hill</b> provides easy access to the heart of Bath. With its charming streets and picturesque surroundings, <b>Snow Hill</b> offers a peaceful retreat while still being within reach of the city's bustling attractions. Just a short drive or public transport ride away, guests can easily access <b>Bath city center</b> from <b>Snow Hill</b>, making it the perfect base for your adventures in this enchanting destination. So, if you're looking for a convenient and idyllic location near <b>Bath city center</b>, <b>Snow Hill</b> is the ideal choice for your stay.</p><a id = "how_close_is_snow_hill_to_the_university_of_bath"> <h2>How close is Snow Hill to the University of Bath</h2></a><p>Snow Hill is conveniently located close to the <b>University of Bath</b>, just a few <b>miles</b> away. If you prefer to walk, it would take you around 30 minutes to reach the university campus from Snow Hill. If walking isn't your preferred mode of transportation, don't worry - there is a <b>bus route</b> that connects Snow Hill directly to the <b>University of Bath</b>. <b>by bus</b>, the journey takes about 15 minutes, making it a quick and convenient way to get to and from campus. Alternatively, if you choose to drive, it only takes about 10 minutes to reach the university <b>by car</b>. This close proximity makes Snow Hill an ideal location for students and faculty members who need easy access to the <b>University of Bath</b>.</p><a id = "how_close_is_snow_hill_to_the_bath_spa_university"> <h2>How close is Snow Hill to the Bath Spa University</h2></a><p>Snow Hill is conveniently located close to <b>Bath Spa University</b>, with the campus being just a few <b>miles</b> away. Students can easily reach the university <b>by foot</b>, taking a leisurely stroll through the charming streets of Bath to arrive at their destination. Alternatively, there is a direct <b>bus route</b> that connects Snow Hill to <b>Bath Spa University</b>, making transportation quick and efficient for those looking for a more convenient option. For those who prefer driving, the university is just a short distance away <b>by car</b>, allowing for easy access to campus facilities and amenities. Whether you choose to travel <b>by foot</b>, bus, or car, getting to and from <b>Bath Spa University</b> from Snow Hill is a breeze, ensuring a seamless and stress-free commute for students.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 5-bedroom student houses in Snow Hill, Bath, one will find a range of options to suit different preferences and budgets. Whether you're looking for a modern and fully-furnished property or a more traditional house with character, there is something for everyone in this popular student area. Many of the houses come with spacious bedrooms, communal areas, and convenient amenities nearby, making it a great choice for a group of friends looking to live together. Additionally, the proximity to the University of Bath and local shops and restaurants adds to the appeal of living in Snow Hill. Overall, finding a 5-bedroom student house in Snow Hill offers a comfortable and convenient living experience for students looking to enjoy their time in Bath.</p></>)
};

export default BathSnowHillHouse5;