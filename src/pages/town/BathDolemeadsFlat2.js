
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


const  BathDolemeadsFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Dolemeads, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Dolemeads, Bath</b> for the academic year 2024.
<b>2 Bedroom Student Flats in Dolemeads, Bath</b> are popular among students due to their convenient location near the university and vibrant city center. These flats offer spacious living areas, modern amenities, and a comfortable environment for students to focus on their studies.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-dolemeads-bath.png')} alt='2 Bedroom Student Flats in Dolemeads, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Dolemeads, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71097&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Dolemeads, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_dolemeads,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Dolemeads, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_dolemeads,_bath__all_bills_inclusive">2 Bedroom Student Flats in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_dolemeads,_bath">Cheap 2 Bedroom Student Flats in Dolemeads, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_dolemeads,_bath__recently_added">2 Bedroom Student Flats in Dolemeads, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_dolemeads,_bath__recently_reduced">2 Bedroom Student Flats in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_dolemeads,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_dolemeads,_bath__private_rental_sector">2 Bedroom Student Flats in Dolemeads, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_dolemeads,_bath__fully_furnished">2 Bedroom Student Flats in Dolemeads, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_dolemeads_to_the_city_center">How close is Dolemeads to the City Center</a></li><li><a href = "#how_close_is_dolemeads_to_the_university_of_bath">How close is Dolemeads to the University of Bath</a></li><li><a href = "#how_close_is_dolemeads_to_the_bath_spa_university">How close is Dolemeads to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_dolemeads,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Dolemeads, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1157 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_dolemeads,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2 bedroom flat in Dolemeads, Bath, Somerset? Do you find managing your monthly bills to be a hassle? Consider subscribing to an <b>all bills inclusive</b> service offered by <b>UniBills.com</b> for your accommodation. With <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including utilities and Wi-Fi, rolled into one easy payment. This way, you can <b>concentrate on your studies</b> and not worry about multiple due dates or unexpected charges. By opting for the hassle-free all inclusive option provided by <b>UniBills.com</b>, you can streamline your living expenses and budget effectively. Say goodbye to the stress of managing bills and say hello to a more simplified student living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life more manageable.</p><a id = "cheap_2_bedroom_student_flats_in_dolemeads,_bath"> <h2>Cheap 2 Bedroom Student Flats in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_dolemeads,_bath__recently_added"> <h2>2 Bedroom Student Flats in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_dolemeads,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_dolemeads,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a comfortable and convenient 2 bedroom flat in Dolemeads, <b>Bath</b>, Somerset? Look no further! Our property portal specializes in helping students find the perfect accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. We understand the importance of having a cozy space to call home while studying, which is why we offer a wide range of <b>student Flats</b> in the sought-after area of Dolemeads. These <b>2 Bedroom Flats</b> are ideal for sharing with a friend or classmate, providing ample space for both privacy and socializing. With our user-friendly search options, you can easily narrow down your choices and find the perfect flat that meets your preferences and budget.</p><a id = "2_bedroom_student_flats_in_dolemeads,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Dolemeads, Bath - Private Rental Sector</h2></a><p>Are you searching for a cozy 2 Bedroom Flat in Dolemeads, Bath, Somerset, Bath? Look no further than the private rental sector in this charming area. These properties offer the convenience of having <b>bills included</b> in the rent, making budgeting a breeze. Additionally, each flat comes <b>fully furnished</b>, saving you the hassle of purchasing and moving furniture. Enjoy the ease of settling into your new home without the stress of setting up utilities or buying new furnishings. With the private rental sector in Dolemeads, Bath, Somerset, Bath, you can experience the comfort and convenience of a ready-to-live-in space, allowing you to focus on enjoying all that this beautiful area has to offer.</p><a id = "2_bedroom_student_flats_in_dolemeads,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Dolemeads, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 2 Bedroom Flats in Dolemeads, Bath, Somerset, Bath</b>? You've come to the right place! Located in the heart of Bath, these flats provide a perfect blend of comfort and convenience. Each flat comes fully furnished with modern furniture and appliances, making it a great option for students or professionals looking to move in hassle-free. In Dolemeads, it is normal for student flats to be fully furnished, so you can expect everything you need for a comfortable living experience. The spacious 2-bedroom layout offers plenty of space for roommates or a small family. With easy access to local amenities and transport links, these flats are in an ideal location for those looking to explore all that Bath has to offer.</p><a id = "how_close_is_dolemeads_to_the_city_center"> <h2>How close is Dolemeads to the City Center</h2></a><p>Located just a stone's throw away from <b>Bath city center</b>, <b>Dolemeads</b> offers the perfect balance of tranquility and convenience. Situated just a few <b>miles</b> from the heart of the historic city, <b>Dolemeads</b> provides easy access to all the attractions and amenities that Bath has to offer. Whether you're looking to explore the iconic Roman Baths, take a leisurely stroll along the river, or indulge in some retail therapy at the artisan markets, everything is within reach when you stay at <b>Dolemeads</b>. So, immerse yourself in the rich history and beauty of <b>Bath city center</b>, all while having a peaceful retreat to return to at the end of the day.</p><a id = "how_close_is_dolemeads_to_the_university_of_bath"> <h2>How close is Dolemeads to the University of Bath</h2></a><p>Dolemeads is in close proximity to the <b>University of Bath</b>, located just a few <b>miles</b> away. Students can easily commute to the university from Dolemeads <b>by foot</b>, taking advantage of the scenic route while enjoying the fresh air. Alternatively, there is a convenient <b>bus route</b> that connects Dolemeads to the university, making travel quick and hassle-free. For those who prefer to drive, the university is just a short distance away <b>by car</b>, allowing for easy access to campus facilities and events. Whether you choose to walk, take the bus, or drive, Dolemeads provides a convenient location for students attending the <b>University of Bath</b>.</p><a id = "how_close_is_dolemeads_to_the_bath_spa_university"> <h2>How close is Dolemeads to the Bath Spa University</h2></a><p>Dolemeads is conveniently located near <b>Bath Spa University</b>, just a stone's throw away from the campus. Situated only a couple of <b>miles</b> from the university, students can easily reach their classes <b>by foot</b>, bike, or even <b>by bus</b>. A quick bus ride or a short drive can also get you to the university campus in no time. Whether you prefer the convenience of walking, the affordability of taking the <b>bus route</b>, or the speed of driving your own car, getting to <b>Bath Spa University</b> from Dolemeads is a breeze. With its close proximity, students can enjoy the best of both worlds – a peaceful retreat at Dolemeads while still having easy access to all that <b>Bath Spa University</b> has to offer.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 2-bedroom student flats in Dolemeads, Bath, students can expect a range of choices to suit their needs. The area boasts a variety of properties, from modern apartments to cozy terraced houses, offering proximity to the University of Bath and local amenities. With public transportation links and grocery stores within easy reach, living in Dolemeads provides a convenient and comfortable lifestyle for students. Although prices may vary depending on the property's size and location, students can find affordable options that fit their budget. In conclusion, Dolemeads is a fantastic location for students looking for 2-bedroom flats in Bath, offering a blend of convenience, comfort, and accessibility. Start your search today and find the perfect student accommodation in this vibrant and lively area of Bath.</p></>)
};

export default BathDolemeadsFlat2;