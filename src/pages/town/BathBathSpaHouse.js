
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


const  BathBathSpaHouse = () => 
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

    return (<><h1>Student Houses in Bath Spa, Bath</h1><p>We have listings for <b>Student Houses in Bath Spa, Bath</b> for the academic year 2024. <b>Student Houses in Bath Spa, Bath</b> are conveniently located near the Bath Spa University campus, providing an ideal living situation for students. These houses offer a range of amenities and are designed to cater to the needs of students studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-houses-in-bath-spa-bath.png')} alt='Student Houses in Bath Spa, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Houses in Bath Spa, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71093&type=House&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Houses in Bath Spa, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_houses_in_bath_spa,_bath_pp/pm">Prices for Student Houses in Bath Spa, Bath pp/pm</a></li><li><a href = "#student_houses_in_bath_spa,_bath__all_bills_inclusive">Student Houses in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_houses_in_bath_spa,_bath">Cheap Student Houses in Bath Spa, Bath</a></li><li><a href = "#student_houses_in_bath_spa,_bath__recently_added">Student Houses in Bath Spa, Bath - Recently Added</a></li><li><a href = "#student_houses_in_bath_spa,_bath__recently_reduced">Student Houses in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_houses_in_bath_spa,_bath__houses_pp/pm">Prices for Student Houses in Bath Spa, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__bath_spa,_bath">Student Accommodation Portal - Bath Spa, Bath</a></li><li><a href = "#student_houses_in_bath_spa,_bath__private_rental_sector">Student Houses in Bath Spa, Bath - Private Rental Sector</a></li><li><a href = "#student_houses_in_bath_spa,_bath__fully_furnished">Student Houses in Bath Spa, Bath - Fully Furnished</a></li><li><a href = "#student_houses_in_bath_spa,_bath__near_to_city_center_?">Student Houses in Bath Spa, Bath - Near to City Center ?</a></li><li><a href = "#student_houses_in_bath_spa,_bath__near_to__to_the_university_of_bath">Student Houses in Bath Spa, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_houses_in_bath_spa,_bath__near_to__to_the_bath_spa_university">Student Houses in Bath Spa, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_houses_in_bath_spa,_bath_pp/pm"> <h2>Prices for Student Houses in Bath Spa, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£626 per month </td><td><button className = 'searchButton tableButton' title='Student Houses in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_houses_in_bath_spa,_bath__all_bills_inclusive"> <h2>Student Houses in Bath Spa, Bath - All Bills Inclusive</h2></a><p>When you're a student in Bath Spa, Somerset, the last thing you want to worry about is managing multiple bills for your accommodation. This is where <b>UniBills.com</b> comes in to simplify your life with their <b>all bills inclusive</b> service. By opting for this convenient option, you can <b>concentrate on your studies</b> and social life without the hassle of dealing with separate utility providers. <b>UniBills.com</b> covers all your bills in one easy package, including electricity, water, gas, and internet, allowing you to budget effectively and avoid any unexpected expenses. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and make the most of your student experience in Bath Spa. Get a quote from <b>UniBills.com</b> or any accommodation on this website to start enjoying the benefits of an <b>all bills inclusive</b> service today.</p><a id = "cheap_student_houses_in_bath_spa,_bath"> <h2>Cheap Student Houses in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_bath_spa,_bath__recently_added"> <h2>Student Houses in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_bath_spa,_bath__recently_reduced"> <h2>Student Houses in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_houses_in_bath_spa,_bath__houses_pp/pm"> <h2>Prices for Student Houses in Bath Spa, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>2 Bed House </td><td><button className = 'searchButton tableButton' title='2 Bed Houses' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '2-bedroom-student-houses-in-bath-spa-bath' title  = 'View Key Statistics for 2 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£1157 </td><td className = {classNameHideForMobile}>£1183 </td><td>£1170 </td><td className = {classNameHideForMobile}>£269 </td><td className = {classNameHideForMobile}>£275 </td><td>£272 </td></tr><tr><td>3 Bed House </td><td><button className = 'searchButton tableButton' title='3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-houses-in-bath-spa-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£533 </td><td className = {classNameHideForMobile}>£687 </td><td>£626 </td><td className = {classNameHideForMobile}>£123 </td><td className = {classNameHideForMobile}>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton tableButton' title='4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-houses-in-bath-spa-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£475 </td><td className = {classNameHideForMobile}>£770 </td><td>£604 </td><td className = {classNameHideForMobile}>£110 </td><td className = {classNameHideForMobile}>£179 </td><td>£140 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton tableButton' title='5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-houses-in-bath-spa-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£500 </td><td className = {classNameHideForMobile}>£830 </td><td>£625 </td><td className = {classNameHideForMobile}>£116 </td><td className = {classNameHideForMobile}>£193 </td><td>£145 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton tableButton' title='6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '6-bedroom-student-houses-in-bath-spa-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£533 </td><td className = {classNameHideForMobile}>£850 </td><td>£651 </td><td className = {classNameHideForMobile}>£123 </td><td className = {classNameHideForMobile}>£197 </td><td>£151 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton tableButton' title='7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '7-bedroom-student-houses-in-bath-spa-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£550 </td><td className = {classNameHideForMobile}>£750 </td><td>£648 </td><td className = {classNameHideForMobile}>£127 </td><td className = {classNameHideForMobile}>£174 </td><td>£150 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton tableButton' title='8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '8-bedroom-student-houses-in-bath-spa-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£550 </td><td className = {classNameHideForMobile}>£717 </td><td>£613 </td><td className = {classNameHideForMobile}>£127 </td><td className = {classNameHideForMobile}>£166 </td><td>£142 </td></tr><tr><td>9 Bed House </td><td><button className = 'searchButton tableButton' title='9 Bed Houses' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '9-bedroom-student-houses-in-bath-spa-bath' title  = 'View Key Statistics for 9 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£610 </td><td className = {classNameHideForMobile}>£700 </td><td>£655 </td><td className = {classNameHideForMobile}>£141 </td><td className = {classNameHideForMobile}>£162 </td><td>£152 </td></tr></table></p><a id = "student_accommodation_portal__bath_spa,_bath"> <h2>Student Accommodation Portal - Bath Spa, Bath</h2></a><p>Are you a student looking for accommodation in the vibrant city of <b>Bath</b>? Look no further than our property portal, offering a wide range of options to suit your needs. Whether you're studying at the prestigious University of <b>Bath</b> or the creative hub of <b>Bath</b> Spa University, we have listings that cater to all students in <b>Bath</b> Spa. From cozy studios to spacious shared apartments, our platform makes it easy to browse and compare properties in the beautiful city of <b>Bath</b>. With its picturesque surroundings and rich cultural history, <b>Bath</b> is a popular choice for students seeking a balance between academic excellence and a high quality of life. Let our property portal help you find the perfect student accommodation in <b>Bath</b>, ensuring a comfortable and enjoyable stay throughout your academic journey.</p><a id = "student_houses_in_bath_spa,_bath__private_rental_sector"> <h2>Student Houses in Bath Spa, Bath - Private Rental Sector</h2></a><p>Nestled in the picturesque city of Bath Spa, the private rental sector offers a diverse range of properties to cater to a variety of needs. For students looking for accommodation, there are ample options available, from shared living in a <b>2 - 10 bedroom house</b> to the convenience and privacy of a cozy <b>studio apartment</b>. Many landlords offer inclusive packages with <b>bills included</b>, ensuring a hassle-free rental experience. These properties are typically <b>fully furnished</b>, saving tenants the time and effort of having to furnish their new home. Whether you are seeking a vibrant student community or a peaceful retreat, Bath Spa's private rental sector has something for everyone. With its historic charm and modern amenities, finding your perfect home in Bath Spa has never been easier.</p><a id = "student_houses_in_bath_spa,_bath__fully_furnished"> <h2>Student Houses in Bath Spa, Bath - Fully Furnished</h2></a><p>If you are a student looking for accommodation in Bath Spa, <b>fully furnished Houses</b> are a popular choice. In Bath, it is the norm for student houses to be fully furnished, making the moving-in process hassle-free and convenient. These houses come equipped with all the essential furniture items like beds, desks, chairs, and even kitchen appliances, allowing students to focus on their studies and settling into their new home. The convenience of not having to worry about buying or transporting furniture can be a huge relief for students navigating the demands of university life. Additionally, <b>fully furnished Houses</b> often feature modern and stylish decor, creating a comfortable and inviting living space for students to relax and socialize. Choosing a fully furnished student house in Bath can make the transition to university life much smoother and more enjoyable.</p><a id = "student_houses_in_bath_spa,_bath__near_to_city_center_?"> <h2>Student Houses in Bath Spa, Bath - Near to City Center ?</h2></a><p>Located just a few <b>miles</b> away from <b>Bath city center</b>, <b>student Houses</b> in <b>Bath Spa</b> offer a convenient and vibrant living experience for students. With easy access to all the amenities and attractions that the city has to offer, including historical sites, shopping districts, and a bustling nightlife, students can immerse themselves in the rich cultural scene of Bath. Whether it's exploring the Roman baths, strolling along the picturesque streets, or enjoying a cup of tea in one of the cozy cafes, students will never run out of things to do in this charming city. Additionally, the proximity of <b>student Houses</b> to the city center allows for easy transportation options, making it a breeze to get around and explore all that Bath has to offer. Whether you're looking for a peaceful retreat or a vibrant city experience, <b>Bath Spa</b> <b>student Houses</b> offer the perfect balance of convenience and lifestyle.</p><a id = "student_houses_in_bath_spa,_bath__near_to__to_the_university_of_bath"> <h2>Student Houses in Bath Spa, Bath - Near to  to the University of Bath</h2></a><p>Bath Spa University and the <b>University of Bath</b> are located in close proximity to each other, making it convenient for students to access both campuses effortlessly. The distance between them is just a few <b>miles</b>, making it easy to travel between the two locations. For those who prefer to commute <b>by foot</b>, the walk from Bath Spa to the <b>University of Bath</b> is a pleasant way to enjoy the picturesque surroundings. Alternatively, students can take the <b>bus route</b> that connects the two campuses, providing a quick and cost-effective mode of transportation. For those who prefer to drive, the journey between Bath Spa and the <b>University of Bath</b> takes just a few minutes, offering flexibility for students who have their own transport. The close proximity of the two universities also makes it convenient for students to find <b>Student Houses</b> in the area, as there are plenty of options available for those looking to live off-campus.</p><a id = "student_houses_in_bath_spa,_bath__near_to__to_the_bath_spa_university"> <h2>Student Houses in Bath Spa, Bath - Near to  to the Bath Spa University</h2></a><p><b>Bath Spa University</b> is conveniently located just 3 <b>miles</b> away from the city of Bath. For students seeking accommodation close to campus, there are plenty of options available in the form of <b>Student Houses</b> within walking distance. If you prefer to commute, <b>Bath Spa University</b> is well-connected by the local <b>bus route</b>, making it easily accessible for students living in the city center. If you choose to drive, the university is just a short journey away <b>by car</b>, providing flexibility in your daily commute. Whether you prefer to travel <b>by foot</b>, bus, or car, <b>Bath Spa University</b> is easily reachable, offering a seamless transition between your accommodation and campus life.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, looking for student houses in Bath Spa, Bath can be both exciting and challenging. With a wide range of options to choose from, including shared houses, apartments, and studios, students have the opportunity to find accommodations that fit their preferences and budget. It’s important to consider factors such as location, amenities, and rental costs when searching for the perfect student housing. Bath Spa offers a vibrant and student-friendly environment, with plenty of attractions and amenities within easy reach. By carefully researching and visiting multiple properties, students can make informed decisions and secure a comfortable and convenient living space during their time at university. Planning ahead, setting a budget, and staying organized throughout the search process can help students find the ideal student house in Bath Spa that meets their needs and enhances their overall university experience.</p></>)
};

export default BathBathSpaHouse;