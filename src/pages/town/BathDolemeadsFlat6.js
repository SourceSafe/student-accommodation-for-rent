
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


const  BathDolemeadsFlat6 = () => 
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

    return (<><h1>Shared 6 Bedroom Flats for Students in Dolemeads, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-flats-for-students-in-dolemeads-bath.png')} alt='Shared 6 Bedroom Flats for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_flats_for_students_in_dolemeads,_bath">Prices for Shared 6 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive">Shared 6 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_flats_for_students_in_dolemeads,_bath">Cheap Shared 6 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_dolemeads,_bath__recently_added">Shared 6 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced">Shared 6 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Prices for Shared 6 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Flats for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 6 bedroom student flat in Dolemeads, Bath, Somerset, is a smart choice for busy students looking to simplify their lives. By signing up with <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option that covers all your utility bills in one convenient package. With everything taken care of, you can <b>concentrate on your studies</b> without the stress of managing multiple bills each month. <b>UniBills.com</b> ensures that you have a smooth and seamless experience, allowing you to focus on what truly matters. Say goodbye to the headache of sorting out bills and hello to a stress-free living arrangement. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience of <b>all bills inclusive</b> living.</p><a id = "cheap_shared_6_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Cheap Shared 6 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_dolemeads,_bath__recently_added"> <h2>Shared 6 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Shared 6 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>On the search for shared 6 bedroom flats for students in Dolemeads, Bath, you're in luck. These properties offer spacious accommodations ideal for those looking to live with multiple housemates. With a range of amenities and close proximity to local universities, amenities, and transport links, these flats provide a convenient and comfortable environment for student living. The vibrant community of Dolemeads offers a charming setting for socializing and exploring all that Bath has to offer. In conclusion, finding a shared 6 bedroom flat in Dolemeads offers the perfect balance of independence and camaraderie essential for a memorable student experience. Look no further for your ideal student accommodation.</p></>)
};

export default BathDolemeadsFlat6;