import React from 'react'
import { fnUbahJumlah } from '../1.actions'
import { connect } from 'react-redux'

class Latihan extends React.Component{

    fnHitungHuruf = () => {
        var ambilKata = this.refs.kata.value
        var splited = ambilKata.split(' ')
        var panjang = splited.length
        if(panjang == 1 && ambilKata == ''){
            this.props.fnUbahJumlah(0)
        } else{
            this.props.fnUbahJumlah(panjang)
        }
    }

    render(){
        return(
            <div style={{width: '50%', margin:'auto', marginTop:'50px'}}>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Enter Words</label><br/>
                        <textarea className='form-control rounded-0' id='exampleFormControlTextarea1' rows={10} col={5} ref='kata' onChange={this.fnHitungHuruf}/>
                    </div>
                </form>
                <h1>{this.props.jumlahHuruf} Kata</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {jumlahHuruf : state.kata.jumlahKata
        }
}

export default connect(mapStateToProps, {fnUbahJumlah})(Latihan)