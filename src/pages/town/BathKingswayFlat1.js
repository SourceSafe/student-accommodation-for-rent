
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


const  BathKingswayFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-kingsway-bath.png')} alt='Shared 1 Bedroom Flats for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_kingsway,_bath">Prices for Shared 1 Bedroom Flats for Students in Kingsway, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_kingsway,_bath">Cheap Shared 1 Bedroom Flats for Students in Kingsway, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_kingsway,_bath__recently_added">Shared 1 Bedroom Flats for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_kingsway,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_kingsway,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Kingsway, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1200 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a hassle-free accommodation solution in Kingsway, Bath, Somerset? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service for your 1 bedroom flat. With <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including utilities, internet, and council tax, rolled into one simple monthly payment. This means you can <b>concentrate on your studies</b> without worrying about managing multiple bills. <b>UniBills.com</b> takes the stress out of budgeting and ensures that you can focus on what's important. Say goodbye to the headache of organizing bills and hello to the ease of letting <b>UniBills.com</b> take care of everything for you. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of the hassle-free all-inclusive option provided by <b>UniBills.com</b>.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_kingsway,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 1-bedroom flat for students in Kingsway, Bath can be both exciting and challenging. The availability of affordable options in this popular area can be limited, so it is essential to start the search early and be prepared to act fast when a suitable option becomes available. Collaborating with potential housemates can help maximize the chances of finding a suitable accommodation that meets everyone's preferences and budget. Analyzing the location, amenities, and transportation options in the vicinity can further aid in making an informed decision. Overall, with thorough research, open communication, and flexibility, students can find a shared 1-bedroom flat that offers a comfortable and convenient living experience in the vibrant city of Bath[].</p></>)
};

export default BathKingswayFlat1;