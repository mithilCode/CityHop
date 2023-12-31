import Tokendata from "./Tokendata";
const Config = {
  BASE_URL: process.env.REACT_APP_BASE_URL,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  key: process.env.REACT_APP_API_KEY,
  token: Tokendata && Tokendata.UserData.token,
};

export default Config;