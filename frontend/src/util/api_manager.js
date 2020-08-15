import axios from 'axios'

const ENDPOINTS = {

}

function request(method, endpoint, requestData) {
    try {
        const { data } = axios({
            method, 
            url: endpoint, 
            data: requestData,
            timeout: 1500
        })
        return Promise.resolve(data)
    } catch (err) {
        return Promise.reject({error: err, success: false})
    }
}

export default {}