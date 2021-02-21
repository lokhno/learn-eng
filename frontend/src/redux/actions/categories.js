const actions = {
    addCategory: (item) => ({
        type: "ADD_CATEGORY",
        payload: item,
    }),
    setSelectedCategories: (items) => ({
        type: "SET_SELECTED_CATEGORIES",
        payload: items,
    }),
    deleteCategories: () => ({
        type: "DELETE_CATEGORIES",
    }),
    editCategory: (item) => ({
        type: "EDIT_CATEGORY",
        payload: item,
    }),
};

export default actions;
