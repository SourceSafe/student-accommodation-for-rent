
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


const  BathRushHillFlat10 = () => 
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

    return (<><h1>10 Bedroom Student Flats in Rush Hill, Bath</h1><p>We have listings for <b>10 Bedroom Student Flats in Rush Hill, Bath</b> for the academic year 2024.

<b>10 Bedroom Student Flats in Rush Hill, Bath</b> are perfect for large groups of students looking to live together during their academic year. These spacious flats offer ample room for each student to have their own space while still enjoying communal living areas. Located in the vibrant city of Bath, students can easily access local amenities, universities, and transportation options from their convenient Rush Hill location.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/10-bedroom-student-flats-in-rush-hill-bath.png')} alt='10 Bedroom Student Flats in Rush Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='10 Bedroom Student Flats in Rush Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71114&type=Flat&beds=10")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>10 Bedroom Student Flats in Rush Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_10_bedroom_student_flats_in_rush_hill,_bath_pp/pm">Prices for 10 Bedroom Student Flats in Rush Hill, Bath pp/pm</a></li><li><a href = "#10_bedroom_student_flats_in_rush_hill,_bath__all_bills_inclusive">10 Bedroom Student Flats in Rush Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_10_bedroom_student_flats_in_rush_hill,_bath">Cheap 10 Bedroom Student Flats in Rush Hill, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_rush_hill,_bath__recently_added">10 Bedroom Student Flats in Rush Hill, Bath - Recently Added</a></li><li><a href = "#10_bedroom_student_flats_in_rush_hill,_bath__recently_reduced">10 Bedroom Student Flats in Rush Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__10_bedroom_flats_in_rush_hill,_bath,_somerset,_bath">Student Accommodation Portal - 10 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</a></li><li><a href = "#10_bedroom_student_flats_in_rush_hill,_bath__private_rental_sector">10 Bedroom Student Flats in Rush Hill, Bath - Private Rental Sector</a></li><li><a href = "#10_bedroom_student_flats_in_rush_hill,_bath__fully_furnished">10 Bedroom Student Flats in Rush Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rush_hill_to_the_city_center">How close is Rush Hill to the City Center</a></li><li><a href = "#how_close_is_rush_hill_to_the_university_of_bath">How close is Rush Hill to the University of Bath</a></li><li><a href = "#how_close_is_rush_hill_to_the_bath_spa_university">How close is Rush Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_10_bedroom_student_flats_in_rush_hill,_bath_pp/pm"> <h2>Prices for 10 Bedroom Student Flats in Rush Hill, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton tableButton' title='10 Bedroom Student Flats in Rush Hill, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71114")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "10_bedroom_student_flats_in_rush_hill,_bath__all_bills_inclusive"> <h2>10 Bedroom Student Flats in Rush Hill, Bath - All Bills Inclusive</h2></a><p>Living in a 10 bedroom student flat in Rush Hill, Bath, Somerset can be an exciting experience, but managing bills for such a large property can be a headache. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all your utility bills, including electricity, water, gas, and internet, bundled together in one convenient package, you can <b>concentrate on your studies</b> and social life without worrying about splitting bills or unexpected expenses. <b>UniBills.com</b> ensures that everything is taken care of, allowing you to focus on what really matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in Rush Hill stress-free and enjoyable.</p><a id = "cheap_10_bedroom_student_flats_in_rush_hill,_bath"> <h2>Cheap 10 Bedroom Student Flats in Rush Hill, Bath</h2></a><p><Portlet location="REGION^71114" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_rush_hill,_bath__recently_added"> <h2>10 Bedroom Student Flats in Rush Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71114" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "10_bedroom_student_flats_in_rush_hill,_bath__recently_reduced"> <h2>10 Bedroom Student Flats in Rush Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71114" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__10_bedroom_flats_in_rush_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 10 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</h2></a><p>Our property portal makes it easy for students looking for <b>10 Bedroom Flats</b> in Rush Hill, <b>Bath</b>, Somerset, to find the perfect accommodation. Situated in close proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University, our listings offer spacious living arrangements that are ideal for groups of students. With modern amenities and convenient access to local shops and transport links, these <b>student Flats</b> in the sought-after area of Rush Hill are perfect for those studying in <b>Bath</b>. Whether you're looking for a term-time rental or a long-term lease, our platform provides a wide range of options to suit your needs. Start your search today and find the ideal 10 bedroom flat for you and your housemates in the vibrant city of <b>Bath</b>.</p><a id = "10_bedroom_student_flats_in_rush_hill,_bath__private_rental_sector"> <h2>10 Bedroom Student Flats in Rush Hill, Bath - Private Rental Sector</h2></a><p>Are you looking for a spacious and luxurious living arrangement in the heart of Rush Hill, Bath, Somerset? Look no further than our stunning <b>10 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</b>. These flats are the epitome of comfort and convenience, with all <b>bills included</b> in the rent to make your life stress-free. Each flat is <b>fully furnished</b> with modern and stylish decor, making it easy for you to settle in and feel at home right away. Whether you're a student or a professional looking for a shared living space, these 10 Bedroom Flats are the perfect choice.</p><a id = "10_bedroom_student_flats_in_rush_hill,_bath__fully_furnished"> <h2>10 Bedroom Student Flats in Rush Hill, Bath - Fully Furnished</h2></a><p>Welcome to the luxurious <b>fully furnished 10 Bedroom Flats in Rush Hill, Bath, Somerset, Bath</b>. These spacious flats are perfect for large groups looking for a comfortable and convenient living space. Each bedroom is tastefully furnished with all the essentials to make you feel right at home. From cozy beds and ample storage space to study desks and chairs, these flats have everything you need for a hassle-free living experience. Located in the vibrant area of Rush Hill, you'll have easy access to local amenities, restaurants, and public transportation. In Bath, it is normal for student flats to be fully furnished, so you can expect nothing less than top-quality furnishings and decor. Don't miss out on the opportunity to live in style and comfort in one of these stunning 10 Bedroom Flats in Rush Hill.</p><a id = "how_close_is_rush_hill_to_the_city_center"> <h2>How close is Rush Hill to the City Center</h2></a><p><b>Rush Hill</b>, a charming residential area, is conveniently located a short distance away from the heart of <b>Bath city center</b>. Nestled just a few <b>miles</b> away, <b>Rush Hill</b> offers a tranquil retreat from the bustling city while remaining easily accessible to all the vibrant amenities that Bath has to offer. Whether you're looking to explore the historic Roman Baths, stroll along the picturesque Pulteney Bridge, or indulge in a shopping spree at SouthGate Bath, <b>Rush Hill</b>'s proximity to the city center makes it an ideal home base for both locals and tourists alike. With its peaceful surroundings and proximity to the bustling city, <b>Rush Hill</b> strikes the perfect balance for those seeking a serene escape just moments away from the lively energy of <b>Bath city center</b>.</p><a id = "how_close_is_rush_hill_to_the_university_of_bath"> <h2>How close is Rush Hill to the University of Bath</h2></a><p>Rush Hill is conveniently located close to the <b>University of Bath</b>, being just a few <b>miles</b> away. <b>by foot</b>, it would take around 45 minutes to reach the university campus from Rush Hill. However, there is a convenient <b>bus route</b> that connects Rush Hill to the <b>University of Bath</b>, making the journey only a short bus ride away. <b>by bus</b>, the commute takes around 15-20 minutes, depending on traffic. For those who prefer to drive, the university is easily accessible <b>by car</b>, with a journey time of approximately 10-15 minutes. This close proximity makes Rush Hill a popular choice for students or faculty members looking for convenient accommodation near the <b>University of Bath</b>.</p><a id = "how_close_is_rush_hill_to_the_bath_spa_university"> <h2>How close is Rush Hill to the Bath Spa University</h2></a><p>Rush Hill is located just 2.5 <b>miles</b> away from <b>Bath Spa University</b>, making it a convenient and ideal location for students attending the university. For those looking to commute to the university, there is a direct <b>bus route</b> that easily connects Rush Hill to <b>Bath Spa University</b>, making the journey quick and hassle-free. If you prefer to travel <b>by foot</b> or car, the distance can also be covered easily in a short amount of time, offering flexibility and convenience. Whether you choose to travel <b>by bus</b>, <b>by foot</b>, or <b>by car</b>, Rush Hill's close proximity to <b>Bath Spa University</b> ensures that you can easily access the campus and all it has to offer without any difficulties.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 10-bedroom student flats in Rush Hill, Bath, it is important to consider several factors. Location plays a key role, with proximity to the university and local amenities being crucial for convenience. Size and layout are also important, ensuring that there is enough space for all tenants to live comfortably. Furthermore, budget considerations are essential, with affordability being a top priority for most students. By carefully considering these factors and thoroughly researching available options, finding the perfect 10-bedroom student flat in Rush Hill is certainly achievable. In conclusion, with diligence and attention to detail, students can secure a spacious, well-located, and affordable accommodation that meets their needs and enhances their overall college experience.</p></>)
};

export default BathRushHillFlat10;