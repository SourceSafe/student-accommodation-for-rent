
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


const  BathSnowHillFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Snow Hill, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Snow Hill, Bath</b> for the academic year 2024.
<b>2 Bedroom Student Flats in Snow Hill, Bath</b> are perfect for students looking for a comfortable and convenient living space in Bath. These flats offer spacious rooms and are situated in a convenient location close to various amenities and transportation options for students.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-snow-hill-bath.png')} alt='2 Bedroom Student Flats in Snow Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Snow Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71116&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Snow Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_snow_hill,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Snow Hill, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_snow_hill,_bath__all_bills_inclusive">2 Bedroom Student Flats in Snow Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_snow_hill,_bath">Cheap 2 Bedroom Student Flats in Snow Hill, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_snow_hill,_bath__recently_added">2 Bedroom Student Flats in Snow Hill, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_snow_hill,_bath__recently_reduced">2 Bedroom Student Flats in Snow Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_snow_hill,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Snow Hill, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_snow_hill,_bath__private_rental_sector">2 Bedroom Student Flats in Snow Hill, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_snow_hill,_bath__fully_furnished">2 Bedroom Student Flats in Snow Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_snow_hill_to_the_city_center">How close is Snow Hill to the City Center</a></li><li><a href = "#how_close_is_snow_hill_to_the_university_of_bath">How close is Snow Hill to the University of Bath</a></li><li><a href = "#how_close_is_snow_hill_to_the_bath_spa_university">How close is Snow Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_snow_hill,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Snow Hill, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£707 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Snow Hill, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71116")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_snow_hill,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Snow Hill, Bath - All Bills Inclusive</h2></a><p>When you're juggling a busy academic schedule, the last thing you want to worry about is managing various bills for your student flat in Snow Hill, Bath, Somerset. That's where <b>UniBills.com</b> comes in, offering an <b>all bills inclusive</b> service that allows you to <b>concentrate on your studies</b> without the stress of utility payments hanging over your head. By opting for the hassle-free all inclusive option provided by <b>UniBills.com</b>, you can enjoy the convenience of a single monthly payment that covers all your bills, including electricity, water, gas, and internet. This means no more splitting bills with flatmates or dealing with unexpected costs – just peace of mind and simplicity. Save time and energy by letting <b>UniBills.com</b> take care of the details, so you can focus on what's truly important. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and make your student life easier and more manageable.</p><a id = "cheap_2_bedroom_student_flats_in_snow_hill,_bath"> <h2>Cheap 2 Bedroom Student Flats in Snow Hill, Bath</h2></a><p><Portlet location="REGION^71116" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_snow_hill,_bath__recently_added"> <h2>2 Bedroom Student Flats in Snow Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71116" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_snow_hill,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Snow Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71116" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_snow_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Snow Hill, Bath, Somerset, Bath</h2></a><p>Looking for a cozy 2 bedroom flat in the heart of <b>Bath</b>? Our property portal is your go-to destination for finding the perfect student flat in Snow Hill, <b>Bath</b>, Somerset. Located just a stone's throw away from the prestigious University of <b>Bath</b> and <b>Bath</b> Spa University, these flats offer a convenient and vibrant living space for students. With our user-friendly search filters, you can easily narrow down your options and find a flat that suits your needs and budget. Whether you're looking for a modern apartment or a charming Victorian terraced house, our portal has a wide range of options to choose from. Don't miss out on the opportunity to find your ideal 2 bedroom flat in Snow Hill, <b>Bath</b>, Somerset through our platform today.</p><a id = "2_bedroom_student_flats_in_snow_hill,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Snow Hill, Bath - Private Rental Sector</h2></a><p>Looking for a cozy living space in the heart of Snow Hill, Bath, Somerset, Bath? Look no further than the charming 2 Bedroom Flats in Snow Hill. These beautifully designed flats offer a perfect blend of comfort and convenience, with all the amenities you need for a comfortable stay. Each flat comes <b>fully furnished</b>, so you can move right in and feel at home from day one. Plus, with <b>bills included</b> in your rent, you can enjoy peace of mind knowing that everything is taken care of.
Snow Hill is a bustling neighborhood with plenty of shops, cafes, and restaurants just steps away from your doorstep. You'll also have easy access to public transportation, making it a breeze to explore all that Bath has to offer. Whether you're a student, young professional, or small family, these 2 Bedroom Flats in Snow Hill offer the perfect place to call home. Don't miss out on this fantastic opportunity to experience city living at its best.</p><a id = "2_bedroom_student_flats_in_snow_hill,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Snow Hill, Bath - Fully Furnished</h2></a><p>If you are looking for a comfortable and convenient place to stay in Bath, Somerset, look no further than the fully furnished 2 Bedroom Flats in Snow Hill. Located in the heart of Bath, these flats offer the perfect combination of style and comfort. The fully furnished aspect of these flats means that you can move in with ease and start enjoying your new home right away. It is normal for student flats to be fully furnished, saving you the hassle of purchasing furniture and making the moving process a breeze. With spacious living areas, modern kitchens, and cozy bedrooms, these flats provide everything you need for a relaxing and enjoyable stay in Bath. Don't miss out on the opportunity to live in one of the best locations in the city - <b>fully furnished 2 Bedroom Flats in Snow Hill, Bath, Somerset, Bath</b>.</p><a id = "how_close_is_snow_hill_to_the_city_center"> <h2>How close is Snow Hill to the City Center</h2></a><p><b>Snow Hill</b> is conveniently located just 1.5 <b>miles</b> away from the vibrant <b>Bath city center</b>, making it a fantastic choice for those looking to stay close to all the action. This prime location ensures that guests can easily access popular attractions like the Roman Baths, Bath Abbey, and the iconic Pulteney Bridge within a short distance. Whether you prefer exploring historical landmarks, indulging in shopping sprees, or dining at exquisite restaurants, <b>Snow Hill</b>'s proximity to the city center allows for a convenient and enjoyable experience. Additionally, the short distance between <b>Snow Hill</b> and <b>Bath city center</b> makes it easy for guests to explore the various cultural events, bustling markets, and charming streets of this picturesque city. So, if you're looking for accommodation that offers a perfect balance between tranquility and easy access to the city's amenities, <b>Snow Hill</b> is the ideal choice for your stay.</p><a id = "how_close_is_snow_hill_to_the_university_of_bath"> <h2>How close is Snow Hill to the University of Bath</h2></a><p>Snow Hill is a quaint residential area located in the heart of Bath, just a stone's throw away from the esteemed <b>University of Bath</b>. The university is just a few <b>miles</b> away from Snow Hill, making it easily accessible <b>by foot</b>, bus, or car. If walking is your preferred mode of transportation, the university is a scenic 30-minute stroll through the beautiful streets of Bath. For those looking for a quicker option, hopping on the direct <b>bus route</b> is a convenient and efficient way to reach the campus in just a short drive. And if you prefer the comfort and convenience of your own vehicle, the university is a mere 10-minute car ride from Snow Hill. With its close proximity and various transportation options, getting to the <b>University of Bath</b> from Snow Hill is a breeze.</p><a id = "how_close_is_snow_hill_to_the_bath_spa_university"> <h2>How close is Snow Hill to the Bath Spa University</h2></a><p>Snow Hill is conveniently located just a few <b>miles</b> away from <b>Bath Spa University</b>, making it easily accessible for students and staff. If you prefer to travel <b>by foot</b>, it would take you approximately 30-40 minutes to walk from Snow Hill to the university campus. For a quicker journey, the <b>bus route</b> running between Snow Hill and <b>Bath Spa University</b> is a convenient option, taking around 15-20 minutes. If you prefer to drive, the distance can be covered in around 10-15 minutes, depending on traffic conditions. Overall, whether you choose to travel <b>by foot</b>, <b>by bus</b>, or <b>by car</b>, getting from Snow Hill to <b>Bath Spa University</b> is quick and straightforward.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>When looking for a 2-bedroom student flat in Snow Hill, Bath, it's important to consider factors such as location, amenities, and affordability. Snow Hill is an ideal neighborhood for students, offering a peaceful and convenient environment close to local shops, cafes, and public transportation. Many student flats in the area come fully furnished and equipped with modern appliances, making the move-in process hassle-free. Additionally, sharing a flat with a roommate can help lower living expenses and create a supportive living environment. Overall, finding a 2-bedroom student flat in Snow Hill, Bath, provides the perfect balance of comfort, convenience, and affordability for students seeking a cozy and welcoming living space.</p></>)
};

export default BathSnowHillFlat2;