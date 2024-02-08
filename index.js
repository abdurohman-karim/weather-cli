import getArgs from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const startCLI = () => {
  const args = getArgs(process.argv);

  const saveToken = async (token) => {
    try {
      await saveKeyValue("token", token);
      printSuccess("Token was saved");
    } catch (error) {
      printError(error.message);
    }
  };

  if (args.h) {
    printHelp();
  } else if (args.s) {
    printSuccess(args.s);
  } else if (args.t) {
    saveToken(args.t);
  } else {
    printError("Command not found");
  }
};

startCLI();
