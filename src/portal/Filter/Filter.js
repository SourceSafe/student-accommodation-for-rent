import {useState, useEffect} from 'react';
import '../portal.css'
import Select  from 'react-dropdown-select';
import Slider from 'rc-slider';
import { FaDeleteLeft } from "react-icons/fa6";
import {withComma} from "../../helper/format-helper"
import { locationDisplayAtom, filtersAtom, isDesktopAtom, isMiniFilterModeAtom } from '../appState/appState';
import { useAtomState } from '@zedux/react';
import { IoOptions } from "react-icons/io5";

export const Filter = () =>
{
    const [locationDisplay,setlocationDisplay] = useAtomState(locationDisplayAtom);
    const [isMiniFilterMode,setIsMiniFilterMode] = useAtomState(isMiniFilterModeAtom);
    const [filter,setFilter] = useAtomState(filtersAtom);
    const [isDesktop,] = useAtomState(isDesktopAtom);

    const lists = require('.././data/LocationByTown.json');
    const allLocations = {value:"All", label:'All Locations'};              
    const [listsLoading, setListsLoading] = useState(true);
    const priceRange = [250, 6000];
    const [selectedPriceRange, setSelectedPriceRange] = useState(priceRange);  
    const [priceRangeDisplay, setPriceRangeDisplay] = useState();      
    const [availabelTowns, setAvailableTowns] = useState([]);
    const [selectedTown, setSelectedTown] = useState([]);
    const [availableSortTypes, setAvailableSortType] = useState([]);
    const [selectedSortType, setSelectedSortType] = useState([]);        
    const [availableLocations, setAvailableLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState({});
    const [availableHomeTypes, setAvailableHomeType] = useState([]);
    const [selectedHomeType, setSelectedHomeType] = useState([]);    
    const [selectedBedrooms, setSelectedBedrooms] = useState([]);
    const [availableBedrooms, setAvailableBedrooms] = useState([]);      
    const [selectedMaxPrice, setSelectedMaxPrice] = useState([]);
    const [selectedMinPrice, setSelectedMinPrice] = useState([]);
    const [isPriceFilterSet, setIsPriceFilterSet] = useState(false);
    const [minPriceSlider, setMinPriceSlider] = useState(priceRange[0]);
    const [maxPriceSlider, setMaxPriceSlider] = useState(priceRange[1]);    
    

    
    useEffect(() => {       
        setListsLoading(true);        
        initList(lists);                 
        setListsLoading(false);              
      }, []);
    
        
    useEffect(() => {            
        evaluateFilter();   
        }
      , [selectedLocation, selectedBedrooms, selectedHomeType,  selectedMinPrice,  selectedMaxPrice, selectedSortType]);

      
    const evaluateFilter = () =>
    {
      const locationIdentifier = selectedLocation[0]?.value === "All" ? selectedTown[0]?.value.replace("^", "%5E") : selectedLocation[0]?.value.replace("^", "%5E");

      let beds= ""      
      if(selectedBedrooms.length>0)
      {
        if(selectedBedrooms[0].value != "All")
        {
          beds = selectedBedrooms[0].value;          
        }
      }

      let propertyTypes= ""      
      if(selectedHomeType.length>0)
      {
        if(selectedHomeType[0].value != "All")
        {
          propertyTypes = selectedHomeType[0].value;          
        }
      }

      let sortType = selectedSortType[0]?.value;            

      

      
                
      if(locationIdentifier)
      {        
        setFilter({locationIdentifier, beds, propertyTypes, sortType, selectedMinPrice, selectedMaxPrice})
        setlocationDisplay(getLocationDisplay());
      }            
    }


    const getLocationDisplay = () =>
    {
      let ret = "No Location Selected";
      if(selectedLocation.length==1 && selectedLocation.length==1)
      {
        ret = selectedLocation[0].value === 'All' ?  selectedTown[0].label : `${selectedLocation[0].label}, ${selectedTown[0].label}`
      }
      return ret;      
    }

    

      
    useEffect(() => {              

        if(selectedTown.length>0)
        {
        const locations =  lists?.locationsByTown?.filter(item =>  item.town === selectedTown[0].label && item.location?.split(",")[0] !== item.town).map(item => {return {label:item.location?.split(",")[0], value:item.locationIdentifier}});    
        if(locations)
        {
          locations?.unshift(allLocations);
          setAvailableLocations(locations)                            
          setSelectedLocation([locations[0]]);                          
        }
      }
      }, [selectedTown]);
  
  

              
    const initList = (lists) =>
    {
        const townList =  lists?.locationsByTown?.map(item => {return {label:item.town, value:item.townLocationIdentifier}});      
        const map = new Map(townList.map(item => [item.label, item]));
        const uniqueTown = [...map.values()];                      
         setAvailableTowns(uniqueTown)       
         setSelectedTown([uniqueTown[0]]);         
        setAvailableBedrooms(lists.bedrooms);
        setSelectedBedrooms([lists.bedrooms[0]]);
        setAvailableHomeType(lists.homeType);
        setSelectedHomeType([lists.homeType[0]]);
        setAvailableSortType(lists.sortTypes);        
        setSelectedSortType([lists.sortTypes[2]]);
    }

  
  

       
    useEffect(() => {       
      const isSet = selectedPriceRange[0] !== priceRange[0] ||  selectedPriceRange[1] !== priceRange[1] ;
      setIsPriceFilterSet(isSet);      
    }, [selectedPriceRange]);

      


    
  useEffect(() => {    
      
    if(selectedPriceRange[0] == priceRange[0] && selectedPriceRange[1] != priceRange[1]) {
      setPriceRangeDisplay(`Everything below £${selectedPriceRange[1]}`)
      return;
    }
    

    if(selectedPriceRange[0] != priceRange[0] && selectedPriceRange[1] == priceRange[1]) {
      setPriceRangeDisplay(`Everything above £${selectedPriceRange[0]}`)
      return;
    }


    if(selectedPriceRange[0] != priceRange[0] && selectedPriceRange[1] != priceRange[1])
    {
      setPriceRangeDisplay(`£${selectedPriceRange[0]}  to  £${selectedPriceRange[1]}`)
      return;
    }

    
    if(selectedPriceRange[0] == priceRange[0] && selectedPriceRange[1] == priceRange[1])
    {
      setPriceRangeDisplay(`All Prices`)
      return;
    }


  } , [selectedPriceRange]);

  const onPriceRangeComplete = (value) =>
  {    
    setSelectedMinPrice( value[0])
    setSelectedMaxPrice( value[1])    
  }

  
  const onPriceRangeChange = (value) =>
  {   
    setSelectedPriceRange(value);
    setMinPriceSlider(value[0]);
    setMaxPriceSlider(value[1]);
  }

  const townSelect = selectedTown? selectedTown : [];

  const onClickClear = () =>
  {
    setSelectedPriceRange(priceRange);
    onPriceRangeComplete(priceRange)    
  }
    



const onFilter = () =>
{
  setIsMiniFilterMode(true);
}

const onApply = () =>
{
  setIsMiniFilterMode(false);
}




const showFilter = isDesktop  || isMiniFilterMode ? "block" : "none";

return(<div>


  



    
<div className = "filterBar" >




  

  <div className = "filters">

    <div className = "filter" style = {{width:"195px"}}>
        <div className = "filterName" style ={{display: {}}}>
            Town
        </div>
        <div className = "filterTown">
          <Select  disabled={listsLoading}  className={"select"}  type="text" values= { townSelect}  options={availabelTowns} onChange={(values) => setSelectedTown(values)} />
        </div>
    </div>

    {  (isDesktop  || isMiniFilterMode)  && 
    
        <div className = "filter">
          <div className = "filterName">
                Location
            </div>
            <div className = "filterArea filterGeneral">
            <Select  disabled={listsLoading}  className={"select"} type="text"  values={selectedLocation} options={availableLocations} onChange={(values) => setSelectedLocation(values)} />
            </div>                    
          </div>

        }

        
{  (isDesktop  || isMiniFilterMode)  && 

          <div className = "filter">
    <div className = "filterName">
            Bedrooms                        
        </div>
        <div className = "filterBeds filterGeneral">
        <Select disabled={listsLoading}  className={"select"} type="text" values={selectedBedrooms} options={availableBedrooms} onChange={(values) => setSelectedBedrooms(values)} />
        </div>                    
    </div>
}


{  (isDesktop  || isMiniFilterMode)  && 
    <div className = "filter">
      <div className = "filterName">
              Home Type                        
          </div>
          <div className = "filterType filterGeneral">
          <Select   disabled={listsLoading}  className={"select"} type="text" values={selectedHomeType} options={availableHomeTypes} onChange={(values) => setSelectedHomeType(values)} />
          </div>                    
      </div>
}
    
        
{  (isDesktop  || isMiniFilterMode)  && 
      <div className = "priceFilter">
              <div className = "priceFilterName">
                  <label>  Price Range</label>
                  { isPriceFilterSet && <FaDeleteLeft onClick={onClickClear}  size={20} ></FaDeleteLeft>}
              </div>              
                <Slider   handleStyle={{
                    
                    height: 20,
                    width: 20,
                    marginLeft: -10,
                    marginTop: -7,
          
        }} style={{marginTop:"5px"}} range  min={priceRange[0]}  max = {priceRange[1]} value = {selectedPriceRange} onChangeComplete={(value) => onPriceRangeComplete(value) } onChange={onPriceRangeChange}   step = {25}  />                                
                <div className = "priceFilterSelection">
                <span className = "priceFilterUnit">{withComma(priceRangeDisplay)}</span>                                                         
              </div>                                     
            
      </div>
  }

                    
    </div>

  
    
    {  (isDesktop  || isMiniFilterMode)  && 
    <div className = "filter sortFilter">     
      <div className = "filterGeneral  sortName">
          Sort
      </div>                                                                 
      <div className = "filterSortType sortFilter">
        <Select   disabled={listsLoading}  className={"select"}  type="text" values={selectedSortType} options={availableSortTypes} onChange={(values) => setSelectedSortType(values)} />
        </div>                    
      </div>
 } 



{!isDesktop && !isMiniFilterMode &&
  <button onClick={onFilter} className ="filterButton">
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:20}}>
    <div>
        <IoOptions size="25"/>        
      </div>          
      {/* <div >
        Filters    
      </div> */}

    </div>
</button>


}

</div>


<div style={{display:'flex', justifyContent:'center'}}>

{!isDesktop && isMiniFilterMode &&

  <button onClick={onApply} className ="filterButton" style={{width:"95%"}}>Less Filters</button>
  }
  </div>




</div>)


}
