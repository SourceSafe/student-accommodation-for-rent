



export const getSelectionLists = async () => {
        try {          
          
          const response = await fetch("https://kdwytshik8.execute-api.eu-west-2.amazonaws.com/Production/LocationByTown");
          const result = await response.json();                      
          return result;          
          
        } catch (error) {
            console.error('Error fetching locationByTown:', error);
        } finally {
          
        }
      }; 




        
  export const minPriceOptions = [
    { 
      value: 1,
      label: "£400pm"
    },
    { 
        value: 2,
        label: "£500pm"
      },
    {
      value:  3,
      label: "£600pm"
    }
  ];

  export const maxPriceOptions = [
    { 
      value: 1,
      label: "£400pm"
    },
    { 
        value: 2,
        label: "£500pm"
      },
    {
      value:  3,
      label: "£600pm"
    }
  ];


  
  export  const typeOptions = [
    { 
      value: 1,
      label: "Studio"
    },
    { 
        value: 2,
        label: "Flat"
      },
    {
      value:  3,
      label: "House"
    }
  ];

