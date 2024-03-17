
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


const  BathOldfieldParkHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 7 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£669 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student renting a 7 bedroom house in Oldfield Park, Bath, Somerset? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that allows you to <b>concentrate on your studies</b> without the stress of managing multiple utility bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers water, gas, electricity, internet, and even TV licensing fees. Say goodbye to the headache of splitting bills with housemates or dealing with unexpected costs - <b>UniBills.com</b> has got you covered. By choosing an <b>all bills inclusive</b> service, you can focus on what truly matters - your education. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and peace of mind that comes with a comprehensive bills package. Make your student life easier and more comfortable with <b>UniBills.com</b>.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you are a group of students searching for a shared 7-bedroom house in Oldfield Park, Bath, you are in luck. With its convenient location close to the University of Bath and local amenities, Oldfield Park offers the ideal setting for student living. From spacious bedrooms to shared living areas, these houses provide ample space for studying and socializing. By splitting the cost of rent and utilities among your housemates, you can enjoy affordable accommodation while creating lasting memories together. Whether you are looking for a peaceful place to study or a vibrant community to live in, Oldfield Park has something for everyone. In conclusion, finding a shared 7-bedroom house in this area can not only simplify your housing search but also enhance your student experience in Bath. So, gather your friends and start your journey to a comfortable and enjoyable student life in Oldfield Park.</p></>)
};

export default BathOldfieldParkHouse7;