
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


const  BathBathSpaFlat = () => 
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

    return (<><h1>Student Flats in Bath Spa, Bath</h1><p>We have listings for <b>Student Flats in Bath Spa, Bath</b> for the academic year 2024.

<b>Student Flats in Bath Spa, Bath</b> provide convenient and comfortable living options for students attending Bath Spa University. These flats are often located close to campus, making it easy for students to commute to classes. Additionally, living in a student flat allows for a more independent lifestyle while still being part of a supportive student community in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-flats-in-bath-spa-bath.png')} alt='Student Flats in Bath Spa, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Flats in Bath Spa, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71093&type=Flat&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Flats in Bath Spa, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_flats_in_bath_spa,_bath_pp/pm">Prices for Student Flats in Bath Spa, Bath pp/pm</a></li><li><a href = "#student_flats_in_bath_spa,_bath__all_bills_inclusive">Student Flats in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_flats_in_bath_spa,_bath">Cheap Student Flats in Bath Spa, Bath</a></li><li><a href = "#student_flats_in_bath_spa,_bath__recently_added">Student Flats in Bath Spa, Bath - Recently Added</a></li><li><a href = "#student_flats_in_bath_spa,_bath__recently_reduced">Student Flats in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_flats_in_bath_spa,_bath__houses_pp/pm">Prices for Student Flats in Bath Spa, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__bath_spa,_bath">Student Accommodation Portal - Bath Spa, Bath</a></li><li><a href = "#student_flats_in_bath_spa,_bath__private_rental_sector">Student Flats in Bath Spa, Bath - Private Rental Sector</a></li><li><a href = "#student_flats_in_bath_spa,_bath__fully_furnished">Student Flats in Bath Spa, Bath - Fully Furnished</a></li><li><a href = "#student_flats_in_bath_spa,_bath__near_to_city_center_?">Student Flats in Bath Spa, Bath - Near to City Center ?</a></li><li><a href = "#student_flats_in_bath_spa,_bath__near_to__to_the_university_of_bath">Student Flats in Bath Spa, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_flats_in_bath_spa,_bath__near_to__to_the_bath_spa_university">Student Flats in Bath Spa, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_flats_in_bath_spa,_bath_pp/pm"> <h2>Prices for Student Flats in Bath Spa, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£839 per month </td><td><button className = 'searchButton tableButton' title='Student Flats in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_flats_in_bath_spa,_bath__all_bills_inclusive"> <h2>Student Flats in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Bath Spa, Somerset? Tired of dealing with multiple bills and expenses for your student flat? Consider subscribing to an <b>all bills inclusive</b> service for your accommodation through <b>UniBills.com</b>. By opting for this convenient solution, you can <b>concentrate on your studies</b> without the stress of managing utility bills, internet fees, and other household expenditures. <b>UniBills.com</b> offers a hassle-free all inclusive option, allowing you to budget effectively and avoid any unexpected costs. Save time and energy by letting <b>UniBills.com</b> take care of all your bills, leaving you to focus on what matters most. Don't hesitate, get a quote from <b>UniBills.com</b> or any accommodation on this website today and enjoy the benefits of a worry-free living experience.</p><a id = "cheap_student_flats_in_bath_spa,_bath"> <h2>Cheap Student Flats in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_bath_spa,_bath__recently_added"> <h2>Student Flats in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_bath_spa,_bath__recently_reduced"> <h2>Student Flats in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_flats_in_bath_spa,_bath__houses_pp/pm"> <h2>Prices for Student Flats in Bath Spa, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton tableButton' title='1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '1-bedroom-student-flats-in-bath-spa-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£980 </td><td className = {classNameHideForMobile}>£1500 </td><td>£1212 </td><td className = {classNameHideForMobile}>£227 </td><td className = {classNameHideForMobile}>£348 </td><td>£281 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton tableButton' title='2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '2-bedroom-student-flats-in-bath-spa-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£620 </td><td className = {classNameHideForMobile}>£1105 </td><td>£818 </td><td className = {classNameHideForMobile}>£144 </td><td className = {classNameHideForMobile}>£256 </td><td>£190 </td></tr><tr><td>3 Bed Flat </td><td><button className = 'searchButton tableButton' title='3 Bed Flats' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-flats-in-bath-spa-bath' title  = 'View Key Statistics for 3 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£585 </td><td className = {classNameHideForMobile}>£700 </td><td>£642 </td><td className = {classNameHideForMobile}>£136 </td><td className = {classNameHideForMobile}>£162 </td><td>£149 </td></tr><tr><td>4 Bed Flat </td><td><button className = 'searchButton tableButton' title='4 Bed Flats' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-flats-in-bath-spa-bath' title  = 'View Key Statistics for 4 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£575 </td><td className = {classNameHideForMobile}>£932 </td><td>£694 </td><td className = {classNameHideForMobile}>£133 </td><td className = {classNameHideForMobile}>£216 </td><td>£161 </td></tr><tr><td>5 Bed Flat </td><td><button className = 'searchButton tableButton' title='5 Bed Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-bath-spa-bath' title  = 'View Key Statistics for 5 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£520 </td><td className = {classNameHideForMobile}>£587 </td><td>£557 </td><td className = {classNameHideForMobile}>£120 </td><td className = {classNameHideForMobile}>£136 </td><td>£129 </td></tr></table></p><a id = "student_accommodation_portal__bath_spa,_bath"> <h2>Student Accommodation Portal - Bath Spa, Bath</h2></a><p>Are you searching for the perfect student accommodation in the beautiful city of <b>Bath</b> Spa? Look no further than our property portal, where we specialize in helping students find their ideal living space in <b>Bath</b>. Whether you're attending the prestigious University of <b>Bath</b> or the vibrant <b>Bath</b> Spa University, we have a wide range of listings to suit your needs. <b>Bath</b>, known for its stunning architecture and rich history, offers a unique blend of city living and natural beauty. With our user-friendly search features, you can easily browse through a variety of options, from cozy studio apartments to spacious shared houses. Let us help you find a place to call home in <b>Bath</b>, where you can immerse yourself in the culture and community of this charming city.</p><a id = "student_flats_in_bath_spa,_bath__private_rental_sector"> <h2>Student Flats in Bath Spa, Bath - Private Rental Sector</h2></a><p>In Bath Spa, the private rental sector caters to a diverse range of tenants, offering a variety of accommodation options to suit different preferences and budgets. Students looking for housing options often find the <b>student private rental sector</b> particularly appealing, with <b>fully furnished</b> properties ranging from cozy <b>studio apartment</b>s to spacious <b>2 - 10 bedroom house</b>s. Many rental properties in Bath also come with <b>bills included</b>, making budgeting easier for tenants. Whether you're a student seeking a convenient <b>studio apartment</b> close to the university or a group of friends looking to share a larger, <b>fully furnished</b> house, the private rental sector in Bath offers a wealth of options to choose from.</p><a id = "student_flats_in_bath_spa,_bath__fully_furnished"> <h2>Student Flats in Bath Spa, Bath - Fully Furnished</h2></a><p>Are you a student at Bath Spa University looking for the perfect accommodation that's both convenient and comfortable? Look no further than fully furnished student flats in Bath, Bath Spa. These flats are a popular choice among students due to the ease and convenience they offer. With everything from a bed and wardrobe to a desk and chair, it is normal for student flats to be fully furnished. This means you can move in and start focusing on your studies right away without the hassle of buying and moving furniture. Additionally, <b>fully furnished Flats</b> in Bath often come with amenities like high-speed internet, laundry facilities, and communal spaces for socializing with other students.</p><a id = "student_flats_in_bath_spa,_bath__near_to_city_center_?"> <h2>Student Flats in Bath Spa, Bath - Near to City Center ?</h2></a><p><b>student Flats</b> in <b>Bath Spa</b> offer an ideal location for students looking to be close to the hustle and bustle of <b>Bath city center</b>. Situated just a few <b>miles</b> away from the heart of the city, these accommodation options provide convenient access to all the attractions, amenities, and entertainment that Bath has to offer. Whether it's exploring the historic Roman baths, shopping in the vibrant city center, or enjoying the buzzing nightlife, students living in <b>Bath Spa</b> are never far from the action. With easy access to public transportation and a variety of shops, restaurants, and cultural sites within walking distance, <b>student Flats</b> in <b>Bath Spa</b> are the perfect choice for those looking to experience city living while still maintaining a relaxed and comfortable lifestyle. With the city center just a stone's throw away, students living in <b>Bath Spa</b> can truly make the most of their time in this beautiful and vibrant city.</p><a id = "student_flats_in_bath_spa,_bath__near_to__to_the_university_of_bath"> <h2>Student Flats in Bath Spa, Bath - Near to  to the University of Bath</h2></a><p>Located just 1.5 <b>miles</b> away from the <b>University of Bath</b>, Bath Spa is in close proximity to the campus, making it a convenient choice for students looking for accommodation. The city boasts a variety of <b>Student Flats</b> that are easily accessible <b>by foot</b>, bus, or car. For those who prefer to use public transportation, there is a direct <b>bus route</b> that connects Bath Spa to the <b>University of Bath</b>, providing a quick and easy commute for students. Alternatively, students can choose to drive to campus, as the university is just a short drive away. With its close proximity to the <b>University of Bath</b> and convenient transportation options, Bath Spa is the ideal location for students looking for a comfortable and convenient place to live during their academic years.</p><a id = "student_flats_in_bath_spa,_bath__near_to__to_the_bath_spa_university"> <h2>Student Flats in Bath Spa, Bath - Near to  to the Bath Spa University</h2></a><p><b>Bath Spa University</b> is conveniently located just 2 <b>miles</b> away from the main city center of Bath Spa, making it easily accessible for students living in the area. Many <b>Student Flats</b> are situated within walking distance of the university, making the commute to campus a breeze. For those who prefer public transportation, there is a direct <b>bus route</b> that connects the city center to the university, offering a convenient and cost-effective way to travel back and forth. If driving is more your style, the university is just a short 10-minute car ride away from the heart of Bath Spa. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> is a simple and straightforward process, allowing students to focus on their studies without the stress of a long commute.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for student flats in Bath Spa, Bath can be a challenging yet rewarding experience. With a variety of options available, from modern apartments to cozy shared houses, students have the opportunity to find a living space that suits their needs and preferences. It is important to consider factors such as location, budget, and amenities when making a decision. Additionally, utilizing online platforms and local estate agents can simplify the search process and help students find their ideal accommodation. Overall, by staying organized, being proactive, and exploring different options, students can secure a comfortable and convenient flat in Bath Spa, Bath that enhances their overall living and studying experience[].</p></>)
};

export default BathBathSpaFlat;