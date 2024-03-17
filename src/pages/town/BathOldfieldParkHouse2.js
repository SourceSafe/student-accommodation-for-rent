
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


const  BathOldfieldParkHouse2 = () => 
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

    return (<><h1>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 2 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£1170 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2 bedroom house in Oldfield Park, Bath, Somerset? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that will allow you to <b>concentrate on your studies</b> without the stress of managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers your rent, utilities, internet, and even TV license all in one convenient package. This means no more wasted time chasing up housemates for their share of the bills or trying to figure out complex payment schedules. By subscribing to this service, you can have peace of mind knowing that everything is taken care of, allowing you to focus on what really matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, looking for shared 2 bedroom houses for students in Oldfield Park, Bath can be an exciting yet daunting task. With its vibrant community, convenient location close to the city center, and abundance of amenities, Oldfield Park is a popular choice among students. Sharing a house with a roommate can offer cost savings, companionship, and the opportunity to make lasting friendships. However, it is important to carefully consider factors such as budget, location, and compatibility with potential roommates before making a decision. By conducting thorough research and visiting potential properties, students can find the perfect 2 bedroom house in Oldfield Park that meets their needs and preferences. Overall, living in a shared 2 bedroom house in this area provides a unique opportunity for students to experience independent living while being part of a vibrant and lively community[].</p></>)
};

export default BathOldfieldParkHouse2;