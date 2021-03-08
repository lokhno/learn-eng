import { categoriesApi } from "../../utils/api";

const actions = {
    setCategories: (items) => ({
        type: "SET_CATEGORIES",
        payload: items,
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
    setIsLoading: (bool) => ({
        type: "SET_IS_LOADING",
        payload: bool,
    }),
    fetchAddCategories: (item, userId) => (dispatch) => {
        categoriesApi.createCategory(item, userId).then(({ data }) => {
            dispatch(actions.addCategory(data));
        });
    },
    fetchDeleteCategory: (ids) => (dispatch) => {
        ids.forEach((id) => {
            categoriesApi.deleteCategory(id).then(() => {
                dispatch(actions.deleteCategories([id]));
            });
        });
    },
    fetchEditCategory: (item, selectedCategories) => (dispatch) => {
        categoriesApi.editCagegory(item).then(() => {
            dispatch(actions.editCategory(item, selectedCategories));
        });
    },
    fetchCategories: (userId) => (dispatch) => {
        dispatch(actions.setIsLoading(true));
        categoriesApi
            .getAllByUserId(userId)
            .then(({ data }) => {
                dispatch(actions.setCategories(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
            });
    },

    addCategory: (item) => ({
        type: "ADD_CATEGORY",
        payload: item,
    }),
};

export default actions;
