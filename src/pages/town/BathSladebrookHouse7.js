
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


const  BathSladebrookHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 7 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 7 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 7 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 7 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>When living in a 7 bedroom student house in Sladebrook, Bath, Somerset, the last thing you want to worry about is managing multiple utility bills. This is where subscribing to an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b>, can be a game-changer. By opting for this service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers all your utility expenses in one convenient package. This means you can <b>concentrate on your studies</b> and social life without the stress of dealing with various bills and suppliers. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the ease and convenience of having all your bills taken care of in one go. Say goodbye to bill management and hello to a more relaxed student living experience.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the quest for shared 7-bedroom houses for students in Sladebrook, Bath, it becomes apparent that the options available cater to the needs of students seeking a communal living experience. These shared houses offer a practical solution for large groups of students looking for affordable accommodation near their university campus. The vibrant student community in Sladebrook makes it an ideal location for those seeking a balance between academic pursuits and a social lifestyle. With a range of amenities and facilities nearby, such as supermarkets, restaurants, and easy access to public transportation, students can enjoy a convenient and comfortable living arrangement. In conclusion, searching for shared 7-bedroom houses in Sladebrook not only offers students a cost-effective housing option but also fosters a sense of camaraderie and community among housemates, creating a memorable and enriching experience during their time at university.</p></>)
};

export default BathSladebrookHouse7;