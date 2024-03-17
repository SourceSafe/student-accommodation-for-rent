
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


const  BathOldfieldParkHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 7 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£669 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 7-bedroom student house in Oldfield Park, Bath, Somerset can be both exciting and overwhelming. With all the responsibilities and expenses that come with managing multiple bills, it can be challenging to <b>concentrate on your studies</b>. This is where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Imagine the peace of mind knowing that all your bills, including utilities, internet, and even cleaning services, are taken care of with just one fixed monthly payment. This means no more stressing about splitting bills or budgeting for unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Oldfield Park, Bath, Somerset a whole lot easier and more enjoyable.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 7 bedroom house for students in Oldfield Park, Bath can be a rewarding experience. With a variety of options available, from period properties to modern residences, students can find a comfortable and convenient place to call home during their academic years. The vibrant community of Oldfield Park offers easy access to local amenities, transportation links, and the University of Bath campus. Sharing a large house with fellow students can foster a sense of camaraderie and create lasting friendships. By considering factors such as location, budget, and housemates, students can make an informed decision that meets their needs and enhances their university experience. Whether studying, socializing, or relaxing, a shared 7 bedroom house in Oldfield Park provides a welcoming and inclusive environment for students to thrive in.</p></>)
};

export default BathOldfieldParkHouse7;