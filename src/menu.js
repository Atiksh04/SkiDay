import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome,FaCalendarPlus,FaTable} from 'react-icons/fa'


export class Menu extends React.Component{
	render(){
		return(
			<nav className="menu">
			<Link to="/" activeClassName="selected">
			<FaHome/>
			</Link>

			<Link to="/add-day" activeClassName="selected">
			<FaCalendarPlus/>
			</Link>

			<Link to="/listday" activeClassName="selected">
			<FaTable/>
			</Link>
			</nav>
			)
	}
}