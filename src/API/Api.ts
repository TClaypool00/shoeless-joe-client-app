import axios from "axios";
import { RegisterModel } from "../Models/RegisterModel";
import { displayErrorMessage, displaySuccessMesage } from "./Helper.ts";
import { clearErrorMessage, clearSuccessMessage } from "../Elements/Helper.ts";
import { LoginModel } from "../Models/LoginModel";
import { NavigateFunction } from "react-router-dom";


const baseApi = process.env.REACT_APP_BASE_API_URL;
var body = '';

const requestOptions = {
    headers: { 'Content-Type': 'application/json' }
}

export function create(model : RegisterModel) : void {
    body = JSON.stringify(model);

    axios.post(`${baseApi}users`, body, requestOptions)
        .then((response) => {
            displaySuccessMesage(response);

            clearSuccessMessage();
        })
        .catch((err) => {
            console.log(err);
            displayErrorMessage(err);
            clearErrorMessage();
        })
}

export function login(model : LoginModel, navigate : NavigateFunction) : void {
    body = JSON.stringify(model);

    axios.post(`${baseApi}users/Login`, body, requestOptions)
        .then((resp) => {
            console.log(resp);

            localStorage.setItem('user', JSON.stringify(resp.data));

            navigate('/');
        })
        .catch((err) => {
            console.log(err);
            displayErrorMessage(err);
            clearErrorMessage();
        })
}