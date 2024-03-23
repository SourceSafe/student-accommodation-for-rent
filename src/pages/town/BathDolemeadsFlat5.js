
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


const  BathDolemeadsFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Dolemeads, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-dolemeads-bath.png')} alt='Shared 5 Bedroom Flats for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_dolemeads,_bath">Prices for Shared 5 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_dolemeads,_bath">Cheap Shared 5 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_dolemeads,_bath__recently_added">Shared 5 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£780 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Subscribe to an <b>all bills inclusive</b> service for your 5 bedroom student flat in Dolemeads, Bath, Somerset, and say goodbye to the stress of managing multiple utility bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option, allowing you to <b>concentrate on your studies</b> without the worry of unexpected expenses. By choosing this convenient service, you can streamline your living arrangements and have peace of mind knowing that all your bills are taken care of in one easy payment. Say goodbye to the hassle of dealing with individual suppliers and hello to a simplified and cost-effective solution. Get a quote from UniBills.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_dolemeads,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 5-bedroom flat for students in Dolemeads, Bath can be a rewarding experience. This area offers a vibrant community, convenient access to local amenities, and a comfortable living space for those studying in the area. By collaborating with roommates, students can enjoy a sense of camaraderie and split the cost of living expenses. Additionally, the spacious layout of a 5-bedroom flat provides ample room for individual privacy and shared social spaces. Dolemeads, Bath is an ideal location for students looking to balance their academic endeavors with a supportive living environment. Be sure to explore the various options available and find the perfect shared flat that suits your needs and preferences[].</p></>)
};

export default BathDolemeadsFlat5;