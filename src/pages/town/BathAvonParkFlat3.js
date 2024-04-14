
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


const  BathAvonParkFlat3 = () => 
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

    return (<><h1>3 Bedroom Student Flats in Avon Park, Bath</h1><p>We have listings for <b>3 Bedroom Student Flats in Avon Park, Bath</b> for the academic year 2024.

<b>3 Bedroom Student Flats in Avon Park, Bath</b> are popular among students in Bath due to their convenient location near the university campus and amenities like shops and restaurants. These flats offer spacious living areas, modern facilities, and a vibrant student community, making them an ideal choice for students looking for a comfortable and enjoyable living experience in Bath. Residents can enjoy a balance of study and social life in these student flats, creating a welcoming and supportive environment for academic success.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-flats-in-avon-park-bath.png')} alt='3 Bedroom Student Flats in Avon Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Flats in Avon Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71091&type=Flat&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Flats in Avon Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_flats_in_avon_park,_bath_pp/pm">Prices for 3 Bedroom Student Flats in Avon Park, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_flats_in_avon_park,_bath__all_bills_inclusive">3 Bedroom Student Flats in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_flats_in_avon_park,_bath">Cheap 3 Bedroom Student Flats in Avon Park, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_avon_park,_bath__recently_added">3 Bedroom Student Flats in Avon Park, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_flats_in_avon_park,_bath__recently_reduced">3 Bedroom Student Flats in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_flats_in_avon_park,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Flats in Avon Park, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_avon_park,_bath__private_rental_sector">3 Bedroom Student Flats in Avon Park, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_flats_in_avon_park,_bath__fully_furnished">3 Bedroom Student Flats in Avon Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_avon_park_to_the_city_center">How close is Avon Park to the City Center</a></li><li><a href = "#how_close_is_avon_park_to_the_university_of_bath">How close is Avon Park to the University of Bath</a></li><li><a href = "#how_close_is_avon_park_to_the_bath_spa_university">How close is Avon Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_flats_in_avon_park,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Flats in Avon Park, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£733 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Flats in Avon Park, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_flats_in_avon_park,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Flats in Avon Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills and utilities for your 3-bedroom student flat in Avon Park, Bath, Somerset? Simplify your life and free up time to <b>concentrate on your studies</b> by opting for an <b>all bills inclusive</b> service from <b>UniBills.com</b>. With all your bills, including electricity, water, internet, and more, rolled into one convenient package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of managing different accounts and payments each month. Focus on what truly matters – your education and personal growth – while <b>UniBills.com</b> takes care of the rest. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier and more manageable.</p><a id = "cheap_3_bedroom_student_flats_in_avon_park,_bath"> <h2>Cheap 3 Bedroom Student Flats in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_avon_park,_bath__recently_added"> <h2>3 Bedroom Student Flats in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_avon_park,_bath__recently_reduced"> <h2>3 Bedroom Student Flats in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_flats_in_avon_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Flats in Avon Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a comfortable and convenient 3-bedroom flat in <b>Bath</b>, Avon Park, Somerset? Look no further than our property portal, where we specialize in connecting students with the perfect accommodation. Avon Park is a popular location for students due to its close proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University. With our user-friendly search filters, you can easily find the ideal student flat that fits your needs and budget. Whether you're studying or relaxing, our 3-bedroom flats offer ample space and privacy for you and your roommates. Don't waste time scrolling through endless listings - let us help you find the perfect student flat in Avon Park, <b>Bath</b>, Somerset.</p><a id = "3_bedroom_student_flats_in_avon_park,_bath__private_rental_sector"> <h2>3 Bedroom Student Flats in Avon Park, Bath - Private Rental Sector</h2></a><p>Looking for a comfortable and convenient place to live? Explore the exquisite <b>3 Bedroom Flats in Avon Park, Bath, Somerset, Bath</b>. These properties offer the perfect blend of space and style, ideal for families or sharers. What's more, these flats come <b>fully furnished</b>, so you can move in hassle-free and start enjoying your new home right away. Additionally, with <b>bills included</b> in the rent, you can budget with ease and avoid any unexpected expenses. Located in the picturesque city of Bath, these flats provide a wonderful opportunity to experience the charm and beauty of the area, with its historic architecture, cultural attractions, and stunning countryside. Don't miss out on the chance to live in luxury and comfort in Avon Park.</p><a id = "3_bedroom_student_flats_in_avon_park,_bath__fully_furnished"> <h2>3 Bedroom Student Flats in Avon Park, Bath - Fully Furnished</h2></a><p>If you're looking for a comfortable and convenient living space in Avon Park, Bath, Somerset, Bath, look no further than the fully furnished 3 Bedroom Flats available in the area. These flats are perfect for students and young professionals who are looking for hassle-free accommodation. In Avon Park, Bath, it is normal for student flats to be fully furnished, which means you can move in with ease and start enjoying your new space right away. With three bedrooms, there is plenty of room for housemates or a growing family, and the fully furnished interiors make it a cozy and inviting place to call home. Located in the beautiful city of Bath, Somerset, these flats offer a peaceful retreat while still being close to all the amenities and attractions that Bath has to offer.</p><a id = "how_close_is_avon_park_to_the_city_center"> <h2>How close is Avon Park to the City Center</h2></a><p><b>Avon Park</b> is conveniently located just a few <b>miles</b> away from the bustling heart of <b>Bath city center</b>. Nestled in a tranquil setting, this residential area offers a peaceful retreat from the city's hustle and bustle while still being close enough to enjoy all that Bath has to offer. Just a short drive or bus ride away, <b>Avon Park</b> provides the perfect balance of tranquility and convenience. Residents can easily access the city center's vibrant shops, restaurants, and cultural attractions, making it the ideal location for those looking to enjoy the best of both worlds. Whether you want to explore Bath's historic sites, take a relaxing stroll along the river, or indulge in a spot of shopping, <b>Avon Park</b>'s proximity to the city center makes it a highly sought-after location for those seeking a blend of urban excitement and suburban peace.</p><a id = "how_close_is_avon_park_to_the_university_of_bath"> <h2>How close is Avon Park to the University of Bath</h2></a><p>Avon Park is located just a few <b>miles</b> away from the <b>University of Bath</b>, making it a convenient housing option for students. The <b>University of Bath</b> is easily accessible from Avon Park by various modes of transportation. <b>by foot</b>, the university is approximately a 25-minute walk from Avon Park, providing students with a scenic and healthy commute to campus. For those looking for a quicker option, the university is just a short bus ride away, with a <b>bus route</b> that connects Avon Park directly to the university campus. By taking the bus, students can reach the <b>University of Bath</b> in just a few minutes, making it a hassle-free commute. Additionally, for those who prefer to drive, the university is only a quick 10-15 minute car journey from Avon Park, providing students with flexibility and convenience in getting to campus. Overall, Avon Park's close proximity to the <b>University of Bath</b> offers students easy access to campus, making it a popular choice for student accommodation.</p><a id = "how_close_is_avon_park_to_the_bath_spa_university"> <h2>How close is Avon Park to the Bath Spa University</h2></a><p>Avon Park is conveniently close to <b>Bath Spa University</b>, just a few <b>miles</b> away. If you prefer walking, it only takes around 30 minutes to reach the university <b>by foot</b>. For those who prefer public transportation, there is a direct <b>bus route</b> that connects Avon Park to <b>Bath Spa University</b>, making the commute quick and easy. <b>by bus</b>, the journey takes approximately 15 minutes, providing a stress-free option for students and staff. Alternatively, if you have a car, the university is just a short drive away, taking less than 10 minutes to reach your destination. This proximity makes Avon Park an ideal accommodation option for those studying or working at <b>Bath Spa University</b>, offering a convenient location with easy access to campus facilities.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, finding a 3 bedroom student flat in Avon Park, Bath can be a rewarding experience for those looking for shared accommodation. Close proximity to university campuses, transportation hubs, and local amenities makes Avon Park an ideal location for students. The range of options available in terms of flat styles and pricing caters to various preferences and budgets. Whether you are studying in Bath as an undergraduate or postgraduate, Avon Park offers a vibrant community atmosphere with numerous opportunities for socializing and engaging in academic pursuits. With its convenient location and comfortable living spaces, Avon Park is a popular choice for students seeking a cozy, supportive environment to enhance their university experience. Consider exploring the options in Avon Park for a fulfilling and hassle-free student living experience.</p></>)
};

export default BathAvonParkFlat3;