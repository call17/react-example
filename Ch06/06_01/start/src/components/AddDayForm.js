import { PropTypes, Component } from 'react'

const tahoeResorts = [
    "Alpine Meadows",
    "Boreal",
    "Diamond Peak",
    "Donner Ski Ranch",
    "Heavenly",
    "Homewood",
    "Kirkwood",
    "Mt. Rose",
    "Northstar",
    "Squaw Valley",
    "Sugar Bowl"
]

class AutoComplete extends Component{
    getValue(){
        return this.refs.inputResort.value
    }
    setValue(inputValue){
        this.refs.inputResort.value = value
    }

    render(){
        return(
            <div>
                <input type="text"
                       list="tahoe-resorts"
                       ref="inputResort"
                />
                <datalist id="tahoe-resorts">
                    {this.props.options.map(
                        (opt,i) => <option key={i}>{opt}</option>
                    )}
                </datalist>
            </div>
        )
    }
}

export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay }) => {

	let _resort, _date, _powder, _backcountry
    const submit = (e) => {
        e.preventDefault()
        onNewDay(
            {
                resort:_resort.value,
                date: _date.value,
                powder: _powder.checked,
                backcountry: _backcountry.checked
            }
        )

        console.log("resort", _resort.value)
        console.log("date", _date.value)
        console.log("powder", _powder.checked)
        console.log("backcountry", _backcountry.checked)

        _resort.value = " "
        _date.value = " "
        _powder.checked = false
        _backcountry.checked = false
    }

    return(
        <form className="add-day-form" onSubmit={submit}>
            <label htmlFor="resort">Resort name</label>
            <AutoComplete options={tahoeResorts}
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