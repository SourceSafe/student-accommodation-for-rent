
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


const  BathKensingtonFlat = () => 
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

    return (<><h1>Student Flats in Kensington, Bath</h1><p>We have listings for <b>Student Flats in Kensington, Bath</b> for the academic year 2024.
<b>Student Flats in Kensington, Bath</b> are known for their convenient location near universities, shops, and public transportation. These flats offer comfortable living spaces designed specifically for students, creating a supportive and welcoming community for academic success.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-flats-in-kensington-bath.png')} alt='Student Flats in Kensington, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Flats in Kensington, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61722&type=Flat&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Flats in Kensington, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_flats_in_kensington,_bath_pp/pm">Prices for Student Flats in Kensington, Bath pp/pm</a></li><li><a href = "#student_flats_in_kensington,_bath__all_bills_inclusive">Student Flats in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_flats_in_kensington,_bath">Cheap Student Flats in Kensington, Bath</a></li><li><a href = "#student_flats_in_kensington,_bath__recently_added">Student Flats in Kensington, Bath - Recently Added</a></li><li><a href = "#student_flats_in_kensington,_bath__recently_reduced">Student Flats in Kensington, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_flats_in_kensington,_bath__houses_pp/pm">Prices for Student Flats in Kensington, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__kensington,_bath">Student Accommodation Portal - Kensington, Bath</a></li><li><a href = "#student_flats_in_kensington,_bath__private_rental_sector">Student Flats in Kensington, Bath - Private Rental Sector</a></li><li><a href = "#student_flats_in_kensington,_bath__fully_furnished">Student Flats in Kensington, Bath - Fully Furnished</a></li><li><a href = "#student_flats_in_kensington,_bath__near_to_city_center_?">Student Flats in Kensington, Bath - Near to City Center ?</a></li><li><a href = "#student_flats_in_kensington,_bath__near_to__to_the_university_of_bath">Student Flats in Kensington, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_flats_in_kensington,_bath__near_to__to_the_bath_spa_university">Student Flats in Kensington, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_flats_in_kensington,_bath_pp/pm"> <h2>Prices for Student Flats in Kensington, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£823 per month </td><td><button className = 'searchButton tableButton' title='Student Flats in Kensington, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_flats_in_kensington,_bath__all_bills_inclusive"> <h2>Student Flats in Kensington, Bath - All Bills Inclusive</h2></a><p>Living in a student flat in Kensington, Bath, Somerset can be a thrilling experience, but dealing with bills and utilities can be a major inconvenience. That's why subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can make your life so much easier. With all bills covered in one fixed monthly payment, you can <b>concentrate on your studies</b> and enjoying your time in beautiful Bath without worrying about unexpected expenses. <b>UniBills.com</b> takes the hassle out of managing utilities and ensures a seamless living experience, allowing you to fully focus on your academic and social pursuits. Say goodbye to the stress of splitting bills and tracking expenses, and instead, opt for the convenient and stress-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_student_flats_in_kensington,_bath"> <h2>Cheap Student Flats in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_kensington,_bath__recently_added"> <h2>Student Flats in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_kensington,_bath__recently_reduced"> <h2>Student Flats in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_flats_in_kensington,_bath__houses_pp/pm"> <h2>Prices for Student Flats in Kensington, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton tableButton' title='1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '1-bedroom-student-flats-in-kensington-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£1050 </td><td className = {classNameHideForMobile}>£1452 </td><td>£1232 </td><td className = {classNameHideForMobile}>£244 </td><td className = {classNameHideForMobile}>£337 </td><td>£286 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton tableButton' title='2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '2-bedroom-student-flats-in-kensington-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£590 </td><td className = {classNameHideForMobile}>£775 </td><td>£707 </td><td className = {classNameHideForMobile}>£137 </td><td className = {classNameHideForMobile}>£180 </td><td>£164 </td></tr><tr><td>3 Bed Flat </td><td><button className = 'searchButton tableButton' title='3 Bed Flats' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-flats-in-kensington-bath' title  = 'View Key Statistics for 3 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£600 </td><td className = {classNameHideForMobile}>£990 </td><td>£733 </td><td className = {classNameHideForMobile}>£139 </td><td className = {classNameHideForMobile}>£230 </td><td>£170 </td></tr><tr><td>4 Bed Flat </td><td><button className = 'searchButton tableButton' title='4 Bed Flats' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-flats-in-kensington-bath' title  = 'View Key Statistics for 4 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£610 </td><td className = {classNameHideForMobile}>£850 </td><td>£701 </td><td className = {classNameHideForMobile}>£141 </td><td className = {classNameHideForMobile}>£197 </td><td>£163 </td></tr><tr><td>5 Bed Flat </td><td><button className = 'searchButton tableButton' title='5 Bed Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-kensington-bath' title  = 'View Key Statistics for 5 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£650 </td><td className = {classNameHideForMobile}>£775 </td><td>£697 </td><td className = {classNameHideForMobile}>£151 </td><td className = {classNameHideForMobile}>£180 </td><td>£162 </td></tr></table></p><a id = "student_accommodation_portal__kensington,_bath"> <h2>Student Accommodation Portal - Kensington, Bath</h2></a><p>If you are a student searching for accommodation in <b>Kensington</b>, <b>Bath</b>, look no further than our property portal. Our platform offers a wide range of options to suit your needs, whether you are studying at the University of <b>Bath</b> or <b>Bath</b> Spa University. Located in the vibrant city of <b>Bath</b>, known for its stunning architecture and rich history, <b>Kensington</b> is a sought-after area for students. With our user-friendly interface and detailed listings, finding the perfect student accommodation has never been easier. From cozy studios to spacious shared apartments, our portal provides a variety of choices to cater to your preferences and budget. Say goodbye to the stress of house hunting and let us help you secure a comfortable and convenient place to call home during your time in <b>Kensington</b>, <b>Bath</b>.</p><a id = "student_flats_in_kensington,_bath__private_rental_sector"> <h2>Student Flats in Kensington, Bath - Private Rental Sector</h2></a><p>Are you a student looking for the perfect place to live in the private rental sector of Bath, Kensington? Look no further! With a range of options from cozy <b>studio apartment</b>s to spacious 2-10 bedroom houses, you are sure to find the ideal accommodation to suit your needs. Many rental properties in this area come <b>fully furnished</b>, making moving in hassle-free and convenient. Additionally, some landlords offer the convenience of <b>bills included</b> in the rent, giving you peace of mind and certainty about your monthly expenses. Whether you prefer a modern studio or a traditional house, the private rental sector in Bath, Kensington has something for everyone. Start your search today and find the perfect place to call home.</p><a id = "student_flats_in_kensington,_bath__fully_furnished"> <h2>Student Flats in Kensington, Bath - Fully Furnished</h2></a><p>If you're a student looking for accommodation in Bath, Kensington, you can count on finding <b>fully furnished Flats</b> to meet your needs. In this sought-after area, it is normal for student Flats to be fully furnished, offering convenience and comfort all in one package. These Flats typically come equipped with essential furniture like a bed, desk, chair, wardrobe, and even kitchen appliances. This means you won't have to worry about spending extra time and money furnishing your new home. Instead, you can focus on settling in and enjoying your student life in this vibrant and dynamic neighborhood. Whether you prefer a cozy studio or a shared apartment with friends, fully furnished student Flats in Bath, Kensington, provide a hassle-free living experience, allowing you to focus on your studies and make the most of your time as a student.</p><a id = "student_flats_in_kensington,_bath__near_to_city_center_?"> <h2>Student Flats in Kensington, Bath - Near to City Center ?</h2></a><p>For students looking for conveniently located housing in <b>Kensington</b>, the <b>student Flats</b> in this area offer the perfect balance of comfort and proximity to <b>Bath city center</b>. Situated just a few <b>miles</b> away from the bustling heart of Bath, these flats provide easy access to all the attractions and amenities that the city has to offer. Whether it’s exploring the historic Roman baths, enjoying a leisurely stroll along the picturesque Pulteney Bridge, or indulging in a shopping spree at SouthGate Bath, students living in <b>Kensington</b> are never far from the action. With ample public transportation options available, getting to and from <b>Bath city center</b> from these <b>student Flats</b> is a breeze. Plus, the vibrant student community in <b>Kensington</b> ensures that there’s always something exciting happening right at your doorstep. Don’t miss out on the opportunity to live in close proximity to <b>Bath city center</b> while enjoying the comforts of student living in <b>Kensington</b>.</p><a id = "student_flats_in_kensington,_bath__near_to__to_the_university_of_bath"> <h2>Student Flats in Kensington, Bath - Near to  to the University of Bath</h2></a><p>Located just 1.5 <b>miles</b> away, Kensington is incredibly close to the prestigious <b>University of Bath</b>. Students residing in Kensington have the convenience of being able to easily access the university, whether <b>by foot</b>, bus, or car. The campus is within walking distance from Kensington, making it a convenient option for those who prefer to travel on foot. Additionally, there is a direct <b>bus route</b> that connects Kensington to the university, providing a quick and efficient mode of transportation for students. For those who prefer to drive, the university is easily accessible <b>by car</b> from Kensington. With its proximity to the university and a variety of <b>Student Flats</b> available in the area, Kensington is an ideal location for students looking for a convenient and comfortable place to live while studying at the <b>University of Bath</b>.</p><a id = "student_flats_in_kensington,_bath__near_to__to_the_bath_spa_university"> <h2>Student Flats in Kensington, Bath - Near to  to the Bath Spa University</h2></a><p>Kensington is conveniently located close to <b>Bath Spa University</b>, only a few <b>miles</b> away. Students living in Kensington can easily reach the university <b>by foot</b>, as it is within walking distance for those who prefer a scenic stroll. Additionally, there are efficient <b>bus route</b>s that connect Kensington to <b>Bath Spa University</b>, making transportation quick and accessible. For those who prefer to drive, the university is just a short car ride away. <b>Student Flats</b> in Kensington offer a perfect balance of being close to campus while still enjoying the vibrant city life. Whether commuting <b>by foot</b>, bus, or car, living in Kensington provides a convenient and ideal location for students attending <b>Bath Spa University</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for student flats in Kensington, Bath can be an exciting yet challenging task. With its convenient location and stunning surroundings, Kensington offers a desirable living experience for students. However, competition for properties in this area can be tough, leading to higher prices and limited availability. It is essential for students to carefully plan their search, utilize multiple sources such as online platforms and local estate agents, and be flexible with their preferences in order to secure a suitable flat. By being proactive, patient, and open-minded, students can navigate the competitive rental market in Kensington, Bath successfully and find the perfect accommodation to call their home away from home.</p></>)
};

export default BathKensingtonFlat;