import {
  drawerWidth,
  transition,
  container
} from "assets/jss/material-dashboard-react.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
	overflow: "hidden",
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    // overflow: "auto",
	overflow: "hidden",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    // overflowScrolling: "touch",
	// paddingBottom: "100px"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container,
  map: {
    // marginTop: "70px",
    // marginTop: "0",
	// paddingBottom: "100px",
	// height: "75%"
  }
});

export default appStyle;
