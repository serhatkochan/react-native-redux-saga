import axios from "axios";

export const getUserService = () => {
    return axios.get('https://randomuser.me/api/');
}