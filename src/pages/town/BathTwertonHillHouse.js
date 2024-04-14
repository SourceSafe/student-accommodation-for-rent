
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


const  BathTwertonHillHouse = () => 
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

    return (<><h1>Student Houses in Twerton Hill, Bath</h1><p>We have listings for <b>Student Houses in Twerton Hill, Bath</b> for the academic year 2024. <b>Student Houses in Twerton Hill, Bath</b> offer convenient and affordable housing options for students studying in Bath. These houses are located in a vibrant neighborhood with easy access to local amenities and transportation.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-houses-in-twerton-hill-bath.png')} alt='Student Houses in Twerton Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Houses in Twerton Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71120&type=House&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Houses in Twerton Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_houses_in_twerton_hill,_bath_pp/pm">Prices for Student Houses in Twerton Hill, Bath pp/pm</a></li><li><a href = "#student_houses_in_twerton_hill,_bath__all_bills_inclusive">Student Houses in Twerton Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_houses_in_twerton_hill,_bath">Cheap Student Houses in Twerton Hill, Bath</a></li><li><a href = "#student_houses_in_twerton_hill,_bath__recently_added">Student Houses in Twerton Hill, Bath - Recently Added</a></li><li><a href = "#student_houses_in_twerton_hill,_bath__recently_reduced">Student Houses in Twerton Hill, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_houses_in_twerton_hill,_bath__houses_pp/pm">Prices for Student Houses in Twerton Hill, Bath - Houses pp/pm</a></li><li><a href = "#student_accommodation_portal__twerton_hill,_bath">Student Accommodation Portal - Twerton Hill, Bath</a></li><li><a href = "#student_houses_in_twerton_hill,_bath__private_rental_sector">Student Houses in Twerton Hill, Bath - Private Rental Sector</a></li><li><a href = "#student_houses_in_twerton_hill,_bath__fully_furnished">Student Houses in Twerton Hill, Bath - Fully Furnished</a></li><li><a href = "#student_houses_in_twerton_hill,_bath__near_to_city_center_?">Student Houses in Twerton Hill, Bath - Near to City Center ?</a></li><li><a href = "#student_houses_in_twerton_hill,_bath__near_to__to_the_university_of_bath">Student Houses in Twerton Hill, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_houses_in_twerton_hill,_bath__near_to__to_the_bath_spa_university">Student Houses in Twerton Hill, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_houses_in_twerton_hill,_bath_pp/pm"> <h2>Prices for Student Houses in Twerton Hill, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£691 per month </td><td><button className = 'searchButton tableButton' title='Student Houses in Twerton Hill, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_houses_in_twerton_hill,_bath__all_bills_inclusive"> <h2>Student Houses in Twerton Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Twerton Hill, Bath, Somerset, looking for a hassle-free accommodation option? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that allows you to <b>concentrate on your studies</b> without any financial worries. By opting for this convenient package, you can enjoy the ease and simplicity of having all your bills, including utilities and internet, covered in one monthly payment. Say goodbye to the stress of managing different bills and dealing with unexpected costs. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, giving you peace of mind and allowing you to focus on your education. Take the first step towards a stress-free living experience - get a quote from <b>UniBills.com</b> or any accommodation on this website today.</p><a id = "cheap_student_houses_in_twerton_hill,_bath"> <h2>Cheap Student Houses in Twerton Hill, Bath</h2></a><p><Portlet location="REGION^71120" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_twerton_hill,_bath__recently_added"> <h2>Student Houses in Twerton Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71120" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_houses_in_twerton_hill,_bath__recently_reduced"> <h2>Student Houses in Twerton Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71120" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_houses_in_twerton_hill,_bath__houses_pp/pm"> <h2>Prices for Student Houses in Twerton Hill, Bath - Houses pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Min monthly </th><th className = {classNameHideForMobile}>Max monthly </th><th>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th className = {classNameHideForMobile}>Max weekly </th><th>Avg weekly </th></tr><tr><td>3 Bed House </td><td><button className = 'searchButton tableButton' title='3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-houses-in-twerton-hill-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£600 </td><td className = {classNameHideForMobile}>£685 </td><td>£624 </td><td className = {classNameHideForMobile}>£139 </td><td className = {classNameHideForMobile}>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton tableButton' title='4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-houses-in-twerton-hill-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£495 </td><td className = {classNameHideForMobile}>£783 </td><td>£618 </td><td className = {classNameHideForMobile}>£115 </td><td className = {classNameHideForMobile}>£182 </td><td>£143 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton tableButton' title='5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-houses-in-twerton-hill-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£520 </td><td className = {classNameHideForMobile}>£953 </td><td>£636 </td><td className = {classNameHideForMobile}>£120 </td><td className = {classNameHideForMobile}>£221 </td><td>£147 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton tableButton' title='6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '6-bedroom-student-houses-in-twerton-hill-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£560 </td><td className = {classNameHideForMobile}>£953 </td><td>£772 </td><td className = {classNameHideForMobile}>£130 </td><td className = {classNameHideForMobile}>£221 </td><td>£179 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton tableButton' title='7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '7-bedroom-student-houses-in-twerton-hill-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£600 </td><td className = {classNameHideForMobile}>£810 </td><td>£673 </td><td className = {classNameHideForMobile}>£139 </td><td className = {classNameHideForMobile}>£188 </td><td>£156 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton tableButton' title='8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '8-bedroom-student-houses-in-twerton-hill-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£643 </td><td className = {classNameHideForMobile}>£953 </td><td>£798 </td><td className = {classNameHideForMobile}>£149 </td><td className = {classNameHideForMobile}>£221 </td><td>£185 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton tableButton' title='10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71120")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '10-bedroom-student-houses-in-twerton-hill-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>£540 </td><td className = {classNameHideForMobile}>£540 </td><td>£540 </td><td className = {classNameHideForMobile}>£125 </td><td className = {classNameHideForMobile}>£125 </td><td>£125 </td></tr></table></p><a id = "student_accommodation_portal__twerton_hill,_bath"> <h2>Student Accommodation Portal - Twerton Hill, Bath</h2></a><p>Are you a student looking for accommodation in <b>Twerton Hill</b>, <b>Bath</b>? Look no further! Our property portal is here to help you find the perfect place to call home during your academic journey. <b>Twerton Hill</b> is a sought-after location for students due to its proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University. With our user-friendly search filters, you can easily navigate through a variety of listings, from cozy studios to spacious shared houses. Our platform ensures that you can find accommodation that suits your preferences and budget. Say goodbye to the stress of house hunting and let us assist you in finding your ideal student accommodation in <b>Twerton Hill</b>, <b>Bath</b>.</p><a id = "student_houses_in_twerton_hill,_bath__private_rental_sector"> <h2>Student Houses in Twerton Hill, Bath - Private Rental Sector</h2></a><p>In the charming area of Twerton Hill in Bath, the private rental sector offers a variety of options for tenants seeking accommodation. Students looking for a place to call home will find an array of choices, from a cozy <b>studio apartment</b> to a spacious 2-10 bedroom house. Many of these properties come <b>fully furnished</b>, making the move-in process a breeze. With <b>bills included</b> in the rent, tenants can enjoy a hassle-free living experience. Whether you prefer the convenience of living close to campus or the tranquility of a residential area, the private rental sector in Twerton Hill caters to a diverse range of needs and preferences. With its beautiful surroundings and convenient amenities, finding the perfect rental property in this area is easier than ever.</p><a id = "student_houses_in_twerton_hill,_bath__fully_furnished"> <h2>Student Houses in Twerton Hill, Bath - Fully Furnished</h2></a><p>Looking for fully furnished student Houses in Bath? Twerton Hill is the perfect destination for students seeking a comfortable and convenient living space. With <b>fully furnished Houses</b>, all you need to do is bring your personal belongings and settle in. It is normal for student Houses to be fully furnished in this area, making the moving process seamless and stress-free. These Houses come equipped with everything you need for a productive academic year, including kitchen essentials, comfortable furniture, and modern amenities. Located in a vibrant and student-friendly neighborhood, Twerton Hill offers easy access to local shops, cafes, and transport links. Don't miss out on the opportunity to experience hassle-free living in fully furnished student Houses in Bath, Twerton Hill.</p><a id = "student_houses_in_twerton_hill,_bath__near_to_city_center_?"> <h2>Student Houses in Twerton Hill, Bath - Near to City Center ?</h2></a><p>Located just a stone's throw away from <b>Bath city center</b>, <b>Twerton Hill</b> is a popular area for <b>student Houses</b> in Bath. With a vibrant atmosphere and plenty of amenities nearby, students living in <b>Twerton Hill</b> can enjoy the convenience of being close to all the action. The city center is only a few <b>miles</b> away, making it easy for students to access shops, restaurants, and cultural attractions. Whether it's exploring the historic streets, relaxing in a cozy café, or attending university lectures, students in <b>Twerton Hill</b> have everything they need within reach. Additionally, the proximity to <b>Bath city center</b> means that students can easily commute to campus or enjoy a night out without having to travel far. Overall, the close proximity of <b>student Houses</b> in <b>Twerton Hill</b> to <b>Bath city center</b> offers convenience and a vibrant urban lifestyle for students looking to make the most of their time in Bath.</p><a id = "student_houses_in_twerton_hill,_bath__near_to__to_the_university_of_bath"> <h2>Student Houses in Twerton Hill, Bath - Near to  to the University of Bath</h2></a><p>Twerton Hill, located in the charming city of Bath, is surprisingly close to the renowned <b>University of Bath</b>. Situated just a few <b>miles</b> away from the campus, Twerton Hill offers an ideal location for students looking for housing. With conveniently located <b>Student Houses</b> in the area, the <b>University of Bath</b> is easily accessible both <b>by foot</b> and <b>by bus</b>. For those preferring to drive, the campus is just a short car ride away. The <b>bus route</b> connecting Twerton Hill to the university is efficient and makes commuting a breeze. Whether you choose to travel <b>by foot</b>, bus, or car, living in Twerton Hill provides a convenient and practical option for <b>University of Bath</b> students. With its close proximity to the campus and various transportation options, Twerton Hill is the perfect choice for student living in Bath.</p><a id = "student_houses_in_twerton_hill,_bath__near_to__to_the_bath_spa_university"> <h2>Student Houses in Twerton Hill, Bath - Near to  to the Bath Spa University</h2></a><p>Twerton Hill is conveniently located close to <b>Bath Spa University</b>, making it a popular choice for students looking for off-campus housing options. Situated just a few <b>miles</b> away from the university campus, Twerton Hill offers easy access to <b>Student Houses</b> and accommodation within walking distance or a short bus ride away. For those who prefer to commute <b>by foot</b>, the university is easily reachable within 30-40 minutes, providing a scenic stroll through the historic town of Bath. Alternatively, students can take advantage of the regular <b>bus route</b>s that connect Twerton Hill to <b>Bath Spa University</b>, making the journey quick and convenient. Additionally, for students with their own transportation, the university is easily accessible <b>by car</b>, with a short drive of around 10-15 minutes. Overall, Twerton Hill's proximity to <b>Bath Spa University</b> makes it an ideal location for students looking to balance convenience and a vibrant student life.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for student houses in Twerton Hill, Bath can be an exciting yet overwhelming task. From exploring various properties to negotiating rental prices, the process can be quite time-consuming. However, with thorough research and planning, you can find the perfect student accommodation that fits your needs and budget. Twerton Hill offers a diverse range of housing options, from cozy apartments to spacious houses, catering to different preferences. In conclusion, when looking for student houses in Twerton Hill, Bath, it is essential to consider factors such as location, amenities, and overall condition of the property. By being proactive and diligent in your search, you can secure a comfortable and convenient living space that enhances your university experience.</p></>)
};

export default BathTwertonHillHouse;