
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


const  BathSladebrookHouse7 = () => 
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

    return (<><h1>7 Bedroom Student Houses in Sladebrook, Bath</h1><p>We have listings for <b>7 Bedroom Student Houses in Sladebrook, Bath</b> for the academic year 2024. 

<b>7 Bedroom Student Houses in Sladebrook, Bath</b> offer spacious accommodation for groups of students looking to live together in Bath. These houses typically come fully furnished and are situated in convenient locations close to universities and local amenities. With multiple bedrooms, these properties are ideal for larger student groups looking for shared living spaces.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/7-bedroom-student-houses-in-sladebrook-bath.png')} alt='7 Bedroom Student Houses in Sladebrook, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='7 Bedroom Student Houses in Sladebrook, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71115&type=House&beds=7")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>7 Bedroom Student Houses in Sladebrook, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_7_bedroom_student_houses_in_sladebrook,_bath_pp/pm">Prices for 7 Bedroom Student Houses in Sladebrook, Bath pp/pm</a></li><li><a href = "#7_bedroom_student_houses_in_sladebrook,_bath__all_bills_inclusive">7 Bedroom Student Houses in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_7_bedroom_student_houses_in_sladebrook,_bath">Cheap 7 Bedroom Student Houses in Sladebrook, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_sladebrook,_bath__recently_added">7 Bedroom Student Houses in Sladebrook, Bath - Recently Added</a></li><li><a href = "#7_bedroom_student_houses_in_sladebrook,_bath__recently_reduced">7 Bedroom Student Houses in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__7_bedroom_houses_in_sladebrook,_bath,_somerset,_bath">Student Accommodation Portal - 7 Bedroom Houses in Sladebrook, Bath, Somerset, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_sladebrook,_bath__private_rental_sector">7 Bedroom Student Houses in Sladebrook, Bath - Private Rental Sector</a></li><li><a href = "#7_bedroom_student_houses_in_sladebrook,_bath__fully_furnished">7 Bedroom Student Houses in Sladebrook, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_sladebrook_to_the_city_center">How close is Sladebrook to the City Center</a></li><li><a href = "#how_close_is_sladebrook_to_the_university_of_bath">How close is Sladebrook to the University of Bath</a></li><li><a href = "#how_close_is_sladebrook_to_the_bath_spa_university">How close is Sladebrook to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_7_bedroom_student_houses_in_sladebrook,_bath_pp/pm"> <h2>Prices for 7 Bedroom Student Houses in Sladebrook, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton tableButton' title='7 Bedroom Student Houses in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "7_bedroom_student_houses_in_sladebrook,_bath__all_bills_inclusive"> <h2>7 Bedroom Student Houses in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple utility bills for your 7-bedroom student house in Sladebrook, Bath, Somerset? Say goodbye to the headache of managing individual bills and hello to the convenience of an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a one-stop solution for all your utility needs, allowing you to <b>concentrate on your studies</b> without the added stress of keeping track of various expenses. From electricity and water to internet and TV licenses, <b>UniBills.com</b> covers it all, ensuring that you have everything you need for a comfortable living environment. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and simplify your student life. Take the first step towards a stress-free living experience and get a quote from <b>UniBills.com</b> or any accommodation on this website.</p><a id = "cheap_7_bedroom_student_houses_in_sladebrook,_bath"> <h2>Cheap 7 Bedroom Student Houses in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_sladebrook,_bath__recently_added"> <h2>7 Bedroom Student Houses in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_sladebrook,_bath__recently_reduced"> <h2>7 Bedroom Student Houses in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__7_bedroom_houses_in_sladebrook,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 7 Bedroom Houses in Sladebrook, Bath, Somerset, Bath</h2></a><p>Are you searching for 7 Bedroom <b>student Houses</b> near the University of <b>Bath</b> or <b>Bath</b> Spa University? Look no further than our property portal, where you can easily find listings for spacious and comfortable student accommodation in Sladebrook, <b>Bath</b>, Somerset. Our platform offers a user-friendly interface that allows you to filter your search based on your specific requirements, such as the number of bedrooms, location, and budget. With our extensive database of properties, you can quickly discover the perfect <b>7 Bedroom Houses</b> that meet your needs. Whether you prefer a modern house with all the amenities or a cozy traditional home, our portal has options to suit every taste.</p><a id = "7_bedroom_student_houses_in_sladebrook,_bath__private_rental_sector"> <h2>7 Bedroom Student Houses in Sladebrook, Bath - Private Rental Sector</h2></a><p>Are you looking for a spacious and convenient living arrangement in the beautiful city of Bath, Somerset? Well, look no further than the private rental sector offering 7 bedroom houses in Sladebrook. These large houses are perfect for families or groups of friends looking to live together while still maintaining their individual space. What's even better is that these houses come <b>fully furnished</b>, so you can move in hassle-free and start enjoying your new home right away. To top it off, many of these rentals also have <b>bills included</b>, making budgeting a breeze. Don't miss out on the opportunity to live in one of these fantastic properties in the heart of Bath.</p><a id = "7_bedroom_student_houses_in_sladebrook,_bath__fully_furnished"> <h2>7 Bedroom Student Houses in Sladebrook, Bath - Fully Furnished</h2></a><p>If you're looking for spacious living in the charming city of Bath, Somerset, look no further than fully furnished 7 Bedroom Houses in Sladebrook. These properties offer a perfect blend of convenience and comfort, making them ideal for large families or groups of friends looking to live together. Located in a vibrant neighborhood, these houses provide easy access to local amenities and transportation links, ensuring you can make the most of what Bath has to offer. In Sladebrook, Bath, it is normal for student Houses to be fully furnished, saving you time and hassle when it comes to setting up your new home. Whether you're studying at the nearby university or simply looking for a stylish and functional living space, these houses are sure to meet your needs. Don't miss out on the opportunity to experience the best of Bath living in these spacious and well-equipped properties.</p><a id = "how_close_is_sladebrook_to_the_city_center"> <h2>How close is Sladebrook to the City Center</h2></a><p><b>Sladebrook</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it a fantastic choice for those looking to explore all that this historic city has to offer. With a quick drive or bus ride, residents of <b>Sladebrook</b> can find themselves in the heart of Bath in no time. From the iconic Roman Baths to the stunning architecture of the Royal Crescent, there is so much to see and do in the city center. Whether you're looking to shop in the bustling high street, enjoy a leisurely stroll along the River Avon, or indulge in delicious cuisine at one of the many restaurants, <b>Bath city center</b> has something for everyone. So, if you're seeking a peaceful residential area that is still close to all the action, <b>Sladebrook</b> is the perfect location for you.</p><a id = "how_close_is_sladebrook_to_the_university_of_bath"> <h2>How close is Sladebrook to the University of Bath</h2></a><p>Located just 1.5 <b>miles</b> away from the prestigious <b>University of Bath</b>, Sladebrook is a convenient and popular residential area for students and faculty members alike. This close proximity makes it easily accessible <b>by foot</b>, with a pleasant walk taking around 30 minutes to reach campus. For those who prefer not to walk, there are efficient <b>bus route</b>s connecting Sladebrook to the university, making the journey quick and convenient. Additionally, <b>by car</b>, the journey between Sladebrook and the <b>University of Bath</b> is a short 10-minute drive, making commuting to campus a breeze. Whether you choose to travel <b>by foot</b>, bus, or car, living in Sladebrook provides a practical and convenient location for anyone studying or working at the <b>University of Bath</b>.</p><a id = "how_close_is_sladebrook_to_the_bath_spa_university"> <h2>How close is Sladebrook to the Bath Spa University</h2></a><p>Sladebrook is conveniently located close to <b>Bath Spa University</b>, being only a few <b>miles</b> away from the campus. For students or visitors looking to travel to <b>Bath Spa University</b>, there are several convenient transportation options available. If you prefer walking, the university is approximately a 30-minute walk from Sladebrook. Alternatively, there is a direct <b>bus route</b> that can take you to the university in around 15 minutes, making it a quick and easy commute. For those who prefer driving, the journey <b>by car</b> typically takes around 10 minutes, depending on traffic conditions. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from Sladebrook is convenient and accessible, making it an ideal location for students or anyone looking to explore the university campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 7-bedroom student house in Sladebrook, Bath can be a challenging task, but with thorough research and guidance, you can find the perfect property for your needs. Consider factors like location, amenities, and budget when searching for the ideal student accommodation. Sladebrook offers a range of options for students, from modern apartments to traditional houses, catering to different preferences and requirements. When conducting your search, make sure to prioritize safety and comfort, as well as proximity to the university and local amenities. Keep in mind that communication with potential housemates is essential to ensure a harmonious living environment. In conclusion, with a strategic approach and awareness of your needs, finding a 7-bedroom student house in Sladebrook can be a rewarding experience for your academic journey.</p></>)
};

export default BathSladebrookHouse7;