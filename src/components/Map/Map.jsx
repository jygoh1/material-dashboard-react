/* eslint-disable no-undef */	// for the new google.map. etc	

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";

// @material-ui/core components

// core components
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, GroundOverlay } from "react-google-maps";

import Camera from "assets/img/camera.png";
import Person from "assets/img/person.png";

// import Camera from "@material-ui/icons/PhotoCamera";
// import Store from "@material-ui/icons/Store";

// import mapStyle from "assets/jss/material-dashboard-react/components/mapStyle.jsx";

const iconBase = "https://maps.google.com/mapfiles/kml/shapes/";

const icons = {
	parking: {
		icon: iconBase + "parking_lot_maps.png"
	},
	library: {
		icon: iconBase + "library_maps.png"
	},
	info: {
		icon: iconBase + "info-i_maps.png"
	},
	cctv: {
		// icon: "https://cdn3.iconfinder.com/data/icons/casino-and-gambling/80/Casino_and_gambling_icons-08-512.png"
		icon: Camera
	},
	police: {
		icon: Person
	}
};

const features = [
	{
		position: { lat: 1.35442191564, lng: 103.9896310538 },
		type: "cctv"
	},	
	{
		position: { lat: 1.35425, lng: 103.9792310538 },
		type: "cctv"
	},	
	{
		position: { lat: 1.35442191564, lng: 103.9836310538 },
		type: "cctv"
	},	
	{
		position: { lat: 1.35442191564, lng: 103.9866310538 },
		type: "police"
	},	
];


const Map = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBnm0JMn2nXJ-j5tl1SDBSgL886ngdOHOY&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: "100%" }} />,
		containerElement: <div style={{ height: "400px" }} />,
		mapElement: <div style={{ height: "100%" }} />
	}),
	withScriptjs,
	withGoogleMap
	)((props) =>
	<GoogleMap
		defaultZoom={16}
		defaultCenter={{ lat: 1.35442191564, lng: 103.986631053 }}
		defaultHeading={150}
		defaultTilt={45}
		options={{ scrollwheel: false }}	// disable mouse scroll zoom
		ref={(ref) => { this.ref = ref; }}
		onClick={() => console.log(this.ref.getBounds())}	// for getBounds(): .b.b and .b.f (lower and upper lng); .f.b and .f.f (lower and upper lat)
		// defaultMapTypeId={"satellite"}
		// onIdle={props.onMapIdle}	// use onIdle to make sure map is ready
	>
		<GroundOverlay
		  defaultUrl="https://www.hellokittyorchidgarden.com/uploads/7/5/3/0/75308501/7563860_1_orig.png"
		  defaultBounds={new google.maps.LatLngBounds(
			new google.maps.LatLng(1.3501315764385158, 103.97433580687573),
			new google.maps.LatLng(1.3587122472456985, 103.99892629912426)
		  )}
		  defaultOpacity={1}
		/>
		{features.map((feature, key) => (
			<Marker
				key={key}
				position={{ lat: feature.position.lat, lng: feature.position.lng }}
				icon={{
					url: icons[feature.type].icon,
					size: { height: 100, width: 100 },
					scaledSize: { height: 30, width: 30 },
					anchor: { x: 15, y: 15 }
				}}
			/>
		))}
	</GoogleMap>
);

export default Map;

// const Map = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  // function activeRoute(routeName) {
    // return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  // }
  // const { classes, color, logo, image, logoText, routes } = props;
  // var links = (
    // <List className={classes.list}>
      // {routes.map((prop, key) => {
        // if (prop.redirect) return null;
        // var listItemClasses = classNames({
			// [" " + classes[color]]: activeRoute(prop.path)
		// });
        // const whiteFontClasses = classNames({
          // [" " + classes.whiteFont]: activeRoute(prop.path)
        // });
        // return (
          // <NavLink
            // to={prop.path}
            // className={classes.item}
            // activeClassName="active"
            // key={key}
          // >
            // <ListItem button className={classes.itemLink + listItemClasses}>
              // <ListItemIcon className={classes.whiteFont}className={classes.itemIcon + whiteFontClasses}>
                // <prop.icon />
              // </ListItemIcon>
              // <ListItemIcon className={classes.whiteFont}className={classes.whiteFont}>disableTypography={true}
                // primary={prop.sidebarName}
                // className={classes.itemText + whiteFontClasses}
                // disableTypography={true}
              // />
            // </ListItem>
          // </NavLink>
        // );
      // })}
    // </List>
  // );
  
  
  // var brand = (
    // <div className={classes.logo}>
      // <a href="https://www.creative-tim.com" className={classes.logoLink}>
        // <div className={classes.logoImage}>
          // <img src={logo} alt="logo" className={classes.img} />
        // </div>
        // {logoText}
      // </a>
    // </div>
  // );
  
  // var brand2 = (
    // <div className={classes.logo}>
      // <a href="https://www.google.com" className={classes.logoLink}>
        // <div className={classes.logoImage}>
          // <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/device-camera-icon.png" alt="logo" className={classes.img} style={{top:"16.5px"}}/>
        // </div>
		// Wilkommen
      // </a>
    // </div>
  // );
  
  
  // return (
    // <div>
      // <Hidden mdUp>
        // <Drawer
          // variant="temporary"
          // anchor="right"
          // open={props.open}
          // classes={{
            // paper: classes.drawerPaper
          // }}
          // onClose={props.handleDrawerToggle}
          // ModalProps={{
			// Better open performance on mobile
            // keepMounted: true 
          // }}
        // >
          // {brand}
          // <div className={classes.sidebarWrapper}>
            // <HeaderLinks />
            // {links}
          // </div>
          // {image !== undefined ? (
            // <div
              // className={classes.background}
              // style={{ backgroundImage: "url(" + image + ")" }}
            // />
          // ) : null}
        // </Drawer>
      // </Hidden>
      // <Hidden smDown>
        // <Drawer
          // anchor="left"
          // variant="permanent"
          // open
          // classes={{
            // paper: classes.drawerPaper
          // }}
        // >
		  // {brand}
          // <div className={classes.sidebarWrapper}>{links}</div>
          // {image !== undefined ? (
            // <div
              // className={classes.background}
              // style={{ backgroundImage: "url(" + image + ")" }}
            // />
          // ) : null}
        // </Drawer>
      // </Hidden>
    // </div>
  // );
// };

// Sidebar.propTypes = {
  // classes: PropTypes.object.isRequired
// };

// export default withStyles(sidebarStyle)(Sidebar);
