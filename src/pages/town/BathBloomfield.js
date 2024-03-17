
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathBloomfield = () => 
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

    return (<><h1>Student Accommodation in Bloomfield, Bath</h1><p>We can assist you in finding <b>Student Accommodation in Bloomfield, Bath</b> for the academic year 2024. Whether you're studying at the <b>University of Bath</b> or <b>Bath Spa University</b>, we have the resources to help you secure the perfect accommodation in Bath. Private student accommodation options are available for students looking for a convenient and comfortable living environment close to both universities. Our listings include <a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a>, including the sought-after area of Bloomfield.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bloomfield-bath.png')} alt='Student Accommodation in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bloomfield,_bath">Prices for Student Accommodation in Bloomfield, Bath</a></li><li><a href = "#student_accommodation_in_bloomfield,_bath__all_bills_inclusive">Student Accommodation in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#student_accommodation_portal__bloomfield,_bath">Student Accommodation Portal - Bloomfield, Bath</a></li><li><a href = "#prices_for_student_accommodation_in_bloomfield,_bath__houses">Prices for Student Accommodation in Bloomfield, Bath - Houses</a></li><li><a href = "#prices_for_student_accommodation_in_bloomfield,_bath__flats">Prices for Student Accommodation in Bloomfield, Bath - Flats</a></li><li><a href = "#prices_for_student_accommodation_in_bloomfield,_bath__studio_apartments">Prices for Student Accommodation in Bloomfield, Bath - Studio Apartments</a></li><li><a href = "#cheap_student_accommodation_in_bloomfield,_bath">Cheap Student Accommodation in Bloomfield, Bath</a></li><li><a href = "#student_accommodation_in_bloomfield,_bath__recently_added">Student Accommodation in Bloomfield, Bath - Recently Added</a></li><li><a href = "#student_accommodation_in_bloomfield,_bath__recently_reduced">Student Accommodation in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#how_close_is_bloomfield_to_the_city_center">How close is Bloomfield to the City Center</a></li><li><a href = "#how_close_is_bloomfield_to_the_university_of_bath">How close is Bloomfield to the University of Bath</a></li><li><a href = "#how_close_is_bloomfield_to_the_bath_spa_university">How close is Bloomfield to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bloomfield,_bath"> <h2>Prices for Student Accommodation in Bloomfield, Bath</h2></a><p><table><tr><th>Average Rent </th><th>House </th><th>Flat </th><th>Studio </th><th>Properties </th></tr><tr><td>£708 per month </td><td><a className= "portalLink" href = "shared-houses-for-students-in-bloomfield-bath">£691 per month</a> </td><td><a className= "portalLink" href = "shared-flats-for-students-in-bloomfield-bath">£888 per month</a> </td><td><a className= "portalLink" href = "studio-apartments-for-students-in-bloomfield-bath">£1100 per month</a> </td><td><button className = 'searchButton' title='View our Student Accommodation in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=&type=&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bloomfield,_bath__all_bills_inclusive"> <h2>Student Accommodation in Bloomfield, Bath - All Bills Inclusive</h2></a><p><b>UniBills.com</b> offers an <b>all bills inclusive</b> service for accommodation in Bloomfield, Bath, Somerset, making student life easier and hassle-free. By subscribing to their all-inclusive package, you can eliminate the stress of managing multiple bills and expenses, allowing you to <b>concentrate on your studies</b> and extracurricular activities. With <b>UniBills.com</b>, you can enjoy the convenience and peace of mind that comes with knowing that everything is taken care of - from utilities to internet and even maintenance costs. Say goodbye to unexpected bills and budgeting headaches, and instead, opt for the straightforward and transparent option provided by <b>UniBills.com</b>. Whether you're a student looking for a seamless living experience or a busy professional seeking a stress-free accommodation solution, <b>UniBills.com</b> has you covered. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of an <b>all bills inclusive</b> service firsthand.</p><a id = "student_accommodation_portal__bloomfield,_bath"> <h2>Student Accommodation Portal - Bloomfield, Bath</h2></a><p>Are you a student looking for the perfect accommodation in <b>Bloomfield</b>, <b>Bath</b>? Look no further than our property portal, where we are dedicated to helping you find the ideal place to call home during your time studying at the University of <b>Bath</b> or <b>Bath</b> Spa University. With a wide range of options to choose from, including shared houses, studio apartments, and student halls, you can easily browse through listings and find the one that suits your needs and budget. Our user-friendly interface allows you to filter your search by price, location, and amenities, making it simple to find the perfect place to live while focusing on your studies. Let us help you make the transition to student life in <b>Bath</b> seamless and stress-free. Start your search today on our property portal and get ready to make <b>Bloomfield</b> your new home away from home.</p><a id = "prices_for_student_accommodation_in_bloomfield,_bath__houses"> <h2>Prices for Student Accommodation in Bloomfield, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>3 Bed House </td><td><button className = 'searchButton' title='View our 3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£685 </td><td>£624 </td><td>£139 </td><td>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton' title='View our 4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£495 </td><td>£783 </td><td>£618 </td><td>£115 </td><td>£182 </td><td>£143 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton' title='View our 5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£953 </td><td>£636 </td><td>£120 </td><td>£221 </td><td>£147 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton' title='View our 6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£560 </td><td>£953 </td><td>£772 </td><td>£130 </td><td>£221 </td><td>£179 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton' title='View our 7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£810 </td><td>£673 </td><td>£139 </td><td>£188 </td><td>£156 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton' title='View our 8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£643 </td><td>£953 </td><td>£798 </td><td>£149 </td><td>£221 </td><td>£185 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton' title='View our 10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-10-bedroom-houses-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£540 </td><td>£540 </td><td>£125 </td><td>£125 </td><td>£125 </td></tr></table></p><a id = "prices_for_student_accommodation_in_bloomfield,_bath__flats"> <h2>Prices for Student Accommodation in Bloomfield, Bath - Flats</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1000 </td><td>£1400 </td><td>£1200 </td><td>£232 </td><td>£325 </td><td>£279 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£750 </td><td>£680 </td><td>£141 </td><td>£174 </td><td>£158 </td></tr></table></p><a id = "prices_for_student_accommodation_in_bloomfield,_bath__studio_apartments"> <h2>Prices for Student Accommodation in Bloomfield, Bath - Studio Apartments</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'studio-apartments-for-students-in-bloomfield-bath' title  = 'View Key Statistics for Studio Apartments'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1100 </td><td>£1100 </td><td>£1100 </td><td>£255 </td><td>£255 </td><td>£255 </td></tr></table></p><a id = "cheap_student_accommodation_in_bloomfield,_bath"> <h2>Cheap Student Accommodation in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="" homeType="" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bloomfield,_bath__recently_added"> <h2>Student Accommodation in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="" homeType="" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bloomfield,_bath__recently_reduced"> <h2>Student Accommodation in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="" homeType="" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "how_close_is_bloomfield_to_the_city_center"> <h2>How close is Bloomfield to the City Center</h2></a><p><b>Bloomfield</b> is ideally located just a short distance from <b>Bath city center</b>, making it a convenient place to stay for visitors looking to explore all that this historic city has to offer. Situated just a few <b>miles</b> away, <b>Bloomfield</b> offers a peaceful retreat away from the hustle and bustle of the city center, while still providing easy access to all the attractions and amenities that Bath has to offer. Whether you're looking to visit the iconic Roman Baths, take a leisurely stroll along the Royal Crescent, or indulge in some retail therapy at the bustling shopping streets, you'll find that <b>Bloomfield</b> is a perfect base for your adventures in Bath. With its charming surroundings and proximity to the city center, <b>Bloomfield</b> offers the best of both worlds for travelers looking to experience the beauty and history of Bath.</p><a id = "how_close_is_bloomfield_to_the_university_of_bath"> <h2>How close is Bloomfield to the University of Bath</h2></a><p>Bloomfield is conveniently located close to the <b>University of Bath</b>, making it an ideal spot for students looking for easy access to campus. With a direct <b>bus route</b> connecting the two areas, students can enjoy a <b>quick journey</b> to and from lectures. This is especially advantageous for those who may need to travel <b>late at night</b> when public transportation options are limited. Being just a stone's throw away from the university means that students living in Bloomfield can easily make it back from lectures without having to worry about long commutes or missing out on valuable study time. The proximity of Bloomfield to the <b>University of Bath</b> creates a seamless and convenient living situation for students, allowing them to focus on their academics while still being within reach of all campus amenities.</p><a id = "how_close_is_bloomfield_to_the_bath_spa_university"> <h2>How close is Bloomfield to the Bath Spa University</h2></a><p>Bloomfield is strategically positioned close to <b>Bath Spa University</b>, making it an ideal location for students. The university is just a short bus ride away, ensuring a <b>quick journey</b> for those living in Bloomfield. This convenience is especially beneficial for students returning <b>late at night</b> after lectures or study sessions. Being on the <b>bus route</b> means that students can easily commute between Bloomfield and the university without having to worry about transportation. This proximity allows for a seamless transition between campus life and the comforts of home, making Bloomfield a popular choice for students looking for a convenient and practical living arrangement while pursuing their academic endeavors at <b>Bath Spa University</b>.</p><h2>The Conclusion</h2><p>After extensively researching student accommodation in Bloomfield, Bath, it is evident that there are numerous options available for students seeking a place to live while attending university. From shared houses to purpose-built student apartments, there is something to suit every budget and preference. When hunting for the perfect accommodation, it is essential to consider factors such as location, amenities, and proximity to campus. Furthermore, reading reviews and visiting properties in person can provide valuable insights into the suitability of each option. In conclusion, Bloomfield offers a diverse range of student housing options, making it a desirable location for students looking for a comfortable and convenient place to call home during their academic years. Whether you prefer a vibrant city-center lifestyle or a quieter suburban setting, Bloomfield has something to offer for every student.</p></>)
};

export default BathBloomfield;