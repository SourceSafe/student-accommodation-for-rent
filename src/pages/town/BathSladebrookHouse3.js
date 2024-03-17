
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


const  BathSladebrookHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-3-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 3 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 3 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 3 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 3 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Living in a 3-bedroom student house in Sladebrook, Bath, Somerset can be an exciting experience, but managing bills can often be a hassle. By subscribing to an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b>, you can enjoy the convenience of having all your utility bills covered in one monthly payment. This means you can <b>concentrate on your studies</b> and social life without worrying about splitting bills or tracking expenses. <b>UniBills.com</b> takes the stress out of managing household finances, allowing you to relax and enjoy your time at university. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to bill-related stress and hello to a more relaxed student living experience.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 3-bedroom houses for students in Sladebrook, Bath, there are a few key points to consider. Firstly, the location is ideal for students as it offers a peaceful and safe environment, yet is within close proximity to the University of Bath and the city center. Additionally, the convenience of having housemates to split rent and utilities with can be a huge financial benefit. Moreover, sharing a house with other students allows for a social and supportive living environment, making it easier to adjust to student life. In conclusion, looking for shared 3-bedroom houses in Sladebrook, Bath is a great option for students looking for affordable accommodation, a sense of community, and a convenient location.</p></>)
};

export default BathSladebrookHouse3;