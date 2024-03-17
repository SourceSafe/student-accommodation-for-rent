
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 7 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 7 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 7 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 7 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Tired of juggling multiple bills for your 7 bedroom student house in Bloomfield, Bath, Somerset? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service that takes the stress out of managing your utilities. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the headache of dealing with different providers. Enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>, where all your bills are rolled into one easy payment. Say goodbye to the endless phone calls and countless logins to pay each bill separately. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 7-bedroom house for students in Bloomfield, Bath offers a unique opportunity for a comfortable and convenient living arrangement. The abundance of spacious bedrooms ensures ample privacy for each resident while fostering a sense of community among housemates. With a location that is close to local amenities, educational institutions, and transport links, students can easily balance their academic and social lives. Additionally, the competitive pricing of shared accommodation makes it a cost-effective option for those looking to save money on rent. Overall, opting for a shared 7-bedroom house in Bloomfield is a wise choice for students seeking a harmonious balance of independence and camaraderie during their time in Bath[].</p></>)
};

export default BathBloomfieldHouse7;