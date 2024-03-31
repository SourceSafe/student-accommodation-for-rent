
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


const  BathHouse = () => 
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

    return (<><h1>Student Houses in Bath</h1><p>We have listings for <b>Student Houses in Bath</b> for the academic year 2024.

Located in the picturesque city of Bath, <b>Student Houses in Bath</b> provide comfortable and convenient accommodation for students studying in the area. These houses offer a variety of amenities and are situated close to universities, shops, and public transport links, making them an ideal choice for students looking for a home away from home.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-houses-in-bath.png')} alt='Student Houses in Bath'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Houses in Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=House&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Houses in Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_houses_in_bath">Prices for Student Houses in Bath</a></li><li><a href = "#student_houses_in_bath__all_bills_inclusive">Student Houses in Bath - All Bills Inclusive</a></li><li><a href = "#prices_for_student_houses_in_bath__by_number_of_bedrooms">Prices for Student Houses in Bath - By Number of Bedrooms</a></li><li><a href = "#prices_for_student_houses_in_bath__by_student_location">Prices for Student Houses in Bath - By Student Location</a></li><li><a href = "#student_houses_in_bath__private_rental_houses">Student Houses in Bath - Private Rental Houses</a></li><li><a href = "#furnished_houses_inbath">Furnished Houses inBath</a></li><li><a href = "#bath_student_house_portal">Bath Student House Portal</a></li><li><a href = "#bath_student_houses_self_catering">Bath Student Houses Self Catering</a></li><li><a href = "#find_student_houses_close_to__bath_city_center">Find Student Houses close to  Bath City Center</a></li><li><a href = "#find_student_houses_near_the_universities">Find Student Houses near the Universities</a></li><li><a href = "#cheapest_student_houses_in_bath">Cheapest Student Houses in Bath</a></li><li><a href = "#student_houses_in_bath__recently_added">Student Houses in Bath - Recently Added</a></li><li><a href = "#student_houses_in_bath__recently_reduced">Student Houses in Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_houses_in_bath"> <h2>Prices for Student Houses in Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£641 per month </td><td><button className = 'searchButton tableButton' title='Student Houses in Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_houses_in_bath__all_bills_inclusive"> <h2>Student Houses in Bath - All Bills Inclusive</h2></a><p>Are you a student living in Bath and looking to simplify your accommodation expenses? Subscribe to an <b>all bills inclusive</b> service with <b>UniBills.com</b> and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. By opting for <b>all bills inclusive</b>, you can <b>concentrate on your studies</b> without worrying about managing multiple bills for utilities such as electricity, water, and internet. <b>UniBills.com</b> makes your student life easier by offering a convenient way to budget for your monthly expenses, making it easier to plan your finances. Say goodbye to the stress of keeping track of various bills and say hello to a more streamlined living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and start enjoying the benefits of an <b>all bills inclusive</b> service today.</p><a id = "prices_for_student_houses_in_bath__by_number_of_bedrooms"> <h2>Prices for Student Houses in Bath - By Number of Bedrooms</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>2 Bed House </td><td><button className = 'searchButton tableButton' title='2 Bed Houses' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-2-bedroom-houses' title  = 'View Key Statistics for 2 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£565 </td><td>£1183 </td><td>£742 </td><td>£131 </td><td>£275 </td><td>£172 </td></tr><tr><td>3 Bed House </td><td><button className = 'searchButton tableButton' title='3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-3-bedroom-houses' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£717 </td><td>£612 </td><td>£120 </td><td>£166 </td><td>£142 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton tableButton' title='4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-4-bedroom-houses' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£450 </td><td>£998 </td><td>£604 </td><td>£104 </td><td>£232 </td><td>£140 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton tableButton' title='5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-5-bedroom-houses' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£450 </td><td>£953 </td><td>£625 </td><td>£104 </td><td>£221 </td><td>£145 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton tableButton' title='6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-6-bedroom-houses' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£533 </td><td>£1127 </td><td>£686 </td><td>£123 </td><td>£262 </td><td>£159 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton tableButton' title='7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-7-bedroom-houses' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£810 </td><td>£667 </td><td>£127 </td><td>£188 </td><td>£155 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton tableButton' title='8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-8-bedroom-houses' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£953 </td><td>£674 </td><td>£127 </td><td>£221 </td><td>£156 </td></tr><tr><td>9 Bed House </td><td><button className = 'searchButton tableButton' title='9 Bed Houses' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-9-bedroom-houses' title  = 'View Key Statistics for 9 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£580 </td><td>£760 </td><td>£667 </td><td>£134 </td><td>£176 </td><td>£155 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton tableButton' title='10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-10-bedroom-houses' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£680 </td><td>£610 </td><td>£125 </td><td>£158 </td><td>£141 </td></tr></table></p><a id = "prices_for_student_houses_in_bath__by_student_location"> <h2>Prices for Student Houses in Bath - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-houses-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>437 </td><td>475 </td><td>1207 </td><td>647 </td><td>110 </td><td>280 </td><td>150 </td></tr></table></p><a id = "student_houses_in_bath__private_rental_houses"> <h2>Student Houses in Bath - Private Rental Houses</h2></a><p>If you are in search of the perfect private student house in Bath, look no further. Bath offers a range of private rental houses to suit your needs, whether you are looking for a <b>2 - 10 bedroom house</b> to share with friends or a cozy <b>studio apartment</b> just for yourself. Many of these properties come <b>fully furnished</b>, making your move-in process hassle-free. Additionally, some landlords offer <b>bills included</b> in the rent, taking the stress out of managing utilities. With a private rental house in Bath, you can enjoy the convenience of city living while having a comfortable and private space to call your own.</p><a id = "furnished_houses_inbath"> <h2>Furnished Houses inBath</h2></a><p>Here at Bath, all student houses are <b>fully furnished</b> to provide our students with a comfortable and convenient living environment. It is normal for student houses to be <b>fully furnished</b>, and we understand the importance of ensuring that our students have everything they need to feel at home. Each house comes equipped with essential furniture such as beds, desks, chairs, and storage units, allowing students to move in and start studying without the hassle of purchasing or transporting large items. Additionally, our <b>fully furnished</b> houses often include kitchen appliances, living room furniture, and even decorations to create a welcoming space where students can relax and socialize with roommates. By offering <b>fully furnished</b> accommodation, we aim to make the transition to student life as smooth as possible, so our students can focus on their studies and enjoy all that Bath has to offer.</p><a id = "bath_student_house_portal"> <h2>Bath Student House Portal</h2></a><p>Are you a student looking for the perfect house in Bath? Look no further! Our property portal specializes in helping students find their ideal accommodation in <b><b>Oldfield Park</b></b>, a vibrant and popular area among students from the <b><b>University of Bath</b></b> and <b><b>Bath Spa University</b></b>. <b><b>Oldfield Park</b></b> is conveniently located just a short distance from both campuses, making it a highly sought-after location for student housing. With a wide range of properties available, from cozy flats to spacious houses, you're sure to find a place that suits your budget and preferences. Take the stress out of searching for your student house and let us help you find the perfect home away from home in Bath's popular <b><b>Oldfield Park</b></b> area.</p><a id = "bath_student_houses_self_catering"> <h2>Bath Student Houses Self Catering</h2></a><p>Living in self-catering student houses in Bath offers a fantastic opportunity for independence and a taste of real student life. With amenities like fully equipped kitchens, spacious bedrooms, and communal living areas, students can enjoy a comfortable and homely environment while studying in this beautiful city. The flexibility of self-catering accommodation allows students to cook their own meals, giving them the freedom to eat what they like, when they like, and within their budget. Moreover, living with housemates can foster a sense of community and provide valuable social experiences. In addition, self-catering student houses in Bath are often located close to the city center and universities, making it convenient for students to access everything they need easily. Overall, living in self-catering student houses in Bath can be a memorable and enriching experience for any student looking to immerse themselves in student life and create lasting memories[].</p><a id = "find_student_houses_close_to__bath_city_center"> <h2>Find Student Houses close to  Bath City Center</h2></a><p>Looking for student accommodation in the vibrant city of <b>Bath</b>? Look no further than our portal, Student Accommodation For Rent, to find the best student houses near <b>Bath</b> city center. Located just a stone's throw away from the bustling city center, these properties are perfect for students looking to immerse themselves in the cultural and historical wonders of <b>Bath</b>. From the charming streets of <b>Oldfield Park</b> to the iconic landmarks just a few <b>miles</b> away, our portal offers a wide selection of student housing options to suit every budget and preference.</p><a id = "find_student_houses_near_the_universities"> <h2>Find Student Houses near the Universities</h2></a><p>If you are a student looking to find convenient and affordable housing near the Universities in Bath, look no further than <b>Oldfield Park</b>. This vibrant and student-friendly neighborhood is ideally located close to both the <b>University of Bath</b> and <b>Bath Spa University</b>. Situated just a few <b>miles</b> away from the campuses, students can easily reach their classes <b>by foot</b>, <b>by bus</b>, or <b>by car</b>. <b>Oldfield Park</b> offers a variety of housing options, including shared houses, studio apartments, and student halls, catering to different preferences and budgets. With its lively atmosphere, amenities, and transport links, <b>Oldfield Park</b> is the perfect place for students to live during their time at university.</p><a id = "cheapest_student_houses_in_bath"> <h2>Cheapest Student Houses in Bath</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_bath__recently_added"> <h2>Student Houses in Bath - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_bath__recently_reduced"> <h2>Student Houses in Bath - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for student houses in Bath can be an exciting yet challenging experience. With a diverse range of properties available, it's important to carefully consider your budget, location preferences, and desired amenities before making a decision. When searching for the perfect student house, be sure to explore all options, from traditional terraced houses to modern purpose-built accommodations. Additionally, considering factors such as proximity to campus, transportation links, and local amenities can greatly enhance your living experience. After thorough research and viewings, it's essential to carefully review and compare all potential options to ensure you make an informed decision. Ultimately, finding the ideal student house in Bath requires patience, thorough planning, and attention to detail. By carefully considering your needs and preferences, you can find a comfortable and convenient living space to enhance your university experience[].</p></>)
};

export default BathHouse;