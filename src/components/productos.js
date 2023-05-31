import { Component } from "react";
import Producto from './producto'
import styles from './styles.css'

// const styles = {
//     productos: {
//         display: 'flex', 
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     }
// }

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props
        return (
            <div styles={styles} className="productos">
                {productos.map(producto => 
                    <Producto 
                    agregarAlCarro={agregarAlCarro}
                    key={producto.name}
                    producto={producto}
                    />)}
            </div>
        )
    }
}

export default Productos