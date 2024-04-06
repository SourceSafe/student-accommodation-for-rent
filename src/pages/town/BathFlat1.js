
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


const  BathFlat1 = () => 
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
  


    return (<><h1>Student Accommodation in Bath - 1 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 1 bedroom Flats</b> for the academic year 2024.

1 bedroom flats in Bath are perfect for students looking for a cozy and comfortable living space. These flats typically include a bedroom, a living area, a kitchen, and a bathroom, providing students with everything they need for independent living. With convenient locations near universities and amenities, 1 bedroom flats in Bath offer a great housing option for students.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-1-bedroom-flats.png')} alt='Student Accommodation in Bath - 1 bedroom Flats'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 1 bedroom Flats' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=Flat&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 1 bedroom Flats</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__1_bedroom_flats_pp/pm">Prices for Student Accommodation in Bath - 1 bedroom Flats pp/pm</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 1 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__1_bedroom_flats">Cheapest Student Accommodation in Bath - 1 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_flats__recently_added">Student Accommodation in Bath - 1 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_flats__recently_reduced">Student Accommodation in Bath - 1 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__1_bedroom_flats__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 1 bedroom Flats - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__1_bedroom_flats_in_bath">Student Accommodation Portal - 1 Bedroom Flats in Bath</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_flats__private_rental_sector">Student Accommodation in Bath - 1 bedroom Flats - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_flats__fully_furnished">Student Accommodation in Bath - 1 bedroom Flats - Fully Furnished</a></li><li><a href = "#popular_locations_for_1_bedroom_flats_in_bath">Popular Locations for 1 bedroom Flats in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__1_bedroom_flats_pp/pm"> <h2>Prices for Student Accommodation in Bath - 1 bedroom Flats pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1190 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 1 bedroom Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__1_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 1 bedroom Flats - All Bills Inclusive</h2></a><p>Are you a student living in a 1-bedroom flat in Bath? If you're looking to simplify your living expenses and <b>concentrate on your studies</b>, subscribing to an <b>all bills inclusive</b> service may be the perfect solution for you. <b>UniBills.com</b> offers a hassle-free all-inclusive option that covers your rent, utilities, and even Wi-Fi. With <b>UniBills.com</b>, you won't have to worry about sorting through multiple bills each month or dealing with unexpected costs. Instead, you can enjoy the convenience of having everything taken care of in one easy payment. Save time and stress by opting for the <b>all bills inclusive</b> package and focus on what truly matters – your education. Get a quote from <b>UniBills.com</b> or any other accommodation on this website and experience the benefits of worry-free living today.</p><a id = "cheapest_student_accommodation_in_bath__1_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 1 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__1_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 1 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__1_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 1 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__1_bedroom_flats__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 1 bedroom Flats - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '1-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>13 </td><td>980 </td><td>1500 </td><td>1245 </td><td>227 </td><td>348 </td><td>289 </td></tr></table></p><a id = "student_accommodation_portal__1_bedroom_flats_in_bath"> <h2>Student Accommodation Portal - 1 Bedroom Flats in Bath</h2></a><p>Are you a student looking for the perfect 1 Bedroom Flat in <b>Bath</b>? Look no further than our property portal, where you can find a variety of options in sought-after locations such as <b>Oldfield Park</b>, close to both the University of <b>Bath</b> and <b>Bath</b> Spa University. Whether you prefer a modern studio or a cozy traditional flat, our portal has a range of listings to suit your needs. With easy access to local amenities, transportation links, and vibrant student life, finding your ideal 1 Bedroom Flat in <b>Bath</b> has never been easier.</p><a id = "student_accommodation_in_bath__1_bedroom_flats__private_rental_sector"> <h2>Student Accommodation in Bath - 1 bedroom Flats - Private Rental Sector</h2></a><p>Looking for a cozy 1 bedroom flat in Bath? The private rental sector offers a variety of options, including <b>1 bedroom student Flats</b> that are perfect for those studying in the area. With <b>bills included</b> in many listings, you can enjoy hassle-free living without the stress of extra expenses. Additionally, many of these flats come <b>fully furnished</b>, making the move-in process a breeze. Whether you're a student looking for a convenient living situation or a young professional seeking a comfortable space, the private rental sector in Bath has something for everyone. Explore your options and find the perfect 1 bedroom flat to call home.</p><a id = "student_accommodation_in_bath__1_bedroom_flats__fully_furnished"> <h2>Student Accommodation in Bath - 1 bedroom Flats - Fully Furnished</h2></a><p>If you're searching for a cozy and convenient living space in the charming city of Bath, <b>fully furnished Flats in Bath</b> are an ideal option to consider. These flats come fully equipped with everything you need to feel right at home, including all essential furniture, appliances, and even kitchenware. In Bath, it is normal for student flats to be fully furnished, making the move-in process hassle-free and allowing you to focus on settling into your new space quickly. A fully furnished 1-bedroom flat in Bath provides a comfortable and stylish living environment, perfect for students or young professionals looking for a stress-free living arrangement. With a range of options available, you can easily find a flat that suits your needs and budget while enjoying the convenience of a move-in ready space. Whether you're studying at the university or working in the city, <b>fully furnished Flats in Bath</b> offer the perfect blend of comfort and convenience for your lifestyle.</p><a id = "popular_locations_for_1_bedroom_flats_in_bath"> <h2>Popular Locations for 1 bedroom Flats in Bath</h2></a><h3>Oldfield Park</h3><p><a href="./1-bedroom-student-flats-in-oldfield-park-bath" title = "View 1 Bedroom Student Flats in Oldfield Park, Bath">Oldfield Park</a>, located in Bath, is a vibrant neighborhood known for its large population of students attending both <b>University of Bath</b> and <b>Bath Spa University</b>. It is approximately 1.5 miles from the city center, making it a convenient location for students. Additionally, <a href="./1-bedroom-student-flats-in-oldfield-park-bath" title = "View 1 Bedroom Student Flats in Oldfield Park, Bath">Oldfield Park</a> is situated around 2 miles away from <b>University of Bath</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for student accommodation in Bath, particularly 1-bedroom flats, can be a challenging yet rewarding experience. Bath offers a variety of options for students looking for a cozy and convenient living space. It is essential to consider factors such as location, budget, amenities, and proximity to campus when making a decision. Taking the time to research different properties, schedule viewings, and communicate with landlords can help ensure that you find the perfect place that meets your needs and preferences. Additionally, being prepared with all necessary documents and paperwork can streamline the rental process. Overall, with persistence and thorough planning, you can find a comfortable and suitable 1-bedroom flat in Bath to call your home away from home during your studies.</p></>)
};

export default BathFlat1;