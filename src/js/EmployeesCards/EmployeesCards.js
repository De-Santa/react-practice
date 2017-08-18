import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	card: {
		width: 250,
		marginBottom: 15,
		flexShrink: 0
	},
	title: {
		marginBottom: 16,
		fontSize: 14,
		color: theme.palette.text.secondary,
	},
	pos: {
		marginBottom: 12,
		color: theme.palette.text.secondary,
	},
});

class EmployeesCards extends Component {

	constructor(props) {
		super(props);
		this.state = {
			employees: props.employees
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({employees: nextProps.employees});
	}

	render() {
		const classes = this.props.classes;
		const {employees} = this.state;

		return (
			<div className="app__cards">
				{employees.map(employee => {
					return (
						<Card className={classes.card} key={employee.id}>
							<CardContent>
								<Typography type="headline" component="h2">
									{employee.name + ' ' + employee.surname}
								</Typography>
								<Typography type="body1" className={classes.pos}>
									{employee.group}
								</Typography>
							</CardContent>
						</Card>
					)
				})}
			</div>
		);
	}
}

EmployeesCards.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeesCards);