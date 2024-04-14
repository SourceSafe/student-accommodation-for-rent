
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


const  BathPerrymeadFlat9 = () => 
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

    return (<><h1>9 Bedroom Student Flats in Perrymead, Bath</h1><p>We have listings for <b>9 Bedroom Student Flats in Perrymead, Bath</b> for the academic year 2024. 

<b>9 Bedroom Student Flats in Perrymead, Bath</b> offer spacious living arrangements perfect for a large group of students looking to live together. Located in the beautiful city of Bath, these flats provide easy access to local amenities, transport links, and universities in the area. The modern amenities and convenient location make these flats an ideal choice for student living in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/9-bedroom-student-flats-in-perrymead-bath.png')} alt='9 Bedroom Student Flats in Perrymead, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='9 Bedroom Student Flats in Perrymead, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^86080&type=Flat&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>9 Bedroom Student Flats in Perrymead, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_flats_in_perrymead,_bath_pp/pm">Prices for 9 Bedroom Student Flats in Perrymead, Bath pp/pm</a></li><li><a href = "#9_bedroom_student_flats_in_perrymead,_bath__all_bills_inclusive">9 Bedroom Student Flats in Perrymead, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_flats_in_perrymead,_bath">Cheap 9 Bedroom Student Flats in Perrymead, Bath</a></li><li><a href = "#9_bedroom_student_flats_in_perrymead,_bath__recently_added">9 Bedroom Student Flats in Perrymead, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_flats_in_perrymead,_bath__recently_reduced">9 Bedroom Student Flats in Perrymead, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_flats_in_perrymead,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Flats in Perrymead, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_flats_in_perrymead,_bath__private_rental_sector">9 Bedroom Student Flats in Perrymead, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_flats_in_perrymead,_bath__fully_furnished">9 Bedroom Student Flats in Perrymead, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_perrymead_to_the_city_center">How close is Perrymead to the City Center</a></li><li><a href = "#how_close_is_perrymead_to_the_university_of_bath">How close is Perrymead to the University of Bath</a></li><li><a href = "#how_close_is_perrymead_to_the_bath_spa_university">How close is Perrymead to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_flats_in_perrymead,_bath_pp/pm"> <h2>Prices for 9 Bedroom Student Flats in Perrymead, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton tableButton' title='9 Bedroom Student Flats in Perrymead, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^86080")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "9_bedroom_student_flats_in_perrymead,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Flats in Perrymead, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 9 bedroom student flat in Perrymead, Bath, Somerset can bring you peace of mind and allow you to <b>concentrate on your studies</b> without the stress of managing multiple bills each month. <b>UniBills.com</b> offers a convenient solution for students by bundling all utility costs into one easy payment. By opting for this all-inclusive service, you can enjoy the hassle-free experience provided by <b>UniBills.com</b>, knowing that your electricity, water, gas, and internet bills are all taken care of. This saves you time and effort, enabling you to focus on what truly matters – your education. Say goodbye to the headache of sorting through various invoices and trying to split bills among your housemates. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of a stress-free living arrangement with <b>all bills inclusive</b>.</p><a id = "cheap_9_bedroom_student_flats_in_perrymead,_bath"> <h2>Cheap 9 Bedroom Student Flats in Perrymead, Bath</h2></a><p><Portlet location="REGION^86080" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_flats_in_perrymead,_bath__recently_added"> <h2>9 Bedroom Student Flats in Perrymead, Bath - Recently Added</h2></a><p><Portlet location="REGION^86080" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_flats_in_perrymead,_bath__recently_reduced"> <h2>9 Bedroom Student Flats in Perrymead, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^86080" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_flats_in_perrymead,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Flats in Perrymead, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and convenient living arrangement in <b>Bath</b>, Somerset? Our property portal specializes in helping you find the perfect <b>9 Bedroom Flats</b> in the sought-after area of Perrymead. Close to both the University of <b>Bath</b> and <b>Bath</b> Spa University, these <b>student Flats</b> offer the ideal location for easy access to campus and all the amenities the city has to offer. With plenty of room for you and your housemates, these flats provide a comfortable and sociable living environment.</p><a id = "9_bedroom_student_flats_in_perrymead,_bath__private_rental_sector"> <h2>9 Bedroom Student Flats in Perrymead, Bath - Private Rental Sector</h2></a><p>Looking for student accommodation in Bath? Look no further than the <b>9 Bedroom Flats in Perrymead, Bath, Somerset, Bath</b>. These spacious flats are perfect for those looking to live with friends or meet new people. Conveniently located near local shops, restaurants, and public transport, these flats offer convenience and comfort. With <b>bills included</b> in the rent, residents can enjoy peace of mind knowing that their utilities are covered. Each flat comes <b>fully furnished</b>, so you can move in straight away without the hassle of buying furniture. Don't miss out on this fantastic opportunity to live in a vibrant and welcoming community in the heart of Bath.</p><a id = "9_bedroom_student_flats_in_perrymead,_bath__fully_furnished"> <h2>9 Bedroom Student Flats in Perrymead, Bath - Fully Furnished</h2></a><p>Looking for a spacious and convenient living arrangement in the picturesque city of Bath, Somerset? Look no further than the fully furnished 9 Bedroom Flats in Perrymead. Situated in a prime location, these flats offer comfort and style for students and professionals alike. With nine bedrooms, there is space for everyone to live comfortably. In Bath, it is normal for student flats to be fully furnished, and these flats are no exception. You'll find all the modern amenities you need, from cozy beds to functional workspaces. The bright and airy layout creates a welcoming atmosphere, perfect for studying or relaxing after a long day. Don't miss out on the opportunity to live in one of the best neighborhoods in Bath in these fully furnished 9 Bedroom Flats in Perrymead.</p><a id = "how_close_is_perrymead_to_the_city_center"> <h2>How close is Perrymead to the City Center</h2></a><p><b>Perrymead</b>, a charming and tranquil neighborhood, is perfectly situated in close proximity to <b>Bath city center</b>. Located just a few <b>miles</b> away, residents of <b>Perrymead</b> enjoy the convenience of easy access to all the bustling and cultural attractions that Bath has to offer. Whether you're looking to explore the stunning architecture of the Roman Baths or indulge in a day of shopping at the various boutiques and shops, <b>Perrymead</b>'s proximity to the city center allows for a seamless transition between tranquil suburban living and vibrant city life. With its picturesque surroundings and quick commute, <b>Perrymead</b> provides the best of both worlds for those seeking a balance between urban convenience and rural tranquility.</p><a id = "how_close_is_perrymead_to_the_university_of_bath"> <h2>How close is Perrymead to the University of Bath</h2></a><p>Perrymead is conveniently located near the prestigious <b>University of Bath</b>, making it an ideal place for students and faculty alike. Situated just a few <b>miles</b> away, the university can be easily reached <b>by foot</b>, bus, or car from Perrymead. The most direct route to the <b>University of Bath</b> would be by taking the bus, which offers a quick and efficient way to travel to campus. For those who prefer to drive, the university is also easily accessible <b>by car</b>, with convenient parking options available. Whether commuting <b>by foot</b>, bus, or car, Perrymead's proximity to the <b>University of Bath</b> makes it a desirable location for those looking for the perfect blend of convenience and accessibility.</p><a id = "how_close_is_perrymead_to_the_bath_spa_university"> <h2>How close is Perrymead to the Bath Spa University</h2></a><p>Perrymead is conveniently located just a few <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal place for students looking for accommodation close to campus. The university is easily accessible from Perrymead by both foot and bus, with the campus being a short journey away via the local <b>bus route</b>. If you prefer to drive, the university can also be reached in just a few minutes <b>by car</b>. This close proximity offers students the option to easily commute between home and campus, saving time and ensuring a stress-free journey to and from classes. Perrymead's convenient location near <b>Bath Spa University</b> makes it the perfect place for students looking for a comfortable and accessible living arrangement while pursuing their academic goals.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After an extensive search for 9-bedroom student flats in Perrymead, Bath, it is evident that the market for such large accommodations is limited in this area. Despite the high demand for student housing, the availability of 9-bedroom flats in Perrymead is scarce. Potential renters may need to consider alternative options such as renting multiple smaller properties or expanding their search to nearby neighborhoods. In conclusion, finding a suitable 9-bedroom student flat in Perrymead, Bath may prove to be challenging, but with perseverance and flexibility, students can still secure comfortable and convenient accommodations for their academic year.</p></>)
};

export default BathPerrymeadFlat9;