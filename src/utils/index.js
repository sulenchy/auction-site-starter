import { LOGIN_ENDPOINT, REGISTER_ENDPOINT, CREATE_API_KEY } from "./constants";

function createRequest(method) {
   async function makeRequest(options) {
        try{
            const response = await fetch(method, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
          
              const responseData = await response.json(); // Parse the JSON response
              return responseData;
            } catch (error) {
              console.error('Error posting data:', error);
            }
    }
}


export {
    LOGIN_ENDPOINT,
    REGISTER_ENDPOINT,
    CREATE_API_KEY,
    createRequest
}