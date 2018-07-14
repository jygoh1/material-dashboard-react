import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle";

import ReactPlayer from 'react-player';
import videoStyle from "assets/css/videoStyle.jsx";


const videoURLs = [
	"https://www.youtube.com/watch?v=ysz5S6PUM-U",
	// "https://www.youtube.com/watch?v=zOmbtZtYOeM",
	// "https://www.youtube.com/watch?v=bW5TODxEmH8&t=1265s",
	require('assets/vid/output.mp4'),
	require('assets/vid/airport_static.mp4')
];

const videoHeight = "32vh";

function Footer({ ...props }) {
	const { classes } = props;
	
	const terminal = props.terminal;
	const level = props.level;
	const camera = props.camera;
	
	return (
	
		<div className={classes.footer}>
			<div >
				<div className={classes.left}>
					<div className={videoStyle.playerWrapper}>
						<ReactPlayer
							className={videoStyle.reactPlayer}
							url={videoURLs[camera]}
							playing
							height={videoHeight}
							width='100%'
						/>
					</div>
				</div>
				<div className={classes.center}>
					<div className={videoStyle.playerWrapper}>
						<ReactPlayer
							className={videoStyle.reactPlayer}
							url={videoURLs[camera]}
							playing
							height={videoHeight}
							width='100%'
						/>
					</div>
				</div>
				<div className={classes.right}>
					<div className={videoStyle.playerWrapper}>
						<div style={{height:videoHeight, backgroundColor: "#FF0000"}} />
					</div>
				</div>
			</div>
		</div>
	);
}
  // return (
    // <footer className={classes.footer}>
      // <div className={classes.container}>
        // <div className={classes.left}>
          // <List className={classes.list}>
            // <ListItem className={classes.inlineBlock}>
              // <a href="#home" className={classes.block}>
                // Home
              // </a>
            // </ListItem>
            // <ListItem className={classes.inlineBlock}>
              // <a href="#company" className={classes.block}>
                // Company
              // </a>
            // </ListItem>
            // <ListItem className={classes.inlineBlock}>
              // <a href="#portfolio" className={classes.block}>
                // Portfolio
              // </a>
            // </ListItem>
            // <ListItem className={classes.inlineBlock}>
              // <a href="#blog" className={classes.block}>
                // Blog
              // </a>
            // </ListItem>
          // </List>
        // </div>
        // <p className={classes.right}>
          // <span>
            // &copy; {1900 + new Date().getYear()}{" "}
            // <a href="https://www.creative-tim.com" className={classes.a}>
              // Creative Tim
            // </a>, made with love for a better web
          // </span>
        // </p>
      // </div>
    // </footer>
  // );
// }

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
