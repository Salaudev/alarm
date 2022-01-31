import AlarmWrapper from "./AlarmWrapper";
import UseSwitchesBasic from "../../Components/Switch/Switch";
import {Button, IconButton} from "@mui/material";
import {getTimes} from "../../Components/functions";
import {useEffect, useState} from "react";


const Alarm = () => {

	const [hours, setHours] = useState(0);
	const [minute, setMinute] = useState(0);
	const [secunds, setSeconds] = useState(0)

	const {dayWeak, hour, minutes, month, monthDay, sec} = getTimes();

	setInterval(() => {
		const {dayWeak, hour, minutes, month, sec} = getTimes();
		setHours(hour);
		setMinute(minutes);
		setSeconds(sec)
	}, 30000)

	return (
		<AlarmWrapper>
			<div className="row justify-content-center w-100" >
				<div className="col-md-6 col-lg-5 col-xxl-4 px-3 py-4">
					<div className="alarm-header w-100 text-center py-5">
						<p className="title">Upcoming alarm</p>
						<h2 className={"upcoming-time"}>6 hours 45 minutes</h2>
						<p className="now-time">{ `${dayWeak}, ${monthDay} ${month} ${hours} : ${minute}`}</p>
					</div>
					<div className="add-alarm">
						<IconButton className="addBtn"><i className={"fas fa-plus"}/></IconButton>
					</div>
					<ul className="alarms w-100">
						<li>
							<span className="hoursAndMinutes">03:34</span>
							<div className="options d-flex align-items-center justify-content-center">
								<div className="weakDays">
									<span>S</span>
									<span className={"active"}>M</span>
									<span>T</span>
									<span>W</span>
									<span className={"active"}>T</span>
									<span>F</span>
									<span>S</span>
								</div>
								<UseSwitchesBasic sx={{marginTop: "20px"}}/>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</AlarmWrapper>
	)
}

export default Alarm;