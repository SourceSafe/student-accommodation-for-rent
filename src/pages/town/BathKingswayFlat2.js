
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


const  BathKingswayFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Kingsway, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Kingsway, Bath</b> for the academic year 2024.

<b>2 Bedroom Student Flats in Kingsway, Bath</b> offer students a convenient and comfortable living space in Bath. Located in a desirable area close to local amenities and public transportation, these flats provide a great option for students looking for accommodation during their academic year. With two bedrooms, these flats are ideal for sharing with a friend or classmate while studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-kingsway-bath.png')} alt='2 Bedroom Student Flats in Kingsway, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Kingsway, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71102&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Kingsway, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_kingsway,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Kingsway, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_kingsway,_bath__all_bills_inclusive">2 Bedroom Student Flats in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_kingsway,_bath">Cheap 2 Bedroom Student Flats in Kingsway, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_kingsway,_bath__recently_added">2 Bedroom Student Flats in Kingsway, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_kingsway,_bath__recently_reduced">2 Bedroom Student Flats in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_kingsway,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Kingsway, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_kingsway,_bath__private_rental_sector">2 Bedroom Student Flats in Kingsway, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_kingsway,_bath__fully_furnished">2 Bedroom Student Flats in Kingsway, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_kingsway_to_the_city_center">How close is Kingsway to the City Center</a></li><li><a href = "#how_close_is_kingsway_to_the_university_of_bath">How close is Kingsway to the University of Bath</a></li><li><a href = "#how_close_is_kingsway_to_the_bath_spa_university">How close is Kingsway to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_kingsway,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Kingsway, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£680 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Kingsway, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_kingsway,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2 bedroom flat in Kingsway, Bath, Somerset? Juggling studies, social life, and bills can be overwhelming. That's where <b>UniBills.com</b> comes in. By opting for their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. No more worrying about splitting bills with your flatmate or keeping track of different due dates. With all bills included in one convenient package, you can <b>concentrate on your studies</b> and have peace of mind knowing that everything is taken care of. Say goodbye to the stress of managing utilities and hello to a simplified student life. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in Kingsway a breeze.</p><a id = "cheap_2_bedroom_student_flats_in_kingsway,_bath"> <h2>Cheap 2 Bedroom Student Flats in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_kingsway,_bath__recently_added"> <h2>2 Bedroom Student Flats in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_kingsway,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_kingsway,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Kingsway, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 2-bedroom flat in <b>Bath</b>? Look no further than our property portal, where we specialize in helping students find their ideal accommodation. Located in the sought-after area of Kingsway, <b>Bath</b>, Somerset, our listings include a variety of 2-bedroom flats that are ideal for students attending the University of <b>Bath</b> or <b>Bath</b> Spa University. With convenient access to local amenities and public transportation, these <b>student Flats</b> offer a comfortable and convenient living experience. Whether you prefer a modern apartment or a cozy flat, our portal has a range of options to suit your needs. Start your search today and find the perfect 2-bedroom flat in <b>Bath</b> for your student lifestyle.</p><a id = "2_bedroom_student_flats_in_kingsway,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Kingsway, Bath - Private Rental Sector</h2></a><p>If you're looking for a cozy and convenient place to call home in Bath, Somerset, look no further than the 2 Bedroom Flats in Kingsway. These <b>fully furnished</b> flats offer modern amenities and a prime location for a comfortable living experience. With <b>bills included</b> in the rent, you can say goodbye to the hassle of managing multiple payments. Whether you're a young professional or a small family, these flats provide a stylish and practical living space. The vibrant neighborhood of Kingsway offers easy access to shops, restaurants, and parks, making it a desirable area to reside in Bath. Don't miss out on the opportunity to live in these well-maintained flats that provide everything you need for a convenient and enjoyable lifestyle in the heart of Bath.</p><a id = "2_bedroom_student_flats_in_kingsway,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Kingsway, Bath - Fully Furnished</h2></a><p>Looking for a comfortable and stylish living space in the heart of Bath, Somerset? Look no further than the fully furnished 2 Bedroom Flats in Kingsway. Perfect for students or young professionals, these flats offer convenience and luxury in one package. Situated in a prime location, residents can enjoy easy access to shops, restaurants, and all the amenities that Bath has to offer. With two bedrooms, a spacious living area, and a fully equipped kitchen, these flats provide everything you need for a cozy home away from home. Plus, it is normal for student flats to be fully furnished, so you can move in hassle-free and start enjoying your new space right away. Don't miss out on the opportunity to live in these modern and convenient flats in beautiful Bath.</p><a id = "how_close_is_kingsway_to_the_city_center"> <h2>How close is Kingsway to the City Center</h2></a><p><b>Kingsway</b> is conveniently located close to <b>Bath city center</b>, only a few <b>miles</b> away. This prime location offers residents the best of both worlds - a peaceful retreat from the hustle and bustle of city life while still being within easy reach of all the amenities and attractions that Bath has to offer. Whether you're looking to explore the beautiful architecture of the historic city center, indulge in the vibrant restaurant scene, or relax in the natural hot springs, <b>Kingsway</b>'s proximity to <b>Bath city center</b> ensures that you can easily access all that this charming city has to offer. With just a short drive or a quick bus ride away, residents of <b>Kingsway</b> can enjoy the convenience of urban living without sacrificing the tranquility of suburban life.</p><a id = "how_close_is_kingsway_to_the_university_of_bath"> <h2>How close is Kingsway to the University of Bath</h2></a><p>Kingsway is conveniently located near the <b>University of Bath</b>, approximately 2 <b>miles</b> away. For those who prefer to travel <b>by foot</b>, it would take around 40 minutes to reach the university campus. Alternatively, there is a direct <b>bus route</b> that connects Kingsway to the <b>University of Bath</b>, making the commute quick and hassle-free. <b>by bus</b>, the journey takes about 15-20 minutes, depending on traffic. For those who prefer to drive, the university is easily accessible <b>by car</b>, with a journey time of around 10 minutes. This close proximity between Kingsway and the <b>University of Bath</b> makes it an ideal location for students or faculty members looking for convenient housing options near the campus.</p><a id = "how_close_is_kingsway_to_the_bath_spa_university"> <h2>How close is Kingsway to the Bath Spa University</h2></a><p>Kingsway is situated just a stone's throw away from <b>Bath Spa University</b>, making it an ideal location for students looking to be close to campus. The university is approximately 1.5 <b>miles</b> away from Kingsway, which can easily be reached <b>by foot</b> in around 30 minutes. For those looking for a quicker option, there is a convenient <b>bus route</b> that connects Kingsway to <b>Bath Spa University</b>, with buses running frequently throughout the day. <b>by bus</b>, the journey takes less than 10 minutes, providing a convenient and affordable transportation option for students. Additionally, for those who prefer to drive, the university is only a short 5-10 minute car journey from Kingsway, making it a convenient option for students with access to a vehicle. Overall, Kingsway's close proximity to <b>Bath Spa University</b> offers students the flexibility to choose how they want to travel to campus, ensuring a stress-free commute.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>When searching for 2-bedroom student flats in Kingsway, Bath, it's important to consider various factors such as location, price, and amenities. Kingsway offers a convenient and vibrant location for students, with easy access to the University of Bath and the city center. The availability of 2-bedroom flats in this area ensures that students can find suitable accommodation to live comfortably and focus on their studies. By carefully researching and comparing different options, students can find a flat that meets their needs and budget. Overall, Kingsway in Bath provides a range of opportunities for students to live in a supportive and accessible environment, making it a desirable location for those seeking 2-bedroom student flats.</p></>)
};

export default BathKingswayFlat2;