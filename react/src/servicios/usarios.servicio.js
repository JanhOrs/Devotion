import axios from "axios";

const END_POINT_LOGIN = "http://localhost:3001/api/usuario/login/"
const END_POINT_USER = " http://localhost:3001/api/usuario/"

export const loginUser = async (data) => {

    try {
        const response = await axios.post(END_POINT_LOGIN, data)
        return (response)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}


export const setuser = async (data) => {

    try {
        const response = await axios.post(END_POINT_USER, data)
        return (response)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}