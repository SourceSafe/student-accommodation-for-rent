
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


const  BathOldfieldParkStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Oldfield Park, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Oldfield Park, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Oldfield Park, Bath</b> offer a convenient and cozy living space for students studying in Bath. These apartments are typically furnished and equipped with the necessary amenities to accommodate a student's lifestyle, providing a conducive environment for studying and relaxation. Located in the charming area of Oldfield Park, students can enjoy easy access to local shops, cafes, and public transportation options, making it a popular choice for student accommodation in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-oldfield-park-bath.png')} alt='Studio Apartments for Students in Oldfield Park, Bath'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}> View Available Properties in our Portal</h2><ViewPortal description=" Studio Apartments for Students in Oldfield Park, Bath" portalLink="./" > </ViewPortal><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_oldfield_park,_bath">Prices for Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive">Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_oldfield_park,_bath">Cheap Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_added">Studio Apartments for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced">Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__private_rental_sector">Studio Apartments for Students in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__fully_furnished">Studio Apartments for Students in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Prices for Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a hassle-free living experience in a 1 bedroom studio in Oldfield Park, Bath, Somerset? Look no further! Subscribe to an <b>all bills inclusive</b> service with <b>UniBills.com</b> and enjoy the convenience of having all your bills taken care of in one simple payment. By opting for this service, you can free up your time and <b>concentrate on your studies</b> without the stress of managing multiple bills. <b>UniBills.com</b> offers a seamless and stress-free living experience, allowing you to live comfortably without the burden of dealing with utility providers. Say goodbye to the paperwork and endless phone calls and embrace the ease of the all-inclusive option provided by <b>UniBills.com</b>. Don't hesitate, get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Cheap Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_added"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a cozy and convenient 1 Bedroom Studio in Oldfield Park, <b>Bath</b>, Somerset? Our property portal is here to help! Located near the prestigious University of <b>Bath</b> and <b>Bath</b> Spa University, our listings offer a variety of <b>student Studios</b> perfect for those seeking a comfortable and stylish living space. Oldfield Park is a vibrant and bustling area with plenty of amenities, making it an ideal location for students. Whether you prefer a modern studio or a more traditional living space, our portal has options to suit your needs. Don't miss out on the opportunity to find your perfect 1 Bedroom Studio in the charming city of <b>Bath</b> through our easy-to-navigate website.</p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for a cozy and convenient place to rent in Oldfield Park, Bath, Somerset, Bath? Look no further than the 1 Bedroom Studios in this charming area. These studios offer the perfect blend of comfort and convenience with <b>bills included</b> in the rent, making budgeting a breeze. Each unit comes <b>fully furnished</b>, saving you the time and hassle of purchasing and moving furniture. Located in a vibrant neighborhood with easy access to local amenities and transport links, these studios are ideal for students and young professionals looking for a hassle-free living experience. Don't miss out on the opportunity to make one of these 1 Bedroom Studios your new home in the heart of Bath.</p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__fully_furnished"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Fully Furnished</h2></a><p>Experience the convenience and comfort of <b>fully furnished 1 Bedroom Studios in Oldfield Park, Bath, Somerset, Bath</b>. These charming residences are designed for modern living with sleek furniture and all the necessary amenities for a stress-free stay. Located in the heart of Oldfield Park, these studios offer easy access to local shops, cafes, and transport links. Whether you are a student looking for a cozy retreat or a professional seeking a stylish home away from home, these studios provide the perfect solution. In Bath, it is normal for student Studios to be fully furnished, allowing you to move in and instantly feel at ease. Embrace the relaxed lifestyle of Bath and make the most of your time in this beautiful city with a fully furnished 1 Bedroom Studio in Oldfield Park.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is conveniently situated just a stone's throw away from <b>Bath city center</b>, being merely 1.5 <b>miles</b> away from the bustling heart of this historic city. This close proximity makes <b>Oldfield Park</b> an ideal location for those seeking the charm of a residential neighborhood while still being within easy reach of all the amenities and attractions that Bath has to offer. With its charming Victorian terraced houses, quaint cafes, and friendly community atmosphere, <b>Oldfield Park</b> provides residents with a peaceful retreat from the hustle and bustle of city life, while still being just a short distance from the renowned landmarks, thermal baths, and shopping options in <b>Bath city center</b>. Whether you prefer to walk, cycle, or take a short bus ride, the journey from <b>Oldfield Park</b> to <b>Bath city center</b> is a pleasant and convenient one, allowing you to enjoy the best of both worlds - the tranquility of a residential neighborhood and the vibrancy of a bustling city center.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is an ideal location for students attending the <b>University of Bath</b>, as it is situated just a stone's throw away from the campus. In fact, Oldfield Park is only 1.5 <b>miles</b> away from the <b>University of Bath</b>, making it easily accessible for students to commute to their classes. If you prefer walking, you can reach the university in around 30 minutes <b>by foot</b> from Oldfield Park. Additionally, there is a convenient <b>bus route</b> that runs between Oldfield Park and the university, providing a quick and efficient way to travel between the two locations. The bus journey takes only about 10-15 minutes, offering students a hassle-free way to get to campus. For those who prefer driving, the journey <b>by car</b> takes approximately 5-10 minutes, depending on traffic. With its close proximity and various transportation options, Oldfield Park is a popular choice for students looking for a convenient and well-connected location near the <b>University of Bath</b>.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is located just a stone's throw away from <b>Bath Spa University</b>, with the university campus being less than 2 <b>miles</b> away. Students can easily reach the university <b>by foot</b>, as it is only a 30-minute walk through the picturesque city of Bath. Alternatively, there are frequent bus services that connect Oldfield Park to <b>Bath Spa University</b>, making the journey quick and convenient for those who prefer public transportation. For those with their own vehicles, the university is easily accessible <b>by car</b>, with a short journey of around 10 minutes. Overall, Oldfield Park's close proximity to <b>Bath Spa University</b> makes it an ideal location for students looking for a convenient and well-connected place to live during their studies.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, looking for studio apartments for students in Oldfield Park, Bath can be a rewarding experience. With its convenient location close to the University of Bath and local amenities, Oldfield Park offers a vibrant and student-friendly atmosphere. Studio apartments provide a cozy and independent living space ideal for focused study and a tranquil retreat from the bustling university life. The variety of studio apartments available cater to different preferences and budgets, making it easy to find the perfect fit for any student. In conclusion, living in a studio apartment in Oldfield Park offers a unique blend of comfort, convenience, and community, creating a memorable and enriching student experience.</p></>)
};

export default BathOldfieldParkStudio1;