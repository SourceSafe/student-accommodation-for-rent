
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


const  BathBathSpaHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 7 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 7 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 7 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 7 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£648 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 7 bedroom student house in Bath Spa, Bath, Somerset, is a smart way to simplify your living arrangements and <b>concentrate on your studies</b> without the added stress of managing individual bills. <b>UniBills.com</b> offers a convenient solution by bundling all utilities into one affordable monthly payment, allowing you to budget more effectively and avoid any unexpected costs. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers electricity, water, internet, and more, making your student life a whole lot easier. Say goodbye to the headache of sorting out different bills and hello to a more streamlined and stress-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life a whole lot easier.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 7-bedroom house for students in Bath Spa can be both exciting and challenging. The vibrant and historic city of Bath offers a rich cultural experience for students, making it a popular choice for many. When searching for a property, it is important to consider factors such as location, amenities, and budget. With careful planning and collaboration with housemates, students can create a comfortable and conducive living environment. Shared houses provide the opportunity for social interaction and support from fellow students, helping to enhance the overall university experience. By prioritizing communication, flexibility, and compromise, students can successfully navigate the process of finding and living in a shared 7-bedroom house in Bath Spa. With its picturesque scenery and dynamic community, Bath Spa is an ideal location for students looking to make the most of their university years.</p></>)
};

export default BathBathSpaHouse7;