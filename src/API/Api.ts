import axios from "axios";
import { RegisterModel } from "../Models/RegisterModel";
import { displayErrorMessage, displaySuccessMesage } from "./Helper.ts";
import { clearErrorMessage, clearSuccessMessage } from "../Elements/Helper.ts";


const baseApi = process.env.REACT_APP_BASE_API_URL;

const requestOptions = {
    headers: { 'Content-Type': 'application/json' }
}

export function create(model : RegisterModel) : void {
    let body = JSON.stringify(model);

    axios.post(`${baseApi}users`, body, requestOptions)
        .then((response) => {
            displaySuccessMesage(response);

            clearSuccessMessage();
        })
        .catch((err) => {
            displayErrorMessage(err);
            clearErrorMessage();
        })
}