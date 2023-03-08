import http from '../http-common';

// eslint-disable-next-line no-unused-vars
export default class vueRequestService {


    changePassword() {
        return http.post("/change-password")
    }


}