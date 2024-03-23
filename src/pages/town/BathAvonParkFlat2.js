
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


const  BathAvonParkFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-avon-park-bath.png')} alt='Shared 2 Bedroom Flats for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_avon_park,_bath">Prices for Shared 2 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_avon_park,_bath">Cheap Shared 2 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_avon_park,_bath__recently_added">Shared 2 Bedroom Flats for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£707 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2 bedroom flat at Avon Park, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b> could be the ideal solution for you. By opting for this service, you can enjoy the convenience of not having to worry about sorting out individual bills for utilities such as gas, electricity, water, and internet. This allows you to <b>concentrate on your studies</b> and enjoy student life without the added stress of managing multiple bills. <b>UniBills.com</b> offers a hassle-free all-inclusive option, making budgeting easier and saving you time and effort. Plus, with everything taken care of for you, you can rest assured that your bills are being paid on time. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 2-bedroom flats for students in Avon Park, Bath, it is essential to carefully consider several key factors to find the perfect living arrangement. Location is crucial, as proximity to campus and local amenities can greatly enhance the overall living experience. Additionally, setting a budget and clearly communicating expectations with potential roommates are vital steps in ensuring a harmonious living environment. It is important to thoroughly inspect each property, looking for factors such as safety, cleanliness, and functionality. While the search may be daunting, the outcome of finding the ideal shared flat is well worth the effort. By following these steps and staying organized throughout the process, students can secure a comfortable and convenient living situation in Avon Park, Bath.</p></>)
};

export default BathAvonParkFlat2;