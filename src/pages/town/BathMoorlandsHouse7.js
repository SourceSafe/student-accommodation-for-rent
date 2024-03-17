
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-7-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 7 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 7 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 7 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you tired of the constant stress of managing utility bills for your student house in Moorlands, Bath, Somerset? Look no further than <b>UniBills.com</b> for the perfect solution. By subscribing to an <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without the worry of budgeting for electricity, water, gas, or internet bills. With 7 bedrooms to manage, having all your bills included in one convenient package can save you time and money. <b>UniBills.com</b> takes the headache out of household expenses, leaving you free to focus on what matters most. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Moorlands a breeze.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 7-bedroom houses for students in Moorlands, Bath, there are certainly some key considerations to keep in mind. With such a large group of students living together, finding a property with ample space and privacy is essential. It's also important to look for a place that is well-maintained and has all the necessary amenities to support a comfortable living arrangement. Additionally, proximity to campus and local amenities, such as shops and restaurants, can greatly enhance the overall living experience. It's wise to carefully consider the rental agreement and ensure that all housemates are on the same page regarding expectations and responsibilities. Overall, finding a shared 7-bedroom house in Moorlands can offer a unique and enriching living experience for students, promoting a sense of community and camaraderie while studying in Bath.</p></>)
};

export default BathMoorlandsHouse7;