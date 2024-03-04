import {delay} from '../utils'

/**
 * Fetches the houses data from the server.
 * @returns HouseData
 */
export const getHouses = async () => {
  try {
    const response = await fetch("https://wizard-world-api.herokuapp.com/houses")
    const houseData = await response.json();
    await delay(2000);
    return houseData
  } catch (e) { 
    console.error(e)  
  }
}

