import React, {Component} from 'react';
import axios from 'axios';
import EmployeesTable from './EmployeesTable';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

class EmployeesData extends Component {

	state = {
		employees: []
	};

	componentDidMount() {
		axios.get(`http://www.json-generator.com/api/json/get/cqsQOYONaq?indent=2`)
			.then(result => {
				const employees = result.data.map(function (obj, index) {
					obj.id = index + 1;
					return obj
				});
				this.setState({ employees });
			});
	}

	render() {
		return (
			<Router>
				<div className="">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/employeesTable">Таблица сотрудников</Link></li>
						<li><Link to="/topics">Topics</Link></li>
					</ul>
					<hr/>

					<Route
						path="/employeesTable"
						render = {() => <EmployeesTable employees={this.state.employees} />}
					/>

				</div>
			</Router>
		)
	}
}

export default EmployeesData