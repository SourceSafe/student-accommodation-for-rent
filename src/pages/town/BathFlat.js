
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


const  BathFlat = () => 
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

    return (<><h1>Student Flats in Bath</h1><p>We have listings for <b>Student Flats in Bath</b> for the academic year 2024. <b>Student Flats in Bath</b> offer a convenient and affordable housing option for students studying in the area. These flats are located in close proximity to universities and provide a supportive community for students living away from home.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-flats-in-bath.png')} alt='Student Flats in Bath'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Flats in Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=Flat&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Flats in Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_flats_in_bath">Prices for Student Flats in Bath</a></li><li><a href = "#student_flats_in_bath__all_bills_inclusive">Student Flats in Bath - All Bills Inclusive</a></li><li><a href = "#prices_for_student_flats_in_bath__by_number_of_bedrooms">Prices for Student Flats in Bath - By Number of Bedrooms</a></li><li><a href = "#prices_for_student_flats_in_bath__by_student_location">Prices for Student Flats in Bath - By Student Location</a></li><li><a href = "#student_flats_in_bath__private_rental_houses">Student Flats in Bath - Private Rental Houses</a></li><li><a href = "#furnished_flats_inbath">Furnished Flats inBath</a></li><li><a href = "#bath_student_flat_portal">Bath Student Flat Portal</a></li><li><a href = "#bath_student_flats_self_catering">Bath Student Flats Self Catering</a></li><li><a href = "#find_student_flats_close_to__bath_city_center">Find Student Flats close to  Bath City Center</a></li><li><a href = "#find_student_flats_near_the_universities">Find Student Flats near the Universities</a></li><li><a href = "#cheapest_student_flats_in_bath">Cheapest Student Flats in Bath</a></li><li><a href = "#student_flats_in_bath__recently_added">Student Flats in Bath - Recently Added</a></li><li><a href = "#student_flats_in_bath__recently_reduced">Student Flats in Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_flats_in_bath"> <h2>Prices for Student Flats in Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£796 per month </td><td><button className = 'searchButton tableButton' title='Student Flats in Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_flats_in_bath__all_bills_inclusive"> <h2>Student Flats in Bath - All Bills Inclusive</h2></a><p>Living in a student flat in Bath can be a rewarding experience, but managing bills and utility payments can be a real hassle. That's why subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> can make your life a whole lot easier. With this convenient option, you can wave goodbye to the stress of splitting bills with flatmates or remembering payment deadlines. Instead, you can <b>concentrate on your studies</b> and social life, knowing that all your bills are taken care of. <b>UniBills.com</b> offers a seamless and hassle-free experience, ensuring that you have one less thing to worry about during your time at university. Say goodbye to the endless admin and enjoy the hassle free all inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this web site, and make your student living experience in Bath a truly relaxing one.</p><a id = "prices_for_student_flats_in_bath__by_number_of_bedrooms"> <h2>Prices for Student Flats in Bath - By Number of Bedrooms</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton tableButton' title='1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-1-bedroom-flats' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£800 </td><td>£1500 </td><td>£1190 </td><td>£186 </td><td>£348 </td><td>£276 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton tableButton' title='2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-2-bedroom-flats' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£555 </td><td>£1430 </td><td>£747 </td><td>£129 </td><td>£332 </td><td>£173 </td></tr><tr><td>3 Bed Flat </td><td><button className = 'searchButton tableButton' title='3 Bed Flats' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-3-bedroom-flats' title  = 'View Key Statistics for 3 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£533 </td><td>£990 </td><td>£673 </td><td>£123 </td><td>£230 </td><td>£156 </td></tr><tr><td>4 Bed Flat </td><td><button className = 'searchButton tableButton' title='4 Bed Flats' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-4-bedroom-flats' title  = 'View Key Statistics for 4 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£575 </td><td>£932 </td><td>£664 </td><td>£133 </td><td>£216 </td><td>£154 </td></tr><tr><td>5 Bed Flat </td><td><button className = 'searchButton tableButton' title='5 Bed Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-5-bedroom-flats' title  = 'View Key Statistics for 5 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£840 </td><td>£662 </td><td>£120 </td><td>£195 </td><td>£153 </td></tr><tr><td>6 Bed Flat </td><td><button className = 'searchButton tableButton' title='6 Bed Flats' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-6-bedroom-flats' title  = 'View Key Statistics for 6 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£775 </td><td>£775 </td><td>£775 </td><td>£180 </td><td>£180 </td><td>£180 </td></tr><tr><td>7 Bed Flat </td><td><button className = 'searchButton tableButton' title='7 Bed Flats' onClick={() => routeToPortal("?&beds=7&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-7-bedroom-flats' title  = 'View Key Statistics for 7 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£687 </td><td>£687 </td><td>£687 </td><td>£159 </td><td>£159 </td><td>£159 </td></tr><tr><td>9 Bed Flat </td><td><button className = 'searchButton tableButton' title='9 Bed Flats' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-9-bedroom-flats' title  = 'View Key Statistics for 9 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£700 </td><td>£700 </td><td>£700 </td><td>£162 </td><td>£162 </td><td>£162 </td></tr><tr><td>10 Bed Flat </td><td><button className = 'searchButton tableButton' title='10 Bed Flats' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-10-bedroom-flats' title  = 'View Key Statistics for 10 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£740 </td><td>£740 </td><td>£740 </td><td>£172 </td><td>£172 </td><td>£172 </td></tr></table></p><a id = "prices_for_student_flats_in_bath__by_student_location"> <h2>Prices for Student Flats in Bath - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>50 </td><td>520 </td><td>1500 </td><td>903 </td><td>120 </td><td>348 </td><td>210 </td></tr></table></p><a id = "student_flats_in_bath__private_rental_houses"> <h2>Student Flats in Bath - Private Rental Houses</h2></a><p>When it comes to finding the perfect accommodation in Bath, private rental houses offer the ideal solution for students and professionals alike. From cozy <b>studio apartment</b>s to spacious <b>2 - 10 bedroom house</b>s, there is something to suit every need and preference. Many <b>private student houses</b> in Bath come <b>fully furnished</b> and with <b>bills included</b>, taking the stress out of moving and allowing you to focus on settling into your new home. Whether you're looking for a peaceful retreat or a vibrant social hub, private rental houses in Bath provide the flexibility and convenience that you need. Discover the comfort and convenience of private rental options in this charming city today.</p><a id = "furnished_flats_inbath"> <h2>Furnished Flats inBath</h2></a><p>Looking for student accommodation in Bath? Look no further than our <b>fully furnished</b> student flats. In Bath, it is normal for student houses to be <b>fully furnished</b>, so you won't have to worry about buying and moving heavy furniture. Our student flats come equipped with all the essentials you need for a comfortable stay, including beds, desks, chairs, and storage space. With a modern and stylish design, our flats provide a cozy and homely environment for students to study and relax in. So, say goodbye to the hassle of furnishing a new place and enjoy the convenience and comfort of our <b>fully furnished</b> student flats in Bath.</p><a id = "bath_student_flat_portal"> <h2>Bath Student Flat Portal</h2></a><p>Are you searching for the perfect student flat in Bath? Look no further! Our property portal specializes in helping students find their ideal accommodations in the vibrant city of Bath. Situated in the popular area of <b><b>Oldfield Park</b></b>, our listings are conveniently located near the <b><b>University of Bath</b></b> and <b><b>Bath Spa University</b></b>, making it easy for students to commute to campus. Whether you're looking for a cozy studio or a spacious apartment, our portal offers a variety of options to suit your needs and budget. With our user-friendly search filters, finding your student flat in Bath has never been easier.</p><a id = "bath_student_flats_self_catering"> <h2>Bath Student Flats Self Catering</h2></a><p>Living in self-catering student flats in Bath offers a fulfilling and independent lifestyle for students. With a range of amenities and facilities at your disposal, including a fully equipped kitchen, laundry facilities, and modern furnishings, these flats provide a comfortable living space for students looking for a home away from home. Located in the heart of Bath, students can enjoy the vibrant city life while still having a quiet and peaceful place to study and relax. The flexibility of self-catering flats allows students to cook their own meals and manage their own schedules, giving them a sense of autonomy and responsibility. Additionally, living in self-catering student flats provides a great opportunity for students to develop essential life skills such as budgeting, meal planning, and time management. Overall, living in self-catering student flats in Bath offers a unique and enriching experience for students looking to immerse themselves in student life while enjoying the comforts of home.</p><a id = "find_student_flats_close_to__bath_city_center"> <h2>Find Student Flats close to  Bath City Center</h2></a><p>Are you a student looking for the perfect accommodation near <b>Bath</b> city center? Look no further than our portal Student Accommodation For Rent. <b>Bath</b>, known for its stunning architecture and rich history, is a popular choice for students. Whether you prefer the lively atmosphere of <b>Bath</b> city center or the charming neighborhood of <b>Oldfield Park</b>, our portal has a variety of student flats to choose from. With options located within walking distance or just a few <b>miles</b> from <b>Bath</b> city center, you can easily explore all that this vibrant city has to offer. Find your ideal student accommodation in <b>Bath</b> today on Student Accommodation For Rent.</p><a id = "find_student_flats_near_the_universities"> <h2>Find Student Flats near the Universities</h2></a><p>Looking for student flats near the Universities in Bath? <b>Oldfield Park</b> is the ideal location, conveniently situated just a few <b>miles</b> away from both the <b>University of Bath</b> and <b>Bath Spa University</b>. Students can easily reach the universities <b>by foot</b>, taking a leisurely stroll through the picturesque streets of Bath. Alternatively, there are frequent bus services connecting <b>Oldfield Park</b> to the campuses, offering a convenient and affordable transportation option. For those who prefer to drive, it takes just a short car journey to reach either university from <b>Oldfield Park</b>. With its central location and excellent transport links, finding student accommodation in <b>Oldfield Park</b> provides the perfect blend of convenience and accessibility for students.</p><a id = "cheapest_student_flats_in_bath"> <h2>Cheapest Student Flats in Bath</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_bath__recently_added"> <h2>Student Flats in Bath - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_bath__recently_reduced"> <h2>Student Flats in Bath - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, looking for student flats in Bath can be an exciting yet challenging experience. With its picturesque landscapes and vibrant community, Bath offers a unique living experience for students. The availability of a variety of accommodations, ranging from shared housing to luxury apartments, caters to different preferences and budgets. Additionally, Bath's rich history and cultural events provide endless opportunities for exploration and growth outside of academic pursuits. While the search for the perfect student flat may require time and effort, the end result of finding a comfortable and convenient living space in this charming city is well worth it. Overall, embarking on the journey of searching for student flats in Bath can be a rewarding endeavor that enhances the college experience and creates lasting memories[].</p></>)
};

export default BathFlat;