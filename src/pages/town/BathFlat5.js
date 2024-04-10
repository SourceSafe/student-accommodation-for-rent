
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


const  BathFlat5 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isMobile,setIsMobile] = useState();    

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
  


    return (<><h1>Student Accommodation in Bath - 5 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 5 bedroom Flats</b> for the academic year 2024.
5 bedroom Flats in Bath provide ample space for students to live comfortably while studying.
These flats are perfect for larger groups of friends looking to live together and split the cost of rent.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-5-bedroom-flats.png')} alt='Student Accommodation in Bath - 5 bedroom Flats'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 5 bedroom Flats' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=Flat&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 5 bedroom Flats</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__5_bedroom_flats_pp/pm">Prices for Student Accommodation in Bath - 5 bedroom Flats pp/pm</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 5 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__5_bedroom_flats">Cheapest Student Accommodation in Bath - 5 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__recently_added">Student Accommodation in Bath - 5 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__recently_reduced">Student Accommodation in Bath - 5 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__5_bedroom_flats__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 5 bedroom Flats - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__5_bedroom_flats_in_bath">Student Accommodation Portal - 5 Bedroom Flats in Bath</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__private_rental_sector">Student Accommodation in Bath - 5 bedroom Flats - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__fully_furnished">Student Accommodation in Bath - 5 bedroom Flats - Fully Furnished</a></li><li><a href = "#popular_locations_for_5_bedroom_flats_in_bath">Popular Locations for 5 bedroom Flats in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__5_bedroom_flats_pp/pm"> <h2>Prices for Student Accommodation in Bath - 5 bedroom Flats pp/pm</h2></a><p><table><tr><th className = 'deviceVisibility'>Flat </th><th className = 'deviceVisibility'>Properties </th></tr><tr><td className = 'deviceVisibility'>£662 per month </td><td className = 'deviceVisibility'><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 5 bedroom Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__5_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 5 bedroom Flats - All Bills Inclusive</h2></a><p>Living in a 5-bedroom student flat in Bath can be a vibrant and exciting experience, but managing bills and expenses can often overshadow the joy of student life. That's where <b>UniBills.com</b> comes in to make your life easier. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With this service, you won't have to worry about dividing up bills with your flatmates or chasing payments - allowing you to <b>concentrate on your studies</b> and enjoy student life to the fullest. <b>UniBills.com</b> takes care of utilities such as gas, electricity, water, internet, and even council tax, giving you peace of mind and a clear budget each month. Say goodbye to bill-related stress and hello to convenient living. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student life in Bath a breeze.</p><a id = "cheapest_student_accommodation_in_bath__5_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 5 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__5_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 5 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__5_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 5 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__5_bedroom_flats__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 5 bedroom Flats - By Student Location pp/pm</h2></a><p><table><tr><th className = 'deviceVisibility'>Student Location </th><th className = 'deviceVisibility'>Properties </th><th className = 'deviceVisibility'>More Info </th><th className = 'deviceVisibility'>Count </th><th className = 'deviceVisibility'>Min monthly </th><th className = 'deviceVisibility'>Max monthly </th><th className = 'deviceVisibility'>Avg monthly </th><th className = 'deviceVisibility'>Min weekly </th><th className = 'deviceVisibility'>Max weekly </th><th className = 'deviceVisibility'>Avg weekly </th></tr><tr><td className = 'deviceVisibility'>Bath Spa, Bath, Somerset </td><td className = 'deviceVisibility'><button className = 'searchButton tableButton' title='Bath Spa, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td className = 'deviceVisibility'><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-bath-spa-bath' title  = 'View Key Statistics for Bath Spa, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = 'deviceVisibility'>4 </td><td className = 'deviceVisibility'>520 </td><td className = 'deviceVisibility'>587 </td><td className = 'deviceVisibility'>557 </td><td className = 'deviceVisibility'>120 </td><td className = 'deviceVisibility'>136 </td><td className = 'deviceVisibility'>129 </td></tr></table></p><a id = "student_accommodation_portal__5_bedroom_flats_in_bath"> <h2>Student Accommodation Portal - 5 Bedroom Flats in Bath</h2></a><p>Are you in search of the perfect <b>5 Bedroom Flats</b> in <b>Bath</b> for you and your friends? Look no further than our property portal, where we make the search for student accommodation in <b>Bath</b> a breeze. <b>Bath</b>, with its stunning architecture, rich history, and vibrant cultural scene, is the ideal city for students to live and study. With both the University of <b>Bath</b> and <b>Bath</b> Spa University nearby, our portal offers a wide selection of <b>5 Bedroom Flats</b> that cater to all your needs. Whether you prefer a modern apartment with all the amenities or a cosy flat in a historic building, we have options that suit every taste and budget.</p><a id = "student_accommodation_in_bath__5_bedroom_flats__private_rental_sector"> <h2>Student Accommodation in Bath - 5 bedroom Flats - Private Rental Sector</h2></a><p>Are you searching for the perfect <b>5 bedroom student Flats</b> in Bath? Look no further than the private rental sector in this vibrant city. With a range of options available, you can find spacious and modern flats that are ideal for student living. Many of these flats come with the convenience of <b>bills included</b>, making budgeting a breeze. Additionally, these flats are <b>fully furnished</b>, so you can move in with ease and start enjoying your new living space right away. Whether you're looking to share with friends or need extra space for studying, the private rental sector in Bath has you covered. Start your search today and find the perfect 5 bedroom flat for your student lifestyle.</p><a id = "student_accommodation_in_bath__5_bedroom_flats__fully_furnished"> <h2>Student Accommodation in Bath - 5 bedroom Flats - Fully Furnished</h2></a><p>In the charming city of Bath, fully furnished flats are in high demand, especially among students looking for convenient and comfortable accommodation. A fully furnished 5-bedroom flat in Bath offers the perfect balance of space, style, and functionality. With all the essential furniture and appliances already in place, the process of moving in and settling down becomes hassle-free. In a city known for its historic architecture and vibrant cultural scene, having a fully furnished flat allows residents to focus on enjoying their surroundings and making the most of their time in Bath. For students, it is normal for student flats to be fully furnished, offering everything they need for successful academic life without the stress of outfitting a new space. From a cozy living room for socializing to spacious bedrooms for restful nights, a fully furnished 5-bedroom flat in Bath provides the ideal setting for a comfortable and convenient lifestyle.</p><a id = "popular_locations_for_5_bedroom_flats_in_bath"> <h2>Popular Locations for 5 bedroom Flats in Bath</h2></a><h3>Bath Spa </h3><p><a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa is a picturesque city in Somerset</a>, known for its thermal springs and rich history. It is home to two universities, <b>Bath Spa University</b> and the nearby <b>University of Bath</b>. With a campus located just a few miles from the city center, <b>Bath Spa University</b> offers a vibrant academic community for its students. The university is approximately 3 miles from the city center and 4 miles from the <b>University of Bath</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Searching for student accommodation in Bath can be a daunting task, especially when looking for a 5-bedroom flat. It is important to consider factors such as location, affordability, and amenities when making this decision. Bath offers a variety of options for student housing, ranging from traditional apartments to modern purpose-built student accommodation. When looking for a 5-bedroom flat, students can benefit from shared living spaces, reduced cost per person, and a sense of community. By carefully researching and visiting potential properties, students can find the perfect accommodation that meets their needs and preferences. In conclusion, finding student accommodation in Bath may require time and effort, but the end result of securing a comfortable and convenient 5-bedroom flat will be worth it in the long run.</p></>)
};

export default BathFlat5;