import React from 'react'

class Latihan3 extends React.Component {
    state = {kataFilter : ''}

    hapusVocal = () => {
        var kata = this.refs.kata.value
        this.setState({kataFilter: kata.replace(/[aiueo]/gi, '')})
    }
    render(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Enter Words</label><br/>
                        <textarea className='form-control' rows={10} ref='kata' onChange={this.hapusVocal}/>
                    </div>
                </form>
                {this.state.kataFilter}
            </div>
        )
    }
}

export default Latihan3