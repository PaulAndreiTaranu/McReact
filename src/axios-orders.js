import axios from "axios";

const instance = axios.create({
   baseURL: "https://mcreactapp.firebaseio.com/",
   headers: {
      "Content-Type": "application/json",
      "Authorization": "JWT fefege...",
   },
});

export default instance;
