
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


const  BathHatfieldBuildingsStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Hatfield Buildings, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Hatfield Buildings, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Hatfield Buildings, Bath</b> provide a convenient and comfortable living space for students in the heart of Bath. These apartments are well-equipped with modern amenities and are located in a prime location within close proximity to local amenities and public transportation. Perfect for students looking for a convenient and secure accommodation option during their academic year in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-hatfield-buildings-bath.png')} alt='Studio Apartments for Students in Hatfield Buildings, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Hatfield Buildings, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71100&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Hatfield Buildings, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_hatfield_buildings,_bath_pp/pm">Prices for Studio Apartments for Students in Hatfield Buildings, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_hatfield_buildings,_bath__all_bills_inclusive">Studio Apartments for Students in Hatfield Buildings, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_hatfield_buildings,_bath">Cheap Studio Apartments for Students in Hatfield Buildings, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hatfield_buildings,_bath__recently_added">Studio Apartments for Students in Hatfield Buildings, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_hatfield_buildings,_bath__recently_reduced">Studio Apartments for Students in Hatfield Buildings, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_hatfield_buildings,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Hatfield Buildings, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hatfield_buildings,_bath__private_rental_sector">Studio Apartments for Students in Hatfield Buildings, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_hatfield_buildings,_bath__fully_furnished">Studio Apartments for Students in Hatfield Buildings, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_hatfield_buildings_to_the_city_center">How close is Hatfield Buildings to the City Center</a></li><li><a href = "#how_close_is_hatfield_buildings_to_the_university_of_bath">How close is Hatfield Buildings to the University of Bath</a></li><li><a href = "#how_close_is_hatfield_buildings_to_the_bath_spa_university">How close is Hatfield Buildings to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_hatfield_buildings,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Hatfield Buildings, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Hatfield Buildings, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71100")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_hatfield_buildings,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Hatfield Buildings, Bath - All Bills Inclusive</h2></a><p><b>UniBills.com</b> offers the perfect solution for university students living in a 1 bedroom studio at Hatfield Buildings in Bath, Somerset. By signing up for their <b>all bills inclusive</b> service, you can enjoy the convenience of having all your utility bills covered in one simple monthly payment. This allows you to <b>concentrate on your studies</b> without the stress of managing multiple bills. <b>UniBills.com</b> takes care of everything for you, from electricity and water to internet and council tax. Say goodbye to the hassle of sorting out bills and hello to a worry-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier with the all inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_studio_apartments_for_students_in_hatfield_buildings,_bath"> <h2>Cheap Studio Apartments for Students in Hatfield Buildings, Bath</h2></a><p><Portlet location="REGION^71100" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hatfield_buildings,_bath__recently_added"> <h2>Studio Apartments for Students in Hatfield Buildings, Bath - Recently Added</h2></a><p><Portlet location="REGION^71100" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hatfield_buildings,_bath__recently_reduced"> <h2>Studio Apartments for Students in Hatfield Buildings, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71100" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_hatfield_buildings,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Hatfield Buildings, Bath, Somerset, Bath</h2></a><p>Looking for 1-bedroom <b>student Studios</b> in the vibrant city of <b>Bath</b>? Our property portal features a range of options, including the modern and cozy 1-bedroom studios located in Hatfield Buildings, <b>Bath</b>, Somerset. Conveniently situated near the University of <b>Bath</b> and <b>Bath</b> Spa University, these <b>student Studios</b> offer the perfect blend of comfort and convenience for students looking for an ideal living space. With easy access to local amenities and transport links, living in Hatfield Buildings provides a great base for students to explore all that <b>Bath</b> has to offer. Whether you're studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, finding the perfect 1-bedroom studio in Hatfield Buildings is easy with our property portal. Start your search today and secure your ideal student accommodation in <b>Bath</b>.</p><a id = "studio_apartments_for_students_in_hatfield_buildings,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Hatfield Buildings, Bath - Private Rental Sector</h2></a><p>If you're searching for a cozy and convenient living space in Bath, Somerset, look no further than the 1 Bedroom Studios in Hatfield Buildings. Situated in the heart of Bath, these studios offer the perfect blend of comfort and style. Each studio comes <b>fully furnished</b>, providing you with everything you need for a hassle-free move-in. What's more, the rental price includes bills, so you can enjoy simple and straightforward living without any hidden costs. Whether you're a student, young professional, or couple, these studios are an ideal choice for those seeking a private and comfortable living space in a bustling city.</p><a id = "studio_apartments_for_students_in_hatfield_buildings,_bath__fully_furnished"> <h2>Studio Apartments for Students in Hatfield Buildings, Bath - Fully Furnished</h2></a><p>Looking for a convenient and comfortable living space in Bath, Somerset? Look no further than the fully furnished 1 Bedroom Studios in Hatfield Buildings, Bath. These modern and stylish Studios offer everything you need for a hassle-free living experience. Located in a prime location, these Studios are perfect for students looking for a cozy and convenient place to call home. With all the necessary furniture and appliances provided, settling into your new space has never been easier. It is normal for student Studios to be fully furnished, making the move-in process seamless and stress-free. Enjoy the convenience of having a fully equipped kitchen, a comfortable bedroom, and a cozy living area all in one space. Don't miss out on the opportunity to live in these <b>fully furnished 1 Bedroom Studios in Hatfield Buildings, Bath, Somerset, Bath</b>.</p><a id = "how_close_is_hatfield_buildings_to_the_city_center"> <h2>How close is Hatfield Buildings to the City Center</h2></a><p><b>Hatfield Buildings</b>, situated in the historic city of Bath, is conveniently located just a few <b>miles</b> away from the bustling city center. Nestled in a picturesque residential area, <b>Hatfield Buildings</b> offers a peaceful retreat while still being within easy reach of all the attractions and amenities that Bath has to offer. From the famous Roman Baths and the iconic Bath Abbey to the luxurious Thermae Bath Spa and the vibrant shopping streets, everything is just a short distance away. Whether you fancy exploring the city's cultural landmarks, indulging in the local cuisine, or enjoying a leisurely stroll along the charming streets, <b>Hatfield Buildings</b> provides the perfect base for your stay. With its proximity to <b>Bath city center</b>, guests can easily immerse themselves in the rich history and vibrant energy of this beautiful city.</p><a id = "how_close_is_hatfield_buildings_to_the_university_of_bath"> <h2>How close is Hatfield Buildings to the University of Bath</h2></a><p>Hatfield Buildings is located just 1.5 <b>miles</b> away from the prestigious <b>University of Bath</b>, making it a convenient residence for students, faculty, and staff. The university can be easily reached <b>by foot</b> in about 30 minutes, providing an enjoyable stroll through the vibrant city of Bath. For those who prefer a quicker commute, there are regular bus services that operate between Hatfield Buildings and the university, with a travel time of around 10 minutes. Additionally, driving to the <b>University of Bath</b> from Hatfield Buildings takes roughly 5-10 minutes, depending on traffic conditions. The proximity of Hatfield Buildings to the <b>University of Bath</b> ensures that residents have easy access to academic facilities, student services, and campus events. Whether traveling <b>by foot</b>, bus, or car, getting to the <b>University of Bath</b> from Hatfield Buildings is seamless and convenient.</p><a id = "how_close_is_hatfield_buildings_to_the_bath_spa_university"> <h2>How close is Hatfield Buildings to the Bath Spa University</h2></a><p>Hatfield Buildings is conveniently located close to <b>Bath Spa University</b>, making it an ideal accommodation option for students. Situated just a few <b>miles</b> away from the university campus, residents can easily reach <b>Bath Spa University</b> <b>by foot</b> in approximately 20-25 minutes, providing a convenient and scenic walk. Alternatively, there is a direct <b>bus route</b> that connects Hatfield Buildings to the university, offering a quick and hassle-free journey for those who prefer to commute <b>by bus</b>. For those with access to a car, the university is just a short drive away, making it easily accessible for residents who prefer to travel <b>by car</b>. The proximity of Hatfield Buildings to <b>Bath Spa University</b> ensures that residents can enjoy a convenient and smooth commute to and from campus, allowing them to fully immerse themselves in university life.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, looking for studio apartments for students in Hatfield Buildings, Bath can be a rewarding and exciting process. These studio apartments offer students a convenient and comfortable living space, perfect for focusing on their studies and enjoying student life. With their prime location in Hatfield Buildings, students have easy access to amenities, transportation, and the lively atmosphere of Bath. The various options available cater to different budgets and preferences, ensuring that students can find the perfect studio apartment to suit their needs. In conclusion, Hatfield Buildings in Bath provide an ideal living situation for students seeking a balance of independence and community while pursuing their academic goals. With well-designed living spaces and a vibrant neighborhood, studio apartments in Hatfield Buildings offer students a fulfilling and enriching student experience.</p></>)
};

export default BathHatfieldBuildingsStudio1;