import axios from 'axios'

function getName(event) {
    return {
        type: "GET_NAME",
        payload: event.target.value
    }
}

function getEmail(event) {
    return {
        type: "GET_EMAIL",
        payload: event.target.value
    }
}

function getMobile(event) {
    return {
        type: "GET_MOBILE",
        payload: event.target.value
    }
}

function signIn(user) {
    
    let request = axios({
        method: "post",
        url: "http://localhost:3010/user",

        data: user
    })
    return (dispatch) => {

        request.then((res) => {
            // console.log(res)
            dispatch({
                type: "SIGN_IN",
                payload: res.data.data
            })

        })
            .catch((err, res) => {
                console.log("err", err)
            })


    }
    // console.log(user)

}
export { getName, getEmail, getMobile, signIn }