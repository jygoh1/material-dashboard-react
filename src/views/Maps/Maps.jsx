/* eslint-disable no-undef */	// for the new google.map. etc	
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, GroundOverlay, Circle } from "react-google-maps";

import Footer from "components/Footer/Footer.jsx";


import Camera from "assets/img/camera.png";
import CameraAlert from "assets/img/camera_alert.png";
import CameraSelected from "assets/img/camera_sel.png";
import CameraAlertSelected from "assets/img/camera_alert_sel.png";

import Guard from "assets/img/person.png";
import GuardAlert from "assets/img/person_alert.png";
import GuardSelected from "assets/img/person_sel.png";
import GuardAlertSelected from "assets/img/person_alert_sel.png";

import Whitespace from "assets/img/whitespace.png";


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
	camera: {
		// icon: "https://cdn3.iconfinder.com/data/icons/casino-and-gambling/80/Casino_and_gambling_icons-08-512.png"
		icon: Camera
	},
	guard: {
		icon: Guard
	}
};

const alertIcons = {
	camera: {
		// icon: "https://cdn3.iconfinder.com/data/icons/casino-and-gambling/80/Casino_and_gambling_icons-08-512.png"
		icon: CameraAlert
	},
	guard: {
		icon: GuardAlert
	}
};

const selectedIcons = {
	camera: {
		// icon: "https://cdn3.iconfinder.com/data/icons/casino-and-gambling/80/Casino_and_gambling_icons-08-512.png"
		icon: CameraSelected
	},
	guard: {
		icon: GuardSelected
	}
};

const alertSelectedIcons = {
	camera: {
		icon: CameraAlertSelected
	},
	guard: {
		icon: GuardAlertSelected
	}
}

const features = [
	{
		// position: { lat: 1.35442191564, lng: 103.9896310538 },
		type: "guard"
	},	
	{
		// position: { lat: 1.35425, lng: 103.9792310538 },
		type: "camera"
	},	
	{
		// position: { lat: 1.35442191564, lng: 103.9836310538 },
		type: "camera"
	},	
	// {
		// position: { lat: 1.35442191564, lng: 103.9866310538 },
		// type: "camera"
	// },	
];


const fakePositions = [
	[
		[ 0.85, 100.5 ],
		[ 0.97, 98.95 ],
		[ 0.99, 100.6 ],
	],
	[
		[ 0.85, 100.4 ],
		[ 0.97, 98.95 ],
		[ 0.99, 100.6 ],
	],
	[
		[ 0.85, 100.3 ],
		[ 0.97, 98.95 ],
		[ 0.99, 100.6 ],
	],
	[
		[ 0.85, 100.4 ],
		[ 0.97, 98.95 ],
		[ 0.99, 100.6 ],
	],
];

const overlayURLs = [
	[
	],
	[
		"",
		"assets/img/T2_L2_Transit.png",
	],
	[
		"assets/img/T3_L1_Arrival.png",
		"assets/img/T3_L2_Transit.png"
	],
]

