
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

<b>Shared Houses for Students in Moorlands, Bath</b> offer a convenient and affordable housing option for students studying in Bath. These houses typically come fully furnished and equipped with amenities that cater to student needs, providing a comfortable and communal living environment. Located in Moorlands, Bath, these shared houses are within close proximity to local universities, making them a popular choice among students looking for convenient accommodation options.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-houses-for-students-in-moorlands-bath.png')} alt='Shared Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_houses_for_students_in_moorlands,_bath">Prices for Shared Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_houses_for_students_in_moorlands,_bath">Cheap Shared Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_houses_for_students_in_moorlands,_bath__recently_added">Shared Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_houses_for_students_in_moorlands,_bath__recently_reduced">Shared Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_houses_for_students_in_moorlands,_bath__houses">Prices for Shared Houses for Students in Moorlands, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£691 per month </td><td><button className = 'searchButton' title='View our Shared Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Moorlands, Bath, Somerset looking for hassle-free accommodation? Look no further! Subscribe to an <b>all bills inclusive</b> service offered by <b>UniBills.com</b> and enjoy the convenience of having all your bills covered in one easy payment. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> without worrying about managing multiple bills. Say goodbye to the stress of budgeting for utilities and internet, and instead, enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. Their transparent pricing and reliable services make them the go-to choice for students looking for convenience and peace of mind. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of an <b>all bills inclusive</b> service in your student house in Moorlands.</p><a id = "cheap_shared_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_houses_for_students_in_moorlands,_bath__houses"> <h2>Prices for Shared Houses for Students in Moorlands, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>3 Bed House </td><td><button className = 'searchButton' title='View our 3 Bed Houses' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 3 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£685 </td><td>£624 </td><td>£139 </td><td>£159 </td><td>£145 </td></tr><tr><td>4 Bed House </td><td><button className = 'searchButton' title='View our 4 Bed Houses' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 4 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£495 </td><td>£783 </td><td>£618 </td><td>£115 </td><td>£182 </td><td>£143 </td></tr><tr><td>5 Bed House </td><td><button className = 'searchButton' title='View our 5 Bed Houses' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£953 </td><td>£636 </td><td>£120 </td><td>£221 </td><td>£147 </td></tr><tr><td>6 Bed House </td><td><button className = 'searchButton' title='View our 6 Bed Houses' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-6-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 6 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£560 </td><td>£953 </td><td>£772 </td><td>£130 </td><td>£221 </td><td>£179 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton' title='View our 7 Bed Houses' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£600 </td><td>£810 </td><td>£673 </td><td>£139 </td><td>£188 </td><td>£156 </td></tr><tr><td>8 Bed House </td><td><button className = 'searchButton' title='View our 8 Bed Houses' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-8-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 8 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£643 </td><td>£953 </td><td>£798 </td><td>£149 </td><td>£221 </td><td>£185 </td></tr><tr><td>10 Bed House </td><td><button className = 'searchButton' title='View our 10 Bed Houses' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-10-bedroom-houses-for-students-in-moorlands-bath' title  = 'View Key Statistics for 10 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£540 </td><td>£540 </td><td>£540 </td><td>£125 </td><td>£125 </td><td>£125 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared house for students in Moorlands, Bath can be a rewarding experience. The abundance of options available, ranging from cozy cottages to spacious townhouses, ensures that every student can find a suitable place to call home. The convenient location of Moorlands, with its proximity to both the university and city center, offers residents easy access to all the amenities Bath has to offer. Additionally, the vibrant community atmosphere and diverse range of student-friendly activities make living in Moorlands a truly enriching experience. Overall, finding a shared house in Moorlands allows students to not only secure comfortable and affordable accommodation but also immerse themselves in a dynamic and welcoming environment.</p></>)
};

export default BathMoorlandsHouse;