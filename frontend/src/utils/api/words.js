import axios from "axios";

const wordsApi = {
    // 'http://localhost:3001/word/60414c9fdeefc965c8df5b6a'
    getAllByUserId: (id) => {
        return axios.get("http://localhost:3001/word/" + id);
    },
};
export default wordsApi;
