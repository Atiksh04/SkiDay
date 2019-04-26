import React from 'react'
import fetch from 'isomorphic-fetch'
import {Member} from './menber.jsx'

export class MemberList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            loading:false
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch('https://api.randomuser.me/?nat=US&results=12')
            .then(response => response.json())
            .then(json => json.results)
            .then(members => this.setState({
                members,
                loading:false
            }))
    }

    render() {
        return (
            <div className="member-list">
            	<h1>Society Members</h1>
                {(this.state.loading)? <span>loading ... </span> :
                    <span>Members are:{this.state.members.length}</span>}

                {(this.state.members.length) ? 
                    this.state.members.map((member,i)=>
                    <Member key={i} name={member.name.first + ' '+ member.name.last }
                    email={member.email}
                    thumbnail={member.picture.thumbnail}/>
                ) :
                <span>Currently 0 members</span>
                    
                }
                </div>
        )    
   }     
}

