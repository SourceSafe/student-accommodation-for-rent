
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


const  BathKingsmeadStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Kingsmead, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Kingsmead, Bath</b> for the academic year 2024. 
<b>Studio Apartments for Students in Kingsmead, Bath</b> are perfect for students looking for a comfortable and convenient living space in the bustling city of Bath. These apartments offer modern amenities and proximity to universities, making them an ideal choice for student living.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-kingsmead-bath.png')} alt='Studio Apartments for Students in Kingsmead, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Kingsmead, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71101&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Kingsmead, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_kingsmead,_bath_pp/pm">Prices for Studio Apartments for Students in Kingsmead, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_kingsmead,_bath__all_bills_inclusive">Studio Apartments for Students in Kingsmead, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_kingsmead,_bath">Cheap Studio Apartments for Students in Kingsmead, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kingsmead,_bath__recently_added">Studio Apartments for Students in Kingsmead, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_kingsmead,_bath__recently_reduced">Studio Apartments for Students in Kingsmead, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_kingsmead,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Kingsmead, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kingsmead,_bath__private_rental_sector">Studio Apartments for Students in Kingsmead, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_kingsmead,_bath__fully_furnished">Studio Apartments for Students in Kingsmead, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_kingsmead_to_the_city_center">How close is Kingsmead to the City Center</a></li><li><a href = "#how_close_is_kingsmead_to_the_university_of_bath">How close is Kingsmead to the University of Bath</a></li><li><a href = "#how_close_is_kingsmead_to_the_bath_spa_university">How close is Kingsmead to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_kingsmead,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Kingsmead, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Kingsmead, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71101")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_kingsmead,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Kingsmead, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 1 bedroom studio in Kingsmead, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> could be the ideal solution for you. With <b>all bills inclusive</b>, you won't have to worry about multiple utility bills coming in each month. Instead, you can <b>concentrate on your studies</b> and not stress about managing your finances. <b>UniBills.com</b> offers a hassle-free all inclusive option, covering everything from electricity and water to internet and TV licenses. This means you can enjoy peace of mind knowing that all your bills are taken care of in one convenient package. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student living experience more seamless and stress-free.</p><a id = "cheap_studio_apartments_for_students_in_kingsmead,_bath"> <h2>Cheap Studio Apartments for Students in Kingsmead, Bath</h2></a><p><Portlet location="REGION^71101" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kingsmead,_bath__recently_added"> <h2>Studio Apartments for Students in Kingsmead, Bath - Recently Added</h2></a><p><Portlet location="REGION^71101" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kingsmead,_bath__recently_reduced"> <h2>Studio Apartments for Students in Kingsmead, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71101" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_kingsmead,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Kingsmead, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>1 Bedroom Studios</b> in Kingsmead, <b>Bath</b>, Somerset? Look no further than our property portal, where we specialize in helping students find ideal accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our extensive listings include a variety of <b>student Studios</b> in the desirable Kingsmead area, offering comfortable living spaces that cater to your academic needs. Whether you prefer a cozy studio for focused study sessions or a modern apartment for social gatherings, we have the perfect options for you. With our user-friendly interface and detailed property descriptions, finding your dream 1 Bedroom studio in <b>Bath</b> has never been easier. Trust us to help you discover the ideal student accommodation in Kingsmead, <b>Bath</b>, Somerset, and start your academic journey in style.</p><a id = "studio_apartments_for_students_in_kingsmead,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Kingsmead, Bath - Private Rental Sector</h2></a><p>Are you looking for a cozy and convenient living space in the heart of Bath, Somerset? Look no further than the 1 Bedroom Studios in Kingsmead, Bath. These modern and stylish studios offer a comfortable home for those seeking a private rental option in a sought-after location. With <b>bills included</b> in the rent, you can enjoy peace of mind knowing that your utilities are taken care of. Each studio is <b>fully furnished</b>, making it easy for you to move in and settle down without the hassle of furnishing the space yourself. Whether you're a student, young professional, or someone looking for a quiet retreat, these studios provide the perfect blend of comfort and convenience. Don't miss out on the opportunity to live in one of Bath's most desirable neighborhoods and experience all that this vibrant city has to offer.</p><a id = "studio_apartments_for_students_in_kingsmead,_bath__fully_furnished"> <h2>Studio Apartments for Students in Kingsmead, Bath - Fully Furnished</h2></a><p>Looking for fully furnished 1 Bedroom Studios in Kingsmead, Bath, Somerset? Look no further! These stylish and modern Studios offer all the comforts of home in the heart of Bath. Nestled in a bustling student-friendly area, it is normal for student Studios to be fully furnished, allowing for an effortless move-in experience. With a cozy bedroom, a sleek kitchenette, and a spacious living area, these Studios provide the perfect space for studying and relaxing. Enjoy the convenience of nearby amenities, such as shops, restaurants, and parks, all within walking distance. Whether you're a student looking for a comfortable place to call home or a professional seeking a convenient and stylish living space, these fully furnished 1 Bedroom Studios in Kingsmead, Bath, Somerset are sure to impress.</p><a id = "how_close_is_kingsmead_to_the_city_center"> <h2>How close is Kingsmead to the City Center</h2></a><p><b>Kingsmead</b> is a bustling neighborhood located just a stone's throw away from the historic <b>Bath city center</b>. Situated merely a few <b>miles</b> away, residents and visitors alike can easily access all that this charming city has to offer. Whether you are looking to explore the iconic Roman Baths, immerse yourself in the vibrant culture at the Theatre Royal, or simply meander through the picturesque streets lined with independent shops and cafes, <b>Bath city center</b> is within easy reach from <b>Kingsmead</b>. Its close proximity allows for a convenient and seamless transition between the tranquility of <b>Kingsmead</b> and the lively atmosphere of the city center. Enjoy the best of both worlds as you experience the beauty and charm of Bath, with <b>Kingsmead</b> as your ideal starting point.</p><a id = "how_close_is_kingsmead_to_the_university_of_bath"> <h2>How close is Kingsmead to the University of Bath</h2></a><p>Kingsmead is a popular residential area located close to the <b>University of Bath</b>, making it an ideal living option for students and staff. The university is only a few <b>miles</b> away from Kingsmead, easily accessible <b>by foot</b>, bus, or car. The most convenient way to reach the university is by hopping onto the regular <b>bus route</b> that connects Kingsmead directly to the campus. It takes just a short bus ride to arrive at the university, making commuting effortless for residents of Kingsmead. For those who prefer to drive, the campus is easily reachable <b>by car</b>, with convenient parking available on-site. This close proximity to the <b>University of Bath</b> makes Kingsmead a desirable location for anyone looking to be near the campus while still enjoying the peaceful surroundings of this charming neighborhood.</p><a id = "how_close_is_kingsmead_to_the_bath_spa_university"> <h2>How close is Kingsmead to the Bath Spa University</h2></a><p>Kingsmead is conveniently located close to <b>Bath Spa University</b>, only a few <b>miles</b> away. For students looking for accommodation near the university, Kingsmead is a perfect option. The quickest way to reach <b>Bath Spa University</b> from Kingsmead is by taking the <b>bus route</b>, providing an easy and affordable mode of transportation. Alternatively, students can choose to walk to the university, enjoying a leisurely stroll while taking in the beauty of the surrounding area. For those preferring a quicker mode of transportation, driving to <b>Bath Spa University</b> from Kingsmead is an option as well. No matter how students choose to travel, the proximity of Kingsmead to <b>Bath Spa University</b> makes it a convenient and desirable location for student living.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, searching for studio apartments in Kingsmead, Bath, can be a rewarding experience for students looking for a convenient and comfortable living space. With many options available that are well-equipped and located near key amenities such as universities and public transportation, students can enjoy a convenient lifestyle that enhances their academic experience. In conclusion, by carefully considering factors such as location, price, and amenities, students can find the perfect studio apartment in Kingsmead, Bath that suits their needs and preferences. Whether it's a cozy space for studying or a peaceful retreat after a long day of classes, the right studio apartment can truly make a student's living experience in Bath a memorable one.</p></>)
};

export default BathKingsmeadStudio1;