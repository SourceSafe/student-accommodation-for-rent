
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


const  BathKingswayHouse10 = () => 
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 10 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 10 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 10 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 10 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>If you're a student living in a 10-bedroom house in Kingsway, Bath, Somerset, managing all the bills can be a daunting task. That's where <b>UniBills.com</b> comes in - offering an <b>all bills inclusive</b> service that takes the hassle out of utilities and allows you to <b>concentrate on your studies</b>. With <b>UniBills.com</b>, you can enjoy the convenience of a single monthly payment that covers all your bills - including electricity, gas, water, internet, and even TV license. Say goodbye to juggling multiple accounts and worrying about unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath a whole lot easier with the hassle-free all-inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 10-bedroom house for students in Kingsway, Bath can be an exciting yet challenging task. With a vibrant student community and a range of amenities nearby, finding the perfect accommodation is essential. Shared houses offer a great opportunity to live with peers and create lasting memories. In Kingsway, Bath, these properties often come fully furnished with spacious living areas, well-equipped kitchens, and communal areas for socializing. Location is key, with easy access to universities, transport links, and local shops and restaurants. With a variety of options available, it's important to consider factors such as rent, utilities, and house rules before making a decision. Overall, investing time in finding the right shared house can lead to a rewarding and memorable student experience in Kingsway, Bath[].</p></>)
};

export default BathKingswayHouse10;