
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


const  BathFlat10 = () => 
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
  


    return (<><h1>Student Accommodation in Bath - 10 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 10 bedroom Flats</b> for the academic year 2024.

10 bedroom flats in Bath offer spacious living arrangements for large groups of students. These flats are perfect for socializing and studying together, creating a sense of community within the accommodation. With multiple bedrooms and shared common areas, 10 bedroom flats provide a comfortable and convenient living space for students in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-10-bedroom-flats.png')} alt='Student Accommodation in Bath - 10 bedroom Flats'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 10 bedroom Flats' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=Flat&beds=10")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 10 bedroom Flats</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__10_bedroom_flats_pp/pm">Prices for Student Accommodation in Bath - 10 bedroom Flats pp/pm</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 10 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__10_bedroom_flats">Cheapest Student Accommodation in Bath - 10 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__recently_added">Student Accommodation in Bath - 10 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__recently_reduced">Student Accommodation in Bath - 10 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__10_bedroom_flats__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 10 bedroom Flats - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__10_bedroom_flats_in_bath">Student Accommodation Portal - 10 Bedroom Flats in Bath</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__private_rental_sector">Student Accommodation in Bath - 10 bedroom Flats - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__10_bedroom_flats__fully_furnished">Student Accommodation in Bath - 10 bedroom Flats - Fully Furnished</a></li><li><a href = "#popular_locations_for_10_bedroom_flats_in_bath">Popular Locations for 10 bedroom Flats in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__10_bedroom_flats_pp/pm"> <h2>Prices for Student Accommodation in Bath - 10 bedroom Flats pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 10 bedroom Flats' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__10_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 10 bedroom Flats - All Bills Inclusive</h2></a><p>Living in a 10-bedroom student flat in Bath can be challenging, especially when it comes to managing bills and utilities amongst all the flatmates. This is where opting for an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b>, can make a world of difference. By choosing to go all-inclusive, you eliminate the stress of individual bill payments and can instead <b>concentrate on your studies</b> and social life without worrying about unexpected expenses. <b>UniBills.com</b> takes care of all the utility bills, including gas, electricity, water, and internet, so you can enjoy the hassle-free all-inclusive option provided by them. This not only simplifies your life but also helps in budgeting effectively and avoiding any conflicts among flatmates regarding bill payments. Get a quote from <b>UniBills.com</b> or any accommodation on this website to make your student living experience in Bath a whole lot easier and enjoyable.</p><a id = "cheapest_student_accommodation_in_bath__10_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 10 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__10_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 10 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__10_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 10 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__10_bedroom_flats__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 10 bedroom Flats - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Beechen Cliff, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Beechen Cliff, Bath, Somersets' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '10-bedroom-student-flats-in-beechen-cliff-bath' title  = 'View Key Statistics for Beechen Cliff, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>1 </td><td>740 </td><td>740 </td><td>740 </td><td>172 </td><td>172 </td><td>172 </td></tr></table></p><a id = "student_accommodation_portal__10_bedroom_flats_in_bath"> <h2>Student Accommodation Portal - 10 Bedroom Flats in Bath</h2></a><p>Are you searching for <b>10 Bedroom Flats</b> in the charming city of <b>Bath</b>, nestled near the picturesque <b>Beechen Cliff</b>? Look no further than our property portal, where we specialize in helping students find their ideal accommodation. <b>Bath</b>, home to prestigious institutions such as the University of <b>Bath</b> and <b>Bath</b> Spa University, offers a vibrant student community and rich cultural experiences. With our user-friendly platform, you can easily browse through a variety of options to find the perfect 10 bedroom flat that suits your needs. Whether you prefer a modern apartment or a traditional townhouse, we have listings that cater to every taste and budget. Say goodbye to the hassle of endless searches and let us simplify the process of finding your dream student accommodation in <b>Bath</b>.</p><a id = "student_accommodation_in_bath__10_bedroom_flats__private_rental_sector"> <h2>Student Accommodation in Bath - 10 bedroom Flats - Private Rental Sector</h2></a><p>If you are a student looking for accommodation in Bath, consider the private rental sector for 10-bedroom student flats. These spacious properties are perfect for sharing with friends and offer a comfortable living space for all. Many private landlords offer all-inclusive packages with <b>bills included</b>, helping you budget effectively throughout the year. Additionally, these flats are often <b>fully furnished</b>, so you can move in hassle-free and focus on your studies. With a range of amenities and convenient locations, the private rental sector for 10-bedroom student flats in Bath provides a great option for those looking for a comfortable and well-equipped living space during their time at university.</p><a id = "student_accommodation_in_bath__10_bedroom_flats__fully_furnished"> <h2>Student Accommodation in Bath - 10 bedroom Flats - Fully Furnished</h2></a><p>If you are looking for a spacious and fully furnished flat in the beautiful city of Bath, look no further than our 10-bedroom accommodations. Situated in a prime location, our <b>fully furnished Flats in Bath</b> offer a comfortable and convenient living experience. With all the essential furniture and appliances provided, you can simply move in and start enjoying your new home. Whether you are a student or a professional, our 10-bedroom flats are perfect for shared living arrangements or large families. In Bath, it is normal for student flats to be fully furnished, saving you the hassle of buying and moving furniture. Take advantage of our well-maintained property and enjoy the benefits of comfortable living in a vibrant city.</p><a id = "popular_locations_for_10_bedroom_flats_in_bath"> <h2>Popular Locations for 10 bedroom Flats in Bath</h2></a><h3>Beechen Cliff</h3><p><a href="./10-bedroom-student-flats-in-beechen-cliff-bath" title = "View 10 Bedroom Student Flats in Beechen Cliff, Bath">Beechen Cliff in Bath is a prestigious secondary school known for its academic excellence and strong emphasis on extracurricular activities</a>. It is located just a few miles from the city center, making it convenient for students and parents alike. The school is also in close proximity to both the <b>University of Bath</b> and <b>Bath Spa University</b>, providing students with easy access to higher education opportunities nearby. Beechen Cliff is approximately 2 miles away from the city center, and about 3 miles away from the <b>University of Bath</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for student accommodation in Bath when considering 10-bedroom flats can sure be a daunting task. However, with the right approach and thorough research, finding the perfect housing solution for a large group of students is definitely achievable. By exploring different options, setting a budget, and keeping an eye on location and amenities, students can secure a comfortable and convenient living space in the charming city of Bath. Utilizing online resources and seeking advice from local real estate agents can be valuable in narrowing down choices and making informed decisions. Ultimately, with careful planning and collaboration, students can embark on an exciting journey together in Bath, creating lasting memories and forging strong bonds in their shared living space.</p></>)
};

export default BathFlat10;