import { userApi } from "../../utils/api";

const actions = {
    setUserData: (data) => ({
        type: "USER:SET_DATA",
        payload: data,
    }),

    fetchUserData: () => (dispatch) => {
        userApi
            .getMe()
            .then(({ data }) => {
                dispatch(actions.setUserData(data));
            })
            .catch((error) => {
                console.log(error);
            });
    },

    logout: () => ({
        type: "USER:LOGOUT",
    }),

    fetchUserLogin: (postData) => (dispatch) => {
        return userApi
            .loginUser(postData)
            .then(({ data }) => {
                const { accessToken } = data;
                if (data.message === "Success") {
                    window.localStorage["token"] = accessToken;
                    dispatch(actions.fetchUserData());
                }

                return data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

export default actions;
