const actions = {
    addWord: (item) => ({
        type: "ADD_WORD",
        payload: item,
    }),
    setSelectedWords: (items) => ({
        type: "SET_SELECTED_WORDS",
        payload: items,
    }),
    deleteWords: () => ({
        type: "DELETE_WORDS"
    }),
    editWord: (item) => ({
        type: "EDIT_WORD",
        payload: item,
    }),
};

export default actions;
