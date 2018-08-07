import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

export class Member extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="member">
                <h1>{this.props.name} {this.props.admin ? <FaShield/> :  null}</h1>
                <a onClick={this.props.makeAdmin}>Make ADMIN</a>
                <img src={this.props.thumbnail} alt="profile picture"/>
                <p><a href={"mailto:" + this.props.email}>{this.props.email}</a></p>
            </div>
        )
    }
    }

export default Member