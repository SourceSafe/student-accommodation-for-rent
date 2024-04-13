
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


const  BathStudio1 = () => 
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

    return (<><h1>Student Accommodation in Bath - 1 bedroom Studios</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 1 bedroom Studios</b> for the academic year 2024.

1 bedroom Studios in Bath are ideal for students looking for a cozy and private living space. These studios typically come fully furnished with essential amenities, making them convenient for academic life. The compact layout of a 1 bedroom Studio also promotes focused studying, providing a comfortable environment for students to thrive in their academics.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-1-bedroom-studios.png')} alt='Student Accommodation in Bath - 1 bedroom Studios'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 1 bedroom Studios' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 1 bedroom Studios</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__1_bedroom_studios_pp/pm">Prices for Student Accommodation in Bath - 1 bedroom Studios pp/pm</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_studios__all_bills_inclusive">Student Accommodation in Bath - 1 bedroom Studios - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__1_bedroom_studios">Cheapest Student Accommodation in Bath - 1 bedroom Studios</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_studios__recently_added">Student Accommodation in Bath - 1 bedroom Studios - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_studios__recently_reduced">Student Accommodation in Bath - 1 bedroom Studios - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__1_bedroom_studios__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 1 bedroom Studios - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_bath">Student Accommodation Portal - 1 Bedroom Studios in Bath</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_studios__private_rental_sector">Student Accommodation in Bath - 1 bedroom Studios - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__1_bedroom_studios__fully_furnished">Student Accommodation in Bath - 1 bedroom Studios - Fully Furnished</a></li><li><a href = "#popular_locations_for_1_bedroom_studios_in_bath">Popular Locations for 1 bedroom Studios in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__1_bedroom_studios_pp/pm"> <h2>Prices for Student Accommodation in Bath - 1 bedroom Studios pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1224 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 1 bedroom Studios' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__1_bedroom_studios__all_bills_inclusive"> <h2>Student Accommodation in Bath - 1 bedroom Studios - All Bills Inclusive</h2></a><p>Living in a 1 bedroom student studio in Bath can be challenging, especially when it comes to managing bills and expenses. Fortunately, there is a solution that can make your life a lot easier. By subscribing to an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. This means that you won't have to worry about keeping track of different bills for utilities like electricity, water, and internet. Instead, you can <b>concentrate on your studies</b> and enjoy your time in Bath without the stress of managing multiple payments. To make your student life even more convenient, get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience of an <b>all bills inclusive</b> service.</p><a id = "cheapest_student_accommodation_in_bath__1_bedroom_studios"> <h2>Cheapest Student Accommodation in Bath - 1 bedroom Studios</h2></a><p><Portlet location="All" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__1_bedroom_studios__recently_added"> <h2>Student Accommodation in Bath - 1 bedroom Studios - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__1_bedroom_studios__recently_reduced"> <h2>Student Accommodation in Bath - 1 bedroom Studios - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__1_bedroom_studios__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 1 bedroom Studios - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Count </th><th className = {classNameHideForMobile}>Min monthly </th><th>Max monthly </th><th className = {classNameHideForMobile}>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'studio-apartments-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>23 </td><td className = {classNameHideForMobile}>795 </td><td>1690 </td><td className = {classNameHideForMobile}>1250 </td><td className = {classNameHideForMobile}>184 </td><td>393 </td><td>290 </td></tr></table></p><a id = "student_accommodation_portal__1_bedroom_studios_in_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Bath</h2></a><p>Are you a student looking for a cozy and convenient 1 Bedroom Studio in <b>Bath</b>? Look no further than our property portal, where you can easily find the perfect accommodation in sought-after locations like <b>Oldfield Park</b>, near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our listings feature a range of options to suit your needs, whether you prefer modern amenities or a more traditional style. With our user-friendly search filters, you can quickly narrow down your choices and find the ideal studio that meets your requirements. Don't settle for less when it comes to your student accommodation, let our property portal help you find the best <b>1 Bedroom Studios</b> in <b>Bath</b>.</p><a id = "student_accommodation_in_bath__1_bedroom_studios__private_rental_sector"> <h2>Student Accommodation in Bath - 1 bedroom Studios - Private Rental Sector</h2></a><p>Are you a student looking for convenient and hassle-free living in Bath? Look no further than the private rental sector offering <b>1 bedroom student Studios</b> with <b>bills included</b>. These <b>fully furnished</b> spaces are perfect for those seeking a comfortable and stylish living arrangement without the stress of setting up utilities. Located in the heart of Bath, these Studios provide easy access to universities, amenities, and entertainment options. With a modern design and all the necessary furnishings, you can move in with ease and focus on your studies. Embrace the privacy and independence of your own space while enjoying the convenience of hassle-free living in Bath's private rental sector.</p><a id = "student_accommodation_in_bath__1_bedroom_studios__fully_furnished"> <h2>Student Accommodation in Bath - 1 bedroom Studios - Fully Furnished</h2></a><p>Looking for <b>fully furnished Studios in Bath</b> for your next academic year? You're in luck! In this charming city, it is normal for student Studios to be fully furnished with everything you need to make your stay comfortable and hassle-free. From a cozy bed to a spacious study area, fully equipped kitchen, and modern bathroom facilities, these Studios offer convenience and style. Whether you're a student or a young professional, a fully furnished 1 bedroom Studio in Bath provides the perfect environment to relax, study, and enjoy all that this picturesque city has to offer. Don't waste time and energy shopping for furniture or appliances - choose a fully furnished Studio and make your move-in process a breeze.</p><a id = "popular_locations_for_1_bedroom_studios_in_bath"> <h2>Popular Locations for 1 bedroom Studios in Bath</h2></a><h3>Oldfield Park</h3><p><a href="./studio-apartments-for-students-in-oldfield-park-bath" title = "View Studio Apartments for Students in Oldfield Park, Bath">Oldfield Park</a>, Bath is a vibrant community located just a few miles from the city center. It is a popular area for students from both the <b>University of Bath</b> and <b>Bath Spa University</b>. The neighborhood has a variety of amenities, including shops, cafes, and parks. <a href="./studio-apartments-for-students-in-oldfield-park-bath" title = "View Studio Apartments for Students in Oldfield Park, Bath">Oldfield Park</a> is approximately 1.5 miles from the city center of Bath. It is also about 2 miles away from the <b>University of Bath</b> campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for student accommodation in Bath can be an exciting yet overwhelming experience, especially when looking for a 1-bedroom studio. These studios provide students with the independence and privacy they desire while still being close to campus and city amenities. When searching for the perfect 1-bedroom studio, it's essential to consider factors such as location, budget, and amenities. Bath offers a variety of options, from modern purpose-built studios to charming historic buildings, ensuring there's something to suit every student's taste. Additionally, many studios come fully furnished, making the move-in process easy and stress-free. Overall, finding a 1-bedroom studio in Bath can be a rewarding experience, providing students with a comfortable and convenient living space during their time at university.</p></>)
};

export default BathStudio1;