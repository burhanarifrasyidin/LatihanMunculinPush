import React from 'react'
import { fnUbahTodo } from '../1.actions'
import { connect } from 'react-redux'

class TugasWeekend extends React.Component{
    state = {list : []}

    // componentDidUpdate(){
    //     this.props.fnUbahTodo(this.state.list.length)
    // }

    btnAdd = () =>{
        var ambil = this.refs.nilaiIsi.value

        if(ambil !== ''){
            this.setState({})
            this.state.list.push(ambil)
            this.refs.nilaiIsi.value = ''
            this.fnHitungTodo()
            this.renderList()
        } else{
            alert('Inputan anda kosong, silahkan diinput kembali')
        }
    }

    btnDelete = () => {
        if(window.confirm('Are you sure to delete all the items?')){
            this.setState({list : []})
            this.props.fnUbahTodo(0)
        }
    }

    fnHitungTodo = () => {
        this.props.fnUbahTodo(this.state.list.length)
    }

    renderList = () =>{
        var tampil = this.state.list.map((item, index) =>{
            return(
                <tr style={{borderTop:'1px solid rgb(232, 236, 241)'}}>
                    <td><b>{index+1}</b></td>
                    <td>{item}</td>
                </tr>
            )
        })
        return tampil
    }
    render(){
        return(
            <div className='row justify-content-center' style={{margin:'15px'}}>
                <div className='col-lg'>
                    <input type='text' placeholder='What will you do?' ref='nilaiIsi' style={{width:'300px', margin:'15px'}}/>
                    <input type='button' value='Add' onClick={this.btnAdd}/>
                </div>
                <div className='col-lg' style={{width:'300px', margin:'15px'}}>
                    <table style={{width:'80%'}}>{this.renderList()}</table>
                    <input type='button' value='Delete All' onClick={this.btnDelete} style={{marginTop:'20px'}}/>
                </div>
            </div>
        )
    }
}

export default connect(null, {fnUbahTodo})(TugasWeekend)