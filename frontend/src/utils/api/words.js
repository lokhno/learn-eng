import axios from "axios";

axios.defaults.headers.common["token"] = window.localStorage.token;

const wordsApi = {

    getAllByUserId: (id) => {
        return axios.get("http://localhost:3001/word/" + id);
    },
    createWord: (item, userId) => {
        const attributes = Object.keys(item);
        const data = {};
        attributes.forEach((attr) => {
            data[attr] = item[attr];
        });
        return axios.post("http://localhost:3001/word/", {
            ...data,
            author_id: userId,
        });
    },
    deleteWord: (id) => {
        return axios.delete("http://localhost:3001/word/" + id);
    },
    editWord: (item) => {
        return axios.post("http://localhost:3001/word/update/" + item._id, {
            ...item,
        });
    },
    getWordById: (id) => {
        return axios.get("http://localhost:3001/word/index/" + id);
    },
};
export default wordsApi;
