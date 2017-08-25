import React, { Component } from 'react';

class Vitals extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="patient_profile_route">
                <div className="vitals_route">
                    <table>
                        <tbody>
                            <tr id="vitals_head">
                                <th>Date</th>
                                <th>Time</th>
                                <th>Bloodpressure</th>
                                <th>Pulse</th>
                                <th>Temperature</th>
                                <th>Respiratory Rate</th>
                                <th>Saturation</th>
                                <th>Oxygen</th>
                            </tr>
                        </tbody>
                        {this.render_vitals()}
                    </table>

                    <div className="add_vitals_container">
                        <input name="vitals_date" type="date" placeholder="date" />
                        <input name="vitals_time" placeholder="time" />
                        <select name="vitals_bloodpressure" placeholder="bloodpressure" >
                            <option>systolic</option>
                            <option>diastolic</option>
                        </select>
                        <input name="vitals_pulse" type="number" placeholder="pulse" />
                        <input name="vitals_temperature" placeholder="temperature" />
                        <input name="vitals_respiratory_rate" placeholder="respiratory" />
                        <input name="vitals_saturation" placeholder="saturation" />
                        <input name="vitals_oxygen" placeholder="oxygen" />
                        <button onClick={() => this.add_vitals()}>Add vitals</button>
                    </div>
                </div>
            </div>
        );
    }

    add_vitals() {

        let date = document.querySelector("input[name=vitals_date]"),
            time = document.querySelector("input[name=vitals_time]"),
            blood_pressure = document.querySelector("select[name=vitals_bloodpressure]"),
            pulse = document.querySelector("input[name=vitals_pulse]"),
            temperature = document.querySelector("input[name=vitals_temperature]"),
            respiratory_rate = document.querySelector("input[name=vitals_respiratory_rate]"),
            saturation = document.querySelector("input[name=vitals_saturation]"),
            oxygen = document.querySelector("input[name=vitals_oxygen]")

        let vitals = {
            date: date.value,
            time: time.value,
            bloodpressure: blood_pressure.value,
            temperature: temperature.value,
            pulse: pulse.value,
            respiratory_rate: respiratory_rate.value,
            saturation: saturation.value,
            oxygen: oxygen.value
        }

        this.props.add_vitals(vitals, this.props.patient)
    }

    render_vitals() {
        return <tbody className="vitals_records">
            {this.props.patient.vitals.map((vital, x) =>
                <tr key={x}>
                    <th>{vital.date}</th>
                    <th>{vital.time}</th>
                    <th>{vital.bloodpressure}</th>
                    <th>{vital.pulse}</th>
                    <th>{vital.temperature}</th>
                    <th>{vital.respiratory_rate}</th>
                    <th>{vital.saturation}</th>
                    <th>{vital.oxygen}</th>
                </tr>)}</tbody>
    }
}


{/* date
time
bloodpressure, systolic /diastolic
pulse, integer
temperature, celsius
respiratory_rate, integer
saturation, percentage
oxygen ,liter */}
export default Vitals;