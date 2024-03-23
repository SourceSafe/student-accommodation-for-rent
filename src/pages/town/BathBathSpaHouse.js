
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


const  BathBathSpaHouse = () => 
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

    return (<><h1>Shared Houses for Students in Bath Spa, Bath</h1><p>We have listings for <b>Shared Houses for Students in Bath Spa, Bath</b> for the academic year 2024. <b>Shared Houses for Students in Bath Spa, Bath</b> are perfect for those attending Bath Spa University or the University of Bath. These houses typically offer affordable rent, shared living spaces, and a great opportunity to meet other students in the area.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-houses-for-students-in-bath-spa-bath.png')} alt='Shared Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_houses_for_students_in_bath_spa,_bath">Prices for Shared Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_houses_for_students_in_bath_spa,_bath">Cheap Shared Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_houses_for_students_in_bath_spa,_bath__recently_added">Shared Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_houses_for_students_in_bath_spa,_bath__houses">Prices for Shared Houses for Students in Bath Spa, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£626 per month </td><td><button className = 'searchButton' title='View our Shared Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student at Bath Spa looking for hassle-free accommodation? Look no further than the <b>all bills inclusive</b> service provided by <b>UniBills.com</b>. With this convenient option, you can enjoy the convenience of having all your bills, including electricity, water, and internet, rolled into one simple monthly payment. By choosing this service, you can free up valuable time and energy to <b>concentrate on your studies</b>, without the stress of managing multiple bills. <b>UniBills.com</b> takes care of all the details, allowing you to focus on what truly matters. Say goodbye to the headache of sorting through various bills each month and opt for the ease and simplicity of the all inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of stress-free living.</p><a id = "cheap_shared_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_houses_for_students_in_bath_spa,_bath__houses"> <h2>Prices for Shared Houses for Students in Bath Spa, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>2 Bed House </td><td><button className = 'searchButton' title='View our 2 Bed Houses' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 2 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1157 </td><td>£1183 </td><td>£1170 </td><td>£269 </td><td>£275 </td><td>£272 </td></tr><tr><td>3 Bed House </td><td><button className = 'searchButton' title='View our 3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£533 </td><td>£687 </td><td>£626 </td><td>£123 </td><td>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton' title='View our 4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£475 </td><td>£770 </td><td>£604 </td><td>£110 </td><td>£179 </td><td>£140 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton' title='View our 5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£500 </td><td>£830 </td><td>£625 </td><td>£116 </td><td>£193 </td><td>£145 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton' title='View our 6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£533 </td><td>£850 </td><td>£651 </td><td>£123 </td><td>£197 </td><td>£151 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton' title='View our 7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£750 </td><td>£648 </td><td>£127 </td><td>£174 </td><td>£150 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton' title='View our 8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£550 </td><td>£717 </td><td>£613 </td><td>£127 </td><td>£166 </td><td>£142 </td></tr><tr><td>9 Bed House </td><td><button className = 'searchButton' title='View our 9 Bed Houses' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-9-bedroom-houses-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 9 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£700 </td><td>£655 </td><td>£141 </td><td>£162 </td><td>£152 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, searching for shared houses for students in Bath Spa, Bath can be an exciting yet challenging experience. With a variety of options available, including different sizes, locations, and amenities, finding the perfect place to live with roommates can take time and effort. It's essential to consider important factors such as budget, proximity to campus, and the compatibility of potential housemates. Researching and visiting multiple properties can help in making an informed decision. Ultimately, living in a shared house can provide a sense of community, social connections, and a fun college experience. With careful planning and communication, students can create a comfortable and enjoyable living situation while studying in beautiful Bath Spa.</p></>)
};

export default BathBathSpaHouse;