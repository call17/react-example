import { PropTypes, Component } from 'react'

export const AddDayFrom = ({ resort, date, powder, backcountry }) => {

	let _resort, _date, _powder, _backcountry
    const submit = (e) => {
        e.preventDefault()
        console.log("resort", _resort.value)
        console.log("date", _date.value)
        console.log("powder", _powder.checked)
        console.log("backcountry", _backcountry.checked)
    }

    return(
        <form className="add-day-form" onSubmit={submit}>
            <label htmlFor="resort">Resort name</label>
            <input id="resort"
                   type="text"
                   required
                   defaultValue={resort}
                   ref={input => _resort =  input}
            />

            <label htmlFor="date">date</label>
            <input id="date"
                   type="date"
                   required
                   defaultValue={date}
                   ref={input => _date =  input}
            />

            <div>
                <input id="powder"
                       type="checkbox"
                       defaultChecked={powder}
                       ref={input => _powder =  input}
                />
                <label htmlFor="powder">Powder day</label>
            </div>
            <div>
                <input id="backcountry"
                       type="checkbox"
                       defaultChecked={backcountry}
                       ref={input => _backcountry =  input}
                />
                <label htmlFor="backcountry">Backcountry date</label>
            </div>
            <button>
                Add Button
            </button>
        </form>
    )
}

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