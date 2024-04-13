
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


const  BathOldfieldParkHouse7 = () => 
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

    return (<><h1>7 Bedroom Student Houses in Oldfield Park, Bath</h1><p>We have listings for <b>7 Bedroom Student Houses in Oldfield Park, Bath</b> for the academic year 2024.

<b>7 Bedroom Student Houses in Oldfield Park, Bath</b> are popular among students looking to live together with friends in a spacious and convenient location. Located near the University of Bath, these houses offer easy access to campus and nearby amenities, making them a desirable choice for student accommodation. With plenty of room for studying, socializing, and relaxing, <b>7 Bedroom Student Houses in Oldfield Park, Bath</b> provide a comfortable and communal living experience for students during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/7-bedroom-student-houses-in-oldfield-park-bath.png')} alt='7 Bedroom Student Houses in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='7 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71108&type=House&beds=7")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>7 Bedroom Student Houses in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_7_bedroom_student_houses_in_oldfield_park,_bath_pp/pm">Prices for 7 Bedroom Student Houses in Oldfield Park, Bath pp/pm</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive">7 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_7_bedroom_student_houses_in_oldfield_park,_bath">Cheap 7 Bedroom Student Houses in Oldfield Park, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__recently_added">7 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced">7 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__7_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 7 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector">7 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#7_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished">7 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_7_bedroom_student_houses_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 7 Bedroom Student Houses in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£669 per month </td><td><button className = 'searchButton tableButton' title='7 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 7 bedroom student house in Oldfield Park, Bath, Somerset can be both exciting and challenging. With so much on your plate, the last thing you want to worry about is managing utility bills and expenses. This is where <b>UniBills.com</b> comes in to save the day! By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, giving you the peace of mind to <b>concentrate on your studies</b> and make the most of your student experience. Gone are the days of dealing with multiple bills and splitting costs with housemates; <b>UniBills.com</b> takes care of everything for you. So why stress over utilities when you could be exploring Bath's charming streets and vibrant culture? Get a quote from UniBills.</p><a id = "cheap_7_bedroom_student_houses_in_oldfield_park,_bath"> <h2>Cheap 7 Bedroom Student Houses in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__recently_added"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__7_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 7 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Looking for a spacious and comfortable 7-bedroom student house in Oldfield Park, <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Oldfield Park is a popular area among students due to its convenient location and vibrant atmosphere. With easy access to local amenities, transportation links, and the beautiful city of <b>Bath</b>, living in a 7-bedroom house in Oldfield Park offers the ideal student experience. Whether you're studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, our portal allows you to browse a selection of 7-bedroom houses that meet your preferences and budget. Say goodbye to the hassle of searching for student accommodation and let us help you find your dream home in <b>Bath</b>'s charming Oldfield Park.</p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living arrangement in Bath? Look no further than the <b>7 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</b>. These properties are perfect for students or professionals seeking a vibrant community atmosphere. With <b>bills included</b> in the rent, you can enjoy peace of mind knowing that all utilities are taken care of. Additionally, these houses come <b>fully furnished</b>, alleviating the stress of purchasing or moving furniture. Enjoy the convenience of a well-equipped kitchen, cozy bedrooms, and communal living areas perfect for socializing or relaxing. Don't miss out on the opportunity to live in one of the most sought-after areas in Bath.</p><a id = "7_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished"> <h2>7 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</h2></a><p>Looking for fully furnished 7 Bedroom Houses in Oldfield Park, Bath, Somerset? Look no further! In this charming area of Bath, you can find spacious and comfortable student houses that come fully furnished and ready for you to move in. Oldfield Park is known for its vibrant community and close proximity to local amenities, making it an ideal location for students. When renting a house in this area, it is normal for student houses to be fully furnished, taking the hassle out of furnishing your new home. Just imagine having a cozy living room, fully-equipped kitchen, and comfortable bedrooms all ready for you to enjoy.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming suburb located just one mile south of <b>Bath city center</b>, making it an ideal location for those looking to be close to the heart of this historic city. The proximity to <b>Bath city center</b> allows residents of <b>Oldfield Park</b> to easily access all of the fantastic amenities that the city has to offer, including the stunning Georgian architecture, beautiful parks, and world-class shopping and dining options. Whether you choose to walk, bike, or take a quick bus ride, you'll find that getting from <b>Oldfield Park</b> to <b>Bath city center</b> is quick and convenient. With its close proximity and vibrant atmosphere, <b>Oldfield Park</b> offers the perfect blend of suburban living with easy access to the bustling city center of Bath.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is just over a mile away from the <b>University of Bath</b>, making it a convenient location for students and staff alike. It's easily accessible <b>by foot</b>, with a pleasant walk taking around 20-30 minutes, depending on your pace. For those who prefer public transport, there's a direct <b>bus route</b> that can take you from Oldfield Park to the university campus in just a few minutes. If you're in a hurry or prefer the comfort of a car, the drive is quick and straightforward, typically taking around 5-10 minutes depending on traffic. With such easy access to the <b>University of Bath</b>, Oldfield Park is a popular choice for those looking for a convenient and vibrant place to live while studying or working at the university.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is a thriving neighborhood that provides easy access to <b>Bath Spa University</b>, located just over a mile away. Students living in Oldfield Park can reach the university campus conveniently <b>by foot</b>, as it is only a 20-minute walk. Alternatively, there is a direct <b>bus route</b> connecting Oldfield Park to <b>Bath Spa University</b>, making commuting quick and hassle-free. For those who prefer to drive, the university is just a short 5-minute car journey away, allowing students to easily attend lectures and seminars without the stress of a long commute. Whether you choose to travel <b>by foot</b>, bus, or car, Oldfield Park's proximity to <b>Bath Spa University</b> ensures that students can enjoy a convenient and well-connected location to pursue their studies.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, looking for a 7-bedroom student house in Oldfield Park, Bath offers students a convenient and vibrant living experience. With its close proximity to local amenities, university campuses, and transportation links, students can easily navigate and access everything they need. The variety of housing options available in this area caters to different preferences and budgets, ensuring that students can find a suitable property that meets their requirements. Additionally, the community atmosphere and student-friendly environment make Oldfield Park a desirable location for student accommodation. In conclusion, students seeking a 7-bedroom house in Oldfield Park can look forward to a well-connected and supportive living environment that enhances their academic and social experience.</p></>)
};

export default BathOldfieldParkHouse7;