import React, {useState,useEffect,useRef} from 'react';
import  "./portal.css"
import Select from 'react-dropdown-select';
import { Listing } from './Listing/Listing';

const Portal =  (props) =>
{
    const {initTown, initArea, initBeds, initType, initMinPrice,initMaxPrice} = props;        
    const allLocations = {value:"All", label:'All Locations'};
        
    const urlFormat = "https://kdwytshik8.execute-api.eu-west-2.amazonaws.com/Production/SearchResults";  
    const [totalCount, setTotalCount] = useState(0);  
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(1);
    const [data, setData] = useState("No Results");
          
    const [minPrice, setMinPrice] = useState(initMinPrice);
    const [maxPrice, setMaxPrice] = useState(initMaxPrice);
    const [url, setURL] = useState(initMaxPrice);

    const [searchTitle, setSearchTitle] = useState("");
        
    
    const availableLists = useRef();
        
    const [availabelTowns, setAvailableTowns] = useState([]);
    const [selectedTown, setSelectedTown] = useState([]);
      
    const [availableLocations, setAvailableLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState({});

    const [availableHomeTypes, setAvailableHomeType] = useState([]);
    const [selectedHomeType, setSelectedHomeType] = useState([]);
    
    const [selectedBedrooms, setSelectedBedrooms] = useState([]);
    const [availableBedrooms, setAvailableBedrooms] = useState([]);

    const [selectedMinPrice, setSelectedMinPrice] = useState([]);
    const [availableMinPrice, setAvailableMinPrice] = useState([]);

    const [selectedMaxPrice, setSelectedMaxPrice] = useState([]);
    const [availableMaxPrice, setAvailableMaxPrice] = useState([]);

            

    useEffect(() => {   
      const fetchLocationByTown = async () => {
        try {                    
           const response = await fetch("https://kdwytshik8.execute-api.eu-west-2.amazonaws.com/Production/LocationByTown");                        
           const r = await response.json();           
           availableLists.current = r;           
           initList(availableLists.current);           
                     
        } catch (error) {
          console.error('Error fetching locationByTown:', error);
        } finally {
          
        }
      }; 
  
      fetchLocationByTown();
    }, []);



    const initList = (lists) =>
    {
        //Town
        const townList =  lists?.locationsByTown?.map(item => {return {label:item.town, value:item.townLocationIdentifier}});      
        const map = new Map(townList.map(item => [item.label, item]));
        const uniqueTown = [...map.values()];                      
        setAvailableTowns(uniqueTown)       
        setSelectedTown([uniqueTown[0]]);         
        setAvailableBedrooms(lists.bedrooms);
        setSelectedBedrooms([lists.bedrooms[0]]);
        setAvailableHomeType(lists.homeType);
        setSelectedHomeType([lists.homeType[0]]);
        setAvailableMinPrice(lists.pricesMin)
        setSelectedMinPrice([lists.pricesMin[0]])
        setAvailableMaxPrice(lists.pricesMax)
        setSelectedMaxPrice([lists.pricesMax[0]])
    }


    useEffect(() => {              
      const locations =  availableLists.current?.locationsByTown?.filter(item =>  item.town === selectedTown[0].label && item.location?.split(",")[0] !== item.town).map(item => {return {label:item.location?.split(",")[0], value:item.locationIdentifier}});    
      if(locations)
      {
        locations?.unshift(allLocations);
        setAvailableLocations(locations)                            
        setSelectedLocation([locations[0]]);          
      }
    }, [selectedTown]);
    
    useEffect(() => {            
      reRequest();   
      }
    , [selectedLocation, selectedBedrooms, selectedHomeType, selectedMinPrice, selectedMaxPrice]);


    const reRequest = () =>
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


      let minPrice= ""      
      if(selectedMinPrice.length>0)
      {
        if(selectedMinPrice[0].value != "All")
        {
          minPrice = selectedMinPrice[0].value;          
        }
      }


      let maxPrice= ""      
      if(selectedMaxPrice.length>0)
      {
        if(selectedMaxPrice[0].value != "All")
        {
          maxPrice = selectedMaxPrice[0].value;          
        }
      }





                
      if(locationIdentifier)
      {
        const url = urlFormat +  "?locationIdentifier=" + locationIdentifier + "&index=" + index + "&minBedrooms=" + beds +  "&maxBedrooms=" + beds + "&propertyTypes=" + propertyTypes + "&minPrice=" + minPrice+ "&maxPrice=" + maxPrice
        console.log(url);
        setURL(url)        
      }      
      
    }

    
   
    useEffect(() => {
      const fetchData = async () => {
        try {          
          const response = await fetch(url);
          const result = await response.json();          
          setData(result);
          setTotalCount(result.totalCount);
          setSearchTitle(result.searchTitle);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          
        }
      };
  
      fetchData();
    }, [url]);

    useEffect(() => {      
      const index = page == 0 ? 0 : (page-1) * 24;
      setIndex(index);      
    }, [page]);

    useEffect(() => {
      setPage(1);
      reRequest();              
    }, [selectedTown, selectedLocation, selectedBedrooms, selectedHomeType, selectedMinPrice, selectedMaxPrice]);



    useEffect(() => {
      reRequest()                
    }, [index]);


    const youAreSearchingFor = () =>
    {
      //5 Bedroom Student Semi-detached Houses To Let in Bath, Somerset, £250 – £30,000

      let ret = "";






      return ret;

    }

    const isPrev = page > 1;
    const isNext = totalCount / 24 > page;    
            
    const townSelect = selectedTown? selectedTown : [];
    const locationSelecte = selectedLocation? selectedLocation : {};

    console.log(locationSelecte)
    
    return(
        <div style={{width:"100%"}}>
            <div className = "filters">
                <div className = "filter">
                    <div className = "filterName">
                        Town
                    </div>
                    <div className = "filterTown filterGeneral">
                      <Select type="text" values= { townSelect} className = "select" options={availabelTowns} onChange={(values) => setSelectedTown(values)} />
                    </div>
                </div>
                <div className = "filter">
                <div className = "filterName">
                        Location
                    </div>
                    <div className = "filterArea filterGeneral">
                    <Select type="text"  values={selectedLocation} options={availableLocations} onChange={(values) => setSelectedLocation(values)} />
                    </div>                    
                </div>

                
                <div className = "filter">
                <div className = "filterName">
                        Bedrooms                        
                    </div>
                    <div className = "filterBeds filterGeneral">
                    <Select type="text" values={selectedBedrooms} options={availableBedrooms} onChange={(values) => setSelectedBedrooms(values)} />
                    </div>                    
                </div>

                
                <div className = "filter">
                <div className = "filterName">
                        Min Price
                    </div>
                    <div className = "filterPrice filterGeneral">
                    <Select type="text"  values={selectedMinPrice}  options={availableMinPrice} onChange={(values) => setSelectedMinPrice(values)} />
                    </div>                    
                </div>

                
                <div className = "filter">
                <div className = "filterName">
                        Max Price
                    </div>
                    <div className = "filterPrice filterGeneral">
                    <Select values={selectedMaxPrice} options={availableMaxPrice} onChange={(values) => setSelectedMaxPrice(values)} />
                    </div>                    
                </div>

                <div className = "filter">
                <div className = "filterName">
                        Home Type                        
                    </div>
                    <div className = "filterType filterGeneral">
                    <Select  type="text" values={selectedHomeType} options={availableHomeTypes} onChange={(values) => setSelectedHomeType(values)} />
                    </div>                    
                </div>
            </div>
    
        
        <div className = "titledSearch">
          <div className = "seachTitle">{searchTitle}</div>
          <div>                
                <span>{JSON.stringify(totalCount)} </span>                
                <span style = {{fontSize:'small'}}>results </span>
          </div>                    

        </div>
              
          {data.totalCount>0 &&
          <div>
            <div style={{display:'flex'}}>              
         
            </div> 
                <div className="listings"> 
                  {data.results.map(listing => <Listing listing={listing} ></Listing>)}  
                </div>                                    
              </div>} 

              <div>
              <button disabled = {!isPrev} onClick={() => setPage(page-1)}>Previous</button>
                <label>{page}</label>
                <button disabled = {!isNext} onClick={() => setPage(page+1)}>Next</button>
              </div>
                    

          </div>
      
        
        
        

    )
}

export {Portal}