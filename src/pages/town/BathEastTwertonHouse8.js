
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


const  BathEastTwertonHouse8 = () => 
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

    return (<><h1>8 Bedroom Student Houses in East Twerton, Bath</h1><p>We have listings for <b>8 Bedroom Student Houses in East Twerton, Bath</b> for the academic year 2024.

<b>8 Bedroom Student Houses in East Twerton, Bath</b> offer spacious and comfortable accommodation for large groups of students. These properties are ideal for students looking to live together while studying at nearby universities or colleges in Bath. With multiple bedrooms and shared living spaces, 8 Bedroom Student Houses in East Twerton provide a convenient and communal living arrangement for students during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/8-bedroom-student-houses-in-east-twerton-bath.png')} alt='8 Bedroom Student Houses in East Twerton, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='8 Bedroom Student Houses in East Twerton, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71098&type=House&beds=8")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>8 Bedroom Student Houses in East Twerton, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_8_bedroom_student_houses_in_east_twerton,_bath_pp/pm">Prices for 8 Bedroom Student Houses in East Twerton, Bath pp/pm</a></li><li><a href = "#8_bedroom_student_houses_in_east_twerton,_bath__all_bills_inclusive">8 Bedroom Student Houses in East Twerton, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_8_bedroom_student_houses_in_east_twerton,_bath">Cheap 8 Bedroom Student Houses in East Twerton, Bath</a></li><li><a href = "#8_bedroom_student_houses_in_east_twerton,_bath__recently_added">8 Bedroom Student Houses in East Twerton, Bath - Recently Added</a></li><li><a href = "#8_bedroom_student_houses_in_east_twerton,_bath__recently_reduced">8 Bedroom Student Houses in East Twerton, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__8_bedroom_houses_in_east_twerton,_bath,_somerset,_bath">Student Accommodation Portal - 8 Bedroom Houses in East Twerton, Bath, Somerset, Bath</a></li><li><a href = "#8_bedroom_student_houses_in_east_twerton,_bath__private_rental_sector">8 Bedroom Student Houses in East Twerton, Bath - Private Rental Sector</a></li><li><a href = "#8_bedroom_student_houses_in_east_twerton,_bath__fully_furnished">8 Bedroom Student Houses in East Twerton, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_east_twerton_to_the_city_center">How close is East Twerton to the City Center</a></li><li><a href = "#how_close_is_east_twerton_to_the_university_of_bath">How close is East Twerton to the University of Bath</a></li><li><a href = "#how_close_is_east_twerton_to_the_bath_spa_university">How close is East Twerton to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_8_bedroom_student_houses_in_east_twerton,_bath_pp/pm"> <h2>Prices for 8 Bedroom Student Houses in East Twerton, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£560 per month </td><td><button className = 'searchButton tableButton' title='8 Bedroom Student Houses in East Twerton, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71098")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "8_bedroom_student_houses_in_east_twerton,_bath__all_bills_inclusive"> <h2>8 Bedroom Student Houses in East Twerton, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for accommodation in East Twerton, Bath, Somerset? Look no further! Imagine living in an 8-bedroom student house with <b>all bills inclusive</b>, courtesy of <b>UniBills.com</b>. By opting for this convenient service, you can <b>concentrate on your studies</b> without worrying about managing multiple utility bills. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers your electricity, water, gas, internet, and any other bills you may encounter. This means no more budgeting for unexpected costs or arguing with housemates over who owes what. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student living experience stress-free and comfortable. Choose convenience and peace of mind with an all-bills-inclusive service for your next academic year.</p><a id = "cheap_8_bedroom_student_houses_in_east_twerton,_bath"> <h2>Cheap 8 Bedroom Student Houses in East Twerton, Bath</h2></a><p><Portlet location="REGION^71098" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "8_bedroom_student_houses_in_east_twerton,_bath__recently_added"> <h2>8 Bedroom Student Houses in East Twerton, Bath - Recently Added</h2></a><p><Portlet location="REGION^71098" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "8_bedroom_student_houses_in_east_twerton,_bath__recently_reduced"> <h2>8 Bedroom Student Houses in East Twerton, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71098" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__8_bedroom_houses_in_east_twerton,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 8 Bedroom Houses in East Twerton, Bath, Somerset, Bath</h2></a><p>Are you looking for spacious and comfortable accommodation for you and your friends near the University of <b>Bath</b> or <b>Bath</b> Spa University? Our property portal is here to help you find the perfect 8-bedroom <b>student Houses</b> in East Twerton, <b>Bath</b>, Somerset. Located in a vibrant and student-friendly neighborhood, these houses offer ample space for studying and socializing. With easy access to public transportation and local amenities, living in East Twerton provides a convenient and enjoyable student experience. Whether you're studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, our selection of 8-bedroom houses ensures that you and your housemates can live together in a cozy and inviting environment. Start your search today and find the ideal student accommodation that suits your needs and preferences.</p><a id = "8_bedroom_student_houses_in_east_twerton,_bath__private_rental_sector"> <h2>8 Bedroom Student Houses in East Twerton, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living arrangement in East Twerton, Bath, Somerset? Consider renting one of the 8 Bedroom Houses in this vibrant area. These properties offer ample space for house shares or large families and are ideal for those seeking a sense of community and sociable living. Many of these houses come <b>fully furnished</b>, saving you the hassle of moving furniture. Additionally, some landlords offer <b>bills included</b> in the rental price, making budgeting easier and offering peace of mind.</p><a id = "8_bedroom_student_houses_in_east_twerton,_bath__fully_furnished"> <h2>8 Bedroom Student Houses in East Twerton, Bath - Fully Furnished</h2></a><p>If you are looking for spacious and comfortable accommodation in East Twerton, Bath, Somerset, fully furnished 8 Bedroom Houses are the perfect choice for you. These houses offer ample living space for a large group of people, making it ideal for families or groups of friends looking to live together. Located in the vibrant city of Bath, these houses provide easy access to local amenities, parks, and public transportation. Additionally, it is normal for student houses to be fully furnished, meaning you can move in hassle-free without the need to worry about buying furniture. With 8 bedrooms, there is plenty of room for everyone to have their own space while still enjoying communal areas for socializing. Don't miss out on the opportunity to live in one of these <b>fully furnished 8 Bedroom Houses in East Twerton, Bath, Somerset, Bath</b>.</p><a id = "how_close_is_east_twerton_to_the_city_center"> <h2>How close is East Twerton to the City Center</h2></a><p><b>East Twerton</b> is a quaint neighborhood located just a few <b>miles</b> away from the bustling <b>Bath city center</b>. With its close proximity to the heart of Bath, residents of <b>East Twerton</b> can easily access all the amenities and attractions that the city has to offer. Whether it's exploring the historic Roman baths, shopping in the vibrant city center, or enjoying a leisurely walk along the River Avon, residents of <b>East Twerton</b> have easy access to it all. Additionally, the convenient public transportation options make it simple to travel back and forth between <b>East Twerton</b> and <b>Bath city center</b>. So, while <b>East Twerton</b> may be just a few <b>miles</b> away from the city center, its residents can still enjoy the best that Bath has to offer.</p><a id = "how_close_is_east_twerton_to_the_university_of_bath"> <h2>How close is East Twerton to the University of Bath</h2></a><p>East Twerton is conveniently located just over a mile away from the prestigious <b>University of Bath</b>. The university is easily accessible from East Twerton <b>by foot</b>, taking around 20-25 minutes to reach the campus. For those who prefer public transportation, there is a direct <b>bus route</b> that connects East Twerton to the university, making the journey quick and convenient. <b>by bus</b>, the commute takes approximately 10-15 minutes, providing an efficient way for students and faculty to travel between the two locations. Additionally, for those who prefer to drive, the journey between East Twerton and the <b>University of Bath</b> takes around 5-10 minutes <b>by car</b>, depending on traffic conditions. The close proximity of East Twerton to the <b>University of Bath</b> makes it an ideal location for students and faculty members alike, offering a convenient and efficient way to access the university campus.</p><a id = "how_close_is_east_twerton_to_the_bath_spa_university"> <h2>How close is East Twerton to the Bath Spa University</h2></a><p>East Twerton is located just 1.5 <b>miles</b> away from <b>Bath Spa University</b>, making it a convenient location for students and faculty. For those who prefer walking, it takes around 30 minutes to reach the university campus on foot. Alternatively, there is a direct <b>bus route</b> that connects East Twerton to <b>Bath Spa University</b>, allowing for a quick and easy journey <b>by bus</b>. If driving is more your style, the university is only a short 10-minute car ride away from East Twerton. This close proximity makes East Twerton an ideal choice for those looking to be near <b>Bath Spa University</b> while still enjoying the peaceful residential atmosphere of the neighborhood.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for an 8-bedroom student house in East Twerton, Bath can be a challenging task. With amenities such as spacious bedrooms, communal areas, and proximity to universities, these houses are in high demand. When searching for the perfect property, it is essential to consider factors such as location, budget, and lease terms. East Twerton offers a vibrant community atmosphere with easy access to local shops, restaurants, and public transportation. Additionally, ensuring that the house meets safety regulations and has reliable maintenance services is crucial for a comfortable living experience. In conclusion, finding an 8-bedroom student house in East Twerton requires thorough research and planning to secure a suitable and convenient accommodation for the academic year.</p></>)
};

export default BathEastTwertonHouse8;