
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

    return (<><h1>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 2 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£1170 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of worrying about splitting bills with your housemates every month? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service for your 2-bedroom student house in the vibrant Oldfield Park area of Bath, Somerset. By choosing to subscribe to this convenient service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all your bills, including utilities, internet, and even TV license, rolled into one easy monthly payment, you can <b>concentrate on your studies</b> and social life without the stress of managing multiple bills. Say goodbye to those late-night arguments over who owes what - <b>UniBills.com</b> takes care of everything for you. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the freedom of worry-free living today.</p><a id = "cheap_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 2-bedroom houses for students in Oldfield Park, Bath can be a convenient and cost-effective housing option. With its close proximity to local amenities, pubs, and restaurants, Oldfield Park offers a vibrant and student-friendly living environment. By sharing a house with a roommate, students can split the cost of rent and utilities, making it a budget-friendly choice. Additionally, living with a fellow student can provide companionship, support, and a sense of community during the university years. With various housing options available in Oldfield Park, students can find a comfortable and well-equipped space that suits their needs and preferences. Overall, choosing to live in a shared 2-bedroom house in Oldfield Park can enhance the student experience and create lasting memories during their time at university.</p></>)
};

export default BathOldfieldParkHouse2;