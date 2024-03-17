
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 4 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£716 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4 bedroom flat in Oldfield Park, Bath, Somerset? Have you considered subscribing to an <b>all bills inclusive</b> service for your accommodation? <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without worrying about managing multiple bills. By opting for the <b>all bills inclusive</b> option provided by <b>UniBills.com</b>, you can enjoy a hassle-free experience where all your utility bills are taken care of in one package. This means no more trying to split bills with your housemates or chasing them for payments. With <b>UniBills.com</b>, you can simplify your living arrangements and focus on what truly matters – your education. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and start enjoying the benefits of an <b>all bills inclusive</b> service today.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 4-bedroom flats for students in Oldfield Park, Bath offers a fantastic living arrangement that encourages social interaction and shared responsibilities. These properties are usually well-equipped with modern amenities and facilities, making it a comfortable and convenient living option for students. The vibrant and lively community in Oldfield Park enhances the overall student experience, with various local amenities, eateries, and transport links in close proximity. Furthermore, sharing a flat with fellow students fosters a sense of camaraderie and creates lasting friendships. In conclusion, finding a shared 4-bedroom flat in Oldfield Park is a smart choice for students looking for affordable accommodation with all the benefits of communal living in a vibrant neighborhood.</p></>)
};

export default BathOldfieldParkFlat4;