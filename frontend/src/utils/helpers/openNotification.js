import { notification } from "antd";

function openNotification(type, title, description) {
    return notification[type]({
        message: title,
        description: description,
    });
}

export default openNotification;
