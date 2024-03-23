
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


const  BathKensingtonFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-kensington-bath.png')} alt='Shared 2 Bedroom Flats for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_kensington,_bath">Prices for Shared 2 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_kensington,_bath">Cheap Shared 2 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_kensington,_bath__recently_added">Shared 2 Bedroom Flats for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_kensington,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_kensington,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Kensington, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£707 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Living in a 2 bedroom student flat in Kensington, Bath, Somerset can be a wonderful experience, but managing bills can sometimes be a headache. This is where subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can make a world of difference. By opting for <b>all bills inclusive</b>, you can say goodbye to the stress of remembering due dates and splitting costs with your flatmate. Instead, you can <b>concentrate on your studies</b> and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With one simple payment, you can cover all your utility bills, including electricity, water, heating, internet, and even TV license. This not only saves you time but also gives you peace of mind knowing that everything is taken care of. So why not simplify your living situation and consider an <b>all bills inclusive</b> option for your 2 bedroom student flat in Kensington, Bath, Somerset? Get a quote from UniBills.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_kensington,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_kensington,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 2 bedroom flats for students in Kensington, Bath can be a rewarding experience. It offers a great opportunity for students to live in a vibrant and cultural area while sharing living costs with a roommate. The process of finding the perfect flat may require some time and effort, but with the right resources and strategies, students can find a suitable living space that meets their needs and budget. From browsing online listings to attending property viewings, students can explore various options and narrow down their choices to find the ideal 2 bedroom flat to share. By considering factors such as location, amenities, and rental prices, students can make an informed decision and secure a comfortable and convenient living arrangement for their time studying in Kensington, Bath.</p></>)
};

export default BathKensingtonFlat2;