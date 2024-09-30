import axios from "../utils/axios-customize"

export const fetchAllDoctor = () => {
    const URL_BACKEND = '/api/doctor/fetch-all-doctor'    
    return axios.get(URL_BACKEND)
}
export const fetchAllChuyenKhoa = () => {
    const URL_BACKEND = '/api/doctor/fetch-all-chuyen-khoa'    
    return axios.get(URL_BACKEND)
}