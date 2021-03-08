const initialState = {
    data: null,
    isAuth: !!window.localStorage.token,
    token: window.localStorage.token,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: action.payload,
                isAuth: true,
                token: window.localStorage.token,
            };

        default:
            return state;
    }
};
