
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


const  BathAvonParkHouse5 = () => 
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

    return (<><h1>5 Bedroom Student Houses in Avon Park, Bath</h1><p>We have listings for <b>5 Bedroom Student Houses in Avon Park, Bath</b> for the academic year 2024. 

<b>5 Bedroom Student Houses in Avon Park, Bath</b> provide spacious living arrangements for students looking to share housing while studying in Bath. These properties are ideal for groups of students who want to live together in a comfortable and convenient location within close proximity to their universities and amenities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/5-bedroom-student-houses-in-avon-park-bath.png')} alt='5 Bedroom Student Houses in Avon Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='5 Bedroom Student Houses in Avon Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71091&type=House&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>5 Bedroom Student Houses in Avon Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_5_bedroom_student_houses_in_avon_park,_bath_pp/pm">Prices for 5 Bedroom Student Houses in Avon Park, Bath pp/pm</a></li><li><a href = "#5_bedroom_student_houses_in_avon_park,_bath__all_bills_inclusive">5 Bedroom Student Houses in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_5_bedroom_student_houses_in_avon_park,_bath">Cheap 5 Bedroom Student Houses in Avon Park, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_avon_park,_bath__recently_added">5 Bedroom Student Houses in Avon Park, Bath - Recently Added</a></li><li><a href = "#5_bedroom_student_houses_in_avon_park,_bath__recently_reduced">5 Bedroom Student Houses in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__5_bedroom_houses_in_avon_park,_bath,_somerset,_bath">Student Accommodation Portal - 5 Bedroom Houses in Avon Park, Bath, Somerset, Bath</a></li><li><a href = "#5_bedroom_student_houses_in_avon_park,_bath__private_rental_sector">5 Bedroom Student Houses in Avon Park, Bath - Private Rental Sector</a></li><li><a href = "#5_bedroom_student_houses_in_avon_park,_bath__fully_furnished">5 Bedroom Student Houses in Avon Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_avon_park_to_the_city_center">How close is Avon Park to the City Center</a></li><li><a href = "#how_close_is_avon_park_to_the_university_of_bath">How close is Avon Park to the University of Bath</a></li><li><a href = "#how_close_is_avon_park_to_the_bath_spa_university">How close is Avon Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_5_bedroom_student_houses_in_avon_park,_bath_pp/pm"> <h2>Prices for 5 Bedroom Student Houses in Avon Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£725 per month </td><td><button className = 'searchButton tableButton' title='5 Bedroom Student Houses in Avon Park, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "5_bedroom_student_houses_in_avon_park,_bath__all_bills_inclusive"> <h2>5 Bedroom Student Houses in Avon Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 5 bedroom student house in Avon Park, Bath, Somerset is a smart choice for busy students looking to simplify their living situation. <b>UniBills.com</b> offers the perfect solution, allowing you to <b>concentrate on your studies</b> without worrying about utility bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, covering essentials like electricity, water, heating, and internet. This means no more splitting bills with housemates or dealing with unexpected costs. By choosing this service, you can streamline your living expenses and budget more effectively. Get a quote from <b>UniBills.com</b> or any accommodation on this website to make your student life more convenient and stress-free.</p><a id = "cheap_5_bedroom_student_houses_in_avon_park,_bath"> <h2>Cheap 5 Bedroom Student Houses in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_avon_park,_bath__recently_added"> <h2>5 Bedroom Student Houses in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_houses_in_avon_park,_bath__recently_reduced"> <h2>5 Bedroom Student Houses in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__5_bedroom_houses_in_avon_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 5 Bedroom Houses in Avon Park, Bath, Somerset, Bath</h2></a><p>Are you a student searching for the perfect 5 Bedroom <b>student Houses</b> in Avon Park, <b>Bath</b>, Somerset? Look no further than our property portal, where you can easily find a variety of options to suit your needs. Located in close proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University, Avon Park is a popular area for students looking for spacious accommodation. Whether you're studying with a group of friends or looking for a place to call your own, our portal offers a range of options to choose from. From modern and stylish to traditional and cozy, there's something for everyone in Avon Park. Don't miss out on the opportunity to secure your ideal student house in <b>Bath</b> through our user-friendly portal. Start your search today and find the perfect 5 Bedroom House for your student lifestyle in Avon Park, <b>Bath</b>, Somerset.</p><a id = "5_bedroom_student_houses_in_avon_park,_bath__private_rental_sector"> <h2>5 Bedroom Student Houses in Avon Park, Bath - Private Rental Sector</h2></a><p>Are you looking for a spacious and comfortable living space in Avon Park, Bath, Somerset? Consider the private rental sector offering 5 Bedroom Houses in Avon Park, Bath. These properties are perfect for families or groups looking for a larger home to rent. Many of these houses come <b>fully furnished</b>, so you can move in and feel at home right away. Additionally, some landlords offer the convenience of having <b>bills included</b> in the rental price, making budgeting easier for tenants. With plenty of space, amenities, and a convenient location in Bath, renting a 5-bedroom house in Avon Park could be the perfect housing solution for you.</p><a id = "5_bedroom_student_houses_in_avon_park,_bath__fully_furnished"> <h2>5 Bedroom Student Houses in Avon Park, Bath - Fully Furnished</h2></a><p>If you are looking for spacious and convenient living in Bath, Somerset, look no further than the fully furnished 5 Bedroom Houses in Avon Park. These properties offer the perfect blend of comfort and style, making them ideal for families, professionals, or even students. In Bath, it is normal for student houses to be fully furnished, ensuring that tenants can move in and start enjoying their new home right away. With five bedrooms, there is plenty of space for everyone to have their own privacy, while still enjoying the communal areas for gathering and socializing. Located in the charming Avon Park neighborhood, residents have easy access to local amenities, beautiful green spaces, and excellent transport links. Don't miss out on the opportunity to live in one of these fantastic fully furnished houses in Bath.</p><a id = "how_close_is_avon_park_to_the_city_center"> <h2>How close is Avon Park to the City Center</h2></a><p><b>Avon Park</b> is conveniently located just **1.5 <b>miles</b>** from the bustling heart of <b>Bath city center</b>. This close proximity makes it easy for residents and visitors to enjoy all the cultural attractions, shopping districts, and dining options that Bath has to offer. Whether you're exploring the historic Roman Baths, strolling through the picturesque streets lined with Georgian architecture, or browsing the local markets, <b>Avon Park</b> provides a peaceful retreat that is still within easy reach of the city's vibrant energy. With just a short drive or a leisurely walk, you can find yourself immersed in the rich history and modern charm of <b>Bath city center</b>, making <b>Avon Park</b> the perfect base for your adventures in this iconic destination.</p><a id = "how_close_is_avon_park_to_the_university_of_bath"> <h2>How close is Avon Park to the University of Bath</h2></a><p>Avon Park, situated just a stone's throw away from the renowned <b>University of Bath</b>, offers students the ideal blend of convenience and tranquility. Located just a mere 1.5 <b>miles</b> away from the university campus, Avon Park provides easy access to the university via the convenient <b>bus route</b> that connects the two locations. For those who prefer to travel <b>by foot</b>, a leisurely stroll of approximately 30 minutes will lead you to the heart of the university campus from Avon Park. Alternatively, the short distance can also be covered in just a few minutes by hopping on the regular bus service that runs between Avon Park and the <b>University of Bath</b>. For those with a car, the journey is a quick 5-minute drive, making commuting to and from the university a breeze. With its close proximity to the <b>University of Bath</b>, Avon Park presents itself as an ideal accommodation option for students seeking a peaceful residential area within easy reach of campus facilities and amenities.</p><a id = "how_close_is_avon_park_to_the_bath_spa_university"> <h2>How close is Avon Park to the Bath Spa University</h2></a><p><b>Bath Spa University</b> is a highly regarded institution located in the beautiful city of Bath, England. For students considering studying here, it is important to know the distance between Avon Park and the university campus. Avon Park is conveniently situated just a few <b>miles</b> away from <b>Bath Spa University</b>, making it easily accessible <b>by foot</b>, bus, or car. If you prefer to walk, the university is approximately a 30-minute walk from Avon Park, providing a scenic route through the charming city streets. Alternatively, taking the bus is a convenient option, with a direct <b>bus route</b> available that can get you to campus in around 10-15 minutes. For those who prefer driving, the journey <b>by car</b> typically takes about 10-15 minutes, depending on traffic. Overall, Avon Park offers a close and convenient location for students attending <b>Bath Spa University</b>, with various transportation options to choose from.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a 5-bedroom student house in Avon Park, Bath can be a daunting task, but with the right resources and guidance, it can be a rewarding experience. Consider factors such as location, proximity to campus, amenities, and rental costs when choosing the perfect home for you and your roommates. Keep in mind the benefits of having ample space, privacy, and a comfortable living environment for studying and socializing. With a variety of options available, from modern apartments to traditional townhouses, Avon Park offers a range of choices to fit your needs and preferences. Take your time to explore the listings, schedule viewings, and make an informed decision. Remember that your student house will be not just a place to live but a space to create memories and foster friendships that will last a lifetime.</p></>)
};

export default BathAvonParkHouse5;