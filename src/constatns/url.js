// @flow
import ENVS from "./env";
console.log("process.env:", process.env);
const REACT_APP_ENV = process.env.REACT_APP_ENV;
let host;

switch (REACT_APP_ENV) {
  case ENVS.local:
    host = "http://localhost:3010";
    break;
  case ENVS.dev:
    host = "https://f4.dev.eastgateganbaru.com";
    break;
  case ENVS.stg:
    host = "https://f4.stg.eastgateganbaru.com";
    break;
  case ENVS.prd:
    host = "https://f4app.herokuapp.com";
    break;
  default:
    host = "aaaaaaaaaa";
}

export default host;
