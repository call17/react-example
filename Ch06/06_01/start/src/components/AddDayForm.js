import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {

	constructor(props){
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e){
		e.preventDefault()
		console.log("resort", this.refs.resort.value)
        console.log("date", this.refs.date.value)
        console.log("powder", this.refs.powder.checked)
        console.log("backcountry", this.refs.backcountry.checked)
	}

	render() {
		const { resort, date, powder, backcountry } = this.props
		return(
            <form className="add-day-form" onSubmit={this.submit}>
				<label htmlFor="resort">Resort name</label>
				<input id="resort"
					   type="text"
					   required
					   defaultValue={resort}
					   ref="resort"
				/>

                <label htmlFor="date">date</label>
                <input id="date"
					   type="date"
					   required
                       defaultValue={date}
                       ref="date"
				/>

				<div>
                <input id="powder"
					   type="checkbox"
                       defaultChecked={powder}
                       ref="powder"
				/>
                <label htmlFor="powder">Powder day</label>
				</div>
                <div>
                <input id="backcountry"
					   type="checkbox"
                       defaultChecked={backcountry}
                       ref="backcountry"
				/>
					<label htmlFor="backcountry">Backcountry date</label>
				</div>
				<button>
					Add Button
				</button>
			</form>
		)
	}
}

AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}