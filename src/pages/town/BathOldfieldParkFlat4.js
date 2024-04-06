
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


const  BathOldfieldParkFlat4 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isMobile,setIsMobile] = useState();    

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
  


    return (<><h1>4 Bedroom Student Flats in Oldfield Park, Bath</h1><p>We have listings for <b>4 Bedroom Student Flats in Oldfield Park, Bath</b> for the academic year 2024.

<b>4 Bedroom Student Flats in Oldfield Park, Bath</b> offer spacious and comfortable living arrangements for student accommodation in Bath. With convenient access to local amenities and public transportation, these flats provide an ideal location for students looking for a convenient and vibrant living experience in Bath. The vibrant community of Oldfield Park adds to the charm of living in these student flats, making it a popular choice among students in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-flats-in-oldfield-park-bath.png')} alt='4 Bedroom Student Flats in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=REGION^71108&type=Flat&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Flats in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_flats_in_oldfield_park,_bath_pp/pm">Prices for 4 Bedroom Student Flats in Oldfield Park, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive">4 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_flats_in_oldfield_park,_bath">Cheap 4 Bedroom Student Flats in Oldfield Park, Bath</a></li><li><a href = "#4_bedroom_student_flats_in_oldfield_park,_bath__recently_added">4 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced">4 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector">4 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished">4 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_flats_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Flats in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£716 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>If you're a student living in a 4-bedroom flat in the vibrant Oldfield Park area of Bath, Somerset, subscribing to an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b> can be a game-changer. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, ensuring that all your utility bills are taken care of in one convenient payment. This means you can <b>concentrate on your studies</b> and social life without the stress of managing multiple bills each month. By opting for an <b>all bills inclusive</b> service, you can rest assured that your electricity, water, internet, and other utilities are covered, giving you peace of mind and allowing you to budget effectively. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience and make the most of your time in Bath.</p><a id = "cheap_4_bedroom_student_flats_in_oldfield_park,_bath"> <h2>Cheap 4 Bedroom Student Flats in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_flats_in_oldfield_park,_bath__recently_added"> <h2>4 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced"> <h2>4 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Looking for <b>4 Bedroom Flats</b> in Oldfield Park, <b>Bath</b>, Somerset? Our property portal is the perfect place for students to find spacious and well-equipped accommodations near the University of <b>Bath</b> and <b>Bath</b> Spa University. Located in the vibrant neighborhood of Oldfield Park, our listings offer convenient access to local amenities, transportation links, and campus facilities. Whether you're searching for a modern apartment or a cozy flat, our platform features a range of options to suit your preferences and budget. With detailed descriptions, photographs, and virtual tours, finding the perfect student flat in <b>Bath</b> has never been easier. Start your search today and discover the ideal 4 bedroom flat for your academic journey in this picturesque city.</p><a id = "4_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector"> <h2>4 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Are you looking for a spacious and comfortable living space in the heart of Bath, Somerset? Look no further than the 4 Bedroom Flats in Oldfield Park, Bath. These flats are ideal for students or professionals seeking a convenient location with easy access to local amenities and transportation. Each flat comes <b>fully furnished</b>, so you can move in and feel at home right away. With <b>bills included</b> in the rent, you can enjoy peace of mind knowing that all your utilities are taken care of. Don't miss out on the opportunity to live in a stylish and well-equipped 4 Bedroom Flat in Oldfield Park, Bath, where convenience and comfort come together seamlessly.</p><a id = "4_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished"> <h2>4 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 4 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</b>? Look no further! In this vibrant student-centric area, it is normal for student flats to be fully furnished, providing everything you need to make it your home away from home. These spacious 4-bedroom flats offer ample living space, ideal for students or families looking for a comfortable and convenient living arrangement. With modern amenities and stylish decor, these flats are designed to make your stay enjoyable and stress-free. Located in the heart of Oldfield Park, you'll have easy access to local shops, cafes, and transportation, making it a great choice for those looking to immerse themselves in the vibrant community of Bath. Don't miss out on the opportunity to secure one of these fantastic <b>fully furnished 4 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</b>.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a vibrant and diverse neighborhood located just a short distance from <b>Bath city center</b>. As one of the closest residential areas to the heart of Bath, <b>Oldfield Park</b> offers residents the perfect blend of convenience and charm. Situated just under 2 <b>miles</b> away from <b>Bath city center</b>, <b>Oldfield Park</b> is easily accessible by foot, bike, or public transportation. Whether you prefer to stroll down the bustling streets of Bath or relax in the peaceful surroundings of <b>Oldfield Park</b>, you'll find that the two locations are intimately connected, making it easy to enjoy the best of both worlds. With its picturesque streets, historic architecture, and friendly atmosphere, <b>Oldfield Park</b> provides a welcome retreat from the hustle and bustle of city life while being just a stone's throw away from all the amenities and attractions that <b>Bath city center</b> has to offer.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is just 1.5 <b>miles</b> away from the <b>University of Bath</b>, making it a convenient location for students and staff members. The university can be easily reached <b>by foot</b> in less than 30 minutes, allowing for a brisk and scenic stroll through the picturesque streets of Bath. For those who prefer a quicker commute, there are frequent bus services that run between Oldfield Park and the university campus. The journey takes approximately 10 minutes <b>by bus</b>, providing a hassle-free and cost-effective transportation option. Additionally, for those with a car, the university is just a short 5-minute drive away, offering flexibility and convenience for those who prefer to travel <b>by car</b>. Overall, Oldfield Park's close proximity to the <b>University of Bath</b> makes it an ideal location for students and faculty members alike.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is conveniently close to <b>Bath Spa University</b>, located just a few <b>miles</b> away from the campus. Walking from Oldfield Park to <b>Bath Spa University</b> takes around 30-40 minutes, making it an accessible option for students who enjoy a stroll. For those looking for a quicker commute, there is a direct <b>bus route</b> that connects Oldfield Park to the university, with a journey time of about 15-20 minutes. Alternatively, students can choose to drive to <b>Bath Spa University</b>, which can take around 10-15 minutes depending on traffic. Whether you prefer to travel <b>by foot</b>, bus, or car, Oldfield Park offers a range of transportation options for easy access to <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>When searching for 4 bedroom student flats in Oldfield Park, Bath, it is essential to consider various factors to ensure you find the perfect accommodation. Location plays a crucial role, as Oldfield Park is a popular area for students due to its proximity to local amenities and the University of Bath. Additionally, amenities such as supermarkets, pubs, and cafes are easily accessible, making it a convenient choice for student living. The variety of housing options in Oldfield Park ensures that you can find a 4 bedroom flat that suits your preferences and budget. Overall, living in this vibrant area offers a balance of convenience, community, and academic support. By carefully considering your needs and preferences, you can find the ideal 4 bedroom student flat in Oldfield Park, Bath.</p></>)
};

export default BathOldfieldParkFlat4;