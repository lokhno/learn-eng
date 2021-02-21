const actions = {
    addWord: (item) => ({
        type: "ADD_WORD",
        payload: item,
    }),
    deleteWords: (ids) => ({
        type: "DELETE_WORDS",
        payload: ids,
    }),
    editWord: (item, selectedWords) => ({
        type: "EDIT_WORD",
        payload: { item, selectedWords },
    }),
};

export default actions;
