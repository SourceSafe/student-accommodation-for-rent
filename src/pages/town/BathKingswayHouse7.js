
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


const  BathKingswayHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 7 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 7 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 7 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 7 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 7 bedroom house in Kingsway, Bath, Somerset? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service for student accommodations, allowing you to <b>concentrate on your studies</b> while we take care of all your utility bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, which covers electricity, gas, water, internet, and even TV license fees. Say goodbye to the stress of managing multiple bills each month and hello to a simplified living experience. By subscribing to an <b>all bills inclusive</b> service, you can budget better and avoid any unexpected expenses. Get a quote from <b>UniBills.com</b> or any accommodation on this website to see how you can benefit from an all-inclusive package tailored to your needs. Invest in your academic success and peace of mind by choosing <b>UniBills.com</b> for your student accommodation needs.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 7-bedroom houses for students in Kingsway, Bath can be a rewarding experience. With a variety of options available, students can find a comfortable and affordable living space that suits their needs. These properties often come fully furnished with spacious bedrooms, communal areas, and modern amenities. Living with multiple housemates can provide a sense of community and companionship, making it a great opportunity to make new friends and create lasting memories. Additionally, students can benefit from sharing the cost of rent and utilities, making it a more budget-friendly housing option. Overall, finding a shared 7-bedroom house in Kingsway, Bath allows students to enjoy a convenient and comfortable living arrangement while studying in this vibrant city.</p></>)
};

export default BathKingswayHouse7;