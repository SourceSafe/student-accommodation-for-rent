
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


const  BathKingswayHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 4 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 4 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 4 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 4 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4 bedroom house in Kingsway, Bath, Somerset, and feeling overwhelmed by managing multiple utility bills? Consider subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>. By opting for this convenient solution, you can <b>concentrate on your studies</b> without the stress of splitting bills and chasing housemates for payments. <b>UniBills.com</b> offers an all-encompassing package that covers electricity, gas, water, internet, and even TV licenses, making it the perfect choice for busy students. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, ensuring that you have one less thing to worry about during your academic year. Simplify your student living experience and focus on what truly matters by signing up for an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this web site today and streamline your student accommodations.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, the search for shared 4-bedroom houses for students in Kingsway, Bath can be both exciting and daunting. With its convenient location near the University of Bath and local amenities, finding the perfect accommodation can greatly enhance the college experience for students. Establishing clear communication and setting expectations with housemates is crucial to creating a harmonious living environment. Additionally, exploring all available options and considering factors such as budget, location, and amenities can help students make an informed decision. By taking the time to research and visit potential properties, students can ensure that they find the ideal shared house that meets their needs and preferences. Overall, the process of searching for shared student accommodation in Kingsway can be a rewarding experience that leads to long-lasting friendships and memorable college memories[].</p></>)
};

export default BathKingswayHouse4;