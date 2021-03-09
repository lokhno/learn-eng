import axios from "axios";

axios.defaults.headers.common["token"] = window.localStorage.token;

const userApi = {

    createUser: (data) => {
        return axios.post("/users/", {
            user_name: data.user_name,
            email: data.email,
            password: data.password,
        });
    },
    loginUser: (data) =>
        axios.post("/users/login/", {
            email: data.email,
            password: data.password,
        }),
    getUser: (id) => {
        return axios.get("/users/" + id);
    },
    getMe: () => {
        return axios.get("/users/me");
    },
};
export default userApi;
