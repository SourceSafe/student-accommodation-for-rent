
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


const  BathSladebrookStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-sladebrook-bath.png')} alt='Studio Apartments for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_sladebrook,_bath">Prices for Studio Apartments for Students in Sladebrook, Bath</a></li><li><a href = "#studio_apartments_for_students_in_sladebrook,_bath__all_bills_inclusive">Studio Apartments for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_sladebrook,_bath">Cheap Studio Apartments for Students in Sladebrook, Bath</a></li><li><a href = "#studio_apartments_for_students_in_sladebrook,_bath__recently_added">Studio Apartments for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_sladebrook,_bath__recently_reduced">Studio Apartments for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_sladebrook,_bath"> <h2>Prices for Studio Apartments for Students in Sladebrook, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for the perfect accommodation in Sladebrook, Bath, Somerset? Look no further! By subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student Studio through <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by this trusted company. With all bills included in one convenient package, you can <b>concentrate on your studies</b> and social life without worrying about utility bills and other expenses. <b>UniBills.com</b> takes care of everything for you, from electricity to water, so you can have peace of mind and a stress-free living experience. Get a quote from UniBills.</p><a id = "cheap_studio_apartments_for_students_in_sladebrook,_bath"> <h2>Cheap Studio Apartments for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_sladebrook,_bath__recently_added"> <h2>Studio Apartments for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Studio Apartments for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding studio apartments for students in Sladebrook, Bath can be a rewarding yet challenging task. With the demand for student accommodations in the area, it is important to start the search early and consider all options available. Studio apartments offer convenience, privacy, and independence, making them an attractive choice for students looking for a cozy space to call their own. Additionally, living in Sladebrook provides easy access to campus facilities, local amenities, and public transportation. When looking for a studio apartment, it is essential to consider factors such as location, amenities, budget, and lease terms to ensure a comfortable living environment. Overall, students searching for studio apartments in Sladebrook will find a range of options to suit their needs and preferences, ultimately enhancing their overall university experience.</p></>)
};

export default BathSladebrookStudio1;