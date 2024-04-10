import {atom} from '@zedux/react'
// const loadingListings = require('./data/LoadingListings.json');        
const loadingListings = require('../data/LoadingListings.json');        

export const mainStatsAtom = atom('mainStats', {});
export const isDesktopAtom = atom('isDeskTop',true);
export const filtersAtom = atom('filters',{});
export const locationDisplayAtom = atom('locationDisplay',"");
export const isLoadingAtom = atom('isLoading',true);
export const isMiniFilterModeAtom = atom('isMiniFilterMode',false);
export const isPortalAtom = atom('isPortal',false);
export const townAtom = atom('town',false);
export const locationAtom = atom('location',false);
export const homeTypeAtom = atom('homeType',false);
export const bedsAtom = atom('beds',false);
export const sortAtom = atom('sort',false);
export const minPriceAtom = atom('minPrice',false);
export const MaxPriceAtom = atom('maxPrice',false);
export const isStatsLoadingAtom = atom('isStatsLoading',true);
export const portalUrlAtom = atom('portalURL',"");
export const searchResultsAtom = atom('searchResults',loadingListings);
export const pageIndexAtom = atom('pageIndex',1);
export const searchResultsCountAtom = atom('searchResultsCount',0);

//export const partnerAtom = atom('partner', {name:"UniHomes.com", link: "partnerDetail", image:''});
export const partnerAtom = atom('partner', {name:"SplitTheBills.com", quotelink: "https://join.splitthebills.co.uk/", image:'https://www.splitthebills.co.uk/wp-content/uploads/2020/11/Split-The-Bills.png'});
//export const partnerAtom = atom('partner', {name:"UniHomes.com", quotelink: "https://join.unihomes.co.uk/", image:'https://www.splitthebills.co.uk/wp-content/uploads/2020/11/Split-The-Bills.png'});



