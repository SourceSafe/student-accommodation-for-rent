
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


const  BathMoorlandsHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-4-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 4 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 4 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 4 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student house in Moorlands, Bath, Somerset can offer you many benefits. By choosing <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by this reputable service. With all bills, including utilities, internet, and even TV license, taken care of, you can <b>concentrate on your studies</b> without worrying about managing multiple bills. <b>UniBills.com</b> ensures that you have a stress-free living experience, allowing you to focus on your academic pursuits and enjoy a comfortable lifestyle. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and simplify your student life today.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for a shared 4-bedroom house for students in Moorlands, Bath offers a plethora of benefits. Not only does it provide cost-effective accommodation, but it also fosters a sense of community among housemates. The convenient location in Moorlands ensures easy access to local amenities and transportation links, making it a prime choice for students studying in Bath. With spacious living areas and four bedrooms, there is plenty of room for privacy and socializing. As the search for student housing can be overwhelming, opting for a shared 4-bedroom house in Moorlands provides a comfortable and supportive environment for academic and personal growth. In conclusion, this housing option offers the best of both worlds - a cozy home away from home and a vibrant student community to thrive in[].</p></>)
};

export default BathMoorlandsHouse4;