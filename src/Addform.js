import React from 'react'
import {PropTypes} from 'prop-types'
export const Addform =({resort,date,powder,backcountry,onNewDay})=>{
	
	let _resort,_powder,_date,_backcountry

	const submit=(e)=>{
		e.preventDefault()
		onNewDay({
			resort:_resort.value,
			date:_date.value,
			powder:_powder.checked,
			backcountry:_backcountry.checked
		})
		
		    _resort.value=''
			_date.value=''
			_powder.checked= false
			_backcountry.checked= false
	}

	
		return(
				<form onSubmit={submit} className="add-day-form">
				<label htmlFor="resort">Resort Name</label>
				<input id="resort" type="text" defaultValue={resort} ref={input =>_resort =input} required/>
				<label htmlFor="date">Date</label>
				<input id="date" type="date" defaultValue={date} ref={input =>_date =input}  required/>
				<label htmlFor="powder">Powder</label>
				<input id="powder" type="checkbox" defaultChecked={powder} ref={input =>_powder =input}  />
				<label htmlFor="backcountry">Back Country</label>
				<input id="backcountry" type="checkbox" defaultChecked={backcountry} ref={input =>_backcountry =input}  />
				<button>Add Day</button>
				</form>
			)
	
}

Addform.defaultProps={
	resort:"Palo ALto",
	date:"05-10-2018",
	powder:true,
	backcountry:false
}

Addform.propTypes={
	resort:PropTypes.string,
	date:PropTypes.string,
	powder:PropTypes.bool,
	backcountry:PropTypes.bool
}