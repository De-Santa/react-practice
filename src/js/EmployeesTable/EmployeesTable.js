import React, { Component } from 'react';
import Table, {TableBody, TableCell, TableRow,} from 'material-ui/Table';
import EmployeesTableHead from './EmployeesTableHead';

class EmployeesTable extends Component {
	state = {
		order: 'desc'
	};

	handleRequestSort = (column) => {
		const orderBy = column;
		let order = 'desc';

		if (this.state.orderBy === orderBy && this.state.order === 'desc') {
			order = 'asc';
		}

		this.props.employees.sort(this.compare(orderBy, order));

		this.setState({ order, orderBy });
	};

	compare = (orderBy, order) => (a, b) =>{
		let comparison = 0;
		let valA = a[orderBy].toUpperCase();
		let valB = b[orderBy].toUpperCase();
		valA > valB
			? comparison = -1
			: comparison = 1;
		return ((order === 'desc')
							? (comparison * -1)
							: comparison
		);
	};

	render() {
		const { order, orderBy } = this.state;
		const { employees } = this.props;

		return (
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
		);
	}
}

export default EmployeesTable;