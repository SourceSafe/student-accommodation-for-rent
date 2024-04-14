
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


const  BathWestonParkFlat = () => 
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

    return (<><h1>Student Flats in Weston Park, Bath</h1><p>We have listings for <b>Student Flats in Weston Park, Bath</b> for the academic year 2024. 

<b>Student Flats in Weston Park, Bath</b> offer convenient and comfortable housing options for students in the vibrant city of Bath. Located close to local amenities and university campuses, these flats provide a great living experience for students looking to study and socialize in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-flats-in-weston-park-bath.png')} alt='Student Flats in Weston Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Flats in Weston Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71122&type=Flat&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Flats in Weston Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_flats_in_weston_park,_bath_pp/pm">Prices for Student Flats in Weston Park, Bath pp/pm</a></li><li><a href = "#student_flats_in_weston_park,_bath__all_bills_inclusive">Student Flats in Weston Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_flats_in_weston_park,_bath">Cheap Student Flats in Weston Park, Bath</a></li><li><a href = "#student_flats_in_weston_park,_bath__recently_added">Student Flats in Weston Park, Bath - Recently Added</a></li><li><a href = "#student_flats_in_weston_park,_bath__recently_reduced">Student Flats in Weston Park, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_flats_in_weston_park,_bath__houses_pp/pm">Prices for Student Flats in Weston Park, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__weston_park,_bath">Student Accommodation Portal - Weston Park, Bath</a></li><li><a href = "#student_flats_in_weston_park,_bath__private_rental_sector">Student Flats in Weston Park, Bath - Private Rental Sector</a></li><li><a href = "#student_flats_in_weston_park,_bath__fully_furnished">Student Flats in Weston Park, Bath - Fully Furnished</a></li><li><a href = "#student_flats_in_weston_park,_bath__near_to_city_center_?">Student Flats in Weston Park, Bath - Near to City Center ?</a></li><li><a href = "#student_flats_in_weston_park,_bath__near_to__to_the_university_of_bath">Student Flats in Weston Park, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_flats_in_weston_park,_bath__near_to__to_the_bath_spa_university">Student Flats in Weston Park, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_flats_in_weston_park,_bath_pp/pm"> <h2>Prices for Student Flats in Weston Park, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£823 per month </td><td><button className = 'searchButton tableButton' title='Student Flats in Weston Park, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71122")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_flats_in_weston_park,_bath__all_bills_inclusive"> <h2>Student Flats in Weston Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of having to juggle multiple bills for your student flat in Weston Park, Bath, Somerset? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that allows you to <b>concentrate on your studies</b> without the stress of managing utility payments. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers your rent, electricity, water, and internet expenses in one convenient package. Say goodbye to the headache of coordinating different bills and instead, simplify your life with <b>UniBills.com</b>. By subscribing to their services, you can ensure that your accommodation costs are taken care of, giving you peace of mind and allowing you to focus on what truly matters – your education. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience of an <b>all bills inclusive</b> service today.</p><a id = "cheap_student_flats_in_weston_park,_bath"> <h2>Cheap Student Flats in Weston Park, Bath</h2></a><p><Portlet location="REGION^71122" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_weston_park,_bath__recently_added"> <h2>Student Flats in Weston Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71122" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_weston_park,_bath__recently_reduced"> <h2>Student Flats in Weston Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71122" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_flats_in_weston_park,_bath__houses_pp/pm"> <h2>Prices for Student Flats in Weston Park, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton tableButton' title='1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71122")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '1-bedroom-student-flats-in-weston-park-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£1050 </td><td className = {classNameHideForMobile}>£1452 </td><td>£1232 </td><td className = {classNameHideForMobile}>£244 </td><td className = {classNameHideForMobile}>£337 </td><td>£286 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton tableButton' title='2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71122")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '2-bedroom-student-flats-in-weston-park-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£590 </td><td className = {classNameHideForMobile}>£775 </td><td>£707 </td><td className = {classNameHideForMobile}>£137 </td><td className = {classNameHideForMobile}>£180 </td><td>£164 </td></tr><tr><td>3 Bed Flat </td><td><button className = 'searchButton tableButton' title='3 Bed Flats' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71122")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-flats-in-weston-park-bath' title  = 'View Key Statistics for 3 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£600 </td><td className = {classNameHideForMobile}>£990 </td><td>£733 </td><td className = {classNameHideForMobile}>£139 </td><td className = {classNameHideForMobile}>£230 </td><td>£170 </td></tr><tr><td>4 Bed Flat </td><td><button className = 'searchButton tableButton' title='4 Bed Flats' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71122")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-flats-in-weston-park-bath' title  = 'View Key Statistics for 4 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£610 </td><td className = {classNameHideForMobile}>£850 </td><td>£701 </td><td className = {classNameHideForMobile}>£141 </td><td className = {classNameHideForMobile}>£197 </td><td>£163 </td></tr><tr><td>5 Bed Flat </td><td><button className = 'searchButton tableButton' title='5 Bed Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71122")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-weston-park-bath' title  = 'View Key Statistics for 5 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£650 </td><td className = {classNameHideForMobile}>£775 </td><td>£697 </td><td className = {classNameHideForMobile}>£151 </td><td className = {classNameHideForMobile}>£180 </td><td>£162 </td></tr></table></p><a id = "student_accommodation_portal__weston_park,_bath"> <h2>Student Accommodation Portal - Weston Park, Bath</h2></a><p>Are you seeking student accommodation near <b>Weston Park</b> in <b>Bath</b> for your studies at the University of <b>Bath</b> or <b>Bath</b> Spa University? Look no further! Our property portal offers a convenient and user-friendly platform to help you find the perfect place to call home during your academic journey. With a wide range of options to choose from, including shared houses, studio apartments, and student halls, we make it easy for you to filter through listings based on your preferences and budget. Whether you prefer to live close to campus for easy access to classes and amenities, or desire a quieter neighborhood for focused study sessions, our portal has something for everyone. Say goodbye to the stress of searching for accommodation and let us help you find the ideal home in <b>Weston Park</b>, <b>Bath</b>, so you can focus on what truly matters—your education and making the most of your university experience.</p><a id = "student_flats_in_weston_park,_bath__private_rental_sector"> <h2>Student Flats in Weston Park, Bath - Private Rental Sector</h2></a><p>Are you a student looking for the perfect accommodation in Bath, Weston Park? Look no further than the thriving <b>student private rental sector</b> in this lively area. From cozy <b>studio apartment</b>s to spacious <b>2 - 10 bedroom house</b>s, you're sure to find a place that suits your needs. Many of these properties come <b>fully furnished</b> and include bills, making the renting process stress-free. Whether you prefer a more independent lifestyle or enjoy living with roommates, Weston Park has a variety of options to choose from. Experience the convenience and comfort of modern living in this vibrant neighborhood.</p><a id = "student_flats_in_weston_park,_bath__fully_furnished"> <h2>Student Flats in Weston Park, Bath - Fully Furnished</h2></a><p>Looking for the perfect student accommodation in Bath? Look no further than the fully furnished student flats at Weston Park. These cozy and convenient flats are designed with students in mind, providing everything you need for a comfortable and hassle-free living experience. From a comfortable bed and study desk to a fully equipped kitchen and modern furnishings, these flats have it all. </p><p>It is normal for student flats to be fully furnished, and Weston Park goes above and beyond to ensure that every detail is taken care of. With spacious living areas, high-speed internet, and on-site laundry facilities, you'll have everything you need right at your fingertips. Located in a prime location with easy access to the University of Bath and other local amenities, Weston Park is the ideal place to call home during your student years. Don't settle for less – choose fully furnished student flats at Weston Park for a stress-free and enjoyable living experience.</p><a id = "student_flats_in_weston_park,_bath__near_to_city_center_?"> <h2>Student Flats in Weston Park, Bath - Near to City Center ?</h2></a><p>Nestled in the charming area of <b>Weston Park</b>, students residing in the <b>student Flats</b> here have the advantage of being in close proximity to <b>Bath city center</b>. Just a stone's throw away, <b>Bath city center</b> is merely a few <b>miles</b> from <b>Weston Park</b>, making it a convenient location for students looking to immerse themselves in the bustling city life. This ideal location not only offers easy access to various shops, restaurants, and cultural attractions but also provides a vibrant atmosphere for students to explore and appreciate. Whether it's enjoying a leisurely stroll along the picturesque streets or indulging in the rich history and architecture of the city, students at <b>Weston Park</b>'s <b>student Flats</b> truly get the best of both worlds - a peaceful and serene living environment within reach of the lively city center.</p><a id = "student_flats_in_weston_park,_bath__near_to__to_the_university_of_bath"> <h2>Student Flats in Weston Park, Bath - Near to  to the University of Bath</h2></a><p>Weston Park is conveniently located close to the University of  Bath, being only a few <b>miles</b> away from the campus where students  attend their lectures and seminars. The proximity of Weston Park to the <b>University of Bath</b> means that students residing in the <b>Student Flats</b> can easily commute to and from campus. <b>by foot</b>, it would take approximately 30-40 minutes to reach the university, making it a viable option for those looking to maintain an active lifestyle. Alternatively, students can opt for the convenient <b>bus route</b> that connects Weston Park directly to the university, reducing the travel time significantly. For those with a car, the journey to the <b>University of Bath</b> is even quicker, taking only a few minutes to reach campus. Weston Park's close proximity to the <b>University of Bath</b> makes it an ideal choice for students looking for accommodation that is both convenient and practical.</p><a id = "student_flats_in_weston_park,_bath__near_to__to_the_bath_spa_university"> <h2>Student Flats in Weston Park, Bath - Near to  to the Bath Spa University</h2></a><p>Weston Park is conveniently located close to <b>Bath Spa University</b>, making it an ideal location for students looking for accommodation near campus. The university is just a few <b>miles</b> away from Weston Park, making it easily accessible for students living in the area. For those who prefer to travel <b>by foot</b>, the journey to <b>Bath Spa University</b> will take around 30 minutes, allowing for a pleasant stroll through the picturesque surroundings. Alternatively, there is a <b>bus route</b> that directly connects Weston Park to the university, providing a convenient and efficient mode of transportation for students. For those with access to a car, the drive to <b>Bath Spa University</b> is quick and straightforward, allowing for a stress-free commute. Additionally, Weston Park offers a range of <b>Student Flats</b> that are perfect for those studying at <b>Bath Spa University</b>, providing a comfortable and convenient living space near campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, searching for student flats in Weston Park, Bath can be a challenging yet rewarding experience. With its close proximity to the University of Bath and local amenities, Weston Park is an ideal location for students looking for convenient housing options. The variety of flat sizes and rental prices in the area cater to different budgets and preferences. Overall, the competitive rental market in Weston Park requires students to act quickly and efficiently in securing their desired accommodation. In conclusion, by staying organized, utilizing online resources, and being proactive in their search, students can find the perfect flat in Weston Park that suits their needs and provides a comfortable living space during their academic years.</p></>)
};

export default BathWestonParkFlat;