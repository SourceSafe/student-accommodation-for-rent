
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


const  BathKingswayHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 3 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 3 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 3 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 3 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£624 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>If you're a student living in a 3 bedroom house in Kingsway, Bath, Somerset, subscribing to an <b>all bills inclusive</b> service can make your life much easier. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by their service. By opting for an <b>all bills inclusive</b> package, you won't have to worry about managing multiple bills and keeping track of expenses each month. This will allow you to <b>concentrate on your studies</b> and enjoy your time at university without the stress of budgeting for utilities. <b>UniBills.com</b> offers competitive rates and convenient payment options, making it the perfect choice for students looking for a convenient and cost-effective solution. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and make your student life more enjoyable and stress-free.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 3-bedroom houses for students in Kingsway, Bath, it is apparent that the market offers a variety of options that cater to different preferences and budgets. From cozy cottages to modern townhouses, there is something for everyone in this vibrant student-friendly neighborhood. The close proximity to universities, public transportation, and amenities make Kingsway an ideal location for student living. When considering a shared house, it is essential to prioritize factors like budget, location, and compatibility with potential flatmates. By carefully weighing these aspects, students can find the perfect balance between convenience and comfort. Ultimately, living in a shared 3-bedroom house in Kingsway allows students to enjoy a sense of community, shared responsibilities, and a supportive living environment conducive to academic success. With many options available, students are sure to find a shared house that meets their needs and enhances their overall university experience.</p></>)
};

export default BathKingswayHouse3;