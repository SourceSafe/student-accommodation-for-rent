import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";import { FaMagnifyingGlassChart } from "react-icons/fa6";const  BathRaglandsStudio = () => {return (<><h1>Studio Apartments for Students in Raglands, Bath</h1><ul><li><a href = "#average_rents_for_studio_apartments_for_students_in_raglands,_bath">Average Rents for Studio Apartments for Students in Raglands, Bath</a></li><li><a href = "#average_rents_for_studio_apartments_for_students_in_raglands,_bath__houses">Average Rents for Studio Apartments for Students in Raglands, Bath - Houses</a></li></ul><a id = "average_rents_for_studio_apartments_for_students_in_raglands,_bath"> <h2>Average Rents for Studio Apartments for Students in Raglands, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1309 per month </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71111" title = 'View our Studio Apartments for Students in Raglands, Bath'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table></p><a id = "average_rents_for_studio_apartments_for_students_in_raglands,_bath__houses"> <h2>Average Rents for Studio Apartments for Students in Raglands, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71111" title = 'View our Studio Apartments'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td><td><div/> </td><td>£1148 </td><td>£1430 </td><td>£1309 </td><td>£266 </td><td>£332 </td><td>£304 </td></tr></table></p></>)};export default BathRaglandsStudio;