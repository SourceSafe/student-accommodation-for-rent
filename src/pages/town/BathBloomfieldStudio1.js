
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


const  BathBloomfieldStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-bloomfield-bath.png')} alt='Studio Apartments for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bloomfield,_bath">Prices for Studio Apartments for Students in Bloomfield, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__all_bills_inclusive">Studio Apartments for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_bloomfield,_bath">Cheap Studio Apartments for Students in Bloomfield, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__recently_added">Studio Apartments for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__recently_reduced">Studio Apartments for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bloomfield,_bath"> <h2>Prices for Studio Apartments for Students in Bloomfield, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Living in a 1-bedroom student studio can be both exciting and challenging, especially when it comes to managing your bills. By subscribing to an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b> in Bloomfield, Bath, Somerset, you can enjoy the convenience and peace of mind that comes with knowing all your utilities are taken care of in one simple payment. This means you can <b>concentrate on your studies</b> and social life without the added stress of keeping track of different bills and due dates. <b>UniBills.com</b> offers a hassle-free all inclusive option that covers everything from electricity and water to internet and TV. No more worrying about unexpected charges or fluctuating costs - just one fixed monthly fee to cover it all. Get a quote from <b>UniBills.com</b> or any accommodation on this website and start enjoying the benefits of an <b>all bills inclusive</b> service today.</p><a id = "cheap_studio_apartments_for_students_in_bloomfield,_bath"> <h2>Cheap Studio Apartments for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__recently_added"> <h2>Studio Apartments for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Studio Apartments for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>After extensively searching for studio apartments suitable for students in Bloomfield, Bath, it has become clear that there are numerous options available. The convenience of studio living provides students with a space that is not only affordable but also practical for their needs. These apartments offer a cozy and comfortable environment where students can focus on their studies while enjoying a sense of independence. With various amenities and facilities nearby, such as supermarkets, restaurants, and public transportation, students can easily balance their academic and social lives. Additionally, the vibrant community in Bloomfield creates a welcoming atmosphere for students to feel at home. In conclusion, finding a studio apartment in Bloomfield, Bath, offers students a perfect blend of convenience, affordability, and a supportive community, making it an ideal choice for student living.</p></>)
};

export default BathBloomfieldStudio1;