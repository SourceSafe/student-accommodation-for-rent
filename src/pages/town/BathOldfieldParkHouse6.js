
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-6-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 6 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£701 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of keeping track of multiple utility bills for your 6 bedroom student house in Oldfield Park, Bath, Somerset? Say goodbye to the hassle and stress by subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b>. With this convenient option, you can <b>concentrate on your studies</b> and social life without worrying about managing bills. <b>UniBills.com</b> covers all your utility expenses, including electricity, water, gas, and internet, in one simple monthly payment. This way, you can budget effectively and avoid any unexpected costs. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and make your student living experience more convenient and enjoyable. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your life today.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the quest for shared 6-bedroom houses for students in Oldfield Park, Bath, the search can be both exciting and daunting. With its vibrant community atmosphere and proximity to local amenities and the university, Oldfield Park is a sought-after location for student accommodation. When looking for a shared house, it's essential to consider factors such as the property's size, condition, and the dynamics of living with five other housemates. Ensuring that the house has adequate communal space and facilities to accommodate everyone's needs is crucial for a comfortable living environment. Furthermore, communication and setting clear expectations with housemates can help foster a harmonious living arrangement. Ultimately, finding the right shared house in Oldfield Park can enhance your university experience by providing a supportive and social living environment for your studies.</p></>)
};

export default BathOldfieldParkHouse6;