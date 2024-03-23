
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


const  BathHatFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Hat, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-hat-bath.png')} alt='Shared 1 Bedroom Flats for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_hat,_bath">Prices for Shared 1 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_hat,_bath">Cheap Shared 1 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_hat,_bath__recently_added">Shared 1 Bedroom Flats for Students in Hat, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_hat,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_hat,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Hat, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Subscribe to an <b>all bills inclusive</b> service for your 1 bedroom student flat in Hat, Bath, Somerset and experience the convenience of having all your bills covered in one simple package. <b>UniBills.com</b> offers a comprehensive solution that includes electricity, water, gas, internet, and more, allowing you to <b>concentrate on your studies</b> without the stress of managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that provides peace of mind and predictability in your monthly expenses. Say goodbye to the hassle of sorting through various bills and dealing with unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make the smart choice to simplify your student living experience.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_hat,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_hat,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_hat,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 1-bedroom flats for students in Hat, Bath can be a rewarding experience. It offers the chance to find affordable accommodation in a desirable location, allowing students to live with their peers and create a supportive community. With various options available, from fully-furnished apartments to utilities included, students can find a space that fits their needs and budget. Additionally, living in a shared flat promotes social interaction and collaboration, enhancing the overall university experience. In conclusion, looking for shared 1-bedroom flats for students in Hat, Bath is a practical and convenient choice for those seeking a comfortable and communal living arrangement during their academic years.</p></>)
};

export default BathHatFlat1;