import { userApi } from "../../utils/api";

const actions = {
    setUserData: (data) => ({
        type: "USER:SET_DATA",
        payload: data,
    }),

    fetchUserData: () => (dispatch) => {
        userApi.getMe().then(({ data }) => {
            dispatch(actions.setUserData(data));
        });
    },

    fetchUserLogin: (postData) => (dispatch) => {
        return userApi
            .loginUser(postData)
            .then(({ data }) => {
                const { accessToken } = data;

                // window.axios.defaults.headers.common["token"] = token;
                window.localStorage["token"] = accessToken;
                dispatch(actions.fetchUserData());

                return data;
            })
            .catch((error) => {
                console.log(error)
            });
    },
};

export default actions;
