import axios from "axios";

const apiURL = "https://www.omdbapi.com/?apiKey=ffd0c3a5";

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: apiURL + url,
    data,
    headers
  });
