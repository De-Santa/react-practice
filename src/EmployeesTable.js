import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const columnData = [
	{ id: 'name', label: 'Имя' },
	{ id: 'surname', label: 'Фамилия' },
	{ id: 'group', label: 'Отдел' },
];

class EmployeesTableHead extends Component {

	createSortHandler = property => event => {
		this.props.onRequestSort(event, property);
	};

	render() {
		const { order, orderBy } = this.props;

		return (
			<TableHead>
				<TableRow>
					{columnData.map(column => {
						return (
							<TableCell key={column.id}>
								<TableSortLabel
									active={orderBy === column.id}
									direction={order}
									onClick={this.createSortHandler(column.id)}
								>
									{column.label}
								</TableSortLabel>
							</TableCell>
						);
					}, this)}
				</TableRow>
			</TableHead>
		);
	}
}

const styles = theme => ({
	paper: {
		width: '100%',
		overflowX: 'auto',
	},
});

class EmployeesTable extends Component {

	state = {
		order: 'desc',
		orderBy: 'surname',
		employees: []
	};

	compare = (orderBy, order) => (a, b) =>{
		let comparison = 0;
		let valA = a[orderBy].toUpperCase();
		let valB = b[orderBy].toUpperCase();
		valA > valB
			? comparison = 1
			: comparison = -1;
		return ((order === 'desc')
				? (comparison * -1)
				: comparison
		);
	};


	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.setState({employees: nextProps.employees});
	}

	handleRequestSort = (event, property) => {
		const orderBy = property;
		let order = 'desc';

		if (this.state.orderBy === property && this.state.order === 'desc') {
			order = 'asc';
		}

		const employees = this.state.employees.sort(this.compare(orderBy, order));

		this.setState({ employees, order, orderBy });
	};


	render() {
		const classes = this.props.classes;
		const { employees, order, orderBy } = this.state;

		return (
			<Paper className={classes.paper}>
				<Table>
					<EmployeesTableHead
						order={order}
						orderBy={orderBy}
						onRequestSort={this.handleRequestSort}
					/>
					<TableBody>
						{employees.map(employee => {
							return (
								<TableRow hover tabIndex="-1" key={employee.id}>
									<TableCell>{employee.name}</TableCell>
									<TableCell>{employee.surname}</TableCell>
									<TableCell>{employee.group}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

EmployeesTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeesTable);