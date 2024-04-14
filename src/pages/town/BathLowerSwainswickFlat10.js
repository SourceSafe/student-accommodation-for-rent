
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


const  BathLowerSwainswickFlat10 = () => 
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

    return (<><h1>10 Bedroom Student Flats in Lower Swainswick, Bath</h1><p>We have listings for <b>10 Bedroom Student Flats in Lower Swainswick, Bath</b> for the academic year 2024.

<b>10 Bedroom Student Flats in Lower Swainswick, Bath</b> offer spacious accommodation for larger groups of students looking to live together. These flats are conveniently located in Bath, providing easy access to local amenities and universities. With multiple bedrooms, these flats are ideal for students wanting to live in a vibrant community setting.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/10-bedroom-student-flats-in-lower-swainswick-bath.png')} alt='10 Bedroom Student Flats in Lower Swainswick, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='10 Bedroom Student Flats in Lower Swainswick, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71105&type=Flat&beds=10")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>10 Bedroom Student Flats in Lower Swainswick, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_10_bedroom_student_flats_in_lower_swainswick,_bath_pp/pm">Prices for 10 Bedroom Student Flats in Lower Swainswick, Bath pp/pm</a></li><li><a href = "#10_bedroom_student_flats_in_lower_swainswick,_bath__all_bills_inclusive">10 Bedroom Student Flats in Lower Swainswick, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_10_bedroom_student_flats_in_lower_swainswick,_bath">Cheap 10 Bedroom Student Flats in Lower Swainswick, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_lower_swainswick,_bath__recently_added">10 Bedroom Student Flats in Lower Swainswick, Bath - Recently Added</a></li><li><a href = "#10_bedroom_student_flats_in_lower_swainswick,_bath__recently_reduced">10 Bedroom Student Flats in Lower Swainswick, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__10_bedroom_flats_in_lower_swainswick,_bath,_somerset,_bath">Student Accommodation Portal - 10 Bedroom Flats in Lower Swainswick, Bath, Somerset, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_lower_swainswick,_bath__private_rental_sector">10 Bedroom Student Flats in Lower Swainswick, Bath - Private Rental Sector</a></li><li><a href = "#10_bedroom_student_flats_in_lower_swainswick,_bath__fully_furnished">10 Bedroom Student Flats in Lower Swainswick, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_lower_swainswick_to_the_city_center">How close is Lower Swainswick to the City Center</a></li><li><a href = "#how_close_is_lower_swainswick_to_the_university_of_bath">How close is Lower Swainswick to the University of Bath</a></li><li><a href = "#how_close_is_lower_swainswick_to_the_bath_spa_university">How close is Lower Swainswick to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_10_bedroom_student_flats_in_lower_swainswick,_bath_pp/pm"> <h2>Prices for 10 Bedroom Student Flats in Lower Swainswick, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton tableButton' title='10 Bedroom Student Flats in Lower Swainswick, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71105")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "10_bedroom_student_flats_in_lower_swainswick,_bath__all_bills_inclusive"> <h2>10 Bedroom Student Flats in Lower Swainswick, Bath - All Bills Inclusive</h2></a><p>Living in a 10-bedroom student flat in Lower Swainswick, Bath, Somerset can be a fantastic experience, but managing bills for such a large property can be a real headache. That's where an <b>all bills inclusive</b> service, like the one offered by <b>UniBills.com</b>, can make your life much easier. By opting for an <b>all bills inclusive</b> package, you no longer have to worry about splitting utilities, keeping track of payments, or dealing with unexpected bills. Instead, you can <b>concentrate on your studies</b> and enjoy student life without the stress of managing household expenses. <b>UniBills.com</b> takes care of everything, from electricity and water to internet and TV licenses, so you can relax and focus on what really matters. Save time, avoid arguments with flatmates, and enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_10_bedroom_student_flats_in_lower_swainswick,_bath"> <h2>Cheap 10 Bedroom Student Flats in Lower Swainswick, Bath</h2></a><p><Portlet location="REGION^71105" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_lower_swainswick,_bath__recently_added"> <h2>10 Bedroom Student Flats in Lower Swainswick, Bath - Recently Added</h2></a><p><Portlet location="REGION^71105" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_lower_swainswick,_bath__recently_reduced"> <h2>10 Bedroom Student Flats in Lower Swainswick, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71105" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__10_bedroom_flats_in_lower_swainswick,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 10 Bedroom Flats in Lower Swainswick, Bath, Somerset, Bath</h2></a><p>Are you searching for 10-bedroom <b>student Flats</b> in the charming village of Lower Swainswick, <b>Bath</b>, Somerset? Look no further than our property portal which offers a wide range of accommodation options to suit all your needs. Located near prestigious universities such as the University of <b>Bath</b> and <b>Bath</b> Spa University, our listings feature spacious and well-appointed flats perfect for student living. Whether you prefer a modern apartment or a traditional Victorian house, our portal makes it easy to find the perfect 10-bedroom flat in this desirable area. With convenient amenities and excellent transportation links, Lower Swainswick offers a peaceful retreat just a short distance from the bustling city of <b>Bath</b>. Start your search today and secure your ideal student flat in this picturesque location.</p><a id = "10_bedroom_student_flats_in_lower_swainswick,_bath__private_rental_sector"> <h2>10 Bedroom Student Flats in Lower Swainswick, Bath - Private Rental Sector</h2></a><p>Welcome to the exclusive private rental sector of <b>10 Bedroom Flats in Lower Swainswick, Bath, Somerset, Bath</b>. Perfect for large groups or families looking for a spacious and luxurious living arrangement, these flats offer the convenience of <b>bills included</b> in the rent, making budgeting a breeze. Each flat is meticulously curated and <b>fully furnished</b> with modern decor and high-quality appliances, ensuring a comfortable and stylish living environment. With ample space for relaxation and entertaining, these flats provide the ideal setting for a vibrant and bustling community lifestyle. Embrace the charm and convenience of city living in the serene and picturesque setting of Lower Swainswick, Bath.</p><a id = "10_bedroom_student_flats_in_lower_swainswick,_bath__fully_furnished"> <h2>10 Bedroom Student Flats in Lower Swainswick, Bath - Fully Furnished</h2></a><p>Welcome to the luxurious fully furnished 10 Bedroom Flats in Lower Swainswick, Bath, Somerset. These elegant and modern Flats offer spacious living areas for students or large families looking to experience the beauty of Bath. Located in the charming village of Lower Swainswick, you can enjoy the peaceful surroundings while being just a short drive away from the vibrant city center of Bath. In Bath, <b>it is normal for student Flats to be fully furnished furnished</b>, and these Flats are no exception. Each room is tastefully designed and equipped with all the essentials for your comfort and convenience. From cozy beds and study desks to stylish sofas and fully-equipped kitchens, these Flats provide a comfortable and hassle-free living experience. Whether you're looking to relax after a day of exploring Bath's historic sites or need a quiet space to focus on your studies, these fully furnished Flats offer the perfect retreat for residents. Don't miss this opportunity to live in style and comfort in the heart of Bath.</p><a id = "how_close_is_lower_swainswick_to_the_city_center"> <h2>How close is Lower Swainswick to the City Center</h2></a><p><b>Lower Swainswick</b> is a charming village located just 2 <b>miles</b> north of <b>Bath city center</b>. It is a peaceful and picturesque area that offers a tranquil retreat from the hustle and bustle of the city while still being conveniently close by. With just a short drive or bus ride, residents and visitors can easily access all the attractions and amenities that <b>Bath city center</b> has to offer. Whether you are looking to explore the historic Roman baths, shop at the renowned SouthGate shopping district, or enjoy a leisurely stroll along the River Avon, <b>Lower Swainswick</b>'s proximity to the city center makes it an ideal location for those seeking a perfect balance between rural beauty and urban convenience.</p><a id = "how_close_is_lower_swainswick_to_the_university_of_bath"> <h2>How close is Lower Swainswick to the University of Bath</h2></a><p>Lower Swainswick is located just 1.5 <b>miles</b> away from the prestigious <b>University of Bath</b>, making it a highly convenient location for students and staff alike. For those looking to commute to the university, there are several convenient options available. <b>by foot</b>, it would take approximately 30 minutes to reach the campus, providing a refreshing way to start the day. Alternatively, there is a direct <b>bus route</b> that runs between Lower Swainswick and the university, offering a quick and efficient mode of transportation. For those who prefer to drive, the journey <b>by car</b> takes only around 10 minutes, making it a hassle-free commute. With its close proximity to the <b>University of Bath</b> and easy access <b>by foot</b>, bus, or car, Lower Swainswick is an ideal location for those looking to study or work at this renowned institution.</p><a id = "how_close_is_lower_swainswick_to_the_bath_spa_university"> <h2>How close is Lower Swainswick to the Bath Spa University</h2></a><p>Lower Swainswick is conveniently located just 1.5 <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal choice for students who wish to live close to campus. For those who enjoy walking, the university can be reached in about 30 minutes on foot, providing a pleasant journey through the picturesque surroundings. Alternatively, there is a direct <b>bus route</b> that connects Lower Swainswick to the university, allowing students to easily commute in about 10 minutes. For those who prefer to drive, the university is just a short 5-minute car ride away, offering convenience and flexibility in transportation. With its close proximity to <b>Bath Spa University</b>, Lower Swainswick provides students with a convenient and accessible location to campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 10 bedroom student flats in Lower Swainswick, Bath, it's essential to consider factors such as cost, location, amenities, and the overall living experience. With the limited availability of such large accommodations in this area, it's advisable to start the search well in advance and be prepared to act swiftly when a suitable option becomes available. Lower Swainswick offers a tranquil and picturesque setting, ideal for students looking for a peaceful environment conducive to studying and relaxation. While the hunt for such spacious accommodations can be challenging, the rewarding outcome of finding a suitable 10 bedroom student flat can greatly enhance the communal living experience, fostering friendships and creating lasting memories. Choosing the right property that meets all the necessary criteria can ensure a comfortable and enjoyable stay throughout your academic journey in Bath.</p></>)
};

export default BathLowerSwainswickFlat10;