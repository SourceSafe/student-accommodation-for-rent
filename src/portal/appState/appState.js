import {atom} from '@zedux/react'

export const mainStatsAtom = atom('mainStats', {});
export const isDesktopAtom = atom('isDeskTop',true);
export const filtersAtom = atom('filters',{});
export const locationDisplayAtom = atom('locationDisplay',"");
export const isLoadingAtom = atom('isLoading',true);
export const isMiniFilterModeAtom = atom('isMiniFilterMode',false);
export const isPortalAtom = atom('isMiniFilterMode',false);
export const townAtom = atom('town',false);
export const locationAtom = atom('location',false);
export const homeTypeAtom = atom('homeType',false);
export const bedsAtom = atom('beds',false);
export const sortAtom = atom('sort',false);
export const minPriceAtom = atom('minPrice',false);
export const MaxPriceAtom = atom('maxPrice',false);
export const isStatsLoadingAtom = atom('isStatsLoading',true);

