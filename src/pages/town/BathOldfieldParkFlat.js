
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


const  BathOldfieldParkFlat = () => 
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

    return (<><h1>Student Flats in Oldfield Park, Bath</h1><p>We have listings for <b>Student Flats in Oldfield Park, Bath</b> for the academic year 2024. <b>Student Flats in Oldfield Park, Bath</b> are in high demand due to their convenient location close to both the University of Bath and Bath Spa University. These flats offer a comfortable and convenient living space for students looking to immerse themselves in the vibrant student community of Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-flats-in-oldfield-park-bath.png')} alt='Student Flats in Oldfield Park, Bath'/><div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}> View Available Properties in our Portal</h2><ViewPortal description=" Student Flats in Oldfield Park, Bath" portalLink="./" > </ViewPortal><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_flats_in_oldfield_park,_bath">Prices for Student Flats in Oldfield Park, Bath</a></li><li><a href = "#student_flats_in_oldfield_park,_bath__all_bills_inclusive">Student Flats in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_student_flats_in_oldfield_park,_bath">Cheap Student Flats in Oldfield Park, Bath</a></li><li><a href = "#student_flats_in_oldfield_park,_bath__recently_added">Student Flats in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#student_flats_in_oldfield_park,_bath__recently_reduced">Student Flats in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#prices_for_student_flats_in_oldfield_park,_bath__houses">Prices for Student Flats in Oldfield Park, Bath - Houses</a></li><li><a href = "#student_accommodation_portal__oldfield_park,_bath">Student Accommodation Portal - Oldfield Park, Bath</a></li><li><a href = "#student_flats_in_oldfield_park,_bath__private_rental_sector">Student Flats in Oldfield Park, Bath - Private Rental Sector</a></li><li><a href = "#student_flats_in_oldfield_park,_bath__fully_furnished">Student Flats in Oldfield Park, Bath - Fully Furnished</a></li><li><a href = "#student_flats_in_oldfield_park,_bath__near_to_city_center_?">Student Flats in Oldfield Park, Bath - Near to City Center ?</a></li><li><a href = "#student_flats_in_oldfield_park,_bath__near_to__to_the_university_of_bath">Student Flats in Oldfield Park, Bath - Near to  to the University of Bath</a></li><li><a href = "#student_flats_in_oldfield_park,_bath__near_to__to_the_bath_spa_university">Student Flats in Oldfield Park, Bath - Near to  to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_flats_in_oldfield_park,_bath"> <h2>Prices for Student Flats in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£903 per month </td><td><button className = 'searchButton' title='View our Student Flats in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_flats_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Student Flats in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a student flat in Oldfield Park, Bath, Somerset, can be a fantastic experience. However, managing bills and utilities can quickly become overwhelming, taking time away from your studies and social life. By subscribing to an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of remembering to pay multiple bills each month and instead <b>concentrate on your studies</b> and making the most of your time in Bath. With <b>UniBills.com</b>, you can rest assured that all your bills are taken care of, allowing you to budget effectively and live comfortably without any unexpected expenses. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience.</p><a id = "cheap_student_flats_in_oldfield_park,_bath"> <h2>Cheap Student Flats in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_oldfield_park,_bath__recently_added"> <h2>Student Flats in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_flats_in_oldfield_park,_bath__recently_reduced"> <h2>Student Flats in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_flats_in_oldfield_park,_bath__houses"> <h2>Prices for Student Flats in Oldfield Park, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '1-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£980 </td><td>£1500 </td><td>£1245 </td><td>£227 </td><td>£348 </td><td>£289 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '2-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£1430 </td><td>£859 </td><td>£141 </td><td>£332 </td><td>£199 </td></tr><tr><td>3 Bed Flat </td><td><button className = 'searchButton' title='View our 3 Bed Flats' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '3-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for 3 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£585 </td><td>£990 </td><td>£715 </td><td>£136 </td><td>£230 </td><td>£166 </td></tr><tr><td>4 Bed Flat </td><td><button className = 'searchButton' title='View our 4 Bed Flats' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '4-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for 4 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£575 </td><td>£932 </td><td>£716 </td><td>£133 </td><td>£216 </td><td>£166 </td></tr><tr><td>5 Bed Flat </td><td><button className = 'searchButton' title='View our 5 Bed Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for 5 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£840 </td><td>£715 </td><td>£120 </td><td>£195 </td><td>£166 </td></tr><tr><td>6 Bed Flat </td><td><button className = 'searchButton' title='View our 6 Bed Flats' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '6-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for 6 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£775 </td><td>£775 </td><td>£775 </td><td>£180 </td><td>£180 </td><td>£180 </td></tr><tr><td>9 Bed Flat </td><td><button className = 'searchButton' title='View our 9 Bed Flats' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '9-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for 9 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£700 </td><td>£700 </td><td>£700 </td><td>£162 </td><td>£162 </td><td>£162 </td></tr><tr><td>10 Bed Flat </td><td><button className = 'searchButton' title='View our 10 Bed Flats' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '10-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for 10 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£740 </td><td>£740 </td><td>£740 </td><td>£172 </td><td>£172 </td><td>£172 </td></tr></table></p><a id = "student_accommodation_portal__oldfield_park,_bath"> <h2>Student Accommodation Portal - Oldfield Park, Bath</h2></a><p>Are you a student looking for accommodation in <b>Oldfield Park</b>, <b>Bath</b>? Look no further! Our property portal specializes in helping students find the perfect place to call home while studying at the University of <b>Bath</b> or <b>Bath</b> Spa University. With a wide range of options available, you can easily search for properties that suit your needs and budget. Whether you prefer a cozy studio apartment or a shared house with fellow students, our platform provides detailed listings with photos and descriptions to help you make an informed decision. Located just a short distance from both universities, <b>Oldfield Park</b> offers a vibrant community atmosphere with plenty of amenities nearby.</p><a id = "student_flats_in_oldfield_park,_bath__private_rental_sector"> <h2>Student Flats in Oldfield Park, Bath - Private Rental Sector</h2></a><p>Looking for student accommodation in Bath's vibrant Oldfield Park area? The private rental sector here offers a variety of options to suit your needs, from cozy <b>studio apartment</b>s to spacious 2-10 bedroom houses. Many of these properties come <b>fully furnished</b>, making move-in day a breeze. In addition, most landlords offer <b>bills included</b> in the rent, taking the hassle out of managing utility payments. Whether you're seeking a quiet study space or a lively communal atmosphere, there's a rental property in Oldfield Park to fit your lifestyle. Don't miss out on the convenience and comfort of renting in this student-friendly neighborhood.</p><a id = "student_flats_in_oldfield_park,_bath__fully_furnished"> <h2>Student Flats in Oldfield Park, Bath - Fully Furnished</h2></a><p>Fully furnished student flats in Bath, particularly in the popular area of Oldfield Park, are a convenient and practical option for students looking for ready-to-move-in accommodation. It is normal for student flats to be fully furnished, as this eases the stress of moving and allows students to focus on their studies and social life. <b>fully furnished Flats</b> typically include essential amenities such as beds, desks, chairs, storage units, and kitchen appliances, making the transition to university life smoother. In Oldfield Park, these flats are often located close to the University of Bath campus, providing a convenient living situation for students. With everything already provided, students can simply unpack their belongings and settle in, creating a comfortable and welcoming home away from home.</p><a id = "student_flats_in_oldfield_park,_bath__near_to_city_center_?"> <h2>Student Flats in Oldfield Park, Bath - Near to City Center ?</h2></a><p>Are you a student looking for the perfect blend of convenience and charm during your time in Bath? <b>Oldfield Park</b> is the ideal location for you! This vibrant neighborhood is home to a variety of <b>student Flats</b> that offer both comfort and accessibility to the bustling city center. Situated just a stone's throw away from <b>Bath city center</b>, <b>Oldfield Park</b> provides an easy commute for students looking to explore all that the city has to offer. With the city center being only a few <b>miles</b> away, you can easily hop on a bus or even enjoy a leisurely stroll to reach your destination. Furthermore, <b>Oldfield Park</b> itself boasts a plethora of amenities, from cozy cafes and local shops to beautiful green spaces, making it a desirable place to call home.</p><a id = "student_flats_in_oldfield_park,_bath__near_to__to_the_university_of_bath"> <h2>Student Flats in Oldfield Park, Bath - Near to  to the University of Bath</h2></a><p>Oldfield Park is a vibrant neighborhood in Bath, ideally located just a stone's throw away from the prestigious <b>University of Bath</b>. With <b>Student Flats</b> scattered throughout the area, it offers a convenient and lively atmosphere perfect for university-goers. If you're wondering about the distance between Oldfield Park and the university, fret not! It's merely a few <b>miles</b> away, making it easily accessible <b>by foot</b>, bus, or car. The <b>bus route</b> connecting Oldfield Park to the <b>University of Bath</b> is well-serviced, ensuring a quick and hassle-free commute for students. For those who prefer to drive, the journey takes just a few minutes, providing flexibility and convenience. Living in Oldfield Park not only offers proximity to the academic institution, but also a plethora of amenities, restaurants, and cultural attractions, creating a truly enriching student experience.</p><a id = "student_flats_in_oldfield_park,_bath__near_to__to_the_bath_spa_university"> <h2>Student Flats in Oldfield Park, Bath - Near to  to the Bath Spa University</h2></a><p>Oldfield Park is a vibrant neighborhood located just a stone's throw away from <b>Bath Spa University</b>, making it a popular choice for students looking for accommodation close to campus. The university is conveniently situated only 1.5 <b>miles</b> from Oldfield Park, with <b>Student Flats</b> available within walking distance from the main campus. Those who prefer not to walk can easily catch a bus, as there are frequent services running between Oldfield Park and <b>Bath Spa University</b>. For students with their own transportation, the university is also just a short drive away, ensuring easy access to campus facilities. Overall, Oldfield Park's proximity to <b>Bath Spa University</b> makes it an ideal location for students seeking a convenient and lively place to live during their time at university.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, when searching for student flats in Oldfield Park, Bath, it is essential to consider key factors such as location, budget, and amenities. The close proximity to the University of Bath and Bath Spa University makes Oldfield Park a popular choice among students. Additionally, the bustling High Street offers a variety of shops, pubs, and restaurants for convenience and leisure. With a range of housing options from cozy apartments to spacious houses, students can find accommodation that suits their needs and preferences. Overall, Oldfield Park provides a vibrant and student-friendly atmosphere, making it an ideal place to live during your time at university.</p></>)
};

export default BathOldfieldParkFlat;