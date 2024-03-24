
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


const  BathOldfieldParkHouse6 = () => 
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

    return (<><h1>6 Bedroom Student Houses in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/6-bedroom-student-houses-in-oldfield-park-bath.png')} alt='6 Bedroom Student Houses in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_6_bedroom_student_houses_in_oldfield_park,_bath">Prices for 6 Bedroom Student Houses in Oldfield Park, Bath</a></li><li><a href = "#6_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive">6 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_6_bedroom_student_houses_in_oldfield_park,_bath">Cheap 6 Bedroom Student Houses in Oldfield Park, Bath</a></li><li><a href = "#6_bedroom_student_houses_in_oldfield_park,_bath__recently_added">6 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#6_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced">6 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__6_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 6 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#6_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector">6 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#6_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished">6 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_6_bedroom_student_houses_in_oldfield_park,_bath"> <h2>Prices for 6 Bedroom Student Houses in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£701 per month </td><td><button className = 'searchButton' title='View our 6 Bedroom Student Houses in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "6_bedroom_student_houses_in_oldfield_park,_bath__all_bills_inclusive"> <h2>6 Bedroom Student Houses in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple utility bills while trying to focus on your studies? <b>UniBills.com</b> has the perfect solution for you. By subscribing to an <b>all bills inclusive</b> service for your 6 bedroom student House in Oldfield Park, Bath, Somerset, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With this service, you no longer have to worry about managing various bills for water, electricity, gas, and internet. Instead, you can <b>concentrate on your studies</b> and have peace of mind knowing that all your bills are taken care of. Say goodbye to the stress of budgeting and tracking multiple bills, and say hello to a more streamlined and convenient living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student life.</p><a id = "cheap_6_bedroom_student_houses_in_oldfield_park,_bath"> <h2>Cheap 6 Bedroom Student Houses in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_houses_in_oldfield_park,_bath__recently_added"> <h2>6 Bedroom Student Houses in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "6_bedroom_student_houses_in_oldfield_park,_bath__recently_reduced"> <h2>6 Bedroom Student Houses in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__6_bedroom_houses_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 6 Bedroom Houses in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a spacious and comfortable 6 bedroom house in <b>Bath</b>? Look no further than our property portal, where you can easily find the perfect student accommodation in Oldfield Park, <b>Bath</b>, Somerset. Located close to both the University of <b>Bath</b> and <b>Bath</b> Spa University, our listings offer a variety of options to suit your needs. From modern and stylish houses to cozy and traditional properties, you are sure to find the ideal 6 bedroom house that fits your budget and preferences. Oldfield Park is a popular area for students, with its vibrant atmosphere and convenient amenities. Don't waste time searching endlessly, let our property portal streamline the process and help you find your dream student house in <b>Bath</b> today.</p><a id = "6_bedroom_student_houses_in_oldfield_park,_bath__private_rental_sector"> <h2>6 Bedroom Student Houses in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living arrangement in Bath, Somerset? Consider renting one of the fantastic 6 Bedroom Houses in Oldfield Park, Bath. These properties are ideal for students, large families, or groups of friends looking to live together. Many of these houses come <b>fully furnished</b>, allowing you to move in and start enjoying your new home right away. Additionally, some landlords may offer <b>bills included</b> in the rent, making budgeting easier for tenants. With plenty of room for everyone to have their personal space, shared living areas for socializing, and convenient access to local amenities, renting a 6 bedroom house in Oldfield Park is a great choice for those looking to live in the heart of Bath.</p><a id = "6_bedroom_student_houses_in_oldfield_park,_bath__fully_furnished"> <h2>6 Bedroom Student Houses in Oldfield Park, Bath - Fully Furnished</h2></a><p>Looking for a spacious and convenient living arrangement in Bath, Somerset? Look no further than fully furnished 6 Bedroom Houses in Oldfield Park. Situated in the vibrant city of Bath, these houses offer the perfect blend of comfort and style. With all six bedrooms fully furnished, including beds, closets, desks, and chairs, you can move in hassle-free and start enjoying your new space right away. In Oldfield Park, Bath, it is normal for student Houses to be fully furnished, making it the ideal choice for students or anyone looking for a ready-to-move-in option. The houses also boast modern kitchens, cozy living areas, and outdoor spaces to relax and unwind. Don't miss out on the opportunity to live in one of these fantastic properties in the heart of Bath.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is conveniently located just 1.5 <b>miles</b> southwest of <b>Bath city center</b>, making it a fantastic residential area for those looking to be close to all the amenities and attractions that the historic city has to offer. With its charming Victorian terraced houses and vibrant community, <b>Oldfield Park</b> provides a perfect balance of suburban tranquility and urban convenience. Residents can easily walk or cycle into <b>Bath city center</b> in around 30 minutes, while regular bus services also connect the two areas. From the Roman Baths and the Abbey to the bustling shopping streets and cultural venues, everything that Bath is known for is just a stone's throw away from <b>Oldfield Park</b>. Whether you're looking to enjoy a leisurely day out or a night on the town, living in <b>Oldfield Park</b> puts you right in the heart of all the action.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is a vibrant neighborhood located just a stone's throw away from the esteemed <b>University of Bath</b>. Situated just a few <b>miles</b> from the university campus, Oldfield Park offers a convenient location for students and staff alike. For those looking to commute to the university, there are several options available. <b>by foot</b>, it takes approximately 30-40 minutes to reach the campus, making it a pleasant walk for those who enjoy a bit of exercise. Alternatively, there is a frequent <b>bus route</b> that connects Oldfield Park to the university, providing a quick and easy transportation option. For those with a car, the journey to the <b>University of Bath</b> is a mere 10-minute drive, offering a convenient and efficient way to travel to and from campus. With its close proximity to the university and various transportation options, Oldfield Park is an ideal location for those looking to be near the heart of campus life.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is located just a stone's throw away from <b>Bath Spa University</b>, making it an ideal housing option for students looking for convenient accommodation. The university is approximately 1.5 <b>miles</b> away from Oldfield Park, making it easily accessible <b>by foot</b>, <b>by bus</b>, or <b>by car</b>. Students can either hop on the convenient <b>bus route</b> that connects Oldfield Park to the university campus, which takes just a few minutes, or enjoy a leisurely walk through the picturesque streets of Bath. For those who prefer driving, the journey <b>by car</b> is also quite short, with parking options available both at the university and in the surrounding area. With its close proximity to <b>Bath Spa University</b>, Oldfield Park offers a convenient and vibrant location for students to live and study.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for a 6 bedroom student house in Oldfield Park, Bath can be an exciting yet challenging process. With its convenient location close to the University of Bath and Bath Spa University, Oldfield Park is a popular choice for students. When searching for the perfect property, it's important to consider factors such as proximity to campus, amenities, and transport links. Additionally, ensuring that the house meets your specific needs in terms of size, facilities, and budget is crucial. It's also worth exploring the vibrant community atmosphere in Oldfield Park, with its bustling shops, cafes, and bars, making it a lively and social area for students. In conclusion, finding a 6 bedroom student house in Oldfield Park requires thorough research, patience, and careful consideration, but the rewards of living in such a dynamic and student-friendly neighborhood are well worth the effort[].</p></>)
};

export default BathOldfieldParkHouse6;