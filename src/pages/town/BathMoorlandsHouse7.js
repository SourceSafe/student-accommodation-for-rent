
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 7 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 7 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 7 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Living in a student house with seven bedrooms in Moorlands, Bath, Somerset can be a rewarding experience, but managing bills and utilities can often be a headache. By subscribing to an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b>, you can save time, money, and stress. With all your bills, including electricity, gas, water, internet, and even council tax all bundled into one convenient package, you can <b>concentrate on your studies</b> and social life without worrying about monthly payments and tracking expenses. <b>UniBills.com</b> takes care of all the administrative work, so you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to chasing flatmates for their share of the bills or dealing with multiple service providers – with <b>UniBills.com</b>, everything is taken care of. Get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy a seamless and convenient living experience in your student house.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 7-bedroom house for students in Moorlands, Bath can be a challenging yet exciting task. With such a large group, it's essential to find a property that accommodates everyone's needs. By exploring properties in Moorlands, Bath, you'll discover a variety of options that offer spacious living areas, multiple bathrooms, and convenient amenities. Shared houses in this area often come equipped with modern kitchens, communal areas, and sometimes even outdoor spaces. When searching for a student house, consider factors such as location, rental price, and proximity to local universities and transportation. Ultimately, finding a shared 7-bedroom house in Moorlands, Bath can provide a comfortable and convenient living arrangement for you and your fellow students[].</p></>)
};

export default BathMoorlandsHouse7;