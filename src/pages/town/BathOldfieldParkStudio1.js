
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

    return (<><h1>Studio Apartments for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/studio-apartments-for-students-in-oldfield-park-bath.png')} alt='Studio Apartments for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_oldfield_park,_bath">Prices for Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive">Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_oldfield_park,_bath">Cheap Studio Apartments for Students in Oldfield Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_added">Studio Apartments for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced">Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Prices for Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student in Bath looking for hassle-free accommodation in Oldfield Park? Consider subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student studio through <b>UniBills.com</b>. With all bills included in your rent, you can <b>concentrate on your studies</b> without the stress of managing multiple payments. <b>UniBills.com</b> provides a convenient and hassle-free solution for students, ensuring that your utilities, internet, and other essential services are taken care of. Enjoy the convenience of a single monthly payment and the peace of mind that comes with knowing all your bills are covered. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of an all inclusive option in your student accommodation.</p><a id = "cheap_studio_apartments_for_students_in_oldfield_park,_bath"> <h2>Cheap Studio Apartments for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_added"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Studio Apartments for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for studio apartments for students in Oldfield Park, Bath, it's important to consider a few key factors. Location is crucial, as Oldfield Park offers a vibrant setting close to local amenities and transportation links. Studio apartments provide a convenient and self-contained living space ideal for students seeking independence. With limited square footage, these units are designed to maximize functionality and efficiency. The competitive rental market in Oldfield Park means that securing a studio apartment requires quick decision-making. By carefully reviewing the available options, students can find a comfortable and affordable living arrangement that suits their needs. In conclusion, studio apartments in Oldfield Park offer a practical and convenient housing solution for students, providing a balance between independence and community living.</p></>)
};

export default BathOldfieldParkStudio1;