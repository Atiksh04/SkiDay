import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css'
import {MdTerrain} from 'react-icons/md';
import {TiWeatherSnow} from 'react-icons/ti';
import {FaCalendar} from 'react-icons/fa';
const percentToDecimal=(decimal)=>{
	return (decimal*100 +'%');
}
const progress=(total,powder)=>{
	return percentToDecimal(powder/total);
}


export class Skiday extends React.Component{
	render(){
		return(
			<div className="wrapper App">
				<div className='total-days '>
				<span>{this.props.total}</span>
				<FaCalendar/>
				<span>Days</span>
				</div>

				<div className='powder-days left'>
				<span>{this.props.powder}</span>
				<TiWeatherSnow/>
				<span>Days</span>
				</div>

				<div className='back-country right'>
				<span>{this.props.back_country}</span>
				<MdTerrain/>
				<span>Days</span>
				</div>

				<div className='goal'>
				<span>{progress(this.props.total,this.props.powder)}</span>
				</div>

			</div>

			)
	}	
}


