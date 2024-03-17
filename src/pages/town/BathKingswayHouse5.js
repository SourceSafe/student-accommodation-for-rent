
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


const  BathKingswayHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 5 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 5 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 5 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 5 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£636 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your student house in Kingsway, Bath, Somerset? Say goodbye to the stress of managing utility payments and switch to an <b>all bills inclusive</b> service offered by <b>UniBills.com</b>. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, allowing you to <b>concentrate on your studies</b> and make the most of your time in university. Imagine not having to worry about splitting bills with your housemates or dealing with late payments – <b>UniBills.com</b> takes care of everything for you. Streamline your student living experience and simplify your finances by opting for an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience of an all-inclusive living arrangement.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 5-bedroom houses for students in Kingsway, Bath can be a rewarding experience. This vibrant student community offers a range of housing options to suit all needs and preferences. From spacious bedrooms to modern shared living spaces, students can find the perfect place to call home while pursuing their studies. The convenience of living with fellow students can provide a supportive and social environment, aiding in academic success and personal growth. With a variety of amenities and easy access to campus and local attractions, students can enjoy a well-rounded university experience. Overall, choosing a shared 5-bedroom house in Kingsway, Bath is a great way to make the most of student life and create lasting memories with friends.</p></>)
};

export default BathKingswayHouse5;