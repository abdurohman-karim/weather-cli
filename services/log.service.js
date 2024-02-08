import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(`${chalk.bgRed("ERROR")}: ${err}`);
};
const printSuccess = (success) => {
  console.log(`${chalk.bgBlue("SUCCESS")}: ${success}`);
};

const printHelp = () => {
  console.log(dedent`
    ${chalk.greenBright("HELP")}: 
    weather-cli <command> <option>
    -s [CITY] - get weather in city
    -h - get help
    -t [API_KEY] - set token
    `);
};

export { printError, printSuccess, printHelp };
