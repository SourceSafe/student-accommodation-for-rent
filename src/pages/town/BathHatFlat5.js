
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


const  BathHatFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Hat, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-hat-bath.png')} alt='Shared 5 Bedroom Flats for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_hat,_bath">Prices for Shared 5 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_hat,_bath">Cheap Shared 5 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_hat,_bath__recently_added">Shared 5 Bedroom Flats for Students in Hat, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_hat,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_hat,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Hat, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£780 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 5 bedroom student flat in Hat, Bath, Somerset can offer numerous benefits. By using a service like <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including utilities and internet, rolled into one monthly payment. This means no more worrying about multiple due dates or unexpected charges. With everything taken care of, you can <b>concentrate on your studies</b> and social life without the stress of managing bills. Plus, the hassle-free all-inclusive option provided by <b>UniBills.com</b> can save you time and energy, allowing you to focus on what really matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the ease and simplicity of an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_hat,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_hat,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_hat,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Finding a shared 5-bedroom flat for students in Hat, Bath can be both exciting and challenging. By living with roommates, students not only save on rent but also have the opportunity to build relationships and create lasting memories. The process of searching for the perfect flat involves considering factors such as location, budget, and amenities. With a wide range of options available, it's important to carefully weigh the pros and cons of each property before making a decision. In conclusion, finding a suitable shared 5-bedroom flat requires thorough research, clear communication with potential roommates, and a willingness to compromise. By taking the time to explore different properties and consider individual preferences, students can ensure a comfortable and enjoyable living situation during their time in Hat, Bath.</p></>)
};

export default BathHatFlat5;