
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 4 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£716 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 4 bedroom student flat in Oldfield Park, Bath, Somerset can be a busy and demanding experience, especially when it comes to managing bills and expenses. By subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>, you can eliminate the stress of keeping track of multiple bills each month. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided, allowing you to <b>concentrate on your studies</b> and making the most of your time as a student. Imagine not having to worry about utility bills, internet fees, or even TV licenses - it's all taken care of with <b>UniBills.com</b>. Their straightforward and convenient service ensures that you can budget effectively and avoid any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Oldfield Park, Bath, Somerset a whole lot easier.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When it comes to finding shared 4-bedroom flats for students in Oldfield Park, Bath, there are several options available that cater to different needs and preferences. From cozy and traditional Victorian terraced houses to modern and spacious apartments, students have a variety of choices to suit their budget and lifestyle. Living in a shared accommodation not only fosters a sense of community but also allows for cost-sharing, making it a practical choice for many students. With amenities such as fully furnished rooms, communal areas, and proximity to the University of Bath campus, these shared flats offer convenience and comfort. Overall, living in a shared 4-bedroom flat in Oldfield Park enables students to enjoy a balance of independence and social interaction, creating a vibrant and supportive environment for their academic pursuits.</p></>)
};

export default BathOldfieldParkFlat4;