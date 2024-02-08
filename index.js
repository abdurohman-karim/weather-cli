import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import {
  printError,
  printSuccess,
  printHelp,
  printWeather,
} from "./services/log.service.js";
import { getKeyValue, saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token not provided!");
    return;
  }
  try {
    await saveKeyValue("token", token);
    printSuccess("Token was saved");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City not provided!");
    return;
  }
  try {
    await saveKeyValue("city", city);
    printSuccess("City was saved");
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue("city"));
    const response = await getWeather(city);
    printWeather(response);
    // console.log(response);
  } catch (error) {
    if (error?.response?.status == 404) {
      printError("City not found");
    } else if (error?.response?.status == 401) {
      printError("Invalid token used");
    } else {
      printError(error.message);
    }
  }
};
const startCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  } else if (args.s) {
    return saveCity(args.s);
  } else if (args.t) {
    return saveToken(args.t);
  }
  return getForcast();
};

startCLI();
