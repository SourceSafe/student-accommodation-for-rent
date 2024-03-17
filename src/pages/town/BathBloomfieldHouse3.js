
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


const  BathBloomfieldHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 3 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 3 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 3 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 3 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3 bedroom house in Bloomfield, Bath, Somerset? Worrying about managing multiple bills on top of your studies can be a source of stress and distraction. That's where an <b>all bills inclusive</b> service, like the one offered by <b>UniBills.com</b>, can come in handy. By opting for an all-inclusive package, you can enjoy the convenience of having your rent, utilities, internet, and other essentials all covered in one simple payment. This allows you to <b>concentrate on your studies</b> and social life without the hassle of budgeting and coordinating with multiple providers. <b>UniBills.com</b> ensures that you have everything you need to live comfortably in your student house, leaving you free to focus on what matters most. Get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy the hassle-free all-inclusive option provided.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you're searching for a shared 3-bedroom house for students in Bloomfield, Bath, you've come to the right place. This desirable area offers a range of properties perfect for student living. With spacious communal areas, multiple bedrooms, and close proximity to amenities and transport links, these houses are ideal for sharing with friends. Whether you're looking for a cozy home or a place to socialize and study together, the options in Bloomfield are sure to meet your needs. In conclusion, finding a shared 3-bedroom house in this vibrant neighborhood provides a perfect balance of convenience and comfort for student living. Don't miss out on the opportunity to secure a fantastic living arrangement in Bloomfield, Bath.</p></>)
};

export default BathBloomfieldHouse3;