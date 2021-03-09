import axios from "axios";

axios.defaults.headers.common["token"] = window.localStorage.token;

const wordsApi = {

    getAllByUserId: (id) => {
        return axios.get("/word/" + id);
    },
    createWord: (item, userId) => {
        const attributes = Object.keys(item);
        const data = {};
        attributes.forEach((attr) => {
            data[attr] = item[attr];
        });
        return axios.post("/word/", {
            ...data,
            author_id: userId,
        });
    },
    deleteWord: (id) => {
        return axios.delete("/word/" + id);
    },
    editWord: (item) => {
        return axios.post("/word/update/" + item._id, {
            ...item,
        });
    },
    getWordById: (id) => {
        return axios.get("/word/index/" + id);
    },
};
export default wordsApi;
