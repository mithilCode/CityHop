import axios from "axios";
import Config from "../Common/Config";

// Login 
const Logindata = async (data) => {
    var apiPromise = new Promise((resolve, reject) => {
        axios
            .post(`${Config.API_BASE_URL}/login`, data, {
                headers: {
                    key: Config.key,
                },
            })
            .then(async (response) => {
                if (
                    response.data.ResponseCode === 1 ||
                    response.data.ResponseCode === "1"
                ) {
                    return resolve(response.data);
                } else {
                    return resolve(response.data);
                }
            })
            .catch((error) => {
                return reject(error);
            });
    });
    return await apiPromise;
};

// sendOTP
const SendOtp = async (data) => {
    var apiPromise = new Promise((resolve, reject) => {
        axios
            .post(`${Config.API_BASE_URL}/sendOTP`, data, {
                headers: {
                    key: Config.key,
                },
            })
            .then(async (response) => {
                if (
                    response.data.ResponseCode === 1 ||
                    response.data.ResponseCode === "1"
                ) {
                    return resolve(response.data);
                } else {
                    return resolve(response.data);
                }
            })
            .catch((error) => {
                return reject(error);
            });
    });
    return await apiPromise;
};

// verifyOTP
const VerifyOTP = async (data) => {
    var apiPromise = new Promise((resolve, reject) => {
        axios
            .post(`${Config.API_BASE_URL}/verifyOTP`, data, {
                headers: {
                    key: Config.key,
                },
            })
            .then(async (response) => {
                if (
                    response.data.ResponseCode === 1 ||
                    response.data.ResponseCode === "1"
                ) {
                    return resolve(response.data);
                } else {
                    return resolve(response.data);
                }
            })
            .catch((error) => {
                return reject(error);
            });
    });
    return await apiPromise;
};

// forgotPassword
const ForgotPasswordset = async (data) => {
    var apiPromise = new Promise((resolve, reject) => {
        axios
            .post(`${Config.API_BASE_URL}/forgotPassword`, data, {
                headers: {
                    key: Config.key,
                },
            })
            .then(async (response) => {
                if (
                    response.data.ResponseCode === 1 ||
                    response.data.ResponseCode === "1"
                ) {
                    return resolve(response.data);
                } else {
                    return resolve(response.data);
                }
            })
            .catch((error) => {
                return reject(error);
            });
    });
    return await apiPromise;
};

// verifyEmailOTP
const VerifyEmailOTP = async (data) => {
    var apiPromise = new Promise((resolve, reject) => {
        axios
            .post(`${Config.API_BASE_URL}/verifyEmailOTP`, data, {
                headers: {
                    key: Config.key,
                },
            })
            .then(async (response) => {
                if (
                    response.data.ResponseCode === 1 ||
                    response.data.ResponseCode === "1"
                ) {
                    return resolve(response.data);
                } else {
                    return resolve(response.data);
                }
            })
            .catch((error) => {
                return reject(error);
            });
    });
    return await apiPromise;
};

// updatePassword
const UpdatePassword = async (data) => {
    var apiPromise = new Promise((resolve, reject) => {
        axios
            .post(`${Config.API_BASE_URL}/updatePassword`, data, {
                headers: {
                    key: Config.key,
                },
            })
            .then(async (response) => {
                if (
                    response.data.ResponseCode === 1 ||
                    response.data.ResponseCode === "1"
                ) {
                    return resolve(response.data);
                } else {
                    return resolve(response.data);
                }
            })
            .catch((error) => {
                return reject(error);
            });
    });
    return await apiPromise;
};

// signUp
const SignUp = async (data) => {
    var apiPromise = new Promise((resolve, reject) => {
        axios
            .post(`${Config.API_BASE_URL}/signUp`, data, {
                headers: {
                    key: Config.key,
                },
            })
            .then(async (response) => {
                if (
                    response.data.ResponseCode === 1 ||
                    response.data.ResponseCode === "1"
                ) {
                    return resolve(response.data);
                } else {
                    return resolve(response.data);
                }
            })
            .catch((error) => {
                return reject(error);
            });
    });
    return await apiPromise;
};
export{Logindata,SendOtp,VerifyOTP,ForgotPasswordset,VerifyEmailOTP,UpdatePassword,SignUp,}