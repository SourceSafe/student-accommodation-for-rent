
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 8 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 8 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 8 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 8 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you a student living in an 8-bedroom house in Kingsway, Bath, Somerset? Keeping track of multiple bills can be overwhelming, especially when you're trying to <b>concentrate on your studies</b>. That's where an <b>all bills inclusive</b> service from <b>UniBills.com</b> can make your life much easier. By opting for the hassle-free, all inclusive option provided by <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including utilities, internet, and even cleaning services, rolled into one easy payment. This not only saves you time and energy but also ensures that there are no surprise expenses popping up throughout the year. Take the stress out of managing your household finances and focus on what truly matters – your education. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience today.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 8-bedroom houses for students in Kingsway, Bath can be a challenging task, but also an exciting opportunity to find the perfect accommodation for your college years. With a wide range of options available, it's important to consider factors such as location, budget, amenities, and roommates. Kingsway is a popular student area with convenient access to local shops, cafes, and public transportation. By living in a shared 8-bedroom house, you can enjoy the camaraderie of housemates while splitting the cost of rent and utilities. It's essential to thoroughly research and visit potential properties to ensure they meet your needs and preferences. In conclusion, finding a shared 8-bedroom house in Kingsway can offer a comfortable and social living experience for students, creating lasting memories and friendships during your time at university.</p></>)
};

export default BathKingswayHouse8;