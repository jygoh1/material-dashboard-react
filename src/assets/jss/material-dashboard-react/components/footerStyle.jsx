import {
  defaultFont,
  container,
  primaryColor
} from "assets/jss/material-dashboard-react.jsx";

const vidWidth = "400px"
const vidPadding = "18px 9px"

const footerStyle = {
  block: {
    color: "inherit",
    // padding: "15px",
    textTransform: "uppercase",
    // borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    ...defaultFont,
    fontWeight: "500",
    fontSize: "12px"
  },
  left: {
	// float: "left!important",
	float: "left",
	marginLeft: "9px",
	// display: "block",
	width: vidWidth,
	padding: vidPadding,
  },
  right: {
    // padding: "15px 0",
    // margin: "0",
    // fontSize: "14px",
    // float: "right!important",
	float: "left",
	// display: "block",
	width: vidWidth,
	padding: vidPadding,
  },
  center: {
	  float: "left",
	// display: "block",
	  width: vidWidth,
	padding: vidPadding,
  },
  footer: {
    // bottom: "0",
    // borderTop: "1px solid #e7e7e7",
    // padding: "15px 0",
    ...defaultFont
  },
  container: {
	  height: "100%",
	  overflow: "hidden",
	  position: "relative"
  },
  container,
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    paddingTop: "0px",
    width: "auto"
  }
};
export default footerStyle;
