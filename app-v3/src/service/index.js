import axios from "axios";
class HttpRequest {
    constructor(baseURl, timeout = 3000) {
        this.instance = axios.create({
            baseURl,
            timeout
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config)
                .then(res => {
                    resolve(res.data)
                }).cache(err => reject(err))
        })
    }

    get(config) {
        this.request({...config, method: 'GET'})
    }

    post(config) {
        this.request({...config, method: 'POST'})
    }
}

export const http = new HttpRequest();