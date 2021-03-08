import axios from "axios";

axios.defaults.headers.common["token"] = window.localStorage.token;

const categoriesApi = {
    getAllByUserId: (id) => {
        return axios.get("http://localhost:3001/category/" + id);
    },
    createCategory: ({ title }, userId) => {
        return axios.post("http://localhost:3001/category/", {
            title: title,
            author_id: userId,
        });
    },
    deleteCategory: (id) => {
        return axios.delete("http://localhost:3001/category/" + id);
    },
    editCagegory: (item) => {
        return axios.post("http://localhost:3001/category/update/" + item._id, {
            ...item,
        });
    },
};
export default categoriesApi;
