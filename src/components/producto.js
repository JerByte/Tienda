import { Component } from "react";
import Button from './button'


const style = {
    img: {
        width: '100%',
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props
        return(
            <div className="producto">
                <img style={style.img} alt={producto.name} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto