
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


const  BathRudmoreParkHouse4 = () => 
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

    return (<><h1>4 Bedroom Student Houses in Rudmore Park, Bath</h1><p>We have listings for <b>4 Bedroom Student Houses in Rudmore Park, Bath</b> for the academic year 2024. 
<b>4 Bedroom Student Houses in Rudmore Park, Bath</b> offer spacious and comfortable living arrangements for students attending nearby universities in Bath. These properties are located in a peaceful neighborhood, perfect for studying and relaxing after classes.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-houses-in-rudmore-park-bath.png')} alt='4 Bedroom Student Houses in Rudmore Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Houses in Rudmore Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71113&type=House&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Houses in Rudmore Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_houses_in_rudmore_park,_bath_pp/pm">Prices for 4 Bedroom Student Houses in Rudmore Park, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_houses_in_rudmore_park,_bath__all_bills_inclusive">4 Bedroom Student Houses in Rudmore Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_houses_in_rudmore_park,_bath">Cheap 4 Bedroom Student Houses in Rudmore Park, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_rudmore_park,_bath__recently_added">4 Bedroom Student Houses in Rudmore Park, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_houses_in_rudmore_park,_bath__recently_reduced">4 Bedroom Student Houses in Rudmore Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_houses_in_rudmore_park,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Houses in Rudmore Park, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_houses_in_rudmore_park,_bath__private_rental_sector">4 Bedroom Student Houses in Rudmore Park, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_houses_in_rudmore_park,_bath__fully_furnished">4 Bedroom Student Houses in Rudmore Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rudmore_park_to_the_city_center">How close is Rudmore Park to the City Center</a></li><li><a href = "#how_close_is_rudmore_park_to_the_university_of_bath">How close is Rudmore Park to the University of Bath</a></li><li><a href = "#how_close_is_rudmore_park_to_the_bath_spa_university">How close is Rudmore Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_houses_in_rudmore_park,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Houses in Rudmore Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£658 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Houses in Rudmore Park, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71113")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_houses_in_rudmore_park,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Houses in Rudmore Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a busy 4 bedroom house in the vibrant Rudmore Park area of Bath, Somerset? If so, it's time to consider the convenience of subscribing to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a fantastic solution that allows you to <b>concentrate on your studies</b> without the stress of managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers your electricity, water, internet, and other essential bills in one simple payment each month. Say goodbye to the headache of splitting costs with your housemates and worrying about unexpected bills popping up. Instead, focus on what really matters - your education. Get a quote from <b>UniBills.com</b> or any accommodation on this website and discover the benefits of an <b>all bills inclusive</b> service today.</p><a id = "cheap_4_bedroom_student_houses_in_rudmore_park,_bath"> <h2>Cheap 4 Bedroom Student Houses in Rudmore Park, Bath</h2></a><p><Portlet location="REGION^71113" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_rudmore_park,_bath__recently_added"> <h2>4 Bedroom Student Houses in Rudmore Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71113" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_houses_in_rudmore_park,_bath__recently_reduced"> <h2>4 Bedroom Student Houses in Rudmore Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71113" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_houses_in_rudmore_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Houses in Rudmore Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 4 bedroom student house in Rudmore Park, <b>Bath</b>, Somerset? Look no further than our property portal! We specialize in connecting students with top-quality accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our comprehensive listings make it easy to find the ideal student house that meets all your needs. With a range of options available, including spacious bedrooms, communal areas, and convenient amenities, you'll be sure to find the perfect home away from home.</p><a id = "4_bedroom_student_houses_in_rudmore_park,_bath__private_rental_sector"> <h2>4 Bedroom Student Houses in Rudmore Park, Bath - Private Rental Sector</h2></a><p>Looking for <b>4 Bedroom Houses in Rudmore Park, Bath, Somerset, Bath</b>? The private rental sector in this area offers a variety of options to suit your needs. Many properties in Rudmore Park come <b>fully furnished</b>, making the moving process hassle-free and convenient. In addition, some landlords include bills in the rental price, providing tenants with peace of mind and simplified monthly expenses. Whether you are a family looking for a spacious home or a group of friends sharing accommodation, the private rental sector in Rudmore Park has something for everyone. With easy access to local amenities and transportation links, renting a 4-bedroom house in this area offers both comfort and convenience.</p><a id = "4_bedroom_student_houses_in_rudmore_park,_bath__fully_furnished"> <h2>4 Bedroom Student Houses in Rudmore Park, Bath - Fully Furnished</h2></a><p>Looking for a comfortable and convenient living arrangement in Bath, Somerset? Look no further than the fully furnished 4 Bedroom Houses in Rudmore Park. These houses are ideal for students and professionals alike, offering a cozy and ready-to-move-in environment. In Rudmore Park, it is normal for student Houses to be fully furnished, alleviating the hassle of having to purchase and transport furniture. Each bedroom is thoughtfully equipped with all the essentials, ensuring a peaceful and productive atmosphere. The communal areas are stylishly furnished, promoting a sense of community and relaxation. With easy access to local amenities and public transportation, living in Rudmore Park offers both comfort and convenience. Don't miss out on the opportunity to experience the best of Bath living in these fully furnished 4 Bedroom Houses.</p><a id = "how_close_is_rudmore_park_to_the_city_center"> <h2>How close is Rudmore Park to the City Center</h2></a><p><b>Rudmore Park</b> is conveniently located just 2.5 <b>miles</b> away from <b>Bath city center</b>, making it a perfect destination for those looking to explore the historic beauty and charm of Bath. Situated within close proximity to the bustling city center, <b>Rudmore Park</b> offers visitors the opportunity to enjoy the tranquility of a rural setting while still being within easy reach of all the attractions and amenities that Bath has to offer. Whether you are interested in exploring the Roman baths, taking a leisurely stroll along the picturesque streets, or enjoying a spot of shopping in the vibrant city center, <b>Rudmore Park</b> provides the ideal base for your adventures. With its peaceful surroundings and convenient location, <b>Rudmore Park</b> offers the perfect blend of relaxation and excitement for visitors looking to experience the best of both worlds during their stay in Bath.</p><a id = "how_close_is_rudmore_park_to_the_university_of_bath"> <h2>How close is Rudmore Park to the University of Bath</h2></a><p>Rudmore Park is conveniently located just 1.5 <b>miles</b> away from the <b>University of Bath</b> campus. This means that students and staff can easily reach the university <b>by foot</b> in around 30 minutes. However, for those who prefer to take public transportation, there is a direct <b>bus route</b> that can take you from Rudmore Park to the university in less than 10 minutes. If driving is more your style, the university is also accessible <b>by car</b>, with a quick 5-minute drive from Rudmore Park. This proximity allows residents of Rudmore Park to enjoy the amenities and events at the <b>University of Bath</b> without the hassle of a long commute.</p><a id = "how_close_is_rudmore_park_to_the_bath_spa_university"> <h2>How close is Rudmore Park to the Bath Spa University</h2></a><p>Rudmore Park is located just 2.5 <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal housing option for students. The park is conveniently situated along a <b>bus route</b> that directly connects it to the university campus, allowing for easy and affordable transportation for those without a car. Alternatively, students can choose to walk to campus, as it is a manageable distance of approximately 50 minutes <b>by foot</b>. For those with a vehicle, the drive from Rudmore Park to <b>Bath Spa University</b> takes around 10-15 minutes, providing a quick and convenient commute option. This close proximity makes Rudmore Park a convenient and accessible choice for students looking for off-campus housing near <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 4-bedroom student houses in Rudmore Park, Bath, students can expect a variety of beautiful and comfortable options that cater to their needs. The diverse selection of properties in the area ensures that students can find a home that suits their preferences and budget. With many of these student houses being located conveniently close to the University of Bath, transportation and access to amenities are made easy. Additionally, the peaceful and picturesque surroundings of Rudmore Park provide a serene atmosphere for studying and unwinding. Overall, students looking for 4-bedroom houses in Rudmore Park can anticipate a harmonious blend of convenience, comfort, and tranquility, making it an ideal location for their student living experience.</p></>)
};

export default BathRudmoreParkHouse4;