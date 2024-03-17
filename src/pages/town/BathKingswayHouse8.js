
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


const  BathKingswayHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 8 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 8 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 8 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 8 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Living in an 8-bedroom student house in Kingsway, Bath, Somerset can be chaotic enough without the added stress of managing individual bills for utilities like gas, electricity, water, and internet. That's where an <b>all bills inclusive</b> service like <b>UniBills.com</b> comes in handy. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that allows you to <b>concentrate on your studies</b> and social life without worrying about budgeting for various bills each month. From heating to Wi-Fi, all your household expenses are covered under one convenient payment plan. Say goodbye to the headache of splitting bills and tracking payments between housemates, and say hello to the simplicity and ease of having everything taken care of by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation listed on this website today, and experience the convenience and peace of mind that comes with an all-inclusive living arrangement.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the vibrant city of Bath, finding a suitable shared 8-bedroom house for students in Kingsway can be both exciting and rewarding. With spacious living quarters and ample amenities, these properties offer a perfect blend of comfort and convenience for students looking to live together. Not only do shared houses foster a sense of community and camaraderie among residents, but they also provide a conducive environment for studying and socializing. From modern kitchens to cozy communal areas, these houses cater to the diverse needs and preferences of students. By sharing responsibilities and expenses, students can enjoy affordable living arrangements without compromising on quality. In conclusion, searching for a shared 8-bedroom house in Kingsway, Bath, presents a wonderful opportunity for students to create lasting memories and forge lifelong friendships while pursuing their academic endeavors.</p></>)
};

export default BathKingswayHouse8;