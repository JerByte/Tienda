import { Component } from "react";
import styles from './styles.css'
import Logo from './Logo'
import Carro from './Carro'

class Navbar extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro, eliminarDelCarro } = this.props
        return (
            <nav style={styles} className="navbar">
                <Logo />
                <Carro 
                carro={carro}
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}
                eliminarDelCarro={eliminarDelCarro}
                />
            </nav>
        )
    }
}

export default Navbar