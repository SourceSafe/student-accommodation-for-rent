
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


const  BathOldfieldParkHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 6 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£701 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of dealing with the headache of managing multiple bills for your student house in Oldfield Park, Bath, Somerset? Say goodbye to the stress and let <b>UniBills.com</b> take care of everything for you with their convenient <b>all bills inclusive</b> service. By subscribing to this hassle-free option, you can <b>concentrate on your studies</b> and enjoy a worry-free living experience. With <b>UniBills.com</b>, you'll never have to worry about unexpected expenses or disputes over utility bills. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and simplify your student living experience today. Experience the benefits of <b>all bills inclusive</b> living and make the most of your time at university.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 6-bedroom house for students in Oldfield Park, Bath can be a rewarding experience. By living together in a spacious and well-equipped property, students can save money on rent and utilities while enjoying a sense of community and camaraderie. With easy access to local amenities, transportation links, and the University of Bath, Oldfield Park offers a convenient and vibrant living environment for students. By working together to manage household responsibilities and respect each other's space, students can create a harmonious and supportive living arrangement. Overall, renting a shared 6-bedroom house in Oldfield Park can provide a comfortable and enriching experience for students looking for a balance of independence and social connection during their time at university.</p></>)
};

export default BathOldfieldParkHouse6;