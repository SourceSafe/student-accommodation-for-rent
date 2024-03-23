
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


const  BathKingswayHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 5 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 5 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 5 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 5 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£636 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5-bedroom house in Kingsway, Bath, Somerset? Managing bills and utilities on top of coursework can be overwhelming. That's why subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> is the perfect solution for you. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life while enjoying the hassle-free, all-inclusive option provided. By choosing <b>UniBills.com</b>, you won't have to worry about budgeting for gas, electricity, water, or internet bills each month. It's all taken care of for you. Forget the stress of splitting bills with housemates or dealing with unexpected costs - <b>UniBills.com</b> has you covered. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 5-bedroom house for students in Kingsway, Bath can be an exciting yet challenging experience. With a range of properties available, students have the opportunity to find a comfortable living space that is conducive to studying and socializing. Whether it's a fully furnished house with modern amenities or a cozy home with a spacious kitchen and communal living areas, there are options to suit every student's preferences and budget. By living in a shared house with other students, residents can enjoy a sense of community and camaraderie while splitting the cost of rent and utilities. Additionally, living in Kingsway provides easy access to the University of Bath and various amenities, making it a convenient and sought-after location for student accommodation. In conclusion, searching for a shared 5-bedroom house in Kingsway offers students the chance to find a suitable living arrangement that meets their needs and enhances their overall college experience.</p></>)
};

export default BathKingswayHouse5;