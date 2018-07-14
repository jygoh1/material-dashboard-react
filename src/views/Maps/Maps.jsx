/* eslint-disable no-undef */	// for the new google.map. etc	
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, GroundOverlay } from "react-google-maps";

import Footer from "components/Footer/Footer.jsx";

import Camera from "assets/img/camera.png";
import Person from "assets/img/person.png";
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
	cctv: {
		// icon: "https://cdn3.iconfinder.com/data/icons/casino-and-gambling/80/Casino_and_gambling_icons-08-512.png"
		icon: Camera
	},
	police: {
		icon: Person
	}
};

// const features = [
	// {
		// position: { lat: 40.728817, lng: -73.998428 },
		// type: "info"
	// },
	// {
		// position: { lat: 40.738817, lng: -73.997428 },
		// type: "parking"
	// },
	// {
		// position: { lat: 40.748817, lng: -73.995428 },
		// type: "cctv"
	// },
	// {
		// position: { lat: 40.758817, lng: -73.999428 },
		// type: 'police'
	// }
// ];

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
		type: "info"
	},	
	{
		position: { lat: 1.35442191564, lng: 103.9866310538 },
		type: "police"
	},	
];

      // defaultZoom={13}
      // defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
	  
const CustomSkinMapWithFooter = withScriptjs(
  withGoogleMap(props => {
	  // let terminal = null;
	  // let level = null;
	  // let selectedCamera = null;
	  
	  // viewCameraFeed = (key) => {
		  // selectedCamera = key;
	  // }
	  
	  return(
		<div>
			<GoogleMap
				defaultZoom={16}
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
					new google.maps.LatLng(1.33861, 102.9729),
					new google.maps.LatLng(1.37022, 105.0004)
				  )}
				  defaultOpacity={1}
				/>
				<GroundOverlay
				  defaultUrl="https://www.hellokittyorchidgarden.com/uploads/7/5/3/0/75308501/7563860_1_orig.png"
				  defaultBounds={new google.maps.LatLngBounds(
					new google.maps.LatLng(1.34973, 103.9738),
					new google.maps.LatLng(1.35882, 103.9997)
				  )}
				  defaultOpacity={1}
				/>
				{features.map((feature, key) => (
					<Marker
						key={key}
						position={{ lat: feature.position.lat, lng: feature.position.lng }}
						icon={{
							url: icons[feature.type].icon,
							size: { height: 30, width: 30 },
							scaledSize: { height: 30, width: 30 },
							anchor: { x: 15, y: 15 },
							fillColor: "#00acc1"
						}}
						onClick={() => props.onMarkerClick(key)}
					/>
				))}
			</GoogleMap>
			<Footer
				terminal={props.terminal}
				level={props.level}
				camera={props.selectedCamera === undefined ? props.camera : props.selectedCamera}
				iconURL="https://cdn3.iconfinder.com/data/icons/casino-and-gambling/80/Casino_and_gambling_icons-08-512.png"
			/>
		</div>
		);
	})
);

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
			selectedCamera: undefined
		};
	}
	
	assignCameraIndex = (key) => {
		this.setState({
			selectedCamera: key
		});
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
				camera={props.camera}
				defaultCenter={{lat: 1.35442191564, lng: 103.986631053}}
				onMarkerClick={this.assignCameraIndex}
				selectedCamera={this.state.selectedCamera}
			/>
		</div>
	  );
	}
}

export default Maps;
