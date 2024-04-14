
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


const  BathLocksbrookFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Locksbrook, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Locksbrook, Bath</b> for the academic year 2024. 

<b>2 Bedroom Student Flats in Locksbrook, Bath</b> are perfect for students looking for accommodation in the vibrant city of Bath. These flats typically come fully furnished and offer a convenient location close to universities, amenities, and transportation options.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-locksbrook-bath.png')} alt='2 Bedroom Student Flats in Locksbrook, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Locksbrook, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71104&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Locksbrook, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_locksbrook,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Locksbrook, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_locksbrook,_bath__all_bills_inclusive">2 Bedroom Student Flats in Locksbrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_locksbrook,_bath">Cheap 2 Bedroom Student Flats in Locksbrook, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_locksbrook,_bath__recently_added">2 Bedroom Student Flats in Locksbrook, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_locksbrook,_bath__recently_reduced">2 Bedroom Student Flats in Locksbrook, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_locksbrook,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Locksbrook, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_locksbrook,_bath__private_rental_sector">2 Bedroom Student Flats in Locksbrook, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_locksbrook,_bath__fully_furnished">2 Bedroom Student Flats in Locksbrook, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_locksbrook_to_the_city_center">How close is Locksbrook to the City Center</a></li><li><a href = "#how_close_is_locksbrook_to_the_university_of_bath">How close is Locksbrook to the University of Bath</a></li><li><a href = "#how_close_is_locksbrook_to_the_bath_spa_university">How close is Locksbrook to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_locksbrook,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Locksbrook, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£707 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Locksbrook, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71104")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_locksbrook,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Locksbrook, Bath - All Bills Inclusive</h2></a><p>Living in a 2 bedroom student flat in Locksbrook, Bath, Somerset can be both exciting and challenging. To fully enjoy your student experience without the stress of managing bills, consider subscribing to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without worrying about utility bills or unexpected expenses. With an <b>all bills inclusive</b> package, you can enjoy the hassle-free option provided by <b>UniBills.com</b>, making your student life more comfortable and budget-friendly. Say goodbye to the hassle of keeping track of multiple bills and hello to a simplified living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website to discover the benefits of living in an <b>all bills inclusive</b> student flat in Locksbrook, Bath, Somerset.</p><a id = "cheap_2_bedroom_student_flats_in_locksbrook,_bath"> <h2>Cheap 2 Bedroom Student Flats in Locksbrook, Bath</h2></a><p><Portlet location="REGION^71104" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_locksbrook,_bath__recently_added"> <h2>2 Bedroom Student Flats in Locksbrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71104" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_locksbrook,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Locksbrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71104" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_locksbrook,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Locksbrook, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a cozy 2 bedroom flat in the vibrant city of <b>Bath</b>? Our property portal is here to help you find the perfect student flat in Locksbrook, <b>Bath</b>, Somerset. Located near the University of <b>Bath</b> and <b>Bath</b> Spa University, our selection of <b>2 Bedroom Flats</b> caters to the needs of student life. Whether you prefer a modern apartment with all the amenities or a charming flat with character, we have options to suit every taste and budget. With easy access to local shops, restaurants, and public transportation, living in Locksbrook offers convenience and a lively atmosphere.</p><a id = "2_bedroom_student_flats_in_locksbrook,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Locksbrook, Bath - Private Rental Sector</h2></a><p>Looking for a cozy and convenient place to call home in Bath, Somerset? Look no further than the private rental sector offering 2 bedroom flats in Locksbrook, Bath. These properties provide the perfect blend of comfort and accessibility, with the added bonus of <b>bills included</b>, making budgeting a breeze. Whether you're a young professional, a couple, or a small family, these flats cater to your needs with spacious rooms, modern amenities, and a prime location in the heart of Bath. Additionally, these flats come <b>fully furnished</b>, saving you the hassle of furnishing your new home from scratch. Don't miss out on the opportunity to experience stylish living in one of Bath's most sought-after neighborhoods.</p><a id = "2_bedroom_student_flats_in_locksbrook,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Locksbrook, Bath - Fully Furnished</h2></a><p>Looking for a comfortable and convenient living space in Bath, Somerset? Look no further than the fully furnished 2 Bedroom Flats in Locksbrook. Situated in the heart of Bath, these modern and stylish flats offer everything you need for a hassle-free living experience. From cozy bedrooms to a fully equipped kitchen and a spacious living area, these flats are perfect for individuals or small families looking for a convenient place to call home. With its prime location, residents can easily access nearby amenities, restaurants, and transportation options. What sets these flats apart is the fact that they come fully furnished, making move-in a breeze. In Bath, it is normal for student Flats to be fully furnished, so you can expect high-quality furniture and appliances in every corner of your new home.</p><a id = "how_close_is_locksbrook_to_the_city_center"> <h2>How close is Locksbrook to the City Center</h2></a><p><b>Locksbrook</b> is nestled just a few <b>miles</b> away from <b>Bath city center</b>, making it an ideal location for those who want to enjoy the bustling city life without being right in the thick of it. This unique area offers a perfect blend of convenience and tranquility, with easy access to all the cultural attractions, dining options, and shopping opportunities that Bath has to offer. Whether you're looking to explore the historic Roman Baths, take a leisurely stroll along the picturesque River Avon, or indulge in a spot of retail therapy at SouthGate shopping center, everything is within easy reach from <b>Locksbrook</b>. With its proximity to <b>Bath city center</b>, residents can experience the best of both worlds - a peaceful retreat just a stone's throw away from the vibrant heart of the city.</p><a id = "how_close_is_locksbrook_to_the_university_of_bath"> <h2>How close is Locksbrook to the University of Bath</h2></a><p>Locksbrook is conveniently located close to the <b>University of Bath</b>, just a short distance away. Situated only a few <b>miles</b> from the university campus, Locksbrook is easily accessible <b>by foot</b>, bus, or car. Students can reach the <b>University of Bath</b> quickly by hopping on a bus that travels directly to the campus, making commuting between the two locations a seamless experience. For those who prefer to drive, the university is just a short car journey away, providing flexibility and convenience for students living at Locksbrook. Being so close to the <b>University of Bath</b>, residents of Locksbrook can easily take advantage of all the resources and amenities the campus has to offer while still enjoying the vibrant atmosphere of living off-campus.</p><a id = "how_close_is_locksbrook_to_the_bath_spa_university"> <h2>How close is Locksbrook to the Bath Spa University</h2></a><p>Locksbrook is conveniently located near <b>Bath Spa University</b>, situated just a few <b>miles</b> away. For those looking to commute to the university, there are several transportation options available. <b>by foot</b>, the journey takes approximately 30-40 minutes, which is a great option for those who enjoy walking and want to stay active. Additionally, there is a <b>bus route</b> that connects Locksbrook directly to <b>Bath Spa University</b>, making it easy and convenient for students to travel between the two locations. If you prefer to drive, the university is also easily accessible <b>by car</b>, with a quick and straightforward route that typically takes around 10-15 minutes, depending on traffic. Overall, whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from Locksbrook is a quick and hassle-free journey.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 2-bedroom student flats in Locksbrook, Bath, it is evident that this location offers a wide range of options for students looking to live in a vibrant and convenient area. With its proximity to the University of Bath and local amenities, Locksbrook provides an ideal living situation for students. The availability of modern and well-equipped flats cater to the needs of students seeking a comfortable and secure living environment. Additionally, the friendly and supportive community within Locksbrook makes it a welcoming place for students to settle in. In conclusion, the variety of 2-bedroom student flats in Locksbrook, Bath, offers students a perfect balance of convenience, comfort, and community, making it a sought-after location for those seeking student accommodation.</p></>)
};

export default BathLocksbrookFlat2;