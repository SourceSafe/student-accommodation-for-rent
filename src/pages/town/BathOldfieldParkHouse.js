
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


const  BathOldfieldParkHouse = () => 
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

    return (<><h1>Shared Houses for Students in Oldfield Park, Bath</h1><p>We have listings for <b>Shared Houses for Students in Oldfield Park, Bath</b> for the academic year 2024. 
<b>Shared Houses for Students in Oldfield Park, Bath</b> offer a convenient and affordable housing option for students studying in Bath. These properties typically have multiple bedrooms, shared living spaces, and are located close to campus and amenities.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-houses-for-students-in-oldfield-park-bath.png')} alt='Shared Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_houses_for_students_in_oldfield_park,_bath">Prices for Shared Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_houses_for_students_in_oldfield_park,_bath">Cheap Shared Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_houses_for_students_in_oldfield_park,_bath__recently_added">Shared Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_houses_for_students_in_oldfield_park,_bath__houses">Prices for Shared Houses for Students in Oldfield Park, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£647 per month </td><td><button className = 'searchButton' title='View our Shared Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Oldfield Park, Bath, Somerset? If so, you can benefit greatly from subscribing to an <b>all bills inclusive</b> service for your student house. <b>UniBills.com</b> offers a convenient solution that takes the stress out of managing multiple bills, allowing you to <b>concentrate on your studies</b> instead. With all utilities such as gas, electricity, water, and internet included in one simple monthly payment, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. Say goodbye to the hassle of chasing up individual bills and worrying about unexpected costs. By choosing an <b>all bills inclusive</b> service, you can budget effectively and avoid any surprises. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and enjoy a more convenient and stress-free student living experience.</p><a id = "cheap_shared_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_houses_for_students_in_oldfield_park,_bath__houses"> <h2>Prices for Shared Houses for Students in Oldfield Park, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>2 Bed House </td><td><button className = 'searchButton' title='View our 2 Bed Houses' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 2 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1157 </td><td>£1183 </td><td>£1170 </td><td>£269 </td><td>£275 </td><td>£272 </td></tr><tr><td>3 Bed House </td><td><button className = 'searchButton' title='View our 3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£533 </td><td>£717 </td><td>£631 </td><td>£123 </td><td>£166 </td><td>£146 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton' title='View our 4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£475 </td><td>£783 </td><td>£608 </td><td>£110 </td><td>£182 </td><td>£141 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton' title='View our 5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£500 </td><td>£953 </td><td>£626 </td><td>£116 </td><td>£221 </td><td>£145 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton' title='View our 6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£953 </td><td>£701 </td><td>£127 </td><td>£221 </td><td>£163 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton' title='View our 7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£565 </td><td>£810 </td><td>£669 </td><td>£131 </td><td>£188 </td><td>£155 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton' title='View our 8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£953 </td><td>£689 </td><td>£127 </td><td>£221 </td><td>£160 </td></tr><tr><td>9 Bed House </td><td><button className = 'searchButton' title='View our 9 Bed Houses' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-9-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 9 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£760 </td><td>£685 </td><td>£141 </td><td>£176 </td><td>£159 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton' title='View our 10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-10-bedroom-houses-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£540 </td><td>£540 </td><td>£125 </td><td>£125 </td><td>£125 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, finding a shared house for students in Oldfield Park, Bath, can be a rewarding and practical option. With its close proximity to the university and vibrant student community, it offers convenience and a sociable atmosphere. The range of accommodation options caters to different preferences and budgets, making it accessible for students. It's important to consider factors such as location, transportation, and amenities when searching for the perfect shared house. By doing thorough research and visiting potential properties, students can find a comfortable and suitable living arrangement. Overall, Oldfield Park provides a supportive environment for students and fosters a sense of community within the student population. By choosing to live in a shared house in Oldfield Park, students can experience a balance of independence and camaraderie while pursuing their studies.</p></>)
};

export default BathOldfieldParkHouse;