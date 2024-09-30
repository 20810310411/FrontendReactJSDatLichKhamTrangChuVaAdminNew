import axios from "../utils/axios-customize"

export const fetchAllDoctor = (query) => {
    const URL_BACKEND = `/api/doctor/fetch-all-doctor?${query}`    
    return axios.get(URL_BACKEND)
}
export const fetchAllChuyenKhoa = () => {
    const URL_BACKEND = '/api/doctor/fetch-all-chuyen-khoa'    
    return axios.get(URL_BACKEND)
}