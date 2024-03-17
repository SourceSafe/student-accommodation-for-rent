
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


const  BathSladebrookHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 4 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 4 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 4 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 4 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4-bedroom house in Sladebrook, Bath, Somerset? Managing bills can be a time-consuming and stressful task, especially when you have exams and assignments to focus on. This is where an <b>all bills inclusive</b> service like <b>UniBills.com</b> can come to your rescue. By opting for <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, where all your bills – including utilities, internet, and even TV license – are taken care of in one convenient package. This means you can <b>concentrate on your studies</b> without the worry of managing multiple bills. With <b>UniBills.com</b>, you can streamline your living expenses and make budgeting easier. So why not save yourself the headache and get a quote from UniBills.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 4-bedroom house for students in Sladebrook, Bath can be a great option for those seeking communal living arrangements. These types of properties often offer spacious accommodations and the opportunity to split costs among roommates. With the bustling student scene in Sladebrook, sharing a house with others can provide a sense of community and support during busy academic years. It's important to consider factors such as location, amenities, and rental agreements when searching for the perfect shared house. In conclusion, finding a shared 4-bedroom house in Sladebrook, Bath can be an exciting and rewarding experience for students looking to immerse themselves in student life while enjoying the benefits of shared living.</p></>)
};

export default BathSladebrookHouse4;