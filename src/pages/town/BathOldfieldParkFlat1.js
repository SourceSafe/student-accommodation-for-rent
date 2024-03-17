
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


const  BathOldfieldParkFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 1 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1245 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>If you're a student living in a 1-bedroom flat in Oldfield Park, Bath, Somerset, subscribing to an <b>all bills inclusive</b> service could be a game-changer for you. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by their service. By signing up for this convenient package, you won't have to worry about managing multiple bills each month, allowing you to <b>concentrate on your studies</b> instead. <b>UniBills.com</b> takes care of all your utility bills, including electricity, gas, water, and even internet, making your student life much simpler. Not only does this save you time and effort, but it also provides peace of mind knowing that everything is taken care of. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of <b>all bills inclusive</b> living in Oldfield Park.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 1 bedroom flats in Oldfield Park, Bath can be a great option for students seeking affordable housing in a vibrant neighborhood. With its convenient location close to the University of Bath and local amenities, Oldfield Park offers the perfect blend of convenience and community. By choosing to live in a shared flat, students can save on rent and utilities while also enjoying the camaraderie of living with flatmates. From studying together to exploring the local area, sharing a flat can enhance the college experience. In conclusion, finding a shared 1 bedroom flat in Oldfield Park is a smart choice for students looking for a cost-effective and social living arrangement in a popular student-friendly area.</p></>)
};

export default BathOldfieldParkFlat1;