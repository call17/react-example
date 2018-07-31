import { SkiDayRow} from "./SkiDayRow";
import {PropTypes } from 'react';

export const SkiDayList = ({days}) => (
    <table>
        <thead>
        <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>Backcountry</th>
        </tr>
        </thead>
        <tbody>
        {days.map((day, i) =>
            <SkiDayRow key={i}
                       {...day}/>
        )}
        </tbody>

    </table>
)

SkiDayList.propTypes = {
    days: function (props) {
        if (!Array.isArray(props.days)) {
            return new Error("should be array")
        } else if (!props.days.length){
            return new Error("SliDayList must have days")
        }else {
            return null
        }
    }
}