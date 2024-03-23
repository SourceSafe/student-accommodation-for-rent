
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


const  BathBloomfieldHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 8 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 8 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 8 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 8 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>When you rent an 8-bedroom student house in Bloomfield, Bath, Somerset, opting for an <b>all bills inclusive</b> service is a smart choice. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without worrying about managing multiple bills. By choosing to enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, you can relax knowing that your rent covers all utilities such as electricity, water, internet, and gas. This not only simplifies your financial responsibilities but also helps you budget more effectively, eliminating any unexpected costs along the way. With <b>UniBills.com</b>, you can enjoy a stress-free living experience, allowing you to focus on what truly matters – your academic pursuits. Get a quote from <b>UniBills.com</b> or any accommodation on this website to make your student life easier and more enjoyable.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 8-bedroom house for students in Bloomfield, Bath can be an exciting yet challenging task. With its bustling student community and vibrant atmosphere, Bloomfield offers a fantastic location for student living. When looking for a shared accommodation, it is essential to consider factors such as location, budget, and amenities offered in the property. Sharing a house with seven other students can create a sense of camaraderie and foster lifelong friendships. Additionally, splitting the rent and household chores can make living in a shared house more affordable and manageable. Ultimately, finding the perfect 8-bedroom house in Bloomfield requires careful planning and communication among housemates to ensure a comfortable and enjoyable living experience. So, whether you're studying at the university or pursuing other endeavors in Bath, living in a shared 8-bedroom house in Bloomfield can offer a unique and enriching student living experience.</p></>)
};

export default BathBloomfieldHouse8;