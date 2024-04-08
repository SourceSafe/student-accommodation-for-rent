const positiveWords = ["BILLS INCLUDED", "BILLS INCLUSIVE", "PACKAGE AVAILABLE", "UTILITIES AVAILABLE", "UNLIMITED BILLS", "UNLIMITED ENERGY", "UNLIMITED BILLS", "UNLIMITED ENERGY"];
const negativeWords = ["BILLS NOT INCLUDED", "EXCLUSIVE OF BILLS"];

export const isBillsIncludedInText= (text) => {

    if(text===undefined)
    {
        return false;

    }
    const reducer = (result, subText) => {            
        if(upperText.includes(subText))
        {
            result =  true;
        }
        return result 
    }    
    
    const upperText = text?.toUpperCase();
    const includedInPositive = positiveWords.reduce(reducer, false)
    const includedInNegative = negativeWords.reduce(reducer, false)    
    return Boolean(includedInPositive && ! includedInNegative);
}