const CustomSkinMapWithFooter = withScriptjs(
  withGoogleMap(props => {
	  // let terminal = null;
	  // let level = null;
	  // let clickedCamera = null;
	  
	  // viewCameraFeed = (key) => {
		  // clickedCamera = key;
	  // }
	  
	  // let featurePositions = features.map((feature, key) => {
		  // { feature.position.lat, feature.position.lng }
	  // })
	  
	  // updatePositions = (key) => {
		  // featurePositions[key] 		  
	  // }
	  
	  // let createCircle = (coordinates) => {
		  // <Circle
			// defaultCenter={{ lat: coordinates[0], lng: coordinates[1] }}
		// />
	  // }
	  
		let iconURL = (featureType, key) => (
			props.camera === key ? alertSelectedIcons[featureType].icon : (props.clickedCamera === key ? selectedIcons[featureType].icon : icons[featureType].icon)
		)
		
		let iconSize = (key, bigger=38, smaller=31) => (
			props.camera === key || props.clickedCamera === key ? { height: bigger, width: bigger} : { height: smaller, width: smaller }
		)
	  
		let anchor = (key, bigger=19, smaller=15) => (
			props.camera === key || props.clickedCamera === key ? { x: bigger, y: bigger } : { x: smaller, y: smaller }
		)
	  
	  return(
		<div>
			<GoogleMap
				defaultZoom={props.defaultZoom}
				/*defaultCenter={{ lat: props.lat, lng: props.lng }}*/
				defaultCenter={props.defaultCenter}
				/*center={props.center}*/
				/*center={{lat: props.lat || 0, lng: props.lng || 0}}*/
			  defaultOptions={{
				scrollwheel: false,
				zoomControl: true,
				  streetViewControl: false,
				  scaleControl: false,
				  mapTypeControl: false,
				  panControl: false,
				  zoomControl: false,
				  rotateControl: false,
				  fullscreenControl: false,
				styles: [
				  {
					featureType: "water",
					stylers: [
					  { saturation: 43 },
					  { lightness: -11 },
					  { hue: "#0088ff" }
					]
				  },
				  {
					featureType: "road",
					elementType: "geometry.fill",
					stylers: [
					  { hue: "#ff0000" },
					  { saturation: -100 },
					  { lightness: 99 }
					]
				  },
				  {
					featureType: "road",
					elementType: "geometry.stroke",
					stylers: [{ color: "#808080" }, { lightness: 54 }]
				  },
				  {
					featureType: "landscape.man_made",
					elementType: "geometry.fill",
					stylers: [{ color: "#ece2d9" }]
				  },
				  {
					featureType: "poi.park",
					elementType: "geometry.fill",
					stylers: [{ color: "#ccdca1" }]
				  },
				  {
					featureType: "road",
					elementType: "labels.text.fill",
					stylers: [{ color: "#767676" }]
				  },
				  {
					featureType: "road",
					elementType: "labels.text.stroke",
					stylers: [{ color: "#ffffff" }]
				  },
				  { featureType: "poi", stylers: [{ visibility: "off" }] },
				  {
					featureType: "landscape.natural",
					elementType: "geometry.fill",
					stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
				  },
				  { featureType: "poi.park", stylers: [{ visibility: "on" }] },
				  {
					featureType: "poi.sports_complex",
					stylers: [{ visibility: "on" }]
				  },
				  { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
				  {
					featureType: "poi.business",
					stylers: [{ visibility: "simplified" }]
				  }
				]
			  }}
			>
				<GroundOverlay
				  defaultUrl={Whitespace}
				  defaultBounds={new google.maps.LatLngBounds(
					new google.maps.LatLng(0, 95),
					new google.maps.LatLng(2, 105)
				  )}
				  defaultOpacity={1}
				/>
				<GroundOverlay
				  defaultUrl="https://www.hellokittyorchidgarden.com/uploads/7/5/3/0/75308501/7563860_1_orig.png"
				  defaultBounds={new google.maps.LatLngBounds(
					new google.maps.LatLng(0.37, 98.25),
					new google.maps.LatLng(1.62, 101.75)
				  )}
				  defaultOpacity={1}
				/>
				{features.map((feature, key) => (
					<Marker
						key={key}
						position={{ lat: props.updatedPositions[key][0], lng: props.updatedPositions[key][1] }}
						icon={{
							url: iconURL(feature.type, key),
							// size: { height: 30, width: 30 },
							// scaledSize: { height: 30, width: 30 },
							size: iconSize(key),
							scaledSize: iconSize(key),
							// anchor: { x: 15, y: 15 },
							anchor: anchor(key),
							fillColor: "#00acc1"
						}}
						ref={marker => { this.marker = marker; }}
						onClick={() => { props.onMarkerClick(key) }}
					/>
				))}
				<Circle
				   options={{
					 fillColor: '#f00',
					 strokeColor: '#f00',
				   }}
					center={{ lat: props.circleCenter.lat, lng: props.circleCenter.lng }}
					radius={2}
					draggable={false}
				/>
			</GoogleMap>
			<Footer
				terminal={props.terminal}
				level={props.level}
				camera={props.clickedCamera === undefined ? props.camera : props.clickedCamera}
				iconURL="https://cdn3.iconfinder.com/data/icons/casino-and-gambling/80/Casino_and_gambling_icons-08-512.png"
			/>
		</div>
		);
	})
);


						// position={{ lat: props.updatedPositions[key].lat, lng: props.updatedPositions[key].lng }}
						
						// position= {{ lat: feature.position.lat, lng: feature.position.lng }}

				// <Marker
					// key={props.key}
					// position={{ lat: features[props.terminal].position.lat, lng: features[props.terminal].position.lng }}
					// icon={{
						// url: icons[features[props.terminal].type].icon,
						// size: { height: 30, width: 30 },
						// scaledSize: { height: 30, width: 30 },
						// anchor: { x: 15, y: 15 },
						// fillColor: "#00acc1"
					// }}
				// />
				
// function Maps({ ...props }) {
class Maps extends React.Component {
	
	constructor(props){
		super(props);
		this.assignCameraIndex = this.assignCameraIndex.bind(this);
		this.state = {
			clickedCamera: undefined,
			// updatedPositions: features.map((feature) => {
				// { feature.position.lat, feature.position.lng} 
			// }),
			updatedPositions: fakePositions[0],
			count: 0,
			circleCenter: { lat: 0, lng: 0 },
			alertCamera: props.camera
		};
		// alert(props.camera);
	}
	
	assignCameraIndex = (key) => {
		this.setState({
			clickedCamera: key,
			alertCamera: undefined
		});
	}
	
	timer() {
		this.setState({
			updatedPositions: fakePositions[this.state.count],
			count: this.state.count + 1
		})
		if(this.state.count > fakePositions.length - 1) { 
			this.setState({
				count: 0
			})
		}
		// alert(this.state.updatedPositions)
		// alert(fakePositions[0])
	}
	
	componentDidMount(){
		this.intervalId = setInterval(this.timer.bind(this), 1000);
	}
	
	componentWillUnmount(){
		clearInterval(this.intervalId);
	}
	
	
	  // handleMapMounted = (c) => {
		// if (!c || this.mapRef) return;
		// this.mapRef = c;
	  // };

	  // handleBoundsChanged = () => {
		// if (!this.mapRef) return;
		// const center = this.mapRef.getCenter();
		// const bounds = this.mapRef.getBounds();
	  // };
	  
	render(){
		const props = this.props;
	  return (
		<div>
			<CustomSkinMapWithFooter
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnm0JMn2nXJ-j5tl1SDBSgL886ngdOHOY&v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: "100%" }} />}
				containerElement={<div style={{ height: "63vh" }} />}
				mapElement={<div style={{ height: "100%" }} />}
				terminal={props.terminal}
				level={props.level}
				camera={this.state.alertCamera}
				defaultZoom={9}
				defaultCenter={{ lat: 1, lng: 100 }}
				onMarkerClick={this.assignCameraIndex}
				clickedCamera={this.state.clickedCamera}
				updatedPositions={this.state.updatedPositions}
				circleCenter={this.state.circleCenter}
			/>
		</div>
	  );
	}
}

export default Maps;
