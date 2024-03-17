
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


const  BathMoorlandsHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-8-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 8 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 8 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 8 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 8 bedroom student House in Moorlands, Bath, Somerset is a smart choice for busy students looking to simplify their living arrangements. With <b>UniBills.com</b>, you can enjoy the hassle free all inclusive option provided by <b>UniBills.com</b>, giving you the peace of mind that your utility bills are taken care of. This means you can <b>concentrate on your studies</b> without having to worry about managing multiple bills or dealing with unexpected expenses. By opting for an <b>all bills inclusive</b> service, you can enjoy the convenience of a fixed monthly payment that covers all your utility costs, including gas, electricity, water, and internet. This not only helps you budget more effectively but also saves you time and stress. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and experience the benefits of a truly all inclusive living experience.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>After an extensive search for shared 8 bedroom houses for students in Moorlands, Bath, it is clear that this area offers a variety of housing options suitable for large groups. The availability of such spacious accommodation is beneficial for students looking to live together while studying in a cost-effective way. The proximity to local amenities and the university campus make Moorlands an attractive location for student housing. By sharing a house with seven other students, individuals have the opportunity to split costs, build a sense of community, and enhance their overall living experience. In conclusion, Moorlands in Bath provides an ideal setting for students in search of shared 8 bedroom houses, offering both convenience and affordability for those looking to live together during their academic years.</p></>)
};

export default BathMoorlandsHouse8;