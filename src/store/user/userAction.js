import { setUser, setToken } from "./userActionCreator";

export const  logInUser = (dispatch) => {
    fetch('http://159.65.126.180/api/auth/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body:JSON.stringify({email: 'test1@test.com', password: 'asdasdasd'})
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('')
                }
            })
            .then(data => {
                /* console.log(data) */
                /* dispatch(setUser(data.user)) */
                /* dispatch(setToken(data.token)) */
            })
} 