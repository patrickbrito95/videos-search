import axios from "axios";

const KEY = "AIzaSyD71CEAAh4qT_QEUHFnLPK0_CJX4Bu4DOM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY,
  },
});
