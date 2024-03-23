
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


const  BathBloomfieldHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 5 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 5 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 5 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 5 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£636 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Bloomfield, Bath, Somerset and looking for a hassle-free living experience? Look no further than subscribing to an <b>all bills inclusive</b> service for your 5 bedroom student house. <b>UniBills.com</b> offers the perfect solution to simplify your living arrangements and allow you to <b>concentrate on your studies</b> without worrying about utility bills or expenses. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, which covers all your bills including electricity, water, gas, and internet. Say goodbye to the stress of managing multiple bills and hello to a convenient and stress-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today to experience the benefits of an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the bustling city of Bloomfield, Bath, finding a shared 5-bedroom house for students can be both exciting and challenging. Each property offers unique features and amenities, catering to the needs of a large group. When searching for the perfect accommodation, consider factors such as proximity to campus, transportation options, and cost-sharing arrangements. Additionally, ensure that the property is in a safe and well-maintained neighborhood. Fortunately, Bloomfield offers a variety of housing options that cater to students, allowing them to live comfortably and conveniently during their academic journey. In conclusion, with careful research and consideration of your preferences and requirements, finding a shared 5-bedroom house for students in Bloomfield is definitely achievable and rewarding.</p></>)
};

export default BathBloomfieldHouse5;