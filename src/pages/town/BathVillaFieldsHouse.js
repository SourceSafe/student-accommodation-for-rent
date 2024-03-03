import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";import { FaMagnifyingGlassChart } from "react-icons/fa6";const  BathVillaFieldsHouse = () => {return (<><h1>Shared Houses for Students in Villa Fields, Bath</h1><ul><li><a href = "#average_rents_for_shared_houses_for_students_in_villa_fields,_bath">Average Rents for Shared Houses for Students in Villa Fields, Bath</a></li><li><a href = "#average_rents_for_shared_houses_for_students_in_villa_fields,_bath__houses">Average Rents for Shared Houses for Students in Villa Fields, Bath - Houses</a></li></ul><a id = "average_rents_for_shared_houses_for_students_in_villa_fields,_bath"> <h2>Average Rents for Shared Houses for Students in Villa Fields, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£910 per month </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=&type=House&townLocationId=REGION^116&areaLocationId=REGION^71121" title = 'View our Shared Houses for Students in Villa Fields, Bath'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table></p><a id = "average_rents_for_shared_houses_for_students_in_villa_fields,_bath__houses"> <h2>Average Rents for Shared Houses for Students in Villa Fields, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr></table></p></>)};export default BathVillaFieldsHouse;