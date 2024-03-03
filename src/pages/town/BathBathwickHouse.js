import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";import { FaMagnifyingGlassChart } from "react-icons/fa6";const  BathBathwickHouse = () => {return (<><h1>Shared Houses for Students in Bathwick, Bath</h1><ul><li><a href = "#average_rents_for_shared_houses_for_students_in_bathwick,_bath">Average Rents for Shared Houses for Students in Bathwick, Bath</a></li><li><a href = "#average_rents_for_shared_houses_for_students_in_bathwick,_bath__houses">Average Rents for Shared Houses for Students in Bathwick, Bath - Houses</a></li></ul><a id = "average_rents_for_shared_houses_for_students_in_bathwick,_bath"> <h2>Average Rents for Shared Houses for Students in Bathwick, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£725 per month </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^3051" title = 'View our Shared Houses for Students in Bathwick, Bath'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table></p><a id = "average_rents_for_shared_houses_for_students_in_bathwick,_bath__houses"> <h2>Average Rents for Shared Houses for Students in Bathwick, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>5 Bed House </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^3051" title = 'View our 5 Bed Houses'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-houses-for-students-in-bathwick-bath' title  = 'View Key Statistics for 5 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£717 </td><td>£720 </td><td>£718 </td><td>£166 </td><td>£167 </td><td>£166 </td></tr><tr><td>7 Bed House </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^3051" title = 'View our 7 Bed Houses'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-7-bedroom-houses-for-students-in-bathwick-bath' title  = 'View Key Statistics for 7 Bed Houses'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£740 </td><td>£740 </td><td>£740 </td><td>£172 </td><td>£172 </td><td>£172 </td></tr></table></p></>)};export default BathBathwickHouse;