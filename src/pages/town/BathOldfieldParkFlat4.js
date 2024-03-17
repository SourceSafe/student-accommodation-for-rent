
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


const  BathOldfieldParkFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-4-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 4 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£716 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 4-bedroom student flat in the vibrant Oldfield Park, Bath, Somerset comes with its challenges, one of which is managing multiple utility bills. <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that takes the stress out of budgeting and organizing payments. By subscribing to their service, you can enjoy the hassle-free all-inclusive option that covers all your utility bills, including electricity, water, gas, internet, and more. This means you can <b>concentrate on your studies</b> and social life without worrying about fluctuating bills or unexpected expenses. <b>UniBills.com</b> ensures that you have a comfortable and convenient living experience, allowing you to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier and more enjoyable.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 4-bedroom flats for students in Oldfield Park, Bath can be an exciting and rewarding experience. The area offers a vibrant community atmosphere, convenient amenities, and easy access to the University of Bath and Bath Spa University. Living in a shared house can also provide a sense of camaraderie and support, making it an ideal living arrangement for students. Additionally, splitting the cost of rent and utilities among four roommates can help save money and make student life more affordable. In conclusion, Oldfield Park in Bath is an excellent location for students seeking shared accommodation, offering a perfect balance of convenience, affordability, and a welcoming community atmosphere.</p></>)
};

export default BathOldfieldParkFlat4;