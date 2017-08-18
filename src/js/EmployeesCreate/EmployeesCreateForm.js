import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class EmployeesCreateForm extends Component {

	static fieldsData() {
		return ([
			{ id: 'name', type: 'text', required: true, label: 'Имя', placeholder: 'Иван', helperText: 'Введите имя сотрудника' },
			{ id: 'surname', type: 'text', required: true, label: 'Фамилия', placeholder: 'Иванов', helperText: 'Введите фамилию сотрудника' },
			{ id: 'group', type: 'text', required: false, label: 'Отдел', placeholder: 'Руководство', helperText: 'Введите отдел сотрудника' }
		])
	}

	handleSubmit = (e) => {
		e.preventDefault();
		e.persist();

		console.log(this.props.employees.length);

		let newEmployee = {
			id: this.props.employees.length > 0
					? (this.props.employees.length + 1)
					: 1,
			name: e.target.name.value,
			surname: e.target.surname.value,
			group: e.target.group.value,
		};

		console.log(newEmployee.id);

		if (newEmployee.name === '' || newEmployee.surname === '') return alert('Необходимо ввести имя и фамилию сотрудника');

		this.props.onAddEmployee(newEmployee);
		alert('Профиль сотрудника создан');
		this.props.hideModal();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='app__create-form create-form'>
				{EmployeesCreateForm.fieldsData().map(field =>
					{return(
						<TextField
							key={field.id}
							name={field.id}
							type={field.type}
							required={field.required}
							label={field.label}
							InputProps={{ placeholder: field.placeholder}}
							helperText={field.helperText}
							fullWidth
							margin="normal"
						/>
					)}
				)}
				<Button type='submit' className='create-form__btn' color='primary'>Добавить сотрудника</Button>
			</form>
		);
	}
}

export default EmployeesCreateForm;