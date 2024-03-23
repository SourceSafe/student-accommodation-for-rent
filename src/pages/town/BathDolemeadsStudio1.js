
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


const  BathDolemeadsStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Dolemeads, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-dolemeads-bath.png')} alt='Studio Apartments for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_dolemeads,_bath">Prices for Studio Apartments for Students in Dolemeads, Bath</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__all_bills_inclusive">Studio Apartments for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_dolemeads,_bath">Cheap Studio Apartments for Students in Dolemeads, Bath</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__recently_added">Studio Apartments for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__recently_reduced">Studio Apartments for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_dolemeads,_bath"> <h2>Prices for Studio Apartments for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student Studio in Dolemeads, Bath, Somerset has many advantages. By choosing <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by them. With all bills included in one monthly payment, you can save time and avoid the stress of managing multiple bills for utilities such as water, electricity, and internet. This allows you to <b>concentrate on your studies</b> and make the most of your student experience without worrying about budgeting for different expenses. <b>UniBills.com</b> offers transparent pricing and reliable customer service, ensuring that your living arrangement is smooth and convenient. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student life and enjoy the benefits of an <b>all bills inclusive</b> service.</p><a id = "cheap_studio_apartments_for_students_in_dolemeads,_bath"> <h2>Cheap Studio Apartments for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_dolemeads,_bath__recently_added"> <h2>Studio Apartments for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Studio Apartments for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Summary and conclusion about looking for Studio Apartments for Students in Dolemeads, Bath

When it comes to finding the perfect studio apartment for students in Dolemeads, Bath, there are a few key factors to consider. Location is crucial, as you want to be within close proximity to your university or college. The amenities offered by the apartment complex can also make a big difference in your living experience. Look for places with laundry facilities, study areas, and perhaps even a fitness center. Additionally, safety should always be a priority, so make sure the building has secure entry and well-lit common areas. Ultimately, finding the right studio apartment in Dolemeads can enhance your college experience and make your student life more enjoyable and convenient.</p></>)
};

export default BathDolemeadsStudio1;