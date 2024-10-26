import axios from "../utils/axios-customize"

export const callLogin = (email, password) => {
    const URL_BACKEND = '/api/users/login-admin'
    const data = {
        email, password
    }
    return axios.post(URL_BACKEND, data)
}

export const callLoginBenhNhan = (email, password) => {
    const URL_BACKEND = '/api/users/login-benh-nhan'
    const data = {
        email, password
    }
    return axios.post(URL_BACKEND, data)
}

export const callRegister = (email, password, firstName, lastName, address, phone, gender) => {
    const URL_BACKEND = '/api/users/register-admin'
    const data = {
        email, password, firstName, lastName, address, phone, gender
    }
    return axios.post(URL_BACKEND, data)
}

export const callRegisterBenhNhan = (email, password, firstName, lastName, address, phone, gender) => {
    const URL_BACKEND = '/api/users/register-benh-nhan'
    const data = {
        email, password, firstName, lastName, address, phone, gender
    }
    return axios.post(URL_BACKEND, data)
}

export const callLogout = () => {
    const URL_BACKEND = '/api/users/logout-admin'    
    return axios.post(URL_BACKEND)
}

export const callLogoutBenhNhan = () => {
    const URL_BACKEND = '/api/users/logout-benh-nhan'    
    return axios.post(URL_BACKEND)
}