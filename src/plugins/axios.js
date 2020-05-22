"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//表单格式
axios.defaults.headers.post['Content-Type'] = 'application/json';//json格式
// axios.defaults.headers.post['mer-auth'] =Vue.$token  //!!!xd

let config = {
    // baseURL: '/qq',
    //baseURL: process.env.NODE_ENV === 'production' ? 'http://s.mer.pay.dianjishenghuo.cn': '/qq', // api 的 base_url
    //baseURL: Vue.webConfig.apiHost,
    timeout: 5000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        config.headers["mer-auth"] = Vue.token
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Plugin.install = function (Vue, options) {
    _axios.defaults.baseURL = Vue.webConfig.apiHost;

    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};


export default Plugin;
