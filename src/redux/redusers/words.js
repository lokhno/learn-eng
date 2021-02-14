const initialState = {
    items: [
        { _id: 1, engWord: "age", rusWord: "возраст", key: 1 },
        { _id: 2, engWord: "figure out", rusWord: "понимать", key: 2 },
    ],
    nextId: 3,
    selectedWords: []
};

export default (state = initialState, action) => {
    console.log(state)
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
        default:
            return state;
    }
};
