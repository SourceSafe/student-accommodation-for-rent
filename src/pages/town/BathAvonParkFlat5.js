
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


const  BathAvonParkFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-avon-park-bath.png')} alt='Shared 5 Bedroom Flats for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_avon_park,_bath">Prices for Shared 5 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_avon_park,_bath">Cheap Shared 5 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_avon_park,_bath__recently_added">Shared 5 Bedroom Flats for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£697 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Living in a 5 bedroom student flat in Avon Park, Bath, Somerset can be a fantastic experience, but managing bills can be a hassle. Instead of worrying about splitting bills among your roommates, why not enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>? Subscribing to an <b>all bills inclusive</b> service means you won't have to deal with multiple payments for utilities like electricity, water, and internet every month. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life, knowing that all your bills are taken care of in one simple payment. This not only saves you time and effort but also gives you peace of mind knowing that there won't be any unexpected bills to derail your budget. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Avon Park stress-free and convenient.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, Avon Park in Bath offers plenty of options for students looking for shared 5-bedroom flats. The area boasts a vibrant student community and convenient access to amenities and public transportation. With a variety of properties available, students can find the perfect accommodation to suit their needs and budget. Living in a shared 5-bedroom flat allows students to split the cost of rent and utilities, making it a more affordable living option. Additionally, sharing a flat with other students can enhance the college experience by fostering a sense of community and camaraderie. In conclusion, students searching for shared 5-bedroom flats in Avon Park, Bath will find a diverse selection of properties to choose from, providing a comfortable and sociable living environment for their time at university.</p></>)
};

export default BathAvonParkFlat5;