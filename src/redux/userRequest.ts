import axios from 'axios'

export function requestGetUser(){
    return axios.request({
        method:"get",
        url:"http://10.0.2.2:4000/users"
    });
}