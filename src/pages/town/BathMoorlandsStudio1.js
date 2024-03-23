
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


const  BathMoorlandsStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-moorlands-bath.png')} alt='Studio Apartments for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_moorlands,_bath">Prices for Studio Apartments for Students in Moorlands, Bath</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__all_bills_inclusive">Studio Apartments for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_moorlands,_bath">Cheap Studio Apartments for Students in Moorlands, Bath</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__recently_added">Studio Apartments for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_moorlands,_bath__recently_reduced">Studio Apartments for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_moorlands,_bath"> <h2>Prices for Studio Apartments for Students in Moorlands, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student Studio in Moorlands, Bath, Somerset can greatly simplify your living experience. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option, which covers all your utility bills in one convenient package. This means you won't have to worry about managing multiple bills or budgeting for unexpected expenses. By opting for an <b>all bills inclusive</b> service, you can free up valuable time and energy to <b>concentrate on your studies</b> without the added stress of keeping track of different payments. <b>UniBills.com</b> offers competitive rates and excellent customer service to ensure that your living arrangements are as seamless as possible. Get a quote from <b>UniBills.com</b> or any accommodation on this web site to discover the benefits of an <b>all bills inclusive</b> service for your student accommodation in Moorlands.</p><a id = "cheap_studio_apartments_for_students_in_moorlands,_bath"> <h2>Cheap Studio Apartments for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_moorlands,_bath__recently_added"> <h2>Studio Apartments for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_moorlands,_bath__recently_reduced"> <h2>Studio Apartments for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for studio apartments for students in Moorlands, Bath can be an exciting yet challenging process. With its convenient location, close proximity to the University of Bath, and a range of amenities nearby, Moorlands is a highly desirable area for student accommodation. When searching for the ideal studio apartment, students should consider factors such as budget, size, and accessibility to campus and local attractions. It is important to view multiple properties, weigh the pros and cons of each, and make an informed decision. In conclusion, with careful research and planning, students can find the perfect studio apartment in Moorlands, Bath that suits their needs and enhances their university experience.</p></>)
};

export default BathMoorlandsStudio1;