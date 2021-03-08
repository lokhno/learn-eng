import axios from "axios";

const wordsApi = {
    // 'http://localhost:3001/word/60414c9fdeefc965c8df5b6a'
    getAllByUserId: (id) => {
        return axios.get("http://localhost:3001/word/" + id);
    },
    createWord: (item) => {
        const attributes = Object.keys(item);
        const data = {};
        attributes.forEach((attr) => {
            data[attr] = item[attr];
        });
        return axios.post("http://localhost:3001/word/", {
            ...data,
            author_id: "60414c9fdeefc965c8df5b6a",
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
