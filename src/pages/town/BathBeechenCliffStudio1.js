
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


const  BathBeechenCliffStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Beechen Cliff, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-beechen-cliff-bath.png')} alt='Studio Apartments for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_beechen_cliff,_bath">Prices for Studio Apartments for Students in Beechen Cliff, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Studio Apartments for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_beechen_cliff,_bath">Cheap Studio Apartments for Students in Beechen Cliff, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__recently_added">Studio Apartments for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_beechen_cliff,_bath__recently_reduced">Studio Apartments for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_beechen_cliff,_bath"> <h2>Prices for Studio Apartments for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>When you're a student living in a 1 bedroom studio in Beechen Cliff, Bath, Somerset, the last thing you want to worry about is managing multiple bills on top of your already hectic schedule. That's where <b>UniBills.com</b> comes in with their convenient <b>all bills inclusive</b> service. By opting for this package, you can say goodbye to the stress of dealing with individual utility costs and instead <b>concentrate on your studies</b> and social life. <b>UniBills.com</b> takes care of everything from electricity to water to internet, ensuring that you can enjoy the hassle-free all-inclusive option provided by them. By subscribing to this service, you can easily budget your expenses and avoid any surprise bills. So why not make your student life a little easier and more enjoyable? Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your living arrangements.</p><a id = "cheap_studio_apartments_for_students_in_beechen_cliff,_bath"> <h2>Cheap Studio Apartments for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Studio Apartments for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you're a student searching for studio apartments in Beechen Cliff, Bath, you're in luck. With its convenient location, close to the University of Bath and local amenities, Beechen Cliff offers a perfect setting for student living. Studio apartments provide an ideal living space for students, offering privacy, independence, and a dedicated study area. In Beechen Cliff, you can find a variety of studio apartments available at different price points to suit your budget. The vibrant community and student-friendly atmosphere make it a popular choice for student accommodation. In conclusion, Beechen Cliff provides students with a great selection of studio apartments that cater to their needs and offer a comfortable and convenient living experience. Whether you're looking for a peaceful retreat or a lively neighborhood, Beechen Cliff has something for everyone. Choose Beechen Cliff for your student accommodation needs and enjoy a comfortable and fulfilling student life experience.</p></>)
};

export default BathBeechenCliffStudio1;