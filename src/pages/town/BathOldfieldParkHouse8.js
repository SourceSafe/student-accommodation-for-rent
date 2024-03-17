
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


const  BathOldfieldParkHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 8 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£689 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills and managing household expenses while trying to keep up with your studies? Say goodbye to all the stress and hassle by subscribing to an <b>all bills inclusive</b> service for your 8 bedroom student house in Oldfield Park, Bath, Somerset. <b>UniBills.com</b> offers a convenient solution that covers all your utility bills in one monthly payment, allowing you to <b>concentrate on your studies</b> without the distraction of managing finances. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that takes care of everything from electricity and water to internet and TV licenses. Take control of your student life and simplify your living arrangements with <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student experience a smooth and stress-free one.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the vibrant student hub of Oldfield Park in Bath, shared 8-bedroom houses offer an ideal living arrangement for students seeking both social interaction and affordable accommodation. With spacious communal areas, modern facilities, and convenient access to local amenities, these properties cater to the needs of a large group of housemates looking to create a home away from home. Students can enjoy the benefits of shared living, such as splitting the cost of rent and utilities, while also developing strong friendships and a sense of community. Additionally, living in Oldfield Park provides easy access to university campuses, transportation links, and popular student hangouts. In conclusion, opting for a shared 8-bedroom house in Oldfield Park offers the perfect blend of practicality and camaraderie, making it an attractive choice for students looking to make the most of their time at university.</p></>)
};

export default BathOldfieldParkHouse8;