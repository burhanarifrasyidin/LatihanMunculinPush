import React from 'react'
import { connect } from 'react-redux'

class Homepage extends React.Component{
    render(){
        var {username, email} = this.props.nama
        return(
            <div style={{textAlign:'center'}}>
                <h1>Selamat Datang Di Website {username}</h1>
                <h2>{email}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {nama : state.user}
}

export default connect(mapStateToProps)(Homepage);