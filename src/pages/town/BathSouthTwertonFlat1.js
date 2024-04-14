
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


const  BathSouthTwertonFlat1 = () => 
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

    return (<><h1>1 Bedroom Student Flats in South Twerton, Bath</h1><p>We have listings for <b>1 Bedroom Student Flats in South Twerton, Bath</b> for the academic year 2024.
<b>1 Bedroom Student Flats in South Twerton, Bath</b> are ideal for students looking for a convenient and affordable housing option in the city. These flats offer a comfortable living space with essential amenities, making them perfect for students studying in Bath. Located in South Twerton, residents can enjoy a vibrant community atmosphere while being within easy reach of the city center and local universities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/1-bedroom-student-flats-in-south-twerton-bath.png')} alt='1 Bedroom Student Flats in South Twerton, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='1 Bedroom Student Flats in South Twerton, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71117&type=Flat&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>1 Bedroom Student Flats in South Twerton, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_1_bedroom_student_flats_in_south_twerton,_bath_pp/pm">Prices for 1 Bedroom Student Flats in South Twerton, Bath pp/pm</a></li><li><a href = "#1_bedroom_student_flats_in_south_twerton,_bath__all_bills_inclusive">1 Bedroom Student Flats in South Twerton, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_1_bedroom_student_flats_in_south_twerton,_bath">Cheap 1 Bedroom Student Flats in South Twerton, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_south_twerton,_bath__recently_added">1 Bedroom Student Flats in South Twerton, Bath - Recently Added</a></li><li><a href = "#1_bedroom_student_flats_in_south_twerton,_bath__recently_reduced">1 Bedroom Student Flats in South Twerton, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_flats_in_south_twerton,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Flats in South Twerton, Bath, Somerset, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_south_twerton,_bath__private_rental_sector">1 Bedroom Student Flats in South Twerton, Bath - Private Rental Sector</a></li><li><a href = "#1_bedroom_student_flats_in_south_twerton,_bath__fully_furnished">1 Bedroom Student Flats in South Twerton, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_south_twerton_to_the_city_center">How close is South Twerton to the City Center</a></li><li><a href = "#how_close_is_south_twerton_to_the_university_of_bath">How close is South Twerton to the University of Bath</a></li><li><a href = "#how_close_is_south_twerton_to_the_bath_spa_university">How close is South Twerton to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_1_bedroom_student_flats_in_south_twerton,_bath_pp/pm"> <h2>Prices for 1 Bedroom Student Flats in South Twerton, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1150 per month </td><td><button className = 'searchButton tableButton' title='1 Bedroom Student Flats in South Twerton, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71117")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "1_bedroom_student_flats_in_south_twerton,_bath__all_bills_inclusive"> <h2>1 Bedroom Student Flats in South Twerton, Bath - All Bills Inclusive</h2></a><p>Living in a 1 bedroom student flat in South Twerton, Bath, Somerset can be an exciting experience, but managing bills and expenses can add unnecessary stress to your life. That's where <b>UniBills.com</b> comes in to save the day! By opting for their <b>all bills inclusive</b> service, you can <b>concentrate on your studies</b> and social life without worrying about utility bills or council tax. <b>UniBills.com</b> takes care of everything, from electricity and water to internet and TV license, allowing you to enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With this convenient service, you can budget more effectively and avoid any surprises in your monthly expenses. Say goodbye to the headache of splitting bills with flatmates or dealing with multiple suppliers - <b>UniBills.com</b> has got you covered. Get a quote from UniBills.</p><a id = "cheap_1_bedroom_student_flats_in_south_twerton,_bath"> <h2>Cheap 1 Bedroom Student Flats in South Twerton, Bath</h2></a><p><Portlet location="REGION^71117" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_south_twerton,_bath__recently_added"> <h2>1 Bedroom Student Flats in South Twerton, Bath - Recently Added</h2></a><p><Portlet location="REGION^71117" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_south_twerton,_bath__recently_reduced"> <h2>1 Bedroom Student Flats in South Twerton, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71117" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_flats_in_south_twerton,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Flats in South Twerton, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a 1 Bedroom Flat in the vibrant city of <b>Bath</b>, Somerset? Our property portal offers a wide range of <b>student Flats</b> in the desirable area of South Twerton, <b>Bath</b>. This location is perfect for students attending the prestigious University of <b>Bath</b> or <b>Bath</b> Spa University, as it provides easy access to campus and all the amenities the city has to offer. Whether you're looking for a modern studio apartment or a cozy one-bedroom flat, our portal has listings that cater to all preferences and budgets. Finding your ideal student accommodation in <b>Bath</b> has never been easier – start your search with us today and secure the perfect 1 Bedroom Flat for your academic year in the beautiful city of <b>Bath</b>.</p><a id = "1_bedroom_student_flats_in_south_twerton,_bath__private_rental_sector"> <h2>1 Bedroom Student Flats in South Twerton, Bath - Private Rental Sector</h2></a><p>Looking for a cozy and convenient rental option in South Twerton, Bath, Somerset? Look no further than the <b>1 Bedroom Flats in South Twerton, Bath, Somerset, Bath</b>. These flats offer the perfect blend of comfort and style with the added bonus of <b>bills included</b> in the rent. Say goodbye to the hassle of managing utility payments and enjoy a stress-free living experience. Additionally, these flats come <b>fully furnished</b>, meaning you can move in hassle-free and start enjoying your new space right away. Whether you're a student, young professional, or couple looking for a modern and convenient living arrangement, these <b>1 Bedroom Flats in South Twerton, Bath, Somerset, Bath</b> have everything you need for a comfortable and hassle-free stay.</p><a id = "1_bedroom_student_flats_in_south_twerton,_bath__fully_furnished"> <h2>1 Bedroom Student Flats in South Twerton, Bath - Fully Furnished</h2></a><p>Looking for a cozy and convenient place to call home in Bath? Look no further than the fully furnished 1 Bedroom Flats in South Twerton, Bath, Somerset. Situated in a vibrant neighborhood with easy access to local amenities, these flats offer the perfect blend of comfort and style. Whether you're a student looking for a hassle-free accommodation or a professional seeking a relaxing retreat, these fully furnished flats are ideal for anyone looking to settle down in the heart of Bath. In South Twerton, it's normal for student flats to be fully furnished, ensuring that you have everything you need to make yourself at home. From modern furniture to essential appliances, these flats are designed to make your life easier. Don't miss out on the opportunity to live in one of the most sought-after locations in Bath. Experience the charm of South Twerton while enjoying the convenience of fully furnished living.</p><a id = "how_close_is_south_twerton_to_the_city_center"> <h2>How close is South Twerton to the City Center</h2></a><p><b>South Twerton</b> is a charming neighborhood located just a few <b>miles</b> away from <b>Bath city center</b>, making it an ideal place to live for those who want to be close to the heart of the action. With its proximity to the city center, residents of <b>South Twerton</b> can easily access all of Bath's amenities, attractions, and cultural landmarks without having to travel far. Whether you're looking to explore the historic Roman baths, wander through the picturesque streets lined with Georgian architecture, or enjoy a relaxing day in one of the many parks and gardens, living in <b>South Twerton</b> puts you at the center of it all. Additionally, the neighborhood offers a range of local shops, cafes, and restaurants for residents to enjoy, providing a vibrant and lively atmosphere. Overall, <b>South Twerton</b>'s close distance to <b>Bath city center</b> makes it a sought-after location for those seeking a perfect balance between urban convenience and suburban tranquility.</p><a id = "how_close_is_south_twerton_to_the_university_of_bath"> <h2>How close is South Twerton to the University of Bath</h2></a><p>South Twerton is conveniently located close to the <b>University of Bath</b>, a prestigious institution known for its academic excellence. The campus is just a few <b>miles</b> away, making it easily accessible <b>by foot</b>, bus, or car. If you prefer to walk, it would take you approximately 30-40 minutes to reach the university. For those who prefer public transportation, there are regular <b>bus route</b>s that connect South Twerton to the university, with a travel time of around 15-20 minutes. And if you have your own vehicle, you can reach the <b>University of Bath</b> in just 10-15 minutes <b>by car</b>. This close proximity offers students living in South Twerton the convenience of quick and easy access to all the academic and recreational facilities that the <b>University of Bath</b> has to offer.</p><a id = "how_close_is_south_twerton_to_the_bath_spa_university"> <h2>How close is South Twerton to the Bath Spa University</h2></a><p>South Twerton is conveniently located just 2 <b>miles</b> away from <b>Bath Spa University</b>. For students seeking an easy commute, the university is easily accessible from South Twerton <b>by foot</b>, taking approximately 40 minutes to walk. If walking isn't your preferred method of transportation, fear not, as there is a direct <b>bus route</b> that can get you to the university in around 15 minutes. For those with access to a car, the drive from South Twerton to <b>Bath Spa University</b> is a quick 10-minute journey, making it a great option for students looking to have the flexibility of driving. With multiple transportation options available, South Twerton provides a convenient location for students attending <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After exploring the options for 1 bedroom student flats in South Twerton, Bath, it is clear that the area offers a variety of affordable and convenient housing choices for students. With a range of amenities such as easy access to public transportation, local shops, and green spaces, South Twerton provides a comfortable and convenient living environment. The rental prices are reasonable compared to other areas in Bath, making it an attractive option for students looking for budget-friendly accommodation. When searching for a 1 bedroom flat in South Twerton, students can expect to find well-maintained properties with modern facilities and a welcoming community atmosphere. In conclusion, South Twerton is a great location for students seeking a cozy and convenient living space in Bath.</p></>)
};

export default BathSouthTwertonFlat1;