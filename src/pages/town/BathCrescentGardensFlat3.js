
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


const  BathCrescentGardensFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-crescent-gardens-bath.png')} alt='Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath">Prices for Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath">Cheap Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added">Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£757 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a convenient and stress-free living arrangement in Bath, Somerset? Look no further than subscribing to an <b>all bills inclusive</b> service for your 3-bedroom student flat in Crescent Gardens. <b>UniBills.com</b> offers an excellent solution for students who want to concentrate on their studies without the added burden of managing multiple bills. By opting for the all inclusive option provided by <b>UniBills.com</b>, you can enjoy the convenience of having your rent, electricity, water, and internet bills all covered in one package. Say goodbye to the hassle of dealing with different suppliers and unpredictable costs each month. With <b>UniBills.com</b>, you can have peace of mind knowing that everything is taken care of, allowing you to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of a hassle-free <b>all bills inclusive</b> service today.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 3-bedroom flat for students in Crescent Gardens, Bath, offers a great opportunity for a convenient and social living arrangement. With the bustling student community in the area, finding flatmates to split the rent and utilities is easy, making this option a cost-effective solution for student accommodation. The location of Crescent Gardens provides easy access to local amenities, universities, and public transportation, making it a desirable choice for students looking for a comfortable and well-connected living situation. Sharing a flat with other students also allows for a collaborative and supportive environment for studying and socializing. In conclusion, opting for a shared 3-bedroom flat in Crescent Gardens can provide students with a convenient, affordable, and vibrant living experience during their time in Bath[].</p></>)
};

export default BathCrescentGardensFlat3;