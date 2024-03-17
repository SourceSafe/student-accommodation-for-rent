
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-kingsway-bath.png')} alt='Shared 1 Bedroom Flats for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_kingsway,_bath">Prices for Shared 1 Bedroom Flats for Students in Kingsway, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_kingsway,_bath">Cheap Shared 1 Bedroom Flats for Students in Kingsway, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_kingsway,_bath__recently_added">Shared 1 Bedroom Flats for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_kingsway,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_kingsway,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Kingsway, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1200 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>When living in a 1-bedroom student flat in Kingsway, Bath, Somerset, the last thing you want to worry about is managing multiple bills for utilities and services. That's where a service like <b>UniBills.com</b> comes in handy. By subscribing to an <b>all bills inclusive</b> package, you can enjoy the hassle-free experience of having everything taken care of in one convenient package. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the stress of dealing with separate bills. This service not only saves you time and effort but also provides peace of mind knowing that all your living expenses are covered. Say goodbye to the endless stream of bills and hello to the simplicity and convenience of the all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website to experience the benefits for yourself.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_kingsway,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 1-bedroom flats for students in Kingsway, Bath can be an exciting yet challenging task. With its central location and proximity to various amenities, this area is highly sought after by students looking for convenient and comfortable housing options. The variety of flats available cater to different tastes and preferences, ensuring that students can find a suitable living arrangement that suits their needs. However, the competitive rental market in this area means that students may need to act swiftly and be prepared to make quick decisions when it comes to securing accommodation. Despite the potential challenges, living in a shared 1-bedroom flat in Kingsway offers students a chance to experience independent living while being part of a vibrant and diverse community of fellow students.</p></>)
};

export default BathKingswayFlat1;