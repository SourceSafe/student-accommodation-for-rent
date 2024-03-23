
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


const  BathHatFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Hat, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-hat-bath.png')} alt='Shared 2 Bedroom Flats for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_hat,_bath">Prices for Shared 2 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_hat,_bath">Cheap Shared 2 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_hat,_bath__recently_added">Shared 2 Bedroom Flats for Students in Hat, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_hat,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_hat,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Hat, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1157 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2 bedroom flat in Hat, Bath, Somerset? Save yourself the headache of managing multiple bills by subscribing to an <b>all bills inclusive</b> service. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. By bundling your rent, utilities, and other expenses into one monthly payment, you can <b>concentrate on your studies</b> without the stress of keeping track of various bills. This convenient service not only saves you time but also helps you budget more efficiently. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience. Say goodbye to bill-related worries and hello to a more streamlined and stress-free living situation.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_hat,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_hat,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_hat,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for shared 2-bedroom flats for students in Hat, Bath can be an exciting yet challenging task. With an array of options available, it's important to consider factors such as location, budget, amenities, and compatibility with potential roommates. In Hat, Bath, students can find spacious and affordable accommodations that meet their needs and preferences. Collaborating with roommates to search for the ideal flat can make the process more enjoyable and efficient. By leveraging online platforms and enlisting the help of local real estate agents, students can streamline their search and secure a suitable living arrangement. Ultimately, finding a shared 2-bedroom flat in Hat, Bath offers the opportunity to create a comfortable and convenient home away from home for students seeking a conducive living environment throughout their academic journey.</p></>)
};

export default BathHatFlat2;