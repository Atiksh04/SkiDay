import {MdTerrain} from 'react-icons/md';
import {TiWeatherSnow} from 'react-icons/ti';
import {FaCalendar} from 'react-icons/fa';
import React, { Component } from 'react';
import './App.css'


export const SkidayRow =({resort,date,powder,backcountry})=>{

		return(
			<tr>
				<td>
					{date}
				</td>
				<td>
					{resort}
				</td>
				<td>
					{(powder)? <TiWeatherSnow/>:null}
				</td>
				<td>
					{(backcountry) ? <MdTerrain/>:null}
				</td>
			</tr>)
}