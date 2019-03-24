import axios from "axios";

export default axios.create({
  baseURL: "https://todo-7babb.firebaseio.com"
});
