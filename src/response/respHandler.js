import ElementUI from "element-ui";

export default {
    handleResponse: function (response, withMsg) {
        const code = response.data.code;
        const msg = response.data.data;
        if (code === 200) {
            if (withMsg === undefined) {
                ElementUI.Message({
                    message: msg,
                    type: "success",
                });
            } else {
                ElementUI.Message({
                    message: withMsg,
                    type: "success",
                });
            }
        } else {
            ElementUI.Message({
                message: "Code:" + code + "，Message:" + msg,
                type: "error",
            });
        }
    }
    ,
}
;
