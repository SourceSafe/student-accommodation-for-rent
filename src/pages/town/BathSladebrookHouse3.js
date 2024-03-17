
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 3 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 3 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 3 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 3 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple utility bills for your student house in Sladebrook, Bath, Somerset? Say goodbye to the stress of managing individual bills and hello to a more convenient living arrangement with an <b>all bills inclusive</b> service from <b>UniBills.com</b>. By opting for this service, you can <b>concentrate on your studies</b> without the added worry of budgeting for electricity, water, gas, and internet bills. <b>UniBills.com</b> takes care of all your utility needs, allowing you to enjoy the hassle-free all-inclusive option provided by their experienced team. With just one monthly payment, you can enjoy the comfort of your 3 bedroom student house without any additional financial surprises. Embrace the simplicity of streamlined living and make the most of your student experience in Sladebrook by choosing an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience firsthand.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you're a student in Sladebrook, Bath, looking for a shared 3-bedroom house with roommates, you're in luck! With the vibrant student community in the area, there are plenty of options available. By sharing a house with roommates, you can split the rent and utilities, making living costs more affordable. In addition, living with other students can provide a supportive and social environment, perfect for making new friends and studying together. When looking for a shared 3-bedroom house in Sladebrook, Bath, consider factors such as location, amenities, and lease terms. Take the time to visit potential houses, meet the current tenants, and ensure the living arrangement aligns with your needs and preferences. Overall, finding a shared house can create a comfortable and enjoyable living experience while studying in Sladebrook, Bath.</p></>)
};

export default BathSladebrookHouse3;