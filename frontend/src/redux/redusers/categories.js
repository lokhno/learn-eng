const initialState = {
    items: [{ _id: 1, categoryTitle: "Фразовые глаголы", key: 1 }],
    nextId: 2,
};

const excludeItems = (state, selectedCategories) => {
    return state.items.filter((item) => {
        let suitable = true;
        selectedCategories.forEach((forDelete) => {
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
                        categoryTitle: action.payload.categoryTitle,
                    },
                ],
                nextId: state.nextId + 1,
            };
        case "DELETE_CATEGORIES":
            return {
                ...state,
                items: excludeItems(state, action.payload),
            };
        case "EDIT_CATEGORY":
            return {
                ...state,
                items: [
                    ...excludeItems(state, action.payload.selectedCategories),
                    {
                        _id: action.payload.selectedCategories[0],
                        key: action.payload.selectedCategories[0],
                        categoryTitle: action.payload.item.categoryTitle,
                    },
                ],
            };
        default:
            return state;
    }
};
