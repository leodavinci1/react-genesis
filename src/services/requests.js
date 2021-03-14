import axiosInstance from '.';

export const RequestData = params => axiosInstance().post(`/api`, { params: params });
