import axios from "axios";
import { getUrl } from "../helper/util";

const employeeAPI = {
  fetchEmployee() {
    return axios
      .get(getUrl("employees"))
      .then(response => ({
        payload: response.data
      }))
      .catch(error => ({
        error
      }));
  }
};

export default employeeAPI;
