
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


const  BathStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Bath</h1><p>We have listings for <b>Studio Apartments for Students in Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Bath</b> offer convenient and comfortable living arrangements for students studying in the area. These apartments are typically designed to meet the needs of students, with easy access to amenities and transportation options. Students in Bath can enjoy a focused and independent living environment while being close to the university and city center.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-bath.png')} alt='Studio Apartments for Students in Bath'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}> View Available Properties in our Portal</h2><ViewPortal description=" Studio Apartments for Students in Bath" portalLink="./" > </ViewPortal><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bath">Prices for Studio Apartments for Students in Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath__all_bills_inclusive">Studio Apartments for Students in Bath - All Bills Inclusive</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_bath__by_number_of_bedrooms">Prices for Studio Apartments for Students in Bath - By Number of Bedrooms</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_bath__by_student_location">Prices for Studio Apartments for Students in Bath - By Student Location</a></li><li><a href = "#studio_apartments_for_students_in_bath__private_rental_houses">Studio Apartments for Students in Bath - Private Rental Houses</a></li><li><a href = "#furnished_studios_inbath">Furnished Studios inBath</a></li><li><a href = "#bath_student_studio_portal">Bath Student Studio Portal</a></li><li><a href = "#bath_student_studios_self_catering">Bath Student Studios Self Catering</a></li><li><a href = "#find_student_studios_close_to__bath_city_center">Find Student Studios close to  Bath City Center</a></li><li><a href = "#find_student_studios_near_the_universities">Find Student Studios near the Universities</a></li><li><a href = "#cheapest_studio_apartments_for_students_in_bath">Cheapest Studio Apartments for Students in Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath__recently_added">Studio Apartments for Students in Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bath__recently_reduced">Studio Apartments for Students in Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bath"> <h2>Prices for Studio Apartments for Students in Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1224 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your student studio in Bath has never been easier with <b>UniBills.com</b>. By opting for an <b>all bills inclusive</b> package, you can <b>concentrate on your studies</b> without the added stress of managing multiple utility bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers your electricity, water, heating, internet, and more in one convenient payment. This not only saves you time but also ensures that you have a predictable monthly budget, allowing you to plan your expenses more effectively. Say goodbye to the headache of dealing with different providers and unpredictable bills – get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience of an <b>all bills inclusive</b> service for your student studio in Bath.</p><a id = "prices_for_studio_apartments_for_students_in_bath__by_number_of_bedrooms"> <h2>Prices for Studio Apartments for Students in Bath - By Number of Bedrooms</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-1-bedroom-studios' title  = 'View Key Statistics for Studio Apartments'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£795 </td><td>£1690 </td><td>£1224 </td><td>£184 </td><td>£393 </td><td>£284 </td></tr></table></p><a id = "prices_for_studio_apartments_for_students_in_bath__by_student_location"> <h2>Prices for Studio Apartments for Students in Bath - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'studio-apartments-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>23 </td><td>795 </td><td>1690 </td><td>1250 </td><td>184 </td><td>393 </td><td>290 </td></tr></table></p><a id = "studio_apartments_for_students_in_bath__private_rental_houses"> <h2>Studio Apartments for Students in Bath - Private Rental Houses</h2></a><p>Are you looking for <b>private student houses</b> in Bath? Look no further! Our selection of 2 to 10 bedroom houses and <b>studio apartment</b>s offer the perfect student accommodation. With <b>bills included</b> and <b>fully furnished</b> options, you can enjoy a hassle-free living experience. Whether you prefer a cozy studio or a spacious house to share with friends, we have the perfect property for you.</p><a id = "furnished_studios_inbath"> <h2>Furnished Studios inBath</h2></a><p>When looking for student accommodation in Bath, you'll be pleased to know that all student Studios are <b>fully furnished</b>. This means that you won't have to worry about buying and transporting large pieces of furniture, making the moving process much simpler and more convenient. In Bath, it is normal for student houses to be <b>fully furnished</b>, as landlords understand the needs of students who are often moving from different cities or countries. This allows you to focus on settling into your new home and university life without the added stress of furnishing your living space. From comfortable beds and study desks to spacious wardrobes and cozy sofas, you can expect everything you need for a comfortable living experience in Bath's student Studios. So, rest assured that you'll find a cozy and well-equipped space to call home while studying in this beautiful city.</p><a id = "bath_student_studio_portal"> <h2>Bath Student Studio Portal</h2></a><p>Are you a student looking for the perfect studio in Bath? Look no further than our property portal, where we specialize in helping students find their ideal accommodation. Bath is a vibrant city known for its stunning architecture, rich history, and top-notch universities. Whether you're studying at the <b><b>University of Bath</b></b> or <b><b>Bath Spa University</b></b>, our portal offers a wide range of options in the sought-after area of <b><b>Oldfield Park</b></b>. This quaint neighborhood is popular among students for its lively atmosphere, convenient amenities, and easy access to campus. With our user-friendly search filters, you can easily narrow down your options and find the perfect student studio that suits your needs and budget.</p><a id = "bath_student_studios_self_catering"> <h2>Bath Student Studios Self Catering</h2></a><p>Living in self catering student studios in Bath offers the perfect blend of independence and convenience for students looking to enhance their university experience. With modern, well-designed living spaces that cater to your every need, these studios provide a comfortable and stylish environment for studying and relaxing. Whether you're cooking up a storm in the well-equipped kitchenette or unwinding in your own private living area, you'll have everything you need right at your fingertips[]. Being able to manage your own schedule and meals allows for greater flexibility and freedom, enabling you to make the most of your time in this historic city. Additionally, the close proximity to the University of Bath and local amenities makes living in these studios extremely convenient[]. With a vibrant community of like-minded students around you, you'll have the opportunity to socialize and make lifelong memories while still having the privacy of your own space. Living in self catering student studios in Bath truly offers the best of both worlds - a comfortable, modern living environment and the independence to make your university experience truly unforgettable[].</p><a id = "find_student_studios_close_to__bath_city_center"> <h2>Find Student Studios close to  Bath City Center</h2></a><p>Looking for student accommodation in <b>Bath</b> city center? Look no further than our portal, Student Accommodation For Rent. With our user-friendly interface, you can easily browse through a wide selection of student studios near <b>Bath</b> city center. Whether you prefer the bustling atmosphere of <b>Bath</b> city center or the charming community vibe of <b>Oldfield Park</b>, our portal has options to suit your preferences. Many of our available properties are conveniently located within a few <b>miles</b> of local universities, making commuting a breeze.</p><a id = "find_student_studios_near_the_universities"> <h2>Find Student Studios near the Universities</h2></a><p>Find student studios near the universities in Bath, such as <b>Oldfield Park</b>, which is a popular area for students attending the <b>University of Bath</b> and <b>Bath Spa University</b>. Located just a few <b>miles</b> away from both campuses, students can easily reach their classes either <b>by foot</b>, <b>by bus</b>, or <b>by car</b>. Living in <b>Oldfield Park</b> provides students with a vibrant community feel while still being close to the city center. With a variety of amenities nearby, including shops, cafes, and parks, students can enjoy a balanced lifestyle while focusing on their studies. Finding a student studio in this area ensures convenience and accessibility to both universities, making it a perfect choice for student accommodation.</p><a id = "cheapest_studio_apartments_for_students_in_bath"> <h2>Cheapest Studio Apartments for Students in Bath</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath__recently_added"> <h2>Studio Apartments for Students in Bath - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath__recently_reduced"> <h2>Studio Apartments for Students in Bath - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, searching for studio apartments for students in Bath can be both exciting and daunting. With a variety of options to choose from, including locations near universities, amenities like Wi-Fi and laundry facilities, and diverse price ranges, students have a lot to consider. However, by prioritizing factors such as budget, proximity to campus, and desired amenities, students can find the perfect studio apartment to suit their needs. Furthermore, exploring different websites and contacting local agents can help facilitate the apartment hunting process. Ultimately, Bath offers a vibrant student community with plenty of accommodation options, making it a great place for students to find their ideal studio apartment. In conclusion, with careful planning and research, students can navigate the competitive housing market in Bath and secure a comfortable and convenient living space during their academic pursuits.</p></>)
};

export default BathStudio;