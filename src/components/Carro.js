import { Component } from "react";
import styles from './styles.css'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'


class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro, eliminarDelCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0) //acc = acumular, el = element, reduce = agrupar o sumar todos partiendo desde cero
        return( //si cantidad es mayor a 0 ejecutamos BubbleAlert si no, no
            <div>
                <span style={styles}>
                    {cantidad !== 0
                    ? <BubbleAlert value={cantidad} />
                    : null} 
                </span>
                <button onClick={mostrarCarro} style={styles} className="carro"> 
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro mostrarCarro={mostrarCarro} eliminarDelCarro={eliminarDelCarro} carro={carro}/> : null}
            </div>
        )
    }
}

export default Carro