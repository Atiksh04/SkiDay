import React from 'react'
import {FaShieldAlt} from 'react-icons/fa';


export class Member extends React.Component{


	render(){
		return(
			<div className="Member" >
			
			<h1>{this.props.name} {(this.props.admin) ? <FaShieldAlt/> :null }</h1>
			
			
			<img src={this.props.thumbnail}/>
			<h2>{this.props.email}</h2>
			</div>
			)
	}

}