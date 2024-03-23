
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


const  BathAvonParkFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-avon-park-bath.png')} alt='Shared 3 Bedroom Flats for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_avon_park,_bath">Prices for Shared 3 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_avon_park,_bath">Cheap Shared 3 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_avon_park,_bath__recently_added">Shared 3 Bedroom Flats for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£733 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3-bedroom flat in Avon Park, Bath, Somerset? Save yourself the time and stress of managing multiple bills by subscribing to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient and practical solution, allowing you to <b>concentrate on your studies</b> without the added hassle of dealing with utility payments. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, covering your electricity, gas, water, and even internet bills all in one package. This means no more worrying about missing payments or splitting costs with flatmates. Get a quote from <b>UniBills.com</b> or any accommodation on this website and embrace the ease and simplicity of an all-inclusive service for your student accommodation.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In searching for shared 3-bedroom flats for students in Avon Park, Bath, it is essential to consider various factors to ensure a comfortable and suitable living arrangement. Location is crucial, as easy access to campus, amenities, and transportation is key for students. Additionally, exploring the neighborhood for safety, convenience, and a vibrant student community can enhance the overall experience. Affordability is another vital aspect, as shared accommodation can help students save on rent and utilities. Furthermore, shared living spaces foster a sense of community, collaboration, and support among roommates. Ultimately, finding the right shared 3-bedroom flat in Avon Park can provide students with a conducive environment for studying, socializing, and thriving during their time in Bath.</p></>)
};

export default BathAvonParkFlat3;