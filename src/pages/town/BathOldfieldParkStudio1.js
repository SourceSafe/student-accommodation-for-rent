
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


const  BathOldfieldParkStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-oldfield-park-bath.png')} alt='Studio Apartments for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_oldfield_park,_bath">Prices for Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive">Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_oldfield_park,_bath">Cheap Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_added">Studio Apartments for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced">Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Prices for Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student Studio in Oldfield Park, Bath, Somerset is an excellent way to simplify your living expenses and focus on your studies. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, which covers utilities such as water, electricity, and internet, as well as other essentials like council tax. By opting for an <b>all bills inclusive</b> service, you can avoid the stress of managing multiple bills and budgeting for unexpected costs, giving you more time to concentrate on your academic pursuits. <b>UniBills.com</b> offers transparent pricing and convenient online payment options, making it a convenient choice for busy students. Get a quote from <b>UniBills.com</b> or any accommodation on this website to see how you can benefit from an <b>all bills inclusive</b> service for your student Studio in Oldfield Park.</p><a id = "cheap_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Cheap Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_added"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for studio apartments for students in Oldfield Park, Bath can be a rewarding experience. With its convenient location close to the University of Bath and local amenities, students can enjoy a vibrant student community while focusing on their studies. The variety of studio apartments available in Oldfield Park allows students to find a space that suits their individual needs and preferences, whether they prefer a modern or more traditional style. Additionally, living in a studio apartment provides students with the independence and privacy they desire, while still being part of a supportive student environment. In conclusion, students looking for studio apartments in Oldfield Park will find a range of options to choose from that offer a comfortable and convenient living experience close to campus.</p></>)
};

export default BathOldfieldParkStudio1;