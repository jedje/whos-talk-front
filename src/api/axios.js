import {backendApi} from "@/api/http";

const api_path = '/api';

// Test API 호출
function getTest() {
    // http://localhost:9090/api/test
    return backendApi.get(api_path + "/test");
}

export {
    getTest,
}

