
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import {CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathOldfieldParkFlat9 = () => 
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

    return (<><h1>9 Bedroom Student Flats in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/9-bedroom-student-flats-in-oldfield-park-bath.png')} alt='9 Bedroom Student Flats in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_flats_in_oldfield_park,_bath">Prices for 9 Bedroom Student Flats in Oldfield Park, Bath</a></li><li><a href = "#9_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive">9 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_flats_in_oldfield_park,_bath">Cheap 9 Bedroom Student Flats in Oldfield Park, Bath</a></li><li><a href = "#9_bedroom_student_flats_in_oldfield_park,_bath__recently_added">9 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced">9 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector">9 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished">9 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_flats_in_oldfield_park,_bath"> <h2>Prices for 9 Bedroom Student Flats in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton' title='View our 9 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "9_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your student flat in Oldfield Park, Bath? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service. Say goodbye to the stress of managing electricity, water, and internet bills separately – with <b>UniBills.com</b>, everything is taken care of in one convenient package. By subscribing to their service, you can <b>concentrate on your studies</b> without worrying about budgeting for different expenses each month. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and experience the ease of having all your bills sorted in one go. Simplify your student life and streamline your finances by opting for the <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student experience a breeze.</p><a id = "cheap_9_bedroom_student_flats_in_oldfield_park,_bath"> <h2>Cheap 9 Bedroom Student Flats in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_flats_in_oldfield_park,_bath__recently_added"> <h2>9 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced"> <h2>9 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you looking for a spacious and convenient 9 bedroom flat in Oldfield Park, <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect student accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Oldfield Park is a popular student area with its close proximity to the universities, local amenities, and great transport links. With our user-friendly search filters, you can easily narrow down your options to find the ideal 9 bedroom flat that suits your preferences and budget. Whether you prefer a modern or traditional style property, we have a wide range of listings to choose from. Don't miss out on the opportunity to secure a fantastic student flat in <b>Bath</b> through our portal.</p><a id = "9_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector"> <h2>9 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for the perfect accommodation in Bath, Somerset? Look no further than the 9 Bedroom Flats in Oldfield Park, Bath. These spacious and modern flats are ideal for students or professionals and offer all the amenities you need for comfortable living. With <b>bills included</b> in the rent, you can relax knowing that your expenses are taken care of. Each flat is <b>fully furnished</b>, so you can move in hassle-free and start enjoying your new home right away. Don't miss out on the opportunity to live in one of the most sought-after areas in Bath. Contact us now to schedule a viewing and secure your spot in these fantastic flats.</p><a id = "9_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished"> <h2>9 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</h2></a><p>Are you searching for a convenient and comfortable accommodation option in Bath, Somerset? Look no further than the fully furnished 9 Bedroom Flats in Oldfield Park. These spacious and well-equipped flats provide the ideal living space for students or large groups looking for a hassle-free move-in experience. Situated in the charming neighborhood of Oldfield Park, these flats offer easy access to local amenities, public transportation, and the beautiful city of Bath. With nine bedrooms, there is plenty of room for everyone to have their own space while still enjoying the communal areas together. In Bath, it is normal for student flats to be fully furnished, so you can expect all the necessary furniture and appliances to be included. Don't miss out on the opportunity to live in one of the most sought-after areas in Bath in these convenient and cozy flats.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming and vibrant suburb located just a stone's throw away from <b>Bath city center</b>. Situated approximately 1.5 <b>miles</b> south of the bustling heart of Bath, <b>Oldfield Park</b> offers residents the perfect balance of suburban tranquility and city convenience. With its unique blend of Victorian terraced houses, local shops, and friendly community atmosphere, <b>Oldfield Park</b> provides a sought-after residential option for those looking to be close to all the amenities and attractions that <b>Bath city center</b> has to offer. Whether you fancy a leisurely walk, a quick bike ride, or a short bus journey, the proximity of <b>Oldfield Park</b> to <b>Bath city center</b> ensures easy access to historic landmarks, museums, shops, restaurants, and everything else that makes Bath a delightful place to live and explore. So, if you're looking for a neighborhood that offers the best of both worlds, <b>Oldfield Park</b> is the perfect choice just a few <b>miles</b> away from the vibrant heart of Bath.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is conveniently close to the <b>University of Bath</b>, located just a few <b>miles</b> away. For those looking to commute to the university, there are several options available. If you prefer walking, the journey is easily manageable, taking around 30-40 minutes on foot. Alternatively, there is a direct <b>bus route</b> connecting Oldfield Park to the university, providing a quick and convenient transportation option for students and faculty. The bus ride usually takes less than 15 minutes, making it a popular choice for those looking to save time. For those with a car, the journey is even quicker, taking just a few minutes to reach the <b>University of Bath</b> campus. Overall, the close proximity of Oldfield Park to the <b>University of Bath</b> offers a convenient and accessible commute for students and staff alike.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is a vibrant and diverse neighborhood situated in close proximity to <b>Bath Spa University</b>. Located just a few <b>miles</b> away from the university campus, Oldfield Park offers students a convenient location to live while pursuing their academic studies. For those looking to commute to <b>Bath Spa University</b>, there are several transportation options available. <b>by foot</b>, it takes approximately 25-30 minutes to reach the university campus, making it an ideal choice for students who enjoy a brisk walk. Alternatively, the university is easily accessible <b>by bus</b>, with a direct <b>bus route</b> connecting Oldfield Park to <b>Bath Spa University</b> in just a short journey. For those with a car, the drive to the campus is quick and convenient, taking only a few minutes. With its close proximity to <b>Bath Spa University</b> and easy access <b>by foot</b>, bus, or car, Oldfield Park is a fantastic location for students looking for a lively and convenient place to live during their time at university.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In search of a 9-bedroom student flat in the charming neighborhood of Oldfield Park in Bath? Look no further than the array of spacious and well-equipped properties available in this area. With a variety of options to choose from, students can find the perfect accommodation to suit their needs and preferences. Boasting a vibrant community atmosphere, close proximity to local amenities, and easy access to the University of Bath campus, Oldfield Park is an ideal location for student living. Whether you prefer modern apartments or traditional Victorian houses, there is something for everyone in this sought-after student-friendly neighborhood. Don't miss out on the opportunity to secure a comfortable and convenient 9-bedroom flat in Oldfield Park for your upcoming academic year.</p></>)
};

export default BathOldfieldParkFlat9;