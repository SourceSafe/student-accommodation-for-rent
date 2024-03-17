
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


const  BathSladebrookHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 6 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 6 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 6 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 6 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£772 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 6 bedroom house in Sladebrook, Bath, Somerset? Keeping track of multiple bills can be a hassle, taking away from valuable study time. That's where <b>UniBills.com</b> comes in to help. By subscribing to an <b>all bills inclusive</b> service, you can enjoy the convenience of having all your utility bills combined into one easy payment. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without worrying about managing various bills. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and say goodbye to the stress of handling multiple bills. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and make your student life more convenient and enjoyable.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the bustling student hub of Sladebrook, Bath, finding a shared 6-bedroom house can be a great option for those looking to live with friends or fellow students. These properties provide ample space for socializing, studying, and creating lasting memories. With a large number of bedrooms, everyone can have their own private space while still enjoying the benefits of communal living. Shared 6-bedroom houses in Sladebrook are often conveniently located near universities, public transport, and local amenities, making them an ideal choice for students. In conclusion, choosing a shared 6-bedroom house in Sladebrook can offer a comfortable and enjoyable living experience for students looking for affordable accommodation with a strong sense of community and camaraderie.</p></>)
};

export default BathSladebrookHouse6;