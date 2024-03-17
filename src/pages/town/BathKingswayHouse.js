
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


const  BathKingswayHouse = () => 
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

    return (<><h1>Shared Houses for Students in Kingsway, Bath</h1><p>We have listings for <b>Shared Houses for Students in Kingsway, Bath</b> for the academic year 2024. <b>Shared Houses for Students in Kingsway, Bath</b> are perfect for students looking for a comfortable and convenient living arrangement. Located in the heart of Bath, these houses offer proximity to universities, public transportation, and local amenities, making it an ideal choice for student accommodation.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-houses-for-students-in-kingsway-bath.png')} alt='Shared Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_houses_for_students_in_kingsway,_bath">Prices for Shared Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_houses_for_students_in_kingsway,_bath">Cheap Shared Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_houses_for_students_in_kingsway,_bath__recently_added">Shared Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_houses_for_students_in_kingsway,_bath__recently_reduced">Shared Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_houses_for_students_in_kingsway,_bath__houses">Prices for Shared Houses for Students in Kingsway, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£691 per month </td><td><button className = 'searchButton' title='View our Shared Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your student house in Kingsway, Bath, Somerset? Say goodbye to the headache of managing various payments each month by subscribing to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient solution that covers all your utility and service bills in one easy package. With this service, you can <b>concentrate on your studies</b> and social life without worrying about splitting bills or chasing housemates for payments. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and make your student life more manageable. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your living expenses today.</p><a id = "cheap_shared_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_houses_for_students_in_kingsway,_bath__houses"> <h2>Prices for Shared Houses for Students in Kingsway, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>3 Bed House </td><td><button className = 'searchButton' title='View our 3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£685 </td><td>£624 </td><td>£139 </td><td>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton' title='View our 4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£495 </td><td>£783 </td><td>£618 </td><td>£115 </td><td>£182 </td><td>£143 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton' title='View our 5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£953 </td><td>£636 </td><td>£120 </td><td>£221 </td><td>£147 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton' title='View our 6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£560 </td><td>£953 </td><td>£772 </td><td>£130 </td><td>£221 </td><td>£179 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton' title='View our 7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£810 </td><td>£673 </td><td>£139 </td><td>£188 </td><td>£156 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton' title='View our 8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£643 </td><td>£953 </td><td>£798 </td><td>£149 </td><td>£221 </td><td>£185 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton' title='View our 10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-10-bedroom-houses-for-students-in-kingsway-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£540 </td><td>£540 </td><td>£125 </td><td>£125 </td><td>£125 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, searching for shared houses for students in Kingsway, Bath can be an exciting yet daunting task. With a variety of options available, from cozy cottages to modern apartments, there is something to suit everyone's needs and preferences. Students can enjoy the vibrant and bustling atmosphere of the city while living in close proximity to the University of Bath and other amenities. By choosing a shared house, students have the opportunity to share living expenses, develop life-long friendships, and create a supportive community. It's important to consider factors such as location, budget, and housemates when making a decision. Ultimately, finding the perfect shared house can enhance the overall student experience and make Kingsway a memorable and enjoyable place to call home.</p></>)
};

export default BathKingswayHouse;