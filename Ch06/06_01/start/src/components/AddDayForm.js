import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
	render() {

		const { resort, date, powder, backcountry } = this.props
		return(
            <form className="add-day-form">
				<label htmlFor="resort">Resort name</label>
				<input id="resort"
					   type="text"
					   required
					   defaultValue={resort}/>

                <label htmlFor="date">date</label>
                <input id="date"
					   type="date"
					   required
                       defaultValue={date}
				/>

				<div>
                <input id="powder"
					   type="checkbox"
                       defaultChecked={powder}
				/>
                <label htmlFor="powder">Powder day</label>
				</div>
                <div>
                <input id="backcountry"
					   type="checkbox"
                       defaultChecked={backcountry}
				/>
					<label htmlFor="backcountry">Backcountry date</label>
				</div>
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