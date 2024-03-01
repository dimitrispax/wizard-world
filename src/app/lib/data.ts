export const fetcher = async () => {
  try {
    const response = await fetch("https://wizard-world-api.herokuapp.com/houses")
    const houses = await response.json();
    return houses
  } catch (e) { 
    console.log(e)
  }
}