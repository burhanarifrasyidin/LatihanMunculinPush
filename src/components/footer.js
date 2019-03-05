// Class Components
// Props // Properties => transfer data dari parent ke child
import React from 'react'

class Footer extends React.Component{
    state = {number : 1}
    handleState = () => {
        this.setState({number : this.state.number+1})
    }
    render(){
        return(
            <div style={{position:'fixed', left:'0px', bottom:'0px', height:'100px', backgroundColor:'black', width:'100%'}}>
                
            </div>


            // <div>
            //     <h1 style={{color:this.props.warna}}>Ini Footer {this.props.nama}</h1>
            //     <h2>{this.state.number}</h2>
            //     <h2>{this.props.children}</h2>
            //     <input type='button' value='Ubah angka' onClick={this.handleState}/>
            // </div>
        )
    }
}

export default Footer