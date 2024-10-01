import axios from "../utils/axios-customize"

export const fetchAllDoctor = (query) => {
    const URL_BACKEND = `/api/doctor/fetch-all-doctor?${query}`    
    return axios.get(URL_BACKEND)
}
export const fetchAllChuyenKhoa = () => {
    const URL_BACKEND = '/api/doctor/fetch-all-chuyen-khoa'    
    return axios.get(URL_BACKEND)
}
export const fetchAllChucVu = () => {
    const URL_BACKEND = '/api/doctor/fetch-all-chuc-vu'    
    return axios.get(URL_BACKEND)
}
export const fetchAllPhongKham = () => {
    const URL_BACKEND = '/api/doctor/fetch-all-phong-kham'    
    return axios.get(URL_BACKEND)
}
export const callUploadDoctorImg = (file) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    return axios({
        method: 'post',
        url: '/api/doctor/upload',
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            "upload-type": "book"
        },
    });
}
export const callCreateDoctor = (email, password, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota) => {
    return axios.post('/api/doctor/create-doctor', {
        email, password, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota
    })
}