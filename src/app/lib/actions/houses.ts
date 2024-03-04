import {delay} from '../utils'

/**
 * Fetches the houses data from the server.
 * @returns HouseData
 */
export const getHouses = async () => {
  try {
    const response = await fetch("https://wizard-world-backend.onrender.com/houses")
    const houseData = await response.json();
    // await delay(2000); // used to test the loading spinner.
    return houseData
  } catch (e) { 
    console.error(e)  
  }
}

