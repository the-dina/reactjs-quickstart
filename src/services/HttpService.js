import axios from "axios";

class HttpService {
    get(url) {
        return axios.get(url)
            .then(function (response) {
                return response.data;
            })
    }
}

const instance = new HttpService();
export default instance;