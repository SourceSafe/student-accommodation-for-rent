
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


const  BathSladebrookHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 5 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 5 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 5 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 5 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£636 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5 bedroom house in Sladebrook, Bath, Somerset? Managing bills on top of your studies can be stressful and time-consuming. Why not make your life easier and subscribe to an <b>all bills inclusive</b> service like <b>UniBills.com</b>? By opting for <b>all bills inclusive</b>, you can enjoy the hassle-free option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without the worry of paying multiple bills each month. <b>UniBills.com</b> takes care of all your utility payments, including water, gas, electricity, and internet, giving you peace of mind and saving you valuable time. Say goodbye to the hassle of splitting bills with your housemates and let <b>UniBills.com</b> handle everything for you. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life more manageable today.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 5 bedroom houses for students in Sladebrook, Bath can be both exciting and challenging. The variety of options available in this area caters well to the needs of student living, with convenient locations, spacious accommodations, and a vibrant community atmosphere. Students looking for a mix of social interaction and privacy can find suitable properties that offer a balance of both. Additionally, the affordability of shared housing in Sladebrook makes it a popular choice among students looking to save on living expenses while still enjoying a comfortable and well-equipped living space. Overall, living in a shared 5 bedroom house in Sladebrook offers a unique opportunity for students to build friendships, create lasting memories, and experience a fulfilling academic and social life during their time in Bath.</p></>)
};

export default BathSladebrookHouse5;