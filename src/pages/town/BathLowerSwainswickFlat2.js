
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


const  BathLowerSwainswickFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Lower Swainswick, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Lower Swainswick, Bath</b> for the academic year 2024.

<b>2 Bedroom Student Flats in Lower Swainswick, Bath</b> offer spacious living areas perfect for students looking for accommodation in Bath. Located in a charming neighborhood, these flats provide a peaceful environment for studying while still being close to the city center and university campuses. With modern amenities and convenient transportation options, these flats are ideal for students seeking a comfortable and convenient living space during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-lower-swainswick-bath.png')} alt='2 Bedroom Student Flats in Lower Swainswick, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Lower Swainswick, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71105&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Lower Swainswick, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_lower_swainswick,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Lower Swainswick, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_lower_swainswick,_bath__all_bills_inclusive">2 Bedroom Student Flats in Lower Swainswick, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_lower_swainswick,_bath">Cheap 2 Bedroom Student Flats in Lower Swainswick, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_lower_swainswick,_bath__recently_added">2 Bedroom Student Flats in Lower Swainswick, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_lower_swainswick,_bath__recently_reduced">2 Bedroom Student Flats in Lower Swainswick, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_lower_swainswick,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Lower Swainswick, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_lower_swainswick,_bath__private_rental_sector">2 Bedroom Student Flats in Lower Swainswick, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_lower_swainswick,_bath__fully_furnished">2 Bedroom Student Flats in Lower Swainswick, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_lower_swainswick_to_the_city_center">How close is Lower Swainswick to the City Center</a></li><li><a href = "#how_close_is_lower_swainswick_to_the_university_of_bath">How close is Lower Swainswick to the University of Bath</a></li><li><a href = "#how_close_is_lower_swainswick_to_the_bath_spa_university">How close is Lower Swainswick to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_lower_swainswick,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Lower Swainswick, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1157 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Lower Swainswick, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71105")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_lower_swainswick,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Lower Swainswick, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom flat in Lower Swainswick, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b> could be the perfect solution for you. With <b>all bills inclusive</b>, you can enjoy the convenience of having your rent, utilities, and other expenses all rolled into one easy payment. This means you can <b>concentrate on your studies</b> without the stress of managing multiple bills. <b>UniBills.com</b> offers a hassle-free all-inclusive option, giving you peace of mind and allowing you to budget effectively each month. Say goodbye to the headache of tracking individual bills and hello to the simplicity of one all-inclusive payment. Get a quote from <b>UniBills.com</b> or any accommodation on this website and streamline your student living experience today.</p><a id = "cheap_2_bedroom_student_flats_in_lower_swainswick,_bath"> <h2>Cheap 2 Bedroom Student Flats in Lower Swainswick, Bath</h2></a><p><Portlet location="REGION^71105" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_lower_swainswick,_bath__recently_added"> <h2>2 Bedroom Student Flats in Lower Swainswick, Bath - Recently Added</h2></a><p><Portlet location="REGION^71105" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_lower_swainswick,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Lower Swainswick, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71105" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_lower_swainswick,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Lower Swainswick, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>2 Bedroom Flats</b> in Lower Swainswick, <b>Bath</b>, Somerset? Look no further! Our property portal is here to help you find the ideal <b>student Flats</b> near the University of <b>Bath</b> and <b>Bath</b> Spa University. Lower Swainswick is a charming village located just a short distance from the bustling city of <b>Bath</b>, offering a peaceful retreat for students looking to escape the hustle and bustle of campus life. With a range of <b>2 Bedroom Flats</b> available to rent in this desirable location, you will be sure to find the perfect home away from home. Whether you are studying at the University of <b>Bath</b> or <b>Bath</b> Spa University, our property portal makes it easy to search for student accommodation that meets your needs and budget.</p><a id = "2_bedroom_student_flats_in_lower_swainswick,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Lower Swainswick, Bath - Private Rental Sector</h2></a><p>Are you searching for a new home in the charming village of Lower Swainswick in Bath, Somerset? Look no further than the <b>2 Bedroom Flats in Lower Swainswick, Bath, Somerset, Bath</b>. These cozy and modern flats offer all the comforts of home with the convenience of city living. Each flat comes <b>fully furnished</b>, so you can move in and feel at home right away. Plus, with <b>bills included</b> in the rent, you can enjoy a hassle-free living experience. Whether you're a young professional, a couple, or a small family, these flats are the perfect choice for anyone looking for a convenient and comfortable living space in Lower Swainswick.</p><a id = "2_bedroom_student_flats_in_lower_swainswick,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Lower Swainswick, Bath - Fully Furnished</h2></a><p>Are you looking for a cozy and convenient place to call home in Bath, Somerset? Look no further than the fully furnished 2 Bedroom Flats in Lower Swainswick, Bath. These flats offer the perfect blend of comfort and style, making them ideal for students, young professionals, or small families. Located in a charming neighborhood, these flats come fully furnished with all the essentials, from modern furniture to kitchen appliances. It is normal for student flats to be fully furnished, taking the hassle out of moving and allowing you to settle in quickly and easily. Enjoy the convenience of a ready-to-live-in space, where you can relax and unwind after a busy day exploring all that Bath has to offer. Don't miss out on the opportunity to experience the best of city living in a lovely setting with these 2 Bedroom Flats in Lower Swainswick.</p><a id = "how_close_is_lower_swainswick_to_the_city_center"> <h2>How close is Lower Swainswick to the City Center</h2></a><p><b>Lower Swainswick</b> is a charming village located just a stone's throw away from <b>Bath city center</b>. Situated less than 2 <b>miles</b> to the north of the city, <b>Lower Swainswick</b> offers a peaceful retreat while still being conveniently close to all the amenities and attractions of Bath. It is a perfect destination for those who wish to enjoy the tranquility of a rural setting while having easy access to the vibrant city life. Whether you are looking to explore the historic sites, indulge in the local cuisine, or simply wander through the bustling streets, <b>Lower Swainswick</b>'s proximity to <b>Bath city center</b> makes it an ideal base for your adventures. With just a short drive or a leisurely walk, you can immerse yourself in the rich culture and heritage of Bath, making <b>Lower Swainswick</b> a perfect blend of rural serenity and urban excitement.</p><a id = "how_close_is_lower_swainswick_to_the_university_of_bath"> <h2>How close is Lower Swainswick to the University of Bath</h2></a><p>Lower Swainswick is conveniently located just 2 <b>miles</b> away from the <b>University of Bath</b>, making it a prime residential area for students, faculty, and staff. For those who prefer walking, the university is easily accessible <b>by foot</b>, with a pleasant stroll taking around 45 minutes. Alternatively, the university is well-served by a direct <b>bus route</b> from Lower Swainswick, with a journey time of approximately 15-20 minutes. Residents who opt to drive can reach the <b>University of Bath</b> in under 10 minutes, making commuting a breeze. The close proximity of Lower Swainswick to the <b>University of Bath</b> provides a perfect blend of peaceful suburban living with easy access to academic and social activities on campus.</p><a id = "how_close_is_lower_swainswick_to_the_bath_spa_university"> <h2>How close is Lower Swainswick to the Bath Spa University</h2></a><p>Lower Swainswick is conveniently located just a stone's throw away from the renowned <b>Bath Spa University</b>. Situated just 2.5 <b>miles</b> away, the university can easily be reached <b>by foot</b>, offering students a pleasant and scenic walk through the charming surroundings. Alternatively, for those looking for a quicker mode of transport, Lower Swainswick is also well-serviced by a <b>bus route</b> that directly connects to the university campus. <b>by bus</b>, the journey typically takes around 15-20 minutes, providing students with a hassle-free and cost-effective way to commute. For those who prefer to drive, the university is just a short 10-minute car ride away, making it easily accessible for students who wish to travel <b>by car</b>. Overall, whether <b>by foot</b>, bus, or car, Lower Swainswick provides students with convenient and efficient access to the beautiful campus of <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for 2 bedroom student flats in Lower Swainswick, Bath can be both exciting and overwhelming. With its picturesque surroundings and proximity to the university, it's no wonder this area is a popular choice among students. When searching for the perfect flat, consider factors like location, price, and amenities. Lower Swainswick offers a peaceful environment ideal for studying, while still being close enough to the vibrant city center. Whether you prefer a modern apartment or a cozy cottage, there are plenty of options available to suit your needs. Remember to visit multiple properties, ask questions, and carefully review the terms of the lease before making a decision. Overall, finding your dream student flat in Lower Swainswick is possible with thorough research and patience.</p></>)
};

export default BathLowerSwainswickFlat2;