const initialState = {
    items: [
        { _id: 1, engWord: "age", rusWord: "возраст", key: 1 },
        { _id: 2, engWord: "figure out", rusWord: "понимать", key: 2 },
    ],
    nextId: 3,
    selectedWords: [],
};

const excludeItems = (state) => {
    return state.items.filter((item) => {
        let suitable = true;
        state.selectedWords.forEach((forDelete) => {
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
                        engWord: action.payload.engWord,
                        rusWord: action.payload.rusWord,
                    },
                ],
                nextId: state.nextId + 1,
            };
        case "SET_SELECTED_WORDS":
            return {
                ...state,
                selectedWords: action.payload.selectedWords,
            };
        case "DELETE_WORDS":
            return {
                ...state,
                items: excludeItems(state),
                selectedWords: [],
            };
        case "EDIT_WORD":
            return {
                ...state,
                items: [
                    ...excludeItems(state),
                    {
                        _id: state.nextId,
                        key: state.nextId,
                        engWord: action.payload.engWord,
                        rusWord: action.payload.rusWord,
                    },
                ],
            };
        default:
            return state;
    }
};
