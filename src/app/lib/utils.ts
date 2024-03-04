import type {House} from '@/types';

/**
 * Checks if house's colour data from JSON are both default CSS colours.
 * When both colours are default CSS colous, returns the tailwindCSS code to render the colours.
 * When one or both colours are not default CSS colours, returns the tailwindCSS code to render black and white colours.
 * @param house 
 * @returns colours
 */
export const getHouseColours = (house: House): string => {
  
  /* Accessing colours from the JSON Data */
  const distilledColors = house.houseColours.toLowerCase().split(' ');
  const gradientColors = {gradientStart: distilledColors[0], gradientEnd: distilledColors[2]};
  
  let colours = "";
  /* Checking if the both colors are default CSS colours. */
  if (CSSDefaultColors.includes(gradientColors.gradientStart) && CSSDefaultColors.includes(gradientColors.gradientEnd)) {
    colours = `p-2 rounded-sm bg-gradient-to-r from-${gradientColors.gradientStart} to-${gradientColors.gradientEnd}`;
  } else {
    colours = "p-2 rounded-sm bg-gradient-to-r from-white to-black";
  }

  return colours;
}

export const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const CSSDefaultColors = "aqua, black, blue, brown, cyan, gray, green, lime, magenta, maroon, navy, olive, orange, purple, red, silver, teal, white, yellow";
 