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
						<td>02:00-4:00pm</td>
						<td colspan="2">Developing Technical projects for humanity- HTA Workshop</td>
					</tr>
					<tr>
						<td>04:00-05:30pm</td>
						<td colspan="2">Inauguration Ceremony</td>
					</tr>
					<tr>
						<td>05:30-06:00pm</td>
						<td>Investing the Right Way</td>
						<td>CA Rachana Ranade</td>
					</tr>
					<tr>
						<td>06:00-06:30pm</td>
						<td className="break" colspan="2">
							<strong>COFFEE BREAK</strong>
						</td>
					</tr>
					<tr>
						<td>06:30- 7:10pm</td>
						<td>Indian Knowledge System</td>
						<td>Prof. Kshitij Patukale</td>
					</tr>
					<tr>
						<td>07:10- 7:30pm</td>
						<td>IEEE AESS India Membership Initiatives and Opportunities</td>
						<td>Mr. Puneet Mishra</td>
					</tr>
					<tr>
						<td rowspan="2">7:30-8:30pm</td>
						<td rowspan="2">Music Performance</td>
						<td>Swapnaja Lele</td>
					</tr>
					<tr>
						<td>Rohit Mhaskar</td>
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
						<td>07:30-08:00am</td>
						<td className="break" colspan="2">
							<strong>BREAKFAST</strong>
						</td>
					</tr>
					<tr>
						<td rowSpan="2">9:00-9:30am</td>
						<td rowSpan="2">IEEE Collabratec - Collaborate to Accelerate</td>
						<td>Mr. John Day</td>
					</tr>
					<tr>
						<td>Ms. Ramya Narendra</td>
					</tr>
					<tr>
						<td rowspan="3">9:30-10:00am</td>
						<td rowspan="3">Inspiration Station with IEEE Volunteers</td>
						<td>Mr. Akarsh Ashok</td>
					</tr>
					<tr>
						<td>Mr. Sai Prashanth</td>
					</tr>
					<tr>
						<td>Mr. Niranjan Kumar</td>
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
										<td>10:30-11:15am</td>
										<td>Technology for a Sustainable Future</td>
										<td>Mr. Dinanath Kholkar</td>
									</tr>
									<tr>
										<td rowspan="6">11:15-11:45am</td>
										<td rowspan="6">Unraveling the IEEE Potential</td>
										<td>Dr. Prerna Gaur</td>
									</tr>
									<tr>
										<td>Dr. Sri Niwas Singh</td>
									</tr>
									<tr>
										<td>Dr. R. B. Jadeja</td>
									</tr>
									<tr>
										<td>Dr. B. Satyanarayana</td>
									</tr>
									<tr>
										<td>Dr. K. Porkumaran</td>
									</tr>
									<tr>
										<td>Dr. Satish Singh</td>
									</tr>
									<tr>
										<td>11:45-1:00pm</td>
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
										<td>10:30-11:30am</td>
										<td>The Skill Drill</td>
										<td>Dr. Ravindra Dey</td>
									</tr>
									<tr>
										<td>11:30-12:00pm</td>
										<td>Benefits of being a YP</td>
										<td>Mr. Shahim Baker</td>
									</tr>
									<tr>
										<td>12:00-1:00pm</td>
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
										<td>Introduction to Cyber Psychology</td>
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
											<td>10:30 - 11:00am</td>
											<td>Engineering in Medicine Transforming Health Care</td>
											<td>Mr. Koruthu Varughese</td>
										</tr>
										<tr>
											<td>11:00 - 11:30am</td>
											<td>Engineering Strategic Systems</td>
											<td>Mr. R Muralidharan</td>
										</tr>
										<tr>
											<td>11:30-12:00pm</td>
											<td>Age is just a Number</td>
											<td>Mr. G. S. Mani</td>
										</tr>
										<tr>
											<td>12:00 - 12:30pm</td>
											<td>Climate Change</td>
											<td>Mr. Harbans L Bajaj</td>
										</tr>
										<tr>
											<td rowspan="4">12:30 - 01:30pm</td>
											<td rowspan="4">Panel Discussion</td>
											<td>Mr. Rajendra K. Asthana (Moderator)</td>
										</tr>
										<tr>
											<td>Mr. Sundaresh S.</td>
										</tr>
										<tr>
											<td>Mr. G. S. Mani</td>
										</tr>
										<tr>
											<td>Mr. Harbans L Bajaj</td>
										</tr>
										<tr>
											<td>03:00 - 07:00pm</td>
											<td colspan="2">Kelkar Museum Visit</td>
										</tr>
									</table>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>01:00-02:00pm</td>
						<td className="break" colspan="2">
							<strong>LUNCH</strong>
						</td>
					</tr>
					<tr>
						<td rowSpan="4">02:00-02:45pm</td>
						<td rowSpan="4">Chronicles of Eu-Reka</td>
						<td>Mr. Aniketh Shenoy</td>
					</tr>
					<tr>
						<td>Ms. Khushi Desarda</td>
					</tr>
					<tr>
						<td>Ms. Priyanka Jayakumar</td>
					</tr>
					<tr>
						<td>Mr. G.S. Mani</td>
					</tr>
					<tr>
						<td>02:45-03:15pm</td>
						<td>The GMRT: A technology gateway to reveal the mystery of the universe</td>
						<td>Dr. Jayanta Roy</td>
					</tr>
					<tr>
						<td>03:15-03:45pm</td>
						<td>StandUp Comedy</td>
						<td>Mr. Anil Ventro</td>
					</tr>
					<tr>
						<td>03:45-05:00pm</td>
						<td colspan="2">Networking Session</td>
					</tr>
					<tr>
						<td>05:30-07:00pm</td>
						<td colspan="2">Tea Break and National Integrity Exhibition</td>
					</tr>
					<tr>
						<td>07:00-08:00pm</td>
						<td colspan="2">Cultural Performance</td>
					</tr>
					<tr>
						<td>08:00-08:30pm</td>
						<td colspan="2">Dance Night</td>
					</tr>
					<tr>
						<td>08:30pm onwards</td>
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
					<td>07:00-08:00am</td>
					<td className="break" colspan="2">
						<strong>BREAKFAST</strong>
					</td>
				</tr>
				<tr>
					<td>09:30-10:15am</td>
					<td>Instill a Growth Mindset</td>
					<td>Dr. Dasmit Singh</td>
				</tr>
				<tr>
					<td>10:15-10:30am</td>
					<td colspan="2">IEEE Pune SPS</td>
				</tr>
				<tr>
					<td rowspan="2">10:30-11:00am</td>
					<td rowspan="2">Music Performance</td>
					<td>Nishad Mahagaonkar</td>
				</tr>
				<tr>
					<td>Atharva Vaishampayan</td>
				</tr>
				<tr>
					<td>11:00-11:30am</td>
					<td className="break" colspan="2">
						<strong>BREAK</strong>
					</td>
				</tr>
				<tr>
					<td>11:30-11:45am</td>
					<td>IEEE Computer Society: Membership & Opportunities</td>
					<td>Dr. Mohamed Rawidean Mohd Kassim</td>
				</tr>
				<tr>
					<td>11:45-12:30pm</td>
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
