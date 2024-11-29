const Detalle = ({ nombre, precio, descripcion, foto }) => {
    return (
        <tr>
            <td>{nombre}</td>
            <td>${precio}</td>
            <td>{descripcion}</td>
            <td><img src={foto} /></td>
        </tr>
    );
};

export default Detalle;