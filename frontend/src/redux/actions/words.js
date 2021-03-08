import { wordsApi } from "../../utils/api";

const actions = {
    addWord: (item) => ({
        type: "ADD_WORD",
        payload: item,
    }),
    setWords: (items) => ({
        type: "SET_WORDS",
        payload: items,
    }),
    deleteWords: (ids) => ({
        type: "DELETE_WORDS",
        payload: ids,
    }),
    editWord: (item, selectedWords) => {
        return {
            type: "EDIT_WORD",
            payload: { item, selectedWords },
        };
    },

    setIsLoading: (bool) => ({
        type: "SET_IS_LOADING",
        payload: bool,
    }),

    fetchWords: (userId) => (dispatch) => {
        dispatch(actions.setIsLoading(true));
        wordsApi
            .getAllByUserId(userId)
            .then(({ data }) => {
                dispatch(actions.setWords(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
            });
    },
    fetchAddWord: (item, userId) => (dispatch) => {
        wordsApi.createWord(item, userId).then(({ data }) => {
            wordsApi.getWordById(data._id).then(({ data }) => {
                dispatch(actions.addWord(data));
            });
        });
    },
    fetchDeleteWord: (ids) => (dispatch) => {
        ids.forEach((id) => {
            wordsApi.deleteWord(id).then(() => {
                dispatch(actions.deleteWords([id]));
            });
        });
    },
    fetchEditWord: (item, selectedWords) => (dispatch) => {
        wordsApi.editWord(item).then(({ data }) => {
            wordsApi.getWordById(data._id).then(({ data }) => {
                dispatch(actions.editWord(data, selectedWords));
            });
        });
    },
};

export default actions;
