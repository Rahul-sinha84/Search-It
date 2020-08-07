import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID rEj5hDldsAMD3MwvRG8Uj9Fe48d5WV5qs10DMTxPxBM'
    }
});