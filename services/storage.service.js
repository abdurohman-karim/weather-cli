import os from "os";
import path from "path";
import fsPromises from "fs/promises";

const filePath = path.join(os.homedir(), "weather-data.json");

const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist(filePath)) {
    const file = await fsPromises.readFile(filePath);
    data = JSON.parse(file);
  }

  data[key] = value;
  await fsPromises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await fsPromises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }

  return undefined;
};

const isExist = async (path) => {
  try {
    await fsPromises.stat(path);
    return true;
  } catch (error) {
    console.log(error.message);
  }
};

export { saveKeyValue, getKeyValue };
