
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


const  BathOldfieldParkHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 4 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£608 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4-bedroom house in Oldfield Park, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> could be the perfect solution for you. By choosing this option, you can enjoy the hassle-free experience of having all your bills included in one convenient package. This means no more worrying about splitting bills with your housemates or chasing them up for payments. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and not have to deal with the stress of managing multiple bills. Plus, by opting for an all-inclusive service, you can easily budget your monthly expenses and avoid any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life more enjoyable and stress-free.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for shared 4-bedroom houses for students in Oldfield Park, Bath can be an exciting yet challenging task. With its close proximity to the university and local amenities, Oldfield Park is a popular area for student accommodation. When searching for a property, it is important to consider factors such as location, rent affordability, and housemates compatibility. Viewing multiple properties and discussing expectations with potential housemates is essential to finding the right fit. In conclusion, by staying organized, setting a budget, and communicating effectively with fellow students, students can find a comfortable and enjoyable living situation in Oldfield Park.</p></>)
};

export default BathOldfieldParkHouse4;