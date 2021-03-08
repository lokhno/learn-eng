import axios from "axios";

axios.defaults.headers.common["token"] = window.localStorage.token;

const userApi = {

    createUser: (data) => {
        return axios.post("http://localhost:3001/users/", {
            user_name: data.user_name,
            email: data.email,
            password: data.password,
        });
    },
    loginUser: (data) =>
        axios.post("http://localhost:3001/users/login/", {
            email: data.email,
            password: data.password,
        }),
    getUser: (id) => {
        return axios.get("http://localhost:3001/users/" + id);
    },
    getMe: () => {
        return axios.get("http://localhost:3001/users/me");
    },
};
export default userApi;
