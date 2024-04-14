
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


const  BathTheOvalStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in The Oval, Bath</h1><p>We have listings for <b>Studio Apartments for Students in The Oval, Bath</b> for the academic year 2024. 
<b>Studio Apartments for Students in The Oval, Bath</b> offer a convenient and modern living space for students. Located in Bath, these apartments provide a comfortable and private environment for students to focus on their studies.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-the-oval-bath.png')} alt='Studio Apartments for Students in The Oval, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in The Oval, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61729&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in The Oval, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_the_oval,_bath_pp/pm">Prices for Studio Apartments for Students in The Oval, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_the_oval,_bath__all_bills_inclusive">Studio Apartments for Students in The Oval, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_the_oval,_bath">Cheap Studio Apartments for Students in The Oval, Bath</a></li><li><a href = "#studio_apartments_for_students_in_the_oval,_bath__recently_added">Studio Apartments for Students in The Oval, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_the_oval,_bath__recently_reduced">Studio Apartments for Students in The Oval, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_the_oval,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in The Oval, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_the_oval,_bath__private_rental_sector">Studio Apartments for Students in The Oval, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_the_oval,_bath__fully_furnished">Studio Apartments for Students in The Oval, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_the_oval_to_the_city_center">How close is The Oval to the City Center</a></li><li><a href = "#how_close_is_the_oval_to_the_university_of_bath">How close is The Oval to the University of Bath</a></li><li><a href = "#how_close_is_the_oval_to_the_bath_spa_university">How close is The Oval to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_the_oval,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in The Oval, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in The Oval, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61729")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_the_oval,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in The Oval, Bath - All Bills Inclusive</h2></a><p>When it comes to living in your 1 bedroom student studio at The Oval in Bath, Somerset, opting for an <b>all bills inclusive</b> service can greatly simplify your life. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> and enjoy student life without the stress of managing multiple bills. By choosing the all inclusive option provided by <b>UniBills.com</b>, you can budget effectively and avoid unexpected expenses popping up throughout the semester. From electricity and water to internet and TV licenses, everything is taken care of, giving you peace of mind and allowing you to focus on what truly matters. Say goodbye to the hassle of dealing with different utility providers and hello to a streamlined living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and discover the benefits of an <b>all bills inclusive</b> service for your student accommodation in The Oval.</p><a id = "cheap_studio_apartments_for_students_in_the_oval,_bath"> <h2>Cheap Studio Apartments for Students in The Oval, Bath</h2></a><p><Portlet location="REGION^61729" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_the_oval,_bath__recently_added"> <h2>Studio Apartments for Students in The Oval, Bath - Recently Added</h2></a><p><Portlet location="REGION^61729" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_the_oval,_bath__recently_reduced"> <h2>Studio Apartments for Students in The Oval, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61729" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_the_oval,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in The Oval, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 1 Bedroom Studio in The Oval, <b>Bath</b>, Somerset? Look no further than our property portal, where we make finding <b>student Studios</b> near the University of <b>Bath</b> and <b>Bath</b> Spa University a breeze. Our user-friendly platform allows you to search for <b>1 Bedroom Studios</b> in the heart of <b>Bath</b> with ease. The Oval is a vibrant area with easy access to local amenities, public transportation, and the bustling city center. Whether you prefer a cozy studio for yourself or are looking to share with a roommate, we have options to suit your needs. Don't miss out on the opportunity to secure your ideal student accommodation in <b>Bath</b> through our property portal today.</p><a id = "studio_apartments_for_students_in_the_oval,_bath__private_rental_sector"> <h2>Studio Apartments for Students in The Oval, Bath - Private Rental Sector</h2></a><p>Looking for <b>1 Bedroom Studios in The Oval, Bath, Somerset, Bath</b>? Look no further! Our private rental sector offers beautiful and convenient studios that are perfect for individuals or couples seeking a cozy and modern living space. Each studio comes <b>fully furnished</b>, so you can move in hassle-free and feel right at home. With <b>bills included</b> in the rent, you can enjoy a stress-free living experience without having to worry about additional costs. The Oval area is known for its peaceful surroundings and proximity to local amenities, making it an ideal location for those looking for a comfortable and convenient place to call home. Contact us today to learn more about our available studios and to schedule a viewing.</p><a id = "studio_apartments_for_students_in_the_oval,_bath__fully_furnished"> <h2>Studio Apartments for Students in The Oval, Bath - Fully Furnished</h2></a><p>Welcome to the Oval, Bath, Somerset, where you can find fully furnished 1 Bedroom Studios that combine style and convenience. Located in the heart of the vibrant city of Bath, these Studios offer a perfect blend of modern living and historic charm. The fully furnished Studios feature contemporary decor, high-quality appliances, and all the necessary amenities for a comfortable stay. Whether you are a student looking for a cozy retreat or a professional seeking a convenient place to call home, these Studios are the ideal choice. In Bath, it is normal for student Studios to be fully furnished, so you can move in hassle-free and start enjoying the beautiful surroundings right away. Experience the best of city living in the picturesque setting of Bath, and make the fully furnished 1 Bedroom Studios in the Oval your new home away from home.</p><a id = "how_close_is_the_oval_to_the_city_center"> <h2>How close is The Oval to the City Center</h2></a><p><b>The Oval</b>, located in the picturesque city of Bath, is conveniently close to the vibrant heart of <b>Bath city center</b>. Situated just a few <b>miles</b> away, <b>The Oval</b> offers a peaceful retreat from the hustle and bustle of the city, while still being easily accessible for those looking to explore all that Bath has to offer. Whether you're visiting for a relaxing getaway or a cultural experience, <b>The Oval</b>'s proximity to <b>Bath city center</b> makes it the perfect base for your adventures. Just a short drive or a scenic walk away, guests can enjoy the historic attractions, charming shops, and delicious eateries that Bath is famous for. After a day of exploring the city, returning to the tranquility of <b>The Oval</b> provides a serene escape from the lively city center. Whether you choose to immerse yourself in Bath's rich history or simply relax in the beauty of the countryside, <b>The Oval</b>'s location offers the best of both worlds.</p><a id = "how_close_is_the_oval_to_the_university_of_bath"> <h2>How close is The Oval to the University of Bath</h2></a><p>The Oval is conveniently located near the <b>University of Bath</b>, just 2.5 <b>miles</b> away. For those looking to walk, it's a pleasant 45-minute stroll through the charming city of Bath. If you prefer public transportation, the university is well connected <b>by bus</b> routes that can get you there in around 15 minutes. Driving to the campus is also an option, taking approximately 10-15 minutes depending on traffic. Whether you choose to travel on foot, <b>by bus</b>, or <b>by car</b>, getting to the <b>University of Bath</b> from The Oval is a convenient and straightforward journey.</p><a id = "how_close_is_the_oval_to_the_bath_spa_university"> <h2>How close is The Oval to the Bath Spa University</h2></a><p><b>Bath Spa University</b> is conveniently located just 1.5 <b>miles</b> from The Oval, making it easily accessible by various means of transportation. For students and staff looking to reach the university <b>by foot</b>, it would take around 30 minutes to stroll through the scenic streets of Bath. Alternatively, there is a direct <b>bus route</b> that connects The Oval to <b>Bath Spa University</b>, with a quick and convenient journey lasting around 10-15 minutes. For those with access to a car, the drive between The Oval and the university is only a short 5-10 minute ride, depending on traffic. Whether commuting <b>by foot</b>, bus, or car, the close proximity between The Oval and <b>Bath Spa University</b> ensures a seamless and efficient travel experience for all.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, looking for studio apartments for students in The Oval, Bath can be an exciting venture. With its picturesque surroundings and proximity to university campuses, The Oval offers an ideal location for student living. Studio apartments provide the perfect blend of functionality and space optimization, making them a popular choice among students. This convenient housing option allows for privacy and independence while still being part of a vibrant community. In conclusion, students seeking studio apartments in The Oval, Bath can expect a comfortable and convenient living experience that caters to their academic and social needs. With the right research and planning, finding the perfect studio apartment in this area can enhance the overall student experience.</p></>)
};

export default BathTheOvalStudio1;