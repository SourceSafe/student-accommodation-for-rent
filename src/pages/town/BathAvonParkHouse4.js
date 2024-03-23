
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


const  BathAvonParkHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-avon-park-bath.png')} alt='Shared 4 Bedroom Houses for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_avon_park,_bath">Prices for Shared 4 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_avon_park,_bath">Cheap Shared 4 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_avon_park,_bath__recently_added">Shared 4 Bedroom Houses for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£658 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student house in Avon Park, Bath, Somerset is a smart choice for busy students. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without the stress of managing multiple bills. By opting for the all inclusive option provided by <b>UniBills.com</b>, you can enjoy the ease and peace of mind of having all your utility costs covered in one simple payment. This means no more endless calculations or disputes with housemates over who owes what. With <b>UniBills.com</b>, you can streamline your living expenses and focus on what really matters – your academic success. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier and more enjoyable today.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for a shared 4-bedroom house for students in Avon Park, Bath can be a daunting task but a rewarding one. With its vibrant student community and proximity to various universities and amenities, Avon Park offers the perfect blend of convenience and student-friendly living. By carefully considering factors such as location, budget, and housemates, students can find the ideal accommodation for their needs. In conclusion, embarking on the hunt for a shared 4-bedroom house in Avon Park presents an exciting opportunity for students to not only secure a comfortable living space but also cultivate lasting friendships and create unforgettable memories during their time in Bath.</p></>)
};

export default BathAvonParkHouse4;