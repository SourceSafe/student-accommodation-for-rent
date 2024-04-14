
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


const  BathDolemeadsFlat1 = () => 
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

    return (<><h1>1 Bedroom Student Flats in Dolemeads, Bath</h1><p>We have listings for <b>1 Bedroom Student Flats in Dolemeads, Bath</b> for the academic year 2024.

<b>1 Bedroom Student Flats in Dolemeads, Bath</b> offer cozy and convenient living spaces for students studying in Bath. These flats are typically equipped with modern amenities, making them a comfortable choice for student accommodation. Located in a vibrant area of Bath, students residing in Dolemeads can enjoy easy access to local shops, restaurants, and the university campus.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/1-bedroom-student-flats-in-dolemeads-bath.png')} alt='1 Bedroom Student Flats in Dolemeads, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='1 Bedroom Student Flats in Dolemeads, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71097&type=Flat&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>1 Bedroom Student Flats in Dolemeads, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_1_bedroom_student_flats_in_dolemeads,_bath_pp/pm">Prices for 1 Bedroom Student Flats in Dolemeads, Bath pp/pm</a></li><li><a href = "#1_bedroom_student_flats_in_dolemeads,_bath__all_bills_inclusive">1 Bedroom Student Flats in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_1_bedroom_student_flats_in_dolemeads,_bath">Cheap 1 Bedroom Student Flats in Dolemeads, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_dolemeads,_bath__recently_added">1 Bedroom Student Flats in Dolemeads, Bath - Recently Added</a></li><li><a href = "#1_bedroom_student_flats_in_dolemeads,_bath__recently_reduced">1 Bedroom Student Flats in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_flats_in_dolemeads,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_dolemeads,_bath__private_rental_sector">1 Bedroom Student Flats in Dolemeads, Bath - Private Rental Sector</a></li><li><a href = "#1_bedroom_student_flats_in_dolemeads,_bath__fully_furnished">1 Bedroom Student Flats in Dolemeads, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_dolemeads_to_the_city_center">How close is Dolemeads to the City Center</a></li><li><a href = "#how_close_is_dolemeads_to_the_university_of_bath">How close is Dolemeads to the University of Bath</a></li><li><a href = "#how_close_is_dolemeads_to_the_bath_spa_university">How close is Dolemeads to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_1_bedroom_student_flats_in_dolemeads,_bath_pp/pm"> <h2>Prices for 1 Bedroom Student Flats in Dolemeads, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton tableButton' title='1 Bedroom Student Flats in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "1_bedroom_student_flats_in_dolemeads,_bath__all_bills_inclusive"> <h2>1 Bedroom Student Flats in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 1 bedroom flat in Dolemeads, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b> is the perfect solution for you. By choosing this convenient option, you can enjoy the hassle-free all-inclusive package that covers all your utility bills in one simple payment. This means you can <b>concentrate on your studies</b> without the stress of managing multiple bills each month. <b>UniBills.com</b> takes care of everything for you, from electricity to water and internet, so you can relax and focus on what's important. Say goodbye to the endless admin and unexpected expenses that come with managing separate bills - with <b>UniBills.com</b>, it's all taken care of for you. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and peace of mind of an <b>all bills inclusive</b> service.</p><a id = "cheap_1_bedroom_student_flats_in_dolemeads,_bath"> <h2>Cheap 1 Bedroom Student Flats in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_dolemeads,_bath__recently_added"> <h2>1 Bedroom Student Flats in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_dolemeads,_bath__recently_reduced"> <h2>1 Bedroom Student Flats in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_flats_in_dolemeads,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 1 Bedroom Flat in Dolemeads, <b>Bath</b>, Somerset? Our property portal has got you covered! With a wide selection of <b>student Flats</b> available in this vibrant and historic city, you can easily find the ideal accommodation to suit your needs. Located near prestigious universities such as the University of <b>Bath</b> and <b>Bath</b> Spa University, our portal makes it convenient for students to browse and compare various options. Whether you prefer a modern studio or a cozy one-bedroom apartment, you can find it all on our user-friendly platform.</p><a id = "1_bedroom_student_flats_in_dolemeads,_bath__private_rental_sector"> <h2>1 Bedroom Student Flats in Dolemeads, Bath - Private Rental Sector</h2></a><p>Are you on the hunt for a cozy one-bedroom flat in the charming area of Dolemeads, Bath, Somerset, Bath? Look no further! The private rental sector in this area offers a variety of options, including <b>1 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</b> that come <b>fully furnished</b> for your convenience. Imagine coming home to a stylish and comfortable space where all you need to do is unpack your bags. Many rental properties in this area also offer the convenience of having <b>bills included</b> in the rent, making budgeting a breeze. Whether you're a young professional looking for a convenient location or a student seeking a peaceful retreat, Dolemeads has something to offer. Don't miss out on the chance to call one of these lovely flats your new home.</p><a id = "1_bedroom_student_flats_in_dolemeads,_bath__fully_furnished"> <h2>1 Bedroom Student Flats in Dolemeads, Bath - Fully Furnished</h2></a><p>Looking for a cozy and convenient living space in the heart of Bath, Somerset? Look no further than the fully furnished 1 Bedroom Flats in Dolemeads. Situated in a prime location, these flats offer the perfect blend of comfort and style. Whether you're a student looking for a hassle-free accommodation option or a professional seeking a well-equipped home, these flats have you covered. With all the essentials provided, including furniture, appliances, and kitchenware, you can move in and start living without any extra stress. It is normal for student flats to be fully furnished, and these flats in Dolemeads certainly live up to that expectation. Enjoy the ease of a ready-to-go living space, allowing you to focus on your studies or work while still enjoying the beauty and excitement of Bath. Don't miss out on the opportunity to experience the convenience and comfort of fully furnished living in these lovely flats.</p><a id = "how_close_is_dolemeads_to_the_city_center"> <h2>How close is Dolemeads to the City Center</h2></a><p><b>Dolemeads</b>, a charming riverside accommodation in Bath, offers a peaceful retreat just a stone's throw away from the bustling city center. Situated only 0.5 <b>miles</b> from <b>Bath city center</b>, guests staying at <b>Dolemeads</b> enjoy the perfect balance of seclusion and convenience. Whether you fancy exploring the historic Roman baths, strolling through the picturesque streets lined with Georgian architecture, or indulging in some retail therapy at the various shops and boutiques, all of this is just a short walk away. The proximity to the city center allows visitors to easily immerse themselves in Bath's rich culture and heritage while also being able to retreat to the tranquil setting of <b>Dolemeads</b> to unwind after a busy day of sightseeing. With its ideal location and serene ambiance, <b>Dolemeads</b> provides a harmonious blend of urban exploration and relaxation for those visiting Bath.</p><a id = "how_close_is_dolemeads_to_the_university_of_bath"> <h2>How close is Dolemeads to the University of Bath</h2></a><p>Dolemeads is ideally situated in close proximity to the <b>University of Bath</b>, making it a convenient location for students and staff. The campus is just a few <b>miles</b> away from Dolemeads, making it easily accessible <b>by foot</b>, bus, or car. For those who prefer to walk, the university is approximately 1.5 <b>miles</b> away, providing a pleasant stroll through the charming streets of Bath. Alternatively, there are frequent <b>bus route</b>s that connect Dolemeads to the university, ensuring a quick and efficient journey for those who prefer to use public transportation. In addition, students and staff with cars can reach the <b>University of Bath</b> in just a short drive, making Dolemeads a practical choice for those looking to live close to campus. The convenient location of Dolemeads to the <b>University of Bath</b> offers a seamless blend of academic and residential living, making it an ideal choice for those looking to be at the heart of campus life.</p><a id = "how_close_is_dolemeads_to_the_bath_spa_university"> <h2>How close is Dolemeads to the Bath Spa University</h2></a><p>Dolemeads is conveniently located close to <b>Bath Spa University</b>, just a stone's throw away from the campus. Situated just a couple of <b>miles</b> from the university, students have easy access to the campus whether <b>by foot</b>, bus, or car. For those who prefer to walk, the journey takes around 30 minutes, offering a pleasant stroll through the charming streets of Bath. Alternatively, the <b>bus route</b> connecting Dolemeads to <b>Bath Spa University</b> is efficient and affordable, with buses running frequently throughout the day. If driving is more your style, the commute <b>by car</b> is also a viable option, taking just a short drive to reach the university grounds. With multiple transportation options available, Dolemeads provides a convenient and accessible location for students attending <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 1-bedroom student flats in Dolemeads, Bath, students are presented with a variety of options that cater to their specific needs and preferences. These flats offer a convenient and comfortable living space for students who value independence and privacy. The central location of Dolemeads provides easy access to the city's amenities and universities, making it an ideal choice for students looking to balance their academic and social life. With a range of affordable pricing options, students can find a flat that fits within their budget without compromising on quality. Overall, the availability of 1-bedroom student flats in Dolemeads offers students a practical and desirable housing solution in the vibrant city of Bath.</p></>)
};

export default BathDolemeadsFlat1;