
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


const  BathBloomfieldHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 7 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 7 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 7 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 7 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your student house in Bloomfield, Bath, Somerset? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service that will simplify your life. With 7 bedrooms to manage, the last thing you need is the stress of tracking down utility payments each month. By choosing <b>UniBills.com</b>, you can enjoy the hassle free all inclusive option, allowing you to <b>concentrate on your studies</b> and social life without the added worry of bills. Whether it's electricity, water, gas, or internet, <b>UniBills.com</b> covers it all in one convenient package. Say goodbye to the endless paperwork and late fees, and say hello to a more organized and stress-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this web site today and take the first step towards a more relaxed and focused student life.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 7-bedroom house for students in Bloomfield, Bath, can be an exciting yet challenging endeavor. With its vibrant student community and close proximity to the University of Bath, Bloomfield is an ideal location for student accommodation. When searching for a suitable property, it's essential to consider factors such as budget, location, and amenities. Shared 7-bedroom houses offer the opportunity to live with fellow students, fostering a sense of community and companionship. In conclusion, finding the perfect shared house requires careful planning and research, but the rewards of a comfortable and sociable living environment make it all worthwhile in the end.</p></>)
};

export default BathBloomfieldHouse7;