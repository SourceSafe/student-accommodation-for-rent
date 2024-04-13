
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


const  BathOldfieldParkHouse4 = () => 
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

    return (<><h1>4 Bedroom Student Houses in Oldfield Park, Bath</h1><p>We have listings for <b>4 Bedroom Student Houses in Oldfield Park, Bath</b> for the academic year 2024. 
<b>4 Bedroom Student Houses in Oldfield Park, Bath</b> are popular among students due to their proximity to local amenities and easy access to public transportation. These houses are ideal for groups of students looking to live together during their academic year in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-houses-in-oldfield-park-bath.png')} alt='4 Bedroom Student Houses in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71108&type=House&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Houses in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_houses_in_oldfield_park,_bath_pp/pm">Prices for 4 Bedroom Student Houses in Oldfield Park, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive">4 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_houses_in_oldfield_park,_bath">Cheap 4 Bedroom Student Houses in Oldfield Park, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__recently_added">4 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced">4 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector">4 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished">4 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_houses_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Houses in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£608 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 4 bedroom student house in Oldfield Park, Bath, Somerset can be a fantastic experience, but managing bills and utilities can be quite a hassle. Instead of dealing with multiple bills and constant calculations, why not consider subscribing to an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers a convenient solution where you don't have to worry about individual bills for electricity, water, gas, internet, or TV license. By opting for this service, you can <b>concentrate on your studies</b> and social activities without the stress of managing finances. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and simplify your student life. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in Oldfield Park a smooth and enjoyable one.</p><a id = "cheap_4_bedroom_student_houses_in_oldfield_park,_bath"> <h2>Cheap 4 Bedroom Student Houses in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__recently_added"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 4 bedroom house in Oldfield Park, <b>Bath</b>, Somerset? Look no further than our property portal. We specialize in connecting students with spacious and comfortable <b>student Houses</b> in this vibrant area. Oldfield Park is a popular choice for students attending the University of <b>Bath</b> and <b>Bath</b> Spa University, offering a convenient location with easy access to campus and city amenities. With our user-friendly search filters, you can easily find the ideal 4 bedroom house that fits your needs and budget. Don't waste time scrolling through countless listings, let us help you discover the perfect student accommodation in <b>Bath</b>.</p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</h2></a><p>For those seeking spacious and comfortable accommodations in the picturesque town of Bath, the private rental sector offers an array of options, including charming <b>4 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</b>. These properties are ideal for families, groups of friends, or professionals looking for a home away from home. Many of these houses come <b>fully furnished</b>, saving tenants the hassle of buying furniture and allowing them to settle in quickly. Additionally, some landlords offer the convenience of <b>bills included</b> in the rent, making budgeting easier for tenants. Located in the vibrant neighborhood of Oldfield Park, these houses provide easy access to local amenities, public transportation, and the beauty of the surrounding countryside. Whether you are searching for a long-term rental or a temporary stay, the private rental sector in Bath has something to suit every need.</p><a id = "4_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished"> <h2>4 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</h2></a><p>If you're searching for <b>fully furnished 4 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</b>, look no further! In this charming neighborhood, it is normal for student houses to be fully furnished, making the relocation process a breeze. These properties come equipped with everything you need for comfortable living, from stylish furniture to essential appliances. Imagine coming home to spacious living areas, cozy bedrooms, and a well-equipped kitchen ready for your culinary adventures. With convenient access to local amenities and the vibrant city of Bath just a stone's throw away, living in a fully furnished 4 bedroom house in Oldfield Park offers the perfect blend of comfort and convenience. Say goodbye to the hassle of moving furniture and hello to a stress-free living experience in this picturesque area of Somerset.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming suburb located just outside of <b>Bath city center</b>. Situated approximately 1.5 <b>miles</b> away, it offers residents a peaceful retreat while still being easily accessible to all the amenities and attractions of the bustling city. Whether you're a local or a visitor, <b>Oldfield Park</b> provides the perfect balance of tranquility and convenience. A leisurely stroll or a quick bus ride will have you in the heart of <b>Bath city center</b> in no time, where you can explore the historic Roman baths, indulge in shopping at the quaint independent shops, or enjoy a delicious meal at one of the many restaurants. With its proximity to the city center, <b>Oldfield Park</b> is the ideal place to call home for those looking for a peaceful neighborhood with easy access to all that Bath has to offer.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is incredibly close to the <b>University of Bath</b>, making it a convenient location for students and staff alike. Situated just 1.5 <b>miles</b> from the university campus, Oldfield Park is easily accessible <b>by foot</b>, <b>by bus</b>, or <b>by car</b>. For those looking to commute to the university, there are frequent <b>bus route</b>s that connect Oldfield Park to the university, making the journey quick and hassle-free. Alternatively, the university can be easily reached <b>by car</b> in just a few minutes, providing flexibility for those who prefer to drive. With its close proximity and various transportation options, Oldfield Park is the ideal location for anyone looking to live near the <b>University of Bath</b>.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is conveniently located close to <b>Bath Spa University</b>, making it an ideal residential area for students. The university is just a few <b>miles</b> away from Oldfield Park, which can easily be reached on foot in about 30 minutes. For those looking for a faster commute, there are regular bus services that connect Oldfield Park to the university campus, allowing students to arrive in just a short ride. If you prefer to drive, the journey <b>by car</b> takes less than 10 minutes, making it a quick and convenient option for those with their own vehicles. Additionally, the <b>bus route</b> provides a convenient and cost-effective transportation option for students living in Oldfield Park. With its close proximity to <b>Bath Spa University</b> and easy access <b>by foot</b>, bus, or car, Oldfield Park is a fantastic choice for students looking for a convenient and well-connected place to live during their time at university.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 4-bedroom student house in Oldfield Park, Bath can be an exciting yet daunting task. With its vibrant community and close proximity to local amenities and the University of Bath, Oldfield Park is a popular choice for students looking for accommodation. When searching for a 4-bedroom property in this area, it is important to consider factors such as location, budget, and facilities. Some properties may offer modern amenities and spacious rooms, while others may be more budget-friendly. Additionally, it is crucial to conduct thorough research and view multiple properties before making a decision. Overall, finding a 4-bedroom student house in Oldfield Park requires careful consideration and planning to ensure that you find a comfortable and suitable living space for the academic year.</p></>)
};

export default BathOldfieldParkHouse4;