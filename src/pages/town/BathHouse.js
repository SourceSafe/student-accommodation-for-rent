
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


const  BathHouse = () => 
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

    return (<><h1>Student Houses in Bath</h1><p>We have listings for <b>Student Houses in Bath</b> for the academic year 2024.

<b>Student Houses in Bath</b> are a popular choice among students looking for accommodation in the city. These houses offer a convenient and affordable living option, often located close to universities and amenities. Living in a Student House in Bath provides a great opportunity to meet fellow students and experience student life in this vibrant city.</p><div style = {{display:'flex', flexDirection:'row'}}>{isDesktop && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-houses-in-bath.png')} alt='Student Houses in Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Houses in Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=House&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Houses in Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_houses_in_bath_pp/pm">Prices for Student Houses in Bath pp/pm</a></li><li><a href = "#student_houses_in_bath__all_bills_inclusive">Student Houses in Bath - All Bills Inclusive</a></li><li><a href = "#prices_for_student_houses_in_bath__by_number_of_bedrooms_pp/pm">Prices for Student Houses in Bath - By Number of Bedrooms pp/pm</a></li><li><a href = "#prices_for_student_houses_in_bath__by_student_location_pp/pm">Prices for Student Houses in Bath - By Student Location pp/pm</a></li><li><a href = "#student_houses_in_bath__private_rental_houses">Student Houses in Bath - Private Rental Houses</a></li><li><a href = "#furnished_houses_in_bath">Furnished Houses in Bath</a></li><li><a href = "#bath_student_house_portal">Bath Student House Portal</a></li><li><a href = "#bath_student_houses_self_catering">Bath Student Houses Self Catering</a></li><li><a href = "#find_student_houses_close_to__bath_city_center">Find Student Houses close to  Bath City Center</a></li><li><a href = "#find_student_houses_near_the_universities">Find Student Houses near the Universities</a></li><li><a href = "#cheapest_student_houses_in_bath">Cheapest Student Houses in Bath</a></li><li><a href = "#student_houses_in_bath__recently_added">Student Houses in Bath - Recently Added</a></li><li><a href = "#student_houses_in_bath__recently_reduced">Student Houses in Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_houses_in_bath_pp/pm"> <h2>Prices for Student Houses in Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£641 per month </td><td><button className = 'searchButton tableButton' title='Student Houses in Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_houses_in_bath__all_bills_inclusive"> <h2>Student Houses in Bath - All Bills Inclusive</h2></a><p>Moving into a new student house in Bath can be an exciting but also overwhelming experience, especially when it comes to managing bills and expenses. That's where the <b>all bills inclusive</b> service from <b>UniBills.com</b> comes in handy. By subscribing to their service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers all your bills in one easy payment. This allows you to <b>concentrate on your studies</b> and social life without the stress of budgeting for different utilities each month. With <b>UniBills.com</b>, you can rest assured that your accommodation costs are taken care of, giving you peace of mind and more time to focus on other aspects of student life. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student experience in Bath a smooth and enjoyable one.</p><a id = "prices_for_student_houses_in_bath__by_number_of_bedrooms_pp/pm"> <h2>Prices for Student Houses in Bath - By Number of Bedrooms pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>2 Bed House </td><td><button className = 'searchButton tableButton' title='2 Bed Houses' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-2-bedroom-houses' title  = 'View Key Statistics for 2 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£565 </td><td>£1183 </td><td>£742 </td><td>£131 </td><td>£275 </td><td>£172 </td></tr><tr><td>3 Bed House </td><td><button className = 'searchButton tableButton' title='3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-3-bedroom-houses' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£717 </td><td>£612 </td><td>£120 </td><td>£166 </td><td>£142 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton tableButton' title='4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-4-bedroom-houses' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£450 </td><td>£998 </td><td>£604 </td><td>£104 </td><td>£232 </td><td>£140 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton tableButton' title='5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-5-bedroom-houses' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£450 </td><td>£953 </td><td>£625 </td><td>£104 </td><td>£221 </td><td>£145 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton tableButton' title='6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-6-bedroom-houses' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£533 </td><td>£1127 </td><td>£686 </td><td>£123 </td><td>£262 </td><td>£159 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton tableButton' title='7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-7-bedroom-houses' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£810 </td><td>£667 </td><td>£127 </td><td>£188 </td><td>£155 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton tableButton' title='8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-8-bedroom-houses' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£953 </td><td>£674 </td><td>£127 </td><td>£221 </td><td>£156 </td></tr><tr><td>9 Bed House </td><td><button className = 'searchButton tableButton' title='9 Bed Houses' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-9-bedroom-houses' title  = 'View Key Statistics for 9 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£580 </td><td>£760 </td><td>£667 </td><td>£134 </td><td>£176 </td><td>£155 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton tableButton' title='10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-10-bedroom-houses' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£680 </td><td>£610 </td><td>£125 </td><td>£158 </td><td>£141 </td></tr></table></p><a id = "prices_for_student_houses_in_bath__by_student_location_pp/pm"> <h2>Prices for Student Houses in Bath - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-houses-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>437 </td><td>475 </td><td>1207 </td><td>647 </td><td>110 </td><td>280 </td><td>150 </td></tr></table></p><a id = "student_houses_in_bath__private_rental_houses"> <h2>Student Houses in Bath - Private Rental Houses</h2></a><p>Looking for private rental houses in Bath? Look no further! Whether you're a student searching for <b>private student houses</b> or a family looking for a <b>2 - 10 bedroom house</b>, Bath has something for everyone. You can also find a variety of options, from a cozy <b>studio apartment</b> to spacious homes, all <b>fully furnished</b> and ready to move in. One of the perks of renting a private house in Bath is the option to have <b>bills included</b> in your rent, making budgeting easier.</p><a id = "furnished_houses_in_bath"> <h2>Furnished Houses in Bath</h2></a><p>At the University of Bath, we understand that students value comfort and convenience during their studies. That is why all of our student Houses are <b>fully furnished</b>, ensuring that you have everything you need to feel at home right away. From cozy beds and spacious desks to modern kitchen appliances and comfortable seating areas, we have thought of every detail to make your living experience enjoyable. It is normal for student houses to be <b>fully furnished</b>, and we strive to go above and beyond to provide our students with quality furnishings that meet their needs. So, rest assured that when you choose to live in one of our student houses, you can focus on your studies and social life without worrying about furnishing your living space.</p><a id = "bath_student_house_portal"> <h2>Bath Student House Portal</h2></a><p>Are you a student looking for the perfect house in Bath? Look no further! Our property portal specializes in finding student accommodation in the highly sought-after area of <b><b>Oldfield Park</b></b>, just a stone's throw away from the <b><b>University of Bath</b></b> and <b><b>Bath Spa University</b></b>. With a wide range of options to choose from, including cozy flats and spacious houses, we are confident that you will find your ideal student home with us. <b><b>Oldfield Park</b></b> is known for its vibrant community atmosphere, student-friendly amenities, and convenient location close to campus and the city center. Don't miss out on the opportunity to secure your student house in Bath with our easy-to-use portal.</p><a id = "bath_student_houses_self_catering"> <h2>Bath Student Houses Self Catering</h2></a><p>Living in self-catering student houses in Bath offers a unique and enriching experience for students studying in this picturesque city. With a vibrant atmosphere and a rich history, Bath provides the perfect backdrop for your academic journey. Self-catering accommodation gives you the independence to manage your own meals and schedule, allowing you to tailor your living experience according to your preferences. These student houses are typically well-equipped with modern amenities, providing a comfortable and conducive environment for studying and socializing. Bath is home to a diverse community of students from various backgrounds, creating a multicultural and inclusive atmosphere. Additionally, living in self-catering student houses allows you to develop essential life skills such as cooking, budgeting, and time management. Explore the stunning architecture, scenic countryside, and cultural attractions that Bath has to offer, all while enjoying the comfort and convenience of self-catering student accommodation. Experience the best of student life in Bath with the flexibility and freedom that self-catering student houses provide[].</p><a id = "find_student_houses_close_to__bath_city_center"> <h2>Find Student Houses close to  Bath City Center</h2></a><p>If you're a student searching for accommodation near <b>Bath</b> city center, look no further than our portal Student Accommodation For Rent. Located in the picturesque city of <b>Bath</b>, our listings include a variety of houses in sought-after areas like <b>Oldfield Park</b>, just a few <b>miles</b> away from the bustling city center. Whether you prefer a cozy room in a shared house or a spacious apartment to yourself, our platform offers options to suit every preference and budget. Don't waste time scrolling through numerous websites - trust our portal to simplify your search and help you find the perfect student accommodation in <b>Bath</b>.</p><a id = "find_student_houses_near_the_universities"> <h2>Find Student Houses near the Universities</h2></a><p>Looking for student housing near the universities in Bath, England? <b>Oldfield Park</b> is a popular area located just a few <b>miles</b> away from both the <b>University of Bath</b> and <b>Bath Spa University</b>. Students can easily reach the campuses <b>by foot</b>, bus, or car from this convenient location. Living in <b>Oldfield Park</b> offers a vibrant community atmosphere with plenty of local amenities such as grocery stores, cafes, and restaurants. The area is well-connected with public transportation, making it easy for students to explore the city and beyond. With a variety of affordable housing options available, students can find the perfect place to call home while studying at the prestigious universities in Bath.</p><a id = "cheapest_student_houses_in_bath"> <h2>Cheapest Student Houses in Bath</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_bath__recently_added"> <h2>Student Houses in Bath - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_bath__recently_reduced"> <h2>Student Houses in Bath - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>[After searching for student houses in Bath, it is clear that the city offers a variety of options to suit different preferences and budgets. From cozy flats in the city center to spacious houses on the outskirts, students are sure to find the perfect accommodation that meets their needs. Factors to consider when looking for a student house in Bath include location, price, proximity to the university, and transportation options. Additionally, it is important to inspect the property thoroughly, ask about any hidden costs, and ensure that all necessary amenities are provided. By taking these steps, students can find a comfortable and convenient living space to enhance their university experience in Bath. In conclusion, the process of seeking student housing in Bath can be time-consuming but ultimately rewarding when a suitable property is secured. With careful research and consideration, students can find a place to call home during their time in this charming city.</p></>)
};

export default BathHouse;