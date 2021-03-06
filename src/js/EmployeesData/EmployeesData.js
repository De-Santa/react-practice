import React, {Component} from 'react';
import axios from 'axios';
import EmployeesNav from '../EmployeesNav/EmployeesNav';
import EmployeesTable from '../EmployeesTable/EmployeesTable';
import EmployeesCards from '../EmployeesCards/EmployeesCards';
import EmployeesStartScreen from '../EmployeesStartScreen/EmployeesStartScreen';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class EmployeesData extends Component {

	state = {
		employees: []
	};

	componentDidMount() {
		axios.get(`http://www.json-generator.com/api/json/get/cqsQOYONaq?indent=2`)
			.then(result => {
				const employees = result.data.map(function (employee, index) {
					employee.id = index + 1;
					return employee
				});
				this.setState({ employees });
			});
	}

	onAddEmployee = (newEmployee) => {
		this.setState({ employees: [ ...this.state.employees, newEmployee ] });
	};


	render() {
		return (
			<Router>
				<div className="app">
					<EmployeesNav
						employees={this.state.employees}
						onAddEmployee={this.onAddEmployee}
					/>
					<div className="app__content">
						<Route
							path="/home"
							render = {() => <EmployeesStartScreen />}
						/>
						<Route
							path="/employeesTable"
							render = {() => <EmployeesTable employees={this.state.employees} />}
						/>

						<Route
							path="/employeesCards"
							render = {() => <EmployeesCards employees={this.state.employees} />}
						/>
						<Redirect from="/" to="/home"/>
					</div>
				</div>
			</Router>
		)
	}
}

export default EmployeesData