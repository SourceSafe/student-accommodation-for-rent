
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


const  BathBloomfieldHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 3 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 3 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 3 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 3 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 3 bedroom student House in Bloomfield, Bath, Somerset has never been easier with <b>UniBills.com</b>. By opting for this convenient package, you can enjoy the hassle free all inclusive option provided by <b>UniBills.com</b>, which covers all your utility bills, including electricity, gas, water, and internet. This means you won't have to worry about sorting out multiple bills each month or arguing with housemates over who owes what. With <b>UniBills.com</b> taking care of everything for you, you can <b>concentrate on your studies</b> and make the most of your time at university. To make your student life even smoother, why not get a quote from UniBills.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, the search for shared 3 bedroom houses for students in Bloomfield, Bath can be both exciting and challenging. With a variety of options available, from cozy flats to spacious townhouses, students can find the perfect accommodation to suit their needs. Ensuring that the property is located in a convenient area close to campus and amenities is crucial. Additionally, setting a budget and considering factors such as utilities and transportation costs is essential for a smooth renting experience. Collaborating with roommates and establishing clear expectations can help foster a harmonious living environment. By conducting thorough research, visiting multiple properties, and staying organized throughout the process, students can secure a comfortable and affordable home to create lasting memories during their time at university[].</p></>)
};

export default BathBloomfieldHouse3;