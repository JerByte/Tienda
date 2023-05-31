import { Component } from 'react'
import Productos from './components/productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img:'/productos/tomate.jpg'},
      { name: 'Arbejas', price: 2500, img:'/productos/arbejas.jpg'},
      { name: 'Lechuga', price: 500, img:'/productos/lechuga.jpg'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ?({
          ...x, 
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({ carro: newCarro })
    }
    return this.setState({  //este return tiene la funcion de cortar la ejecucion luego de la funcion para que no siga con lineas de abajo
      carro: this.state.carro.concat({ //concat tiene la funcion de concatenar xd
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  eliminarDelCarro = (producto) => {
    const { carro } = this.state
    const updatedCarro = carro.filter((x) => x.name !== producto.name)
    this.setState({ carro: updatedCarro })
  }

  render()  {
    const { esCarroVisible} = this.state
    return (
      <div>
        <Navbar
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
          carro={this.state.carro}
          eliminarDelCarro={this.eliminarDelCarro}
         />
        <Layout>
          <Title/>
        <Productos
          agregarAlCarro={this.agregarAlCarro}
          productos={this.state.productos}
        />
        </Layout>
      </div>
    )
  }
}



export default App;
