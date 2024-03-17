
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


const  BathBathSpaHouse2 = () => 
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

    return (<><h1>Shared 2 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-2-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 2 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 2 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 2 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 2 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 2 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£1170 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom house in Bath Spa, Bath, Somerset? Say goodbye to the stress of dealing with utility bills and enjoy the convenience of an <b>all bills inclusive</b> service from <b>UniBills.com</b>. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and leave the hassle of managing bills behind. By opting for the <b>all bills inclusive</b> option provided by <b>UniBills.com</b>, you can save time and energy, allowing you to focus on what truly matters. Forget about splitting bills with your housemates or worrying about unexpected expenses. With <b>UniBills.com</b>, everything is taken care of for you. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and discover the ease and simplicity of living in a student house with all bills included.</p><a id = "cheap_shared_2_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 2 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 2 bedroom houses for students in Bath Spa, Bath can be a challenging task, but with the right approach and resources, it can also be a rewarding experience. It is important to consider factors such as location, budget, amenities, and compatibility with potential housemates when looking for the perfect accommodation. Bath Spa offers a range of housing options for students, from cozy townhomes to modern apartments, ensuring that every student can find a suitable living space to call home. With its vibrant student community and rich cultural history, Bath Spa provides the ideal setting for students to thrive both academically and socially. Overall, finding a shared 2 bedroom house in Bath Spa can offer students a comfortable and convenient living arrangement while also fostering friendships and creating lasting memories.</p></>)
};

export default BathBathSpaHouse2;