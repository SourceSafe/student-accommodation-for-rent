
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


const  BathDolemeadsFlat10 = () => 
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

    return (<><h1>Shared 10 Bedroom Flats for Students in Dolemeads, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-flats-for-students-in-dolemeads-bath.png')} alt='Shared 10 Bedroom Flats for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_flats_for_students_in_dolemeads,_bath">Prices for Shared 10 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive">Shared 10 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_flats_for_students_in_dolemeads,_bath">Cheap Shared 10 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_dolemeads,_bath__recently_added">Shared 10 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced">Shared 10 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Prices for Shared 10 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Flats for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 10 bedroom flat in Dolemeads, Bath, Somerset? Keeping track of multiple utility bills can be a hassle when you should be focusing on your studies. <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that takes the stress out of managing your household expenses. By subscribing to their service, you can enjoy the convenience of having all your bills, including electricity, water, gas, and internet, rolled into one easy monthly payment. This allows you to <b>concentrate on your studies</b> and social life without the worry of budgeting for different bills each month. Get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy the hassle-free, all-inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_shared_10_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Cheap Shared 10 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_dolemeads,_bath__recently_added"> <h2>Shared 10 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Shared 10 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 10-bedroom flats for students in Dolemeads, Bath can provide a convenient and cost-effective housing solution for large groups of students. These spacious accommodations offer ample room for socializing and studying together, fostering a sense of community among housemates. The central location of Dolemeads ensures easy access to the University of Bath and city amenities, making it an ideal choice for student living. With shared living spaces and individual bedrooms, these flats cater to the needs of students looking for a balance between privacy and communal living. Overall, opting for a shared 10-bedroom flat in Dolemeads can enhance the college experience by providing a comfortable and inclusive environment for students to thrive academically and socially.</p></>)
};

export default BathDolemeadsFlat10;