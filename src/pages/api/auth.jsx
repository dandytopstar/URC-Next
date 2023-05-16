/**
 * Des: aut API router
 * created_at: 2023.05.12
 * updated_at: 2023.05.12
 */

// import third-party libraries
import axios from "axios";
import { API_URL } from "../../resource/config";

export const auth = async (uri, data) => {
  try {
    const res = await axios.post(`${API_URL}${uri}`, {
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, application/xml",
      },
    });
    console.log(res)
    return res.response.data;
  } catch (res) {
    console.log(res)
    return res.response.data;
  }
};