const initialState = {
    items: [{ _id: 1, CategoryTitle: "Фразовые глаголы", key: "1" }],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CATEGORY":
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        default:
            return state;
    }
};
