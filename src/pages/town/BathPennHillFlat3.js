
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


const  BathPennHillFlat3 = () => 
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

    return (<><h1>3 Bedroom Student Flats in Penn Hill, Bath</h1><p>We have listings for <b>3 Bedroom Student Flats in Penn Hill, Bath</b> for the academic year 2024.

Located in the beautiful city of Bath, 3 Bedroom Student Flats in Penn Hill offer spacious and comfortable living spaces for students. These flats are conveniently situated close to local amenities, public transportation, and educational institutions, making it a perfect choice for students looking for a convenient and vibrant living experience in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-flats-in-penn-hill-bath.png')} alt='3 Bedroom Student Flats in Penn Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Flats in Penn Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71109&type=Flat&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Flats in Penn Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_flats_in_penn_hill,_bath_pp/pm">Prices for 3 Bedroom Student Flats in Penn Hill, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_flats_in_penn_hill,_bath__all_bills_inclusive">3 Bedroom Student Flats in Penn Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_flats_in_penn_hill,_bath">Cheap 3 Bedroom Student Flats in Penn Hill, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_penn_hill,_bath__recently_added">3 Bedroom Student Flats in Penn Hill, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_flats_in_penn_hill,_bath__recently_reduced">3 Bedroom Student Flats in Penn Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_flats_in_penn_hill,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Flats in Penn Hill, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_penn_hill,_bath__private_rental_sector">3 Bedroom Student Flats in Penn Hill, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_flats_in_penn_hill,_bath__fully_furnished">3 Bedroom Student Flats in Penn Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_penn_hill_to_the_city_center">How close is Penn Hill to the City Center</a></li><li><a href = "#how_close_is_penn_hill_to_the_university_of_bath">How close is Penn Hill to the University of Bath</a></li><li><a href = "#how_close_is_penn_hill_to_the_bath_spa_university">How close is Penn Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_flats_in_penn_hill,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Flats in Penn Hill, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£677 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Flats in Penn Hill, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71109")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_flats_in_penn_hill,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Flats in Penn Hill, Bath - All Bills Inclusive</h2></a><p>Are you tired of keeping track of multiple bills for your student flat in Penn Hill, Bath, Somerset? Say goodbye to the stress of managing utility payments and embrace the convenience of an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers the perfect solution for students looking to simplify their living expenses. By opting for an <b>all bills inclusive</b> package, you can <b>concentrate on your studies</b> without the added burden of sorting through various bills each month. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and make your student life easier. Get a quote from <b>UniBills.com</b> or any accommodation on this website and discover the benefits of a streamlined payment system for your 3-bedroom flat. Simplify your student living experience today with an <b>all bills inclusive</b> service.</p><a id = "cheap_3_bedroom_student_flats_in_penn_hill,_bath"> <h2>Cheap 3 Bedroom Student Flats in Penn Hill, Bath</h2></a><p><Portlet location="REGION^71109" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_penn_hill,_bath__recently_added"> <h2>3 Bedroom Student Flats in Penn Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71109" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_penn_hill,_bath__recently_reduced"> <h2>3 Bedroom Student Flats in Penn Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71109" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_flats_in_penn_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Flats in Penn Hill, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>3 Bedroom Flats</b> in the vibrant city of <b>Bath</b>? Our property portal is here to help you find your ideal <b>student Flats</b> in the sought-after area of Penn Hill in <b>Bath</b>, Somerset. With close proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University, living in this neighborhood offers convenience and a fantastic student experience. Whether you're looking for a modern apartment or a cozy flat, our portal provides a wide range of options to suit your needs. Take advantage of our easy-to-use search filters to narrow down your choices and find the perfect 3 Bedroom Flat for your stay in <b>Bath</b>.</p><a id = "3_bedroom_student_flats_in_penn_hill,_bath__private_rental_sector"> <h2>3 Bedroom Student Flats in Penn Hill, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living arrangement in Penn Hill, Bath, Somerset, Bath? Look no further than the private rental sector offering 3 bedroom flats in this sought-after area. With <b>bills included</b> in the rent, you can enjoy hassle-free living without the added worry of utility payments. These flats are <b>fully furnished</b>, saving you time and money on furnishing your new home. Whether you're a family looking for a cozy space or a group of friends looking to share a stylish apartment, these 3 bedroom flats in Penn Hill provide the perfect solution. Enjoy the convenience and comfort of a ready-to-move-in property that meets all your needs.</p><a id = "3_bedroom_student_flats_in_penn_hill,_bath__fully_furnished"> <h2>3 Bedroom Student Flats in Penn Hill, Bath - Fully Furnished</h2></a><p>Are you a student looking for the perfect space in Penn Hill, Bath, Somerset, Bath? Look no further than the fully furnished 3 Bedroom Flats in this charming neighborhood. These modern and stylish apartments are equipped with everything you need for a comfortable and convenient living experience. From cozy bedrooms to spacious living areas, these flats are ideal for students looking for a hassle-free move-in. It is normal for student Flats to be fully furnished, saving you time and money on buying furniture. The flats in Penn Hill are in a prime location, close to local amenities, public transportation, and university campuses. Don't miss out on the opportunity to call one of these fully furnished flats your new home sweet home.</p><a id = "how_close_is_penn_hill_to_the_city_center"> <h2>How close is Penn Hill to the City Center</h2></a><p><b>Penn Hill</b> is located just a few short <b>miles</b> away from the bustling city center of Bath. This charming neighborhood offers a peaceful retreat from the hustle and bustle of the city while still being conveniently close to all the amenities and attractions that Bath has to offer. Whether you're looking to explore the historic Roman baths, indulge in some retail therapy at the designer boutiques, or simply relax in one of the many picturesque parks, you'll find that <b>Penn Hill</b>'s proximity to <b>Bath city center</b> makes it the perfect base for your stay. Enjoy the best of both worlds by staying in this tranquil residential area while being just a short drive or bus ride away from all the excitement and culture of <b>Bath city center</b>. With its ideal location, <b>Penn Hill</b> truly offers the best of both worlds for visitors looking to immerse themselves in the charm and history of Bath.</p><a id = "how_close_is_penn_hill_to_the_university_of_bath"> <h2>How close is Penn Hill to the University of Bath</h2></a><p>Penn Hill is conveniently located close to the prestigious <b>University of Bath</b>, being only a few <b>miles</b> away from the campus. For those looking to commute to the university, there are various transportation options available. <b>by foot</b>, the distance between Penn Hill and the <b>University of Bath</b> may take around 40-50 minutes depending on your walking speed. Alternatively, taking the <b>bus route</b> is another option, with regular services available that can get you to the university in approximately 15-20 minutes. For those who prefer to drive, the journey <b>by car</b> can take around 10-15 minutes, making it a quick and easy commute. With its close proximity to the <b>University of Bath</b> and easy access <b>by foot</b>, bus, or car, Penn Hill is a great location for students and faculty looking for a convenient place to live near the campus.</p><a id = "how_close_is_penn_hill_to_the_bath_spa_university"> <h2>How close is Penn Hill to the Bath Spa University</h2></a><p>Penn Hill is conveniently located just a few <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal option for students looking for accommodation close to campus. <b>by foot</b>, the distance between Penn Hill and the university is about 2 <b>miles</b>, which can be a pleasant walk through the beautiful surroundings of Bath. For those who prefer to take public transportation, there is a <b>bus route</b> that runs directly from Penn Hill to <b>Bath Spa University</b>, making the commute quick and hassle-free. <b>by bus</b>, the journey takes around 15 minutes, providing students with a convenient option for getting to and from classes. Additionally, for those who prefer to drive, the university is just a short 10-minute car ride away from Penn Hill, making it easily accessible for those with their own vehicles. With its close proximity to <b>Bath Spa University</b> and the multiple transportation options available, Penn Hill is a fantastic choice for students looking for a convenient and comfortable place to live during their time at university.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>If you are a student searching for a 3-bedroom flat in Penn Hill, Bath, look no further. With a variety of options available, finding a spacious and comfortable living space suitable for you and your roommates is made easy. From modern amenities to convenient locations near campus and local shops, these flats offer a perfect balance of comfort and accessibility. When it comes to budget, rest assured that there are options to suit every student's financial needs. Whether you are looking for a place to study, relax, or socialize with friends, a 3-bedroom flat in Penn Hill has everything you need. In conclusion, finding a suitable student flat in this area is convenient, affordable, and offers a great opportunity to enjoy student life in Bath to the fullest.</p></>)
};

export default BathPennHillFlat3;