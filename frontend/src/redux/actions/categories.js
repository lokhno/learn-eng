const actions = {
    addCategory: (item) => ({
        type: "ADD_CATEGORY",
        payload: item,
    }),
    deleteCategories: (ids) => ({
        type: "DELETE_CATEGORIES",
        payload: ids,
    }),
    editCategory: (item, selectedCategories) => {
        return {
            type: "EDIT_CATEGORY",
            payload: { item, selectedCategories },
        };
    },
};

export default actions;
