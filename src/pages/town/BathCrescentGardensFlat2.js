
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


const  BathCrescentGardensFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-crescent-gardens-bath.png')} alt='Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath">Prices for Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath">Cheap Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added">Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1157 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for the perfect accommodation in Bath, Somerset? Look no further than Crescent Gardens, where you can enjoy the convenience of an <b>all bills inclusive</b> service. With <b>UniBills.com</b>, you can say goodbye to the stress of managing multiple bills and instead <b>concentrate on your studies</b> and social activities. Imagine not having to worry about sorting out utilities, internet, or council tax - simply enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. This will not only save you time and effort but also give you peace of mind knowing that everything is taken care of. Don't miss out on this fantastic opportunity to simplify your student life - get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of <b>all bills inclusive</b> living at Crescent Gardens.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 2-bedroom flat for students in Crescent Gardens, Bath can be a rewarding experience. With its prime location close to the University of Bath and local amenities, it offers convenient living for students. These flats typically come fully furnished, making the move-in process easy and stress-free. Sharing a flat with a roommate can also help in reducing the living costs and creating a sense of community. Moreover, Crescent Gardens provides a safe and secure environment for students, with key access and CCTV surveillance. Overall, a shared 2-bedroom flat in Crescent Gardens offers comfort, convenience, and affordability for students looking for a vibrant living experience in Bath.</p></>)
};

export default BathCrescentGardensFlat2;