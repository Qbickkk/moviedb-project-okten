import axios from "axios";

import {access_token, baseURL} from "../constants";

const apiService = axios.create({headers:{Authorization:access_token}, baseURL});

export {
    apiService
}