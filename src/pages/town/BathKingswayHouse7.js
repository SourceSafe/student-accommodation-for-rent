
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


const  BathKingswayHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 7 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 7 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 7 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 7 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you tired of trying to juggle multiple bills, keeping track of due dates, and dealing with unexpected expenses in your student house? Look no further! Subscribing to an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b>, for your 7 bedroom student house in Kingsway, Bath, Somerset, can provide you with peace of mind and allow you to <b>concentrate on your studies</b>. With <b>UniBills.com</b>, all your utility bills, including gas, electricity, water, and internet, are rolled into one convenient monthly payment. Say goodbye to the stress of managing individual bills and hello to convenience and simplicity. Imagine being able to enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, giving you more time to socialize, relax, and focus on your academic goals. Don't wait any longer to simplify your student living experience - get a quote from UniBills.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 7-bedroom houses for students in Kingsway, Bath, it is important to consider the convenience and affordability of communal living. Shared accommodations offer an opportunity to bond with housemates, split costs, and enjoy a bustling social atmosphere. When looking for a place, seek out properties with spacious common areas, well-equipped kitchens, and ample bathrooms to accommodate the needs of a larger group. Additionally, proximity to campus, amenities, and public transportation should be taken into account for a seamless student experience. Overall, finding a shared 7-bedroom house in Kingsway can provide students with a supportive and vibrant living environment conducive to both study and social life[].</p></>)
};

export default BathKingswayHouse7;