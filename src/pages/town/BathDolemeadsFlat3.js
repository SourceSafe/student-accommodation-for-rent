
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


const  BathDolemeadsFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Dolemeads, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-dolemeads-bath.png')} alt='Shared 3 Bedroom Flats for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_dolemeads,_bath">Prices for Shared 3 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_dolemeads,_bath">Cheap Shared 3 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_dolemeads,_bath__recently_added">Shared 3 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£757 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3-bedroom flat in Dolemeads, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service can significantly simplify your life. <b>UniBills.com</b> offers a convenient solution that allows you to enjoy the hassle-free all-inclusive option provided by their services. By opting for this package, you can avoid the stress of managing multiple bills and instead <b>concentrate on your studies</b> and social life. With <b>UniBills.com</b>, you can easily get a quote and compare the costs to any other accommodations on this website. Say goodbye to the hassle of utility bills and hello to a more streamlined living experience with <b>UniBills.com</b>.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_dolemeads,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, the search for shared 3-bedroom flats for students in Dolemeads, Bath can be an exciting and rewarding experience. By exploring the vibrant community of Dolemeads, students can find spacious and affordable accommodation options that cater to their needs and budget. Living in a shared flat offers the opportunity to cultivate friendships, share experiences, and create a sense of belonging in a new city. As students embark on this journey, they can look forward to a comfortable and convenient lifestyle in a prime location with access to essential amenities and excellent transport links. Ultimately, finding a shared 3-bedroom flat in Dolemeads provides a perfect balance of independence and camaraderie, making it an ideal choice for student living in Bath.</p></>)
};

export default BathDolemeadsFlat3;