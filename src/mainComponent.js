import React from 'react';
import {SkidayList} from './SkidayLIst.js';
import {Skiday} from './component1.js';
import {Addform} from './Addform.js'
import{Menu} from './menu.js'
import {NotFound} from './notComponent.js'

export class MainComponent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			 allskiday:[
            {
              resort:'Palo Alto',
              date:'2019-02-02',
              powder:true,
              backcountry:true
            }
        ]
		}
		this.addDay=this.addDay.bind(this)
	}
	addDay(newDay){
		this.setState({
			allskiday:[
				...this.state.allskiday,
				newDay
			]
		})
	}

	render(){
		return(
			<div className="app">
				<Menu/>
			{(this.props.location.pathname==="/") ? (<Skiday total={50} powder={30} backcountry={20}/>):
			 ((this.props.location.pathname === "/add-day")? (<Addform onNewDay={this.addDay}/>) :
			 	(this.props.location.pathname === "/listday/powder") ?
			 	(<SkidayList days={this.state.allskiday} filter="powder"/>) :
			 	(this.props.location.pathname === "/listday/backcountry") ?
			 	(<SkidayList days={this.state.allskiday} filter="backcountry"/>) :
			 	(this.props.location.pathname === "/listday") ?
			 	(<SkidayList days={this.state.allskiday} filter=""/>) :
			 	(<NotFound/>)
			 	) }
			 		
			 </div>
			  	
			  
			  )
	}


}