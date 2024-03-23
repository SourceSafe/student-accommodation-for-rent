
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


const  BathBloomfieldHouse10 = () => 
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 10 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 10 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 10 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 10 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>When living in a 10 bedroom student house in Bloomfield, Bath, Somerset, managing bills can often be an added stress on top of your studies. That's where an <b>all bills inclusive</b> service like <b>UniBills.com</b> can make a real difference. By opting for <b>all bills inclusive</b>, you can enjoy the hassle-free convenience of having all your utility bills, including gas, electricity, water, and even internet, rolled into one easy payment. This means you can <b>concentrate on your studies</b> and social life without the added worry of budgeting and bill management. <b>UniBills.com</b> takes care of everything, ensuring a smooth and stress-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website to see how you can benefit from the convenience and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for a shared 10-bedroom house for students in Bloomfield, Bath, the options can be limited but rewarding. These larger properties offer a unique opportunity for students to live together, create a sense of community, and split the costs of rent and utilities. Shared houses can also provide a social atmosphere that is beneficial for forming friendships and support networks. In addition, living in a larger house can offer more space for studying, relaxing, and hosting social gatherings. Students looking for a shared 10-bedroom house in Bloomfield, Bath should consider factors such as location, amenities, and rental agreements to ensure a comfortable and affordable living arrangement. Overall, living in a shared 10-bedroom house can be a fulfilling experience for students seeking a mix of independence and camaraderie during their time at university.</p></>)
};

export default BathBloomfieldHouse10;