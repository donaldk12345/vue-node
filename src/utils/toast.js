import iZtoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'

const toast = {
    error: (message, title = 'Error') => {
        return iZtoast.error({
            title: title,
            message: message,
            position: 'bottomCenter'
        });
    },
    success: (message, title = 'Success') => {
        return iZtoast.success({
            title: title,
            message: message,
            position: 'bottomCenter'
        });
    }
};

export default toast;