import React, {Component} from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import EmployeesTable from './EmployeesTable';
import EmployeesCards from './EmployeesCards';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	}
});

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
		const classes = this.props.classes;
		return (
			<Router>
				<div className="app">
					<nav className="app__nav main-nav">
						<Button component={Link} to="/" color="primary" className={'main-nav__btn ' + classes.button}>
							Главная
						</Button>

						<Button component={Link} to="/employeesTable" className={'main-nav__btn ' + classes.button}>
							Таблица сотрудников
						</Button>

						<Button component={Link} to="/employeesCards" className={'main-nav__btn ' + classes.button}>
							Карточки сотрудников
						</Button>

						<Button fab color="primary" aria-label="Добавить сотрудника" className={'main-nav__btn ' + classes.button}>
							<AddIcon />
						</Button>
					</nav>
					<div className="app__content">
						<Route
							path="/employeesTable"
							render = {() => <EmployeesTable employees={this.state.employees} />}
						/>

						<Route
							path="/employeesCards"
							render = {() => <EmployeesCards employees={this.state.employees} />}
						/>
					</div>
				</div>
			</Router>
		)
	}
}

EmployeesData.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeesData)