import React, { Component } from 'react';

class EmployeesStartScreen extends Component {

	handleRequestClose = () => {
		this.setState({ open: false });
	};

	render() {
		return (
			<div className="start-screen">
				<div className="start-screen__bg" />
				<div className="start-screen__content">
					<h1 className="start-screen__app-name">Работяга</h1>
					<p className="start-screen__app-descr">приложение для просмотра персонала</p>
				</div>
			</div>
		);
	}
}

export default EmployeesStartScreen