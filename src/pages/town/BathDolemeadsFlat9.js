
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


const  BathDolemeadsFlat9 = () => 
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

    return (<><h1>9 Bedroom Student Flats in Dolemeads, Bath</h1><p>We have listings for <b>9 Bedroom Student Flats in Dolemeads, Bath</b> for the academic year 2024. 

<b>9 Bedroom Student Flats in Dolemeads, Bath</b> provide spacious and comfortable accommodations for students in the vibrant city of Bath. These flats are ideal for large groups of students looking to live together while studying in Bath for the academic year. With modern amenities and a convenient location, these flats offer a great living arrangement for students in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/9-bedroom-student-flats-in-dolemeads-bath.png')} alt='9 Bedroom Student Flats in Dolemeads, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='9 Bedroom Student Flats in Dolemeads, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71097&type=Flat&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>9 Bedroom Student Flats in Dolemeads, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_flats_in_dolemeads,_bath_pp/pm">Prices for 9 Bedroom Student Flats in Dolemeads, Bath pp/pm</a></li><li><a href = "#9_bedroom_student_flats_in_dolemeads,_bath__all_bills_inclusive">9 Bedroom Student Flats in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_flats_in_dolemeads,_bath">Cheap 9 Bedroom Student Flats in Dolemeads, Bath</a></li><li><a href = "#9_bedroom_student_flats_in_dolemeads,_bath__recently_added">9 Bedroom Student Flats in Dolemeads, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_flats_in_dolemeads,_bath__recently_reduced">9 Bedroom Student Flats in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_flats_in_dolemeads,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_flats_in_dolemeads,_bath__private_rental_sector">9 Bedroom Student Flats in Dolemeads, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_flats_in_dolemeads,_bath__fully_furnished">9 Bedroom Student Flats in Dolemeads, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_dolemeads_to_the_city_center">How close is Dolemeads to the City Center</a></li><li><a href = "#how_close_is_dolemeads_to_the_university_of_bath">How close is Dolemeads to the University of Bath</a></li><li><a href = "#how_close_is_dolemeads_to_the_bath_spa_university">How close is Dolemeads to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_flats_in_dolemeads,_bath_pp/pm"> <h2>Prices for 9 Bedroom Student Flats in Dolemeads, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton tableButton' title='9 Bedroom Student Flats in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "9_bedroom_student_flats_in_dolemeads,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Flats in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your 9-bedroom student flat in Dolemeads, Bath, Somerset? Save time and energy by subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b>. With this convenient option, you can say goodbye to the stress of keeping track of utility payments and <b>concentrate on your studies</b> instead. <b>UniBills.com</b> offers a hassle-free all-inclusive package that covers your water, electricity, gas, internet, and even TV license. Imagine the peace of mind that comes with knowing that all your bills are taken care of with just one simple payment each month. Say goodbye to unexpected charges and enjoy the convenience of having everything sorted for you. Get a quote from UniBills.</p><a id = "cheap_9_bedroom_student_flats_in_dolemeads,_bath"> <h2>Cheap 9 Bedroom Student Flats in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_flats_in_dolemeads,_bath__recently_added"> <h2>9 Bedroom Student Flats in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_flats_in_dolemeads,_bath__recently_reduced"> <h2>9 Bedroom Student Flats in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_flats_in_dolemeads,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</h2></a><p>Are you a student searching for a spacious and convenient 9 bedroom flat in <b>Bath</b>, Somerset? Look no further than our property portal, where you can find the perfect student accommodation in the sought-after area of Dolemeads, <b>Bath</b>. With close proximity to the University of <b>Bath</b> and <b>Bath</b> Spa University, these flats are ideal for those looking to live in a vibrant student community. Whether you prefer a modern or traditional style flat, our portal offers a wide selection of options to suit your preferences. From cozy communal areas to fully-equipped kitchens, these <b>student Flats</b> provide all the amenities you need for a comfortable living experience.</p><a id = "9_bedroom_student_flats_in_dolemeads,_bath__private_rental_sector"> <h2>9 Bedroom Student Flats in Dolemeads, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and convenient living arrangement in Bath, Somerset? Consider the 9 Bedroom Flats in Dolemeads, Bath. These flats offer a great option for those seeking shared accommodation with a group of friends or colleagues. The flats come <b>fully furnished</b>, saving you the hassle of buying furniture and making moving in a breeze. Additionally, with <b>bills included</b> in the rent, you can have peace of mind knowing that there won't be any hidden costs. The location in Dolemeads provides easy access to all the amenities Bath has to offer, including shops, restaurants, and transportation. Don't miss out on the opportunity to live in these comfortable and well-equipped flats in the heart of Bath.</p><a id = "9_bedroom_student_flats_in_dolemeads,_bath__fully_furnished"> <h2>9 Bedroom Student Flats in Dolemeads, Bath - Fully Furnished</h2></a><p>Are you looking for <b>fully furnished 9 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</b>? Look no further! These spacious and modern flats are perfect for students or a large group of friends looking to live together. With all the necessary furniture and appliances already provided, moving in will be a breeze. In Bath, it is normal for student flats to be fully furnished, and these flats in Dolemeads are no exception. Each bedroom is tastefully decorated and equipped with a comfortable bed, study desk, and ample storage space. The common areas are perfect for socializing or studying together, with a spacious living room, fully fitted kitchen, and dining area. Located in a convenient area with easy access to local amenities and public transportation, these flats offer both comfort and convenience.</p><a id = "how_close_is_dolemeads_to_the_city_center"> <h2>How close is Dolemeads to the City Center</h2></a><p><b>Dolemeads</b> is conveniently located just a stone's throw away from <b>Bath city center</b>, making it an ideal accommodation choice for those looking to explore all that this historic city has to offer. Situated only a few <b>miles</b> from the heart of Bath, <b>Dolemeads</b> provides easy access to popular attractions such as the Roman Baths, Bath Abbey, and the Royal Crescent. Whether you want to stroll along the picturesque streets, shop in the bustling markets, or relax in the thermal spas, you'll find that everything is within easy reach from <b>Dolemeads</b>. With its central location, guests can enjoy the convenience of being close to the city center while still having a peaceful retreat to return to at the end of the day.</p><a id = "how_close_is_dolemeads_to_the_university_of_bath"> <h2>How close is Dolemeads to the University of Bath</h2></a><p>Dolemeads is conveniently located near the <b>University of Bath</b>, making it an ideal accommodation choice for students. Situated just a few <b>miles</b> away, students can easily reach the university <b>by foot</b>, making it a great option for those who enjoy a brisk walk to start their day. Additionally, there is a convenient <b>bus route</b> that connects Dolemeads to the <b>University of Bath</b>, providing a quick and stress-free alternative for those who prefer public transportation. For those with a car, the university is also easily accessible <b>by car</b>, with a short drive ensuring a smooth and efficient journey. Whether you prefer walking, taking the bus, or driving, Dolemeads offers a prime location that makes commuting to the <b>University of Bath</b> a breeze.</p><a id = "how_close_is_dolemeads_to_the_bath_spa_university"> <h2>How close is Dolemeads to the Bath Spa University</h2></a><p>Dolemeads is conveniently located close to <b>Bath Spa University</b>, being only a few <b>miles</b> away from the campus. Students can easily access the university <b>by foot</b>, with a pleasant walk of around 20-30 minutes, depending on the route taken. Additionally, there is a direct <b>bus route</b> that connects Dolemeads to <b>Bath Spa University</b>, making it a quick and convenient option for those preferring public transportation. For those with their own vehicle, the university is just a short drive away, usually taking around 10-15 minutes, depending on traffic. This close proximity provides residents of Dolemeads with easy access to the university and all its amenities, making it a sought-after location for students looking for convenient accommodation near <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 9-bedroom student flats in Dolemeads, Bath, it's important to consider location, amenities, and overall comfort. Dolemeads offers a vibrant student community, with easy access to the University of Bath and local amenities. When looking for a 9-bedroom flat, it's crucial to prioritize spacious living areas, ample bathrooms, and a well-equipped kitchen. Additionally, utilities such as high-speed internet and laundry facilities are essential for a convenient student lifestyle. With careful research and consideration, finding the perfect 9-bedroom student flat in Dolemeads can provide a comfortable and enjoyable living experience for you and your flatmates.</p></>)
};

export default BathDolemeadsFlat9;