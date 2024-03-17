
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


const  BathBathSpaFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-1-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 1 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 1 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 1 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 1 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1212 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Living in a student flat in Bath Spa can be a rewarding experience, but managing utility bills and expenses can often be a hassle. By subscribing to an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b>, you can enjoy the convenience of having all your bills covered in one easy payment. This means you can <b>concentrate on your studies</b> and social life without the stress of managing multiple bills. <b>UniBills.com</b> takes care of everything for you, from electricity and water to internet and TV licenses. With an <b>all bills inclusive</b> package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, giving you peace of mind and the freedom to focus on your academic and personal pursuits. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience today.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for shared 1-bedroom flats for students in Bath Spa, Bath can be a great option for those seeking affordable and convenient housing. With the rising cost of living, sharing a flat can help students cut down on expenses while still enjoying a comfortable living space. Bath Spa offers a vibrant community with plenty of amenities and attractions nearby, making it an ideal location for students. By sharing a flat, students can enjoy socializing with housemates, splitting bills, and creating a supportive living environment. In conclusion, renting a shared 1-bedroom flat in Bath Spa can provide students with a practical and cost-effective housing solution without compromising on comfort and convenience. It's a great way to experience student life in a bustling city while making lasting memories with new friends[].</p></>)
};

export default BathBathSpaFlat1;