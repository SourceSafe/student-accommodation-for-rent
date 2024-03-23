
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 7 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 7 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 7 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 7-bedroom house in Moorlands, Bath, Somerset? Say goodbye to the stress of splitting bills among housemates and managing multiple accounts. Subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can make your life a whole lot easier. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers all your bills in one convenient package. Instead of worrying about utility bills, internet, and other expenses, you can <b>concentrate on your studies</b> and enjoying your time as a student. Plus, with <b>UniBills.com</b>, you can easily get a quote and compare it to any other accommodation on this website to ensure you're getting the best deal. Embrace the convenience and peace of mind that comes with an <b>all bills inclusive</b> service, and make your student life in Moorlands, Bath, Somerset, truly stress-free.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for shared 7-bedroom houses for students in Moorlands, Bath, it is essential to consider factors such as location, amenities, and rental prices. In Moorlands, students can find a variety of spacious and comfortable houses that cater to their needs, allowing for a convenient and enjoyable living experience. With ample bedrooms, communal living areas, and kitchen facilities, these shared houses provide the perfect environment for socializing and studying. Additionally, the proximity to local shops, restaurants, and public transportation make it easy for students to explore the area and take advantage of all the amenities Bath has to offer. Overall, finding a shared 7-bedroom house in Moorlands is a great option for students looking for a well-equipped and affordable accommodation option in a vibrant and welcoming community. Whether you are looking to share a house with friends or meet new roommates, Moorlands offers a variety of options to suit your needs.</p></>)
};

export default BathMoorlandsHouse7;