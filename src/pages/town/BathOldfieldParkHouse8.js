
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom, isDesktopAtom} from '../../portal/appState/appState'
import { ViewPortal} from '../../components/ViewPortal/ViewPortal'
import { CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathOldfieldParkHouse8 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isDesktop] = useAtomState(isDesktopAtom);

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

    return (<><h1>8 Bedroom Student Houses in Oldfield Park, Bath</h1><p>We have listings for <b>8 Bedroom Student Houses in Oldfield Park, Bath</b> for the academic year 2024.

<b>8 Bedroom Student Houses in Oldfield Park, Bath</b> offer spacious and comfortable accommodation for students looking to live together in a shared house environment. Located in the vibrant area of Oldfield Park, these houses are in close proximity to local amenities, public transport links, and the University of Bath campus. With multiple bedrooms, communal areas, and modern amenities, these student houses provide the perfect setting for a productive academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{isDesktop && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/8-bedroom-student-houses-in-oldfield-park-bath.png')} alt='8 Bedroom Student Houses in Oldfield Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='8 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=REGION^71108&type=House&beds=8")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>8 Bedroom Student Houses in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_8_bedroom_student_houses_in_oldfield_park,_bath_pp/pm">Prices for 8 Bedroom Student Houses in Oldfield Park, Bath pp/pm</a></li><li><a href = "#8_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive">8 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_8_bedroom_student_houses_in_oldfield_park,_bath">Cheap 8 Bedroom Student Houses in Oldfield Park, Bath</a></li><li><a href = "#8_bedroom_student_houses_in_oldfield_park,_bath__recently_added">8 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#8_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced">8 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__8_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 8 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#8_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector">8 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#8_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished">8 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_8_bedroom_student_houses_in_oldfield_park,_bath_pp/pm"> <h2>Prices for 8 Bedroom Student Houses in Oldfield Park, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£689 per month </td><td><button className = 'searchButton tableButton' title='8 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "8_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive"> <h2>8 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in an 8-bedroom student house in Oldfield Park, Bath, Somerset, can be a fun and rewarding experience. However, managing multiple bills for utilities such as electricity, water, and internet can be time-consuming and stressful. This is where the convenience of an <b>all bills inclusive</b> service like <b>UniBills.com</b> comes in. By opting for this service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> and social activities without worrying about budgeting and bill payments. With <b>UniBills.com</b>, you can simplify your student life and enjoy the benefits of having all your bills taken care of in one convenient package. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Oldfield Park a breeze.</p><a id = "cheap_8_bedroom_student_houses_in_oldfield_park,_bath"> <h2>Cheap 8 Bedroom Student Houses in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "8_bedroom_student_houses_in_oldfield_park,_bath__recently_added"> <h2>8 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "8_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced"> <h2>8 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__8_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 8 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Looking for 8 bedroom <b>student Houses</b> in Oldfield Park, <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect accommodation for your university experience. Oldfield Park is a popular student area with easy access to both the University of <b>Bath</b> and <b>Bath</b> Spa University, making it an ideal location for students. With a range of amenities, including shops, cafes, and parks, Oldfield Park offers a vibrant and lively atmosphere for students to enjoy. Our property portal features a variety of 8-bedroom houses in the area, offering spacious living areas and convenient locations for students to live, study, and socialize. Whether you're looking for a modern property or a traditional Victorian house, our portal has options to suit your preferences and budget. Start your search today and find the perfect 8-bedroom student house in Oldfield Park, <b>Bath</b>, Somerset.</p><a id = "8_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector"> <h2>8 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for <b>8 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</b>? The private rental sector in this area offers a range of spacious properties perfect for larger groups or families. Many of these homes come <b>fully furnished</b>, making the moving process seamless and convenient. Additionally, some landlords include bills in the rental price, easing the burden of extra costs for tenants. These properties are ideal for students, professionals, or anyone looking for a comfortable and well-equipped living space in this charming area of Bath. With plenty of amenities nearby and easy access to public transportation, renting an 8 bedroom house in Oldfield Park provides a convenient and enjoyable living experience for all occupants.</p><a id = "8_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished"> <h2>8 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 8 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</b>? You’ve come to the right place! In this charming neighborhood, it is normal for student houses to be fully furnished, so you can move in hassle-free and start enjoying your new home right away. These properties typically feature spacious bedrooms, cozy living areas, well-equipped kitchens, and modern bathrooms. With plenty of space for studying, socializing, and relaxing, these houses are perfect for students looking for a comfortable and convenient living arrangement. Located in the vibrant city of Bath, Oldfield Park offers easy access to local amenities, public transportation, and the bustling city center, making it a popular choice for students.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b>, a charming residential area just south of <b>Bath city center</b>, is situated approximately 1.5 <b>miles</b> away from the heart of the historic city. This makes it an ideal location for those wanting to be close to the hustle and bustle of Bath while still enjoying a more relaxed atmosphere. With its tree-lined streets and Victorian architecture, <b>Oldfield Park</b> offers a peaceful escape from the city center while remaining conveniently close. Whether you're looking to explore the Roman Baths, indulge in some retail therapy at SouthGate, or enjoy a leisurely stroll along the River Avon, <b>Oldfield Park</b>'s proximity to <b>Bath city center</b> makes it the perfect base for experiencing all that this vibrant city has to offer. And with excellent public transportation options, including buses and trains, getting to and from <b>Oldfield Park</b> to <b>Bath city center</b> is quick and easy. So come and discover the best of both worlds in <b>Oldfield Park</b> - close enough to <b>Bath city center</b> for convenience, yet far enough to enjoy a sense of tranquility.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is an ideal location for students or staff of the <b>University of Bath</b>, as it is conveniently close to the campus. Located just 1.5 <b>miles</b> away, the <b>University of Bath</b> is easily accessible from Oldfield Park <b>by foot</b>, bus, or car. If you prefer to walk, it would take you around 30 minutes to reach the campus. Alternatively, there are regular bus services that run directly to the university, making the journey quick and convenient. <b>by bus</b>, the journey takes just 10 minutes, offering a hassle-free commute for those without a vehicle. For those who prefer to drive, the university is only a short 5-minute car journey away. With its close proximity and easy access to the <b>University of Bath</b>, Oldfield Park is a popular choice for students and staff looking for a convenient and well-connected location to live.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is a vibrant suburb located in the historic city of Bath, just a stone's throw away from <b>Bath Spa University</b>. The university is situated about 1.5 <b>miles</b> away from Oldfield Park, making it easily accessible <b>by foot</b>, bus, or car. For students looking to commute to the campus, there is a convenient <b>bus route</b> that connects Oldfield Park to <b>Bath Spa University</b>, allowing for a quick and hassle-free journey. <b>by bus</b>, the trip takes around 10-15 minutes, providing a convenient and affordable option for students. Alternatively, if you prefer to drive, the university is just a short 5-minute car journey from Oldfield Park. Overall, the close proximity of Oldfield Park to <b>Bath Spa University</b> makes it a popular choice for students looking for a convenient and well-connected place to live during their studies.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 8-bedroom student houses in Oldfield Park, Bath, it is crucial to consider factors such as location, amenities, and affordability.  Oldfield Park is a popular area for students due to its close proximity to both the University of Bath and Bath Spa University. When looking for a student house in this area, it is essential to ensure that it is within walking distance of the universities, as well as local amenities such as shops, restaurants, and public transport links. Additionally, students should consider the condition of the property, the size and layout of the bedrooms, and the overall rental costs. It is also important to carefully review the terms of the rental agreement and any additional fees before committing to a property. By carefully considering all of these factors, students can find the perfect 8-bedroom student house in Oldfield Park that meets their needs and budget.</p></>)
};

export default BathOldfieldParkHouse8;