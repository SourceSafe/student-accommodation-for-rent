
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-4-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 4 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 4 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 4 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 4 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4 bedroom house in Sladebrook, Bath, Somerset? Managing multiple bills for utilities can often be a hassle and a distraction from your studies. By subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>, you can enjoy the convenience of having all your bills rolled into one easy payment. Imagine not having to worry about remembering due dates or splitting expenses with housemates each month. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and have peace of mind knowing that your bills are taken care of. Save time and avoid the stress of managing separate bills by opting for the hassle-free all inclusive option provided by <b>UniBills.com</b>. Get a quote from UniBills.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you're a student looking for shared accommodation in Sladebrook, Bath, a 4-bedroom house can be the perfect option. With plenty of space for each housemate, these properties offer a balance of shared living and individual privacy. In bustling student neighbourhoods like Sladebrook, these homes are often conveniently located near campus and local amenities. When searching for a shared 4-bedroom house, it's essential to consider factors such as cost, lease terms, and housemate compatibility. By communicating openly with potential roommates and setting clear expectations, you can create a harmonious living environment. Overall, shared 4-bedroom houses in Sladebrook provide a comfortable and social living space for students looking to balance their academic and social lives while enjoying the vibrant community of Bath.</p></>)
};

export default BathSladebrookHouse4;