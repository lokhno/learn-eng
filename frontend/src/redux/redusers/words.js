const initialState = {
    items: [
        { _id: 1, engWord: "age", rusWord: "возраст", key: 1, category: 1 },
        { _id: 2, engWord: "figure out", rusWord: "понимать", key: 2, category: 1 },
    ],
    nextId: 3,
};

const excludeItems = (state, selectedWords) => {
    return state.items.filter((item) => {
        let suitable = true;
        selectedWords.forEach((forDelete) => {
            if (item._id === forDelete) {
                suitable = false;
            }
        });
        return suitable;
    });
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_WORD":
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        _id: state.nextId,
                        key: state.nextId,
                        category: action.payload.category,
                        engWord: action.payload.engWord,
                        rusWord: action.payload.rusWord,
                    },
                ],
                nextId: state.nextId + 1,
            };
        case "DELETE_WORDS":
            return {
                ...state,
                items: excludeItems(state, action.payload),
            };
        case "EDIT_WORD":
            return {
                ...state,
                items: [
                    ...excludeItems(state, action.payload.selectedWords),
                    {
                        _id: action.payload.selectedWords[0],
                        key: action.payload.selectedWords[0],
                        engWord: action.payload.item.engWord,
                        rusWord: action.payload.item.rusWord,
                    },
                ],
            };
        default:
            return state;
    }
};
