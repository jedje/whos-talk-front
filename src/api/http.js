import axios from "axios";

const backendApi =  axios.create({
    headers: {
        Authorization : `${localStorage.getItem("auth-token")}`
    },
    validateStatus: function (status) {
        if(status === 500) {
            alert("서버 오류가 발생되었습니다.");
            return false;
        }else {
            return status < 500;
        }
    }
});

backendApi.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error)
    }
);

export { backendApi };
