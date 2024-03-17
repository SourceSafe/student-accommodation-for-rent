
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


const  BathOldfieldParkHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 5 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£626 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribe to an <b>all bills inclusive</b> service for your 5 bedroom student house in Oldfield Park, Bath, Somerset, and experience the convenience and ease of managing your expenses with <b>UniBills.com</b>. By opting for an <b>all bills inclusive</b> package, you can <b>concentrate on your studies</b> and social life without worrying about the hassle of dealing with multiple utility bills. <b>UniBills.com</b> offers a seamless and stress-free solution that covers all your bills, including electricity, water, gas, internet, and even council tax. This means no more splitting bills with housemates or chasing payments – simply enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. To simplify your student living experience, get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your next academic year a smooth and worry-free one.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 5 bedroom house for students in Oldfield Park, Bath can be a rewarding experience. With its vibrant community, proximity to local amenities, and convenient transport links, Oldfield Park offers a well-rounded lifestyle for student living. By choosing to live in a shared house, students can not only minimize their living expenses but also foster a sense of camaraderie and social connection with their housemates. From spacious bedrooms to shared living areas, these properties cater to the needs of students looking for a comfortable and supportive environment. Overall, living in a shared 5 bedroom house in Oldfield Park provides the perfect balance between independence and community living, making it an ideal choice for students seeking both convenience and a sense of belonging.</p></>)
};

export default BathOldfieldParkHouse5;