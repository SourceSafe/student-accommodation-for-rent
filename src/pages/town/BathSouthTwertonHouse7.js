
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


const  BathSouthTwertonHouse7 = () => 
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

    return (<><h1>7 Bedroom Student Houses in South Twerton, Bath</h1><p>We have listings for <b>7 Bedroom Student Houses in South Twerton, Bath</b> for the academic year 2024. 
<b>7 Bedroom Student Houses in South Twerton, Bath</b> offer spacious living accommodations for students attending university in Bath. These properties are perfect for larger groups of students looking to live together while studying in the city. The houses are conveniently located in South Twerton, providing easy access to campus and local amenities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/7-bedroom-student-houses-in-south-twerton-bath.png')} alt='7 Bedroom Student Houses in South Twerton, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='7 Bedroom Student Houses in South Twerton, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71117&type=House&beds=7")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>7 Bedroom Student Houses in South Twerton, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_7_bedroom_student_houses_in_south_twerton,_bath_pp/pm">Prices for 7 Bedroom Student Houses in South Twerton, Bath pp/pm</a></li><li><a href = "#7_bedroom_student_houses_in_south_twerton,_bath__all_bills_inclusive">7 Bedroom Student Houses in South Twerton, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_7_bedroom_student_houses_in_south_twerton,_bath">Cheap 7 Bedroom Student Houses in South Twerton, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_south_twerton,_bath__recently_added">7 Bedroom Student Houses in South Twerton, Bath - Recently Added</a></li><li><a href = "#7_bedroom_student_houses_in_south_twerton,_bath__recently_reduced">7 Bedroom Student Houses in South Twerton, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__7_bedroom_houses_in_south_twerton,_bath,_somerset,_bath">Student Accommodation Portal - 7 Bedroom Houses in South Twerton, Bath, Somerset, Bath</a></li><li><a href = "#7_bedroom_student_houses_in_south_twerton,_bath__private_rental_sector">7 Bedroom Student Houses in South Twerton, Bath - Private Rental Sector</a></li><li><a href = "#7_bedroom_student_houses_in_south_twerton,_bath__fully_furnished">7 Bedroom Student Houses in South Twerton, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_south_twerton_to_the_city_center">How close is South Twerton to the City Center</a></li><li><a href = "#how_close_is_south_twerton_to_the_university_of_bath">How close is South Twerton to the University of Bath</a></li><li><a href = "#how_close_is_south_twerton_to_the_bath_spa_university">How close is South Twerton to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_7_bedroom_student_houses_in_south_twerton,_bath_pp/pm"> <h2>Prices for 7 Bedroom Student Houses in South Twerton, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£567 per month </td><td><button className = 'searchButton tableButton' title='7 Bedroom Student Houses in South Twerton, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71117")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "7_bedroom_student_houses_in_south_twerton,_bath__all_bills_inclusive"> <h2>7 Bedroom Student Houses in South Twerton, Bath - All Bills Inclusive</h2></a><p>Living in a 7-bedroom student house in South Twerton, Bath, Somerset, can be a hectic experience, especially when it comes to managing bills and expenses. However, there is a convenient solution that can help ease your stress and allow you to <b>concentrate on your studies</b> - opting for an <b>all bills inclusive</b> service. By choosing an <b>all bills inclusive</b> package through <b>UniBills.com</b> or any accommodation on this website, you can enjoy the hassle free all inclusive option provided by <b>UniBills.com</b>. This means that all your utility bills, such as electricity, water, gas, and even internet, are covered in one convenient monthly payment. No more worrying about splitting bills, chasing housemates for their share, or dealing with unexpected costs. With an <b>all bills inclusive</b> service, you can budget more effectively and have peace of mind knowing that everything is taken care of. Say goodbye to bill-related stress and hello to a more relaxed living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and enjoy the benefits of an <b>all bills inclusive</b> service.</p><a id = "cheap_7_bedroom_student_houses_in_south_twerton,_bath"> <h2>Cheap 7 Bedroom Student Houses in South Twerton, Bath</h2></a><p><Portlet location="REGION^71117" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_south_twerton,_bath__recently_added"> <h2>7 Bedroom Student Houses in South Twerton, Bath - Recently Added</h2></a><p><Portlet location="REGION^71117" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "7_bedroom_student_houses_in_south_twerton,_bath__recently_reduced"> <h2>7 Bedroom Student Houses in South Twerton, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71117" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__7_bedroom_houses_in_south_twerton,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 7 Bedroom Houses in South Twerton, Bath, Somerset, Bath</h2></a><p>Looking for a spacious and comfortable student accommodation in <b>Bath</b>? Our property portal specializes in helping you find the perfect <b>7 Bedroom Houses</b> in South Twerton, <b>Bath</b>, Somerset. Situated near the University of <b>Bath</b> and <b>Bath</b> Spa University, our listings offer convenient access to campus as well as the vibrant city center. These <b>student Houses</b> are ideal for large groups looking to live together while studying in <b>Bath</b>. With a range of amenities and modern facilities, you can enjoy a comfortable living experience during your time at university. Don't miss out on the opportunity to secure a fantastic 7 Bedroom House in this sought-after area of <b>Bath</b>.</p><a id = "7_bedroom_student_houses_in_south_twerton,_bath__private_rental_sector"> <h2>7 Bedroom Student Houses in South Twerton, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable home in the vibrant city of Bath? Consider <b>7 Bedroom Houses in South Twerton, Bath, Somerset, Bath</b>, which offer ample space for larger families or groups of friends. These properties come <b>fully furnished</b>, ensuring you have everything you need for a cozy and convenient living experience. Moreover, many of these houses come with <b>bills included</b>, taking the hassle out of managing multiple payments. With easy access to local amenities, parks, and schools, South Twerton offers a peaceful retreat from the bustling city center while still being within reach of all that Bath has to offer. Don't miss out on the opportunity to rent one of these fantastic houses in this charming neighborhood.</p><a id = "7_bedroom_student_houses_in_south_twerton,_bath__fully_furnished"> <h2>7 Bedroom Student Houses in South Twerton, Bath - Fully Furnished</h2></a><p>Are you looking for a spacious and well-equipped place to call home in Bath, Somerset? Look no further than the fully furnished 7 Bedroom Houses in South Twerton. These houses provide the perfect blend of comfort and convenience, with everything you need for a cozy and functional living space. Located in the vibrant neighborhood of South Twerton, these properties offer easy access to local amenities, transport links, and the bustling city center of Bath. Whether you are a student looking for accommodation close to campus or a family seeking a spacious home, these fully furnished houses cater to a range of needs and preferences. In Bath, it is normal for student Houses to be fully furnished, making your move-in process a breeze. Enjoy the ease of settling into your new home without the hassle of furnishing it yourself. Don't miss out on the opportunity to experience comfortable and hassle-free living in these 7 Bedroom Houses in South Twerton, Bath.</p><a id = "how_close_is_south_twerton_to_the_city_center"> <h2>How close is South Twerton to the City Center</h2></a><p><b>South Twerton</b> is located just over 2 <b>miles</b> away from <b>Bath city center</b>, making it a convenient and accessible location for residents looking to enjoy all that the vibrant city has to offer. The short distance allows for easy access to the shops, restaurants, and cultural attractions that Bath is renowned for, while still offering a quieter and more residential atmosphere in <b>South Twerton</b>. Whether you prefer to take a leisurely stroll into the city center or hop on a quick bus ride, the proximity of <b>South Twerton</b> to <b>Bath city center</b> ensures that you can enjoy the best of both worlds. With its prime location and seamless connection to the heart of Bath, <b>South Twerton</b> is an ideal choice for those seeking a balance between city living and suburban tranquility.</p><a id = "how_close_is_south_twerton_to_the_university_of_bath"> <h2>How close is South Twerton to the University of Bath</h2></a><p>South Twerton is conveniently located close to the <b>University of Bath</b>, being only a few <b>miles</b> away from the campus. For students and faculty looking to commute, the university is easily accessible from South Twerton <b>by foot</b>, bus, or car. The campus is just a short bus ride away, with a direct <b>bus route</b> connecting the two locations. <b>by car</b>, the journey takes around 10-15 minutes, making it a quick and convenient commute for those driving. Whether you prefer to walk, take public transport, or drive, South Twerton offers a great location for easy access to the <b>University of Bath</b>.</p><a id = "how_close_is_south_twerton_to_the_bath_spa_university"> <h2>How close is South Twerton to the Bath Spa University</h2></a><p>South Twerton is just over 2 <b>miles</b> away from <b>Bath Spa University</b>, making it a convenient location for students looking to live close to campus. <b>by foot</b>, the journey takes around 40 minutes, providing a refreshing opportunity to take in the beautiful surroundings of Bath. For those looking for a quicker commute, South Twerton is well-connected to the university <b>by bus</b>, with several routes passing through the area. This offers students a convenient and cost-effective way to travel to and from campus. Additionally, for those with a car, the drive from South Twerton to <b>Bath Spa University</b> is just about 10 minutes, making it a great option for those who prefer to have their own transportation. Ultimately, South Twerton's proximity to <b>Bath Spa University</b> provides students with a range of options for getting to and from campus, ensuring a convenient and stress-free commute.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After meticulously searching for 7 Bedroom Student Houses in South Twerton, Bath, we have gathered valuable insights and information. Our thorough exploration of the housing options in this area has revealed a variety of enticing properties that cater to the needs of students. From spacious living areas to convenient amenities, the student houses available in South Twerton offer an ideal setting for communal living and studying. Additionally, the surrounding neighborhood provides a peaceful and safe environment for students to focus on their academic pursuits. With a range of rental prices and lease terms to choose from, students have the flexibility to find a suitable accommodation that fits their budget and preferences. In conclusion, the search for 7 Bedroom Student Houses in South Twerton, Bath has presented an array of promising options for students seeking a comfortable and convenient living space during their academic endeavors.</p></>)
};

export default BathSouthTwertonHouse7;