import React from 'react'

class Latihan2 extends React.Component{
    state = {angka : 0, total : 0}


    handlePerkalian = () => {
        this.setState({total : this.refs.nilai.value * this.state.angka})
    }

    handleButtonPlus = () => {
        this.setState({angka : this.state.angka + 1, total : this.refs.nilai.value * (this.state.angka+1)})
    }

    handleButtonMin = () => {
        if(this.state.angka > 0){
            this.setState({angka : this.state.angka - 1, total : this.refs.nilai.value * (this.state.angka-1)})
        }
        
    }

    

    
    render(){
        return(
            <div>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className='row justify-content-center'>
                            <div className='col-2'>
                                <input type='button' value='-' onClick={this.handleButtonMin}/>
                            </div>
                            <div className='col-2'>
                                <h1>{this.state.angka}</h1>
                            </div>
                            <div className='col-2'>
                                <input type='button' value='+' onClick={this.handleButtonPlus}/>
                            </div>
                        </div>
                    </div>
                    <input type='number' placeholder='Masukan Harga' onChange={this.handlePerkalian} ref='nilai' />
                    <h1>Rp. {this.state.total}</h1>
                </div>
            </div>
        )
    }
}

export default Latihan2