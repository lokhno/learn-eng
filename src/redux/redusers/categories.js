const initialState = {
    items: [{ _id: 1, categoryTitle: "Фразовые глаголы", key: "1" }],
    nextId: 2,
    selectedCategories: [],
};



const excludeItems = (state) => {
    return state.items.filter((item) => {
        let suitable = true;
        state.selectedCategories.forEach((forDelete) => {
            if (item._id === forDelete) {
                suitable = false;
            }
        });
        return suitable;
    });
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CATEGORY":
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        _id: state.nextId,
                        key: state.nextId,
                        categoryTitle: action.payload.categoryTitle
                    },
                ],
                nextId: state.nextId + 1,
            };
        case "SET_SELECTED_CATEGORIES":
            return {
                ...state,
                selectedCategories: action.payload.selectedCategories,
            };
        case "DELETE_CATEGORIES":
            return {
                ...state,
                items: excludeItems(state),
                selectedCategories: [],
            };
        case "EDIT_CATEGORY":
            return {
                ...state,
                items: [
                    ...excludeItems(state),
                    {
                        _id: state.nextId,
                        key: state.nextId,
                        categoryTitle: action.payload.categoryTitle,
                    },
                ],

            };
        default:
            return state;
    }
};
