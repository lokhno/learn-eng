import axios from "axios";

const categoriesApi = {
    // 'http://localhost:3001/word/60414c9fdeefc965c8df5b6a'
    getAllByUserId: (id) => {
        return axios.get("http://localhost:3001/category/" + id);
    },
    createCategory: ({ title }) => {
        return axios.post("http://localhost:3001/category/", {
            title: title,
            author_id: "60414c9fdeefc965c8df5b6a",
        });
    },
    deleteCategory: (id) => {
        return axios.delete("http://localhost:3001/category/" + id);
    },
};
export default categoriesApi;
