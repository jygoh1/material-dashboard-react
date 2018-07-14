import React from "react";
import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MapIcon from "@material-ui/icons/Map";
import AirportIcon from "@material-ui/icons/LocalAirport";

import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";


const infoColor = "#00acc1";
const styles = theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4
	},
	linkStyle: {
		textDecoration: "none"
	},
	whiteFont: {
		color: "#FFFFFF"
	},
	blue: {
		backgroundColor: infoColor,
		boxShadow:
		  "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)",
		"&:hover": {
		  backgroundColor: infoColor,
		  boxShadow:
			"0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
		}
	},
	alert: {
		backgroundColor: "#FF0000",
		boxShadow:
		  "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)",
		"&:hover": {
		  backgroundColor: "#FF0000",
		  boxShadow:
			"0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
		}
	}
// activeListItem: {
// backgroundColor: 'rgba(255, 255, 255, 0.12)',
// },
// activeListItem: {
// // backgroundColor: theme.palette.action.selected

// backgroundColor: infoColor,
// // boxShadow:
// // "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)",
// // "&:hover": {
// // backgroundColor: infoColor,
// // boxShadow:
// // "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
// // }
// }
});


class MyRoutes extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			open1: false,
			open2: false,
			open3: false,
			selected: null,
			alertTerminal: 1,
			alertLevel: 1,
			alertCamera: 1
		};
		this.handleClick1 = this.handleClick1.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
		this.handleClick3 = this.handleClick3.bind(this);
		this.cameraHasBeenAlerted = this.cameraHasBeenAlerted.bind(this);
	}

	handleClick1 = () => {
		this.setState(state => ({
			open1: !state.open1,
			alertLevel: null,
			// alertCamera: null
		}));
		if (this.state.alertTerminal === 1){
			this.setState(state => ({
				alertTerminal: null
			}));
		}
	};

	handleClick2 = () => {
		this.setState(state => ({
			open2: !state.open2,
			alertLevel: null,
			// alertCamera: null
		}));
		if (this.state.alertTerminal === 2){
			this.setState(state => ({
				alertTerminal: null
			}));
		}
	};

	handleClick3 = () => {
		this.setState(state => ({
			open3: !state.open3,
			alertLevel: null,
			// alertCamera: null
		}));
		if (this.state.alertTerminal === 3){
			this.setState(state => ({
				alertTerminal: null
			}));
		}
	};

	cameraHasBeenAlerted(){
		setTimeout(() => { 
			this.setState(() => ({alertCamera: ""})
		)}, 500);
	}
	
	updateSelected(selectedIndex, clickedOnAlert) {
		this.setState({ selected: selectedIndex });
		if (clickedOnAlert){
			this.setState({
				alertTerminal: null,
				alertLevel: null
			})
		}
	}

	
	// componentDidMount() {
		// this.intervalId = setInterval(this.timer.bind(this), 1000);
	// }
  
  
	// timer() {
		// const url = "https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json";

		// fetch(url)
			// .then(res => res.json())
			// .then(data => { 
			// this.setState({ markers: data.photos });
		// });
	// }
	
	
	// <NavLink to={{ pathname: "/maps/1/1", state: this.alertCamera }} className={classes.linkStyle} onClick={this.cameraHasBeenAlerted}>
	
				
	render() {
		const { classes } = this.props;

		return (
			<List component="nav">
			
				<NavLink to={ this.state.alertTerminal === 1 && this.state.alertLevel === 1 && this.state.alertCamera === null ? "/maps/1/1" : `/maps/1/1/${this.state.alertCamera}` } className={classes.linkStyle} onClick={this.cameraHasBeenAlerted}>
					<ListItem
						button
						className={classes.nested + " " + (this.state.alertTerminal === 1 && this.state.alertLevel === 1 ? classes.alert : (this.state.selected === 0 ? classes.blue : ""))}
						onClick={() => this.updateSelected(0, this.state.alertTerminal === 1 && this.state.alertLevel === 1)}
					>
						<ListItemIcon className={classes.whiteFont}>
							<AirportIcon />
						</ListItemIcon>
						<ListItemText className={classes.whiteFont} disableTypography={true} inset primary="T1 L1 - Arrival" />
					</ListItem>
				</NavLink>
				<NavLink to="/maps/1/2/" className={classes.linkStyle}>
					<ListItem
						button
						className={classes.nested + " " + (this.state.alertTerminal === 1 && this.state.alertLevel === 2 ? classes.alert : (this.state.selected === 1 ? classes.blue : ""))}
						onClick={() => this.updateSelected(1, this.state.alertTerminal === 1 && this.state.alertLevel === 2)}
					>
						<ListItemIcon className={classes.whiteFont}>
							<AirportIcon />
						</ListItemIcon>
						<ListItemText className={classes.whiteFont} disableTypography={true} inset primary="T1 L2 - Departure" />
					</ListItem>
				</NavLink>
				<NavLink to="/maps/2/1/" className={classes.linkStyle}>
					<ListItem
						button
						className={classes.nested + " " + (this.state.alertTerminal === 2 && this.state.alertLevel === 1 ? classes.alert : (this.state.selected === 2 ? classes.blue : ""))}
						onClick={() => this.updateSelected(2, this.state.alertTerminal === 2 && this.state.alertLevel === 1)}
					>
						<ListItemIcon className={classes.whiteFont}>
							<AirportIcon />
						</ListItemIcon>
						<ListItemText className={classes.whiteFont} disableTypography={true} inset primary="T2 L1 - Arrival" />
					</ListItem>
				</NavLink>
				<NavLink to="/maps/3/1/" className={classes.linkStyle}>
					<ListItem
						button
						className={classes.nested + " " + (this.state.alertTerminal === 3 && this.state.alertLevel === 1 ? classes.alert : (this.state.selected === 3 ? classes.blue : ""))}
						onClick={() => this.updateSelected(3, this.state.alertTerminal === 3 && this.state.alertLevel === 1)}
					>
						<ListItemIcon className={classes.whiteFont} >
							<AirportIcon />
						</ListItemIcon>
						<ListItemText className={classes.whiteFont} disableTypography={true} inset primary="T3 L1 - Arrival" />
					</ListItem>
				</NavLink>
				<NavLink to="/maps/3/2/" className={classes.linkStyle}>
					<ListItem
						button
						className={classes.nested + " " + (this.state.alertTerminal === 3 && this.state.alertLevel === 2 ? classes.alert : (this.state.selected === 4 ? classes.blue : ""))}
						onClick={() => this.updateSelected(4, this.state.alertTerminal === 3 && this.state.alertLevel === 2)}
					>
						<ListItemIcon className={classes.whiteFont} >
							<AirportIcon />
						</ListItemIcon>
						<ListItemText className={classes.whiteFont} disableTypography={true} inset primary="T3 L2 - Departure" />
					</ListItem>
				</NavLink>
					
			</List>
		);
		
		
		// return (
			// <List component="nav">
			
				// <NavLink to={`/maps/1/1/${this.state.alertCamera}`} className={classes.linkStyle}>
					// <ListItem button onClick={this.handleClick1} className={(this.state.alertTerminal === 1 ? classes.alert : "")}>
						// <ListItemIcon className={classes.whiteFont}>
							// <AirportIcon />
						// </ListItemIcon>
						// <ListItemText className={classes.whiteFont} disableTypography={true} inset primary="Terminal 1"/>
						// {this.state.open1 ? <ExpandLess className={classes.whiteFont} /> : <ExpandMore className={classes.whiteFont} />}
					// </ListItem>
				// </NavLink>
					// <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
							// <NavLink to={"/maps/1/1"} className={classes.linkStyle} >
								// <ListItem
									// button
									// className={classes.nested + " " + (this.state.alertTerminal === 1 && this.state.alertLevel === 1 ? classes.alert : (this.state.selected === 0 ? classes.blue : ""))}
									// onClick={() => this.updateSelected(0)}
								// >
									// <ListItemIcon className={classes.whiteFont}>
										// <MapIcon />
									// </ListItemIcon>
									// <ListItemText className={classes.whiteFont} disableTypography={true} inset primary="Level 1 - Arrival" />
								// </ListItem>
							// </NavLink>
							// <NavLink to="/maps/1/2/" className={classes.linkStyle}>
								// <ListItem
									// button
									// className={classes.nested + " " + (this.state.alertTerminal === 1 && this.state.alertLevel === 2 ? classes.alert : (this.state.selected === 1 ? classes.blue : ""))}
									// onClick={() => this.updateSelected(1)}
								// >
									// <ListItemIcon className={classes.whiteFont}>
										// <MapIcon />
									// </ListItemIcon>
									// <ListItemText className={classes.whiteFont} disableTypography={true} inset primary="Level 2 - Departure" />
								// </ListItem>
							// </NavLink>
					// </Collapse>

				// <ListItem button onClick={this.handleClick2} className={(this.state.alertTerminal === 2 ? classes.alert : "")}>
					// <ListItemIcon className={classes.whiteFont}>
						// <AirportIcon />
					// </ListItemIcon>
					// <ListItemText className={classes.whiteFont} disableTypography={true} inset primary="Terminal 2" />
					// {this.state.open2 ? <ExpandLess className={classes.whiteFont} /> : <ExpandMore className={classes.whiteFont} />}
				// </ListItem>
					// <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
						// <List component="div" disablePadding>
							// <NavLink to="/maps/2/1/" className={classes.linkStyle}>
								// <ListItem
									// button
									// className={classes.nested + " " + (this.state.alertTerminal === 2 && this.state.alertLevel === 1 ? classes.alert : (this.state.selected === 2 ? classes.blue : ""))}
									// onClick={() => this.updateSelected(2)}
								// >
									// <ListItemIcon className={classes.whiteFont}>
										// <MapIcon />
									// </ListItemIcon>
									// <ListItemText className={classes.whiteFont} disableTypography={true} inset primary="Level 1 - Arrival" />
								// </ListItem>
							// </NavLink>
						// </List>
					// </Collapse>

				// <ListItem button onClick={this.handleClick3} className={(this.state.alertTerminal === 3 ? classes.alert : "")}>
					// <ListItemIcon className={classes.whiteFont}>
						// <AirportIcon />
					// </ListItemIcon>
					
					// <ListItemText className={classes.whiteFont} disableTypography={true} inset primary="Terminal 3" />
					// {this.state.open3 ?
						// <ExpandLess className={classes.whiteFont} /> : <ExpandMore className={classes.whiteFont} />
					// }
				// </ListItem>
					// <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
						// <List component="div" disablePadding>
							// <NavLink to="/maps/3/1/" className={classes.linkStyle}>
								// <ListItem
									// button
									// className={classes.nested + " " + (this.state.alertTerminal === 3 && this.state.alertLevel === 1 ? classes.alert : (this.state.selected === 3 ? classes.blue : ""))}
									// onClick={() => this.updateSelected(3)}
								// >
									// <ListItemIcon className={classes.whiteFont} >
										// <MapIcon />
									// </ListItemIcon>
									// <ListItemText className={classes.whiteFont} disableTypography={true} inset primary="Level 1 - Arrival" />
								// </ListItem>
							// </NavLink>
							// <NavLink to="/maps/3/2/" className={classes.linkStyle}>
								// <ListItem
									// button
									// className={classes.nested + " " + (this.state.alertTerminal === 3 && this.state.alertLevel === 2 ? classes.alert : (this.state.selected === 4 ? classes.blue : ""))}
									// onClick={() => this.updateSelected(4)}
								// >
									// <ListItemIcon className={classes.whiteFont} >
										// <MapIcon />
									// </ListItemIcon>
									// <ListItemText className={classes.whiteFont} disableTypography={true} inset primary="Level 2 - Departure" />
								// </ListItem>
							// </NavLink>
						// </List>
					// </Collapse>
					
			// </List>
		// );
	}
}

export default withStyles(styles)(MyRoutes);