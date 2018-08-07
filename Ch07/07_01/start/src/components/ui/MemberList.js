import { Component } from 'react'
import { Member } from './Member'
import fetch from 'isomorphic-fetch'

export class MemberList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            loading: false
        }
    }
    componentDidMount(){
        this.setState({loading: true})
        fetch("https://api.randomuser.me/?results=12")
            .then( response => response.json())
            .then( json => json.results)
            .then( members => this.setState({
                members: members,
                loading: false
            }))

    }

    render() {
        const {members, loading} = this.state
        return (
            <div className="member-list">
                <h1>Society Members</h1>
                {loading ?
                    <span>Data is Loading</span> :
                    <span>{members.length}</span>
                }
                {
                    (members.length) ?
                        members.map(
                        (data, i) =>
                        <Member key={i} onClick={email => console.log(email)}
                                {...data}
                        />) :
                        <span>Currently 0 Members </span>
                }
            </div>
        )    
   }     
}