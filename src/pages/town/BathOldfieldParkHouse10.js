
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


const  BathOldfieldParkHouse10 = () => 
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 10 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 10 bedroom student house in Oldfield Park, Bath, Somerset can be a wonderful experience, but managing bills for such a large property can quickly become overwhelming. That's where an <b>all bills inclusive</b> service like <b>UniBills.com</b> can come in handy. By opting for their all inclusive package, you can enjoy the convenience of having all your bills, including utilities and Wi-Fi, rolled into one easy monthly payment. This allows you to <b>concentrate on your studies</b> and social life without the stress of keeping track of multiple bills. <b>UniBills.com</b> takes care of all the tedious bill management so you can focus on what truly matters. Say goodbye to endless spreadsheets and confusing payment schedules, and instead, enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. To simplify your student living experience, consider opting for an <b>all bills inclusive</b> service for your 10 bedroom student house in Oldfield Park. Get a quote from <b>UniBills.com</b> or any accommodation on this website to see how easy and convenient managing your bills can truly be.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Summary and Conclusion:

Searching for shared 10 bedroom houses for students in Oldfield Park, Bath can be an exciting yet overwhelming task. By exploring properties in this popular student area, you can find spacious accommodation that fosters a sense of community and camaraderie among housemates. The convenience of living in close proximity to the University of Bath and local amenities makes Oldfield Park an ideal choice for students. Additionally, the diverse range of properties available caters to different preferences and budgets. Whether you are looking for a modern and fully-furnished house or a cozy traditional home, there is something for everyone in Oldfield Park. In conclusion, finding a shared 10 bedroom house in this vibrant student neighborhood offers a unique living experience that combines comfort, convenience, and a vibrant social atmosphere. Start your search now and embark on a memorable student journey in Oldfield Park, Bath.</p></>)
};

export default BathOldfieldParkHouse10;