import { Component } from "react";
import styles from './styles.css'


class Button extends Component {
    render () {
        return(
            <button style={styles.button} { ...this.props } /> //pasamos todas las propiedades de button
        )
    }
}

export default Button