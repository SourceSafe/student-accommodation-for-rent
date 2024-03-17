
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


const  BathMoorlandsHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 7 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 7 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 7 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Living in a 7 bedroom student house in Moorlands, Bath, Somerset can be both exciting and challenging, especially when it comes to managing bills. To alleviate the stress of handling multiple bills, subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can make your life much easier. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, which covers all your utility bills, internet, and even TV license. This means you can <b>concentrate on your studies</b> and social life without worrying about splitting expenses with your housemates each month. <b>UniBills.com</b> takes care of everything for you, allowing you to budget effectively and avoid any unexpected costs. Say goodbye to the headache of managing multiple bills and hello to a convenient and stress-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Moorlands a breeze.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 7-bedroom house for students in Moorlands, Bath can be an exciting and practical option for those seeking communal living during their time at university. The search often involves considering factors such as location, amenities, and the dynamics of the housemates. These properties offer a great opportunity for students to socialize, collaborate on studies, and save on living expenses. By sharing a large house with fellow students, individuals can build lasting friendships and create a supportive environment for their academic pursuits. Moorlands, Bath is known for its student-friendly atmosphere and convenient access to shops, restaurants, and public transportation. Overall, residing in a shared 7-bedroom house in this vibrant area can enrich the university experience and provide a comfortable home away from home for students.</p></>)
};

export default BathMoorlandsHouse7;