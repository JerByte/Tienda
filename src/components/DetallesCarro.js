import { Component } from "react";
import styles from './styles.css'



class DetallesCarro extends Component {
    render() {
        const { carro, eliminarDelCarro } = this.props;
        console.log(carro)
        return(
            <div style={styles} className="detallesCarro">
                <ul style={styles} className="ulCarro">
                    {carro.map(x => 
                        <li style={styles} className="productoCarro" key={x.name}>
                            <img alt={x.name} src={x.img} width="50" height="32"/>
                            {x.name} <span>{x.cantidad}</span>
                            <button onClick={() => eliminarDelCarro(x)}key={x.name} style={styles} className="borrarC" >
                                Borrar elemento del carro
                            </button>
                        </li>
                        )}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro