
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


const  BathOldfieldParkFlat3 = () => 
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

    return (<><h1>3 Bedroom Student Flats in Oldfield Park, Bath</h1><p>We have listings for <b>3 Bedroom Student Flats in Oldfield Park, Bath</b> for the academic year 2024. 

Located in the vibrant area of Oldfield Park in Bath, these 3 bedroom student flats are ideal for students looking for spacious and comfortable accommodation. With close proximity to local amenities, transport links, and the University of Bath, these flats offer a convenient and enjoyable living experience for students in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-flats-in-oldfield-park-bath.png')} alt='3 Bedroom Student Flats in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71108&type=Flat&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Flats in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_flats_in_oldfield_park,_bath_pp/pm">Prices for 3 Bedroom Student Flats in Oldfield Park, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive">3 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_flats_in_oldfield_park,_bath">Cheap 3 Bedroom Student Flats in Oldfield Park, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_oldfield_park,_bath__recently_added">3 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced">3 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector">3 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished">3 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_flats_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Flats in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£715 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for accommodation in Oldfield Park, Bath, Somerset? Consider subscribing to an <b>all bills inclusive</b> service for your 3 bedroom flat to make your life easier. <b>UniBills.com</b> offers a convenient and stress-free option where all your bills are bundled into one simple monthly payment, allowing you to <b>concentrate on your studies</b> without the added worry of managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option and have peace of mind knowing that everything is taken care of. Say goodbye to the hassle of setting up utilities and managing payments, and hello to a more convenient living arrangement. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience.</p><a id = "cheap_3_bedroom_student_flats_in_oldfield_park,_bath"> <h2>Cheap 3 Bedroom Student Flats in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_oldfield_park,_bath__recently_added"> <h2>3 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced"> <h2>3 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a cozy 3-bedroom flat in Oldfield Park, <b>Bath</b>, Somerset? Look no further! Our property portal specializes in helping students find the perfect accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Oldfield Park is a vibrant and popular area among students, with its convenient location close to the city center and the campuses. Whether you're looking for a spacious flat to share with friends or a quiet place to focus on your studies, we have a variety of options to suit your needs. With our user-friendly search filters, finding the ideal student flat has never been easier. Don't miss out on the opportunity to secure a comfortable and convenient 3-bedroom flat in the heart of <b>Bath</b>. Start your search today and make the most of your student experience in this beautiful city.</p><a id = "3_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector"> <h2>3 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living space in Oldfield Park, Bath, Somerset? You've come to the right place! Our selection of <b>3 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</b> offers the perfect blend of convenience and style. Each flat is <b>fully furnished</b> to provide you with all the essentials for a cozy home environment. With <b>bills included</b> in the rent, you can enjoy a hassle-free living experience without the stress of budgeting for additional expenses. Whether you're a student looking to share accommodation with friends or a family seeking a larger space, our 3 bedroom flats are ideal for a variety of tenants.</p><a id = "3_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished"> <h2>3 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</h2></a><p>Are you looking for a spacious and comfortable living space in the charming neighborhood of Oldfield Park, Bath, Somerset, Bath? Look no further than our fully furnished 3 Bedroom Flats in Oldfield Park. These flats are not only convenient and stylish but also come fully equipped with everything you need for a seamless move-in experience. From cozy furniture to essential appliances, you can trust that these flats have been thoughtfully designed to cater to your every need. In a city where it is normal for student Flats to be fully furnished, our 3 Bedroom Flats stand out for their modern amenities and tasteful decor. Whether you are a student looking for a hassle-free accommodation option or a professional seeking a comfortable living space, our fully furnished 3 Bedroom Flats in Oldfield Park are sure to exceed your expectations. Book a viewing today and experience the convenience and comfort of our thoughtfully curated living spaces.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming suburb located just outside of <b>Bath city center</b>. Situated only 1.5 <b>miles</b> away from the heart of Bath, <b>Oldfield Park</b> offers a convenient and accessible location for residents and visitors alike. Whether you are looking to explore the historic Roman baths, indulge in a spa day at Thermae Bath Spa, or shop at the bustling SouthGate shopping district, <b>Oldfield Park</b>'s proximity to <b>Bath city center</b> makes it easy to immerse yourself in all that this vibrant city has to offer. With regular bus services and a leisurely walk that takes approximately 30 minutes, getting to and from <b>Oldfield Park</b> to <b>Bath city center</b> is quick and effortless. So, whether you are a student attending the University of Bath or a tourist looking to explore the beauty of the UNESCO World Heritage city, <b>Oldfield Park</b>'s close proximity to <b>Bath city center</b> makes it the ideal place to call home during your stay.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is a vibrant neighborhood located in close proximity to the prestigious <b>University of Bath</b>. Situated just 1.5 <b>miles</b> away from the university, residents have easy access to campus <b>by foot</b>, bus, or car. <b>by foot</b>, it takes approximately 30 minutes to reach the university, making it a convenient option for those who prefer to stay active. For those who prefer public transportation, there are regular <b>bus route</b>s that pass through Oldfield Park and take around 10-15 minutes to reach the university. Additionally, students and staff who prefer to drive can reach the university in just a short 5-10 minute car journey. With its convenient location and various transportation options, Oldfield Park provides a desirable living environment for those affiliated with the <b>University of Bath</b>.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is a vibrant neighborhood located just a stone's throw away from <b>Bath Spa University</b>. Situated only a few <b>miles</b> south of the university campus, Oldfield Park is conveniently linked to <b>Bath Spa University</b> by a direct <b>bus route</b>. For students looking to commute, it is a quick journey both <b>by foot</b> and <b>by bus</b>, taking just a few minutes to reach the university. Additionally, for those who prefer driving, Oldfield Park is easily accessible <b>by car</b>, with a straightforward route that can be completed in under 10 minutes. This close proximity makes Oldfield Park an ideal location for students attending <b>Bath Spa University</b>, offering a peaceful retreat while still being within easy reach of the campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In your search for a 3-bedroom student flat in Oldfield Park, Bath, it's important to consider various factors to ensure you find the perfect accommodation. Oldfield Park is a vibrant area known for its convenient location, with plenty of local amenities and excellent transport links to both the city center and the university campuses. When browsing for properties, make sure to look for spacious rooms, well-equipped kitchens, and comfortable communal areas. Additionally, consider the proximity to supermarkets, cafes, and recreational facilities for a well-rounded student experience. Ultimately, finding a 3-bedroom student flat in Oldfield Park offers the perfect blend of convenience, comfort, and community, making it an ideal choice for your university years.</p></>)
};

export default BathOldfieldParkFlat3;