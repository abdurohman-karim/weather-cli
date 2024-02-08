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
    -s [${chalk.blackBright("CITY")}] - get weather in city
    -h - get help
    -t [${chalk.blackBright("TOKEN")}] - set token
    `);
};

const printWeather = (response) => {
    function kelvinToCelsius(kelvinTemp) {
        return Math.round(kelvinTemp - 273.15)
    }
  console.log(dedent
    `
        ${chalk.cyan("WEATHER")}: ${response.name} / ${response.weather[0].description}
        ${chalk.cyan("TEMPERATURE")}: ${kelvinToCelsius(response.main.temp)} °С (feels like ${kelvinToCelsius(response.main.feels_like)})
        ${chalk.cyan("HUMIDITY")}: ${response.main.humidity} %
        ${chalk.cyan("WIND")}: ${response.wind.speed} m/s

    `
  );
};

export { printError, printSuccess, printHelp, printWeather };
