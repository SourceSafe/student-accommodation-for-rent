
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


const  BathDolemeadsFlat9 = () => 
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

    return (<><h1>Shared 9 Bedroom Flats for Students in Dolemeads, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-flats-for-students-in-dolemeads-bath.png')} alt='Shared 9 Bedroom Flats for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_flats_for_students_in_dolemeads,_bath">Prices for Shared 9 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive">Shared 9 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_flats_for_students_in_dolemeads,_bath">Cheap Shared 9 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_dolemeads,_bath__recently_added">Shared 9 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced">Shared 9 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Prices for Shared 9 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Flats for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 9 bedroom student flat in Dolemeads, Bath, Somerset is a smart choice for those looking to simplify their living arrangements. By partnering with <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all bills such as electricity, water, gas, internet, and even council tax bundled into one convenient monthly payment, you can <b>concentrate on your studies</b> without the stress of managing multiple bills. This service not only saves you time and effort but also provides predictability in your monthly expenses. <b>UniBills.com</b> ensures that you won't have to deal with unexpected bills or fluctuating costs, allowing you to budget more effectively. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of hassle-free living today.</p><a id = "cheap_shared_9_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Cheap Shared 9 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_dolemeads,_bath__recently_added"> <h2>Shared 9 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Shared 9 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, finding a shared 9-bedroom flat for students in Dolemeads, Bath can be an exciting and practical option for those looking to live with friends or meet new people. These spacious accommodations offer a range of amenities and communal areas, making them ideal for socializing and studying in a comfortable environment. Additionally, the central location of Dolemeads provides easy access to the city center, university campuses, and local amenities, ensuring convenience for busy student life. In conclusion, sharing a 9-bedroom flat in Dolemeads not only offers an affordable housing solution but also creates a vibrant and inclusive living experience, perfect for making lasting memories during your time in Bath.</p></>)
};

export default BathDolemeadsFlat9;