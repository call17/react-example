import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

export class Member extends Component {

    componentWillMount(){
        this.style ={
        	backgroundColor: "grey"
		}

    }
render() {

	const { name, picture, email, admin, makeAdmin } = this.props
    return (
        <div className="member" style={this.style}>
        	<h1>{name.title} {name.first} {name.last} {(admin) ? <FaShield /> : null}</h1>
        	<a onClick={makeAdmin}>Make Admin</a>
        	<img src={picture.thumbnail} alt="profile picture" />
        	<p><a href={`mailto:${email}`}>{email}</a></p>

        </div>
    )
}
}
