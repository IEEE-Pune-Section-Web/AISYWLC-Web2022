import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../../Layout/Container";
import "./Styles/Schedule.css";
export default function Schedule() {
	const tableToggle = (target) => {
		const item = target.nextElementSibling;
		if (item.style.display === "block") {
			item.style.display = "none";
		} else {
			item.style.display = "block";
		}
	};

	const day1 = (
		<div className="tabs-active" id="oct7">
			<table cellspacing="0px">
				<tbody>
					<tr>
						<td className="table-title" colspan="3">
							Friday - October 7<sup>th</sup>, 2022
						</td>
					</tr>
					<tr>
						<th>Timing</th>
						<th>Session</th>
						<th>Speaker</th>
					</tr>
					<tr>
						<td>04:00-05:00pm</td>
						<td colspan="2">Opening Ceremony</td>
					</tr>
					<tr>
						<td>5:00-5:45 pm</td>
						<td>Investing the Right Way</td>
						<td>CA Rachana Ranade</td>
					</tr>
					<tr>
						<td>5:45-6:15pm</td>
						<td className="break" colspan="2">
							<strong>COFFEE BREAK</strong>
						</td>
					</tr>
					<tr>
						<td>6:15- 7:15pm</td>
						<td colspan="2">Instill a Growth Mindset</td>
					</tr>
					<tr>
						<td>7:15-8:30pm</td>
						<td colspan="2">Cultural Performance</td>
					</tr>
					<tr>
						<td>8:30pm onwards</td>
						<td className="break" colspan="2">
							<strong>DINNER</strong>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

	const day2 = (
		<div className="tabs" id="oct8">
			<table cellspacing="0px">
				<tbody>
					<tr>
						<td className="table-title" colspan="3">
							Saturday - October 8<sup>th</sup>, 2022
						</td>
					</tr>
					<tr>
						<th>Timing</th>
						<th>Session</th>
						<th>Speaker</th>
					</tr>
					<tr>
						<td>8:30-9:00am</td>
						<td className="break" colspan="2">
							<strong>BREAKFAST</strong>
						</td>
					</tr>
					<tr>
						<td>9:00-9:30am</td>
						<td colspan="2">IEEE Collabratec - Collaborate to Accelerate</td>
					</tr>
					<tr>
						<td>9:30-10:00am</td>
						<td colspan="2">Diversity Hiring</td>
					</tr>
					<tr>
						<td>10:00-10:30am</td>
						<td className="break" colspan="2">
							<strong>COFFEE BREAK</strong>
						</td>
					</tr>
					<tr>
						<td rowspan="4">10:30-1:00pm</td>
						<td colspan="2">
							<div
								className="toggle-table-heading"
								onClick={(e) => tableToggle(e.target)}
							>
								Parallel Session: <strong>IEEE Students</strong>
							</div>
							<div className="toggle-table" id="SAC">
								<table cellspacing="0px">
									<tr>
										<th>Timing</th>
										<th>Session</th>
										<th>Speaker</th>
									</tr>
									<tr>
										<td>10:30-11:30am</td>
										<td>Technology for a Sustainable Future</td>
										<td>Mr. Dinanath Kholkar</td>
									</tr>
									<tr>
										<td>11:30-1:00pm</td>
										<td>Leadership as a Driver for Entrepreneurship</td>
										<td>Ms. Ishika Nirula</td>
									</tr>
								</table>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<div
								className="toggle-table-heading"
								onClick={(e) => tableToggle(e.target)}
							>
								Parallel Session: <strong>IEEE Young Professionals</strong>
							</div>
							<div className="toggle-table" id="YP">
								<table cellspacing="0px">
									<tr>
										<th>Timing</th>
										<th>Session</th>
										<th>Speaker</th>
									</tr>
									<tr>
										<td>10:30-11:45am</td>
										<td>The Skill Drill</td>
										<td>Dr. Ravindra Dey</td>
									</tr>
									<tr>
										<td>11:45-12:15pm</td>
										<td colspan="2">A Young Professional's Perspective</td>
									</tr>
									<tr>
										<td>12:15-1:00pm</td>
										<td>Systematic Inventive Thinking</td>
										<td>Mr. Suraj Chaurasiya</td>
									</tr>
								</table>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<div
								className="toggle-table-heading"
								onClick={(e) => tableToggle(e.target)}
							>
								Parallel Session: <strong>IEEE Women in Engineering</strong>
							</div>
							<div className="toggle-table" id="WIE">
								<table cellspacing="0px">
									<tr>
										<th>Timing</th>
										<th>Session</th>
										<th>Speaker</th>
									</tr>
									<tr>
										<td>10:30-11:15pm</td>
										<td>The Exceptional Go-getter's Tale</td>
										<td>Ms. Shalaka Verma</td>
									</tr>
									<tr>
										<td>11:15-12:00pm</td>
										<td>Cyber Security in Daily Life</td>
										<td>Ms. Nirali Bhatia</td>
									</tr>
									<tr>
										<td rowspan="4">12:00-1:00pm</td>
										<td rowspan="4">Hack the Career Break</td>
										<td>Dr. Mini Ulanat (Moderator)</td>
									</tr>
									<tr>
										<td>Dr. Ramalatha Marimuthu</td>
									</tr>
									<tr>
										<td>Lt. Col. Rohit Mishra</td>
									</tr>
									<tr>
										<td>Major Vandana Sharma</td>
									</tr>
								</table>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<div>
								<div
									className="toggle-table-heading"
									onClick={(e) => tableToggle(e.target)}
								>
									Parallel Session: <strong>IEEE Life Members</strong>
								</div>
								<div className="toggle-table" id="LM">
									<table cellspacing="0px">
										<tr>
											<th>Timing</th>
											<th>Session</th>
											<th>Speaker</th>
										</tr>
										<tr>
											<td>10:30-11:30am</td>
											<td colspan="2">EKAM Session</td>
										</tr>
										<tr>
											<td>11:30-12:30pm</td>
											<td colspan="2">Age is just a number</td>
										</tr>
										<tr>
											<td>12:30-1:00pm</td>
											<td colspan="2">Networking Session</td>
										</tr>
									</table>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>1:00-2:00pm</td>
						<td className="break" colspan="2">
							<strong>LUNCH</strong>
						</td>
					</tr>
					<tr>
						<td>2:00-2:45pm</td>
						<td colspan="2">Eu-Reka</td>
					</tr>
					<tr>
						<td>2:45-4:00pm</td>
						<td colspan="2">Networking Session</td>
					</tr>
					<tr>
						<td>4:00-5:30pm</td>
						<td colspan="2">Inspiration Station with IEEE Volunteers</td>
					</tr>
					<tr>
						<td>5:30-7:00pm</td>
						<td colspan="2">National Integrity (Exhibition)</td>
					</tr>
					<tr>
						<td>7:00-8:00pm</td>
						<td colspan="2">Musical Night</td>
					</tr>
					<tr>
						<td>8:00pm onwards</td>
						<td className="break" colspan="2">
							<strong>DINNER</strong>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

	const day3 = (
		<div className="tabs" id="oct9">
			<table cellspacing="0px">
				<tr>
					<td className="table-title" colspan="3">
						Sunday - October 9<sup>th</sup>, 2022
					</td>
				</tr>
				<tr>
					<th>Timing</th>
					<th>Session</th>
					<th>Speaker</th>
				</tr>
				<tr>
					<td>8:30-9:30am</td>
					<td className="break" colspan="2">
						<strong>BREAKFAST</strong>
					</td>
				</tr>
				<tr>
					<td>09:30-10:15am</td>
					<td>Indian Knowledge System</td>
					<td>Prof. Kshitij Patukale</td>
				</tr>
				<tr>
					<td>10:15- 10:45am</td>
					<td colspan="2">Celebrating 25 Years of WIE Formation</td>
				</tr>
				<tr>
					<td>10:45-11:30am</td>
					<td colspan="2">Music Performance</td>
				</tr>
				<tr>
					<td>11:30-12:15pm</td>
					<td colspan="2">Closing Ceremony</td>
				</tr>
				<tr>
					<td>12:30pm onwards</td>
					<td className="break" colspan="2">
						<strong>LUNCH & CHECKOUT</strong>
					</td>
				</tr>
			</table>
		</div>
	);

	const [day, setDate] = useState(1);

	const [table, setTable] = useState(day1);
	useEffect(() => {
		switch (day) {
			case 1:
				setTable(day1);
				break;
			case 2:
				setTable(day2);
				break;
			case 3:
				setTable(day3);
				break;

			default:
				setTable(day1);
				break;
		}
	}, [day]);

	return (
		<Container className="schedule"  >
			<div>
				<h1 className="Schedule_title">Event Schedule</h1>
			</div>
			<center>
				<div className="tab-action">
					<button className="action-button" onClick={() => setDate(1)}>
						<strong>
							October 7<sup>th</sup>, 2022
						</strong>
					</button>
					<button className="action-button" onClick={() => setDate(2)}>
						<strong>
							October 8<sup>th</sup>, 2022
						</strong>
					</button>
					<button className="action-button" onClick={() => setDate(3)}>
						<strong>
							October 9<sup>th</sup>, 2022
						</strong>
					</button>
				</div>
			</center>
			<div className="schedule">{table}</div>
		</Container>
	);
}
