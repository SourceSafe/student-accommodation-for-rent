
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import {ViewPortal} from '../../components/ViewPortal/ViewPortal'
import {CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathOldfieldParkFlat1 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("t  ownLocationId");
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

    return (<><h1>1 Bedroom Student Flats in Oldfield Park, Bath</h1><p>We have listings for <b>1 Bedroom Student Flats in Oldfield Park, Bath</b> for the academic year 2024.
<b>1 Bedroom Student Flats in Oldfield Park, Bath</b> are perfect for students looking for a cozy and convenient living space in Bath. These flats typically come fully-furnished and are located in a vibrant neighborhood with easy access to shops, restaurants, and public transportation. Students can enjoy a comfortable and independent living experience while studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/1-bedroom-student-flats-in-oldfield-park-bath.png')} alt='1 Bedroom Student Flats in Oldfield Park, Bath'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}> View Available Properties in our Portal</h2><ViewPortal description=" 1 Bedroom Student Flats in Oldfield Park, Bath" portalLink="./" > </ViewPortal><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_1_bedroom_student_flats_in_oldfield_park,_bath">Prices for 1 Bedroom Student Flats in Oldfield Park, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive">1 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_1_bedroom_student_flats_in_oldfield_park,_bath">Cheap 1 Bedroom Student Flats in Oldfield Park, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_oldfield_park,_bath__recently_added">1 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#1_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced">1 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector">1 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#1_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished">1 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_1_bedroom_student_flats_in_oldfield_park,_bath"> <h2>Prices for 1 Bedroom Student Flats in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1245 per month </td><td><button className = 'searchButton' title='View our 1 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "1_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive"> <h2>1 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 1 bedroom student flat in Oldfield Park, Bath, Somerset can be a fantastic experience, but managing utility bills and expenses can be a hassle. By subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b>, you can enjoy the convenience of having all your bills rolled into one easy payment. This means you can focus on your studies and social life without the stress of managing multiple bills. <b>UniBills.com</b> takes care of everything from electricity and water to internet and TV licenses, giving you peace of mind and a clearer budget. Say goodbye to the headache of dealing with various suppliers and fluctuating costs, and enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website to make your student living experience truly carefree and convenient.</p><a id = "cheap_1_bedroom_student_flats_in_oldfield_park,_bath"> <h2>Cheap 1 Bedroom Student Flats in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_oldfield_park,_bath__recently_added"> <h2>1 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced"> <h2>1 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 1 Bedroom Flat in Oldfield Park, <b>Bath</b>, Somerset? Look no further than our property portal! We specialize in helping students find ideal living spaces near the University of <b>Bath</b> and <b>Bath</b> Spa University. Oldfield Park is a vibrant and popular area for students, offering a range of amenities and a convenient location close to campus. Whether you prefer a modern studio or a cozy one-bedroom flat, our portal has a variety of options to suit your needs.</p><a id = "1_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector"> <h2>1 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for a cozy and convenient living space in Oldfield Park, Bath, Somerset? Look no further than the fantastic selection of <b>1 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</b>. Situated in a vibrant and sought-after area of Bath, these flats offer the perfect balance of comfort and location. What sets these properties apart is the convenience of having <b>bills included</b> in the rental price, making budgeting a breeze. Additionally, each flat comes <b>fully furnished</b>, so you can move in hassle-free and start enjoying your new home right away. Whether you're a student, professional, or couple, these 1 Bedroom Flats in Oldfield Park offer a welcoming and stylish living space in a prime location.</p><a id = "1_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished"> <h2>1 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</h2></a><p>Looking for a cozy and convenient place to call home in Bath? Look no further than the <b>fully furnished 1 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</b>. Nestled in the heart of this charming city, these flats offer not only a prime location but also the comfort and convenience of being fully furnished. In Oldfield Park, it is normal for student flats to be fully furnished, making your move-in process seamless and stress-free. From a comfortable bed to a functional kitchen and stylish décor, these flats have everything you need to feel at home. So why settle for anything less when you can enjoy the benefits of a fully furnished 1 Bedroom Flat in Oldfield Park, Bath, Somerset, Bath.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a delightful suburb located just a stone's throw away from <b>Bath city center</b>. Situated merely 1.5 <b>miles</b> south of the bustling heart of Bath, <b>Oldfield Park</b> offers the perfect balance of residential charm and convenient access to the city's amenities. Whether you choose to stroll along the scenic river banks, explore the historic streets of Bath, or indulge in the city's renowned dining and shopping scene, <b>Oldfield Park</b>'s proximity to <b>Bath city center</b> ensures that all these experiences are within easy reach. With excellent public transportation options such as buses and trains, navigating between <b>Oldfield Park</b> and <b>Bath city center</b> is a breeze. So, if you're looking for a peaceful retreat that is still close enough to the vibrant energy of <b>Bath city center</b>, <b>Oldfield Park</b> is the perfect destination for you.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is a charming residential neighborhood located just a stone's throw away from the prestigious <b>University of Bath</b>. Situated less than 2 <b>miles</b> from the campus, getting to the university is a breeze whether you choose to walk, take a bus, or drive. For those who prefer to commute <b>by foot</b>, it's a pleasant 30-minute stroll through the scenic streets of Oldfield Park to reach the university. Alternatively, there is a convenient <b>bus route</b> that runs directly from Oldfield Park to the campus, making the journey quick and hassle-free. If you're in a hurry or simply prefer to drive, the university is just a short 10-minute car ride away. Whether you're a student, faculty member, or visitor, Oldfield Park's close proximity to the <b>University of Bath</b> makes it an ideal location for anyone looking for easy access to campus amenities and events.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is conveniently located just over a mile away from <b>Bath Spa University</b>, making it a popular choice for students looking for off-campus accommodation. The university is easily accessible from Oldfield Park <b>by foot</b>, as the picturesque walk takes around 20-25 minutes along well-lit paths. For those looking for a quicker option, there is a direct <b>bus route</b> that connects Oldfield Park to the university campus, making the journey just a short 10-minute ride. Alternatively, students with access to a car can reach <b>Bath Spa University</b> in under 5 minutes, thanks to the close proximity of the two locations. With its central location and easy transportation options, Oldfield Park offers the perfect balance of proximity and convenience for students studying at <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for a one-bedroom student flat in Oldfield Park, Bath can be a rewarding experience for those seeking a comfortable and convenient living arrangement. The area boasts a vibrant community atmosphere, with easy access to local amenities, transportation links, and the University of Bath campus. Students can enjoy the independence and privacy of their own space while still being close to campus and the bustling city center. With a range of property options available, students can find a flat that meets their needs and budget. Whether it's a cozy studio or a spacious one-bedroom apartment, Oldfield Park offers a variety of living arrangements to suit different preferences. Overall, living in Oldfield Park provides students with a well-rounded and enjoyable living experience during their time in Bath.</p></>)
};

export default BathOldfieldParkFlat1;