import axios from "axios";
import { getKeyValue } from "./storage.service.js";

const getWeather = async (city) => {
  // https://api.openweathermap.org/data/3.0/weather?lat={lat}&lon={lon}&exclude={part}&appid={API key}

  const token = await getKeyValue("token");
  if (!token) {
    throw new Error("API_KEY does not exist, write -t [TOKEN] to set token");
  }
  const response = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
        params: {
            q: city,
            appid: token,
        }
    });
    return response.data;
};

export { getWeather };
