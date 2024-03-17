
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


const  BathKingswayHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 3 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 3 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 3 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 3 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Living in a 3-bedroom student house in Kingsway, Bath, Somerset can be a thrilling experience. However, with the hustle and bustle of student life, managing bills and utilities can be a hassle that distracts you from focusing on your studies. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of sorting out individual bills for electricity, water, gas, and internet. With <b>UniBills.com</b>, you can streamline your expenses and <b>concentrate on your studies</b>, all while enjoying the convenience of a fully inclusive service. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Kingsway, Bath, Somerset a breeze.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 3-bedroom houses for students in Kingsway, Bath can be a great option for those looking for affordable and spacious accommodation that promotes a sense of community. By splitting the rent and utilities among three people, students can enjoy a comfortable living space while minimizing costs. Additionally, living with housemates can provide a supportive environment and the opportunity to build lasting friendships. As a sought-after location for students due to its proximity to amenities and transportation links, Kingsway offers convenience and a vibrant atmosphere. In conclusion, finding a shared 3-bedroom house in this area can offer a balance of independence and social connection, making it an appealing choice for students at the University of Bath.</p></>)
};

export default BathKingswayHouse3;