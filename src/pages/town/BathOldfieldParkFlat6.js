
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


const  BathOldfieldParkFlat6 = () => 
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

    return (<><h1>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 6 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 6 bedroom flat in the vibrant area of Oldfield Park in Bath, Somerset? Save yourself time and energy by opting for an <b>all bills inclusive</b> service from <b>UniBills.com</b>. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life, knowing that all your utility bills, including gas, electricity, water, and internet, are taken care of. Say goodbye to the stress of splitting bills with roommates or dealing with unexpected costs. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and have peace of mind knowing that your monthly expenses are fixed. Take the first step towards a worry-free living experience and get a quote from <b>UniBills.com</b> or any accommodation on this website. Benefit from the convenience and simplicity of an <b>all bills inclusive</b> service, allowing you to fully focus on your academic pursuits and making the most out of your student life in Bath.</p><a id = "cheap_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you are a student searching for a shared 6-bedroom flat in Oldfield Park, Bath, you are in luck! Oldfield Park is a popular area among students for its close proximity to the university and vibrant community atmosphere. With its range of amenities, including shops, cafes, and green spaces, Oldfield Park provides a convenient and lively environment for student living. When looking for a shared 6-bedroom flat, it's important to consider factors such as location, rental price, and housemates. By pooling resources with five other students, you can enjoy spacious living areas and potentially lower rental costs. Living in a shared 6-bedroom flat in Oldfield Park offers a sense of community and camaraderie while studying. In conclusion, finding a shared 6-bedroom flat in Oldfield Park can be a fantastic choice for students seeking a balance of social living and independent space in a convenient location.</p></>)
};

export default BathOldfieldParkFlat6;