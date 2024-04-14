
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


const  BathKingswayHouse = () => 
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

    return (<><h1>Student Houses in Kingsway, Bath</h1><p>We have listings for <b>Student Houses in Kingsway, Bath</b> for the academic year 2024. <b>Student Houses in Kingsway, Bath</b> are ideal for students looking for accommodation near the University of Bath campus. These houses offer a convenient location, comfortable living spaces, and a vibrant student community.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-houses-in-kingsway-bath.png')} alt='Student Houses in Kingsway, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Houses in Kingsway, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71102&type=House&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Houses in Kingsway, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_houses_in_kingsway,_bath_pp/pm">Prices for Student Houses in Kingsway, Bath pp/pm</a></li><li><a href = "#student_houses_in_kingsway,_bath__all_bills_inclusive">Student Houses in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_houses_in_kingsway,_bath">Cheap Student Houses in Kingsway, Bath</a></li><li><a href = "#student_houses_in_kingsway,_bath__recently_added">Student Houses in Kingsway, Bath - Recently Added</a></li><li><a href = "#student_houses_in_kingsway,_bath__recently_reduced">Student Houses in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_houses_in_kingsway,_bath__houses_pp/pm">Prices for Student Houses in Kingsway, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__kingsway,_bath">Student Accommodation Portal - Kingsway, Bath</a></li><li><a href = "#student_houses_in_kingsway,_bath__private_rental_sector">Student Houses in Kingsway, Bath - Private Rental Sector</a></li><li><a href = "#student_houses_in_kingsway,_bath__fully_furnished">Student Houses in Kingsway, Bath - Fully Furnished</a></li><li><a href = "#student_houses_in_kingsway,_bath__near_to_city_center_?">Student Houses in Kingsway, Bath - Near to City Center ?</a></li><li><a href = "#student_houses_in_kingsway,_bath__near_to__to_the_university_of_bath">Student Houses in Kingsway, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_houses_in_kingsway,_bath__near_to__to_the_bath_spa_university">Student Houses in Kingsway, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_houses_in_kingsway,_bath_pp/pm"> <h2>Prices for Student Houses in Kingsway, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£691 per month </td><td><button className = 'searchButton tableButton' title='Student Houses in Kingsway, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_houses_in_kingsway,_bath__all_bills_inclusive"> <h2>Student Houses in Kingsway, Bath - All Bills Inclusive</h2></a><p>Tired of dealing with multiple bills and chasing housemates for their share? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service for your student house in Kingsway, Bath, Somerset. By opting for this convenient option, you can <b>concentrate on your studies</b> and social life without the stress of managing utility payments. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive package, covering electricity, gas, water, internet, and even TV license all in one tidy sum. Say goodbye to budgeting headaches and hello to simplified living. Get a quote from <b>UniBills.com</b> or any accommodation on this website. Make the smart choice for your student accommodation and make life easier with <b>all bills inclusive</b>.</p><a id = "cheap_student_houses_in_kingsway,_bath"> <h2>Cheap Student Houses in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_kingsway,_bath__recently_added"> <h2>Student Houses in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_kingsway,_bath__recently_reduced"> <h2>Student Houses in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_houses_in_kingsway,_bath__houses_pp/pm"> <h2>Prices for Student Houses in Kingsway, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>3 Bed House </td><td><button className = 'searchButton tableButton' title='3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-houses-in-kingsway-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£600 </td><td className = {classNameHideForMobile}>£685 </td><td>£624 </td><td className = {classNameHideForMobile}>£139 </td><td className = {classNameHideForMobile}>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton tableButton' title='4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-houses-in-kingsway-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£495 </td><td className = {classNameHideForMobile}>£783 </td><td>£618 </td><td className = {classNameHideForMobile}>£115 </td><td className = {classNameHideForMobile}>£182 </td><td>£143 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton tableButton' title='5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-houses-in-kingsway-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£520 </td><td className = {classNameHideForMobile}>£953 </td><td>£636 </td><td className = {classNameHideForMobile}>£120 </td><td className = {classNameHideForMobile}>£221 </td><td>£147 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton tableButton' title='6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '6-bedroom-student-houses-in-kingsway-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£560 </td><td className = {classNameHideForMobile}>£953 </td><td>£772 </td><td className = {classNameHideForMobile}>£130 </td><td className = {classNameHideForMobile}>£221 </td><td>£179 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton tableButton' title='7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '7-bedroom-student-houses-in-kingsway-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£600 </td><td className = {classNameHideForMobile}>£810 </td><td>£673 </td><td className = {classNameHideForMobile}>£139 </td><td className = {classNameHideForMobile}>£188 </td><td>£156 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton tableButton' title='8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '8-bedroom-student-houses-in-kingsway-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£643 </td><td className = {classNameHideForMobile}>£953 </td><td>£798 </td><td className = {classNameHideForMobile}>£149 </td><td className = {classNameHideForMobile}>£221 </td><td>£185 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton tableButton' title='10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '10-bedroom-student-houses-in-kingsway-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£540 </td><td className = {classNameHideForMobile}>£540 </td><td>£540 </td><td className = {classNameHideForMobile}>£125 </td><td className = {classNameHideForMobile}>£125 </td><td>£125 </td></tr></table></p><a id = "student_accommodation_portal__kingsway,_bath"> <h2>Student Accommodation Portal - Kingsway, Bath</h2></a><p>Looking for student accommodation in <b>Kingsway</b>, <b>Bath</b> near the University of <b>Bath</b> or <b>Bath</b> Spa University? Look no further than our property portal designed to make your search quick and easy. Whether you prefer a cozy studio or a shared apartment, we have a variety of options to suit your needs and budget. Our user-friendly platform allows you to filter your search based on location, price, and amenities, ensuring you find the perfect place to call home during your academic journey in <b>Bath</b>. With detailed listings, photos, and virtual tours, you can confidently choose your ideal student accommodation in <b>Kingsway</b>, <b>Bath</b> with ease. Let us help you find your home away from home in this vibrant and historic city.</p><a id = "student_houses_in_kingsway,_bath__private_rental_sector"> <h2>Student Houses in Kingsway, Bath - Private Rental Sector</h2></a><p>Looking for student accommodation in the private rental sector in Bath, Kingsway? Look no further! You can find a range of options from a cozy <b>studio apartment</b> to a spacious <b>2 - 10 bedroom house</b>, all <b>fully furnished</b> and ready for you to move in. Many properties in this area offer <b>bills included</b> in the rent, making budgeting easier for students. Whether you prefer to live alone or share with friends, you'll surely find a suitable place that matches your needs and preferences. With convenient locations, modern amenities, and flexible lease terms, the private rental sector in Bath, Kingsway has something for everyone.</p><a id = "student_houses_in_kingsway,_bath__fully_furnished"> <h2>Student Houses in Kingsway, Bath - Fully Furnished</h2></a><p>Are you a student looking for the perfect place to live in Bath? Look no further than the fully furnished student Houses in Kingsway. Located in the heart of the city, these houses offer a comfortable and convenient living experience for students of all ages. With everything from living room furniture to kitchen appliances included, it is normal for student Houses to be fully furnished in Kingsway. This means you can move in and start enjoying the student life without the hassle of buying and moving furniture. The Houses in Kingsway are designed to provide a cozy and welcoming atmosphere, making it easy for you to study, relax, and socialize with your housemates. Don't miss out on the opportunity to live in one of these fantastic fully furnished student Houses in Bath's Kingsway area.</p><a id = "student_houses_in_kingsway,_bath__near_to_city_center_?"> <h2>Student Houses in Kingsway, Bath - Near to City Center ?</h2></a><p>Located just a stone's throw away from <b>Bath city center</b>, <b>student Houses</b> in <b>Kingsway</b> offer the perfect blend of convenience and comfort for those studying in this historic city. Situated just a few <b>miles</b> away from the heart of Bath, students can easily access all the attractions, amenities, and vibrant culture the city has to offer. Whether it's exploring the iconic Roman Baths, strolling through the picturesque Georgian streets, or enjoying a night out in the bustling city center, living in <b>Kingsway</b> ensures that you're never too far from the action. With excellent transport links and a vibrant community atmosphere, students can enjoy the best of both worlds - peaceful surroundings to focus on their studies, while also being just a short distance away from the bustling city life. So, if you're looking for student accommodation that offers a perfect balance of proximity and tranquility, <b>Kingsway</b>'s <b>student Houses</b> are the ideal choice.</p><a id = "student_houses_in_kingsway,_bath__near_to__to_the_university_of_bath"> <h2>Student Houses in Kingsway, Bath - Near to  to the University of Bath</h2></a><p>Kingsway is conveniently located close to the <b>University of Bath</b>, making it an ideal location for students. The distance between Kingsway and the <b>University of Bath</b> is just a few <b>miles</b>, easily accessible <b>by foot</b>, bus, or car. Many students opt to live in Kingsway due to its proximity to the university, as it is just a short bus ride away. The area is well connected by the <b>bus route</b>, making it simple and convenient for students to travel to and from campus. Additionally, for those who prefer to drive, the journey from Kingsway to the <b>University of Bath</b> is quick and straightforward. With a variety of <b>Student Houses</b> available in Kingsway, students can enjoy a convenient and comfortable living experience while studying at the <b>University of Bath</b>.</p><a id = "student_houses_in_kingsway,_bath__near_to__to_the_bath_spa_university"> <h2>Student Houses in Kingsway, Bath - Near to  to the Bath Spa University</h2></a><p>Kingsway is conveniently located close to <b>Bath Spa University</b>, being just a few <b>miles</b> away from the campus. The proximity to the university makes it an ideal location for students looking to reside in <b>Student Houses</b>. For those who prefer to travel <b>by foot</b>, the university is within walking distance, taking around 25 minutes to reach on foot. Alternatively, there is a direct <b>bus route</b> that connects Kingsway to <b>Bath Spa University</b>, making it an easy and affordable option for students. The journey <b>by bus</b> usually takes around 10-15 minutes, depending on traffic. Additionally, for those who prefer to drive, the university is easily accessible <b>by car</b>, with a quick drive of around 5-10 minutes from Kingsway. This close proximity to <b>Bath Spa University</b> makes Kingsway a popular choice for students looking for convenient and accessible housing options near campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, searching for student houses in Kingsway, Bath can be a challenging yet rewarding experience. With a desirable location close to both the city center and the university campus, Kingsway offers convenience and a vibrant atmosphere for student living. By carefully researching properties, considering factors such as budget, location, and amenities, students can find the perfect home away from home. It is important to attend viewings, ask questions, and ensure that the property meets all necessary requirements before making a decision. Overall, with proper planning and attention to detail, students can secure a comfortable and enjoyable living space in Kingsway, Bath for their academic journey.</p></>)
};

export default BathKingswayHouse;