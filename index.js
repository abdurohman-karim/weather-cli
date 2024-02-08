import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

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

const getForcast = async () => {
    try{
        const response = await getWeather(process.env.CITY ?? 'tashkent')
        console.log(response);
    } catch (error) {
        if(error?.response?.status == 404){
            printError('City not found')
        } else if(error?.response?.status == 401){
            printError('Invalid token used')
        } else{ 
            printError(error.message)
        }
    }
};
const startCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  } else if (args.s) {
    printSuccess(args.s);
  } else if (args.t) {
    saveToken(args.t);
  } 
  getForcast();
};

startCLI();
