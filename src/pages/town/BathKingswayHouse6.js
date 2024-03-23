
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


const  BathKingswayHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 6 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 6 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 6 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 6 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£772 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Living in a 6-bedroom student house in Kingsway, Bath, Somerset can be an exciting experience, but managing bills can often be a headache. Why not make your student life easier by subscribing to an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers a convenient solution where all your utility bills, including gas, electricity, water, and internet, are rolled into one simple monthly payment. With this service, you can <b>concentrate on your studies</b> and social life without the stress of budgeting and dealing with multiple bills. Imagine never having to worry about fluctuating energy costs or unexpected expenses - just sit back, relax, and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. To simplify your student accommodation experience even further, get a quote from <b>UniBills.com</b> or any accommodation on this website and say goodbye to bill-related stress today.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 6-bedroom houses for students in Kingsway, Bath offers a multitude of benefits. These spacious accommodations provide ample living and studying space for a group of students, fostering a sense of community and collaboration. The convenient location in Kingsway allows for easy access to the University of Bath, local amenities, and public transportation. The shared housing option also helps to alleviate financial burdens by splitting the rent and utilities among multiple tenants. In conclusion, choosing a shared 6-bedroom house in Kingsway, Bath provides an ideal living arrangement for students seeking a comfortable, cost-effective, and sociable housing experience during their academic years.</p></>)
};

export default BathKingswayHouse6;