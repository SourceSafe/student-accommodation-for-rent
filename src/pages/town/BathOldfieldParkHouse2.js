
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

    return (<><h1>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 2 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£1170 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a student house in Oldfield Park, Bath, Somerset can be both exciting and challenging. As a student, you want to <b>concentrate on your studies</b> without having to worry about managing bills and expenses. By subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. This means that you won't have to deal with the stress of organizing payments for electricity, water, gas, and internet - everything is taken care of for you. With <b>all bills inclusive</b>, you can budget more effectively, saving you time and allowing you to focus on what's important. Get a quote from <b>UniBills.com</b> or any accommodation on this website to see how you can benefit from this convenient service and make your student life in Bath more enjoyable and stress-free.</p><a id = "cheap_shared_2_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 2 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 2 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the vibrant community of Oldfield Park in Bath, students searching for shared 2-bedroom houses will find a range of options that cater to their needs. The availability of these properties in such a desirable location makes it an ideal choice for students looking for both convenience and affordability. With spacious and well-equipped houses, students can enjoy comfortable living arrangements while studying in a lively and bustling neighborhood. Additionally, sharing a house with a fellow student can provide a sense of camaraderie and support during their academic journey. Overall, Oldfield Park offers a perfect blend of student-friendly housing options and a dynamic environment, making it a sought-after location for students seeking shared 2-bedroom houses in Bath.</p></>)
};

export default BathOldfieldParkHouse2;