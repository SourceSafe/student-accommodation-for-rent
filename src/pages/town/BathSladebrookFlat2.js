
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


const  BathSladebrookFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-sladebrook-bath.png')} alt='Shared 2 Bedroom Flats for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_sladebrook,_bath">Prices for Shared 2 Bedroom Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_sladebrook,_bath">Cheap Shared 2 Bedroom Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_sladebrook,_bath__recently_added">Shared 2 Bedroom Flats for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_sladebrook,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Sladebrook, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£680 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 2 bedroom student flat in Sladebrook, Bath, Somerset is a smart choice for students looking to simplify their living arrangements. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. By opting for this service, you no longer have to worry about juggling multiple bills or keeping track of payments, allowing you to <b>concentrate on your studies</b> without any added stress. <b>UniBills.com</b> ensures that all your utility bills, such as electricity, gas, water, and even internet, are covered in one convenient package. This not only makes budgeting easier but also eliminates any unexpected costs that may arise. Say goodbye to hunting down individual suppliers and dealing with multiple due dates. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience of <b>all bills inclusive</b> living today.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 2 bedroom flats for students in Sladebrook, Bath, it is important to carefully consider factors such as location, price, and amenities. Students will benefit from the convenience of living with a roommate in a two-bedroom apartment, as it offers a balance between privacy and shared living space. The vibrant community in Sladebrook provides a safe and friendly environment for students to thrive academically and socially. By seeking out flats that are close to universities, public transportation, and local amenities, students can enjoy a seamless college experience. Additionally, sharing a flat with a roommate can help reduce living costs and foster a sense of camaraderie. In conclusion, students looking for shared 2 bedroom flats in Sladebrook, Bath will find that it offers a comfortable and affordable living option in a well-connected and student-friendly neighborhood.</p></>)
};

export default BathSladebrookFlat2;