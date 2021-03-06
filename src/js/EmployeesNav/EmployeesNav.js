import React, {Component} from 'react';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom'
import EmployeesCreate from '../EmployeesCreate/EmployeesCreate'

class EmployeesNav extends Component {

	static routLinks() {
		return ([
			{ routeTo: '/home', label: 'Главная', btnColor: 'primary' },
			{ routeTo: '/employeesTable', label: 'Таблица сотрудников' },
			{ routeTo: '/employeesCards', label: 'Карточки сотрудников' },
		])
	}

	render() {
		return (
			<nav className="app__nav main-nav">

				{EmployeesNav.routLinks().map((link, index) => {
				return (
					<Button component={Link} to={link.routeTo} color={link.btnColor} className={'main-nav__btn'} key={index + 1}>
						{link.label}
					</Button>
				)
			})}
				<EmployeesCreate
					employees={this.props.employees}
					onAddEmployee={this.props.onAddEmployee}
				/>
			</nav>
		)
	}
}


export default EmployeesNav