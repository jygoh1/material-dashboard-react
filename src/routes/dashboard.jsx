// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";


const dashboardRoutes = [
  {
    path: "/maps/1/1",
    sidebarName: "Terminal 1",
    icon: LocationOn,
	terminal: 1,
	level: 1,
	// camera: 0,
    component: Maps
  },
  {
    path: "/maps/1/1/1",
    sidebarName: "Terminal 1",
    icon: LocationOn,
	terminal: 1,
	level: 1,
	camera: 1,
    component: Maps
  },
  {
    path: "/maps/1/2",
    sidebarName: "Terminal 1",
    icon: LocationOn,
	terminal: 1,
	level: 2,
	// camera: 0,
    component: Maps
  },
  {
    path: "/maps/2/1",
    sidebarName: "Terminal 2",
    icon: LocationOn,
	terminal: 2,
	level: 1,
	// camera: 0,
    component: Maps
  },
  {
    path: "/maps/3/1",
    sidebarName: "Terminal 3",
    icon: LocationOn,
	terminal: 3,
	level: 1,
	// camera: 0,
    component: Maps
  },
  {
    path: "/maps/3/2",
    sidebarName: "Terminal 3",
    icon: LocationOn,
	terminal: 3,
	level: 2,
	// camera: 0,
    component: Maps
  },
  { redirect: true, path: "/", to: "/maps/1/1", navbarName: "Redirect" }
];

// const dashboardRoutes = [
  // {
    // path: "/dashboard",
    // sidebarName: "Dashboard",
    // navbarName: "Material Dashboard",
    // icon: Dashboard,
	// terminal: 1,
	// level: 1,
    // component: DashboardPage
  // },
  // {
    // path: "/user",
    // sidebarName: "User Profile",
    // navbarName: "Profile",
    // icon: Person,
	// terminal: 1,
	// level: 1,
    // component: UserProfile
  // },
  // {
    // path: "/table",
    // sidebarName: "Table List",
    // navbarName: "Table List",
    // icon: ContentPaste,
	// terminal: 1,
	// level: 1,
    // component: TableList
  // },
  // {
    // path: "/typography",
    // sidebarName: "Typography",
    // navbarName: "Typography",
    // icon: LibraryBooks,
	// terminal: 1,
	// level: 1,
    // component: Typography
  // },
  // {
    // path: "/icons",
    // sidebarName: "Icons",
    // navbarName: "Icons",
    // icon: BubbleChart,
	// terminal: 1,
	// level: 1,
    // component: Icons
  // },
  // {
    // path: "/maps",
    // sidebarName: "Maps",
    // navbarName: "Map",
    // icon: LocationOn,
	// terminal: 1,
	// level: 1,
    // component: Maps
  // },
  // {
    // path: "/notifications",
    // sidebarName: "Notifications",
    // navbarName: "Notifications",
    // icon: Notifications,
	// terminal: 1,
	// level: 1,
    // component: NotificationsPage
  // },
  // { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
// ];

export default dashboardRoutes;
