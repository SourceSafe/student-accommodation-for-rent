export const withComma = (txt) =>{
    return txt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }