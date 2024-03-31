
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


const  BathOldfieldParkFlat5 = () => 
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

    return (<><h1>5 Bedroom Student Flats in Oldfield Park, Bath</h1><p>We have listings for <b>5 Bedroom Student Flats in Oldfield Park, Bath</b> for the academic year 2024.

<b>5 Bedroom Student Flats in Oldfield Park, Bath</b> are highly popular among students due to their spaciousness and proximity to local amenities and transportation links. These flats offer a comfortable living environment for students looking to live together while studying in Bath. With multiple bedrooms, these flats provide a great opportunity for students to share living expenses and create a communal living space.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/5-bedroom-student-flats-in-oldfield-park-bath.png')} alt='5 Bedroom Student Flats in Oldfield Park, Bath'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='5 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=REGION^71108&type=Flat&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>5 Bedroom Student Flats in Oldfield Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_5_bedroom_student_flats_in_oldfield_park,_bath">Prices for 5 Bedroom Student Flats in Oldfield Park, Bath</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive">5 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_5_bedroom_student_flats_in_oldfield_park,_bath">Cheap 5 Bedroom Student Flats in Oldfield Park, Bath</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__recently_added">5 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced">5 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__5_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath">Student Accommodation Portal - 5 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector">5 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#5_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished">5 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_oldfield_park_to_the_city_center">How close is Oldfield Park to the City Center</a></li><li><a href = "#how_close_is_oldfield_park_to_the_university_of_bath">How close is Oldfield Park to the University of Bath</a></li><li><a href = "#how_close_is_oldfield_park_to_the_bath_spa_university">How close is Oldfield Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_5_bedroom_student_flats_in_oldfield_park,_bath"> <h2>Prices for 5 Bedroom Student Flats in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£715 per month </td><td><button className = 'searchButton tableButton' title='5 Bedroom Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__all_bills_inclusive"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a convenient and stress-free way to manage your accommodation expenses? Consider subscribing to an <b>all bills inclusive</b> service for your 5 bedroom student flat in Oldfield Park, Bath, Somerset. <b>UniBills.com</b> offers a comprehensive solution that covers all your utility bills, including electricity, water, gas, and internet, allowing you to <b>concentrate on your studies</b> without worrying about monthly expenses. By opting for the <b>all bills inclusive</b> option provided by <b>UniBills.com</b>, you can enjoy the hassle-free benefits of having everything taken care of for you. Say goodbye to the hassle of coordinating multiple bill payments and enjoy the convenience of a single, fixed monthly payment. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience more enjoyable and stress-free.</p><a id = "cheap_5_bedroom_student_flats_in_oldfield_park,_bath"> <h2>Cheap 5 Bedroom Student Flats in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__recently_added"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__recently_reduced"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__5_bedroom_flats_in_oldfield_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 5 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a 5-bedroom flat in Oldfield Park, <b>Bath</b>, Somerset? Look no further than our property portal! We specialize in connecting students with spacious and comfortable accommodations near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our listings feature a variety of options, including 5-bedroom flats that are perfect for sharing with friends. Located in the vibrant and student-friendly neighborhood of Oldfield Park, you'll be just a short distance away from campus, local shops, restaurants, and transportation options. With our easy-to-use search filters, finding the perfect 5-bedroom flat to suit your needs and budget is quick and hassle-free.</p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__private_rental_sector"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and convenient living arrangement in Bath, Somerset? Look no further than the 5 Bedroom Flats in Oldfield Park, Bath. These properties are ideal for students or professionals looking to share a home with friends or colleagues. With <b>bills included</b> in the rent, you can rest easy knowing that your monthly expenses are taken care of. Additionally, these flats come <b>fully furnished</b>, making your move-in process a breeze. Enjoy the comfort and convenience of living in a well-equipped and centrally located 5 Bedroom Flat in Oldfield Park, Bath.</p><a id = "5_bedroom_student_flats_in_oldfield_park,_bath__fully_furnished"> <h2>5 Bedroom Student Flats in Oldfield Park, Bath - Fully Furnished</h2></a><p>If you are searching for a spacious and convenient living arrangement in Oldfield Park, Bath, Somerset, fully furnished 5 Bedroom Flats are a fantastic option to consider. These flats not only offer ample space for a large family or group of individuals but also come fully equipped with all the essential furniture and amenities needed for a comfortable stay. In the bustling student city of Bath, it is normal for student flats to be fully furnished to cater to the needs of students who are looking for hassle-free accommodation. With five bedrooms, these flats provide plenty of room for each resident to have their own space while still enjoying the communal areas for socializing and unwinding. Additionally, the Oldfield Park area offers a vibrant community atmosphere, with various shops, cafes, and green spaces nearby, making it a delightful place to call home. Whether you are a student looking for a convenient living situation or a family seeking a spacious and well-equipped residence, <b>fully furnished 5 Bedroom Flats in Oldfield Park, Bath, Somerset, Bath</b>, are a great choice for comfortable and stylish living.</p><a id = "how_close_is_oldfield_park_to_the_city_center"> <h2>How close is Oldfield Park to the City Center</h2></a><p><b>Oldfield Park</b> is a charming suburb located just a short distance from <b>Bath city center</b>. Situated approximately 1.5 <b>miles</b> away, this vibrant area offers a convenient and accessible location for those looking to explore the historical attractions, cultural landmarks, and bustling shopping streets of Bath. With excellent transport links, including regular bus services and a train station, residents and visitors alike can easily travel between <b>Oldfield Park</b> and the city center in just a few minutes. Whether you fancy a leisurely stroll along the picturesque River Avon, a visit to the iconic Roman Baths, or a spot of retail therapy in the many boutique shops, cafes, and restaurants, <b>Oldfield Park</b> provides the perfect base for experiencing all that Bath has to offer.</p><a id = "how_close_is_oldfield_park_to_the_university_of_bath"> <h2>How close is Oldfield Park to the University of Bath</h2></a><p>Oldfield Park is incredibly close to the <b>University of Bath</b>, making it an ideal location for students. The university is just a few <b>miles</b> away, making it easily accessible <b>by foot</b>, bus, and car. If you prefer to walk, the journey from Oldfield Park to the <b>University of Bath</b> takes around 30 minutes, providing a scenic route through the charming streets of Bath. Alternatively, there is a convenient <b>bus route</b> that connects Oldfield Park directly to the university campus, with regular services running throughout the day. For those who prefer to drive, the journey <b>by car</b> typically takes less than 10 minutes, making it a quick and convenient option for commuters. With its close proximity to the <b>University of Bath</b> and excellent transportation links, Oldfield Park offers a perfect location for students looking for a convenient and easily accessible place to call home.</p><a id = "how_close_is_oldfield_park_to_the_bath_spa_university"> <h2>How close is Oldfield Park to the Bath Spa University</h2></a><p>Oldfield Park is conveniently located near <b>Bath Spa University</b>, only a few <b>miles</b> away from the campus. For those looking to commute to the university, there are several transportation options available. <b>by foot</b>, the distance between Oldfield Park and <b>Bath Spa University</b> is around 1.5 <b>miles</b>, making it a manageable walk for students who enjoy a stroll. The <b>bus route</b> connecting Oldfield Park to the university is also well-established, providing a quick and convenient mode of transportation for those who prefer not to walk. If driving is more your style, the journey <b>by car</b> typically takes around 10 minutes, depending on traffic conditions. Overall, Oldfield Park's proximity to <b>Bath Spa University</b> offers students a variety of commuting choices to suit their preferences and schedules.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, searching for 5-bedroom student flats in the vibrant neighborhood of Oldfield Park, Bath offers a variety of options for students looking to live together in a convenient and lively area. With its close proximity to the University of Bath and Bath Spa University, as well as the abundance of local amenities such as shops, restaurants, and cafes, Oldfield Park provides a perfect balance between academics and social life. Additionally, the picturesque surroundings and easy access to public transportation make it an ideal location for students seeking both convenience and a sense of community. In conclusion, living in a 5-bedroom student flat in Oldfield Park, Bath offers a unique and enriching experience that combines the comfort of shared living spaces with the excitement of a bustling neighborhood, making it a sought-after choice for students seeking a well-rounded university lifestyle.</p></>)
};

export default BathOldfieldParkFlat5;