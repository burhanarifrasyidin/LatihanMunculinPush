import React from 'react'
import { fnUbahUser } from '../1.actions'
import { connect } from 'react-redux'
// import './../support/CSS/cssform.css'

class Form extends React.Component{
    state = {nama : ''}
    handleButton = () => {
        var userName = this.refs.username.value
        // this.setState({nama : userName})
        this.props.fnUbahUser(userName)
    }
    render(){
        return(
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref='username'/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <input type="button" className="btn btn-primary" onClick={this.handleButton} value='Submit'/>
                        </form>
                    </div>
                    {/* <div className='col-lg'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Your Message</label><br/>
                                <textarea className='form-control rounded-0' id='exampleFormControlTextarea1' rows={10}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.props.fn}>Submit</button>
                        </form>
                        {this.state.nama}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default connect(null, {fnUbahUser})(Form)