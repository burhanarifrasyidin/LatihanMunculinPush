import React from 'react'
import Axios from 'axios'

class Product extends React.Component{
    state = {user : 'Orang Asing', listProduct : []}

    componentDidMount(){
        this.getProduct()
    }
    componentDidMount(){
        // Triggered setelah render selesai
        Axios.get('http://localhost:2000/product')
        .then((res) => this.setState({listProduct : res.data}))
        .catch((err) => console.log(err))
    }

    renderProduct = () => {
        var jsx = this.state.listProduct.map((val) => {
            return(
                <tr>
                    <td>{val.nama}</td>
                    <td>{val.harga}</td>
                </tr>
            )
        })
        return jsx
    }
    // componentWillMount(){
    //     // Triggered before render
    //     console.log('Ini will mount ' + this.state.user)
    // }
    // componentWillUpdate(){
    //     // setelah ada setState / perubahan dan sebelum render
    //     console.log('Ini will update ' + this.state.user)
    // }
    // componentDidUpdate(){
    //     // setelah ada setState / perubahan dan setelah render
    //     console.log('Ini did update ' + this.state.user)
    // }
    
    fn =() => {
        console.log('render')
    }

    // fnSetState = () => {
    //     this.setState({user: 'joni'})
    // } 

    render(){
        return(
            <div>
                <h1>Product</h1>
                <input type='button' value='setState' onClick={this.renderProduct} />
                <table>{this.renderProduct()}</table>
            </div>
        )
    }
}

export default Product