import {SkidayRow} from './SkidayRow.js'
import React, { Component } from 'react';
import './App.css'
import PropTypes from "prop-types";
import {Link} from "react-router-dom"


export const Powder=({days,filter})=>{
console.log(filter);
	const filterDays=(!filter || !filter.match("powder"||"backcountry"))?
					days:days.filter(day=>day[filter])
					console.log(filterDays);

					return(
		<div className="ski-day-list">
			<table>
				<thead>
					<tr>
					<th>Date</th>
					<th>Resort</th>
					<th>powder</th>
					<th>backcountry</th>
					</tr>
					<tr>
						<td colSpan={4}>
							<Link to="/listday">All Days</Link>
							<Link to="/listday/powder">Powder Days</Link>
							<Link to="/backcountry">Back Country Days</Link>
						</td>
					</tr>
				</thead>
				<tbody>
					{filterDays.map((day,i)=>
  						<SkidayRow key={i} 
  									resort={day.resort}
  									date={day.date}
  									powder={day.powder}
  									backcountry={day.backcountry} />
						)}
				</tbody>
			</table>
			</div>
		)

}