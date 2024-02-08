import getArgs from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";

const startCLI = () => {
  const args = getArgs(process.argv);

  if(args.h) {
    printHelp();
  } else if(args.s) {
    printSuccess(args.s);
  } else {
    printError("Command not found");
  }
};

startCLI();
