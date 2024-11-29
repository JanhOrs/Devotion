import axios from "axios";

const END_POINT_PRODUCTOS = "http://localhost:3001/api/producto/"

export const getProductos = async () => {

    try {
        const response = await axios.get(END_POINT_PRODUCTOS)
        return (response)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}