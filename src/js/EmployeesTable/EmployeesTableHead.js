import React, { Component } from 'react';
import {TableHead, TableRow, TableCell,  TableSortLabel} from 'material-ui/Table';

class EmployeesTableHead extends Component {

	static columnsData() {
		return ([
			{ id: 'name', label: 'Имя' },
			{ id: 'surname', label: 'Фамилия' },
			{ id: 'group', label: 'Отдел' },
		])
	}

	createSortHandler = property => event => {
		this.props.onRequestSort(event, property);
	};

	render() {
		const { order, orderBy } = this.props;

		return (
			<TableHead>
				<TableRow>
					{EmployeesTableHead.columnsData().map(column => {
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

export default EmployeesTableHead