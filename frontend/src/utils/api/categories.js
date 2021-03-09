import axios from "axios";

axios.defaults.headers.common["token"] = window.localStorage.token;

const categoriesApi = {
    getAllByUserId: (id) => {
        return axios.get("/category/" + id);
    },
    createCategory: ({ title }, userId) => {
        return axios.post("/category/", {
            title: title,
            author_id: userId,
        });
    },
    deleteCategory: (id) => {
        return axios.delete("/category/" + id);
    },
    editCagegory: (item) => {
        return axios.post("/category/update/" + item._id, {
            ...item,
        });
    },
};
export default categoriesApi;
