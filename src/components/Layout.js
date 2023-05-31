import { Component } from 'react'
import styles from './styles.css'


class Layout extends Component {
    render() {
        return( //se aplican dos divs para poder configurar uno para el centrado y otro para el ancho, con el fin de que el contenido fuera se siga manteniendo del lado izquierdo
            <div style={styles} className="layout"> 
                <div style={styles} className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout