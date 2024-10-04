import axios from "../utils/axios-customize"

// doctor
export const fetchAllDoctor = (query) => {
    const URL_BACKEND = `/api/doctor/fetch-all-doctor?${query}`    
    return axios.get(URL_BACKEND)
}
export const callCreateDoctor = (email, password, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota) => {
    return axios.post('/api/doctor/create-doctor', {
        email, password, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota
    })
}
export const updateDoctor = (_id, email, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota) => {
    return axios.put('/api/doctor/update-doctor', {
        _id, email, firstName, lastName, address, phoneNumber, chucVuId, gender, image, chuyenKhoaId, phongKhamId, mota
    })
}
export const deleteDoctor = (_id) => {
    return axios.delete(`/api/doctor/delete-doctor/${_id}`)
}


// chuyen khoa
export const fetchAllChuyenKhoa = () => {
    const URL_BACKEND = '/api/doctor/fetch-all-chuyen-khoa'    
    return axios.get(URL_BACKEND)
}


//  chuc vu
export const fetchAllChucVu = (query) => {
    const URL_BACKEND = `/api/doctor/fetch-all-chuc-vu?${query}`    
    return axios.get(URL_BACKEND)
}
export const createChucVu = (name, description) => {
    return axios.post('/api/doctor/create-chuc-vu', {
        name, description
    })
}
export const deleteChucVu = (_id) => {
    return axios.delete(`/api/doctor/delete-chuc-vu/${_id}`)
}
export const updateChucVu = (_id, name, description) => {
    return axios.put('/api/doctor/update-chuc-vu', {
        _id, name, description
    })
}


// phong kham
export const fetchAllPhongKham = (query) => {
    const URL_BACKEND = `/api/doctor/fetch-all-phong-kham?${query}`    
    return axios.get(URL_BACKEND)
}
export const createPhongKham = (name, address, description , hinhAnh) => {
    return axios.post('/api/doctor/create-phong-kham', {
        name, address, description , hinhAnh
    })
}
export const deletePhongKham = (_id) => {
    return axios.delete(`/api/doctor/delete-phong-kham/${_id}`)
}

// upload hình ảnh
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








