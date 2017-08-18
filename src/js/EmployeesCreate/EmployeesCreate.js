import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import EmployeesCreateForm from './EmployeesCreateForm';
import Dialog, {
	DialogContent,
	DialogTitle
} from 'material-ui/Dialog';

class EmployeesCreate extends Component {

	state = {
		open: false,
	};

	handleRequestClose = () => {
		this.setState({ open: false });
	};

	render() {
		return (
			<div>
				<Button fab color="primary" onClick={() => this.setState({ open: true })}><AddIcon /></Button>
				<Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
					<DialogTitle>
						Добавить сотрудника
					</DialogTitle>
					<DialogContent>
						<EmployeesCreateForm
							employees={this.props.employees}
							onAddEmployee={this.props.onAddEmployee}
							hideModal={this.handleRequestClose}
						/>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

export default EmployeesCreate