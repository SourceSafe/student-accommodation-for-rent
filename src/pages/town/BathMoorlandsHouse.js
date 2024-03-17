
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


const  BathMoorlandsHouse = () => 
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

    return (<><h1>Shared Houses for Students in Moorlands, Bath</h1><p>We have listings for <b>Shared Houses for Students in Moorlands, Bath</b> for the academic year 2024.

<b>Shared Houses for Students in Moorlands, Bath</b> provide a great opportunity for students to live together in a communal setting while studying at nearby universities. These houses typically feature shared common areas, kitchens, and bathrooms, creating a sense of community among the students. With convenient access to academic institutions and local amenities, students can enjoy a comfortable and sociable living experience in Moorlands, Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-houses-for-students-in-moorlands-bath.png')} alt='Shared Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_houses_for_students_in_moorlands,_bath">Prices for Shared Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_houses_for_students_in_moorlands,_bath">Cheap Shared Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_houses_for_students_in_moorlands,_bath__recently_added">Shared Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_houses_for_students_in_moorlands,_bath__recently_reduced">Shared Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_houses_for_students_in_moorlands,_bath__houses">Prices for Shared Houses for Students in Moorlands, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£691 per month </td><td><button className = 'searchButton' title='View our Shared Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student in Moorlands, Bath, Somerset looking for a hassle-free accommodation option that allows you to <b>concentrate on your studies</b> without the stress of managing multiple bills? Look no further than <b>UniBills.com</b>! Subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b> offers you the convenience of having all your bills, including utilities and Wi-Fi, bundled into one easy payment. With this service, you can save time and energy that would have been spent on sorting out bills, allowing you to focus on your academic responsibilities. Enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b> and experience a more seamless living experience. Say goodbye to bill management headaches and hello to a stress-free student lifestyle. Get a quote from <b>UniBills.com</b> or any accommodation on this web site today and simplify your student living experience.</p><a id = "cheap_shared_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_houses_for_students_in_moorlands,_bath__houses"> <h2>Prices for Shared Houses for Students in Moorlands, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>3 Bed House </td><td><button className = 'searchButton' title='View our 3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£685 </td><td>£624 </td><td>£139 </td><td>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton' title='View our 4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£495 </td><td>£783 </td><td>£618 </td><td>£115 </td><td>£182 </td><td>£143 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton' title='View our 5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£953 </td><td>£636 </td><td>£120 </td><td>£221 </td><td>£147 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton' title='View our 6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£560 </td><td>£953 </td><td>£772 </td><td>£130 </td><td>£221 </td><td>£179 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton' title='View our 7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£810 </td><td>£673 </td><td>£139 </td><td>£188 </td><td>£156 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton' title='View our 8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£643 </td><td>£953 </td><td>£798 </td><td>£149 </td><td>£221 </td><td>£185 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton' title='View our 10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-10-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£540 </td><td>£540 </td><td>£125 </td><td>£125 </td><td>£125 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, searching for shared houses for students in Moorlands, Bath can be a rewarding experience. The area offers a range of affordable housing options that cater to the needs of students, with convenient access to university campuses, shops, and amenities. Living in a shared house can provide a sense of community and support, as well as the opportunity to make new friends and form lasting connections. Additionally, splitting costs with housemates can help alleviate financial burdens and create a more affordable living situation. Overall, students looking for shared houses in Moorlands, Bath should carefully consider their priorities and preferences, collaborate with potential housemates to find a suitable living arrangement, and take the time to explore the area to ensure a comfortable and enjoyable student living experience[].</p></>)
};

export default BathMoorlandsHouse;