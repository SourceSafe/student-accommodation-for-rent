export const withComma = (txt) =>{
    return txt ?  txt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : txt;
  }